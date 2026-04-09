import { motion } from 'motion/react';
import { BookOpen, Star, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Programs() {
  const programs = [
    {
      id: "preschool",
      title: "Preschool",
      icon: <Users className="text-primary" />,
      color: "bg-primary/5",
      borderColor: "border-primary/20",
      desc: "Our core preschool program focuses on holistic development through play-based learning and structured activities.",
      path: "/programs/preschool",
      features: [
        "Personalized 1:5 teacher-to-student ratio",
        "Language and literacy development",
        "Mathematical thinking and problem solving",
        "Social and emotional skill building",
        "Creative arts and music"
      ],
      image: "https://picsum.photos/seed/preschool/600/400"
    },
    {
      id: "activity-club",
      title: "Activity Club",
      icon: <Star className="text-secondary" />,
      color: "bg-secondary/5",
      borderColor: "border-secondary/20",
      desc: "An after-school program designed to explore various hobbies and physical activities in a fun environment.",
      path: "/programs/activity-club",
      features: [
        "Arts and crafts workshops",
        "Basic gymnastics and physical play",
        "STEM-based fun experiments",
        "Drama and role-play sessions",
        "Outdoor discovery time"
      ],
      image: "https://picsum.photos/seed/activity/600/400"
    },
    {
      id: "reading-circle",
      title: "Reading Circle",
      icon: <BookOpen className="text-quaternary" />,
      color: "bg-quaternary/5",
      borderColor: "border-quaternary/20",
      desc: "Fostering a lifelong love for literature through guided reading and storytelling sessions.",
      path: "/programs/reading-circle",
      features: [
        "Interactive storytelling sessions",
        "Phonics and early reading skills",
        "Vocabulary building games",
        "Library exploration time",
        "Creative writing for older kids"
      ],
      image: "https://picsum.photos/seed/reading/600/400"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
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
                  <Link to={program.path} className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                    Learn More <ArrowRight size={20} />
                  </Link>
                  <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-full font-bold hover:bg-gray-50 transition-all">
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

      {/* CTA */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">Ready to start the journey?</h2>
          <p className="text-lg text-gray-600 mb-10">
            Our 1:5 teacher-to-student ratio means spaces are limited. Contact us today to check availability for the upcoming term.
          </p>
          <Link to="/contact" className="px-10 py-5 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 inline-flex items-center gap-2">
            Schedule a Visit <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
