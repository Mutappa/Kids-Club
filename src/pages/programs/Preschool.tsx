import { motion } from 'motion/react';
import { Users, CheckCircle2, ArrowRight, Heart, Star, BookOpen, Clock, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function Preschool() {
  const features = [
    { title: "Inclusive Environment", desc: "Expert support for all learning styles and individual needs.", icon: <Heart className="text-quaternary" /> },
    { title: "Holistic & Green", desc: "Focusing on cognitive growth and sustainable life habits through nature-play.", icon: <Star className="text-tertiary" /> },
    { title: "Safety & Brain Dev", desc: "Building strong neural foundations in a 100% secure, verified child-safe facility.", icon: <ShieldCheck className="text-primary" /> },
  ];

  return (
    <div className="bg-transparent">
      <SEO 
        title="Inclusive Preschool Program"
        description="Our premium preschool in Mazgaon for ages 2-5 offers holistic development, personalized care, and a safe, inclusive environment for neural growth and social skills."
      />
      {/* Hero */}
      <section className="bg-primary/10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-primary font-bold text-sm border border-primary/20">
                <Users size={18} />
                Ages 2 - 5 Years
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-secondary font-bold text-sm border border-secondary/20">
                <Clock size={18} />
                9:00 AM - 12:30 PM
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Preschool <span className="text-primary">Program</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Our core preschool program is designed to provide a nurturing and stimulating environment where children can explore, learn, and grow at their own pace.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Building Foundations for Life</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                At Kids Club, we believe that the early years are the most critical for a child's development. Our curriculum is carefully crafted to spark curiosity and foster a love for learning that lasts a lifetime.
              </p>
              <div className="space-y-6">
                {features.map((f, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 border border-gray-100">
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">{f.title}</h4>
                      <p className="text-sm text-gray-500">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://picsum.photos/seed/preschool-main/800/600" 
                alt="Preschool Activities" 
                className="rounded-[3rem] shadow-2xl border-8 border-white"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary p-8 rounded-3xl shadow-xl text-white hidden md:block max-w-[200px] text-center">
                <p className="text-lg font-bold">Personalized Attention</p>
                <p className="text-xs opacity-80 mt-1">Nurturing individual potential in every child.</p>
              </div>
            </motion.div>
          </div>

          {/* Curriculum Details */}
          <div className="bg-gray-50 rounded-[3rem] p-12 border border-gray-100">
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-12 text-center">What Your Child Will Learn</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Language & Literacy",
                "Mathematical Thinking",
                "Creative Arts & Expression",
                "Social & Emotional Skills",
                "Physical Development",
                "Scientific Discovery"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <CheckCircle2 className="text-quaternary shrink-0" />
                  <span className="font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Interested in our Preschool?</h2>
          <p className="text-lg text-gray-600 mb-10">
            Schedule a visit to see our classrooms in action and meet our dedicated teaching staff.
          </p>
          <Link to="/contact" className="px-10 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 inline-flex items-center gap-2">
            Book a Tour <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
