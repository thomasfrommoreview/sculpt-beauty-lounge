import { SITE, NAV_LINKS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-noir-2 border-t border-line">
      {/* Closing CTA */}
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 text-center border-b border-line">
        <p className="eyebrow text-gold mb-4">Ready when you are</p>
        <h2 className="font-display text-ink text-3xl md:text-5xl font-medium leading-tight max-w-2xl mx-auto">
          Book your visit to Sculpt Beauty Lounge
        </h2>
        <a
          href={SITE.booking}
          target="_blank"
          rel="noopener"
          className="mt-8 inline-block text-[0.74rem] font-medium tracking-[0.16em] uppercase bg-gold text-noir px-10 py-4 transition-all duration-300 hover:bg-gold-soft hover:-translate-y-px"
        >
          Book an Appointment
        </a>
      </div>

      {/* Footer body */}
      <div className="mx-auto max-w-6xl px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="sm:col-span-2 lg:col-span-1">
          <span className="font-display text-2xl font-semibold tracking-[0.3em] text-gold">
            SCULPT
          </span>
          <span className="block text-[0.6rem] tracking-[0.4em] text-mist-2 mt-1">
            BEAUTY&nbsp;LOUNGE
          </span>
          <p className="mt-5 text-mist-2 text-[0.85rem] leading-relaxed max-w-xs">
            A boutique med spa for advanced skin, aesthetics and beauty in
            downtown Sarnia, Ontario.
          </p>
        </div>

        <div>
          <p className="text-[0.68rem] tracking-[0.2em] uppercase text-mist-2 mb-4">
            Explore
          </p>
          <ul className="space-y-2.5">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-mist text-[0.85rem] hover:text-gold transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[0.68rem] tracking-[0.2em] uppercase text-mist-2 mb-4">
            Contact
          </p>
          <ul className="space-y-2.5 text-[0.85rem] text-mist">
            <li>210 Front St N, Sarnia, ON</li>
            <li>
              <a
                href={SITE.phoneHref}
                className="hover:text-gold transition-colors"
              >
                {SITE.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="hover:text-gold transition-colors break-all"
              >
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[0.68rem] tracking-[0.2em] uppercase text-mist-2 mb-4">
            Follow
          </p>
          <div className="flex gap-3">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center border border-line rounded-full hover:border-gold transition-colors"
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
            </a>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center border border-line rounded-full hover:border-gold transition-colors"
            >
              <svg viewBox="0 0 24 24" aria-hidden className="w-4 h-4 fill-gold">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[0.72rem] tracking-[0.08em] text-mist-2">
            &copy; 2026 Sculpt Beauty Lounge. All rights reserved.
          </p>
          <p className="text-[0.72rem] tracking-[0.08em] text-mist-2">
            Downtown Sarnia, Ontario
          </p>
        </div>
      </div>
    </footer>
  );
}
