"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useCallback } from "react";

const features = [
  {
    title: "Create Private Groups",
    description:
      "Build dedicated spaces for family, friends, roommates, or teams. Invite members instantly and control privacy with ease.",
    image: "/images/group/groupsharing1.svg",
  },
  {
    title: "Smart Reminders",
    description:
      "Set shared reminders for birthdays, bills, groceries, and events that sync automatically for everyone.",
    image: "/images/group/groupsharing2.svg",
  },
  {
    title: "Permission Controls",
    description:
      "Choose who can view, edit, or share content inside each group with flexible access settings.",
    image: "/images/group/groupsharing1.svg",
  },
  {
    title: "Real-Time Sync",
    description:
      "Updates appear instantly for everyone—no refresh, no delays, just seamless collaboration.",
    image: "/images/group/groupsharing2.svg",
  },
];

export default function GroupSharing() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % features.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const handleFeatureClick = (index: number) => {
    setActiveIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  };

  return (
    <section
      id="groupsharing"
      className="min-h-screen flex items-center bg-white overflow-hidden py-8 sm:py-12 lg:py-24"
    >
      <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="text-base sm:text-lg lg:text-xl font-semibold text-primary tracking-wide mb-2">
            Group Sharing
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-4 sm:mb-6 px-4">
            Your groups, perfectly synced
          </h2>
          <Button
            size="lg"
            className="bg-[#0F172A] hover:bg-[#1E293B] text-white rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg"
          >
            See It Live
          </Button>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-20">
          {/* Phone */}
          <div className="flex-1 w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[500px] relative flex items-center justify-center">
            <div className="relative w-full aspect-[3/4] sm:aspect-[2/3]">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center justify-center ${
                    activeIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={600}
                    height={800}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="flex-1 flex flex-col justify-center w-full">
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  onClick={() => handleFeatureClick(index)}
                  className={`flex gap-3 sm:gap-4 lg:gap-5 p-3 sm:p-4 lg:p-5 rounded-xl sm:rounded-2xl cursor-pointer transition-all duration-500 ${
                    activeIndex === index
                      ? "bg-blue-50/50 ring-1 ring-blue-100 shadow-sm"
                      : "hover:bg-gray-50/50"
                  }`}
                >
                  <div className="mt-0.5 sm:mt-1 flex-shrink-0">
                    <div
                      className={`rounded-full p-1 transition-colors ${
                        activeIndex === index ? "bg-primary" : "bg-[#1a1a1a]"
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3
                      className={`text-base sm:text-lg lg:text-xl xl:text-2xl font-bold mb-1 sm:mb-2 ${
                        activeIndex === index
                          ? "text-primary"
                          : "text-[#1a1a1a]"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`text-sm sm:text-base lg:text-lg leading-relaxed ${
                        activeIndex === index
                          ? "text-gray-700"
                          : "text-gray-500 opacity-70"
                      }`}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-6 sm:pt-8">
              <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 sm:px-10 py-6 sm:py-8 rounded-xl text-base sm:text-lg font-semibold shadow-lg shadow-blue-200 transition-transform hover:scale-105 active:scale-95">
                Start Using WhereSit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
