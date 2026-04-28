import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useState } from 'react';
import { X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: "https://picsum.photos/seed/kids1/800/600", category: "Classroom", title: "Creative Learning" },
    { src: "https://picsum.photos/seed/kids2/800/600", category: "Play", title: "Outdoor Fun" },
    { src: "https://picsum.photos/seed/kids3/800/600", category: "Art", title: "Pottery Session" },
    { src: "https://picsum.photos/seed/kids4/800/600", category: "Events", title: "Annual Day" },
    { src: "https://picsum.photos/seed/kids5/800/600", category: "Classroom", title: "Story Time" },
    { src: "https://picsum.photos/seed/kids6/800/600", category: "Play", title: "Gymnastics" },
    { src: "https://picsum.photos/seed/kids7/800/600", category: "Art", title: "Painting Workshop" },
    { src: "https://picsum.photos/seed/kids8/800/600", category: "Events", title: "Science Fair" },
    { src: "https://picsum.photos/seed/kids9/800/600", category: "Classroom", title: "Group Activities" },
  ];

  const categories = ["All", "Classroom", "Play", "Art", "Events"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="bg-transparent min-h-screen">
      {/* Hero */}
      <section className="hero-simple py-12 bg-tertiary/10">
        <div className="section-container text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6"
          >
            Our <span className="text-tertiary">Gallery</span>
          </motion.h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            A glimpse into the daily life, activities, and special moments at Kids Club.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="bg-tertiary text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-all">
              Book an Appointment
            </Link>
            <Link to="/programs" className="bg-white border border-tertiary text-tertiary px-8 py-3 rounded-full font-bold shadow-sm hover:bg-tertiary/5 transition-all">
              Explore Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b border-gray-100 sticky top-20 bg-white/80 backdrop-blur-md z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-bold transition-all ${
                  activeCategory === cat 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="gallery-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((img, idx) => (
              <motion.div
                layout
                key={img.src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="group relative cursor-pointer overflow-hidden rounded-[2.5rem] aspect-[4/3] shadow-lg"
                onClick={() => setSelectedImage(img.src)}
              >
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-tertiary font-bold text-sm uppercase tracking-wider mb-1">{img.category}</span>
                  <h3 className="text-white text-xl font-bold">{img.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 md:p-12"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          <motion.img 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            src={selectedImage} 
            alt="Gallery Fullscreen" 
            className="max-w-full max-h-full rounded-3xl shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </div>
      )}
    </div>
  );
}
