"use client";

import { useState, useEffect } from "react";
import { SITE, NAV_LINKS } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "bg-noir/90 backdrop-blur-md border-b border-line/60"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 md:px-10 py-4">
        {/* Wordmark */}
        <a href="#top" onClick={close} className="group leading-none">
          <span className="font-display text-xl md:text-2xl font-semibold tracking-[0.35em] text-gold">
            SCULPT
          </span>
          <span className="block text-[0.55rem] md:text-[0.6rem] tracking-[0.4em] text-mist-2 mt-1">
            BEAUTY&nbsp;LOUNGE
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-9 list-none">
          {NAV_LINKS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-[0.72rem] font-medium tracking-[0.16em] uppercase text-mist hover:text-gold transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={SITE.booking}
              target="_blank"
              rel="noopener"
              className="text-[0.72rem] font-medium tracking-[0.16em] uppercase text-gold border border-gold/60 px-6 py-2.5 hover:bg-gold hover:text-noir transition-all duration-300"
            >
              Book Now
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1 z-[60]"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={`block w-6 h-px bg-gold transition-transform duration-300 ${
              menuOpen ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-gold transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-gold transition-transform duration-300 ${
              menuOpen ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-0 bg-noir flex flex-col items-center justify-center gap-8 z-50">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={close}
              className="font-display text-2xl text-ink hover:text-gold transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={SITE.booking}
            target="_blank"
            rel="noopener"
            onClick={close}
            className="mt-2 text-[0.75rem] font-medium tracking-[0.18em] uppercase text-noir bg-gold px-8 py-3.5"
          >
            Book an Appointment
          </a>
        </div>
      )}
    </header>
  );
}
