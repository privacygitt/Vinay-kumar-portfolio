import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Play, Pause, Volume2, VolumeX } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed top-24 right-6 z-40"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-full p-3 border border-white/20 dark:border-gray-700/20"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
        >
          <Music size={20} />
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.8 }}
            className="absolute top-16 right-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl p-4 border border-white/20 dark:border-gray-700/20 min-w-[200px]"
          >
            <div className="text-center mb-3">
              <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                Ambient Coding
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Focus Music
              </p>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
              >
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </motion.button>
            </div>

            {/* Fake audio visualizer */}
            {isPlaying && (
              <div className="flex items-end justify-center space-x-1 mt-3 h-8">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 bg-blue-500 rounded-full"
                    animate={{
                      height: [4, 16, 8, 20, 12, 6, 18, 10],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default MusicPlayer;