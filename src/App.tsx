import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import ParticleBackground from './components/ParticleBackground';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import FloatingElements from './components/FloatingElements';
import CursorTrail from './components/CursorTrail';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loading" />
      ) : (
        <motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`min-h-screen transition-colors duration-300 ${
            darkMode ? 'dark bg-gray-900' : 'bg-gray-50'
          }`}
        >
          <CursorTrail />
          <ParticleBackground />
          <FloatingElements />
          <ScrollProgress />
          
          <div className="relative z-10">
            <Header />
            <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <MusicPlayer />
            
            <main>
              <Hero />
              <About />
              <Experience />
              <Skills />
              <Projects />
              <Education />
              <Certifications />
              <Contact />
            </main>
            
            <Footer />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;