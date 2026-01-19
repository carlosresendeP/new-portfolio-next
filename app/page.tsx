import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Process from "@/components/process";
import Projects from "@/components/projects-two";
import TechStack from "@/components/tech-stack";
import FAQ from "@/components/faq";
import Contact from "@/components/contact";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <Hero />
      <About />
      <Services />
      <Process />
      <Projects />
      <TechStack />

      <FAQ />
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
}
