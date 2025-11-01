import { Zap, CloudDownload, Music, Smartphone } from "lucide-react";

const Tools = () => {
  const cards = [
    {
      icon: <Zap />,
      title: "Smart setlist builder",
      description:
        "Let AI suggest the perfect flow for your next show. Save time, discover new combinations, and keep your performances fresh.",
    },
    {
      icon: <CloudDownload />,
      title: "Instant lyrics & chords",
      description:
        "Access and edit your lyrics and chords anytime. No more paper shuffling or app switching—just smooth, simple music-making.",
    },
    {
      icon: <Music />,
      title: "Effortless audio control",
      description:
        "Upload, organize, and play your tracks with ease. Keep your sessions and gigs running seamlessly, every time.",
    },
    {
      icon: <Smartphone />,
      title: "Ready for any screen",
      description:
        "Enjoy a seamless experience on stage, in the studio, or on the go. Your music tools are always by your side.",
    },
  ];

  return (
    <section className="px-11 flex items-center justify-center pb-24 pt-8">
      <div className="content max-w-6xl grid gap-9 w-full mx-auto">
        <div className="flex flex-col items-start gap-5 max-w-[730px]">
          <h2 className="text-white font-semibold text-[1.6rem] md:text-[2rem]">
            Tools that empower your music
          </h2>
          <p className="text-gray-400">
            Everything you need to organize, rehearse, and perform- setlists,
            lyrics, chords, and audio, all in one place. Focus on your music,
            not the mess.
          </p>
        </div>

        <div className="all_cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-lg p-px bg-linear-to-r from-blue-500 to-purple-500"
            >
              <div className="rounded-lg bg-[#0C081F] p-6 h-full flex flex-col gap-4 py-12">
                <div className="p-3 mb-4 text-blue-600 bg-[#51a2ff32] size-13 rounded-full flex items-center justify-center">
                  {card.icon}
                </div>
                <h3 className="text-white text-lg font-semibold mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
