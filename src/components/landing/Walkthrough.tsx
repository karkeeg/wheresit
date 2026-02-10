import Image from "next/image";
import {
  Mic,
  Pointer,
  Check,
  LayoutGrid,
  AlertCircle,
  Info,
  Zap,
  Folder,
  MessageSquare,
  Lightbulb,
  Pencil,
} from "lucide-react";

export default function WalkthroughSection() {
  return (
    <section id="walkthrough" className="py-12 px-4 mx-w-7xl mx-auto md:px-8 bg-[#E9F2FF]">
      <div className="text-center mb-16">
        <p className="text-primary text-xl font-medium mb-4">Walkthrough</p>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1a1a1a] mb-2 leading-tight">
          Get started In 3 simple ways
        </h2>
      </div>

      <div className="space-y-28 max-w-6xl mx-auto">
        {/* Step 01 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Side */}
          <div className="relative order-1 lg:order-1 mx-4 md:mx-6">
            <div className="rounded-[30px] overflow-hidden bg-white shadow-xl aspect-[4/3] relative">
              <Image
                src="/walkthrough1.svg"
                alt="Speak your Thoughts"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -top-10 -left-6 md:-left-12 w-32 h-32 md:w-40 md:h-40">
              <Image
                src="/walkthrough-first-left-small-image.svg"
                alt="Overlay"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="flex flex-col order-2 lg:order-2 space-y-6 px-4">
            <div>
              <span className="text-3xl font-bold text-[#1a1a1a]">01.</span>
              <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a] mt-2">
                Speak your Thoughts
              </h3>
              <p className="text-lg text-gray-500 mt-2">Voice command input</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-gray-700">
                  <Pencil className="h-5 w-5 text-red-500" />
                </div>
                <div>
                  <p className="font-bold text-[#1a1a1a]">
                    Start with <span className="text-blue-600">WhereSit</span>
                  </p>
                  <p className="text-gray-600 text-sm md:text-base">
                    Tap the mic or just say "Hey{" "}
                    <span className="text-blue-600 font-medium">WhereSit</span>"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-gray-700">
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-[#1a1a1a]">Speak Naturally</p>
                  <p className="text-gray-600 text-sm md:text-base">
                    We listen and organize your words automatically.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-gray-700">
                  <Lightbulb className="h-5 w-5 text-yellow-500" />
                </div>
                <div>
                  <p className="font-bold text-[#1a1a1a]">
                    Instant Notes & Reminders
                  </p>
                  <p className="text-gray-600 text-sm md:text-base">
                    Your voice is transformed into clear, categorized reminders
                    and notes — no typing needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 02 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Side */}
          <div className="flex flex-col order-2 lg:order-1 space-y-6 px-4">
            <div>
              <span className="text-3xl font-bold text-[#1a1a1a]">02.</span>
              <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a] mt-2">
                Let <span className="text-blue-600">WhereSit</span> Organize
              </h3>
              <p className="text-lg text-gray-500 mt-2">Smart Understanding</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-gray-700">
                  <Folder className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <p className="font-bold text-[#1a1a1a]">
                    <span className="text-blue-600">WhereSit</span> Organizes
                    Everything
                  </p>
                  <p className="text-gray-600 text-sm md:text-base">
                    Say or type anything — reminder, note, or task — and{" "}
                    <span className="text-blue-600 font-medium">WhereSit</span>{" "}
                    handles it.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-gray-700">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                </div>
                <div>
                  <p className="font-bold text-[#1a1a1a]">
                    <span className="text-red-500"></span> Auto-Categorized
                  </p>
                  <p className="text-gray-600 text-sm md:text-base">
                    It instantly sorts your input into Reminders, Notes, or
                    To-Do.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-gray-700">
                  <Zap className="h-5 w-5 text-yellow-500" />
                </div>
                <div>
                  <p className="font-bold text-[#1a1a1a]"> Easy to Find</p>
                  <p className="text-gray-600 text-sm md:text-base">
                    Everything stays neatly organized — no manual sorting
                    needed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative order-1 lg:order-2 mx-4 md:mx-6">
            <div className="rounded-[30px] overflow-hidden bg-white shadow-xl aspect-[4/3] relative">
              <Image
                src="/walkthrough2.svg"
                alt="Let WhereSit Organize"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -top-10 -left-6 md:-left-12 w-32 h-32 md:w-40 md:h-40">
              <Image
                src="/walkthrough-second-right-small-image.svg"
                alt="Overlay"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Step 03 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Side */}
          <div className="relative order-1 lg:order-1 mx-4 md:mx-6">
            <div className="rounded-[30px] overflow-hidden bg-white shadow-xl aspect-[4/3] relative">
              <Image
                src="/walkthrough3.svg"
                alt="Get Reminder"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -top-10 -left-6 md:-left-12 w-32 h-32 md:w-40 md:h-40">
              <Image
                src="/walkthrough-third-left-small-image.svg"
                alt="Overlay"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="flex flex-col order-2 lg:order-2 space-y-6 px-4">
            <div>
              <span className="text-3xl font-bold text-[#1a1a1a]">03.</span>
              <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a] mt-2">
                Get Reminder
              </h3>
              <p className="text-lg text-gray-500 mt-2">Voice command input</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-gray-700">
                  <MessageSquare className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <p className="font-bold text-[#1a1a1a]"> Speak Naturally</p>
                  <p className="text-gray-600 text-sm md:text-base">
                    Talk freely — we'll capture your words automatically.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-gray-700">
                  <Lightbulb className="h-5 w-5 text-yellow-500" />
                </div>
                <div>
                  <p className="font-bold text-[#1a1a1a]">
                    Instant Notes & Reminders
                  </p>
                  <p className="text-gray-600 text-sm md:text-base">
                    <span className="text-blue-600 font-medium">WhereSit</span>{" "}
                    instantly transcribes and sorts your voice into Reminders or
                    Notes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-gray-700">
                  <Pencil className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-[#1a1a1a]">
                    Voice Command Input
                  </p>
                  <p className="text-gray-600 text-sm md:text-base">
                    Tap the mic or say "Hey{" "}
                    <span className="text-blue-600 font-medium">WhereSit</span>"
                    to get started.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
