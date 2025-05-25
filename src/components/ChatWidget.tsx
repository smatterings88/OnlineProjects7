import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Chat from './Chat';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <>
      {/* Floating Button */}
      <motion.button
        drag
        dragMomentum={false}
        dragConstraints={{
          left: -window.innerWidth + 100,
          right: 0,
          top: -window.innerHeight + 100,
          bottom: 0
        }}
        dragElastic={0}
        onDragEnd={(_, info) => {
          setPosition({
            x: position.x + info.offset.x,
            y: position.y + info.offset.y
          });
        }}
        style={{ x: position.x, y: position.y }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 transition-all duration-200 z-40 cursor-move"
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              style={{
                x: position.x,
                y: position.y
              }}
              className="fixed bottom-[100px] right-6 w-[400px] max-w-[calc(100vw-48px)] z-50"
            >
              <div className="relative">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute -top-2 -right-2 bg-white p-1 rounded-full shadow-md hover:bg-gray-100"
                  aria-label="Close chat"
                >
                  <X size={20} />
                </button>
                <Chat />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;