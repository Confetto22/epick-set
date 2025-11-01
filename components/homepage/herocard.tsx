import { Sparkles } from "lucide-react";
import Image from "next/image";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import {
  CarouselHorizontal,
  CarouselVertical,
} from "../common/carousel-vertical";

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
    <div className="max-w-6xl mx-auto  grid md:grid-cols-5  items-center gap-18">
      {/* Left Content */}
      <div className=" flex flex-col col-span-3 items-start gap-5 max-w-xl">
        <h1 className="text-white font-semibold text-[1.8rem] md:text-[4rem] leading-[3.8rem] mb-6">
          Create.{" "}
          <span className="bg-linear-to-r from-[#a855f7] to-[#3b82f6]  bg-clip-text text-transparent">
            Collaborate.
          </span>{" "}
          Perform.
        </h1>

        <p className="text-gray-300 text-wrap">
          Welcome to your creative hub, where set-lists, lyrics, and chords come
          together, and every show feels effortless. Let us handle the details,
          so you can focus on what you love: making music and connecting with
          your audience.
        </p>

        <div className="flex flex-col md:flex-row w-full  gap-4 mb-8">
          <button className="bg-white text-black px-8 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors w-full">
            Sign Up
          </button>
          <button className="bg-linear-to-r from-[#a855f7] to-[#3b82f6] text-white px-8 py-2 rounded-lg font-medium flex items-center gap-2 hover:opacity-90 transition-opacity w-full">
            <Sparkles size={20} />
            Create Your First Setlist
          </button>
        </div>

        <p className="text-gray-400 text-sm mb-4 hidden md:flex">
          Download the app: Coming Soon
        </p>

        <div className=" gap-4 hidden md:flex">
          {downloads.map((download) => (
            <div
              key={download.title}
              className="bg-black border border-gray-600 rounded-lg px-4 py-3 flex items-center gap-3 hover:border-gray-500 transition-colors cursor-pointer"
            >
              {download.icon}
              <div>
                <p className="text-gray-400 text-xs">{download.title}</p>
                <p className="text-white text-sm font-medium">
                  {download.store}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image Grid */}
      <div className="col-span-2 hidden md:flex">
        <CarouselVertical />
      </div>
      <div className="col-span-2 hidden md:hidden">
        <CarouselHorizontal />
      </div>
    </div>
  );
};

export default HeroCard;
