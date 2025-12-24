"use client";

import Image from "next/image";

export default function Usecase() {
  return (
    <section id="usecase" className="py-16 md:py-8 bg-[#E2ECFF]">
      <div className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 mt-4 ">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary mb-2">Usecase</p>
          <h2 className="text-4xl md:text-4xl font-bold text-balance">
            When it Matters Most
          </h2>
        </div>

        {/* --- Usecase #1 --- */}
        <div className="sm:grid md:grid-cols-2 ps-3 flex grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-4 w-[70%]">
            <h3 className="text-2xl font-bold text-foreground">
              Misplaced your Citizenship?
            </h3>

            <p className="text- text-black leading-relaxed">
              Worried about your assets from misleading? Or get confused in a
              world of data?
            </p>
            <h3 className="text-md">
              Use <span className="font-semibold">Voice command</span> input
            </h3>
            <ul className="">
              <li className="flex gap-3 ">
                <span className="text-primary font-bold">•</span>
                <span className="text-sm text-black" >
                  Tap the mic or say
                  <span className="text-blue-600">*Hey WHERESIT*</span> to start
                </span>
              </li>
              <li className="flex gap-3 text-text-black">
                <span className="text-text-black font-bold">•</span>
                <span className="text-sm text-black">
                  Speak naturally, find my Citizenship card
                </span>
              </li>
              <li className="flex gap-3 text-black">
                <span className="text-black font-bold">•</span>
                <span className="text-sm text-black">
                  The AI instantly searches and finds your lost things
                </span>
              </li>
            </ul>
          </div>

          {/* Image */}
          <div className="flex justify-center relative">
            <div className="w-30 h-30 sm:w-full sm:h-full flex items-center justify-center text-6xl">
              <Image
                src="/usecase-right.svg"
                alt="Misplaced"
                width={320}
                height={320}
              />
            </div>
            <div className="absolute inset-0 -z-10 rounded-full bg-primary/10 blur-2xl" />
          </div>
        </div>

        {/* --- Usecase #2 --- */}
        <div className="flex md:grid md:grid-cols-2 gap-8 items-center mt-10">
          {/* Image */}
          <div className="flex justify-center relative">
            <div className="w-30 h-30 sm:w-full sm:h-full flex items-center justify-center text-6xl">
              <Image
                src="/left-usercase.svg"
                alt="Found it"
                width={320}
                height={320}
              />
            </div>
            <div className="absolute inset-0 -z-10 rounded-full bg-primary/10 blur-2xl" />
          </div>

          {/* Content */}
          <div className="space-y-4 mt-14">
            <h3 className="text-2xl font-bold text-foreground">
              Congratulation! Found it
            </h3>

            <p className="text-md text-black  leading-relaxed">
              <span className="text-blue-600">Wheresit</span> knows where it is.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
