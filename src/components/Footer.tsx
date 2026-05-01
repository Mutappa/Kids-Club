import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Phone, Mail, Instagram, Facebook, Linkedin, MessageCircle, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo-link">
              <div className="footer-logo-container">
                <img 
                  src="/assets/images/logo.png" 
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
            <div className="footer-social-links mb-8">
              <motion.a 
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.instagram.com/nisreen_kidsclub/" target="_blank" rel="noopener noreferrer" className="social-icon-btn group/insta" aria-label="Instagram"
              >
                <Instagram size={18} className="group-hover/insta:text-pink-500 transition-colors" />
              </motion.a>
              <motion.a 
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://wa.me/919819457758" target="_blank" rel="noopener noreferrer" className="social-icon-btn group/wa" aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="group-hover/wa:text-green-500 transition-colors">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </motion.a>
              <motion.a 
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/nisreen-kids-club🏆📚-236755295?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="social-icon-btn group/li" aria-label="LinkedIn"
              >
                <Linkedin size={18} className="group-hover/li:text-blue-600 transition-colors" />
              </motion.a>
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
