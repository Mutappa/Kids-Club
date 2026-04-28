import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Book, Shield, Clock, Brain, UserCheck } from 'lucide-react';
import SEO from '../components/SEO';

export default function Facilities() {
  return (
    <div className="bg-transparent">
      <SEO 
        title="Safe Learning Spaces & Daycare"
        description="Our Mazgaon campus features safe learning rooms, an inclusive daycare, and a magical reading room. Designed to spark curiosity and ensure the highest safety for every child."
      />
      {/* Hero */}
      <section className="hero-simple py-12 bg-secondary/10">
        <div className="section-container text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6"
          >
            Safe Rooms & Learning Spaces
          </motion.h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            A second home for your child, filled with toys and books that spark curiosity, ensure full safety, and help every child learn at their own pace.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="bg-secondary text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-all">
              Book a Campus Tour
            </Link>
            <Link to="/gallery" className="bg-white border border-secondary text-secondary px-8 py-3 rounded-full font-bold shadow-sm hover:bg-secondary/5 transition-all">
              Go to Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Daycare Section */}
      <section className="visit-section">
        <div className="section-container grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-bold text-sm mb-6">
              <Shield size={16} />
              Safe & Secure
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">Inclusive Daycare</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              A second home for your child. Our daycare facility is designed to be safe, hygienic, and stimulating for all children.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Brain className="text-primary shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-800">Growth</h4>
                  <p className="text-sm text-gray-500">Activities for milestones.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <UserCheck className="text-tertiary shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-800">Safety</h4>
                  <p className="text-sm text-gray-500">Verified staff.</p>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://picsum.photos/seed/daycare/600/500" 
              alt="Safe daycare" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Library Section */}
      <section className="teacher-section">
        <div className="section-container grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <img 
              src="https://picsum.photos/seed/library/600/500" 
              alt="Children's library" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full text-secondary font-bold text-sm mb-6">
              <Book size={16} />
              Love for Reading
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">Our Reading Room</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our library is a magical corner filled with books that spark imagination and wonder. It's a quiet space where stories come to life, allowing children to learn and explore through the power of words.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We hold regular storytelling sessions and interactive reading circles to help children love books from a very young age. This space is easy to use and inviting, encouraging even our youngest members to pick up a book and explore.
            </p>
            <div className="mb-8">
              <Link to="/gallery" className="inline-flex items-center gap-2 text-secondary font-bold hover:gap-3 transition-all">
                See Our Reading Room <Shield size={18} />
              </Link>
            </div>
            <ul className="space-y-4">
              {[
                "Curated collection of picture books",
                "Comfortable reading nooks",
                "Interactive storytelling sessions",
                "Weekly book borrowing program"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
