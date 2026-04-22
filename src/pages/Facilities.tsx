import { motion } from 'motion/react';
import { Book, Shield, Clock, Brain, UserCheck } from 'lucide-react';

export default function Facilities() {
  return (
    <div className="bg-transparent">
      {/* Hero */}
      <section className="hero-simple">
        <div className="section-container text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6"
          >
            Safe Daycare & Facilities
          </motion.h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A home away from home, equipped with resources that inspire discovery, ensure safety, and promote inclusive brain development.
          </p>
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">Inclusive & Intentional Daycare</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We understand the trust parents place in us. Our daycare facility is designed to be a safe, hygienic, and stimulating environment where all children can flourish irrespective of their learning styles. Every corner is carefully curated to minimize overstimulation while maximizing engagement.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Under constant, empathetic supervision, children enjoy a space that feels like a second home. We use non-toxic materials and maintain rigorous cleaning protocols to ensure a healthy and happy sanctuary for discovery and rest.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Brain className="text-primary shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-800">Brain Development</h4>
                  <p className="text-sm text-gray-500">Activities mapped to neural milestones.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <UserCheck className="text-tertiary shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-800">Verified Safety</h4>
                  <p className="text-sm text-gray-500">100% verified staff & CCTV monitoring.</p>
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
              alt="Safe daycare environment" 
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">The Children's Library</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our library is a magical corner filled with age-appropriate books that spark imagination and wonder. It's a quiet sanctuary where stories come to life, allowing children to travel to distant lands and meet fascinating characters through the power of words.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We hold regular storytelling sessions and interactive reading circles to foster a lifelong love for literature from a very young age. This space is designed to be accessible and inviting, encouraging even our youngest members to pick up a book and explore.
            </p>
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
