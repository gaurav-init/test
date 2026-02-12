import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-[#0E0E11] text-white overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#C778DD]/20 blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-px w-full bg-gradient-to-r from-transparent via-[#C778DD]/40 to-transparent origin-center"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-14 text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed"
        >
          I'd <span className="text-[#C778DD] font-medium">love</span> to hear
          from you. Whether it's an AI project, a collaboration, or just a hello —
          <br className="hidden sm:block" />
          <span className="text-white">
            drop a message and let's build something intelligent together.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring" }}
          className="mt-8 flex justify-center gap-6"
        >
          {[
            { name: "GitHub", href: "https://github.com/saurabhsingh8xm" },
            { name: "LinkedIn", href: "https://linkedin.com/in/saurabhsingh8xm" },
            { name: "Email", href: "mailto:saurabhsingh8xm@gmail.com" },
          ].map((link) => (
            <motion.a
              key={link.name}
              whileHover={{ scale: 1.1, color: "#C778DD" }}
              whileTap={{ scale: 0.95 }}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-[#C778DD] transition border border-white/10 px-4 py-2 rounded-full"
            >
              {link.name}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-xs uppercase tracking-widest text-[#C778DD]"
        >
          Open for conversations
        </motion.div>
      </div>

      <div className="relative z-10 bg-black/40 backdrop-blur border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-xs text-gray-500">
            © {new Date().getFullYear()} Saurabh Singh • All rights reserved
          </span>

          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-xs text-gray-500"
          >
            Crafted with focus & intent
          </motion.span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
