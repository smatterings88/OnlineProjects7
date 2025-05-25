import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import services from '../data/services';
import { CheckCircle, ArrowRight } from 'lucide-react';

const getCtaBackground = (serviceId: string): string => {
  const backgrounds = {
    'ai-solutions': 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80',
    'web-development': 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80',
    'content-creation': 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80',
    'digital-marketing': 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80',
    'graphic-design': 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80',
    'virtual-assistant': 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80'
  };
  return backgrounds[serviceId as keyof typeof backgrounds] || backgrounds['web-development'];
};

const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = services.find(s => s.id === serviceId);
  
  if (!service) {
    return <Navigate to="/services" replace />;
  }
  
  const relatedServices = services
    .filter(s => s.id !== serviceId)
    .slice(0, 3);
  
  return (
    <>
      <Helmet>
        <title>{`${service.title} | OnlineProjects.website`}</title>
        <meta 
          name="description" 
          content={service.description}
        />
      </Helmet>
      
      <Hero
        title={service.title}
        subtitle={service.description}
        primaryCTA={{ text: "Get a Free Quote", link: "/contact" }}
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Overview</h2>
                <p className="mb-8 text-lg">{service.fullDescription}</p>
                
                <h2 className="text-2xl md:text-3xl font-bold mb-6">What We Offer</h2>
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-600 mr-2 flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-secondary p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Process</h3>
                  <ol className="space-y-4">
                    <li className="flex">
                      <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">1</span>
                      <div>
                        <p className="font-bold">Initial Consultation</p>
                        <p>We'll discuss your specific needs and goals to create a tailored approach.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">2</span>
                      <div>
                        <p className="font-bold">Strategy Development</p>
                        <p>We'll create a detailed plan and timeline for your project.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">3</span>
                      <div>
                        <p className="font-bold">Implementation</p>
                        <p>Our team will execute the strategy with regular updates and revisions.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">4</span>
                      <div>
                        <p className="font-bold">Review & Refinement</p>
                        <p>We'll measure results and make adjustments to optimize performance.</p>
                      </div>
                    </li>
                  </ol>
                </div>
                
                <div 
                  className="relative rounded-lg overflow-hidden"
                  style={{
                    backgroundImage: `url(${getCtaBackground(serviceId || '')})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="relative z-10 p-8">
                    <h3 className="text-xl font-bold mb-4 text-white drop-shadow-lg">Ready to Get Started?</h3>
                    <p className="mb-6 text-white drop-shadow-lg">Contact us today to discuss your project and get a customized quote.</p>
                    <Link to="/contact" className="btn bg-white text-black hover:bg-gray-100 shadow-lg">
                      Request a Quote
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-secondary p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Related Services</h3>
                  <ul className="space-y-4">
                    {relatedServices.map((relService) => (
                      <li key={relService.id}>
                        <Link 
                          to={`/services/${relService.id}`} 
                          className="flex items-center justify-between hover:underline"
                        >
                          <span>{relService.title}</span>
                          <ArrowRight size={16} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-secondary p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Why Choose Us</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                      <span>Experienced professionals</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                      <span>Tailored solutions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                      <span>Results-driven approach</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                      <span>Transparent communication</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                      <span>Ongoing support</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailPage;