import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { History, Heart, Target, Sparkles, Sprout, Footprints, MessageCircle, Linkedin, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import SEO from '../components/SEO';

export default function About() {
  const [teacherIndex, setTeacherIndex] = useState(0);

  const teachers = [
    { name: "Nisreen Electricwala", role: "Director & Principal", image: "https://picsum.photos/seed/teacher1/400/400", bio: "With over three decades of mastery in early education, she spearheads our mission for inclusive and holistic child development." },
    { name: "Mrs. Fatima", role: "Senior Mentor", image: "https://picsum.photos/seed/teacher2/400/400", bio: "A specialist in cognitive psychology, focusing on personalized learning pathways for every unique mind." },
    { name: "Ms. Zara", role: "Activity Coordinator", image: "https://picsum.photos/seed/teacher3/400/400", bio: "Expert in physical development and STEM activities for young explorers." },
    { name: "Mrs. Gupta", role: "Literacy Coach", image: "https://picsum.photos/seed/teacher4/400/400", bio: "Fostering a love for reading and linguistic skills through storytelling." },
    { name: "Ms. Anaya", role: "Art Specialist", image: "https://picsum.photos/seed/teacher5/400/400", bio: "Encouraging self-expression through unconventional materials and methods." },
    { name: "Mr. Rohan", role: "Music & Movement", image: "https://picsum.photos/seed/teacher6/400/400", bio: "Bringing rhythm and joy to learning through daily musical sessions." },
    { name: "Mrs. Khan", role: "Student Support", image: "https://picsum.photos/seed/teacher7/400/400", bio: "Dedicated to providing personalized assistance for every child's unique needs." },
  ];

  const nextTeacher = () => setTeacherIndex((prev) => (prev + 1) % teachers.length);
  const prevTeacher = () => setTeacherIndex((prev) => (prev - 1 + teachers.length) % teachers.length);
  return (
    <div className="bg-transparent">
      <SEO 
        title="Our Story & Philosophy"
        description="Learn about our 30-year journey in Mazgaon, Mumbai. Understanding our inclusive, pro-green, and personalized approach to early childhood education."
      />
      {/* Hero */}
      <section className="hero-simple py-12 bg-primary/10">
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
          <div className="flex justify-center gap-4 mb-10">
            <Link to="/contact" className="bg-primary text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-all">
              Join Our Family
            </Link>
            <Link to="/gallery" className="bg-white border border-primary text-primary px-8 py-3 rounded-full font-bold shadow-sm hover:bg-primary/5 transition-all">
              Browse Gallery
            </Link>
          </div>
          <div className="quote-block inline-block">
            "A child is like a butterfly in the wind unknown. Some can fly higher than others, but each one flies the best it can. Why compare one against the other? Each one is <strong>DIFFERENT</strong>. Each one is <strong>SPECIAL</strong>. Each one is <strong>BEAUTIFUL</strong>."
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
              <span>30 Years of Teaching Kids</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6 font-display">A History of Care & Wisdom</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Established by Nisreen Electricwala in the vibrant community of Mazgaon, Kids Club began as a vision to offer children a smooth transition from the warmth of home to the structured world of school. For thirty years, we have adapted to modern educational needs while staying true to our original principles of kindness and discovery.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our story evolved from a small initiative into a complete learning center. We understood early on that children are not all the same; each has a different way of learning. This insight led us to embrace **education for everyone**, including neurodiverse learners, with specialized care and attention.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Consistently recognized as an excellent preschool, we take immense pride in having guided generations of kind and bright individuals. Our reputation is built on the trust of families who value character development as much as academic success.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/gallery" className="btn-secondary group">
                See Our Gallery <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/history/600/500" 
              alt="Kids Club History" 
              className="image-decorated w-full"
              referrerPolicy="no-referrer"
            />
            <div className="image-badge">
              <span className="text-4xl font-bold text-gray-800 block">30+</span>
              <span className="text-gray-600 font-medium">Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="philosophy-section">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">Integrity in Action</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-gray-500 max-w-2xl mx-auto italic">
              "We don't just teach values; we live them through every interaction and environment we create."
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="philosophy-card border-t-4 border-t-secondary hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
                <Heart size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">A Place for Everyone</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in the beauty of being different. Our doors are open to all children, providing a safe and adapted environment for neurodiverse learners. By celebrating differences, we teach our students kindness and understanding from the start.
              </p>
            </div>
            <div className="philosophy-card border-t-4 border-t-quaternary hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-quaternary/10 rounded-2xl flex items-center justify-center text-quaternary mb-6">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Personalized Learning</h3>
              <p className="text-gray-600 leading-relaxed">
                Instead of rigid lessons, we focus on watching and understanding how each child learns. Our small batches allow our teachers to understand each child's own needs, making sure they are challenged enough to grow but always supported enough to feel safe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pro-Green & Pro-Outdoors Sections */}
      <section className="pro-green-section py-16 bg-green-50/20">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src="https://picsum.photos/seed/green1/400/500" alt="Green lifestyle" className="rounded-3xl shadow-lg w-full h-[250px] object-cover" />
                  <img src="https://picsum.photos/seed/green2/400/300" alt="Outdoor play" className="rounded-3xl shadow-lg w-full h-[150px] object-cover" />
                </div>
                <div className="pt-8 space-y-4">
                  <img src="https://picsum.photos/seed/green3/400/300" alt="Nature learning" className="rounded-3xl shadow-lg w-full h-[150px] object-cover" />
                  <img src="https://picsum.photos/seed/green4/400/500" alt="Sustainable crafts" className="rounded-3xl shadow-lg w-full h-[250px] object-cover" />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-green-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <Sprout size={24} />
                </div>
                <div className="text-sm">
                  <p className="font-bold text-gray-800">Reduce, Reuse, Recycle</p>
                  <p className="text-gray-500">Core Environmental Philosophy</p>
                </div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <div className="flex items-center gap-3 text-green-600 font-bold mb-4">
                <Sprout size={24} />
                <span>Our Environmental Commitment</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-8 leading-tight">Pro-Green: Cultivating Mindful Citizens</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Ecological consciousness isn't just an elective at Kids Club; it's our fundamental way of being. We recognize that our students are the future stewards of our planet. Our "Pro-Green" ethos is woven into the very fabric of our school.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 shrink-0 mt-1">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Conscious Resource Use</h4>
                    <p className="text-gray-600 text-sm">We strictly avoid harmful plastics, opting for natural wood, upcycled materials, and organic components in all our interactive tools.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 shrink-0 mt-1">
                    <Footprints size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Respect for Nature</h4>
                    <p className="text-gray-600 text-sm mb-6">Students internalize the value of resource conservation, waste reduction, and organic gardening through immersive daily experiences.</p>
                    <Link to="/gallery" className="text-green-700 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                      Nature at Kids Club <ChevronRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pro-outdoors-section py-16 bg-white">
        <div className="section-container grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 text-primary font-bold mb-4">
              <Footprints size={24} />
              <span>Adventurous Spirits</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-8 leading-tight">Pro-Outdoors: Every Day is an Adventure</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Nature is the best teacher. Our "Pro-Outdoors" philosophy ensures that children aren't confined to four walls. We believe in messy play, dirt under fingernails, and the curious exploration of the outside world.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Outdoor learning fosters better motor skills, heightens sensory awareness, and significantly reduces screen dependency. Whether it's our garden exploration or outdoor STEM experiments, we make sure the sky is our only limit.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-3 bg-primary/10 rounded-full text-primary font-bold text-sm">Sensory Gardens</div>
              <div className="px-6 py-3 bg-secondary/10 rounded-full text-secondary font-bold text-sm">Messy Play Areas</div>
              <div className="px-6 py-3 bg-quaternary/10 rounded-full text-quaternary font-bold text-sm">Nature Observatories</div>
            </div>
          </motion.div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/outdoor-learning/800/800" 
              alt="Outdoor Learning" 
              className="rounded-[4rem] shadow-2xl border-8 border-white w-full h-[500px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="teacher-section">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">Meet Our Dedicated Team</h2>
            <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full mb-6" />
            <p className="text-gray-500">The heart and soul of Kids Club — mentors who care.</p>
          </div>

          <div className="relative max-w-4xl mx-auto px-12">
            <div className="relative overflow-hidden h-[500px] md:h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={teacherIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-white p-8 md:p-12 rounded-[3.5rem] shadow-xl border border-gray-100 flex flex-col md:flex-row items-center gap-10"
                >
                  <div className="w-40 h-40 md:w-56 md:h-56 rounded-[2rem] overflow-hidden border-4 border-secondary/20 shrink-0 shadow-lg">
                    <img 
                      src={teachers[teacherIndex].image} 
                      alt={teachers[teacherIndex].name} 
                      className="w-full h-full object-cover" 
                      referrerPolicy="no-referrer" 
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-1">{teachers[teacherIndex].name}</h3>
                    <p className="text-secondary font-bold text-lg mb-4">{teachers[teacherIndex].role}</p>
                    <p className="text-gray-600 leading-relaxed italic text-lg">"{teachers[teacherIndex].bio}"</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <button 
              onClick={prevTeacher}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-secondary hover:scale-110 transition-all z-30 border border-gray-100"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextTeacher}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-secondary hover:scale-110 transition-all z-30 border border-gray-100"
            >
              <ChevronRight size={24} />
            </button>
            
            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {teachers.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setTeacherIndex(idx)}
                  className={`h-2 transition-all rounded-full ${teacherIndex === idx ? 'w-8 bg-secondary' : 'w-2 bg-secondary/20'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
