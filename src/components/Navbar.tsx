"use client";

import { useState, useEffect } from "react";

const BOOKING_URL =
  "https://book.squareup.com/appointments/52d4bxvd2grmiz/location/LN9JTBEAQPKJQ/services";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex items-center justify-between px-6 md:px-10 py-5 transition-all duration-400 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <a
        href="#"
        className="font-heading text-2xl font-medium tracking-wide text-soft-black no-underline"
      >
        Sculpt Beauty Lounge
      </a>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-8 list-none">
        {["About", "Services", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-xs font-medium tracking-[0.12em] uppercase text-taupe no-underline transition-colors duration-300 hover:text-soft-black"
            >
              {item}
            </a>
          </li>
        ))}
        <li>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener"
            className="text-xs font-medium tracking-[0.12em] uppercase text-charcoal no-underline px-6 py-2.5 border border-charcoal transition-all duration-300 hover:bg-charcoal hover:text-cream"
          >
            Book Now
          </a>
        </li>
      </ul>

      {/* Mobile Toggle */}
      <button
        className="flex md:hidden flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1 z-[101]"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span
          className={`block w-6 h-[1.5px] bg-charcoal transition-transform duration-300 ${
            menuOpen ? "translate-y-[6.5px] rotate-45" : ""
          }`}
        />
        <span
          className={`block w-6 h-[1.5px] bg-charcoal transition-opacity duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-[1.5px] bg-charcoal transition-transform duration-300 ${
            menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
          }`}
        />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-cream z-[99] flex flex-col items-center justify-center gap-8 md:hidden">
          {["About", "Services", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
              className="text-sm font-medium tracking-[0.12em] uppercase text-taupe no-underline transition-colors hover:text-soft-black"
            >
              {item}
            </a>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener"
            onClick={closeMenu}
            className="text-sm font-medium tracking-[0.12em] uppercase text-charcoal no-underline px-6 py-2.5 border border-charcoal transition-all duration-300 hover:bg-charcoal hover:text-cream"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}
