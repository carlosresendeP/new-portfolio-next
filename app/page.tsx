import Header from "@/components/header";
import Hero from "@/components/hero";
import LogoCloud from "@/components/logo-cloud";
import About from "@/components/about";
import Services from "@/components/services";
import Process from "@/components/process";
import Projects from "@/components/projects";
import TechStack from "@/components/tech-stack";
import Testimonials from "@/components/testimonials";
import CaseStudies from "@/components/case-studies";
import FAQ from "@/components/faq";
import Contact from "@/components/contact";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import { PageContainer } from "@/components/ui/page";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
        <Hero />
        {/* <LogoCloud /> */}
        <About />
        <Services />
        <Process />
        <Projects />
        <TechStack />
        {/* <Testimonials /> */}
        {/* <CaseStudies /> */}
        <FAQ />
        <Contact />
        <CTA />
        <Footer />
    </div>
  );
}
