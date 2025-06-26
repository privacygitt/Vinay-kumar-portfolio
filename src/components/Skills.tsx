import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Brain, Wrench, Users, Lightbulb, Star, TrendingUp } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const skillCategories = [
    { id: 'all', label: 'All Skills', icon: Lightbulb, color: 'from-yellow-400 to-orange-400' },
    { id: 'programming', label: 'Programming', icon: Code, color: 'from-blue-400 to-cyan-400' },
    { id: 'web', label: 'Web Dev', icon: Code, color: 'from-green-400 to-emerald-400' },
    { id: 'database', label: 'Database', icon: Database, color: 'from-purple-400 to-pink-400' },
    { id: 'ml', label: 'ML & Analytics', icon: Brain, color: 'from-red-400 to-rose-400' },
    { id: 'tools', label: 'Tools', icon: Wrench, color: 'from-gray-400 to-slate-400' },
    { id: 'soft', label: 'Soft Skills', icon: Users, color: 'from-indigo-400 to-purple-400' }
  ];

  const skills = [
    { name: 'JavaScript', level: 90, category: 'programming', experience: '3+ years', projects: 8 },
    { name: 'Python', level: 85, category: 'programming', experience: '2+ years', projects: 5 },
    { name: 'Java', level: 80, category: 'programming', experience: '2+ years', projects: 4 },
    { name: 'C', level: 75, category: 'programming', experience: '1+ years', projects: 3 },
    { name: 'React', level: 88, category: 'web', experience: '2+ years', projects: 6 },
    { name: 'Angular', level: 85, category: 'web', experience: '1+ years', projects: 3 },
    { name: 'Node.js', level: 82, category: 'web', experience: '2+ years', projects: 5 },
    { name: 'Express.js', level: 80, category: 'web', experience: '2+ years', projects: 5 },
    { name: 'HTML/CSS', level: 92, category: 'web', experience: '3+ years', projects: 10 },
    { name: 'MongoDB', level: 78, category: 'database', experience: '1+ years', projects: 4 },
    { name: 'Machine Learning', level: 75, category: 'ml', experience: '1+ years', projects: 2 },
    { name: 'Data Analysis', level: 72, category: 'ml', experience: '1+ years', projects: 3 },
    { name: 'VS Code', level: 90, category: 'tools', experience: '3+ years', projects: 15 },
    { name: 'Git/GitHub', level: 85, category: 'tools', experience: '2+ years', projects: 12 },
    { name: 'Postman', level: 80, category: 'tools', experience: '1+ years', projects: 8 },
    { name: 'Figma', level: 70, category: 'tools', experience: '1+ years', projects: 5 },
    { name: 'Team Collaboration', level: 88, category: 'soft', experience: '2+ years', projects: 10 },
    { name: 'Problem Solving', level: 90, category: 'soft', experience: '3+ years', projects: 15 },
    { name: 'Communication', level: 85, category: 'soft', experience: '3+ years', projects: 12 },
    { name: 'Time Management', level: 82, category: 'soft', experience: '2+ years', projects: 10 }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const getSkillColor = (level: number) => {
    if (level >= 85) return 'from-green-400 to-emerald-500';
    if (level >= 75) return 'from-blue-400 to-cyan-500';
    if (level >= 65) return 'from-yellow-400 to-orange-500';
    return 'from-red-400 to-pink-500';
  };

  const getSkillRating = (level: number) => {
    return Math.ceil(level / 20);
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-32 h-32 border border-blue-200 dark:border-blue-800 rounded-full opacity-20"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-1/4 w-24 h-24 border border-emerald-200 dark:border-emerald-800 rounded-full opacity-20"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block p-3 bg-gradient-to-r from-blue-100 to-emerald-100 dark:from-blue-900/30 dark:to-emerald-900/30 rounded-full mb-6"
          >
            <TrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical skills and professional competencies, 
            continuously evolving with industry trends and best practices.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`group flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg shadow-blue-500/25`
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <category.icon size={18} className="mr-2" />
              <span className="font-medium">{category.label}</span>
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full -z-10"
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-600 relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${getSkillColor(skill.level)} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Skill Header */}
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.experience}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {skill.level}%
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          className={`${
                            i < getSkillRating(skill.level)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300 dark:text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4 relative z-10">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                      className={`h-full bg-gradient-to-r ${getSkillColor(skill.level)} rounded-full relative`}
                    >
                      <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse" />
                    </motion.div>
                  </div>
                </div>

                {/* Projects Count */}
                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 relative z-10">
                  <span>Projects completed</span>
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    {skill.projects}
                  </span>
                </div>

                {/* Hover Effect */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  className="absolute top-4 right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
                >
                  ✓
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 border border-blue-200 dark:border-gray-600">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform">
                  {skills.length}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wider">
                  Total Skills
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2 group-hover:scale-110 transition-transform">
                  {skills.filter(s => s.level >= 85).length}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wider">
                  Expert Level
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2 group-hover:scale-110 transition-transform">
                  {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wider">
                  Average Proficiency
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2 group-hover:scale-110 transition-transform">
                  {skills.reduce((acc, skill) => acc + skill.projects, 0)}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wider">
                  Total Projects
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;