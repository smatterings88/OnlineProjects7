import React, { useState, useRef, useEffect } from 'react';
import OpenAI from 'openai';
import { Send, Loader2 } from 'lucide-react';
import { marked } from 'marked';
import { saveContact } from '../lib/contact';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    return savedMessages ? JSON.parse(savedMessages) : [];
  });
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const lastMessageRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    inputRef.current?.focus();
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const thread = await openai.beta.threads.create();
      
      // Send all previous messages to maintain context
      for (const msg of messages) {
        await openai.beta.threads.messages.create(thread.id, {
          role: msg.role,
          content: msg.content
        });
      }
      
      // Send the new message
      await openai.beta.threads.messages.create(thread.id, {
        role: 'user',
        content: input
      });

      const run = await openai.beta.threads.runs.create(thread.id, {
        assistant_id: import.meta.env.VITE_OPENAI_ASSISTANT_ID
      });

      // Poll for completion
      let response;
      while (true) {
        const runStatus = await openai.beta.threads.runs.retrieve(
          thread.id,
          run.id
        );

        if (runStatus.status === 'requires_action' && runStatus.required_action?.type === 'submit_tool_outputs') {
          const toolCalls = runStatus.required_action.submit_tool_outputs.tool_calls;
          const toolOutputs = [];

          for (const toolCall of toolCalls) {
            if (toolCall.function.name === 'saveContact') {
              try {
                const args = JSON.parse(toolCall.function.arguments);
                const result = await saveContact({
                  from_name: args.name || 'Chat User',
                  from_email: args.email || 'no-email@provided.com',
                  phone: args.phone || null,
                  message: input,
                  service_category: 'chat_inquiry',
                  project_details: input,
                  budget: 'not_specified'
                });
                toolOutputs.push({
                  tool_call_id: toolCall.id,
                  output: JSON.stringify(result)
                });
              } catch (error) {
                console.error('Error in saveContact tool call:', error);
                toolOutputs.push({
                  tool_call_id: toolCall.id,
                  output: JSON.stringify({ error: 'Failed to save contact' })
                });
              }
            }
          }

          await openai.beta.threads.runs.submitToolOutputs(
            thread.id,
            run.id,
            { tool_outputs: toolOutputs }
          );
          continue;
        }
        
        if (runStatus.status === 'completed') {
          response = await openai.beta.threads.messages.list(thread.id);
          break;
        } else if (runStatus.status === 'failed') {
          throw new Error('Assistant response failed');
        }
        
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      if (response?.data[0]) {
        const assistantMessage = {
          role: 'assistant' as const,
          content: response.data[0].content[0].text.value
        };
        setMessages(prev => [...prev, assistantMessage]);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('I encountered an error. Please try again or refresh the page.');
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'I apologize, but I encountered an error. Please try again or refresh the page if the issue persists.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[500px] bg-white rounded-xl shadow-lg border border-secondary-200">
      <div className="p-4 border-b border-secondary-200 flex justify-between items-center">
        <h3 className="text-lg font-semibold text-secondary-900">Chat with Us</h3>
        <button
          onClick={() => {
            setMessages([]);
            setError(null);
            localStorage.removeItem('chatMessages');
          }}
          className="text-sm text-secondary-600 hover:text-secondary-900"
        >
          Clear Chat
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-secondary-50">
        {messages.length === 0 && (
          <div className="text-center text-secondary-500 py-4">
            Send a message to start the conversation
          </div>
        )}
        {messages.map((message, index) => (
          <div
            key={index}
            ref={index === messages.length - 1 ? lastMessageRef : null}
            className={`flex ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.role === 'user'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-secondary-900 shadow-sm border border-secondary-200'
              }`}
            >
              {message.role === 'assistant' ? (
                <div 
                  className="prose prose-sm max-w-none prose-headings:text-secondary-900 prose-p:text-secondary-800 prose-a:text-primary-600"
                  dangerouslySetInnerHTML={{ 
                    __html: marked(message.content, { breaks: true }) 
                  }} 
                />
              ) : (
                message.content
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white rounded-lg p-3 shadow-sm border border-secondary-200">
              <Loader2 className="w-5 h-5 animate-spin text-secondary-600" />
            </div>
          </div>
        )}
        {error && (
          <div className="bg-red-50 text-red-700 p-3 rounded-lg border border-red-200">
            {error}
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSubmit} className="p-4 border-t border-secondary-200 bg-white">
        <div className="flex space-x-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 input-field bg-secondary-50"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="btn btn-primary !py-2"
          >
            <Send size={20} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;