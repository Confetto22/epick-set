import { Music, Users, Heart, Globe, Zap, TrendingUp } from "lucide-react";

const OurValues = () => {
  const values = [
    {
      icon: <Music className="w-6 h-6" />,
      title: "Music First",
      description:
        "We're building for musicians. Every decision we make starts with how it serves the music community.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative Spirit",
      description:
        "Just like a great band, we believe in the power of collaboration and diverse perspectives.",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Work-Life Harmony",
      description:
        "We understand the importance of balance, creativity, and time for your own music.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Remote-First",
      description:
        "Work from anywhere. We believe great talent exists everywhere, not just in one location.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovation",
      description:
        "We're constantly pushing boundaries to create tools that make musicians' lives easier.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Growth Mindset",
      description:
        "We invest in our team's learning and development, both professionally and personally.",
    },
  ];

  return (
    <section className="py-16 px-6 justify-center flex bg-[#131026]">
      <div className="max-w-6xl grid gap-7 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Our Values
          </h2>
          <p className="text-gray-300 text-lg">
            These principles guide everything we do at EpickSet
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-[#0c081f] border flex flex-col items-start gap-4 border-gray-700 rounded-lg p-6 hover:border-purple-500 transition-colors"
            >
              <div className="bg-linear-to-b from-[#9715FA] to-[#235CFB] w-12 h-12 rounded-full flex items-center justify-center mb-4 text-white">
                {value.icon}
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">
                {value.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
