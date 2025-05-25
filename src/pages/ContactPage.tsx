import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import { Mail, MapPin, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | OnlineProjects.website</title>
        <meta 
          name="description" 
          content="Get in touch with OnlineProjects.website for a free quote on your project. We provide professional remote services for businesses and entrepreneurs."
        />
      </Helmet>
      
      <Hero
        title="Let's Talk About Your Project"
        subtitle="Tell us what you need, and we'll outline a path to success"
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">How It Works</h2>
              <ol className="space-y-4 mb-8">
                <li className="flex">
                  <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">1</span>
                  <p>Submit Your Details. We'll review and respond within 24 hours.</p>
                </li>
                <li className="flex">
                  <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">2</span>
                  <p>Schedule a Call. We'll dive into your goals and answer any questions.</p>
                </li>
                <li className="flex">
                  <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">3</span>
                  <p>Receive Your Proposal. A clear plan, timeline, and pricing—no surprises.</p>
                </li>
              </ol>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-secondary p-3 rounded-full mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <a 
                      href="mailto:info@onlineprojects.website" 
                      className="hover:underline"
                    >
                      info@onlineprojects.website
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary p-3 rounded-full mr-4">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Response Time</h3>
                    <p>We reply within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary p-3 rounded-full mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Location</h3>
                    <p>5th Floor, Regus Skytech IT Park Building A, McArthur Highway, Mabalacat City, Pampanga 2010, Philippines</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="section bg-secondary">
        <div className="container-custom text-center">
          <motion.h2 
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                className="bg-white p-6 rounded-lg shadow text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-lg font-bold mb-2">How quickly can you start my project?</h3>
                <p>We typically begin within 3–5 business days after you approve the proposal.</p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-lg font-bold mb-2">What pricing options do you offer?</h3>
                <p>Choose between project-based or retainer models—customized to your scope and budget.</p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-lg font-bold mb-2">Do you provide ongoing support?</h3>
                <p>Yes. We offer maintenance and support packages to keep your projects running smoothly.</p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-lg font-bold mb-2">How do we communicate?</h3>
                <p>We use email, video calls, and your preferred project management tools for transparent collaboration.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;