import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Proof from "@/components/sections/Proof";
import Programs from "@/components/sections/Programs";
import Services from "@/components/sections/Services";
import Provider from "@/components/sections/Provider";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Proof />
        <Programs />
        <Services />
        <Provider />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
