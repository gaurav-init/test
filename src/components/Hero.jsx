"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { Sparkles, ArrowRight, Download } from "lucide-react";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const techPills = [
  { label: "Python", color: "bg-retro-yellow" },
  { label: "TensorFlow", color: "bg-retro-pink" },
  { label: "OpenCV", color: "bg-retro-lime" },
  { label: "CNN", color: "bg-retro-blue" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-retro-bg pt-8 pb-20 md:pt-12 md:pb-24 px-5 md:px-10 overflow-hidden"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative max-w-7xl mx-auto grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-start lg:items-center"
      >
        {/* LEFT: Text column */}
        <div>
          <motion.div variants={item} className="flex items-center gap-3 mb-4">
            <span className="retro-eyebrow flex items-center gap-2">
              <Sparkles size={12} /> Available for work
            </span>
            <span className="hidden sm:inline-flex items-center gap-2 text-sm font-mono">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Online
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="retro-display text-[40px] sm:text-[54px] lg:text-[68px] leading-[0.95] tracking-tight mb-5 max-w-[14ch]"
          >
            Building
            intelligent{" "}
            <span className="retro-mark retro-mark--pink">AI</span>{" "}
            that{" "}
            <span className="retro-mark retro-mark--lime">learns</span>.
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-[52ch] text-base md:text-lg text-retro-muted leading-[1.65] mb-4"
          >
            I'm <span className="font-bold text-retro-ink">Saurabh</span> — an AI
            &amp; ML engineer crafting deep-learning, computer-vision and
            data-driven systems that solve real-world problems.
          </motion.p>
          <motion.p
            variants={item}
            className="font-mono text-sm text-retro-muted tracking-wide mb-10"
          >
            data → model → deployment.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4 mb-12">
            <a href="#contact" className="retro-btn">
              Let's Build Something <ArrowRight size={16} />
            </a>
            <a
              href="/meraj_ansari.pdf"
              download
              className="retro-btn retro-btn--white"
            >
              <Download size={16} /> Resume
            </a>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-retro-muted">
              Find me
            </span>
            <div className="h-[2px] flex-1 max-w-[60px] bg-retro-ink" />
            {[
              { Icon: FaGithub, href: "https://github.com/saurabhsingh8xm" },
              { Icon: FaLinkedin, href: "https://linkedin.com/in/saurabhsingh8xm" },
              { Icon: FaTwitter, href: "https://twitter.com/saurabhsingh8xm" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-retro-card border-2 border-retro-ink shadow-retro hover:-translate-x-[2px] hover:-translate-y-[2px] transition"
              >
                <Icon size={16} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: Portrait card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          {/* Back accent blocks */}
          <div className="absolute top-6 left-6 w-full h-full bg-retro-pink border-2 border-retro-ink" />
          <div className="absolute -top-2 -left-2 w-full h-full bg-retro-lime border-2 border-retro-ink" />

          <div className="relative w-full max-w-md bg-retro-card border-2 border-retro-ink p-5 sm:p-6 shadow-retro-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-retro-pink border-2 border-retro-ink" />
                <span className="w-3 h-3 rounded-full bg-retro-yellow border-2 border-retro-ink" />
                <span className="w-3 h-3 rounded-full bg-retro-lime border-2 border-retro-ink" />
              </div>
              <span className="retro-mono text-xs">~/saurabh</span>
            </div>

            <img
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80"
              alt="Saurabh"
              className="w-full h-[280px] sm:h-[320px] object-cover border-2 border-retro-ink"
            />

            <div className="mt-5 flex items-center justify-between">
              <div>
                <h3 className="font-display text-xl">Saurabh Singh</h3>
                <p className="font-mono text-xs text-retro-muted">
                  AI / ML Engineer
                </p>
              </div>
              <span className="retro-chip retro-chip--yellow">v1.0</span>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {techPills.map((t) => (
                <span key={t.label} className="retro-chip">
                  <span
                    className={`inline-block w-2 h-2 mr-2 border border-retro-ink ${t.color}`}
                  />
                  {t.label}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
