import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, ChevronLeft, CheckCircle2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProgramFinderProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProgramFinder({ isOpen, onClose }: ProgramFinderProps) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    age: '',
    interest: '',
    need: ''
  });

  const totalSteps = 3;

  const handleAnswer = (key: string, value: string) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      setStep(4); // Result step
    }
  };

  const getRecommendation = () => {
    const ageNum = parseInt(answers.age);
    if (answers.need === 'Social Skills' || answers.need === 'Confidence') {
      return {
        title: "Activity Club",
        desc: "Ideal for social growth, drama, and building confidence through group creative play.",
        path: "/programs#activity-club"
      };
    }
    if (answers.interest === 'Reading' || ageNum >= 4) {
      return {
        title: "Reading Circle",
        desc: "Perfect for nurturing a lifelong love for books and improving literacy in a cozy environment.",
        path: "/programs#reading-circle"
      };
    }
    return {
      title: "Preschool Program",
      desc: "Our core holistic program focused on foundational growth, play-based learning, and sensory activities.",
      path: "/programs#preschool"
    };
  };

  const recommendation = getRecommendation();

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-primary p-8 text-white relative">
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            <Sparkles className="mb-4 text-white/50" />
            <h3 className="text-2xl font-display font-bold">Program Finder</h3>
            <p className="text-white/80 text-sm mt-1">Let's find the best fit for your child</p>
            
            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
              <motion.div 
                className="h-full bg-white"
                initial={{ width: 0 }}
                animate={{ width: `${(step / totalSteps) * 100}%` }}
              />
            </div>
          </div>

          <div className="p-8">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h4 className="text-lg font-bold text-gray-900 mb-6 italic">How old is your child?</h4>
                  <div className="grid gap-3">
                    {['2 Years', '3 Years', '4 Years', '5+ Years'].map((age) => (
                      <button
                        key={age}
                        onClick={() => handleAnswer('age', age)}
                        className="w-full text-left p-4 rounded-2xl border-2 border-gray-100 hover:border-primary hover:bg-primary/5 transition-all flex items-center justify-between group"
                      >
                        <span className="font-medium text-gray-700">{age}</span>
                        <ChevronRight size={18} className="text-gray-300 group-hover:text-primary transition-colors" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <button 
                    onClick={() => setStep(1)}
                    className="flex items-center gap-1 text-sm text-gray-400 hover:text-primary mb-4 transition-colors"
                  >
                    <ChevronLeft size={14} /> Back
                  </button>
                  <h4 className="text-lg font-bold text-gray-900 mb-6 italic">What is their main interest?</h4>
                  <div className="grid gap-3">
                    {['Creative Art', 'Social Play', 'Nature & Outdoors', 'Reading & Stories'].map((interest) => (
                      <button
                        key={interest}
                        onClick={() => handleAnswer('interest', interest)}
                        className="w-full text-left p-4 rounded-2xl border-2 border-gray-100 hover:border-secondary hover:bg-secondary/5 transition-all flex items-center justify-between group"
                      >
                        <span className="font-medium text-gray-700">{interest}</span>
                        <ChevronRight size={18} className="text-gray-300 group-hover:text-secondary transition-colors" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <button 
                    onClick={() => setStep(2)}
                    className="flex items-center gap-1 text-sm text-gray-400 hover:text-primary mb-4 transition-colors"
                  >
                    <ChevronLeft size={14} /> Back
                  </button>
                  <h4 className="text-lg font-bold text-gray-900 mb-6 italic">What is the primary need right now?</h4>
                  <div className="grid gap-3">
                    {['Holistic Growth', 'Social Skills', 'Literacy Skills', 'Confidence'].map((need) => (
                      <button
                        key={need}
                        onClick={() => handleAnswer('need', need)}
                        className="w-full text-left p-4 rounded-2xl border-2 border-gray-100 hover:border-quaternary hover:bg-quaternary/5 transition-all flex items-center justify-between group"
                      >
                        <span className="font-medium text-gray-700">{need}</span>
                        <ChevronRight size={18} className="text-gray-300 group-hover:text-quaternary transition-colors" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-2 italic">Recommendation</h4>
                  <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">{recommendation.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {recommendation.desc}
                  </p>
                  <div className="flex flex-col gap-3">
                    <Link 
                      to={recommendation.path}
                      onClick={onClose}
                      className="w-full bg-primary text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-opacity-90 transition-all"
                    >
                      Learn More
                    </Link>
                    <button 
                      onClick={() => setStep(1)}
                      className="text-gray-400 text-sm font-medium hover:text-primary transition-colors"
                    >
                      Start Over
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
