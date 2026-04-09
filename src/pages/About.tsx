import { motion, AnimatePresence } from 'motion/react';
import { History, Heart, Target, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const teachers = [
    { name: "Nisreen", role: "Founder & Lead Mentor", image: "https://picsum.photos/seed/nisreen/400/400", bio: "Over 30 years of experience in early childhood education." },
    { name: "Mrs. Fatima", role: "Senior Educator", image: "https://picsum.photos/seed/fatima/400/400", bio: "Specialist in child psychology and creative learning." },
    { name: "Ms. Zara", role: "Activity Coordinator", image: "https://picsum.photos/seed/zara/400/400", bio: "Expert in physical development and STEM activities." },
    { name: "Mrs. Gupta", role: "Literacy Coach", image: "https://picsum.photos/seed/gupta/400/400", bio: "Dedicated to fostering a love for reading and writing." },
  ];

  const nextTeacher = () => setCurrentIndex((prev) => (prev + 1) % teachers.length);
  const prevTeacher = () => setCurrentIndex((prev) => (prev - 1 + teachers.length) % teachers.length);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-quaternary/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6"
          >
            Our Story & Philosophy
          </motion.h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Over three decades of dedication to early childhood excellence in the heart of Mazgaon.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 text-secondary font-bold mb-4">
              <History size={24} />
              <span>30 Years of Expertise</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">A Legacy of Learning</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded by Nisreen, Kids Club began with a simple vision: to create a space where children feel as safe and loved as they do at home, while receiving world-class early education.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we are proud to be recognized as the #1 Pre School in Mazgaon, a testament to our unwavering commitment to the families we serve and the children we nurture.
            </p>
          </motion.div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/history/600/500" 
              alt="Kids Club History" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-tertiary p-8 rounded-2xl shadow-lg hidden md:block">
              <span className="text-4xl font-bold text-gray-800 block">30+</span>
              <span className="text-gray-600 font-medium">Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">What We Stand For</h2>
            <p className="text-gray-500">The core values that drive everything we do.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                <Heart className="text-quaternary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Nurturing Environment</h3>
              <p className="text-gray-600 leading-relaxed">
                We provide a warm, safe, and welcoming atmosphere where children can flourish. We believe that emotional security is the foundation of all learning.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-6">
                <Target className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Tailored Approach</h3>
              <p className="text-gray-600 leading-relaxed">
                Every child is unique. Our curriculum is designed to be flexible, ensuring that each child's individual strengths are celebrated and their specific needs are met.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Teachers Carousel */}
      <section className="py-24 bg-secondary/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Meet Our Dedicated Team</h2>
            <p className="text-gray-500">The heart and soul of Kids Club.</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-gray-100 flex flex-col md:flex-row items-center gap-10"
                >
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-secondary/20 shrink-0">
                    <img src={teachers[currentIndex].image} alt={teachers[currentIndex].name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-1">{teachers[currentIndex].name}</h3>
                    <p className="text-secondary font-bold mb-4">{teachers[currentIndex].role}</p>
                    <p className="text-gray-600 leading-relaxed italic">"{teachers[currentIndex].bio}"</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex justify-center gap-4 mt-10">
              <button 
                onClick={prevTeacher}
                className="p-4 bg-white border border-gray-200 rounded-full text-gray-600 hover:text-secondary hover:border-secondary transition-all shadow-sm"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextTeacher}
                className="p-4 bg-white border border-gray-200 rounded-full text-gray-600 hover:text-secondary hover:border-secondary transition-all shadow-sm"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
