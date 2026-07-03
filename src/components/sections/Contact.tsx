import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site";

const iconCls =
  "w-[18px] h-[18px] stroke-gold fill-none stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round] shrink-0 mt-0.5";

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  SITE.mapsQuery
)}&output=embed`;

export default function Contact() {
  return (
    <section id="contact" className="bg-noir py-24 md:py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="eyebrow text-gold mb-4">Visit</p>
          <h2 className="font-display text-ink text-4xl md:text-5xl font-medium leading-tight">
            Come see us in downtown Sarnia
          </h2>
          <p className="mt-5 text-mist text-[0.96rem] leading-relaxed">
            Appointments are booked online so every visit is unhurried and
            entirely yours. Reach out any time, we would love to meet you.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          {/* Details */}
          <Reveal className="flex flex-col">
            <div className="space-y-7">
              <div className="flex gap-4">
                <svg viewBox="0 0 24 24" className={iconCls}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <p className="text-[0.68rem] tracking-[0.18em] uppercase text-mist-2 mb-1">
                    Studio
                  </p>
                  <p className="text-ink text-[0.95rem]">
                    210 Front St N
                    <br />
                    Downtown Sarnia, ON
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg viewBox="0 0 24 24" className={iconCls}>
                  <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7A2 2 0 0122 16.9z" />
                </svg>
                <div>
                  <p className="text-[0.68rem] tracking-[0.18em] uppercase text-mist-2 mb-1">
                    Call or text
                  </p>
                  <a
                    href={SITE.phoneHref}
                    className="text-ink text-[0.95rem] hover:text-gold transition-colors"
                  >
                    {SITE.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <svg viewBox="0 0 24 24" className={iconCls}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <div>
                  <p className="text-[0.68rem] tracking-[0.18em] uppercase text-mist-2 mb-1">
                    Email
                  </p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-ink text-[0.95rem] hover:text-gold transition-colors break-all"
                  >
                    {SITE.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <svg viewBox="0 0 24 24" className={iconCls}>
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
                <div>
                  <p className="text-[0.68rem] tracking-[0.18em] uppercase text-mist-2 mb-1">
                    Hours
                  </p>
                  <p className="text-ink text-[0.95rem]">By appointment</p>
                  <p className="text-mist-2 text-[0.82rem]">
                    Book online any time
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-9 flex items-center gap-4">
              <a
                href={SITE.booking}
                target="_blank"
                rel="noopener"
                className="inline-block text-[0.74rem] font-medium tracking-[0.16em] uppercase bg-gold text-noir px-8 py-4 transition-all duration-300 hover:bg-gold-soft hover:-translate-y-px"
              >
                Book Online
              </a>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener"
                aria-label={`Sculpt Beauty Lounge on Instagram, ${SITE.instagramHandle}`}
                className="flex h-11 w-11 items-center justify-center border border-line rounded-full hover:border-gold transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden
                  className="w-4 h-4 fill-none stroke-gold stroke-[1.5]"
                >
                  <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
                  <circle cx="12" cy="12" r="4.2" />
                  <circle
                    cx="17.6"
                    cy="6.4"
                    r="1"
                    className="fill-gold stroke-none"
                  />
                </svg>
              </a>
            </div>
          </Reveal>

          {/* Map */}
          <Reveal className="relative min-h-[320px] lg:min-h-0 border border-line overflow-hidden">
            <iframe
              title="Map to Sculpt Beauty Lounge, 210 Front St N, Sarnia"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full grayscale-[30%] contrast-[1.05]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
