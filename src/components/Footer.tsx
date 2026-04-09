import { Link } from 'react-router-dom';
import { Heart, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <div className="h-20 flex items-center justify-center overflow-hidden">
                <img 
                  src="/logo.png" 
                  alt="Kids Club Logo" 
                  className="h-full w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Awarded #1 Pre School in Mazgaon. Providing a nurturing environment where children flourish for over 30 years.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-gray-800 mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><Link to="/about" className="hover:text-quaternary transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-quaternary transition-colors">Our Programs</Link></li>
              <li><Link to="/facilities" className="hover:text-quaternary transition-colors">Facilities</Link></li>
              <li><Link to="/gallery" className="hover:text-quaternary transition-colors">Gallery</Link></li>
              <li><Link to="/admin" className="hover:text-gray-400 transition-colors opacity-50">Admin Login</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-gray-800 mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-quaternary shrink-0" />
                <span>Mazgaon, Mumbai</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-quaternary shrink-0" />
                <span>+91 12345 67890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-quaternary shrink-0" />
                <span>info@kidsclubnisreen.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-gray-800 mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-quaternary hover:border-quaternary/30 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-quaternary hover:border-quaternary/30 transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-400 text-xs">
          <p>© {new Date().getFullYear()} Kids Club by Nisreen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
