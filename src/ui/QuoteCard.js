import React from "react";
import { motion } from "framer-motion";

const QuoteCard = () => {
  return (
    <section className="bg-retro-bg py-10 px-5 md:px-10 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-3xl"
      >
        <div className="absolute -top-3 -left-3 w-full h-full bg-retro-pink border-2 border-retro-ink rounded-retro" />
        <div className="relative retro-card bg-retro-yellow p-7 md:p-10">
          <span className="absolute -top-4 left-6 font-display text-6xl leading-none">"</span>
          <p className="font-display text-xl md:text-2xl leading-snug pl-2">
            I don't just train models — I teach machines to{" "}
            <span className="bg-retro-card border-2 border-retro-ink px-2 rounded-md">
              see
            </span>
            .
          </p>
          <div className="mt-5 flex items-center gap-3">
            <span className="inline-block w-3 h-3 bg-retro-ink rounded-full" />
            <span className="font-mono text-sm uppercase tracking-widest">
              Saurabh Singh
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default QuoteCard;
