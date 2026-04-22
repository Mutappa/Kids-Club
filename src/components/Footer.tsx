import { Link } from 'react-router-dom';
import { Heart, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="flex items-center mb-6">
              <div className="footer-logo-container">
                <img 
                  src="/logo.png" 
                  alt="Kids Club Logo" 
                  className="navbar-logo"
                />
              </div>
            </Link>
            <p className="footer-description">
              Awarded #1 Pre School in Mazgaon. Providing a nurturing environment where children flourish for over 30 years.
            </p>
          </div>

          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links-list">
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/programs" className="footer-link">Our Programs</Link></li>
              <li><Link to="/facilities" className="footer-link">Facilities</Link></li>
              <li><Link to="/gallery" className="footer-link">Gallery</Link></li>
              <li><Link to="/admin" className="hover:text-gray-400 transition-colors opacity-50">Admin Login</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-links-list">
              <li className="footer-contact-item">
                <MapPin size={18} className="footer-icon" />
                <span>Mazgaon, Mumbai</span>
              </li>
              <li className="footer-contact-item-center">
                <Phone size={18} className="footer-icon" />
                <span>+91 12345 67890</span>
              </li>
              <li className="footer-contact-item-center">
                <Mail size={18} className="footer-icon" />
                <span>info@kidsclubnisreen.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Follow Us</h4>
            <div className="footer-social-links">
              <a href="#" className="social-icon-btn">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-icon-btn">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-copyright-section">
          <p>© {new Date().getFullYear()} Kids Club by Nisreen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
