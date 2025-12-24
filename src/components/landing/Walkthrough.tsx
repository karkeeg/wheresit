import Image from "next/image";

export default function WalkthroughSection() {
  return (
    <section id="walkthrough" className="py-12 px-4 md:px-8 bg-[#E2ECFF]">
      <div className="text-center mb-16">
        <p className="text-primary font-medium mb-2">Walkthrough</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
          Get started in 3 simple ways
        </h2>
      </div>

      <div className="space-y-16 max-w-6xl mx-auto">
        {/* Step 01 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image Left */}
          <div className="relative text-start h-80 mx-6 md:h-96 rounded-lg flex items-center justify-center ">
            <Image
              src="/walkthrough-left-mobile.svg"
              alt="Speak your Thoughts"
              width={400}
              height={400}
              className="object-contain w-full h-full"
            />
            {/* Small Image top-left */}
            <div className="absolute  md:-left-10 md:-top-14  -top-8 sm:left-20 sm:-top-10 -left-8 w-32 h-32 md:w-40 md:h-40">
              <Image
                src="/walkthrough-first-left-small-image.svg"
                alt="Overlay"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col sm:justify-center sm:text-center md:text-left">
            <span className="text-4xl font-bold text-foreground mb-4">01.</span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Speak your Thoughts
            </h3>
            <p className="text-base md:text-base   text-muted-foreground mb-4">
              Voice command input
            </p>
            <ul className="space-y-3 ps-5 sm:ps-0 ">
              <li className="flex items-start gap-2 text-md md:text-base text-foreground leading-relaxed ">
                <span className="text-blue-600 font-bold mt-1">•</span>
                Tag the mic or say
                <span className="text-blue-600">"Hey WHERESIT"</span> to start
              </li>
              <li className="flex items-start gap-2 text-md md:text-base text-foreground leading-relaxed ">
                <span className="text-blue-600 font-bold mt-1">•</span>
                Speak naturally, we'll take notes
              </li>
              <li className="flex items-start gap-2 text-md md:text-base text-foreground leading-relaxed">
                <span className="text-blue-600 font-bold mt-1">•</span>
                AI automatically transcribes and categorizes your voice into
                reminders or notes
              </li>
            </ul>
          </div>
        </div>

        {/* Step 02 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content Left */}
          <div className="flex flex-col sm:justify-center sm:text-center md:text-left order-2 md:order-1">
            <span className="text-4xl font-bold text-foreground mb-4">02.</span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Let AI Organize
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-4">
              Smart Understanding
            </p>
            <ul className="space-y-3 ps-5 sm:ps-0">
              <li className="flex items-start gap-2 text-md md:text-base text-foreground leading-relaxed">
                <span className="text-blue-600 font-bold mt-1">•</span>
                AI automatically analyzes your input - reminder, note, or task.
              </li>
              <li className="flex items-start gap-2 text-md md:text-base text-foreground leading-relaxed">
                <span className="text-blue-600 font-bold mt-1">•</span>
                Categorizes and stores it in the right section (Reminders,
                Notes, To-Do)
              </li>
              <li className="flex items-start gap-2 text-md md:text-base text-foreground leading-relaxed">
                <span className="text-blue-600 font-bold mt-1">•</span>
                Instantly keeps everything organized and easy to find — no
                manual sorting needed
              </li>
            </ul>
          </div>

          {/* Image Right */}
          <div className="relative mx-6  h-80 md:h-96 md:w-96 w-80 rounded-lg flex items-center justify-center order-1 md:order-2 ">
            <Image
              src="/walkthrough-right-mobile.svg"
              alt="Let AI Organize"
              width={400}
              height={400}
              className="object-contain w-full h-full  "
            />
            <div className="absolute  md:-left-10 md:-top-10  -top-8 sm:left-20 sm:-top-10 -left-8 w-32 h-32 md:w-40 md:h-40">
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
        <div className="grid grid-cols-1 mx-6 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image Left */}
          <div className="relative h-80 w-80 md:h-96 md:w-96 rounded-lg flex items-center justify-center">
            <Image
              src="/walkthrough-left-second-mobile.svg"
              alt="Get Reminder"
              width={400}
              height={400}
              className="object-contain w-full h-full"
            />
            <div className="absolute  md:-left-10 md:-top-10  -top-8 sm:left-20 sm:-top-10 -left-8 w-32 h-32 md:w-40 md:h-40">
              <Image
                src="/walkthrough-third-left-small-image.svg"
                alt="Overlay"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col sm:justify-center sm:text-center md:text-left ">
            <span className="text-4xl font-bold text-foreground mb-4">03.</span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Get Reminder
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-4">
              Voice command input
            </p>
            <ul className="space-y-3 ps-5 sm:ps-0 ">
              <li className="flex items-start gap-2 text-md md:text-base text-foreground leading-relaxed">
                <span className="text-blue-600 font-bold mt-1">•</span>
                Voice command input
              </li>
              <li className="flex items-start gap-2 text-md md:text-base text-foreground leading-tight">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span>
                  Tag the mic or say{" "}
                  <span className="text-blue-600 font-semibold">
                    "Hey WHERESIT"
                  </span>{" "}
                  to start
                </span>
              </li>

              <li className="flex items-start gap-2 text-md md:text-base text-foreground leading-relaxed">
                <span className="text-blue-600 font-bold mt-1">•</span>
                AI automatically transcribes and categorizes your voice into
                reminders or notes
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
