import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Workflow", href: "#workflow" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-retro-bg border-b-2 border-retro-ink">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 py-3.5">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 shrink-0">
          <span className="inline-flex items-center justify-center w-9 h-9 bg-retro-yellow border-2 border-retro-ink shadow-retro font-display text-base">
            S
          </span>
          <span className="font-display text-lg md:text-xl tracking-tight">
            Saurabh<span className="text-retro-pink">.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="retro-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA cluster */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/saurabhsingh8xm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="retro-btn retro-btn--ghost !p-2"
          >
            <FaGithub size={18} />
          </a>
          <a href="#contact" className="retro-btn retro-btn--white !text-xs">
            Hire Me
          </a>
          <a href="/meraj_ansari.pdf" download className="retro-btn !text-xs">
            Resume
          </a>
        </div>

        {/* Mobile button */}
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 bg-retro-card border-2 border-retro-ink shadow-retro"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t-2 border-retro-ink ${
          isMenuOpen ? "max-h-[100vh] opacity-100" : "max-h-0 opacity-0 border-t-0"
        }`}
      >
        <div className="px-5 py-6 bg-retro-soft space-y-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left px-4 py-3 bg-retro-card border-2 border-retro-ink shadow-retro font-display uppercase text-sm"
            >
              {item.label}
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="retro-btn retro-btn--white flex-1"
            >
              Hire Me
            </a>
            <a
              href="/meraj_ansari.pdf"
              download
              className="retro-btn flex-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </a>
          </div>
          <div className="flex justify-center gap-3 pt-3">
            {[
              { Icon: FaLinkedin, href: "https://linkedin.com/in/saurabhsingh8xm" },
              { Icon: FaGithub, href: "https://github.com/saurabhsingh8xm" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-11 h-11 bg-retro-card border-2 border-retro-ink shadow-retro"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
