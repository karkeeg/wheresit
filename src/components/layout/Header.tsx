"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Walkthrough", href: "#walkthrough" },
  ];

  const navItems2 = [
    { name: "Group Sharing", href: "#groupsharing" },
    { name: "Support", href: "#support" },
    { name: "Usecase", href: "#usecase" },
  ];

  const navItemsMo = [...navItems, ...navItems2];

  return (
    <header className="sticky top-0 z-50 bg-[#F4F9FF]/95 backdrop-blur-sm opacity-95 border-b border-border">
      <nav
        className="
          h-20 flex items-center justify-between
          px-4 sm:px-8 lg:px-[110px]
        "
      >
        {/* Mobile Menu Button - Left (Invisible on desktop for balance) */}
        <div className="md:hidden flex-1">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 -ml-2">
            {isOpen ? (
              <X size={28} className="text-red-500" />
            ) : (
              <Menu size={28} className="text-primary" />
            )}
          </button>
        </div>

        {/* Left Navigation - Desktop */}
        <div className="hidden md:flex gap-[32px] flex-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-md font-semibold text-black hover:text-blue-700 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Center Logo */}
        <div className="flex items-center justify-center">
          <a href="#home" className="flex items-center gap-2 shrink-0">
            <Image
              src="/icons/Layer_1.svg"
              alt="logo"
              width={40}
              height={40}
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
            />
            <span className="text-2xl font-bold text-[#333333]">
              Where<span className="text-[#1566E6]">Sit</span>
            </span>
          </a>
        </div>

        {/* Right Navigation - Desktop */}
        <div className="hidden md:flex gap-[32px] justify-end flex-1">
          {navItems2.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-md font-semibold text-black hover:text-blue-700 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Spacer for mobile to center logo */}
        <div className="md:hidden flex-1" />
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="px-4 py-4 space-y-4">
            {navItemsMo.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="
                  block text-md font-semibold text-center
                  text-gray-900 border border-gray-300
                  rounded-md px-2 py-4
                  hover:bg-blue-500 hover:text-white
                  transition-colors
                "
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
