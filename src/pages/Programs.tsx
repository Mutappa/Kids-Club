import { motion } from 'motion/react';
import { BookOpen, Star, Users, CheckCircle2, ArrowRight, Clock, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Programs() {
  const programs = [
    {
      id: "preschool",
      title: "Preschool",
      icon: <Users className="text-primary" />,
      color: "bg-primary/5",
      borderColor: "border-primary/20",
      desc: "Our core preschool program focuses on holistic development through play-based learning and structured activities. We are all-inclusive and cater to all learning styles.",
      path: "/programs/preschool",
      timings: "9:00 AM - 12:30 PM (Mon-Fri)",
      features: [
        "Highly personalized teaching methodology",
        "Inclusive support for all learning styles",
        "Safety-first environment & verified staff",
        "Brain development & cognitive activities",
        "Language and literacy foundations"
      ],
      image: "https://picsum.photos/seed/preschool/600/400"
    },
    {
      id: "activity-club",
      title: "Activity Club",
      icon: <Star className="text-secondary" />,
      color: "bg-secondary/5",
      borderColor: "border-secondary/20",
      desc: "An after-school program designed to explore various hobbies and physical activities in a fun, green, and safe environment.",
      path: "/programs/activity-club",
      timings: "4:30 PM - 6:30 PM (Mon-Fri)",
      features: [
        "Advanced safety protocols for physical play",
        "STEM experiments for brain engagement",
        "Arts, crafts & sustainable workshops",
        "Drama and social skills development",
        "Inclusive interaction groups"
      ],
      image: "https://picsum.photos/seed/activity/600/400"
    },
    {
      id: "reading-circle",
      title: "Reading Circle",
      icon: <BookOpen className="text-quaternary" />,
      color: "bg-quaternary/5",
      borderColor: "border-quaternary/20",
      desc: "Fostering a lifelong love for literature through guided reading and storytelling sessions. Inclusive of all learning styles.",
      path: "/programs/reading-circle",
      timings: "11:00 AM - 1:00 PM (Saturdays)",
      features: [
        "Interactive storytelling for all levels",
        "Phonics & individual-focused literacy",
        "Vocabulary building & memory games",
        "Library exploration in a calm space",
        "Creative writing & creative thinking"
      ],
      image: "https://picsum.photos/seed/reading/600/400"
    }
  ];

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
            Our Specialized <span className="text-secondary">Programs</span>
          </motion.h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A curriculum designed to spark curiosity, build confidence, and prepare children for their future academic journey.
          </p>
        </div>
      </section>

      {/* Programs List */}
      <section className="programs-list-section">
        <div className="section-container space-y-20">
          {programs.map((program, idx) => (
            <div 
              key={program.id} 
              id={program.id} 
              className={`grid lg:grid-cols-2 gap-16 items-center scroll-mt-32 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={idx % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div className={`inline-flex items-center gap-2 px-4 py-2 ${program.color} rounded-full text-sm font-bold mb-6 border ${program.borderColor}`}>
                  {program.icon}
                  {program.title}
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">{program.title}</h2>
                <div className="flex items-center gap-2 text-secondary font-bold mb-4">
                  <Clock size={18} />
                  <span>{program.timings}</span>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {program.desc}
                </p>
                <ul className="space-y-4 mb-10">
                  {program.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle2 className="text-quaternary w-5 h-5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Link to={program.path} className="btn-primary">
                    Learn More <ArrowRight size={20} />
                  </Link>
                  <Link to="/contact" className="btn-secondary">
                    Inquire Now
                  </Link>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`relative ${idx % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Decorative background shape */}
                <div className={`absolute -inset-4 ${program.color} rounded-[3.5rem] -z-10 blur-2xl opacity-50`} />
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Poem Section */}
      <section className="philosophy-section">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white/60 p-12 rounded-[3rem] border border-white shadow-sm italic text-gray-700 leading-relaxed relative">
            <Quote className="absolute -top-6 -left-6 w-12 h-12 text-secondary/20 rotate-180" />
            <p className="text-lg md:text-xl relative z-10">
              "A child is like a butterfly in the wind unknown. Some can fly higher than others, but each one flies the best it can. Why compare one against the other? Each one is DIFFERENT. Each one is SPECIAL. Each one is BEAUTIFUL."
            </p>
            <Quote className="absolute -bottom-6 -right-6 w-12 h-12 text-secondary/20" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="highlights-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">Ready to start the journey?</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
            We believe in quality over quantity. By keeping our batches small and our focus sharp, we ensure that your child receives the dedication they deserve. Spaces for our upcoming term are filling fast as we prioritize individual attention for every student.
          </p>
          <Link to="/contact" className="px-10 py-5 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 inline-flex items-center gap-2">
            Schedule a Visit <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
