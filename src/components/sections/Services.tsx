import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site";
import type { ReactNode } from "react";

const stroke =
  "w-6 h-6 stroke-gold fill-none stroke-[1.4] [stroke-linecap:round] [stroke-linejoin:round]";

const services: {
  title: string;
  description: string;
  details: string[];
  icon: ReactNode;
}[] = [
  {
    title: "Facials & Skin",
    description:
      "Customized facials, chemical peels and Dermalux LED to restore clarity, glow and healthy texture.",
    details: ["Custom facials", "Chemical peels", "Dermalux LED"],
    icon: (
      <svg viewBox="0 0 24 24" className={stroke}>
        <circle cx="12" cy="12" r="9" />
        <path d="M8.5 14c1 1.3 2.1 2 3.5 2s2.5-.7 3.5-2" />
        <path d="M9 9.5h.01M15 9.5h.01" />
      </svg>
    ),
  },
  {
    title: "Microneedling",
    description:
      "Collagen-induction therapy that softens scarring, fine lines and uneven texture with minimal downtime.",
    details: ["Scar & texture", "Collagen boost", "Minimal downtime"],
    icon: (
      <svg viewBox="0 0 24 24" className={stroke}>
        <path d="M12 2v9M9 5v6M15 5v6M6 8v3M18 8v3" />
        <path d="M4 14h16l-1.5 6h-13z" />
      </svg>
    ),
  },
  {
    title: "Laser Treatments",
    description:
      "Advanced laser for hair reduction, skin rejuvenation and a smoother, more even complexion.",
    details: ["Hair reduction", "Rejuvenation", "Even tone"],
    icon: (
      <svg viewBox="0 0 24 24" className={stroke}>
        <path d="M12 2v5M12 17v5M2 12h5M17 12h5" />
        <path d="M5.6 5.6l3 3M15.4 15.4l3 3M18.4 5.6l-3 3M8.6 15.4l-3 3" />
        <circle cx="12" cy="12" r="2.4" />
      </svg>
    ),
  },
  {
    title: "Cosmetic Injections",
    description:
      "Lip enhancement and wrinkle-relaxing treatments for refreshed, natural-looking results.",
    details: ["Lip filler", "Wrinkle relaxing", "Natural results"],
    icon: (
      <svg viewBox="0 0 24 24" className={stroke}>
        <path d="M18 2l4 4M17 3l4 4-9 9H8v-4z" />
        <path d="M6 14l-4 8 8-4" />
      </svg>
    ),
  },
  {
    title: "IV Therapy",
    description:
      "Vitamin IV drips that hydrate and replenish, nourishing your skin and energy from the inside out.",
    details: ["Vitamin drips", "Hydration", "Wellness boost"],
    icon: (
      <svg viewBox="0 0 24 24" className={stroke}>
        <path d="M12 22s7-5.4 7-11a7 7 0 10-14 0c0 5.6 7 11 7 11z" />
        <path d="M12 6v8M9 9.5h6" />
      </svg>
    ),
  },
  {
    title: "Lashes, Brows & Beauty",
    description:
      "Lash extensions, brow shaping, waxing and teeth whitening for a polished, ready-to-glow finish.",
    details: ["Lash extensions", "Brow shaping", "Teeth whitening"],
    icon: (
      <svg viewBox="0 0 24 24" className={stroke}>
        <path d="M2 12c3.5-4.5 6.5-6 10-6s6.5 1.5 10 6" />
        <path d="M6 13l-1.5 3M12 14v3M18 13l1.5 3" />
        <circle cx="12" cy="11" r="1.6" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-noir py-24 md:py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="eyebrow text-gold mb-4">The Treatment Menu</p>
          <h2 className="font-display text-ink text-4xl md:text-5xl font-medium leading-tight">
            Everything for skin &amp; beauty, under one roof
          </h2>
          <p className="mt-5 text-mist text-[0.96rem] leading-relaxed">
            A full range of advanced aesthetic and beauty treatments, each
            tailored to your skin, your goals and your comfort.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              delay={(i % 3) * 90}
              className="group bg-noir-3 border border-line p-8 transition-all duration-300 hover:border-gold/50 hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center border border-gold/30 rounded-full transition-colors duration-300 group-hover:border-gold/70">
                {s.icon}
              </div>
              <h3 className="mt-6 font-display text-ink text-[1.35rem]">
                {s.title}
              </h3>
              <p className="mt-3 text-mist text-[0.86rem] leading-relaxed">
                {s.description}
              </p>
              <ul className="mt-5 pt-5 border-t border-line/70 space-y-2">
                {s.details.map((d) => (
                  <li
                    key={d}
                    className="flex items-center gap-2.5 text-[0.78rem] text-mist-2"
                  >
                    <span className="h-1 w-1 rounded-full bg-gold shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-14">
          <a
            href={SITE.booking}
            target="_blank"
            rel="noopener"
            className="inline-block text-[0.74rem] font-medium tracking-[0.16em] uppercase bg-gold text-noir px-9 py-4 transition-all duration-300 hover:bg-gold-soft hover:-translate-y-px"
          >
            Book Your Treatment
          </a>
        </Reveal>
      </div>
    </section>
  );
}
