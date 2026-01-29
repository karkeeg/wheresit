// "use client";

// import type React from "react";

// import { Card } from "@/components/ui/card";
// import { Mic, Sparkles, Users, Bell, Cloud, Smartphone } from "lucide-react";

// interface FeatureItem {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
// }

// const features: FeatureItem[] = [
//   {
//     icon: <Mic className="h-5 w-5 text-white" />,
//     title: "Voice Commands",
//     description:
//       "Simply record and manage tasks with your voice with thehelp of AI.",
//   },
//   {
//     icon: <Sparkles className="h-5 w-5 text-white" />,
//     title: "Smart AI",
//     description:
//       "Automatically categorize and tag your notes for easy retrieval.",
//   },
//   {
//     icon: <Users className="h-5 w-5 text-white" />,
//     title: "Group Sharing",
//     description:
//       "Effortlessly share notes and to-do lists with friends and family.",
//   },
//   {
//     icon: <Sparkles className="h-5 w-5 text-white" />,
//     title: "Smart Reminders",
//     description: "Get timely reminders exactly when you need them.",
//   },
//   {
//     icon: <Sparkles className="h-5 w-5 text-white" />,
//     title: "Cloud Sync",
//     description:
//       "Keep your notes and remainders synced across all your devices.",
//   },
//   {
//     icon: <Users className="h-5 w-5 text-white" />,
//     title: "Multi-Platform",
//     description: "Access your notes on any device, anywhere anytime.",
//   },
// ];

// export default function Features() {
//   return (
//     <section id="features" className="py-12 md:py-12 bg-[#FFFFFF]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <p className="text-sm font-semibold text-primary mb-2">Features</p>
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
//             Everything you need to know
//           </h2>
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="p-8  hover:shadow-lg hover:rounded-xl duration-300 border-none flex flex-col"
//             >
//               <div className="flex flex-col space-y-4 justify-center items-center">
//                 <div className="text-primary  w-fit p-4 bg-primary/70 rounded-full">
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold text-foreground">
//                   {feature.title}
//                 </h3>
//                 <p className="text-foreground/70 text-sm text-center leading-relaxed">
//                   {feature.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import type React from "react";
import { Mic, Sparkles, Users } from "lucide-react";

interface FeatureItem {
  icon: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
}

const features: FeatureItem[] = [
  {
    icon: <Mic className="h-6 w-6 text-white" />,
    title: "Voice Commands",
    description: (
      <>
        Simply record and manage tasks with your voice with the help of{" "}
        <span className="text-primary group-hover:text-white font-medium">
          WhereSit
        </span>
      </>
    ),
  },
  {
    icon: (
      <div className="relative">
        <Mic className="h-6 w-6 text-white" />
        <div className="absolute -top-1 -right-1 bg-white rounded-sm p-0.5">
          <svg
            width="8"
            height="8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </div>
      </div>
    ),
    title: "Safe & Secure",
    description: "Privacy-focused by design, secure by default.",
  },
  {
    icon: <Sparkles className="h-6 w-6 text-white" />,
    title: (
      <>
        Smart{" "}
        <span className="text-primary group-hover:text-white"> WhereSit</span>
      </>
    ),
    description: "Automatically categorize and tag notes for easy retrival",
  },
  {
    icon: <Sparkles className="h-6 w-6 text-white" />,
    title: "Smart Reminders",
    description: "Get timely reminders exactly when you need them",
  },
  {
    icon: <Sparkles className="h-6 w-6 text-white" />,
    title: "Cloud Sync",
    description:
      "Keep your notes and remainders synced across all your devices.",
  },
  {
    icon: <Users className="h-6 w-6 text-white" />,
    title: "Multi-Platform",
    description: "Access your notes on any device, anywhere, anytime.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="lg:min-h-screen flex py-16 md:py-16 bg-white overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-2 sm:px-4 lg:px-6 mb-12 w-full">
        {/* Section Header */}
        <div className="text-center mb-2 lg:mb-4">
          <p className="text-xl font-semibold text-primary mb-3 tracking-wide">
            Feature
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#1a1a1a]">
            Everything you need to know
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-4 lg:p-6 bg-[#f9fafb]/50 hover:bg-[#001e4d] rounded-3xl transition-all duration-300 flex flex-col items-center text-center shadow-sm hover:shadow-xl max-h-[240px] lg:min-h-[300px] justify-center"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-[#3b82f6] rounded-full mb-6 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-[#1a1a1a] group-hover:text-white mb-3 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white text-base lg:text-lg leading-relaxed max-w-[280px] lg:max-w-[300px] transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
