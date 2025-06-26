import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Trophy, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Expertise in MERN stack and Angular for building scalable web applications'
    },
    {
      icon: Lightbulb,
      title: 'Machine Learning Integration',
      description: 'Applying ML algorithms to optimize operational workflows and business processes'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Proven experience in agile environments with cross-functional teams'
    },
    {
      icon: Trophy,
      title: 'Results Driven',
      description: 'Delivered solutions that improved user engagement and system efficiency'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                I'm a passionate Full Stack Developer with expertise in modern web technologies 
                and a keen interest in machine learning applications. My journey in tech has been 
                driven by curiosity and a desire to create solutions that make a real impact.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                With hands-on experience in developing IoT platforms, financial tracking systems, 
                and intelligent management solutions, I've consistently delivered projects that 
                enhance user experience and operational efficiency. I thrive in collaborative 
                environments and enjoy tackling complex challenges with innovative approaches.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Currently pursuing my Bachelor's in Computer Science Engineering with a CGPA of 8.06, 
                I'm always eager to learn new technologies and contribute to meaningful projects that 
                push the boundaries of what's possible.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-gray-700 dark:to-gray-600 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
                    <highlight.icon size={24} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;