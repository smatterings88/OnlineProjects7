import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import services from '../data/services';

const ServicesPage: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Helmet>
        <title>Our Services | OnlineProjects.website</title>
        <meta 
          name="description" 
          content="Professional remote services for businesses and entrepreneurs including web development, content creation, digital marketing, graphic design, and virtual assistant services."
        />
      </Helmet>
      
      <Hero
        title="Our Professional Services"
        subtitle="Comprehensive solutions to help your business thrive in the digital world"
        primaryCTA={{ text: "Get a Free Quote", link: "/contact" }}
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {services.map((service) => (
              <motion.div key={service.id} variants={item}>
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      <section className="section bg-secondary-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Approach
            </motion.h2>
            <motion.p 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We follow a structured process to ensure that every project is completed successfully and meets your expectations.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200"
              >
                <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center mb-4">1</div>
                <h3 className="text-xl font-bold mb-2">Discovery</h3>
                <p>We take time to understand your business goals, target audience, and specific requirements to create a tailored strategy.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200"
              >
                <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center mb-4">2</div>
                <h3 className="text-xl font-bold mb-2">Implementation</h3>
                <p>Our team executes the strategy with precision and expertise, keeping you updated throughout the process.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200"
              >
                <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center mb-4">3</div>
                <h3 className="text-xl font-bold mb-2">Refinement</h3>
                <p>We continuously measure results and make data-driven adjustments to optimize performance and achieve your goals.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      <section 
        className="py-24 relative bg-cover bg-center bg-fixed bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80")'
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/10"></div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 text-white drop-shadow-lg">Contact us today to discuss your needs and get a customized solution for your business.</p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a href="/contact" className="btn bg-white text-primary-600 hover:bg-white/90 hover:text-primary-700 shadow-lg hover:shadow-xl transition-all duration-300">
                Get a Free Quote
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;