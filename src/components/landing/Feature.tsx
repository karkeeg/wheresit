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
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    icon: <Mic className="h-5 w-5 text-white" />,
    title: "Voice Commands",
    description:
      "Simply record and manage tasks with your voice with the help of AI.",
  },
  {
    icon: <Sparkles className="h-5 w-5 text-white" />,
    title: "Smart AI",
    description:
      "Automatically categorize and tag your notes for easy retrieval.",
  },
  {
    icon: <Users className="h-5 w-5 text-white" />,
    title: "Group Sharing",
    description:
      "Effortlessly share notes and to-do lists with friends and family.",
  },
  {
    icon: <Sparkles className="h-5 w-5 text-white" />,
    title: "Smart Reminders",
    description: "Get timely reminders exactly when you need them.",
  },
  {
    icon: <Sparkles className="h-5 w-5 text-white" />,
    title: "Cloud Sync",
    description:
      "Keep your notes and reminders synced across all your devices.",
  },
  {
    icon: <Users className="h-5 w-5 text-white" />,
    title: "Multi-Platform",
    description: "Access your notes on any device, anywhere anytime.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold text-primary mb-2">Feature</p>
          <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold  mb-4 text-foreground">
            Everything you need to know
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-8 md:gap-10 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl transition duration-300  hover:bg-blue-900 hover:text-white"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 bg-primary/70 rounded-full mb-4 ">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-md sm:text-xl font-semibold mb-2 ">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-md sm:text-base text-[#222222] hover:text-white  leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
