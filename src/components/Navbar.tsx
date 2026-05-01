import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { 
      name: 'Programs', 
      path: '/programs',
      subLinks: [
        { name: 'Preschool', path: '/programs/preschool' },
        { name: 'Activity Club', path: '/programs/activity-club' },
        { name: 'Reading Circle', path: '/programs/reading-circle' },
      ]
    },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-content">
          <Link to="/" className="logo-wrapper">
            <div className="navbar-logo-container">
              <img 
              src="src\assets\images\logo.png"
                alt="Kids Club Logo" 
                className="navbar-logo"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="navbar-desktop">
            {navLinks.map((link) => (
              <div key={link.name} className="nav-item group">
                {link.subLinks ? (
                  <div 
                    className="nav-dropdown-trigger"
                    onMouseEnter={() => setIsProgramsOpen(true)}
                    onMouseLeave={() => setIsProgramsOpen(false)}
                  >
                    <span>{link.name}</span>
                    <ChevronDown size={16} className={`transition-transform duration-200 ${isProgramsOpen ? 'rotate-180' : ''}`} />
                    
                    <AnimatePresence>
                      {isProgramsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="nav-dropdown-menu"
                        >
                          {link.subLinks.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              className="nav-dropdown-link"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className="nav-link"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-toggle-wrapper">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mobile-menu-button"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-nav"
          >
            <div className="mobile-nav-inner">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.subLinks ? (
                    <div className="spacer-y-1">
                      <div className="mobile-nav-group-title">
                        {link.name}
                      </div>
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          onClick={() => setIsOpen(false)}
                          className="mobile-nav-sublink"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="mobile-nav-link"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
