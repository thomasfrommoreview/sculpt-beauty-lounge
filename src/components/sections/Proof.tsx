import Reveal from "@/components/Reveal";

const stats = [
  { figure: "10+", label: "Signature treatments" },
  { figure: "600+", label: "Client community" },
  { figure: "100%", label: "Personalized care" },
  { figure: "By Appt", label: "Unhurried visits" },
];

export default function Proof() {
  return (
    <section className="bg-noir py-20 md:py-24 px-6 border-y border-line/70">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center max-w-xl mx-auto mb-12">
          <p className="eyebrow text-gold mb-4">Why Sculpt</p>
          <h2 className="font-display text-ink text-3xl md:text-4xl font-medium leading-snug">
            Downtown Sarnia&rsquo;s home for advanced skin and beauty
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-line/60">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 90}
              className="flex flex-col items-center text-center px-4 py-8"
            >
              <span className="font-display text-gold-soft text-4xl md:text-5xl leading-none">
                {s.figure}
              </span>
              <span className="mt-3 text-[0.72rem] tracking-[0.16em] uppercase text-mist-2">
                {s.label}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
