"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, type: "spring", stiffness: 80 },
  },
};

const contactInfo = [
  {
    icon: FaPhoneAlt,
    label: "Channel",
    value: "+91-7520275692",
    ping: "#C778DD",
  },
  {
    icon: FaEnvelope,
    label: "Frequency",
    value: "saurabhsingh8xm@gmail.com",
    ping: "#8b5cf6",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Base Location",
    value: "India",
    ping: "#a78bfa",
  },
];

const socialLinks = [
  { Icon: FaLinkedin, href: "https://linkedin.com/in/saurabhsingh8xm", label: "LinkedIn" },
  { Icon: FaGithub, href: "https://github.com/saurabhsingh8xm", label: "GitHub" },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const res = await fetch("https://formspree.io/f/xnnqbwow", {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      alert("Transmission Failed. Try again.");
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-[#050505] text-white overflow-hidden px-6 py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#C778DD15_1px,transparent_1px)] bg-[size:28px_28px] opacity-30" />

      <motion.div
        animate={{ opacity: [0.1, 0.4, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#C778DD] to-transparent"
      />
      <motion.div
        animate={{ opacity: [0.05, 0.2, 0.05] }}
        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        className="absolute left-[calc(50%-80px)] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#8b5cf6]/50 to-transparent"
      />
      <motion.div
        animate={{ opacity: [0.05, 0.2, 0.05] }}
        transition={{ duration: 6, repeat: Infinity, delay: 3 }}
        className="absolute left-[calc(50%+80px)] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#8b5cf6]/50 to-transparent"
      />

      <motion.div
        animate={{ y: ["-100%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C778DD]/20 to-transparent"
      />

      <motion.div
        animate={{ x: [0, 40, 0], opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/4 left-[-5%] w-[400px] h-[400px] bg-[#C778DD]/10 blur-[150px] rounded-full pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -40, 0], opacity: [0.03, 0.1, 0.03] }}
        transition={{ duration: 12, repeat: Infinity, delay: 3 }}
        className="absolute bottom-1/4 right-[-5%] w-[350px] h-[350px] bg-[#8b5cf6]/10 blur-[150px] rounded-full pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="h-px w-48 mx-auto bg-gradient-to-r from-transparent via-[#C778DD] to-transparent mb-8 origin-center"
          />
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-wider">
            SIGNAL
            <span className="text-[#C778DD]"> SOURCE</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-400 mt-4 max-w-lg mx-auto text-lg"
          >
            Initiating a direct communication channel.
            Let's build something meaningful together.
          </motion.p>

          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center justify-center gap-2 mt-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-400" />
            <span className="text-xs uppercase tracking-[0.3em] text-green-400">
              Online — Ready to connect
            </span>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 lg:gap-8 items-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{
                  x: 12,
                  borderColor: item.ping,
                  boxShadow: `0 0 25px ${item.ping}20`,
                }}
                className="group flex items-start gap-5 bg-white/[0.03] border border-white/10 rounded-xl p-5 backdrop-blur-sm transition-all duration-300"
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      `0 0 0px ${item.ping}`,
                      `0 0 15px ${item.ping}`,
                      `0 0 0px ${item.ping}`,
                    ],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0"
                >
                  <item.icon className="text-[#C778DD]" />
                </motion.div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500 mb-1">
                    {item.label}
                  </p>
                  <p className="text-gray-200 font-medium group-hover:text-white transition-colors">
                    {item.value}
                  </p>
                </div>
                <motion.span
                  animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  className="ml-auto mt-2 w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: item.ping }}
                />
              </motion.div>
            ))}

            <motion.div
              variants={itemVariants}
              className="flex gap-4 pt-4"
            >
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{
                    scale: 1.15,
                    y: -4,
                    boxShadow: "0 8px 30px rgba(199,120,221,0.3)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#C778DD] hover:border-[#C778DD]/40 transition-all duration-300"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
            viewport={{ once: true }}
            className="hidden lg:flex flex-col items-center justify-center py-12"
          >
            <div className="relative w-48 h-48 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-[#C778DD]/20"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-dashed border-[#8b5cf6]/15"
              />

              {[0, 1, 2].map((ring) => (
                <motion.div
                  key={ring}
                  animate={{
                    scale: [1, 2.5, 2.5],
                    opacity: [0.4, 0.1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: ring * 1,
                    ease: "easeOut",
                  }}
                  className="absolute w-16 h-16 rounded-full border border-[#C778DD]/30"
                />
              ))}

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute w-24 h-24"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-[#C778DD]/60 to-transparent origin-bottom" />
              </motion.div>

              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  boxShadow: [
                    "0 0 20px rgba(199,120,221,0.3)",
                    "0 0 40px rgba(199,120,221,0.6)",
                    "0 0 20px rgba(199,120,221,0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-5 h-5 rounded-full bg-[#C778DD]"
              />
            </div>

            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mt-8 text-center"
            >
              <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500">
                Signal Strength
              </p>
              <div className="flex items-end gap-1 justify-center mt-2">
                {[0.3, 0.5, 0.7, 0.9, 1].map((h, i) => (
                  <motion.div
                    key={i}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15 }}
                    className="w-1 rounded-full bg-[#C778DD]"
                    style={{ height: `${h * 24}px` }}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-4 text-[10px] uppercase tracking-[0.3em] text-[#C778DD]"
            >
              Awaiting Transmission
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 0px rgba(199,120,221,0)",
                  "0 0 40px rgba(199,120,221,0.1)",
                  "0 0 0px rgba(199,120,221,0)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="bg-[#0A0A0E] border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-sm"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
                    animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        boxShadow: [
                          "0 0 0px rgba(199,120,221,0.3)",
                          "0 0 60px rgba(199,120,221,0.5)",
                          "0 0 0px rgba(199,120,221,0.3)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-20 h-20 rounded-full bg-[#C778DD]/20 border border-[#C778DD]/40 flex items-center justify-center mx-auto mb-6"
                    >
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring" }}
                        className="text-3xl"
                      >
                        ✓
                      </motion.span>
                    </motion.div>

                    <motion.h3
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-2xl font-bold text-[#C778DD]"
                    >
                      Signal Received
                    </motion.h3>
                    <motion.p
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-gray-400 mt-3"
                    >
                      Transmission successful. I'll respond shortly.
                    </motion.p>

                    {[0, 1, 2].map((ring) => (
                      <motion.div
                        key={ring}
                        initial={{ scale: 0.5, opacity: 0.5 }}
                        animate={{ scale: 3, opacity: 0 }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: ring * 0.6,
                        }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-[#C778DD]/30 pointer-events-none"
                      />
                    ))}
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold tracking-[0.2em] uppercase">
                        Transmission Panel
                      </h3>
                      <motion.div
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        <span className="text-[10px] uppercase tracking-widest text-green-400">
                          Secure
                        </span>
                      </motion.div>
                    </div>

                    {[
                      { name: "name", type: "text", placeholder: "Identifier — Your Name" },
                      { name: "email", type: "email", placeholder: "Frequency — Your Email" },
                    ].map((field) => (
                      <motion.div
                        key={field.name}
                        animate={{
                          borderColor:
                            focusedField === field.name
                              ? "#C778DD"
                              : "rgba(255,255,255,0.1)",
                          boxShadow:
                            focusedField === field.name
                              ? "0 0 20px rgba(199,120,221,0.15)"
                              : "0 0 0px transparent",
                        }}
                        className="rounded-xl border border-white/10 overflow-hidden transition-all duration-300"
                      >
                        <input
                          name={field.name}
                          type={field.type}
                          placeholder={field.placeholder}
                          required
                          onFocus={() => setFocusedField(field.name)}
                          onBlur={() => setFocusedField(null)}
                          className="w-full bg-white/[0.03] px-5 py-3.5 text-sm text-gray-200 placeholder:text-gray-500 outline-none"
                        />
                      </motion.div>
                    ))}

                    <motion.div
                      animate={{
                        borderColor:
                          focusedField === "message"
                            ? "#C778DD"
                            : "rgba(255,255,255,0.1)",
                        boxShadow:
                          focusedField === "message"
                            ? "0 0 20px rgba(199,120,221,0.15)"
                            : "0 0 0px transparent",
                      }}
                      className="rounded-xl border border-white/10 overflow-hidden transition-all duration-300"
                    >
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Payload — Your Message"
                        required
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-white/[0.03] px-5 py-3.5 text-sm text-gray-200 placeholder:text-gray-500 outline-none resize-none"
                      />
                    </motion.div>

                    <motion.button
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 0 30px rgba(199,120,221,0.4)",
                      }}
                      whileTap={{ scale: 0.97 }}
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#C778DD] to-[#8b5cf6] hover:from-[#b060cc] hover:to-[#7c4fe0] text-white font-bold py-4 rounded-xl tracking-[0.15em] uppercase text-sm transition-all duration-300"
                    >
                      <span className="flex items-center justify-center gap-3">
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                        Transmit Signal
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </span>
                    </motion.button>

                    <p className="text-center text-[10px] uppercase tracking-[0.2em] text-gray-600 pt-2">
                      End-to-end encrypted transmission
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
