import React from "react";
import { motion } from "framer-motion";
import { Icon } from "../assests/assets.js";

const techStack = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "bg-retro-yellow" },
  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", color: "bg-retro-orange" },
  { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg", color: "bg-retro-lime" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", color: "bg-retro-blue" },
  { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", color: "bg-retro-card" },
  { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", color: "bg-retro-lime" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "bg-retro-blue" },
  { name: "MongoDB", icon: Icon.Mongo, color: "bg-retro-pink" },
  { name: "Docker", icon: Icon.docker, color: "bg-retro-blue" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "bg-retro-orange" },
  { name: "R", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg", color: "bg-retro-blue" },
  { name: "Streamlit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg", color: "bg-retro-pink" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};
const itemAnim = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Technology = () => {
  return (
    <section className="bg-retro-bg py-24 md:py-32 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="retro-eyebrow mb-5 inline-block">{"// Stack"}</span>
          <h2 className="retro-display text-4xl md:text-6xl leading-[1] mt-5">
            Tools & <span className="retro-mark retro-mark--blue">Tech</span>
          </h2>
          <p className="mt-5 text-retro-muted max-w-xl mx-auto">
            How AI/ML and backend technologies combine to form my full-stack AI DNA.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5"
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemAnim}
              whileHover={{ y: -4, x: -4 }}
              className={`retro-card ${tech.color} p-5 flex flex-col items-start gap-4`}
            >
              <span className="inline-flex items-center justify-center w-14 h-14 bg-retro-card border-2 border-retro-ink  shadow-retro">
                <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
              </span>
              <div>
                <h3 className="font-display text-lg leading-tight">{tech.name}</h3>
                <p className="font-mono text-[11px] uppercase tracking-widest text-retro-muted mt-1">
                  Tool
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 retro-card p-8 md:p-10 bg-retro-yellow flex flex-col md:flex-row gap-6 items-center justify-between"
        >
          <div>
            <h3 className="font-display text-2xl md:text-3xl leading-tight">
              Saurabh — AI &amp; ML Developer
            </h3>
            <p className="mt-2 text-retro-muted max-w-xl">
              I design, train, and deploy intelligent AI systems — from raw data
              to production-ready models.
            </p>
          </div>
          <a href="#projects" className="retro-btn retro-btn--white shrink-0">
            See Projects →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Technology;
