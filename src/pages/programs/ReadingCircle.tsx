import { motion } from 'motion/react';
import { BookOpen, CheckCircle2, ArrowRight, Library, Languages, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ReadingCircle() {
  const benefits = [
    { title: "Storytelling", desc: "Interactive sessions that bring stories to life and spark imagination.", icon: <Library className="text-primary" /> },
    { title: "Phonics & Literacy", desc: "Building strong foundations for independent reading and writing.", icon: <Languages className="text-secondary" /> },
    { title: "Creative Writing", desc: "Encouraging children to express their own ideas through words.", icon: <PenTool className="text-quaternary" /> },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-quaternary/10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-quaternary font-bold text-sm mb-6 border border-quaternary/20">
              <BookOpen size={18} />
              Love for Literature
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Reading <span className="text-quaternary">Circle</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Fostering a lifelong love for reading through guided sessions, interactive storytelling, and a rich collection of children's literature.
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
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Unlocking Worlds Through Words</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our Reading Circle is more than just a library. It's a community where children share stories, discuss ideas, and develop the critical thinking skills needed for academic success.
              </p>
              <div className="space-y-6">
                {benefits.map((b, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 border border-gray-100">
                      {b.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">{b.title}</h4>
                      <p className="text-sm text-gray-500">{b.desc}</p>
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
                src="https://picsum.photos/seed/reading-circle-main/800/600" 
                alt="Children Reading" 
                className="rounded-[3rem] shadow-2xl border-8 border-white"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-tertiary p-8 rounded-3xl shadow-xl text-gray-800 hidden md:block">
                <p className="text-2xl font-bold">500+</p>
                <p className="text-sm opacity-80">Books in Library</p>
              </div>
            </motion.div>
          </div>

          {/* Program Features */}
          <div className="bg-gray-50 rounded-[3rem] p-12 border border-gray-100">
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-12 text-center">Program Highlights</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Weekly Book Borrowing",
                "Phonics-based Learning",
                "Vocabulary Building Games",
                "Author Spotlight Sessions",
                "Creative Writing Workshops",
                "Story Performance"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <CheckCircle2 className="text-primary shrink-0" />
                  <span className="font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-tertiary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Start Their Reading Journey</h2>
          <p className="text-lg text-gray-600 mb-10">
            Enroll your child in our Reading Circle and watch their imagination take flight.
          </p>
          <Link to="/contact" className="px-10 py-4 bg-quaternary text-white rounded-full font-bold hover:bg-quaternary/90 transition-all shadow-lg shadow-quaternary/20 inline-flex items-center gap-2">
            Register Interest <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
