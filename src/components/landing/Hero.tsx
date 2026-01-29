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
        py-10 md:py-16 lg:min-h-screen
        px-6 sm:px-12 lg:px-[120px]"
    >
      <div
        className="max-w-[1200px] mx-auto
        flex flex-col lg:flex-row
        items-center justify-between
        gap-14 lg:gap-24"
      >
        {/* ================= LEFT CONTENT ================= */}
        <div className="w-full lg:max-w-md space-y-10 text-center lg:text-left">
          {/* Heading */}
          <div className="space-y-5">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.15] tracking-tight">
              <span className="text-primary">WhereSit</span>{" "}
              <span className="text-[#555] font-semibold">Know</span>
              <br className="hidden lg:block" />
              <span className="text-[#333]">where</span>{" "}
              <span className="text-primary">it is</span>
            </h1>

            <p className="text-base sm:text-lg text-[#555] leading-relaxed max-w-md mx-auto lg:mx-0">
              <span className="text-primary font-semibold">WhereSit</span>{" "}
              powered notes and reminders app that understands your voice and
              helps you collaborate effortlessly.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center justify-center lg:justify-start">
            <Link href="#getstarted" className="w-full sm:w-auto">
              <Button
                className="bg-primary w-full sm:w-auto h-12 px-8 rounded-xl
                text-white font-bold text-base
                shadow-lg shadow-blue-200
                transition-all hover:bg-primary/90 hover:scale-[1.03]"
              >
                Get Started
              </Button>
            </Link>

            <Button
              variant="outline"
              className="border-primary text-primary bg-white
              w-full sm:w-auto h-12 px-6 rounded-xl
              flex items-center gap-2 font-semibold
              hover:bg-primary/5 transition"
            >
              <Play size={16} />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* ================= RIGHT VISUAL ================= */}
        <div
          className="relative w-full max-w-[520px]
          h-[360px] sm:h-[420px] lg:h-[560px]
          flex items-center justify-center"
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
          <div className="absolute w-[72%] h-[72%] z-0">
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
            w-[43%] h-[80%]
            rounded-[2rem] overflow-hidden
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
