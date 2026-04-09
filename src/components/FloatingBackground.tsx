import { motion } from 'motion/react';
import { Send } from 'lucide-react';

const Balloon = ({ color, size, delay, left, duration }: { color: string, size: number, delay: number, left: string, duration: number, key?: string }) => (
  <motion.div
    initial={{ y: '110vh', x: 0, opacity: 0 }}
    animate={{ 
      y: '-20vh',
      x: [0, 20, -20, 0],
      opacity: [0, 0.4, 0.4, 0]
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
    <svg width={size} height={size * 1.2} viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0Z" fill={color} />
      <path d="M15 30L12 35H18L15 30Z" fill={color} />
      <path d="M15 35C15 35 18 37 18 40" stroke="#999" strokeWidth="1" />
    </svg>
  </motion.div>
);

const PaperPlane = ({ delay, top, duration }: { delay: number, top: string, duration: number, key?: string }) => (
  <motion.div
    initial={{ x: '-10vw', y: 0, rotate: 15, opacity: 0 }}
    animate={{ 
      x: '110vw',
      y: [0, -50, 50, 0],
      opacity: [0, 0.3, 0.3, 0]
    }}
    transition={{ 
      duration: duration,
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="fixed pointer-events-none z-0 text-secondary/30"
    style={{ top }}
  >
    <Send size={32} />
  </motion.div>
);

export default function FloatingBackground() {
  const balloons = [
    { color: '#1ec1e3', size: 40, delay: 0, left: '10%', duration: 25 },
    { color: '#7762aa', size: 30, delay: 5, left: '25%', duration: 30 },
    { color: '#fedc19', size: 45, delay: 2, left: '45%', duration: 22 },
    { color: '#df4898', size: 35, delay: 8, left: '65%', duration: 28 },
    { color: '#1ec1e3', size: 50, delay: 4, left: '85%', duration: 20 },
    { color: '#7762aa', size: 25, delay: 12, left: '95%', duration: 35 },
  ];

  const planes = [
    { delay: 1, top: '15%', duration: 18 },
    { delay: 6, top: '45%', duration: 22 },
    { delay: 10, top: '75%', duration: 20 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {balloons.map((b, i) => (
        <Balloon 
          key={`balloon-${i}`} 
          color={b.color}
          size={b.size}
          delay={b.delay}
          left={b.left}
          duration={b.duration}
        />
      ))}
      {planes.map((p, i) => (
        <PaperPlane 
          key={`plane-${i}`} 
          delay={p.delay}
          top={p.top}
          duration={p.duration}
        />
      ))}
    </div>
  );
}
