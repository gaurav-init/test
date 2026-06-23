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
import { ArrowRight } from "lucide-react";

const contactInfo = [
  {
    icon: FaPhoneAlt,
    label: "Phone",
    value: "+91-7520275692",
    color: "bg-retro-yellow",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: "saurabhsingh8xm@gmail.com",
    color: "bg-retro-pink",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "India",
    color: "bg-retro-lime",
  },
];

const socialLinks = [
  { Icon: FaLinkedin, href: "https://linkedin.com/in/saurabhsingh8xm", label: "LinkedIn" },
  { Icon: FaGithub, href: "https://github.com/saurabhsingh8xm", label: "GitHub" },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

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
      alert("Transmission failed. Try again.");
    }
  };

  return (
    <section
      id="contact"
      className="bg-retro-soft py-24 md:py-32 px-5 md:px-10 border-y-2 border-retro-ink"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="retro-eyebrow mb-5 inline-block">{"// Get in touch"}</span>
          <h2 className="retro-display text-4xl md:text-6xl leading-[1] mt-5">
            Let's <span className="retro-mark retro-mark--pink">connect</span>
          </h2>
          <p className="mt-5 text-retro-muted text-lg max-w-xl mx-auto">
            Got a project, collaboration, or just want to say hi? Drop a message
            and let's build something intelligent together.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Online — ready to connect
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            {contactInfo.map((item) => (
              <div key={item.label} className="retro-card p-5 flex items-center gap-5">
                <span
                  className={`inline-flex items-center justify-center w-14 h-14 ${item.color} border-2 border-retro-ink  shadow-retro shrink-0`}
                >
                  <item.icon size={18} />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-retro-muted">
                    {item.label}
                  </p>
                  <p className="font-display text-base md:text-lg leading-tight truncate">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}

            <div className="retro-card bg-retro-yellow p-5">
              <p className="font-mono text-xs uppercase tracking-widest mb-3">
                Find me on
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex items-center justify-center w-12 h-12 bg-retro-card border-2 border-retro-ink  shadow-retro hover:-translate-x-[2px] hover:-translate-y-[2px] transition"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -top-3 -left-3 w-full h-full bg-retro-blue border-2 border-retro-ink rounded-retro" />
            <div className="relative bg-retro-card border-2 border-retro-ink rounded-retro p-7 md:p-9 shadow-retro-lg">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="ok"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 120 }}
                    className="text-center py-10"
                  >
                    <div className="mx-auto w-20 h-20 bg-retro-lime border-2 border-retro-ink  shadow-retro flex items-center justify-center font-display text-3xl">
                      ✓
                    </div>
                    <h3 className="font-display text-2xl mt-6">Message received!</h3>
                    <p className="text-retro-muted mt-2">
                      Thanks for reaching out. I'll respond shortly.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-display text-xl uppercase">
                        Send a message
                      </h3>
                      <span className="retro-chip">/contact</span>
                    </div>

                    <div>
                      <label className="font-mono text-xs uppercase tracking-widest mb-2 block">
                        Your name
                      </label>
                      <input
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        required
                        className="retro-input"
                      />
                    </div>

                    <div>
                      <label className="font-mono text-xs uppercase tracking-widest mb-2 block">
                        Your email
                      </label>
                      <input
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        className="retro-input"
                      />
                    </div>

                    <div>
                      <label className="font-mono text-xs uppercase tracking-widest mb-2 block">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Tell me about your project..."
                        required
                        className="retro-textarea resize-none"
                      />
                    </div>

                    <button type="submit" className="retro-btn retro-btn--pink w-full">
                      Send Message <ArrowRight size={16} />
                    </button>

                    <p className="text-center font-mono text-[10px] uppercase tracking-widest text-retro-muted pt-1">
                      I usually respond within 24 hours
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
