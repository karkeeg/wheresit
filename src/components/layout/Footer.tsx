"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Footer() {
  return (
    <section id="getstarted">
      <footer className="bg-[#1566E6] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-center md:gap-30 justify-center  sm:gap-10  gap-12 items-center">
          {/* Card Section */}
          <div className="bg-white rounded-2xl py-4 px-6 flex flex-col justify-center items-center gap-4 max-w-xs text-center">
            <a
              key={"home"}
              href={"#home"}
              className="flex flex-col items-center gap-2"
            >
              <div className="rounded-full shadow shadow-amber-200 flex items-center justify-center">
                <Image
                  src={"/icons/Layer_1.svg"}
                  alt="logo"
                  height={100}
                  width={100}
                  className="h-[50px] w-[50px] object-cover rounded-full bg-blue-400"
                />
              </div>

              <div className="text-3xl font-bold text-black">
                Where<span className="text-blue-700">Sit</span>
              </div>
            </a>

            <p className="text-gray-900 text-sm sm:text-base font-medium leading-relaxed">
              Voice-powered notes and reminders – smartly organized by AI
            </p>

            <Button className="w-full bg-primary text-white hover:bg-primary/80 font-semibold flex items-center justify-center gap-2 py-2">
              <Image
                src="/icons/arrow-down.svg"
                alt="download"
                width={16}
                height={16}
              />
              Download App
            </Button>
          </div>

          {/* Links + Contact */}
          <div className="flex px-4 flex-row-reverse  sm:flex-row gap-12 md:gap-30 md:mt-6">
            {/* Links */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-3">Links</h4>
              <ul className="space-y-2 text-sm sm:text-base">
                {[
                  {
                    label: "Home",
                    href: "#home",
                  },
                  {
                    label: "Feature",
                    href: "#features",
                  },
                  {
                    label: "WalkThrough",
                    href: "#walkthrough",
                  },
                  {
                    label: "Support",
                    href: "#support",
                  },
                  {
                    label: "Privacy Policy",
                    href: "https://aidotech.in/privacy_policy.php",
                  },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="hover:text-white/80 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-3">Contact</h4>
              <ul className="space-y-2 text-sm sm:text-base">
                {[
                  {
                    icon: "/icons/mail.svg",
                    label: "WhereSit.app@gmail.com",
                    href: "mailto:WhereSit.app@gmail.com",
                  },
                  { icon: "/icons/x.svg", label: "X / Twitter", href: "#" },
                  { icon: "/icons/linkedin.svg", label: "LinkedIn", href: "#" },
                  {
                    icon: "/icons/tiktok-icon.svg",
                    label: "TikTok",
                    href: "#",
                  },
                ].map((contact, index) => (
                  <li key={index} className="flex gap-2">
                    <a
                      href={contact.href}
                      className="hover:text-white/80 flex items-center gap-2  transition-colors"
                    >
                      <Image
                        src={contact.icon}
                        alt={contact.label}
                        width={20}
                        height={20}
                        className="h-2.6 w-2.6"
                      />
                      {contact.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <div className="flex-1 border-t border-[#8BB2F3]" />
          <p className="text-white text-sm whitespace-nowrap py-2 sm:py-0">
            © 2025 WhereSit. All rights reserved.
          </p>
          <div className="flex-1 border-t border-[#8BB2F3]" />
        </div>
      </footer>
    </section>
  );
}
