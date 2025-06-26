import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science Engineering',
      institution: 'Nadimpalli Satyanarayana Raju Institute of Technology',
      period: '2021 - 2025',
      cgpa: '8.06',
      description: 'Focused on software engineering, data structures, algorithms, and modern web technologies. Active participation in coding competitions and technical projects.'
    },
    {
      degree: 'Higher Secondary Education',
      field: 'MPC (Mathematics, Physics, Chemistry)',
      institution: 'Narayana Jr College',
      period: '2019 - 2021',
      cgpa: 'N/A',
      description: 'Strong foundation in mathematics and sciences, which laid the groundwork for analytical thinking and problem-solving skills.'
    },
    {
      degree: 'Secondary School Certificate',
      field: 'SSC',
      institution: 'Seventh-Day Adventist High School',
      period: '- 2019',
      cgpa: '9.2',
      description: 'Completed with distinction, demonstrating consistent academic excellence and leadership qualities.'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey has provided me with a strong foundation in computer science 
            and engineering principles, complemented by practical project experience.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              {index < educationData.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-blue-600 to-emerald-600"></div>
              )}
              
              {/* Timeline Dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full border-4 border-white dark:border-gray-800"></div>
              
              <div className="ml-20">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <GraduationCap className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {edu.degree}
                        </h3>
                      </div>
                      
                      <h4 className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">
                        {edu.field}
                      </h4>
                      
                      <p className="text-gray-700 dark:text-gray-300 font-medium mb-4">
                        {edu.institution}
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-start lg:items-end space-y-2 lg:ml-6">
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm font-medium">{edu.period}</span>
                      </div>
                      
                      {edu.cgpa !== 'N/A' && (
                        <div className="flex items-center">
                          <Award size={16} className="mr-2 text-emerald-600 dark:text-emerald-400" />
                          <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                            CGPA: {edu.cgpa}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {edu.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Academic Excellence
            </h3>
            <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              My educational journey reflects consistent academic performance and a passion for learning. 
              Currently maintaining a strong CGPA of 8.06 in Computer Science Engineering, with a focus on 
              practical application of theoretical concepts through various projects and internships.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">8.06</div>
                <div className="text-gray-600 dark:text-gray-400">Current CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">4+</div>
                <div className="text-gray-600 dark:text-gray-400">Years of Study</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">10+</div>
                <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;