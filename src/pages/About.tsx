import { motion, AnimatePresence } from 'motion/react';
import { History, Heart, Target, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const teachers = [
    { name: "Nisreen", role: "Founder & Lead Mentor", image: "https://picsum.photos/seed/nisreen/400/400", bio: "Over 30 years of experience in early childhood education. Champion for inclusive and holistic learning." },
    { name: "Mrs. Fatima", role: "Senior Educator", image: "https://picsum.photos/seed/fatima/400/400", bio: "Specialist in child psychology and creative learning with a focus on neurodiversity." },
    { name: "Ms. Zara", role: "Activity Coordinator", image: "https://picsum.photos/seed/zara/400/400", bio: "Expert in physical development and STEM activities." },
    { name: "Mrs. Gupta", role: "Literacy Coach", image: "https://picsum.photos/seed/gupta/400/400", bio: "Dedicated to fostering a love for reading and writing." },
  ];

  const nextTeacher = () => setCurrentIndex((prev) => (prev + 1) % teachers.length);
  const prevTeacher = () => setCurrentIndex((prev) => (prev - 1 + teachers.length) % teachers.length);

  return (
    <div className="bg-transparent">
      {/* Hero */}
      <section className="hero-simple">
        <div className="section-container text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6"
          >
            Our Story & Philosophy
          </motion.h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Over three decades of dedication to early childhood excellence. We believe in a holistic, inclusive, and green approach to growing young minds.
          </p>
          <div className="quote-block inline-block">
            "A child is like a butterfly in the wind unknown. Some can fly higher than others, but each one flies the best it can. Why compare one against the other? Each one is DIFFERENT. Each one is SPECIAL. Each one is BEAUTIFUL."
          </div>
        </div>
      </section>

      {/* History */}
      <section className="history-section">
        <div className="section-container grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 text-secondary font-bold mb-4">
              <History size={24} />
              <span>30 Years of Educational Heritage</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">A Legacy of Love & Learning</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded by Nisreen in the heart of Mazgaon, Kids Club began as a dream to provide children with a transition from home to school that was seamless, nurturing, and deeply rooted in care. Over the last three decades, we have evolved with the changing needs of the community while keeping our core values of empathy and curiosity intact.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our journey started with a small group of children and a commitment to personalized observation. We recognized early on that no two children learn in the same way. This realization led us to become **all-inclusive**, creating specialized pathways for neurodiverse learners, including those on the autism spectrum.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Awarded as the #1 Pre School in Mazgaon, we take pride in having mentored generations of successful, kind, and inquisitive individuals. Our legacy is built on the trust of parents who seek a foundation that prioritizes character just as much as curriculum.
            </p>
          </motion.div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/history/600/500" 
              alt="Kids Club History" 
              className="image-decorated"
              referrerPolicy="no-referrer"
            />
            <div className="image-badge">
              <span className="text-4xl font-bold text-gray-800 block">30+</span>
              <span className="text-gray-600 font-medium">Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Sustainability */}
      <section className="highlights-section">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Holistic & Pro-Green</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">We nurture not just minds, but the environment and well-being through sustainable practices.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Sustainability First</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                From recycled materials in our crafts to energy-efficient habits, we teach children the importance of caring for our planet from day one.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                <Heart className="text-quaternary" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Neurodiversity Welcome</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our staff is trained to support children on the autism spectrum. We provide sensory-friendly spaces and tailored interaction methods to ensure everyone thrives.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-6">
                <History className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Holistic Growth</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We bridge the gap between academic foundation and emotional intelligence, ensuring children are prepared for both school and life.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Teachers Carousel */}
      <section className="teacher-section">
        <div className="section-container">
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

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1.5 bg-quaternary mx-auto rounded-full mb-6" />
            <p className="text-gray-500">Everything you need to know about Kids Club.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { 
                q: "What are your school timings?", 
                a: "Our core Preschool hours are 9:30 AM to 1:00 PM. For parents needing extended support, our Daycare services are available until 6:30 PM." 
              },
              { 
                q: "Do you have specific programs for neurodiverse children?", 
                a: "Yes, being all-inclusive is at the heart of our mission. Many of our students are on the autism spectrum, and we provide specialized sensory-friendly environments and personalized interaction methods to ensure they flourish." 
              },
              { 
                q: "What age can my child join?", 
                a: "We welcome children into our Playgroup program starting at 2 years of age. Our programs span up to 6 years of age for the Reading Circle." 
              },
              { 
                q: "How does the 'Pro-Green' philosophy work in daily school life?", 
                a: "We prioritize non-toxic, eco-friendly materials for our toys and crafts. We also teach children sustainable habits like water conservation, composting, and recycling through hands-on daily activities." 
              },
              { 
                q: "What is the transition process from home to school?", 
                a: "We offer a 'Gentle Start' period where parents can accompany their child for the first few days. This helps build a foundation of trust between the child, the teacher, and the new environment." 
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100"
              >
                <h4 className="text-lg font-bold text-secondary mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-xs">Q</span>
                  {faq.q}
                </h4>
                <p className="text-gray-600 leading-relaxed pl-11">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
