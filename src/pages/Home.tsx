import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, Star, Users, BookOpen, ShieldCheck, Quote, 
  MapPin, Phone, Mail, Instagram, Facebook, ChevronLeft, 
  ChevronRight, X, Heart, ExternalLink, Linkedin, MessageCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activePamphlet, setActivePamphlet] = useState(0);
  const [activeGreen, setActiveGreen] = useState(0);
  const [selectedPamphlet, setSelectedPamphlet] = useState<string | null>(null);

  const greenOutdoors = [
    { 
      title: "Sustainable Gardening", 
      image: "https://picsum.photos/seed/garden1/1200/800",
      desc: "Our children learn to nurture life by growing their own plants and understanding the cycle of nature."
    },
    { 
      title: "Eco-Friendly Crafts", 
      image: "https://picsum.photos/seed/ecocraft1/1200/800",
      desc: "Using recycled materials for creative expression to promote our 'No-Waste' philosophy."
    },
    { 
      title: "Outdoor Exploration", 
      image: "https://picsum.photos/seed/outdoor1/1200/800",
      desc: "Daily sensory-led exploration in our green spaces, fostering a deep connection with the outdoors."
    },
    { 
      title: "Nature Observatories", 
      image: "https://picsum.photos/seed/nature1/1200/800",
      desc: "Learning about local flora and fauna through patient observation and hands-on discovery."
    }
  ];

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
      text: "Nisreen's expertise is evident in every corner of the school. It's the most nurturing and pro-green environment I've seen in Mazgaon. Highly recommended!"
    },
    {
      name: "Anita Desai",
      role: "Parent of 5-year-old",
      text: "The library collection is incredible. My son has developed a genuine love for reading thanks to the Saturday Reading Circle sessions. It's a game changer."
    },
    {
      name: "Rajesh Iyer",
      role: "Parent of 4-year-old",
      text: "I am amazed at how well the teachers handle neurodiverse children. My child feels so safe and understood here. The patience shown by the staff is unmatched."
    },
    {
      name: "Zoya Khan",
      role: "Parent of 3-year-old",
      text: "From the non-toxic toys to the garden exploration, everything about Kids Club is thoughtful and child-centric. It's truly a sanctuary for kids."
    },
    {
      name: "Michelle Gomez",
      role: "Parent of 2-year-old",
      text: "The transition from home to school was so smooth. The 'Gentle Start' period really helped my little one settle in without any tears. Thank you, Nisreen!"
    },
    {
      name: "Sanjay Gupta",
      role: "Parent of 4-year-old",
      text: "The outdoor play areas are safe and engaging. It's great to see a school that encourages messy play and nature curiosity instead of just screen time."
    },
    {
      name: "Leila Merchant",
      role: "Parent of 3-year-old",
      text: "A truly inclusive space. The mentors are so well-trained. We've seen significant growth in our child's social skills and empathy since joining."
    },
    {
      name: "Vikram Shah",
      role: "Parent of 5-year-old",
      text: "Best preschool in Mazgaon, hands down. The 30 years of experience really shows in how they manage the classroom and the emotional needs of the kids."
    }
  ];

  const pamphlets = [
    { title: "Weekend Planner", desc: "Exciting activities planned for the upcoming weekend!", image: "https://picsum.photos/seed/pam1/800/1000" },
    { title: "Portion of the Month", desc: "Thematic topics and learning goals for this month.", image: "https://picsum.photos/seed/pam2/800/1000" },
    { title: "Inclusive Guide", desc: "How we support neurodiverse children at Kids Club.", image: "https://picsum.photos/seed/pam3/800/1000" },
    { title: "Green Living", desc: "Our sustainability roadmap for the young ones.", image: "https://picsum.photos/seed/pam4/800/1000" }
  ];

  const galleryImages = [
    { src: "https://picsum.photos/seed/home-gal-1/800/600", alt: "Creative Arts" },
    { src: "https://picsum.photos/seed/home-gal-2/800/600", alt: "Outdoor Play" },
    { src: "https://picsum.photos/seed/home-gal-3/800/600", alt: "Science Fun" },
    { src: "https://picsum.photos/seed/home-gal-4/800/600", alt: "Story Time" },
    { src: "https://picsum.photos/seed/home-gal-5/800/600", alt: "Gardening" },
    { src: "https://picsum.photos/seed/home-gal-6/800/600", alt: "Music Class" },
    { src: "https://picsum.photos/seed/home-gal-7/800/600", alt: "Group Games" },
    { src: "https://picsum.photos/seed/home-gal-8/800/600", alt: "Birthday Celebration" },
  ];

  const [activeGallery, setActiveGallery] = useState(0);

  const nextTestimonial = () => setActiveTestimonial((prev) => (prev + 1) % (testimonials.length));
  const prevTestimonial = () => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const nextPamphlet = () => setActivePamphlet((prev) => (prev + 1) % pamphlets.length);
  const prevPamphlet = () => setActivePamphlet((prev) => (prev - 1 + pamphlets.length) % pamphlets.length);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="section-container hero-inner pb-0">
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
              Where Every Child <span className="text-primary">Grows</span>
            </h1>
            <p className="hero-description">
              We provide a caring and safe environment built on over 30 years of teaching experience. 
              Our personalized teaching ensures that every child's emotional and learning needs are met with patience, care, and professional skill.
            </p>
            <div className="quote-block">
              "A child is like a butterfly in the wind unknown. Some can fly higher than others, but each one flies the best it can. Why compare one against the other? Each one is <strong>DIFFERENT</strong>. Each one is <strong>SPECIAL</strong>. Each one is <strong>BEAUTIFUL</strong>."
            </div>
            <div className="flex flex-row flex-wrap gap-4 mt-8">
              <Link to="/contact" className="btn-primary group whitespace-nowrap">
                Join Us <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/programs" className="btn-secondary whitespace-nowrap">
                Programs
              </Link>
              <Link to="/gallery" className="btn-outline-primary px-6 py-3 rounded-full font-bold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all bg-white shadow-sm whitespace-nowrap">
                Gallery
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="hero-image-container"
          >
            <div className="hero-image-wrapper border-white">
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

        {/* Integrated Programs Grid */}
        <div className="section-container pt-8 pb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Preschool", path: "/programs#preschool", color: "text-primary", bg: "bg-primary/10", icon: <Users size={28} />, desc: "Ages 2-5 Years" },
              { title: "Activity Club", path: "/programs#activity-club", color: "text-secondary", bg: "bg-secondary/10", icon: <Star size={28} />, desc: "Fun Learning" },
              { title: "Reading Circle", path: "/programs#reading-circle", color: "text-quaternary", bg: "bg-quaternary/10", icon: <BookOpen size={28} />, desc: "Love for Books" },
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
                  className={`flex flex-col items-center text-center gap-4 p-8 ${prog.bg} rounded-[2.5rem] border border-white shadow-md hover:shadow-xl transition-all duration-300`}
                >
                  <div className={`w-16 h-16 bg-white ${prog.color} rounded-[1rem] flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform`}>
                    {prog.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-gray-900 mb-1">{prog.title}</h3>
                    <p className="text-sm text-gray-600">{prog.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Merged Section: Philosophy & Why Choose */}
      <section className="highlights-section py-16 bg-gray-50/50 overflow-hidden">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://picsum.photos/seed/nurturing-kids/800/600" 
                alt="Teacher with child" 
                className="rounded-[3rem] shadow-2xl border-8 border-white relative z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full -z-10 animate-pulse" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">Our Way of Learning</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Kids Club, we believe that learning is a personal journey. Every child has great potential waiting to be discovered. Our personalized care ensures that we meet the needs of each student, allowing them to grow at their own speed in a space that feels like home.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We focus on building strong foundations—not just in school subjects, but emotionally and socially. By helping kids love discovery and feel like they belong, we prepare them for the future while making sure they enjoy being children today.
              </p>
              <div className="highlights-grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 !gap-4 !mt-0">
                {[
                  {
                    icon: <Users className="text-secondary" />,
                    title: "Personal Care",
                    desc: "Individual attention for every child.",
                    color: "bg-secondary/5"
                  },
                  {
                    icon: <BookOpen className="text-quaternary" />,
                    title: "30 Years Exp.",
                    desc: "Expertise you can trust.",
                    color: "bg-quaternary/5"
                  },
                  {
                    icon: <ShieldCheck className="text-primary" />,
                    title: "Safe Haven",
                    desc: "A happy, protected space.",
                    color: "bg-primary/5"
                  }
                ].map((item, idx) => (
                  <div key={idx} className={`p-6 rounded-3xl ${item.color} border border-white/50 shadow-sm`}>
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-3 text-current">
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-gray-800 text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex gap-4">
                <Link to="/contact" className="btn-primary">
                  Book a Visit
                </Link>
                <Link to="/about" className="btn-secondary">
                  Our Story
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest Updates & Pamphlets */}
      <section className="updates-section py-16 bg-white">
        <div className="section-container">
          <div className="block-center">
            <h2 className="section-title mb-4">Latest Updates & Pamphlets</h2>
            <div className="section-accent-line bg-secondary" />
            <p className="section-subtitle">Click to view our monthly planners and learning activities.</p>
          </div>

          <div className="relative group max-w-5xl mx-auto">
            <div className="flex gap-6 overflow-hidden py-10 px-4">
              <AnimatePresence mode="popLayout">
                {pamphlets.slice(activePamphlet, activePamphlet + 3).concat(
                  activePamphlet > pamphlets.length - 3 ? pamphlets.slice(0, 3 - (pamphlets.length - activePamphlet)) : []
                ).map((pam, idx) => (
                  <motion.div 
                    key={`${pam.title}-${activePamphlet}-${idx}`}
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
            <div className="text-center mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-secondary text-white px-10 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg hover:scale-105 group"
            >
              Contact Us
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/gallery" 
              className="inline-flex items-center gap-2 bg-white border border-secondary text-secondary px-10 py-4 rounded-full font-bold hover:bg-secondary/5 transition-all shadow-md group"
            >
              Gallery
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pro-Green Section */}
      <section className="pro-green-section py-16 bg-green-50/30 overflow-hidden">
        <div className="section-container">
          <div className="block-center mb-12">
            <h2 className="section-title mb-4">Love for Nature</h2>
            <div className="section-accent-line bg-green-500" />
            <p className="section-subtitle">Helping children love nature through outdoor learning and activities.</p>
          </div>

          <div className="relative max-w-6xl mx-auto px-12">
            <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-gray-100">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeGreen}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  <img 
                    src={greenOutdoors[activeGreen].image} 
                    alt={greenOutdoors[activeGreen].title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-16">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">{greenOutdoors[activeGreen].title}</h3>
                      <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed">{greenOutdoors[activeGreen].desc}</p>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-white/20 z-20">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${((activeGreen + 1) / greenOutdoors.length) * 100}%` }}
                  className="h-full bg-green-400"
                />
              </div>
            </div>

            {/* Controls */}
            <button 
              onClick={() => setActiveGreen((prev) => (prev - 1 + greenOutdoors.length) % greenOutdoors.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center text-green-600 hover:scale-110 transition-all z-30"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => setActiveGreen((prev) => (prev + 1) % greenOutdoors.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center text-green-600 hover:scale-110 transition-all z-30"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/gallery" 
              className="inline-flex items-center gap-2 bg-green-600 text-white px-10 py-4 rounded-full font-bold hover:bg-green-700 transition-all shadow-lg hover:scale-105 group"
            >
              Gallery
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Carousel Section */}
      <section className="gallery-section py-16 bg-white overflow-hidden">
        <div className="section-container">
          <div className="block-center mb-12">
            <h2 className="section-title mb-4">Glimpses of Joy</h2>
            <div className="section-accent-line bg-primary" />
            <p className="text-lg text-gray-600 mt-4">Take a look at the happy moments and activities at our school.</p>
          </div>
          
          <div className="relative group max-w-6xl mx-auto">
            <div className="flex gap-6 overflow-hidden py-4">
              <AnimatePresence mode="popLayout" initial={false}>
                {galleryImages.slice(activeGallery, activeGallery + 3).concat(
                  activeGallery > galleryImages.length - 3 ? galleryImages.slice(0, 3 - (galleryImages.length - activeGallery)) : []
                ).map((img, idx) => (
                  <motion.div 
                    key={`${img.alt}-${activeGallery}-${idx}`}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="flex-1 min-w-[300px] aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all relative group/card"
                  >
                    <img 
                      src={img.src} 
                      alt={img.alt} 
                      className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 opacity-0 group-hover/card:opacity-100 transition-opacity">
                      <p className="text-white font-display font-bold text-xl">{img.alt}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            {/* Gallery Controls */}
            <button 
              onClick={() => setActiveGallery((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center text-primary hover:scale-110 transition-all z-30 opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft size={28} />
            </button>
            <button 
              onClick={() => setActiveGallery((prev) => (prev + 1) % galleryImages.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center text-primary hover:scale-110 transition-all z-30 opacity-0 group-hover:opacity-100"
            >
              <ChevronRight size={28} />
            </button>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/gallery" className="btn-secondary inline-flex items-center gap-2 px-10 py-4 shadow-md hover:shadow-lg">
              Gallery <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section py-16 bg-gray-50/50">
        <div className="section-container">
          <div className="block-center">
            <h2 className="section-title mb-4">Happy Parents</h2>
            <div className="section-accent-line bg-tertiary" />
          </div>

          <div className="relative group max-w-7xl mx-auto px-12">
            <div className="flex gap-8 justify-center">
              <AnimatePresence mode="wait">
                {testimonials.slice(activeTestimonial, activeTestimonial + 3).concat(
                  activeTestimonial > testimonials.length - 3 ? testimonials.slice(0, 3 - (testimonials.length - activeTestimonial)) : []
                ).map((item, idx) => (
                  <motion.div
                    key={`${item.name}-${activeTestimonial}-${idx}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex-1 min-w-[300px] bg-white border border-gray-100 p-10 rounded-[3rem] text-center shadow-lg relative flex flex-col"
                  >
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="fill-tertiary text-tertiary" />
                      ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed italic mb-8 flex-grow">
                      "{item.text}"
                    </p>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{item.name}</h4>
                      <p className="text-secondary font-bold text-xs mt-1 uppercase">{item.role}</p>
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

      {/* Visit Us Section */}
      <section className="visit-section py-16 bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-8">Visit Our <span className="text-secondary">School</span></h2>
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
                    <p className="text-gray-600">Primary: +91 98194 57758</p>
                    <p className="text-gray-600">Email: nisreenkidsclub@gmail.com</p>
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
                  <a href="https://www.instagram.com/nisreen_kidsclub/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all shadow-sm" aria-label="Instagram">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="w-14 h-14 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all shadow-sm" aria-label="Facebook">
                    <Facebook size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/nisreen-kids-club🏆📚-236755295?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all shadow-sm" aria-label="LinkedIn">
                    <Linkedin size={24} />
                  </a>
                  <a href="https://wa.me/919819457758" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all shadow-sm" aria-label="WhatsApp">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
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
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
