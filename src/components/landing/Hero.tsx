"use client";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-[#EBF3FF]  overflow-hidden
        py-8 sm:py-10 md:py-14 lg:py-16 xl:min-h-screen
        px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[120px] xl:py-auto "
    >
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14 xl:gap-24 3xl:pt-20">
        {/* ================= LEFT CONTENT ================= */}
        <div className="w-full max-w-sm lg:max-w-md space-y-6 lg:space-y-10 text-center lg:text-left">
          {/* Heading */}
          <div className="space-y-5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 3xl:text-7xl font-extrabold leading-[1.15] 3xl:leading-[1.1] tracking-tight">
              <span className="text-primary">WhereSit</span>{" "}
              <span className="text-[#555] font-semibold">Know</span>
              <br className="hidden lg:block" />
              <span className="text-[#333]">where</span>{" "}
              <span className="text-primary">it is</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg 3xl:text-xltext-[#555] leading-relaxed 3xl:leading-loose max-w-md 3xl:max-w-lg mx-auto lg:mx-0">
              <span className="text-primary font-semibold">WhereSit</span>{" "}
              powered notes and reminders app that understands your voice and
              helps you collaborate effortlessly.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 items-center justify-center lg:justify-start">
            <Link href="#getstarted" className="w-full sm:w-auto">
              <Button className="bg-primary w-full sm:w-auto h-12 3xl:h-16 px-8 3xl:px-12 rounded-xl 3xl:rounded-2xl text-base 3xl:text-lgfont-bold shadow-lg shadow-blue-200 transition-all hover:bg-primary/90 hover:scale-[1.03]">
                Get Started
              </Button>
            </Link>

            {/* <Button
              variant="outline"
              className="border-primary text-primary bg-white w-full sm:w-auto h-12 3xl:h-16 px-6 3xl:px-10 rounded-xl 3xl:rounded-2xl flex items-center gap-2 3xl:gap-3 text-base 3xl:text-lg font-semibold hover:bg-primary/5 transition"
            >
              <Play size={16} />
              Watch Demo
            </Button> */}
          </div>
        </div>

        {/* ================= RIGHT VISUAL ================= */}
        <div
          className="relative w-full min-w-[280px] max-w-xs sm:max-w-sm lg:max-w-lg xl:max-w-[520px]
          h-[280px] sm:h-[360px] lg:h-[420px] xl:h-[560px]
          flex items-center justify-center flex-shrink-0"
        >
          {/* Background Ring */}
          <div className="absolute inset-0 opacity-50 blur-[1px]">
            <Image
              src="/hero-right-side-ring-bg.png"
              alt="background ring"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Animated Aura */}
          <div className="absolute w-[80%] h-[80%] z-0">
            <Image
              src="/hero-right-side-ring.gif"
              alt="animated aura"
              fill
              unoptimized
              className="object-contain"
            />
          </div>

          {/* Phone / Video */}
          <div
            className="relative z-10
            w-[45%] md:w-[48%] lg:w-[40%] xl:w-[55%] h-[100%]
            rounded-[1.5rem] overflow-hidden
            border border-black/10
            shadow-2xl"
          >
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

      {/* Floating animation */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </section>
  );
}
