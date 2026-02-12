import React from "react";
import { motion } from "framer-motion";
import { Icon } from "../assests/assets.js";

const impactMap = [
  {
    tech: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    use: "Core programming & ML development",
    impact: "Rapid prototyping and production-ready AI systems",
  },
  {
    tech: "TensorFlow",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    use: "Deep learning model training & optimization",
    impact: "High-accuracy neural networks with transfer learning",
  },
  {
    tech: "OpenCV",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
    use: "Computer vision & image processing",
    impact: "Real-time face detection and visual analysis",
  },
  {
    tech: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    use: "Systems programming & DSA",
    impact: "Optimized algorithms with efficient memory management",
  },
  {
    tech: "Flask/Django",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    use: "Backend & API development",
    impact: "Scalable web applications serving ML models",
  },
  {
    tech: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    use: "Relational database management",
    impact: "Structured data storage with optimized queries",
  },
  {
    tech: "MongoDB",
    icon: Icon.Mongo,
    use: "NoSQL database & data modeling",
    impact: "Flexible and scalable unstructured data storage",
  },
  {
    tech: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    use: "Containerization & deployment",
    impact: "Consistent environments from development to production",
  },
];

const TechImpact = () => {
  return (
    <section className="relative bg-black py-32 px-6 md:px-20 overflow-hidden">
      <motion.div
        animate={{ x: [0, 60, 0], opacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-1/4 right-[-5%] w-[400px] h-[400px] bg-[#C778DD]/10 blur-[140px] rounded-full pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-20 max-w-3xl relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Tech → <span className="text-[#C778DD]">Impact</span>
        </h2>
        <p className="mt-4 text-gray-400">
          How each technology I use translates into real-world impact and value.
        </p>
      </motion.div>

      <div className="space-y-5 max-w-6xl mx-auto relative z-10">
        {impactMap.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.08, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
              borderColor: "#C778DD",
              boxShadow: "0 0 30px rgba(199,120,221,0.15)",
            }}
            className="grid grid-cols-1 md:grid-cols-[1fr_2fr_2fr] gap-6 items-center bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <motion.img
                whileHover={{ rotate: [0, -15, 15, 0], scale: 1.2 }}
                transition={{ duration: 0.5 }}
                src={item.icon}
                alt={item.tech}
                className="w-10 h-10 object-contain"
              />
              <span className="text-white font-semibold text-lg">
                {item.tech}
              </span>
            </div>

            <div className="text-gray-300 text-sm leading-relaxed flex items-center gap-3">
              <motion.span
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                className="w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0 hidden md:block"
              />
              {item.use}
            </div>

            <div className="text-[#C778DD] font-medium text-sm flex items-center gap-3">
              <span className="text-lg hidden md:block">→</span>
              {item.impact}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechImpact;
