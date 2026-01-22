"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const useCases = [
  {
    title: 'Misplaced your "Project File"?',
    description:
      "Worried about deadline? Don't stress—\nwe've got you covered!",
    command: "Voice command",
    steps: [
      {
        text: 'Tap the mic or say "Hey WhereSit" to start',
        highlight: "Hey WhereSit",
      },
      {
        text: "Speak naturally, Where is my project file named important.",
      },
      {
        text: "The WhereSit instantly search and find your lost things",
        highlight: "WhereSit",
      },
    ],
    footer: "You will never lose your files again.",
    image: "/images/usecase/usecase1.png",
  },
  {
    title: "Misplaced your Capo?",
    description:
      "Worried about losing your Capo? Don't stress—\nwe've got you covered!",
    command: "Voice command",
    steps: [
      {
        text: 'Tap the mic or say "Hey WhereSit" to start',
        highlight: "Hey WhereSit",
      },
      {
        text: "Speak naturally, Where is my Capo",
      },
      {
        text: "The WhereSit instantly search and find your lost things",
        highlight: "WhereSit",
      },
    ],
    footer: "Don't lose your rhythm anymore",
    image: "/images/usecase/usecase2.svg",
  },
  {
    title: "Misplaced your Groceries?",
    description: "Worried about losing your groceries or everyday items",
    command: "Voice command",
    steps: [
      {
        text: 'Tap the mic or say "Hey WhereSit" to start',
        highlight: "Hey WhereSit",
      },
      {
        text: "Speak naturally, Where is my Dal and Rice",
      },
      {
        text: "The WhereSit instantly search and find your lost things",
        highlight: "WhereSit",
      },
    ],
    footer: "No more shouting across rooms",
    image: "/images/usecase/usecase3.svg",
  },
  {
    title: "Misplaced your ID Card?",
    description:
      "Worried about losing your ID Card? Don't Worry- We got you covered.",
    command: "Voice command",
    steps: [
      {
        text: 'Tap the mic or say "Hey WhereSit" to start',
        highlight: "Hey WhereSit",
      },
      {
        text: 'Speak naturally, "Where did I stored my ID card?"',
      },
      {
        text: "The WhereSit instantly search and find your lost things",
        highlight: "WhereSit",
      },
    ],
    footer: "Don't stress. Just ask WhereSit.",
    image: "/images/usecase/usecase4.svg",
  },
];

export default function Usecase() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % useCases.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + useCases.length) % useCases.length);
  };

  const slide = useCases[currentSlide];

  return (
    <section
      id="usecase"
      className="lg:min-h-screen flex items-center py-8 bg-[#EBF3FF] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center mb-8">
          <p className="text-xl font-semibold text-primary mb-4">Usecase</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1a1a1a]">
            WhereSit Matters Most
          </h2>
        </div>

        <div className="relative flex items-center justify-between">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="hidden md:flex items-center justify-center p-2 rounded-full hover:bg-white/50 transition-all active:scale-95"
          >
            <ChevronLeft className="h-8 w-8 text-[#1a1a1a]" />
          </button>

          {/* Content Wrapper */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 flex-1 max-w-5xl mx-auto px-4 md:px-0">
            {/* Content Left */}
            <div className="flex-1 space-y-6 animate-in fade-in slide-in-from-left duration-500">
              <div className="space-y-3">
                <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a]">
                  {slide.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed font-medium whitespace-pre-line">
                  {slide.description}
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-lg font-medium text-[#1a1a1a]">
                  Use <span className="font-bold">{slide.command}</span> input
                </p>
                <ul className="space-y-3">
                  {slide.steps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="text-[#1a1a1a] font-bold mt-1">•</span>
                      <span className="text-base text-[#1a1a1a]">
                        {step.highlight ? (
                          <>
                            {step.text.split(step.highlight)[0]}
                            <span className="text-blue-600 font-medium">
                              {step.highlight}
                            </span>
                            {step.text.split(step.highlight)[1]}
                          </>
                        ) : (
                          step.text
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-lg font-medium text-[#1a1a1a] pt-2">
                {slide.footer}
              </p>
            </div>

            {/* Mobile Mockup Right */}
            <div className="flex-1 relative max-w-[280px] w-full animate-in fade-in slide-in-from-right duration-500">
              <div className="relative">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={260}
                  height={400}
                  className="w-full h-auto object-contain max-h-[320px] lg:max-h-[420px]"
                  priority
                />
              </div>
              {/* Subtle aura effect around phone */}
              <div className="absolute inset-x-0 bottom-0 top-1/2 -z-10 bg-blue-400/20 blur-[100px] rounded-full" />
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="hidden md:flex items-center justify-center p-2 rounded-full hover:bg-white/50 transition-all active:scale-95"
          >
            <ChevronRight className="h-8 w-8 text-[#1a1a1a]" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {useCases.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 w-2 rounded-full transition-all ${
                currentSlide === idx ? "bg-primary w-6" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
