"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import type React from "react";

export default function Support() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.success) {
        setIsSubmitted(true);
        setEmail("");
        // Reset submitted status after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        setError(data.error || "Failed to send email. Please try again later.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="support" className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-2 md:mb-4">
          <p className="text-xl font-semibold text-primary mb-2">Support</p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-[#1a1a1a]">
            Early Bird Access
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 mt-8 md:grid-cols-2 gap-8 md:gap-12 items-center ">
          {/* Left: Image */}
          <div className="relative w-full flex items-center justify-center py-8">
            <div className="relative w-full max-w-[500px] h-[260px] sm:h-[350px] md:h-[450px] rounded-lg flex items-center justify-center ">
              <div className="absolute w-[340px] sm:w-[300px] md:w-[380px] h-[380px] sm:h-[300px] md:h-[380px]">
                <Image
                  src="/hero-right-side-ring-bg.png"
                  alt="hero right image"
                  fill
                  className="object-contain pointer-events-none"
                />
              </div>

              <div className="relative w-[170px] h-[360px] sm:w-[180px] sm:h-[360px] md:w-[180px] md:h-[380px] rounded-[40px] overflow-hidden bg-black">
                <video
                  src="/video/support-left-section.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover block"
                />
              </div>
            </div>
          </div>

          {/* Left: Form & Text */}
          <div className="w-full flex flex-col sm:justify-center sm:items-center md:items-start space-y-6">
            {/* Text */}
            <div className="space-y-3 sm:text-center md:text-left mx-4 sm:mx-0">
              <h3 className="text-lg md:text-xl font-semibold text-foreground">
                Questions or early access?
              </h3>
              <p className="text-gray-800 text-md md:text-base">
                Reach out to us below
              </p>
              <h3 className="text-sm md:text-xl font-semibold text-foreground">
                Add your Gamil
              </h3>
              <p className="text-gray-800 text-md md:text-base">
                Sign up now to be among the first to experiecnce WhereSit.
              </p>
            </div>

            {/* Email Form */}
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md flex flex-col gap-4 items-center"
            >
              <div className="flex gap-4 flex-col w-full">
                {/* Input */}
                <div className="relative w-full max-w-sm self-center md:self-start">
                  <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <Image
                      src="/icons/mail.svg"
                      alt="mail"
                      width={20}
                      height={20}
                    />
                  </span>

                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                    className="w-full pl-10 pr-3 py-3 border border-blue-500 rounded-lg focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                  />
                </div>

                {/* Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full max-w-sm py-4 h-12 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg disabled:opacity-70"
                >
                  {isLoading
                    ? "Sending..."
                    : isSubmitted
                      ? "Submitted!"
                      : "Submit"}
                </Button>
              </div>

              {isSubmitted && (
                <p className="text-sm text-green-600 font-medium mt-2 text-center">
                  Thank you for signing up!
                </p>
              )}

              {error && (
                <p className="text-sm text-red-600 font-medium mt-2 text-center">
                  {error}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
