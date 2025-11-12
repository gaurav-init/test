import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Experience", value: "Zanzee Co.", color: "bg-retro-yellow" },
  { label: "DSA Challenges", value: "1,000+", color: "bg-retro-pink" },
  { label: "Primary Focus", value: "AI & ML", color: "bg-retro-lime" },
  { label: "Science Exhibition", value: "Rank 2", color: "bg-retro-blue" },
];

const highlights = [
  "B.Tech in CSE (AI & ML) — SAITM, 8.0 CGPA (2022–2026)",
  "Deep Learning with CNN, RNN & VGG16 Transfer Learning",
  "Computer Vision using OpenCV & TensorFlow",
  "Backend: Flask, Django & RESTful APIs",
  "1,000+ challenges across LeetCode, CodeStudio, CodeChef",
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const About = () => {
  return (
    <section id="about" className="bg-retro-bg py-24 md:py-32 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="retro-eyebrow mb-5 inline-block">{"// About me"}</span>
          <h2 className="retro-display text-4xl md:text-6xl leading-[1] mt-5">
            Crafting{" "}
            <span className="retro-mark">intelligent</span>
            <br />
            systems & AI solutions
          </h2>
          <p className="mt-6 text-lg text-retro-muted leading-relaxed">
            I'm <span className="font-bold text-retro-ink">Saurabh</span>, an AI &
            ML Engineer with a strong focus on deep learning and computer vision.
            I build production-ready intelligent systems using Python, TensorFlow,
            OpenCV and modern neural-network architectures.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 items-start">
          {/* Highlights */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="font-display text-sm uppercase tracking-widest bg-retro-yellow border-2 border-retro-ink px-3 py-1 rounded-full">
                Highlights
              </span>
              <span className="h-[3px] flex-1 bg-retro-ink rounded-full" />
            </div>
            {highlights.map((line, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="retro-card p-5 flex items-start gap-4"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 bg-retro-pink border-2 border-retro-ink rounded-full font-display text-sm shrink-0">
                  {i + 1}
                </span>
                <p className="text-retro-ink font-medium leading-relaxed">
                  {line}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="retro-card p-6 flex flex-col gap-3"
              >
                <span
                  className={`inline-block w-10 h-10 ${stat.color} border-2 border-retro-ink  shadow-retro`}
                />
                <h3 className="font-display text-2xl md:text-3xl leading-tight">
                  {stat.value}
                </h3>
                <p className="font-mono text-xs uppercase tracking-widest text-retro-muted">
                  {stat.label}
                </p>
              </motion.div>
            ))}

            <div className="col-span-2 retro-card p-6 bg-retro-yellow">
              <p className="font-display text-xl md:text-2xl leading-tight">
                "I don't just train models —
                <br />I teach machines to see."
              </p>
              <p className="mt-3 font-mono text-xs uppercase tracking-widest">
                — Saurabh Singh
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
