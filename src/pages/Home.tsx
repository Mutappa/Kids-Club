import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, Star, Users, BookOpen, ShieldCheck, Quote, 
  MapPin, Phone, Mail, Instagram, Facebook, ChevronLeft, 
  ChevronRight, X, Heart, ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activePamphlet, setActivePamphlet] = useState(0);
  const [selectedPamphlet, setSelectedPamphlet] = useState<string | null>(null);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent of 3-year-old",
      text: "Kids Club has been a second home for my daughter. The attention she receives is incredibly personal—she gets so much individual care! We especially appreciate the inclusive approach that caters to every child's unique needs and ensures they feel valued every single day."
    },
    {
      name: "David Chen",
      role: "Parent of 4-year-old",
      text: "The activity club is fantastic. My son comes home every day excited about the new things he's learned and built. The focus on sustainability is exactly what we were looking for."
    },
    {
      name: "Priya Mehta",
      role: "Parent of 2-year-old",
      text: "Nisreen's expertise is evident in every corner of the school. It's the most nurturing and pro-green environment I've seen in Mazgaon."
    },
    {
      name: "Anita Desai",
      role: "Parent of 5-year-old",
      text: "The library collection is incredible. My son has developed a genuine love for reading thanks to the Saturday Reading Circle sessions."
    }
  ];

  const pamphlets = [
    { title: "Weekend Planner", desc: "Exciting activities planned for the upcoming weekend!", image: "https://picsum.photos/seed/pam1/800/1000" },
    { title: "Portion of the Month", desc: "Thematic topics and learning goals for this month.", image: "https://picsum.photos/seed/pam2/800/1000" },
    { title: "Inclusive Guide", desc: "How we support neurodiverse children at Kids Club.", image: "https://picsum.photos/seed/pam3/800/1000" },
    { title: "Green Living", desc: "Our sustainability roadmap for the young ones.", image: "https://picsum.photos/seed/pam4/800/1000" }
  ];

  const nextTestimonial = () => setActiveTestimonial((prev) => (prev + 1) % (testimonials.length - 2));
  const prevTestimonial = () => setActiveTestimonial((prev) => (prev - 1 + (testimonials.length - 2)) % (testimonials.length - 2));

  const nextPamphlet = () => setActivePamphlet((prev) => (prev + 1) % (pamphlets.length - 2));
  const prevPamphlet = () => setActivePamphlet((prev) => (prev - 1 + (pamphlets.length - 2)) % (pamphlets.length - 2));

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
              Our highly personalized teaching approach ensures your child's unique emotional and academic needs are always met with care, patience, and professional excellence.
            </p>
            <div className="quote-block">
              "A child is like a butterfly in the wind unknown. Some can fly higher than others, but each one flies the best it can. Why compare one against the other? Each one is DIFFERENT. Each one is SPECIAL. Each one is BEAUTIFUL."
            </div>
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
            <div className="hero-decorator-1" />
            <div className="hero-decorator-2" />
          </motion.div>
        </div>
      </section>

      {/* Specialized Programs Section */}
      <section className="programs-section">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Preschool", path: "/programs#preschool", color: "text-primary", bg: "bg-primary/10", icon: <Users size={28} />, desc: "Ages 2-5 Years" },
              { title: "Activity Club", path: "/programs#activity-club", color: "text-secondary", bg: "bg-secondary/10", icon: <Star size={28} />, desc: "Creative Learning" },
              { title: "Reading Circle", path: "/programs#reading-circle", color: "text-quaternary", bg: "bg-quaternary/10", icon: <BookOpen size={28} />, desc: "Literacy Focus" },
            ].map((prog, i) => (
              <motion.div
                key={prog.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative group cursor-pointer"
              >
                <Link 
                  to={prog.path}
                  className={`flex flex-col items-center text-center gap-4 p-10 ${prog.bg} rounded-[3rem] border border-white shadow-sm hover:shadow-xl transition-all duration-300`}
                >
                  <div className={`w-20 h-20 bg-white ${prog.color} rounded-[1.5rem] flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform`}>
                    {prog.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">{prog.title}</h3>
                    <p className="text-gray-600 font-medium">{prog.desc}</p>
                  </div>
                  <div className={`mt-2 flex items-center gap-2 ${prog.color} font-bold`}>
                    Learn More <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
                  </div>
                </Link>
              </motion.div>
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
                title: "Individual Focus",
                desc: "Every child is unique. We provide highly personalized attention to nurture individual strengths and address specific learning needs in a supportive environment.",
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
            <p className="section-subtitle">Click to view our monthly planners and educational portfolios.</p>
          </div>

          <div className="relative group max-w-5xl mx-auto">
            <div className="flex gap-6 overflow-hidden py-10 px-4">
              <AnimatePresence mode="popLayout">
                {pamphlets.slice(activePamphlet, activePamphlet + 3).map((pam, idx) => (
                  <motion.div 
                    key={pam.title}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ y: -10 }}
                    onClick={() => setSelectedPamphlet(pam.image)}
                    className="flex-1 min-w-[280px] bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden cursor-pointer group/card"
                  >
                    <div className="aspect-[3/4] overflow-hidden relative">
                      <img 
                        src={pam.image} 
                        alt={pam.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary transform scale-0 group-hover/card:scale-100 transition-transform">
                          <ArrowRight size={24} />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-display font-bold text-gray-900 mb-1">{pam.title}</h3>
                      <p className="text-sm text-gray-500">{pam.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            {/* Controls */}
            <button 
              onClick={prevPamphlet}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-400 hover:text-secondary hover:scale-110 transition-all z-30 opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextPamphlet}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-400 hover:text-secondary hover:scale-110 transition-all z-30 opacity-0 group-hover:opacity-100"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="section-container">
          <div className="block-center">
            <h2 className="section-title mb-4">What Parents Say</h2>
            <div className="section-accent-line bg-tertiary" />
          </div>

          <div className="relative group max-w-7xl mx-auto px-12">
            <div className="flex gap-8 justify-center">
              <AnimatePresence mode="wait">
                {testimonials.slice(activeTestimonial, activeTestimonial + 3).map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex-1 min-w-[300px] bg-white/80 border border-white p-10 rounded-[3rem] text-center shadow-xl relative flex flex-col"
                  >
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="fill-tertiary text-tertiary" />
                      ))}
                    </div>
                    <p className="text-gray-700 font-medium leading-relaxed italic mb-8 flex-grow">
                      "{item.text}"
                    </p>
                    <div>
                      <h4 className="text-lg font-display font-bold text-gray-900">{item.name}</h4>
                      <p className="text-secondary font-bold uppercase tracking-widest text-[10px] mt-1">{item.role}</p>
                    </div>
                    {/* Verified Badge */}
                    <div className="mt-6 inline-flex items-center justify-center gap-2 px-3 py-1 bg-gray-50 rounded-full text-[9px] text-gray-400 font-bold border border-gray-100 uppercase tracking-tighter">
                      <Star size={8} className="fill-gray-300" />
                      Verified Google Review
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Controls */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-gray-300 hover:text-tertiary transition-colors z-10"
            >
              <ChevronLeft size={48} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-300 hover:text-tertiary transition-colors z-10"
            >
              <ChevronRight size={48} />
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPamphlet && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          >
            <motion.button 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              onClick={() => setSelectedPamphlet(null)}
              className="absolute top-8 right-8 text-white hover:text-primary transition-colors"
            >
              <X size={40} />
            </motion.button>
            <motion.img 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              src={selectedPamphlet} 
              alt="Lightboxed Pamphlet" 
              className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl border-4 border-white/10"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Philosophy Preview */}
      <section className="philosophy-section">
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
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Kids Club, we believe that education is not a one-size-fits-all journey. Every child is a world of potential waiting to be discovered. Our tailored approach ensures that we meet the individual learning needs of each student, allowing them to flourish at their own pace in a space that feels like home.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We focus on building strong foundations—not just academically, but emotionally and socially. By fostering a love for discovery and a sense of belonging, we prepare our children for the challenges of tomorrow while ensuring they enjoy the wonders of today.
            </p>
            <Link to="/about" className="text-primary font-bold flex items-center gap-2 hover:gap-4 hover:text-quaternary transition-all">
              Learn more about our history & mission <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="visit-section">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-8">Visit Our <span className="text-secondary">Sanctuary</span></h2>
              <div className="space-y-8 mb-10">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-secondary shadow-lg shadow-secondary/20 rounded-2xl flex items-center justify-center shrink-0 text-white">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Our Address</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Kids Club Pre School,<br />
                      Near Mazgaon Circle, Opp. St. Mary's High School,<br />
                      Mazgaon, Mumbai - 400010
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-primary shadow-lg shadow-primary/20 rounded-2xl flex items-center justify-center shrink-0 text-white">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Contact Details</h4>
                    <p className="text-gray-600">Primary: +91 98XXX XXXXX</p>
                    <p className="text-gray-600">Office: 022 2XXX XXXX</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-quaternary shadow-lg shadow-quaternary/20 rounded-2xl flex items-center justify-center shrink-0 text-white">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Email Us</h4>
                    <p className="text-gray-600 lowercase">info@kidsclubmazgaon.com</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <a 
                  href="https://www.google.com/maps/place/Kids+Club+by+Nisreen/@18.9713022,72.8398292,829m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3be7cf07592b7ae9:0x2c808e5ad59c769e!8m2!3d18.9712971!4d72.8424041!16s%2Fg%2F11szfx_1f1" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary"
                >
                  Get Directions
                </a>
                <div className="flex gap-3">
                  <a href="#" className="w-14 h-14 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all shadow-sm">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="w-14 h-14 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all shadow-sm">
                    <Facebook size={24} />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-gray-100 h-[500px] relative group cursor-pointer">
                <a 
                  href="https://www.google.com/maps/place/Kids+Club+by+Nisreen/@18.9713022,72.8398292,829m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3be7cf07592b7ae9:0x2c808e5ad59c769e!8m2!3d18.9712971!4d72.8424041!16s%2Fg%2F11szfx_1f1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-20"
                  aria-label="Open Directions in Google Maps"
                ></a>
                {/* School Photo Placeholder */}
                <img 
                  src="https://picsum.photos/seed/mazgaon-school/800/800" 
                  alt="Kids Club Mazgaon Campus" 
                  className="w-full h-1/2 object-cover"
                  referrerPolicy="no-referrer"
                />
                {/* Map Embed Placeholder */}
                <div className="w-full h-1/2 relative bg-gray-200">
                  <iframe 
                    title="Kids Club Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15091.13961502422!2d72.83946282848529!3d18.963055915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf99e5a1b32d%3A0xc0f1fdf7983637e7!2sMazagaon%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1713810000000!5m2!1sen!2sin"
                    className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-6 py-3 rounded-full shadow-xl flex items-center gap-2 text-sm font-bold border border-secondary/20 scale-90 group-hover:scale-100 transition-transform">
                  <MapPin className="text-secondary" size={16} />
                  View Global Location
                </div>
              </div>
              {/* Floating Decorative Icon */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-tertiary rounded-3xl animate-bounce flex items-center justify-center text-gray-800 -rotate-12">
                <Star size={40} className="fill-gray-800" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
