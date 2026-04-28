import { Link } from 'react-router-dom';
import { Heart, MapPin, Phone, Mail, Instagram, Facebook, Linkedin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo-link">
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
              <li><Link to="/admin" className="footer-admin-link">Admin Login</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-links-list">
              <li className="footer-contact-item">
                <MapPin size={18} className="footer-icon" />
                <span>73 R.Naik Road, Mathar Pakhadi Rd, Mazgaon, Mumbai 400010</span>
              </li>
              <li className="footer-contact-item-center">
                <Phone size={18} className="footer-icon" />
                <span>+91 98194 57758</span>
              </li>
              <li className="footer-contact-item-center">
                <Mail size={18} className="footer-icon" />
                <span>nisreenkidsclub@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Find Us</h4>
            <a 
              href="https://www.google.com/maps/place/Kids+Club+by+Nisreen/@18.9713022,72.8398292,829m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3be7cf07592b7ae9:0x2c808e5ad59c769e!8m2!3d18.9712971!4d72.8424041!16s%2Fg%2F11szfx_1f1"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-map-container block relative group rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
            >
              <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/5 transition-colors z-10"></div>
              <iframe 
                title="Mini Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15091.13961502422!2d72.83946282848529!3d18.963055915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf99e5a1b32d%3A0xc0f1fdf7983637e7!2sMazagaon%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1713810000000!5m2!1sen!2sin"
                className="iframe-base pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-500"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </a>
          </div>

          <div>
            <h4 className="footer-heading">Follow Us</h4>
            <div className="footer-social-links">
              <a href="https://www.instagram.com/nisreen_kidsclub/" target="_blank" rel="noopener noreferrer" className="social-icon-btn group/insta" aria-label="Instagram">
                <Instagram size={18} className="group-hover/insta:text-pink-500 transition-colors" />
              </a>
              <a href="https://wa.me/919819457758" target="_blank" rel="noopener noreferrer" className="social-icon-btn group/wa" aria-label="WhatsApp">
                <MessageCircle size={18} className="group-hover/wa:text-green-500 transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/nisreen-kids-club🏆📚-236755295?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="social-icon-btn group/li" aria-label="LinkedIn">
                <Linkedin size={18} className="group-hover/li:text-blue-600 transition-colors" />
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
