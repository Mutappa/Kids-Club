import { motion } from 'motion/react';
import { Star, CheckCircle2, ArrowRight, Palette, Dumbbell, Microscope, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function ActivityClub() {
  const activities = [
    { title: "Creative Arts", desc: "Painting, pottery, and crafting to unleash inner creativity.", icon: <Palette className="text-quaternary" /> },
    { title: "Physical Fun", desc: "Basic gymnastics, yoga, and active games for healthy bodies.", icon: <Dumbbell className="text-secondary" /> },
    { title: "STEM Discovery", desc: "Fun experiments and building projects to spark scientific interest.", icon: <Microscope className="text-primary" /> },
  ];

  return (
    <div className="bg-transparent">
      <SEO 
        title="After-School Activity Club in Mazgaon"
        description="Our vibrant Activity Club offers creative arts, gymnastics, yoga, and STEM discovery for children. A fun, supervised environment to explore hobbies and gain new skills."
      />
      {/* Hero */}
      <section className="bg-secondary/10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-secondary font-bold text-sm border border-secondary/20">
                <Star size={18} />
                After-School Fun
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-primary font-bold text-sm border border-primary/20">
                <Clock size={18} />
                4:30 PM - 6:30 PM
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Activity <span className="text-secondary">Club</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Our Activity Club is a vibrant space where children can explore their hobbies, learn new skills, and make friends in a fun, supervised environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:order-2"
            >
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Explore, Create, and Play</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We provide a wide range of activities that cater to different interests and hidden talents. At Kids Club, we believe that education should be an adventure. Whether your child is an aspiring artist finding their voice through color, a budding scientist uncovering the mysteries of the natural world, or a high-energy dreamer who just loves to move, there's a unique space waiting for them here.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed italic">
                Our club is more than an after-school program; it's a creative hub where lifelong friendships are formed and confidence is built through hands-on discovery.
              </p>
              <div className="space-y-6">
                {activities.map((a, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 border border-gray-100">
                      {a.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">{a.title}</h4>
                      <p className="text-sm text-gray-500">{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative lg:order-1"
            >
              <img 
                src="https://picsum.photos/seed/activity-club-main/800/600" 
                alt="Activity Club Fun" 
                className="rounded-[3rem] shadow-2xl border-8 border-white"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-6 -right-6 bg-quaternary p-8 rounded-3xl shadow-xl text-white hidden md:block">
                <p className="text-2xl font-bold">Fun</p>
                <p className="text-sm opacity-80">Every Day</p>
              </div>
            </motion.div>
          </div>

          {/* Weekly Schedule Preview */}
          <div className="bg-gray-50 rounded-[3rem] p-12 border border-gray-100">
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-12 text-center">Weekly Highlights</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { day: "Monday", activity: "Arts & Crafts" },
                { day: "Tuesday", activity: "Gymnastics" },
                { day: "Wednesday", activity: "Science Fun" },
                { day: "Thursday", activity: "Drama & Roleplay" },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                  <p className="text-quaternary font-bold text-sm uppercase tracking-wider mb-2">{item.day}</p>
                  <p className="font-display font-bold text-gray-800">{item.activity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Join the Club!</h2>
          <p className="text-lg text-gray-600 mb-10">
            Our Activity Club is open to both Kids Club students and children from the wider community.
          </p>
          <Link to="/contact" className="px-10 py-4 bg-secondary text-white rounded-full font-bold hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20 inline-flex items-center gap-2">
            Inquire Now <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
