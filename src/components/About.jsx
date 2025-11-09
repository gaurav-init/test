import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Experience", value: "Zanzee Company", icon: "💼" },
  { label: "Coding Challenges", value: "1,000+ Solved", icon: "🏆" },
  { label: "Primary Focus", value: "AI & Machine Learning", icon: "🧠" },
  { label: "Science Exhibition", value: "2nd Rank", icon: "🥈" },
];

const highlights = [
  "B.Tech in CSE (AI & ML) from SAITM — 8.0 CGPA (2022–2026)",
  "Deep Learning expertise with CNN, RNN & VGG16 Transfer Learning",
  "Computer Vision projects using OpenCV & TensorFlow",
  "Backend development with Flask, Django & RESTful APIs",
  "1,000+ coding challenges on LeetCode, CodeStudio & CodeChef",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const About = () => {
  return (
    <section
      id="about"
      className="relative px-6 md:px-20 py-28 md:py-40 bg-black overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(199,120,221,0.15),transparent_40%)]" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_40%)]" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-[300px] h-[300px] border border-dashed border-[#C778DD]/10 rounded-full pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-3xl mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-extrabold text-white leading-tight"
          >
            Crafting <span className="text-[#C778DD]">Intelligent</span><br />
            Systems & AI Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-gray-400 text-lg leading-relaxed"
          >
            I'm <span className="text-[#C778DD] font-semibold">Saurabh</span>, an AI & ML Engineer with a strong focus on
            <span className="text-white"> deep learning and computer vision</span>. I specialize in building
            intelligent systems using <span className="text-white">Python, TensorFlow, OpenCV</span> and
            <span className="text-white"> neural network architectures</span>. I enjoy turning raw data into reliable, production-ready
            AI models with clean code and solid architecture.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-14 items-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-5"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 8, borderColor: "#C778DD" }}
                className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur"
              >
                <motion.span
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  className="mt-2 w-2 h-2 rounded-full bg-[#C778DD] flex-shrink-0"
                />
                <p className="text-gray-300 text-sm">{item}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -inset-10 rounded-full bg-gradient-to-tr from-[#C778DD]/30 to-purple-500/20 blur-3xl"
            />
            <motion.img
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 200 }}
              src="https://images.unsplash.com/photo-1515879218367-8466d910adef?w=500&q=80"
              alt="AI Developer"
              className="relative w-72 md:w-80 lg:w-96 object-contain rounded-2xl"
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-5"
          >
            {stats.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: 30 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: index * 0.1 } },
                }}
                whileHover={{
                  scale: 1.03,
                  borderColor: "#C778DD",
                  boxShadow: "0 0 25px rgba(199,120,221,0.2)",
                }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="text-2xl font-bold text-white">
                    {item.value}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm mt-2">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
