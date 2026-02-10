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
    <section className="relative w-full bg-[#E2EDFE] py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
        <p className="text-primary font-semibold mb-2 text-sm sm:text-base">
          Usecase
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
          WhereSit Matters Most
        </h2>
      </div>

      {/* Content Wrapper */}
      <div className="max-w-5xl mx-5 md:mx-10 xl:mx-auto px-4 sm:px-10 lg:px-10 relative">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 sm:p-2.5 lg:p-3 shadow-lg hover:bg-gray-100 transition-colors active:scale-95"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-700" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 sm:p-2.5 lg:p-3 shadow-lg hover:bg-gray-100 transition-colors active:scale-95"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-700" />
        </button>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Content Left */}
          <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              {slide.title}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 whitespace-pre-line">
              {slide.description}
            </p>

            <div className="bg-blue-50 border-l-4 border-primary p-3 sm:p-4 rounded-r-lg">
              <p className="text-xs sm:text-sm md:text-base font-medium text-gray-700">
                Use{" "}
                <span className="text-primary font-semibold">
                  {slide.command}
                </span>{" "}
                input
              </p>
            </div>

            <ul className="space-y-3 sm:space-y-4">
              {slide.steps.map((step, idx) => (
                <li key={idx} className="flex gap-2 sm:gap-3 items-start">
                  <span className="text-primary font-bold text-base sm:text-lg flex-shrink-0 mt-0.5">
                    •
                  </span>
                  <span className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                    {step.highlight ? (
                      <>
                        {step.text.split(step.highlight)[0]}
                        <span className="text-primary font-semibold">
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

            <p className="text-sm sm:text-base md:text-lg font-semibold text-primary pt-2 sm:pt-4">
              {slide.footer}
            </p>
          </div>

          {/* Mobile Mockup Right */}
          <div className="w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-2 relative">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[450px]">
              {/* Subtle aura effect around phone */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 blur-3xl rounded-full scale-110 opacity-50"></div>

              <div className="relative aspect-[1] w-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8 sm:mt-12 md:mt-16 px-4">
          {useCases.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 sm:h-3 rounded-full transition-all duration-300 ${
                currentSlide === idx
                  ? "bg-primary w-6 sm:w-8"
                  : "bg-gray-300 w-2.5 sm:w-3 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
