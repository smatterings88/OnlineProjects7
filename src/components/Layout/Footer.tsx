import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Instagram, Twitter, Linkedin, Facebook, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="block mb-4">
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/localistaph-41690.firebasestorage.app/o/business-images%2F1748065957757-5.png?alt=media&token=2b38ca8d-6c95-45a2-8f82-0fa720169cc3"
                alt="OnlineProjects" 
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="mb-4">
              OnlineProjects.website is your partner for fast, reliable, and affordable online services.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter size={20} className="hover:text-gray-600" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={20} className="hover:text-gray-600" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={20} className="hover:text-gray-600" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} className="hover:text-gray-600" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <nav>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:underline">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">About Us</Link>
                </li>
                <li>
                  <Link to="/services" className="hover:underline">Services</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:underline">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="flex items-start mb-2">
              <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
              <span>5th Floor, Regus Skytech IT Park Building A, McArthur Highway, Mabalacat City, Pampanga 2010, Philippines</span>
            </p>
            <p className="flex items-center mb-2">
              <Mail size={16} className="mr-2" />
              <a href="mailto:info@onlineprojects.website" className="hover:underline">
                info@onlineprojects.website
              </a>
            </p>
            <p className="mb-4">We reply within 24 hours</p>
            <Link to="/contact" className="btn btn-primary">
              Get a Free Quote
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-300 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} OnlineProjects.website. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <Link to="/privacy" className="hover:underline mr-4">Privacy Policy</Link>
            <Link to="/terms" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;