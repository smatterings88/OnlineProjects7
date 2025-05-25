import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import services from '../data/services';
import { Star, CheckCircle, ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechStart Inc",
      content: "OnlineProjects delivered exceptional results for our web development needs. Their team's expertise and attention to detail exceeded our expectations.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Michael Rodriguez",
      role: "Marketing Director, GrowthLabs",
      content: "The AI solutions provided by OnlineProjects transformed our customer service operations. Highly recommended for any business looking to innovate.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Emily Thompson",
      role: "Founder, DigitalFirst",
      content: "Their virtual assistant services have been a game-changer for our productivity. Professional, reliable, and always delivering quality work.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <>
      <Helmet>
        <title>OnlineProjects.website | Expert Virtual Assistance, Web Development & AI Solutions</title>
        <meta 
          name="description" 
          content="Transform your business with our comprehensive digital services. Expert virtual assistance, web development, and AI solutions — all in one place."
        />
      </Helmet>
      
      <Hero
        title="Expert Virtual Assistance, Web Development & AI Solutions — All in One Place"
        subtitle="Transform your business with our comprehensive digital services. Get started today and experience the difference of working with professionals."
        primaryCTA={{ text: "Get Started", link: "/contact" }}
        secondaryCTA={{ text: "Explore Services", link: "/services" }}
        isHomepage
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Why Choose OnlineProjects?</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              We combine expertise, innovation, and reliability to deliver exceptional results for your business.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/services" 
              className="btn btn-secondary inline-flex items-center"
            >
              View All Services
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-secondary-50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Client Success Stories</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              See what our clients say about working with OnlineProjects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-secondary-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-secondary-600">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-secondary-600 mb-8">
                Join hundreds of satisfied clients who have elevated their business with our professional services.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" />
                  <span>Expert team with proven track record</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" />
                  <span>Customized solutions for your needs</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" />
                  <span>24/7 support and quick response time</span>
                </li>
              </ul>
              <Link to="/contact" className="btn btn-primary">
                Start Your Project
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1280" 
                alt="Team collaboration"
                className="rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;