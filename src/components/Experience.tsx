import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Web Developer Intern',
      company: 'Antar IoT',
      period: 'July 2024 - Oct 2025',
      location: 'Remote',
      achievements: [
        'Engineered firmware components for Antar IIoT Platform, enhancing system reliability by 15% and supporting seamless upgrades',
        'Executed manual testing for IoT applications, ensuring error-free upgrade of Asset Tracking System (v14 to v15)',
        'Developed a responsive Angular dashboard, boosting user engagement by 20% through improved data visualization',
        'Collaborated with teams to resolve technical challenges, accelerating project delivery by 10%'
      ],
      technologies: ['Angular', 'IoT', 'Firmware', 'Testing', 'Dashboard Development']
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'Bharat Intern',
      period: 'Feb - March 2024',
      location: 'Remote',
      achievements: [
        'Built a full-stack web application using HTML, CSS, JavaScript, and backend scripting, cutting development time by 25%',
        'Implemented responsive designs, increasing cross-device accessibility by 30%',
        'Applied modern development tools to deliver projects under tight deadlines, enhancing technical proficiency'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Backend Development', 'Responsive Design']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-blue-600 to-emerald-600"></div>
              )}
              
              {/* Timeline Dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full border-4 border-white dark:border-gray-900"></div>
              
              <div className="ml-20">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {exp.title}
                      </h3>
                      <h4 className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
                        {exp.company}
                      </h4>
                    </div>
                    
                    <div className="flex flex-col items-start md:items-end space-y-2">
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <MapPin size={16} className="mr-2" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Key Achievements:
                    </h5>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: achievementIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start"
                        >
                          <ChevronRight size={16} className="text-blue-600 dark:text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {achievement}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies Used:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-emerald-100 dark:from-blue-900 dark:to-emerald-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;