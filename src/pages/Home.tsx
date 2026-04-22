import { motion } from 'motion/react';
import { ArrowRight, Star, Users, BookOpen, ShieldCheck, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent of 3-year-old",
      text: "Kids Club has been a second home for my daughter. The 1:5 ratio is real—she gets so much individual attention!",
      image: "https://picsum.photos/seed/parent1/100/100"
    },
    {
      name: "David Chen",
      role: "Parent of 4-year-old",
      text: "The activity club is fantastic. My son comes home every day excited about the new things he's learned and built.",
      image: "https://picsum.photos/seed/parent2/100/100"
    },
    {
      name: "Priya Mehta",
      role: "Parent of 2-year-old",
      text: "Nisreen's expertise is evident in every corner of the school. It's the most nurturing environment I've seen in Mazgaon.",
      image: "https://picsum.photos/seed/parent3/100/100"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="section-container hero-inner">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-badge">
              <Star className="w-4 h-4 fill-primary" />
              Awarded #1 Pre School in Mazgaon
            </div>
            <h1 className="hero-title">
              Where Every Child <span className="text-primary">Flourishes</span>
            </h1>
            <p className="hero-description">
              Dedicated to providing a nurturing environment with over 30 years of expertise. 
              Our personalized 1:5 teacher-to-student ratio ensures your child's unique needs are always met.
            </p>
            <div className="hero-cta-container">
              <Link to="/contact" className="btn-primary">
                Enroll Now <ArrowRight size={20} />
              </Link>
              <Link to="/programs" className="btn-secondary">
                Explore Programs
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="hero-image-container"
          >
            <div className="hero-image-wrapper">
              <img 
                src="https://picsum.photos/seed/school-kids/800/800" 
                alt="Happy children at Kids Club" 
                className="hero-image"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-tertiary rounded-full -z-10 animate-pulse" />
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-quaternary rounded-[2rem] -z-10 rotate-12" />
          </motion.div>
        </div>
      </section>

      {/* Program Navigation Section */}
      <section className="py-20 bg-white">
        <div className="section-container text-center">
          <h2 className="section-title">Our Specialized Programs</h2>
          <div className="program-card-grid">
            {[
              { title: "Preschool", path: "/programs#preschool", color: "bg-primary/10 text-primary", icon: <Users /> },
              { title: "Activity Club", path: "/programs#activity-club", color: "bg-secondary/10 text-secondary", icon: <Star /> },
              { title: "Reading Circle", path: "/programs#reading-circle", color: "bg-quaternary/10 text-quaternary", icon: <BookOpen /> },
            ].map((prog) => (
              <Link 
                key={prog.title}
                to={prog.path}
                className={`program-card ${prog.color}`}
              >
                <div className="card-icon-container">
                  {prog.icon}
                </div>
                <span className="text-xl font-bold">{prog.title}</span>
                <ArrowRight size={20} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights-section">
        <div className="section-container">
          <div className="block-center">
            <h2 className="section-title mb-4 text-center">Why Choose Kids Club?</h2>
            <div className="section-accent-line bg-primary" />
          </div>

          <div className="highlights-grid">
            {[
              {
                icon: <Users className="text-secondary" />,
                title: "1:5 Ratio",
                desc: "Highly personalized attention with our small class sizes.",
                color: "bg-secondary/5"
              },
              {
                icon: <BookOpen className="text-quaternary" />,
                title: "30+ Years Expertise",
                desc: "Decades of experience in early childhood education.",
                color: "bg-quaternary/5"
              },
              {
                icon: <ShieldCheck className="text-primary" />,
                title: "Safe Environment",
                desc: "A secure and nurturing space for children to explore.",
                color: "bg-primary/5"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className={`highlights-card ${item.color}`}
              >
                <div className="card-icon-container mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates & Pamphlets */}
      <section className="updates-section">
        <div className="section-container">
          <div className="block-center">
            <h2 className="section-title mb-4">Latest Updates & Pamphlets</h2>
            <div className="section-accent-line bg-secondary" />
            <p className="section-subtitle">Stay informed with our monthly planners and educational portions.</p>
          </div>

          <div className="pamphlet-grid">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="pamphlet-card"
            >
              <div className="pamphlet-image-wrapper">
                <img 
                  src="https://picsum.photos/seed/pamphlet1/800/1000" 
                  alt="Weekend Planner" 
                  className="pamphlet-image"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
              </div>
              <div className="px-6 pb-6">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">Weekend Planner</h3>
                <p className="text-gray-600">Check out our exciting activities planned for the upcoming weekend!</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="pamphlet-card"
            >
              <div className="pamphlet-image-wrapper">
                <img 
                  src="https://picsum.photos/seed/pamphlet2/800/1000" 
                  alt="Portion of the Month" 
                  className="pamphlet-image"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
              </div>
              <div className="px-6 pb-6">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">Portion of the Month</h3>
                <p className="text-gray-600">A detailed look at the topics and themes we're exploring this month.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="block-center">
            <h2 className="section-title mb-4">What Parents Say</h2>
            <div className="section-accent-line bg-tertiary" />
          </div>

          <div className="testimonial-grid">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="testimonial-card"
              >
                <Quote className="absolute top-6 right-8 text-tertiary/20 w-12 h-12" />
                <p className="text-gray-600 italic mb-8 relative z-10">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.name} className="testimonial-avatar" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Preview */}
      <section className="py-24 bg-tertiary/10">
        <div className="section-container grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="https://picsum.photos/seed/nurturing-kids/600/400" 
              alt="Teacher with child" 
              className="rounded-[3rem] shadow-xl border-8 border-white"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="section-title-left">Our Nurturing Philosophy</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We believe every child is unique. Our tailored approach ensures that we meet the individual learning needs of each student, allowing them to flourish at their own pace.
            </p>
            <Link to="/about" className="text-primary font-bold flex items-center gap-2 hover:gap-4 hover:text-quaternary transition-all">
              Learn more about our history <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
