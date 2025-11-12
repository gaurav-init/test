import React from "react";
import { motion } from "framer-motion";
import { Icon } from "../assests/assets.js";

const impactMap = [
  {
    tech: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    use: "Core programming & ML development",
    impact: "Rapid prototyping and production-ready AI systems",
    color: "bg-retro-yellow",
  },
  {
    tech: "TensorFlow",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    use: "Deep learning model training & optimization",
    impact: "High-accuracy neural networks with transfer learning",
    color: "bg-retro-orange",
  },
  {
    tech: "OpenCV",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
    use: "Computer vision & image processing",
    impact: "Real-time face detection and visual analysis",
    color: "bg-retro-lime",
  },
  {
    tech: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    use: "Systems programming & DSA",
    impact: "Optimized algorithms with efficient memory management",
    color: "bg-retro-blue",
  },
  {
    tech: "Flask / Django",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    use: "Backend & API development",
    impact: "Scalable web applications serving ML models",
    color: "bg-retro-pink",
  },
  {
    tech: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    use: "Relational database management",
    impact: "Structured data storage with optimized queries",
    color: "bg-retro-blue",
  },
  {
    tech: "MongoDB",
    icon: Icon.Mongo,
    use: "NoSQL database & data modeling",
    impact: "Flexible and scalable unstructured data storage",
    color: "bg-retro-lime",
  },
  {
    tech: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    use: "Containerization & deployment",
    impact: "Consistent environments from dev to production",
    color: "bg-retro-blue",
  },
];

const TechImpact = () => {
  return (
    <section className="bg-retro-bg py-24 md:py-32 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="retro-eyebrow mb-5 inline-block">{"// Impact"}</span>
          <h2 className="retro-display text-4xl md:text-6xl leading-[1] mt-5">
            Tech → <span className="retro-mark retro-mark--blue">impact</span>
          </h2>
          <p className="mt-5 text-retro-muted text-lg">
            How each technology I use translates into real-world impact and value.
          </p>
        </motion.div>

        <div className="space-y-5 max-w-5xl">
          {impactMap.map((item, i) => (
            <motion.div
              key={item.tech}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -3, x: -3 }}
              className="retro-card p-5 md:p-6 grid grid-cols-1 md:grid-cols-[auto_1fr_1fr] gap-5 items-center"
            >
              <div className="flex items-center gap-4 md:min-w-[200px]">
                <span
                  className={`inline-flex items-center justify-center w-14 h-14 ${item.color} border-2 border-retro-ink  shadow-retro`}
                >
                  <img src={item.icon} alt={item.tech} className="w-8 h-8" />
                </span>
                <span className="font-display text-lg">{item.tech}</span>
              </div>

              <div className="text-sm text-retro-muted leading-relaxed">
                <span className="font-display uppercase text-[10px] tracking-widest block mb-1">
                  Use
                </span>
                {item.use}
              </div>

              <div className="text-sm font-medium leading-relaxed">
                <span className="font-display uppercase text-[10px] tracking-widest block mb-1 text-retro-muted">
                  Impact →
                </span>
                {item.impact}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechImpact;
