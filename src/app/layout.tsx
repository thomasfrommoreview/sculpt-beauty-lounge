import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

const description =
  "Sculpt Beauty Lounge is a boutique med spa in downtown Sarnia, Ontario. Advanced facials, Dermalux LED, microneedling, laser, injections, IV therapy, lashes and brows, led by founder Jessica Vanhoogenhuize.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: "Sculpt Beauty Lounge | Med Spa in Downtown Sarnia, ON",
    template: "%s | Sculpt Beauty Lounge",
  },
  description,
  alternates: { canonical: SITE.domain },
  openGraph: {
    title: "Sculpt Beauty Lounge | Med Spa in Downtown Sarnia, ON",
    description,
    url: SITE.domain,
    siteName: SITE.name,
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sculpt Beauty Lounge | Med Spa in Downtown Sarnia, ON",
    description,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: SITE.name,
  description:
    "Boutique med spa in downtown Sarnia, Ontario offering advanced facials, Dermalux LED, microneedling, laser, cosmetic injections, IV therapy, lashes and brows.",
  url: SITE.domain,
  telephone: "+15193316373",
  email: SITE.email,
  image: `${SITE.domain}/opengraph-image`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "210 Front St N",
    addressLocality: "Sarnia",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  areaServed: "Sarnia, Ontario",
  founder: { "@type": "Person", name: SITE.owner },
  sameAs: [SITE.instagram, SITE.facebook],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} antialiased`}
    >
      <body className="min-h-full bg-noir text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
