import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCTA?: {
    text: string;
    link: string;
  };
  secondaryCTA?: {
    text: string;
    link: string;
  };
  isHomepage?: boolean;
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  primaryCTA, 
  secondaryCTA,
  isHomepage = false
}) => {
  return (
    <section 
      className={`relative bg-cover bg-center bg-no-repeat ${isHomepage ? 'pt-40 pb-32' : 'pt-32 pb-24'}`}
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1920")'
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/40"></div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-6 text-white">{title}</h1>
          <p className="text-lg md:text-xl mb-8 text-white/90">{subtitle}</p>
          
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {primaryCTA && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to={primaryCTA.link} 
                    className="btn btn-primary shadow-lg hover:shadow-xl w-full sm:w-auto"
                  >
                    {primaryCTA.text}
                  </Link>
                </motion.div>
              )}
              
              {secondaryCTA && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to={secondaryCTA.link} 
                    className="btn border-2 border-white text-white hover:bg-white/10 w-full sm:w-auto"
                  >
                    {secondaryCTA.text}
                  </Link>
                </motion.div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;