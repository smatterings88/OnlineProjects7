import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import { Users, Lightbulb, Target } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us | OnlineProjects.website</title>
        <meta 
          name="description" 
          content="Learn about OnlineProjects.website, your remote partner for digital success. Our mission, values, and approach to helping businesses succeed online."
        />
      </Helmet>
      
      <Hero
        title="Your Remote Partner for Digital Success"
        subtitle="Empowering businesses and entrepreneurs to thrive online"
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Mission
            </motion.h2>
            <motion.p 
              className="text-lg mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              At OnlineProjects, we believe top-tier digital services should be accessible, affordable, and delivered with excellence. We're committed to being your trusted partner—providing the expertise, creativity, and support you need to grow your online presence and achieve your goals.
            </motion.p>
          </div>
        </div>
      </section>
      
      <section className="section bg-secondary-50">
        <div className="container-custom">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Core Values
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-secondary-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users size={24} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Client Partnership</h3>
              <p>We treat every engagement as a true collaboration, listening deeply and acting on your priorities.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-secondary-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Lightbulb size={24} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Creative Excellence</h3>
              <p>Our solutions blend innovation with best practices to keep you ahead of the curve.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-secondary-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target size={24} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Results-Focused</h3>
              <p>Every project is measured by clear, achievable outcomes that drive real business impact.</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container-custom">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Who We Serve
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-secondary-50 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-4">Small Businesses</h3>
              <p>Cost-effective strategies that let you compete with larger players.</p>
            </motion.div>
            
            <motion.div 
              className="bg-secondary-50 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-4">Entrepreneurs & Startups</h3>
              <p>Scalable services that grow as you do, from MVPs to market leaders.</p>
            </motion.div>
            
            <motion.div 
              className="bg-secondary-50 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-4">Coaches & Creators</h3>
              <p>Professional platforms and content that showcase your expertise and engage your audience.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;