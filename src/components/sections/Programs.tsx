import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site";

const programs = [
  {
    name: "Skin Reset",
    promise: "Clear acne. Calm inflammation. Restore balance.",
    includes: "6 LED sessions + 2 advanced facials",
    price: "$650",
  },
  {
    name: "Collagen Boost",
    promise: "Lift. Smooth. Glow.",
    includes: "8 LED sessions + 2 custom facials",
    price: "$780",
  },
  {
    name: "Microneedling Skin Repair",
    promise: "Advanced skin regeneration.",
    includes: "3 microneedling + 3 LED healing sessions",
    price: "$840",
  },
  {
    name: "Luxe Skin Maintenance",
    promise: "Ongoing skin health and glow.",
    includes: "4 facials + 4 LED sessions",
    price: "$880",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="bg-noir-2 py-24 md:py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="eyebrow text-gold mb-4">Dermalux LED &middot; Signature Programs</p>
          <h2 className="font-display text-ink text-4xl md:text-5xl font-medium leading-tight">
            Real skin results, by design
          </h2>
          <p className="mt-5 text-mist text-[0.96rem] leading-relaxed">
            Not a single facial add-on. These are curated treatment programs that
            layer Dermalux LED with advanced skin therapies for visible,
            lasting change.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {programs.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 80}
              className="group flex flex-col bg-noir-3 border border-line p-7 transition-all duration-300 hover:border-gold/50 hover:-translate-y-1"
            >
              <span className="font-display text-gold-soft text-2xl">
                {p.price}
              </span>
              <div className="rule-gold my-5 opacity-60" />
              <h3 className="font-display text-ink text-[1.3rem] leading-snug">
                {p.name}
              </h3>
              <p className="mt-2 text-mist text-[0.85rem] italic">{p.promise}</p>
              <p className="mt-auto pt-5 text-mist-2 text-[0.78rem] tracking-[0.04em] uppercase">
                {p.includes}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Add-on strip */}
        <Reveal className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-gold/30 bg-gold/[0.04] px-7 py-5">
          <div className="text-center sm:text-left">
            <p className="font-display text-ink text-lg">LED Facial Enhancement</p>
            <p className="text-mist-2 text-[0.82rem]">
              Add Dermalux LED to any facial &middot; single session
            </p>
          </div>
          <div className="flex items-center gap-6">
            <span className="font-display text-gold-soft text-2xl">$55</span>
            <a
              href={SITE.booking}
              target="_blank"
              rel="noopener"
              className="text-[0.72rem] font-medium tracking-[0.16em] uppercase bg-gold text-noir px-7 py-3.5 transition-colors duration-300 hover:bg-gold-soft"
            >
              Book Now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
