import Image from "next/image";
import { SITE } from "@/lib/site";
import { jessicaBlur } from "@/lib/blur";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-noir pt-28 pb-16 md:pt-36 md:pb-24"
    >
      {/* Ambient gold glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-24 h-[520px] w-[520px] rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(201,162,75,0.16) 0%, transparent 68%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -left-20 h-[380px] w-[380px] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(201,162,75,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <p className="eyebrow text-gold mb-6">Downtown Sarnia, Ontario</p>
          <h1 className="font-display font-medium text-ink text-balance text-5xl sm:text-7xl lg:text-[5.25rem] leading-[1.04]">
            Your natural beauty,{" "}
            <em className="italic text-gold-soft">elevated</em>.
          </h1>
          <p className="mt-7 max-w-md mx-auto lg:mx-0 text-mist text-[0.98rem] leading-relaxed">
            A boutique med spa for advanced skin, aesthetics and beauty, led by
            Jessica in the heart of downtown Sarnia.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href={SITE.booking}
              target="_blank"
              rel="noopener"
              className="inline-block text-[0.74rem] font-medium tracking-[0.16em] uppercase bg-gold text-noir px-9 py-4 transition-all duration-300 hover:bg-gold-soft hover:-translate-y-px"
            >
              Book an Appointment
            </a>
            <a
              href="#services"
              className="inline-block text-[0.74rem] font-medium tracking-[0.16em] uppercase border border-line text-ink px-9 py-4 transition-all duration-300 hover:border-gold hover:text-gold"
            >
              View Services
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 justify-center lg:justify-start text-[0.68rem] tracking-[0.18em] uppercase text-mist-2">
            <span>Facials &amp; Skin</span>
            <span className="h-1 w-1 rounded-full bg-gold/70" />
            <span>Injectables</span>
            <span className="h-1 w-1 rounded-full bg-gold/70" />
            <span>Laser</span>
            <span className="h-1 w-1 rounded-full bg-gold/70" />
            <span>Lashes &amp; Brows</span>
          </div>
        </div>

        {/* Portrait */}
        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div
            aria-hidden
            className="absolute -inset-3 border border-gold/25"
            style={{ transform: "translate(14px, 14px)" }}
          />
          <div className="relative aspect-tall w-full overflow-hidden">
            <Image
              src="/jessica-portrait.jpg"
              alt="Jessica Vanhoogenhuize, founder of Sculpt Beauty Lounge"
              fill
              priority
              fetchPriority="high"
              placeholder="blur"
              blurDataURL={jessicaBlur}
              sizes="(max-width: 1024px) 90vw, 42vw"
              className="object-cover object-top grayscale-[15%]"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(14,14,16,0.55) 0%, transparent 42%)",
              }}
            />
            <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3">
              <span className="h-px w-8 bg-gold shrink-0" />
              <span className="text-[0.66rem] tracking-[0.2em] uppercase text-ink">
                Jessica &middot; Founder &amp; Educator
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
