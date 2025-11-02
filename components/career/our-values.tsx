import { Music, Users, Heart, Globe, Zap, TrendingUp } from "lucide-react";

const OurValues = () => {
  const values = [
    {
      icon: <Music className="size-6" />,
      title: "Music First",
      description:
        "We're building for musicians. Every decision we make starts with how it serves the music community.",
    },
    {
      icon: <Users className="size-6" />,
      title: "Collaborative Spirit",
      description:
        "Just like a great band, we believe in the power of collaboration and diverse perspectives.",
    },
    {
      icon: <Heart className="size-6" />,
      title: "Work-Life Harmony",
      description:
        "We understand the importance of balance, creativity, and time for your own music.",
    },
    {
      icon: <Globe className="size-6" />,
      title: "Remote-First",
      description:
        "Work from anywhere. We believe great talent exists everywhere, not just in one location.",
    },
    {
      icon: <Zap className="size-6" />,
      title: "Innovation",
      description:
        "We're constantly pushing boundaries to create tools that make musicians' lives easier.",
    },
    {
      icon: <TrendingUp className="size-6" />,
      title: "Growth Mindset",
      description:
        "We invest in our team's learning and development, both professionally and personally.",
    },
  ];

  // Card width mapping from Figma
  // const cardWidths = [288, 284, 263, 286, 288, 272];

  return (
    <section className="bg-background dark:bg-secondary px-6 md:px-[120px] py-12 md:py-16 flex flex-col items-center justify-center gap-12">
      {/* Header Section */}
      <div className="flex flex-col gap-4 items-center justify-center w-full">
        <h2 className="text-foreground font-bold text-4xl md:text-4xl leading-normal text-center">
          Our Values
        </h2>
        <p className="text-muted-foreground text-base md:text-lg leading-[28px] tracking-[-0.4395px] text-center font-normal">
          These principles guide everything we do at EpickSet
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start justify-items-center w-full">
        {values.map((value, index) => (
          <div
            key={index}
            className="bg-background border border-border rounded-[10px] max-w-md h-full flex flex-col items-start p-px"
          >
            <div className="flex flex-col gap-3 items-start p-6">
              {/* Icon Circle */}
              <div className="bg-linear-to-b from-primary to-blue rounded-full size-12 flex items-center justify-center shrink-0">
                <div className="text-primary-foreground size-6">
                  {value.icon}
                </div>
              </div>

              {/* Title - Centered */}
              <h3 className="text-card-foreground text-xl font-semibold leading-normal w-full">
                {value.title}
              </h3>

              {/* Description - with specific width */}
              <p
                className="text-muted-foreground text-base leading-[1.45] font-normal"
                // style={{ width: `${cardWidths[index]}px` }}
              >
                {value.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurValues;
