import { Globe, Monitor, Phone, Smartphone } from "lucide-react";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const comingSoon = [
  {
    icon: <FaApple size={30} />,
    platform: "App Store",
  },
  {
    icon: <IoLogoGooglePlaystore size={30} />,
    platform: "Google Play",
  },
];

const benefits = [
  {
    icon: <Smartphone size={18} />,
    title: "iOS & Android Apps",
  },
  {
    icon: <Monitor size={18} />,
    title: "Web Platform",
  },
  {
    icon: <Globe size={18} />,
    title: "Sync Across Devices",
  },
];
const ComingSoon = () => {
  return (
    <section className="px-6 dark:bg-secondary justify-center hidden lg:flex py-24 bg-background">
      <div className="content flex flex-col items-center gap-5 justify-center max-w-6xl mx-auto w-full text-center">
        <div className=" bg-purple w-full text-primary-foreground px-8 max-w-sm  font-medium mb-12">
          Coming Soon
        </div>

        <h2 className="text-foreground font-semibold text-[1.8rem] md:text-[2.1rem]">
          Take EpickSet anywhere you go
        </h2>

        <p className="text-foreground/80  max-w-xl mx-auto mb-16 leading-relaxed">
          Our mobile apps for iOS and Android are launching soon! Sign up for
          our newsletter below to be notified when they&apos;re available. In
          the meantime, use our web platform on any desktop browser.
        </p>

        <div className=" justify-center gap-6  w-full  max-w-lg grid grid-cols-2">
          {comingSoon.map((coming) => (
            <div
              className="bg-card border border-border rounded-lg px-5 py-2 flex items-center gap-5 "
              key={coming.platform}
            >
              <span className="text-foreground">{coming.icon}</span>
              <div className="text-left">
                <div className="text-muted-foreground text-xs">Coming Soon</div>
                <div className="text-card-foreground font-semibold ">
                  {coming.platform}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-8 text-muted-foreground">
          {benefits.map((benefit) => (
            <div className="flex items-center gap-1" key={benefit.title}>
              <span className="text-purple">{benefit.icon}</span>
              <span className="text-foreground text-[.9rem]">
                {benefit.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
