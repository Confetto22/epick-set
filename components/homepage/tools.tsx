import { Zap, CloudDownload, Music, Smartphone } from "lucide-react";
import Image from "next/image";

const Tools = () => {
  const cards = [
    {
      icon: <Zap size={32} className="text-[#0088ff]" />,
      title: "Smart setlist builder",
      description:
        "Let AI suggest the perfect flow for your next show. Save time, discover new combinations, and keep your performances fresh.",
    },
    {
      icon: <CloudDownload size={32} className="text-[#0088ff]" />,
      title: "Instant lyrics & chords",
      description:
        "Access and edit your lyrics and chords anytime. No more paper shuffling or app switching—just smooth, simple music-making.",
    },
    {
      icon: <Music size={32} className="text-[#0088ff]" />,
      title: "Effortless audio control",
      description:
        "Upload, organize, and play your tracks with ease. Keep your sessions and gigs running seamlessly, every time.",
    },
    {
      icon: <Smartphone size={32} className="text-[#0088ff]" />,
      title: "Ready for any screen",
      description:
        "Enjoy a seamless experience on stage, in the studio, or on the go. Your music tools are always by your side.",
    },
  ];

  // Avatar placeholder - using a default avatar image
  // const avatarUrl =
  //   "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop";

  return (
    <section className="bg-[#131026] px-6 py-16 flex items-center justify-center">
      <div className="max-w-6xl flex flex-col gap-10 w-full">
        <div className="flex flex-col items-start gap-5 text-[#f1efff]">
          <h2 className="font-bold text-[2rem] leading-[1.2]">
            Tools that empower your music
          </h2>
          <p className="text-lg leading-[1.45] max-w-[862px]">
            Everything you need to organize, rehearse, and perform—setlists,
            lyrics, chords, and audio, all in one place. Focus on your music,
            not the mess.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 justify-items-center">
          {cards.map((card) => (
            <div
              key={card.title}
              className="border border-[#6927da] justify-self-center rounded-[16px] max-w-sm h-full min-h-80 mx-auto"
            >
              <div className="bg-[#0c081f] p-6 h-full rounded-[16px] flex flex-col gap-[10px]">
                <div className="flex flex-col gap-[10px] items-start justify-center">
                  <div className="px-4 py-[10px] flex flex-col gap-[10px] w-full">
                    <div className="relative w-[60px] h-[60px] bg-[#235CFB33] rounded-full">
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center">
                        {card.icon}
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-bold text-[20px] leading-normal text-[#f1efff]">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center pl-4 pr-0 py-0 w-full">
                    <p className="text-[#f1efff] text-sm leading-normal">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
