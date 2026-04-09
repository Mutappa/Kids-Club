import { motion } from 'motion/react';
import { Book, Shield, Clock, Coffee } from 'lucide-react';

export default function Facilities() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-tertiary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6"
          >
            Safe Daycare & Facilities
          </motion.h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A home away from home, equipped with resources that inspire discovery and ensure safety.
          </p>
        </div>
      </section>

      {/* Daycare Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-bold text-sm mb-6">
              <Shield size={16} />
              Safe & Secure
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">Our Daycare Environment</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              We understand the trust parents place in us. Our daycare facility is designed to be a safe, hygienic, and stimulating environment where children can rest, play, and grow under constant supervision.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Clock className="text-tertiary shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-800">Flexible Hours</h4>
                  <p className="text-sm text-gray-500">Supporting working parents.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Coffee className="text-tertiary shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-800">Nutritious Meals</h4>
                  <p className="text-sm text-gray-500">Healthy snacks provided.</p>
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
      <section className="py-24 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
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
            <p className="text-gray-600 leading-relaxed mb-8">
              Our library is a magical corner filled with age-appropriate books that spark imagination. We hold regular storytelling sessions to foster a lifelong love for reading and literature from a very young age.
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
