"use client";

import { PageSection, PageContainer } from "@/components/ui/page";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ImageDrAna from "@/public/images/mockup-drana.png";
import ImageNetGestao from "@/public/images/mockup-netGestao.png";
import ImageBarberElite from "@/public/images/mokup-BarberElite.png";
import { motion } from "motion/react";

// Array de imagens para o carrossel
const carouselImages = [
  { src: ImageDrAna, alt: "Project 1" },
  { src: ImageNetGestao, alt: "Project 2" },
  { src: ImageBarberElite, alt: "Project 3" },
];

export default function CTA() {
  return (
    <PageSection
      className="py-24 relative overflow-hidden bg-card"
      aria-label="Chamada para Ação"
    >
      {/* Dramatic Background with Spotlight Effect */}
      {/* <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[150px]" />
        <div className="absolute inset-0 bg-grid-white opacity-5" />
      </div> */}

      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-grid-white [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] opacity-20" />
      </div>

      <PageContainer className="relative z-10">
        {/* Single Large Card */}
        <div className="relative rounded-2xl overflow-hidden bg-background/60 backdrop-blur-2xl border border-border/50 shadow-2xl">
          {/* Gradient Accent Bar */}
          <div className="absolute top-0 left-0 z-10 right-0 h-1 bg-linear-to-r from-primary via-chart-2 to-primary" />

          <div className="flex flex-col lg:flex-row">
            {/* Left Side - Bold Text */}
            <div className="space-y-6 p-6 md:p-12 lg:p-16 z-10 lg:w-1/2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] tracking-tight">
                Vamos construir
                <br />
                algo
                <span className="relative inline-block ml-2">
                  <span className="text-gradient-primary">extraordinário</span>
                </span>
                <br />
                juntos
              </h2>

              <Button
                size="lg"
                variant="default"
                className="h-14 px-8 rounded-none bg-primary hover:bg-success hover:text-background
                  font-semibold text-base transition-all duration-300 hover:scale-105 active:scale-95
                  hover:shadow-[0_0_20px_rgba(4,255,138,0.6),0_0_40px_rgba(4,255,138,0.4)]
                  w-full md:w-auto"
              >
                Agende uma conversa
              </Button>
            </div>

            {/* Right Side - Infinite Horizontal Scroll - 2 Rows */}
            <div className="bg-background bg-linear-to-l from-background to-card w-full lg:w-1/2 relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
              {/* Gradient fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-linear-to-r from-card to-transparent z-5" />

              {/* Scrolling container - 2 rows */}
              <div className="flex flex-col justify-center h-full gap-2 md:gap-3 w-full">
                {/* First Row - Scrolling Left */}
                <div className="flex items-center overflow-hidden">
                  <motion.div
                    className="flex gap-2 md:gap-3 shrink-0"
                    animate={{
                      x: [0, -1000],
                    }}
                    transition={{
                      x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 20,
                        ease: "linear",
                      },
                    }}
                  >
                    {[
                      ...carouselImages,
                      ...carouselImages,
                      ...carouselImages,
                    ].map((image, index) => (
                      <div key={index} className="shrink-0">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          className="h-[220px] md:h-[280px] lg:h-[300px] w-auto rounded-sm md:rounded-md 
                          object-cover shadow-xl brightness-60"
                        />
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Second Row - Scrolling Right */}
                <div className="flex items-center overflow-hidden">
                  <motion.div
                    className="flex gap-2 md:gap-3 shrink-0"
                    animate={{
                      x: [-1000, 0],
                    }}
                    transition={{
                      x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 20,
                        ease: "linear",
                      },
                    }}
                  >
                    {[
                      ...carouselImages,
                      ...carouselImages,
                      ...carouselImages,
                    ].map((image, index) => (
                      <div key={`row2-${index}`} className="shrink-0">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          className="h-[220px] md:h-[280px] lg:h-[300px] w-auto rounded-sm md:rounded-md 
                          object-cover shadow-xl brightness-60"
                        />
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </PageSection>
  );
}
