import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function AnimatedText({ text, className = '' }: { text: string, className?: string }) {
  const { language } = useLanguage();
  
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={`${language}-${text}`}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.2 }}
        className={`inline-block break-words ${className}`}
      >
        {text}
      </motion.span>
    </AnimatePresence>
  );
}
