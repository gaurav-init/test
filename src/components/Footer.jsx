import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const links = [
  { name: "GitHub", href: "https://github.com/saurabhsingh8xm", Icon: FaGithub },
  { name: "LinkedIn", href: "https://linkedin.com/in/saurabhsingh8xm", Icon: FaLinkedin },
  { name: "Email", href: "mailto:saurabhsingh8xm@gmail.com", Icon: FaEnvelope },
];

const Footer = () => {
  return (
    <footer className="bg-retro-ink text-retro-bg">
      {/* Top CTA strip */}
      <div className="bg-retro-yellow text-retro-ink border-t-2 border-b-2 border-retro-ink py-10 px-5 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl md:text-4xl leading-tight">
              Got an idea?
              <br />
              Let's <span className="bg-retro-pink border-2 border-retro-ink px-2 rounded-md shadow-retro inline-block">build it.</span>
            </h3>
          </div>
          <a href="#contact" className="retro-btn retro-btn--white shrink-0">
            Start a Conversation →
          </a>
        </div>
      </div>

      {/* Footer body */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center justify-center w-10 h-10 bg-retro-yellow border-2 border-retro-bg  font-display text-lg text-retro-ink">
              S
            </span>
            <span className="font-display text-xl">
              SAURABH<span className="text-retro-pink">.</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed opacity-80">
            AI & ML engineer building intelligent systems with deep learning,
            computer vision and clean backend architecture.
          </p>
        </div>

        <div>
          <h4 className="font-display uppercase text-sm tracking-widest mb-4 text-retro-yellow">
            Navigate
          </h4>
          <ul className="space-y-2 text-sm">
            {["About", "Projects", "Workflow", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-retro-yellow transition">
                  → {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display uppercase text-sm tracking-widest mb-4 text-retro-yellow">
            Connect
          </h4>
          <div className="flex gap-3">
            {links.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="inline-flex items-center justify-center w-12 h-12 bg-retro-bg text-retro-ink border-2 border-retro-bg  hover:bg-retro-yellow transition"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
          <p className="mt-4 font-mono text-xs uppercase tracking-widest text-retro-yellow">
            Open for conversations
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t-2 border-retro-bg/20">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-mono text-xs opacity-70">
            © {new Date().getFullYear()} Saurabh Singh — all rights reserved.
          </p>
          <p className="font-mono text-xs opacity-70">
            crafted with focus & intent.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
