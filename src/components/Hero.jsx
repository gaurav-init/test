
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "../assests/assets";
import Links from "../ui/Links";
import TargetCursor from "../animate_compo/TargetCursor";

const floatingTechs = [
  { name: "Python", x: "10%", y: "15%", delay: 0 },
  { name: "TensorFlow", x: "75%", y: "10%", delay: 0.5 },
  { name: "OpenCV", x: "85%", y: "65%", delay: 1 },
  { name: "CNN", x: "5%", y: "70%", delay: 1.5 },
];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-25%] left-[-15%] w-[420px] h-[420px] bg-[#C778DD]/30 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-25%] right-[-15%] w-[500px] h-[500px] bg-indigo-500/25 blur-[160px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]" />
        <motion.div
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full"
        />
      </div>

      {floatingTechs.map((tech, i) => (
        <motion.span
          key={tech.name}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.4, scale: 1, y: [0, -15, 0] }}
          transition={{
            opacity: { delay: 1.5 + tech.delay, duration: 0.8 },
            scale: { delay: 1.5 + tech.delay, duration: 0.8, type: "spring" },
            y: { delay: 2 + tech.delay, duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute hidden lg:block text-xs text-[#C778DD]/60 font-mono border border-[#C778DD]/20 px-3 py-1 rounded-full backdrop-blur-sm"
          style={{ left: tech.x, top: tech.y }}
        >
          {tech.name}
        </motion.span>
      ))}

      <TargetCursor spinDuration={2} hideDefaultCursor />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 md:px-14 grid md:grid-cols-2 gap-20 items-center"
      >

        <div>
          <Links />

          <motion.h1
            variants={staggerItem}
            className="cursor-target text-white font-extrabold leading-[1.1]
                       text-[30px] sm:text-[38px] lg:text-[60px]"
          >
            Building intelligent
            <br />
            <span className="relative inline-block text-[#C778DD]">
              AI solutions
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                className="absolute left-0 -bottom-0 border-0 rounded-full h-[3px] w-full
                           bg-gradient-to-r from-[#C778DD] to-indigo-400
                           origin-left"
              />
            </span>
            <br />
            that learn, adapt, and evolve.
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mt-8 max-w-xl text-gray-400
                       text-sm sm:text-base lg:text-lg leading-relaxed"
          >
            I'm <span className="text-white font-semibold">Saurabh</span> — an
            AI & ML engineer crafting intelligent systems with deep learning,
            computer vision, and data-driven solutions
            that solve real-world problems.
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="mt-3 text-sm text-gray-500"
          >
            From data → model → deployment.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mt-12 flex flex-wrap gap-6"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(199,120,221,0.7)" }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="cursor-target px-9 py-3 rounded-md
                         bg-gradient-to-r from-[#C778DD] to-indigo-400
                         text-black font-semibold transition"
            >
              Let's Build Something
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, borderColor: "#C778DD" }}
              whileTap={{ scale: 0.95 }}
              href="/saurabh_singh.pdf"
              download
              className="cursor-target px-9 py-3 rounded-md
                         border border-white/20 text-white
                         hover:text-[#C778DD] transition"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.88, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.2, 0.6] }}
            transition={{ duration: 4.5, repeat: Infinity }}
            className="absolute w-[340px] h-[340px] lg:w-[440px] lg:h-[440px]
                       rounded-full border border-[#C778DD]/30"
          />
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.15, 0.4] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]
                       rounded-full border border-indigo-400/20"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-[380px] h-[380px] lg:w-[480px] lg:h-[480px] rounded-full border border-dashed border-[#C778DD]/10"
          />

          <motion.img
            whileHover={{ scale: 1.07 }}
            transition={{ type: "spring", stiffness: 200 }}
            src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80"
            alt="Saurabh"
            className="relative z-10 h-[260px] sm:h-[320px] lg:h-[420px]
                       object-contain rounded-2xl
                       drop-shadow-[0_60px_100px_rgba(0,0,0,0.7)]"
          />

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-8 z-20 px-6 py-2 rounded-full
                       bg-white/5 backdrop-blur
                       border border-white/10
                       text-sm text-gray-300"
          >
            Currently building with{" "}
            <span className="text-[#C778DD] font-semibold">#Python</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
