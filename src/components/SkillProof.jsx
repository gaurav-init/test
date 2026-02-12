import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Programming Languages",
    color: "#C778DD",
    skills: [
      { name: "Python", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "C++", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "C", level: "Basic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "R", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
      { name: "SQL", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
  },
  {
    category: "Deep Learning & AI",
    color: "#8b5cf6",
    skills: [
      { name: "TensorFlow", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "Neural Networks", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "CNN", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "RNN", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "Encoder-Decoder", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "VGG16", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    ],
  },
  {
    category: "Computer Vision & Data",
    color: "#f472b6",
    skills: [
      { name: "OpenCV", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
      { name: "Matplotlib", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
      { name: "NumPy", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "Pandas", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    ],
  },
  {
    category: "Frameworks & Backend",
    color: "#34d399",
    skills: [
      { name: "Flask", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
      { name: "Django", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      { name: "Streamlit", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg" },
      { name: "REST APIs", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    ],
  },
  {
    category: "Databases",
    color: "#fbbf24",
    skills: [
      { name: "MySQL", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "MongoDB", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ],
  },
  {
    category: "DevOps & Tools",
    color: "#60a5fa",
    skills: [
      { name: "Git", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Docker", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "VS Code", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Jupyter", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
      { name: "Vercel", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
      { name: "Netlify", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" },
    ],
  },
  {
    category: "Operating Systems & Others",
    color: "#a78bfa",
    skills: [
      { name: "Linux", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "Ubuntu", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-original.svg" },
      { name: "Bash", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 20 },
  },
};

const SkillProof = () => {
  return (
    <section className="relative bg-black py-32 px-6 md:px-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[-10%] w-[400px] h-[400px] bg-[#C778DD]/10 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-[-10%] w-[350px] h-[350px] bg-indigo-500/10 blur-[120px] rounded-full"
        />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Complete <span className="text-[#C778DD]">Skill Arsenal</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Every technology, framework, and tool in my development toolkit.
          </p>
        </motion.div>

        <div className="space-y-16 max-w-7xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: catIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: catIndex * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: catIndex * 0.3 }}
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: category.color }}
                />
                <h3 className="text-xl font-semibold text-white">
                  {category.category}
                </h3>
                <div
                  className="flex-1 h-px opacity-30"
                  style={{ background: `linear-gradient(to right, ${category.color}, transparent)` }}
                />
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-4"
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={cardVariants}
                    whileHover={{
                      scale: 1.08,
                      borderColor: category.color,
                      boxShadow: `0 0 25px ${category.color}30`,
                    }}
                    className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-3 backdrop-blur cursor-default"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-7 h-7 object-contain"
                    />
                    <div>
                      <span className="text-white font-medium text-sm">{skill.name}</span>
                      <span
                        className="block text-[10px] font-semibold uppercase tracking-wider"
                        style={{ color: category.color }}
                      >
                        {skill.level}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 max-w-4xl mx-auto"
        >
          <h3 className="text-xl font-semibold text-white mb-8 text-center">
            Relevant <span className="text-[#C778DD]">Coursework</span>
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {[
              "Design & Analysis of Algorithms",
              "Operating Systems",
              "Object-Oriented Programming",
              "Database Management Systems",
              "Software Engineering",
              "System Design",
            ].map((course) => (
              <motion.span
                key={course}
                variants={cardVariants}
                whileHover={{ scale: 1.05, borderColor: "#C778DD" }}
                className="text-sm text-gray-300 border border-white/10 rounded-full px-5 py-2 bg-white/5 backdrop-blur cursor-default"
              >
                {course}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <h3 className="text-xl font-semibold text-white mb-8 text-center">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Python Developer", provider: "Self-Study", year: "2022" },
              { title: "Data Science Course", provider: "PW Skills", year: "2023" },
              { title: "AI Learning", provider: "IBM Skillbuild", year: "2024" },
              { title: "Generative AI Fundamentals", provider: "Generative AI", year: "2024" },
              { title: "Docker Essentials", provider: "Udemy", year: "2025" },
              { title: "UI/UX Design", provider: "Udemy", year: "2025" },
            ].map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, borderColor: "#C778DD" }}
                className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur"
              >
                <p className="text-white font-medium text-sm">{cert.title}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-gray-400 text-xs">{cert.provider}</span>
                  <span className="text-[#C778DD] text-xs font-semibold">{cert.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillProof;
