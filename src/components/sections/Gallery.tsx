import Image from "next/image";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site";
import { lipsBlur, lashesBlur } from "@/lib/blur";

const work = [
  {
    src: "/work-lips.jpg",
    blur: lipsBlur,
    alt: "Close-up of a natural lip enhancement result at Sculpt Beauty Lounge",
    title: "Lip Enhancement",
    caption: "Soft, balanced, natural-looking volume",
  },
  {
    src: "/work-lashes.jpg",
    blur: lashesBlur,
    alt: "Close-up of custom volume lash extensions by Sculpt Beauty Lounge",
    title: "Lash Artistry",
    caption: "Custom sets, mapped to your eye shape",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-noir-2 py-24 md:py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="eyebrow text-gold mb-4">Recent Work</p>
          <h2 className="font-display text-ink text-4xl md:text-5xl font-medium leading-tight">
            A closer look
          </h2>
          <p className="mt-5 text-mist text-[0.96rem] leading-relaxed">
            Precision, artistry and a light touch. A glimpse of the detail that
            goes into every appointment.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {work.map((w, i) => (
            <Reveal
              key={w.src}
              delay={i * 100}
              className="group relative overflow-hidden"
            >
              <div className="relative aspect-portrait w-full overflow-hidden">
                <Image
                  src={w.src}
                  alt={w.alt}
                  fill
                  placeholder="blur"
                  blurDataURL={w.blur}
                  sizes="(max-width: 640px) 92vw, 45vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(14,14,16,0.78) 0%, transparent 55%)",
                  }}
                />
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-gold shrink-0" />
                  <h3 className="font-display text-ink text-xl">{w.title}</h3>
                </div>
                <p className="mt-1.5 text-mist text-[0.82rem]">{w.caption}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-12">
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2.5 text-[0.74rem] font-medium tracking-[0.16em] uppercase text-gold hover:text-gold-soft transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden
              className="w-4 h-4 fill-none stroke-gold stroke-[1.5]"
            >
              <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
              <circle cx="12" cy="12" r="4.2" />
              <circle cx="17.6" cy="6.4" r="1" className="fill-gold stroke-none" />
            </svg>
            See more on Instagram {SITE.instagramHandle}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
