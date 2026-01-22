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
      className="min-h-screen flex items-center bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-24">
        {/* Header */}
        <div className="text-center mb-6 lg:mb-8">
          <p className="text-xl font-semibold text-primary tracking-wide mb-1">
            Group Sharing
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1a1a1a] mb-3">
            Your groups, perfectly synced
          </h2>
          <Button
            size="sm"
            className="bg-[#0F172A] hover:bg-[#1E293B] text-white rounded-full px-5"
          >
            See It Live
          </Button>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* Phone */}
          <div className="flex-1 w-full max-w-[300px] lg:max-w-[340px] relative flex items-center justify-center">
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
                  width={280}
                  height={500}
                  className="w-full max-h-[420px] object-contain"
                />
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  onClick={() => handleFeatureClick(index)}
                  className={`flex gap-3 p-3 rounded-xl cursor-pointer transition-all duration-500 ${
                    activeIndex === index
                      ? "bg-blue-50/50 ring-1 ring-blue-100 shadow-sm"
                      : "hover:bg-gray-50/50"
                  }`}
                >
                  <div className="mt-0.5">
                    <div
                      className={`rounded-full p-0.5 transition-colors ${
                        activeIndex === index ? "bg-primary" : "bg-[#1a1a1a]"
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>

                  <div>
                    <h3
                      className={`text-[15px] font-semibold mb-0.5 ${
                        activeIndex === index
                          ? "text-primary"
                          : "text-[#1a1a1a]"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`text-[12.5px] leading-snug max-w-xl ${
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
            <div className="pt-4">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl text-sm font-semibold shadow-lg shadow-blue-200 transition-transform hover:scale-105 active:scale-95">
                Start Using WhereSit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
