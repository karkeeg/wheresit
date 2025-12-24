"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Walkthrough", href: "#walkthrough" },
  ];
  const navItems2 = [
    { name: "Support", href: "#support" },
    { name: "Usecase", href: "#usecase" },
  ];
  const navItemsMo = [...navItems, ...navItems2];
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm hover:bg-blue-700 hover:text-white font-semibold px-3 py-1.5 rounded-xl transition-color"
            >
              {item.name}
            </a>
          ))}
        </div>
        {/* Logo */}
        <a key={"home"} href={"#home"} className="flex items-center gap-2">
          <div className="shrink-0 inline-block">
            <div className=" rounded-full shadow shadow-amber-200 ">
              <Image
                src={"/logo-gif.gif"}
                unoptimized
                alt="logo"
                height={100}
                width={100}
                className="h-[50px] w-[50px] object-cover rounded-full bg-blue-400 transpar"
              />
            </div>
          </div>

          <div className="text-3xl font-bold">
            Where<span className="text-blue-700">Sit</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navItems2.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm hover:bg-blue-700 hover:text-white font-semibold px-3 py-1.5 rounded-xl transition-color"
            >
              {item.name}
            </a>
          ))}
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground cursor-pointer"
          >
            {isOpen ? (
              <X size={24} color="red" />
            ) : (
              <Menu size={24} color="blue" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b ">
          <div className="px-4 py-4 space-y-4">
            {navItemsMo.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-md font-semibold text-center  text-gray-900 border border-gray-300 rounded-md ounded-md px-2 py-4 hover:bg-blue-500 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)} // close menu on click
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
