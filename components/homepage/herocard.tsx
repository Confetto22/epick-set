import { Sparkles } from "lucide-react";
import Image from "next/image";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import {
  // CarouselHorizontal,
  CarouselVertical,
} from "../common/carousel-vertical";
import { CarouselHorizontal } from "../common/horizontal-carousel";

const downloads = [
  {
    icon: <FaApple className="text-white text-xl" />,
    title: "Download on the",
    store: "App Store",
  },
  {
    icon: <IoLogoGooglePlaystore className="text-white text-xl" />,
    title: "GET IT ON",
    store: "Google Play",
  },
];

const images = [
  {
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop&crop=face",
    alt: "Musician",
    height: "h-32",
  },
  {
    src: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    alt: "Guitar",
    height: "h-40",
  },
  {
    src: "https://images.unsplash.com/photo-1450044804117-534ccd6e6a3a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmNlcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    alt: "Concert",
    height: "h-32",
  },
  {
    src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbmNlcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    alt: "Performance",
    height: "h-40",
  },
  {
    src: "https://images.unsplash.com/photo-1468359601543-843bfaef291a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbmNlcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    alt: "Sheet Music",
    height: "h-32",
  },
  {
    src: "https://images.unsplash.com/photo-1468359601543-843bfaef291a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbmNlcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    alt: "Band",
    height: "h-32",
  },
];

const HeroCard = () => {
  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-5 items-center gap-20">
      {/* Left Content */}
      <div className="flex flex-col col-span-3 items-start gap-6 max-w-xl">
        <div className="flex flex-col gap-6 items-start w-full">
          <h1 className="text-white font-semibold text-5xl sm:text-6xl md:text-[3.25rem] leading-[1.1]">
            <p className="flex flex-col gap-2 md:flex-row">
              <span className="block">Create.</span>
              <span className="block">
                <span className="gradient-text">Collaborate.</span>
              </span>
            </p>
            <span className="block">Perform.</span>
          </h1>

          <p className="text-[#d9d9d9] text-lg leading-[1.45] max-w-none">
            Welcome to your creative hub, where set-lists, lyrics, and chords
            come together, and every show feels effortless. Let us handle the
            details, so you can focus on what you love: making music and
            connecting with your audience.
          </p>
        </div>

        <div className="flex flex-col justify-center md:justify-start md:flex-row w-full gap-6 pt-4">
          <button className="bg-white text-black px-5 py-2.5 rounded-lg font-medium hover:bg-gray-100 transition-colors w-full md:w-auto">
            Sign Up
          </button>
          <button className="bg-linear-to-r from-[#9715fa] to-[#235cfb] text-white px-5 py-2.5 rounded-lg font-medium flex items-center justify-center gap-5 hover:opacity-90 transition-opacity w-full md:w-auto">
            <Sparkles size={24} />
            <span>Create Your First Setlist</span>
          </button>
        </div>

        <div className="hidden md:flex flex-col gap-3 pt-4">
          <p className="text-[#d9d9d9] text-sm">
            <span className="font-medium">Download the app: </span>
            <span className="font-semibold">Coming Soon</span>
          </p>

          <div className="flex gap-4">
            {downloads.map((download) => (
              <div
                key={download.title}
                className="bg-black border border-[#364153] rounded-[10px] px-[25px] py-3 flex items-center gap-3 hover:border-gray-500 transition-colors cursor-pointer"
              >
                {download.icon}
                <div>
                  <p className="text-white text-[10px] leading-[12.5px] tracking-[0.1172px]">
                    {download.title}
                  </p>
                  <p className="text-white text-sm font-semibold leading-[17.5px] tracking-[-0.1504px]">
                    {download.store}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Image Grid */}
      <div className="col-span-2 hidden md:flex">
        <CarouselVertical />
      </div>
      <div className="col-span-3 md:hidden w-full overflow-hidden">
        <CarouselHorizontal />
      </div>
    </div>
  );
};

export default HeroCard;
