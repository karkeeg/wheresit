"use client";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-[#EBF3FF] py-6 md:py-[20px] px-6 sm:px-12 lg:px-[120px] overflow-hidden"
    >
      <div className="max-w-[1200px] min-h-[450px] md:min-h-[508px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-[165px]">
        {/* Left Content */}
        <div className="w-full lg:max-w-md space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.2] tracking-tight">
              <span className="text-primary">WhereSit</span>{" "}
              <span className="text-[#333333]">Know</span>
              <br className="hidden lg:block" />{" "}
              <span className="text-[#333333]">where</span>{" "}
              <span className="text-primary">it is</span>
            </h1>
            <p className="text-base sm:text-lg text-[#444444] leading-relaxed font-medium max-w-lg mx-auto lg:mx-0">
              <span className="text-primary font-bold">WhereSit</span> powered
              notes and reminders app that understands your voice and helps you
              collaborate with groups effortlessly.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 items-center justify-center lg:justify-start">
            <Link href="#getstarted" className="w-full sm:w-auto">
              <Button className="bg-primary w-full sm:w-auto h-12 px-8 rounded-xl hover:bg-primary/90 text-white font-bold text-base shadow-lg shadow-blue-200">
                Get Started
              </Button>
            </Link>
            <div className="flex justify-center items-center w-full sm:w-auto">
              <Button
                variant="outline"
                className="border-2 w-full sm:w-auto h-12 px-6 rounded-xl border-primary text-primary hover:bg-primary/5 bg-white flex items-center gap-2 justify-center font-bold text-base"
              >
                <div className="border-2 border-primary rounded-full p-1 flex items-center justify-center">
                  <Play
                    size={16}
                    fill="currentColor"
                    className="text-primary ml-0.5"
                  />
                </div>
                Watch Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full max-w-[500px] aspect-square md:aspect-auto h-[350px] sm:h-[400px] lg:h-[558px] flex justify-center items-center">
          {/* Aura/Ring Background */}
          <div className="absolute inset-0 scale-100 opacity-70">
            <Image
              src="/hero-right-side-ring-bg.png"
              alt="background ring"
              fill
              className="object-contain"
            />
          </div>

          {/* Animated Ring GIF */}
          <div className="absolute w-[80%] h-[80%] z-0">
            <Image
              src="/hero-right-side-ring.gif"
              unoptimized
              alt="animated aura"
              fill
              className="object-contain"
            />
          </div>

          {/* Content Video (Inside the phone)*/}
          <div className="relative w-[51%] h-[80%] mx-auto z-10 -mt-2 overflow-hidden rounded-[1.5rem] md:rounded-[2rem]">
            <video
              src="/video/Video Project.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
