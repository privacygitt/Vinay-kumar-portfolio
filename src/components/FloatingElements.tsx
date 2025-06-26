import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Zap, Cpu, Globe, Smartphone } from 'lucide-react';

const FloatingElements = () => {
  const icons = [Code, Database, Zap, Cpu, Globe, Smartphone];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {icons.map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute text-blue-200 dark:text-blue-800 opacity-20"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: [0, 360],
          }}
          transition={{
            duration: 20 + Math.random() * 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Icon size={24 + Math.random() * 24} />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;