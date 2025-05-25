import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="block">
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/localistaph-41690.firebasestorage.app/o/business-images%2F1748065957757-5.png?alt=media&token=2b38ca8d-6c95-45a2-8f82-0fa720169cc3"
            alt="OnlineProjects" 
            className={`h-12 w-auto object-contain transition-all duration-300 ${
              !scrolled ? 'brightness-0 invert' : ''
            }`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `pb-1 transition-all ${
                    !scrolled ? 'text-white hover:text-white/80' : 'text-secondary-900 hover:text-secondary-700'
                  } ${isActive ? 'border-b-2 border-current' : 'hover:border-b-2 hover:border-current'}`
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `pb-1 transition-all ${
                    !scrolled ? 'text-white hover:text-white/80' : 'text-secondary-900 hover:text-secondary-700'
                  } ${isActive ? 'border-b-2 border-current' : 'hover:border-b-2 hover:border-current'}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/services" 
                className={({ isActive }) => 
                  `pb-1 transition-all ${
                    !scrolled ? 'text-white hover:text-white/80' : 'text-secondary-900 hover:text-secondary-700'
                  } ${isActive ? 'border-b-2 border-current' : 'hover:border-b-2 hover:border-current'}`
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `pb-1 transition-all ${
                    !scrolled ? 'text-white hover:text-white/80' : 'text-secondary-900 hover:text-secondary-700'
                  } ${isActive ? 'border-b-2 border-current' : 'hover:border-b-2 hover:border-current'}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden focus:outline-none ${!scrolled ? 'text-white' : 'text-secondary-900'}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 top-[72px] bg-white z-40 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="container-custom py-6">
              <ul className="flex flex-col space-y-4">
                <li>
                  <NavLink 
                    to="/" 
                    className={({ isActive }) => 
                      `block py-2 text-xl ${isActive ? 'text-primary-600 font-bold' : 'text-secondary-900'}`
                    }
                    onClick={toggleMenu}
                    end
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/about" 
                    className={({ isActive }) => 
                      `block py-2 text-xl ${isActive ? 'text-primary-600 font-bold' : 'text-secondary-900'}`
                    }
                    onClick={toggleMenu}
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/services" 
                    className={({ isActive }) => 
                      `block py-2 text-xl ${isActive ? 'text-primary-600 font-bold' : 'text-secondary-900'}`
                    }
                    onClick={toggleMenu}
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/contact" 
                    className={({ isActive }) => 
                      `block py-2 text-xl ${isActive ? 'text-primary-600 font-bold' : 'text-secondary-900'}`
                    }
                    onClick={toggleMenu}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;