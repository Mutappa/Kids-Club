import { motion } from 'motion/react';
import { 
  Star, 
  Pencil, 
  Cloud, 
  Leaf, 
  Square, 
  Circle, 
  Triangle, 
  BookOpen, 
  Palette
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type Theme = 'school' | 'creative' | 'nature';

const FloatingElement = ({ children, delay, left, duration }: { children: React.ReactNode, delay: number, left: string, duration: number }) => (
  <motion.div
    initial={{ y: '110vh', x: 0, opacity: 0 }}
    animate={{ 
      y: '-20vh',
      x: [0, 40, -40, 0],
      opacity: [0, 0.2, 0.2, 0],
      rotate: [0, 15, -15, 360]
    }}
    transition={{ 
      duration: duration,
      delay: delay,
      repeat: Infinity,
      ease: "linear"
    }}
    className="fixed pointer-events-none z-0"
    style={{ left }}
  >
    {children}
  </motion.div>
);

export default function FloatingBackground() {
  const [theme, setTheme] = useState<Theme | null>(null);
  const location = useLocation();

  useEffect(() => {
    const themes: Theme[] = ['school', 'creative', 'nature'];
    const lastTheme = sessionStorage.getItem('bg-theme') as Theme;
    
    let nextTheme: Theme;
    do {
      nextTheme = themes[Math.floor(Math.random() * themes.length)];
    } while (nextTheme === lastTheme && themes.length > 1);

    setTheme(nextTheme);
    sessionStorage.setItem('bg-theme', nextTheme);
  }, [location.pathname]); // Change on every navigation

  // Brand Colors
  const colors = [
    '#1ec1e3', // Primary (Cyan)
    '#7762aa', // Secondary (Purple)
    '#fedc19', // Tertiary (Yellow)
    '#df4898'  // Quaternary (Pink)
  ];

  const columns = ['5%', '15%', '25%', '35%', '45%', '55%', '65%', '75%', '85%', '95%'];

  if (!theme) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <div className="absolute inset-0 bg-white -z-20"></div>
      <div className="absolute inset-0 bg-gray-50/10 backdrop-blur-[2px] -z-10"></div>
      {columns.map((left, i) => {
        const delay = i * 2;
        const duration = 25 + Math.random() * 15;
        const color = colors[i % colors.length];
        const size = 28 + Math.random() * 24;

        return (
          <FloatingElement key={`${theme}-${i}-${location.pathname}`} delay={delay} left={left} duration={duration}>
            {/* Set 1: School (Detailed Shapes) */}
            {theme === 'school' && (
              <>
                {i % 3 === 0 && <Square size={size} style={{ color }} strokeWidth={2.5} />}
                {i % 3 === 1 && <Circle size={size} style={{ color }} strokeWidth={2.5} />}
                {i % 3 === 2 && <Triangle size={size} style={{ color }} strokeWidth={2.5} />}
              </>
            )}

            {/* Set 2: Creative (Functional & Fun) */}
            {theme === 'creative' && (
              <>
                {i % 3 === 0 && <Pencil size={size} style={{ color }} strokeWidth={2} />}
                {i % 3 === 1 && <BookOpen size={size} style={{ color }} strokeWidth={2} />}
                {i % 3 === 2 && <Palette size={size} style={{ color }} strokeWidth={2} />}
              </>
            )}

            {/* Set 3: Nature (Weather & Wonder) */}
            {theme === 'nature' && (
              <>
                {i % 3 === 0 && <Cloud size={size * 1.2} style={{ color }} fill="currentColor" fillOpacity={0.1} strokeWidth={2} />}
                {i % 3 === 1 && <Leaf size={size} style={{ color }} fill="currentColor" fillOpacity={0.1} strokeWidth={2} />}
                {i % 3 === 2 && <Star size={size} style={{ color }} fill="currentColor" fillOpacity={0.1} strokeWidth={2} />}
              </>
            )}
          </FloatingElement>
        );
      })}
    </div>
  );
}
