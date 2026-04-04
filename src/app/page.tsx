import Navbar from "@/components/Navbar";

const BOOKING_URL =
  "https://book.squareup.com/appointments/52d4bxvd2grmiz/location/LN9JTBEAQPKJQ/services";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6 pt-24 pb-16 bg-linear-to-b from-warm-white via-cream to-blush overflow-hidden">
        {/* Decorative orbs */}
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(201,166,142,0.15)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[10%] -left-[5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(184,151,106,0.1)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-2xl">
          {/* Eyebrow */}
          <p className="font-body text-[0.7rem] font-medium tracking-[0.25em] uppercase text-taupe mb-6">
            Downtown Sarnia, Ontario
          </p>

          {/* Heading */}
          <h1 className="font-heading text-[clamp(3rem,7vw,5.5rem)] font-normal leading-[1.1] text-soft-black mb-6">
            Embracing Your{" "}
            <em className="italic text-rose">Natural</em> Beauty
          </h1>

          {/* Subtext */}
          <p className="text-base text-taupe max-w-[480px] mx-auto mb-10 leading-relaxed">
            A modern med spa experience offering advanced skincare, aesthetic
            treatments, and beauty services in a warm, welcoming space.
          </p>

          {/* Buttons */}
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
    </>
  );
}
