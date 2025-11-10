import React from "react";
import { motion } from "framer-motion";

const workflow = [
  {
    step: "01",
    title: "Research & Problem Definition",
    desc: "Understanding the problem domain, gathering requirements, and defining the ML approach.",
    tech: ["Problem Analysis", "Literature Review", "Data Strategy"],
  },
  {
    step: "02",
    title: "Data Preprocessing & Augmentation",
    desc: "Cleaning, normalizing, and augmenting datasets to improve model generalization.",
    tech: ["NumPy", "Pandas", "Data Augmentation", "Normalization"],
  },
  {
    step: "03",
    title: "Model Architecture & Training",
    desc: "Designing and training neural networks with optimized hyperparameters.",
    tech: ["TensorFlow", "CNN", "VGG16", "Transfer Learning"],
  },
  {
    step: "04",
    title: "Evaluation & Optimization",
    desc: "Analyzing model performance with metrics and fine-tuning for better accuracy.",
    tech: ["Accuracy Metrics", "Loss Analysis", "Backpropagation", "Adam Optimizer"],
  },
  {
    step: "05",
    title: "Deployment & Integration",
    desc: "Deploying models with backend APIs and integrating into real-world applications.",
    tech: ["Flask", "Django", "Docker", "REST APIs"],
  },
];

const WorkFlow = () => {
  return (
    <section
      id="workflow"
      className="relative px-6 md:px-20 py-32 bg-black overflow-hidden"
    >
      <motion.div
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mb-24 relative z-10"
      >
        <h2 className="text-5xl font-extrabold text-white leading-tight">
          Development <span className="text-[#C778DD]">Workflow</span>
        </h2>
        <p className="mt-6 text-gray-400 text-lg">
          A structured approach I follow to build intelligent, production-ready AI/ML
          systems.
        </p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto z-10">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute left-[14px] top-0 h-full w-px bg-gradient-to-b from-[#C778DD] via-[#bd61d6] to-transparent origin-top"
        />

        <div className="space-y-1">
          {workflow.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.12, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="relative flex gap-8"
            >
              <div className="relative z-10 flex-shrink-0">
                <motion.div
                  animate={{ boxShadow: ["0 0 0px #C778DD", "0 0 20px #C778DD", "0 0 0px #C778DD"] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.4 }}
                  className="w-8 h-8 rounded-full bg-[#C778DD] flex items-center justify-center text-black font-bold text-xs"
                >
                  {item.step}
                </motion.div>
              </div>

              <motion.div
                whileHover={{
                  borderColor: "#C778DD",
                  boxShadow: "0 0 30px rgba(199,120,221,0.15)",
                  x: 8,
                }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg w-full transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-400">{item.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tech.map((t, i) => (
                    <motion.span
                      key={t}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                      className="text-xs text-[#C778DD] bg-[#C778DD]/10 px-3 py-1 rounded-full"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkFlow;
