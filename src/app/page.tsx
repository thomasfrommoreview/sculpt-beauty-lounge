import Navbar from "@/components/Navbar";

const BOOKING_URL =
  "https://book.squareup.com/appointments/52d4bxvd2grmiz/location/LN9JTBEAQPKJQ/services";

const services = [
  {
    title: "Facials & Peels",
    description:
      "Customized facial treatments and chemical peels to restore radiance, clarity, and a healthy glow.",
    details: ["Deep cleansing & extraction", "Anti-aging protocols", "Brightening peels"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] stroke-rose fill-none stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Microneedling",
    description:
      "Advanced collagen-stimulating treatments for smoother texture, reduced scarring, and youthful skin.",
    details: ["Scar & stretch mark reduction", "Collagen induction therapy", "Minimal downtime"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] stroke-rose fill-none stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Laser Treatments",
    description:
      "Laser hair removal, skin rejuvenation, and tattoo removal with advanced technology.",
    details: ["Permanent hair reduction", "Skin rejuvenation", "Unlimited packages available"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] stroke-rose fill-none stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Injections",
    description:
      "Expert cosmetic injections including lip fillers and wrinkle-relaxing treatments for natural-looking results.",
    details: ["Lip enhancement", "Wrinkle relaxing", "Natural-looking results"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] stroke-rose fill-none stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
  {
    title: "IV Therapy & LED",
    description:
      "Vitamin IV drips and Dermalux LED skin programs to nourish from the inside out and accelerate healing.",
    details: ["Vitamin infusions", "LED light therapy", "Accelerated skin healing"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] stroke-rose fill-none stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Lashes, Brows & More",
    description:
      "Lash extensions, brow shaping, waxing, teeth whitening, and professional glam services.",
    details: ["Classic & volume lashes", "Brow lamination & tint", "Teeth whitening"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] stroke-rose fill-none stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
];

const whyUsItems = [
  {
    stat: "625+",
    label: "Community Followers",
    description: "A growing community of clients who trust and recommend our services.",
  },
  {
    stat: "5\u2605",
    label: "Client Rated",
    description: "Consistently top-rated for quality treatments and personalized care.",
  },
  {
    stat: "15+",
    label: "Services Offered",
    description: "A comprehensive range of aesthetic and beauty treatments under one roof.",
  },
  {
    stat: "100%",
    label: "Personalized Care",
    description: "Every treatment plan is customized to your unique goals and skin type.",
  },
];

const testimonials = [
  {
    quote:
      "Jessica is absolutely amazing! She made me feel so comfortable and the results speak for themselves. I won't go anywhere else.",
    name: "Sarah M.",
  },
  {
    quote:
      "Best investment I've ever made in myself. The facials are incredible and Jessica really takes the time to understand what your skin needs.",
    name: "Lauren T.",
  },
  {
    quote:
      "I was nervous about injections but Jessica's expertise put me at ease. The results are so natural — exactly what I wanted.",
    name: "Michelle R.",
  },
];

const hours = [
  { day: "Monday", time: "By Appointment" },
  { day: "Tuesday", time: "By Appointment" },
  { day: "Wednesday", time: "By Appointment" },
  { day: "Thursday", time: "By Appointment" },
  { day: "Friday", time: "By Appointment" },
  { day: "Saturday", time: "By Appointment" },
  { day: "Sunday", time: "Closed" },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ═══ Hero ═══ */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6 pt-24 pb-16 bg-linear-to-b from-warm-white via-cream to-blush overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(201,166,142,0.15)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[10%] -left-[5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(184,151,106,0.1)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-2xl">
          <p className="font-body text-[0.7rem] font-medium tracking-[0.25em] uppercase text-taupe mb-6">
            Downtown Sarnia, Ontario
          </p>
          <h1 className="font-heading text-[clamp(3rem,7vw,5.5rem)] font-normal leading-[1.1] text-soft-black mb-6">
            Embracing Your{" "}
            <em className="italic text-rose">Natural</em> Beauty
          </h1>
          <p className="text-base text-taupe max-w-[480px] mx-auto mb-10 leading-relaxed">
            A modern med spa experience offering advanced skincare, aesthetic
            treatments, and beauty services in a warm, welcoming space.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener"
              className="inline-block font-body text-[0.72rem] font-medium tracking-[0.15em] uppercase no-underline px-10 py-4 bg-charcoal text-cream transition-all duration-350 hover:bg-soft-black hover:-translate-y-px hover:shadow-[0_8px_30px_rgba(44,40,37,0.2)]"
            >
              Book an Appointment
            </a>
            <a
              href="#services"
              className="inline-block font-body text-[0.72rem] font-medium tracking-[0.15em] uppercase no-underline px-10 py-4 border border-taupe text-taupe bg-transparent transition-all duration-350 hover:border-charcoal hover:text-charcoal"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* ═══ About ═══ */}
      <section id="about" className="bg-warm-white py-24 px-6">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Visual placeholder */}
          <div className="aspect-[4/5] bg-linear-to-br from-blush to-rose rounded-sm flex items-center justify-center relative overflow-hidden">
            <span className="font-heading text-[5rem] text-white/30 font-normal italic select-none">
              SBL
            </span>
          </div>

          {/* Content */}
          <div className="text-center md:text-left">
            <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-rose mb-4">
              Our Story
            </p>
            <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-normal text-soft-black mb-4">
              Where Beauty Meets Expertise
            </h2>
            <p className="text-[0.95rem] text-taupe leading-[1.9] mb-6">
              Sculpt Beauty Lounge is a boutique med spa located in the heart of
              downtown Sarnia. Founded by Jessica, our studio brings together
              advanced aesthetics and personalized care in a space designed for
              you to feel confident and pampered.
            </p>
            <p className="text-[0.95rem] text-taupe leading-[1.9] mb-6">
              From rejuvenating facials and microneedling to laser treatments and
              cosmetic injections, every service is delivered with precision and
              a genuine passion for helping you look and feel your best.
            </p>

            {/* Stats row */}
            <div className="flex gap-8 mt-8 pt-8 border-t border-blush justify-center md:justify-start">
              <div className="text-center md:text-left">
                <strong className="block font-heading text-[2rem] font-normal text-soft-black mb-1">
                  210
                </strong>
                <span className="text-[0.75rem] tracking-[0.1em] uppercase text-taupe">
                  Front St N, Sarnia
                </span>
              </div>
              <div className="text-center md:text-left">
                <strong className="block font-heading text-[2rem] font-normal text-soft-black mb-1">
                  625+
                </strong>
                <span className="text-[0.75rem] tracking-[0.1em] uppercase text-taupe">
                  Community Followers
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Services ═══ */}
      <section id="services" className="bg-cream py-24 px-6">
        <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-rose mb-4 text-center">
          What We Offer
        </p>
        <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-normal text-center text-soft-black mb-4">
          Our Services
        </h2>
        <p className="text-center text-taupe text-[0.95rem] max-w-[540px] mx-auto mb-14">
          Tailored treatments to enhance your natural beauty, delivered with care
          and expertise.
        </p>

        <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-warm-white p-8 border border-blush/50 text-center transition-all duration-350 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(140,122,107,0.1)] hover:border-rose"
            >
              {/* Icon */}
              <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center rounded-full bg-cream">
                {service.icon}
              </div>

              <h3 className="font-heading text-[1.35rem] font-medium text-soft-black mb-3">
                {service.title}
              </h3>
              <p className="text-[0.85rem] text-taupe leading-[1.8] mb-4">
                {service.description}
              </p>

              {/* Detail bullets — inspired by Pearl's layout */}
              <ul className="space-y-2 mt-4 pt-4 border-t border-blush/40">
                {service.details.map((detail) => (
                  <li
                    key={detail}
                    className="text-[0.78rem] text-taupe flex items-center justify-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-rose shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA under services */}
        <div className="text-center mt-14">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener"
            className="inline-block font-body text-[0.72rem] font-medium tracking-[0.15em] uppercase no-underline px-10 py-4 bg-charcoal text-cream transition-all duration-350 hover:bg-soft-black hover:-translate-y-px hover:shadow-[0_8px_30px_rgba(44,40,37,0.2)]"
          >
            View All Services
          </a>
        </div>
      </section>

      {/* ═══ Why Choose Us (inspired by Pearl's "Why Us" section) ═══ */}
      <section className="bg-warm-white py-24 px-6">
        <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-rose mb-4 text-center">
          Why Sculpt
        </p>
        <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-normal text-center text-soft-black mb-4">
          Why Clients Choose Us
        </h2>
        <p className="text-center text-taupe text-[0.95rem] max-w-[540px] mx-auto mb-14">
          We combine advanced technology with genuine care to deliver results you
          can see and feel.
        </p>

        <div className="max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUsItems.map((item) => (
            <div
              key={item.label}
              className="text-center p-8 border border-blush/40 rounded-sm bg-cream/50"
            >
              <strong className="block font-heading text-[2.5rem] font-normal text-soft-black mb-2">
                {item.stat}
              </strong>
              <span className="block text-[0.7rem] font-medium tracking-[0.15em] uppercase text-rose mb-3">
                {item.label}
              </span>
              <p className="text-[0.82rem] text-taupe leading-[1.7]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ Testimonials (inspired by Pearl's reviews section) ═══ */}
      <section className="bg-soft-black py-24 px-6">
        <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-rose mb-4 text-center">
          Client Love
        </p>
        <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-normal text-center text-cream mb-14">
          What Our Clients Say
        </h2>

        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-sm bg-white/5 border border-white/10 p-8"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 24 24"
                    className="w-4 h-4 fill-gold"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-[0.9rem] text-cream/80 leading-[1.8] flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="border-t border-white/10 pt-4">
                <cite className="not-italic text-[0.75rem] font-medium tracking-[0.12em] uppercase text-rose">
                  {t.name}
                </cite>
              </div>
            </div>
          ))}
        </div>

        {/* Inspirational quote */}
        <div className="max-w-[700px] mx-auto text-center mt-20">
          <blockquote className="font-heading text-[clamp(1.5rem,3vw,2.25rem)] font-normal italic text-cream leading-[1.5]">
            &ldquo;Strong women don&rsquo;t compete — they empower, inspire, and
            lift each other up.&rdquo;
          </blockquote>
          <div className="w-10 h-px bg-gold mx-auto my-6" />
          <cite className="not-italic font-body text-[0.72rem] tracking-[0.2em] uppercase text-rose">
            Sculpt Beauty Lounge
          </cite>
        </div>
      </section>

      {/* ═══ Contact ═══ */}
      <section id="contact" className="bg-warm-white py-24 px-6">
        <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-rose mb-4 text-center">
          Get in Touch
        </p>
        <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-normal text-center text-soft-black mb-4">
          Visit Us
        </h2>
        <p className="text-center text-taupe text-[0.95rem] max-w-[540px] mx-auto mb-14">
          We&rsquo;d love to welcome you into our space. Book online or reach out
          anytime.
        </p>

        <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-2xl font-medium text-soft-black mb-6">
              Contact
            </h3>

            {/* Address */}
            <div className="flex gap-4 mb-7 items-start">
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-rose fill-none stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round] shrink-0 mt-[3px]">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div className="text-[0.9rem] text-taupe">
                <span className="block font-medium text-[0.7rem] tracking-[0.12em] uppercase text-charcoal mb-1">
                  Address
                </span>
                210 Front St N<br />
                Downtown Sarnia, ON, Canada
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 mb-7 items-start">
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-rose fill-none stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round] shrink-0 mt-[3px]">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.11 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              <div className="text-[0.9rem] text-taupe">
                <span className="block font-medium text-[0.7rem] tracking-[0.12em] uppercase text-charcoal mb-1">
                  Phone
                </span>
                <a href="tel:5193316373" className="text-taupe no-underline transition-colors hover:text-soft-black">
                  (519) 331-6373
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 mb-7 items-start">
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-rose fill-none stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round] shrink-0 mt-[3px]">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <div className="text-[0.9rem] text-taupe">
                <span className="block font-medium text-[0.7rem] tracking-[0.12em] uppercase text-charcoal mb-1">
                  Email
                </span>
                <a href="mailto:sculpt.beauty.lounge@outlook.com" className="text-taupe no-underline transition-colors hover:text-soft-black">
                  sculpt.beauty.lounge@outlook.com
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-heading text-2xl font-medium text-soft-black mb-6">
              Hours
            </h3>
            <ul className="list-none">
              {hours.map((h, i) => (
                <li
                  key={h.day}
                  className={`flex justify-between py-3 text-[0.85rem] text-taupe ${
                    i < hours.length - 1 ? "border-b border-blush" : ""
                  }`}
                >
                  <span className="font-medium text-charcoal">{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener"
            className="inline-block font-body text-[0.72rem] font-medium tracking-[0.15em] uppercase no-underline px-10 py-4 bg-charcoal text-cream transition-all duration-350 hover:bg-soft-black hover:-translate-y-px hover:shadow-[0_8px_30px_rgba(44,40,37,0.2)]"
          >
            Book Your Visit
          </a>
        </div>
      </section>

      {/* ═══ Footer ═══ */}
      <footer className="bg-soft-black py-12 px-6 text-center">
        <div className="font-heading text-2xl font-medium text-cream tracking-wide mb-6">
          Sculpt Beauty Lounge
        </div>

        {/* Social */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://www.facebook.com/p/SculptBeautyLounge-61552650745580/"
            target="_blank"
            rel="noopener"
            aria-label="Facebook"
            className="w-10 h-10 rounded-full border border-rose/30 flex items-center justify-center transition-all hover:border-rose hover:bg-rose/10"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-rose">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/sculpt.beauty.lounge/"
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full border border-rose/30 flex items-center justify-center transition-all hover:border-rose hover:bg-rose/10"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" className="stroke-rose" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="4" fill="none" className="stroke-rose" strokeWidth="1.5" />
              <circle cx="17.5" cy="6.5" r="1.2" className="fill-rose" />
            </svg>
          </a>
        </div>

        <p className="text-[0.72rem] tracking-[0.1em] text-taupe">
          &copy; 2026 Sculpt Beauty Lounge. All rights reserved.
        </p>
      </footer>
    </>
  );
}
