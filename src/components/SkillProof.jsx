import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Programming Languages",
    color: "bg-retro-yellow",
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
    color: "bg-retro-pink",
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
    color: "bg-retro-lime",
    skills: [
      { name: "OpenCV", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
      { name: "Matplotlib", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
      { name: "NumPy", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "Pandas", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    ],
  },
  {
    category: "Frameworks & Backend",
    color: "bg-retro-blue",
    skills: [
      { name: "Flask", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
      { name: "Django", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      { name: "Streamlit", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg" },
      { name: "REST APIs", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    ],
  },
  {
    category: "Databases",
    color: "bg-retro-orange",
    skills: [
      { name: "MySQL", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "MongoDB", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ],
  },
  {
    category: "DevOps & Tools",
    color: "bg-retro-purple",
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
];

const courses = [
  "Design & Analysis of Algorithms",
  "Operating Systems",
  "Object-Oriented Programming",
  "Database Management Systems",
  "Software Engineering",
  "System Design",
];

const certs = [
  { title: "Python Developer", provider: "Self-Study", year: "2022", color: "bg-retro-yellow" },
  { title: "Data Science Course", provider: "PW Skills", year: "2023", color: "bg-retro-pink" },
  { title: "AI Learning", provider: "IBM Skillbuild", year: "2024", color: "bg-retro-lime" },
  { title: "Generative AI Fundamentals", provider: "Generative AI", year: "2024", color: "bg-retro-blue" },
  { title: "Docker Essentials", provider: "Udemy", year: "2025", color: "bg-retro-orange" },
  { title: "UI/UX Design", provider: "Udemy", year: "2025", color: "bg-retro-purple" },
];

const SkillProof = () => {
  return (
    <section className="bg-retro-bg py-24 md:py-32 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <span className="retro-eyebrow mb-5 inline-block">{"// Skills"}</span>
          <h2 className="retro-display text-4xl md:text-6xl leading-[1] mt-5">
            Complete <span className="retro-mark retro-mark--lime">skill arsenal</span>
          </h2>
          <p className="mt-5 text-retro-muted text-lg">
            Every technology, framework, and tool in my development toolkit.
          </p>
        </motion.div>

        <div className="space-y-10">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
            >
              <div className="flex items-center gap-4 mb-5">
                <span
                  className={`inline-block w-6 h-6 ${cat.color} border-2 border-retro-ink `}
                />
                <h3 className="font-display text-xl md:text-2xl uppercase tracking-tight">
                  {cat.category}
                </h3>
                <span className="h-[3px] flex-1 bg-retro-ink rounded-full" />
              </div>
              <div className="flex flex-wrap gap-4">
                {cat.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -3, x: -3 }}
                    className="retro-card px-4 py-3 flex items-center gap-3"
                  >
                    <span className="inline-flex items-center justify-center w-10 h-10 bg-retro-soft border-2 border-retro-ink ">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-6 h-6"
                      />
                    </span>
                    <div>
                      <p className="font-display text-sm">{skill.name}</p>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-retro-muted">
                        {skill.level}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coursework */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h3 className="font-display text-2xl md:text-3xl text-center mb-8">
            Relevant <span className="retro-mark retro-mark--blue">coursework</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {courses.map((c) => (
              <span key={c} className="retro-chip">
                {c}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="font-display text-2xl md:text-3xl text-center mb-8">
            Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certs.map((cert) => (
              <div key={cert.title} className="retro-card p-5">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`inline-block w-8 h-8 ${cert.color} border-2 border-retro-ink `}
                  />
                  <span className="retro-chip">{cert.year}</span>
                </div>
                <h4 className="font-display text-base leading-tight">{cert.title}</h4>
                <p className="font-mono text-xs text-retro-muted mt-1 uppercase tracking-widest">
                  {cert.provider}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillProof;
