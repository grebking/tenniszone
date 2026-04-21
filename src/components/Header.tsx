"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Track Record", href: "#stats" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <a href="#">
          <Image src="/logo.png" alt="TennisZone" width={140} height={56} className="h-14 w-auto" priority />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-[#C8E620] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            className="ml-2 px-6 py-2.5 bg-[#C8E620] text-black text-sm font-bold rounded-full hover:bg-[#d4f026] transition-colors"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="lg:hidden bg-[#0a0a0a] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-[#C8E620] transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setOpen(false)}
            className="px-6 py-2.5 bg-[#C8E620] text-black text-sm font-bold rounded-full text-center hover:bg-[#d4f026] transition-colors"
          >
            Get Started
          </a>
        </nav>
      )}
    </header>
  );
}
