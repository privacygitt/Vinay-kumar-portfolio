import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Java Programming',
      issuer: 'Udemy',
      date: '2024',
      description: 'Comprehensive Java programming course covering OOP concepts, data structures, and advanced Java features.',
      skills: ['Java', 'Object-Oriented Programming', 'Data Structures', 'Algorithms'],
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Machine Learning',
      issuer: 'NPTEL',
      date: '2024',
      description: 'In-depth course covering machine learning algorithms, statistical modeling, and practical implementation.',
      skills: ['Machine Learning', 'Python', 'Statistical Analysis', 'Data Science'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Acquiring Data',
      issuer: 'Future Skills Prime',
      date: '2023',
      description: 'Focused on data acquisition techniques, data preprocessing, and data management best practices.',
      skills: ['Data Acquisition', 'Data Processing', 'Data Management', 'Analytics'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'AWS Academy Cloud Architecting',
      issuer: 'ICT Academy',
      date: '2023',
      description: 'Cloud architecture fundamentals, AWS services, and best practices for scalable cloud solutions.',
      skills: ['AWS', 'Cloud Architecture', 'DevOps', 'Infrastructure'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Continuous learning through industry-recognized certifications and specialized courses 
            to stay current with the latest technologies and best practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Header with gradient */}
              <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${cert.color} text-white mr-4`}>
                      <Award size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 font-medium">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Calendar size={16} className="mr-1" />
                    <span className="text-sm">{cert.date}</span>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {cert.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
                    Skills Acquired:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className={`px-3 py-1 bg-gradient-to-r ${cert.color} text-white rounded-full text-sm font-medium shadow-sm`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                >
                  <ExternalLink size={16} className="mr-2" />
                  View Certificate
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certification Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Professional Development Summary
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="group">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors"
                >
                  4+
                </motion.div>
                <div className="text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wider">
                  Certifications
                </div>
              </div>
              
              <div className="group">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors"
                >
                  3+
                </motion.div>
                <div className="text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wider">
                  Platforms
                </div>
              </div>
              
              <div className="group">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors"
                >
                  15+
                </motion.div>
                <div className="text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wider">
                  Skills
                </div>
              </div>
              
              <div className="group">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2 group-hover:text-orange-700 dark:group-hover:text-orange-300 transition-colors"
                >
                  2024
                </motion.div>
                <div className="text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wider">
                  Recent
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;