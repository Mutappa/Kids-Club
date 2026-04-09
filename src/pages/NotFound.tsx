import { motion } from 'motion/react';
import { Home, Search, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="mb-8 inline-block p-6 bg-orange-100 rounded-full text-orange-500"
        >
          <AlertCircle size={80} />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-6xl font-bold text-primary mb-4"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-semibold text-gray-800 mb-4"
        >
          Oops! Page Not Found
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 mb-8"
        >
          It looks like this page wandered off to play! Let's get you back to the club.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/"
            className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-colors shadow-lg hover:shadow-xl"
          >
            <Home size={20} />
            Go Home
          </Link>
          <Link
            to="/programs"
            className="flex items-center justify-center gap-2 bg-white border-2 border-primary text-primary hover:bg-primary/5 px-6 py-3 rounded-full font-medium transition-colors"
          >
            <Search size={20} />
            Explore Programs
          </Link>
        </motion.div>

        {/* Playful elements */}
        <div className="absolute top-1/4 left-10 opacity-10 pointer-events-none hidden lg:block">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Search size={120} />
          </motion.div>
        </div>
        <div className="absolute bottom-1/4 right-10 opacity-10 pointer-events-none hidden lg:block">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <AlertCircle size={100} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
