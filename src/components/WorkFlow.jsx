import React from "react";
import { motion } from "framer-motion";

const workflow = [
  {
    step: "01",
    title: "Research & Problem Definition",
    desc: "Understanding the problem domain, gathering requirements, and defining the ML approach.",
    tech: ["Problem Analysis", "Literature Review", "Data Strategy"],
    color: "bg-retro-yellow",
  },
  {
    step: "02",
    title: "Data Preprocessing & Augmentation",
    desc: "Cleaning, normalizing, and augmenting datasets to improve model generalization.",
    tech: ["NumPy", "Pandas", "Data Augmentation", "Normalization"],
    color: "bg-retro-pink",
  },
  {
    step: "03",
    title: "Model Architecture & Training",
    desc: "Designing and training neural networks with optimized hyperparameters.",
    tech: ["TensorFlow", "CNN", "VGG16", "Transfer Learning"],
    color: "bg-retro-lime",
  },
  {
    step: "04",
    title: "Evaluation & Optimization",
    desc: "Analyzing model performance with metrics and fine-tuning for better accuracy.",
    tech: ["Accuracy Metrics", "Loss Analysis", "Backpropagation", "Adam"],
    color: "bg-retro-blue",
  },
  {
    step: "05",
    title: "Deployment & Integration",
    desc: "Deploying models with backend APIs and integrating into real-world apps.",
    tech: ["Flask", "Django", "Docker", "REST APIs"],
    color: "bg-retro-orange",
  },
];

const WorkFlow = () => {
  return (
    <section
      id="workflow"
      className="bg-retro-soft py-24 md:py-32 px-5 md:px-10 border-y-2 border-retro-ink"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="retro-eyebrow mb-5 inline-block">{"// Process"}</span>
          <h2 className="retro-display text-4xl md:text-6xl leading-[1] mt-5">
            Development <span className="retro-mark retro-mark--pink">workflow</span>
          </h2>
          <p className="mt-6 text-lg text-retro-muted leading-relaxed">
            A structured approach I follow to build intelligent, production-ready
            AI/ML systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflow.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="retro-card p-7 flex flex-col gap-5"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`inline-flex items-center justify-center w-14 h-14 ${item.color} border-2 border-retro-ink  shadow-retro font-display text-xl`}
                >
                  {item.step}
                </span>
                <span className="retro-chip">Step {item.step}</span>
              </div>

              <div>
                <h3 className="font-display text-xl leading-tight">{item.title}</h3>
                <p className="mt-3 text-retro-muted leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t-2 border-dashed border-retro-ink/30">
                {item.tech.map((t) => (
                  <span key={t} className="retro-chip mt-3">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkFlow;
