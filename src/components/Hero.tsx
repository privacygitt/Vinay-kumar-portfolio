import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    'Full Stack Developer',
    'MERN Stack Expert',
    'Machine Learning Enthusiast',
    'Problem Solver',
    'Innovation Driver'
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, -1));
      } else {
        setCurrentText(texts[currentIndex].slice(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === texts[currentIndex]) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((currentIndex + 1) % texts.length);
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/privacygitt', label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white' },
    { icon: Linkedin, href: 'https://linkedin.com/in/damarasinghu-vinay-kumar-70b08b2b4', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Mail, href: 'mailto:damarasinghuvinay@gmail.com', label: 'Email', color: 'hover:text-red-500' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-emerald-100 dark:from-blue-900/30 dark:to-emerald-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700">
                👋 Hello, I'm
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                Damarasinghu
              </span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-gray-800 dark:text-gray-200"
              >
                Vinay Kumar
              </motion.span>
            </motion.h1>
            
            {/* Dynamic Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-8 h-12 flex items-center justify-center lg:justify-start"
            >
              <span className="mr-2">I'm a</span>
              <span className="text-blue-600 dark:text-blue-400 font-semibold min-w-[300px] text-left">
                {currentText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="ml-1"
                >
                  |
                </motion.span>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mb-8 leading-relaxed"
            >
              Passionate about creating innovative web solutions with cutting-edge technologies. 
              Specialized in MERN stack development and machine learning integration to build 
              scalable, user-centric applications that make a real impact.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 text-sm"
            >
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-gray-800/50 px-3 py-2 rounded-full backdrop-blur-sm">
                <Phone size={14} />
                <span>+91 9502281196</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-gray-800/50 px-3 py-2 rounded-full backdrop-blur-sm">
                <Mail size={14} />
                <span>damarasinghuvinay@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-gray-800/50 px-3 py-2 rounded-full backdrop-blur-sm">
                <MapPin size={14} />
                <span>Visakhapatnam, India</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Let's Connect</span>
                <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                <span>Download CV</span>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="flex justify-center lg:justify-start space-x-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 dark:text-gray-300 ${social.color} border border-gray-200 dark:border-gray-700`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <div className="relative">
                {/* Glowing Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-3xl blur-xl opacity-30 animate-pulse" />
                
                {/* Main Card */}
                <div className="relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 dark:border-gray-700/20 shadow-2xl">
                  {/* Profile Image Placeholder */}
                  <div className="w-64 h-64 mx-auto mb-6 relative">
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-emerald-400 rounded-2xl flex items-center justify-center text-white text-6xl font-bold shadow-xl">
                      VK
                    </div>
                    
                    {/* Floating Elements */}
                    <motion.div
                      animate={{ y: [-10, 10, -10] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
                    >
                      ⚡
                    </motion.div>
                    
                    <motion.div
                      animate={{ y: [10, -10, 10] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center shadow-lg"
                    >
                      🚀
                    </motion.div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-white/20 dark:bg-gray-700/20 rounded-xl p-3 backdrop-blur-sm">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">3+</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Projects</div>
                    </div>
                    <div className="bg-white/20 dark:bg-gray-700/20 rounded-xl p-3 backdrop-blur-sm">
                      <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">2+</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Experience</div>
                    </div>
                    <div className="bg-white/20 dark:bg-gray-700/20 rounded-xl p-3 backdrop-blur-sm">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">8.06</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">CGPA</div>
                    </div>
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;