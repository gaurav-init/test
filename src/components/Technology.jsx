import React from "react";
import { motion } from "framer-motion";
import { Icon } from "../assests/assets.js";
import RotatingText from "../animate_compo/RotatingText.jsx";

const dnaStack = [
  {
    left: { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    right: { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  },
  {
    left: { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    right: { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
  },
  {
    left: { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    right: { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  },
  {
    left: { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    right: { name: "MongoDB", icon: Icon.Mongo },
  },
  {
    left: { name: "Docker", icon: Icon.docker },
    right: { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  },
  {
    left: { name: "R", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
    right: { name: "Streamlit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg" },
  },
];

const TechCard = ({ icon, name, direction }) => (
  <motion.div
    whileHover={{
      scale: 1.08,
      borderColor: "#C778DD",
      boxShadow: "0 0 30px rgba(199,120,221,0.3)",
    }}
    initial={{ opacity: 0, x: direction === "left" ? -60 : 60 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ type: "spring", stiffness: 200, damping: 25 }}
    viewport={{ once: true }}
    className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4 backdrop-blur hover:border-[#C778DD]/60"
  >
    <motion.img
      whileHover={{ rotate: [0, -10, 10, 0] }}
      transition={{ duration: 0.5 }}
      src={icon}
      alt={name}
      className="w-8 h-8 object-contain"
    />
    <span className="text-white font-medium">{name}</span>
  </motion.div>
);

const Technology = () => {
  return (
    <section className="relative bg-black py-32 px-6 md:px-16 overflow-hidden">
      <motion.div
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C778DD]/10 blur-[180px] rounded-full pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-24 text-center relative z-10"
      >
        <div className="flex justify-center">
          <RotatingText
            texts={["TOOLS", "&", "TECHNOLOGIES"]}
            mainClassName="text-[#C778DD] text-3xl md:text-5xl font-bold"
            rotationInterval={2000}
          />
        </div>

        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          How AI/ML and backend technologies combine to form my full-stack AI DNA.
        </p>
      </motion.div>

      <div className="relative max-w-5xl mx-auto z-10">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute left-1/2 top-0 bottom-32 w-[2px]
                     bg-gradient-to-b from-transparent via-[#C778DD]/50 to-transparent
                     origin-top hidden md:block"
        />

        <div className="space-y-24 relative">
          {dnaStack.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-between flex-col md:flex-row gap-10"
            >
              <div className="w-full md:w-[45%] flex justify-end">
                <TechCard {...item.left} direction="left" />
              </div>

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="absolute md:static left-1/2 -translate-x-1/2
                           w-4 h-4 rounded-full bg-[#C778DD]
                           shadow-[0_0_12px_#C778DD]"
              >
                <motion.div
                  animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  className="w-full h-full rounded-full bg-[#C778DD]"
                />
              </motion.div>

              <div className="w-full md:w-[45%] flex justify-start">
                <TechCard {...item.right} direction="right" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="mt-36 text-center"
        >
          <h3 className="text-2xl font-bold text-white">
            Saurabh — <span className="text-[#C778DD]">AI & ML Developer</span>
          </h3>
          <p className="mt-3 text-gray-400 max-w-lg mx-auto">
            I design, train, and deploy intelligent AI systems —
            from raw data to production-ready models.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Technology;
