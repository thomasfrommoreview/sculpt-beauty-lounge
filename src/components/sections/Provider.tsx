import Image from "next/image";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site";
import { heroBlur } from "@/lib/blur";

export default function Provider() {
  return (
    <section id="about" className="bg-ivory text-ivory-ink py-24 md:py-28 px-6">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <Reveal className="relative order-1 lg:order-none">
          <div
            aria-hidden
            className="absolute -inset-3 border border-gold-deep/30"
            style={{ transform: "translate(-14px, 14px)" }}
          />
          <div className="relative aspect-tall w-full overflow-hidden">
            <Image
              src="/hero.webp"
              alt="Inside the Sculpt Beauty Lounge studio in downtown Sarnia"
              fill
              placeholder="blur"
              blurDataURL={heroBlur}
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </div>
          <p className="mt-4 text-ivory-body text-[0.72rem] tracking-[0.18em] uppercase">
            The Sculpt studio &middot; Downtown Sarnia
          </p>
        </Reveal>

        {/* Story */}
        <Reveal className="order-0 lg:order-none">
          <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-ivory-body mb-4">
            The Founder
          </p>
          <h2 className="font-display text-ivory-ink text-4xl md:text-5xl font-medium leading-tight">
            Meet Jessica
          </h2>
          <div className="mt-6 space-y-5 text-ivory-body text-[0.95rem] leading-[1.85]">
            <p>
              For seven years, Jessica devoted herself to healthcare, working in
              palliative care, dementia care and mental health. When the pandemic
              reshaped that world, she followed a lifelong pull toward beauty and
              never looked back.
            </p>
            <p>
              What began as a single lash course, then a small studio run from
              home, grew into something far bigger. Today Sculpt Beauty Lounge
              fills a bright studio in the heart of downtown Sarnia, where Jessica
              and her team care for clients, and where she trains the next wave of
              beauty professionals.
            </p>
            <p>
              Her approach is the same one that carried her through healthcare:
              real attention, genuine care, and a belief that feeling confident in
              your own skin changes everything.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div>
              <span className="block font-display text-gold-deep text-3xl leading-none">
                Founder
              </span>
              <span className="text-[0.72rem] tracking-[0.16em] uppercase text-ivory-body">
                &amp; Educator
              </span>
            </div>
            <div className="h-10 w-px bg-gold-deep/30 hidden sm:block" />
            <p className="text-ivory-body text-[0.85rem] max-w-xs">
              Now offering professional training and classes for aspiring beauty
              pros.
            </p>
          </div>

          <a
            href={SITE.booking}
            target="_blank"
            rel="noopener"
            className="mt-9 inline-block text-[0.74rem] font-medium tracking-[0.16em] uppercase bg-ivory-ink text-ivory px-9 py-4 transition-colors duration-300 hover:bg-gold-deep"
          >
            Book With Jessica
          </a>
        </Reveal>
      </div>
    </section>
  );
}
