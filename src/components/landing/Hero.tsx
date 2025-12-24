"use client";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative bg-[#E0EDFE] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 sm:text-center text-start md:text-left">
            <div className="space-y-4">
              <h1 className="text-[46px] sm:text-5xl md:text-6xl font-bold text-balance leading-tight">
                <span className="text-foreground">Talk.</span>{" "}
                <span className="text-primary">Remember.</span>
                <br />
                <span className="text-foreground">Share.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-[#222222] leading-relaxed max-w-lg mx-auto md:mx-0">
                An AI-powered notes and reminders app that <br />
                understands your voice and helps you <br />
                collaborate with groups effortlessly.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex  flex-row sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
              <Link href="#getstarted">
                <Button className="bg-primary  h-14 sm:h-12  sm:w-auto px-6 hover:bg-primary/90 text-primary-foreground font-semibold">
                  Get Started
                </Button>
              </Link>
              <div className="flex justify-center items-center">
                <Button
                  variant="outline"
                  className="border-2 sm:h-12  h-14 sm:w-auto border-primary text-primary hover:bg-primary/5 bg-transparent flex items-center gap-2 justify-center"
                >
                  <div className="border border-primary rounded-full p-1 flex items-center justify-center">
                    <Play size={16} className="text-primary" />
                  </div>
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[350px] sm:h-[350px] lg:h-[400px] flex items-center justify-center">
            {/* First Image Bigger */}
            <div className="absolute inset-0 scale-113">
              <Image
                src="/hero-right-side-ring-bg.png"
                alt="hero right image"
                fill
                className="object-contain"
              />
            </div>

            {/* GIF */}
            <div className="relative w-[90%] h-[90%] mx-auto">
              <Image
                src="/hero-right-side-ring.gif"
                unoptimized
                alt="hero right image"
                fill
                className="object-contain"
              />
            </div>

            {/* Top image */}
            <Image
              src="/hero-right-side-mobile.svg"
              alt="hero right image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
