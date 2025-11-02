import ComingSoon from "@/components/homepage/comingSoon";
import Contact from "@/components/homepage/contact";
import HeroCard from "@/components/homepage/herocard";
import Pricing from "@/components/homepage/pricing";
import Questions from "@/components/homepage/questions";
import Testimonials from "@/components/homepage/testimonials";
import Tools from "@/components/homepage/tools";
import { Mail } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const cards = [
    {
      title: "Effortless setlist creation",
      description:
        "Build and rearrange setlists in seconds. Stay flexible for every rehearsal, show, or spontaneous jam session.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Lyrics and chords at hand",
      description:
        "Access all your lyrics and chords instantly, no more flipping through papers or searching old files.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Resources always ready",
      description:
        "Keep your reference tracks and recordings organized, so you can focus on perfecting your sound.",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <main className="">
      <section className="hero min-h-[80vh]">
        <div className="container min-w-full min-h-[90vh] px-6 py-8 flex items-center justify-center">
          <HeroCard />
        </div>
      </section>
      <section className="bg-background-secondary px-6 py-16 md:py-16 flex items-center justify-center">
        <div className="content max-w-6xl mx-auto w-full">
          <div className="flex flex-col gap-16 items-start w-full">
            <div className="flex flex-col lg:flex-row lg:items-end lg:gap-20 gap-10 justify-center w-full">
              <h2 className="text-foreground font-bold text-[2rem] leading-normal">
                Organise your music, your way
              </h2>
              <p className="flex-1 text-foreground text-lg leading-[1.45]">
                Bring every setlist, lyric, and chord together in one place.
                Plan your next show with ease and keep your creative flow
                uninterrupted.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 w-full mx-auto justify-items-center">
              {cards.map((card) => (
                <div
                  key={card.title}
                  className="border border-primary rounded-[16px] max-w-md w-full flex flex-col overflow-hidden"
                >
                  <div className="h-72 relative">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={400}
                      height={190}
                      className="w-full h-full object-cover rounded-t-[16px]"
                    />
                  </div>
                  <div className="backdrop-blur-md bg-card flex-1 flex flex-col gap-2 p-6 rounded-b-[16px] text-card-foreground">
                    <h3 className="font-semibold text-xl leading-normal">
                      {card.title}
                    </h3>
                    <p className="text-lg font-normal leading-[1.45] tracking-[0.09px]">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Tools />

      <section className="relative px-6 md:px-10 lg:px-[120px] py-16 flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1761954929/epick-set/section-bg_conpjl.jpg')",
            }}
          />
          <div className="absolute inset-0 dark:bg-[rgba(151,21,250,0.1)] bg-white/60" />
        </div>

        {/* Content */}
        <div className="relative bg-card flex flex-col md:flex-row items-center gap-10 md:gap-[40px] lg:gap-[80px] p-10 rounded-[8px] w-full max-w-6xl">
          {/* Image */}
          <div className="w-full md:w-[320px] h-[219px] md:h-auto shrink-0 relative">
            <Image
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbmNlcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
              alt="gig"
              width={320}
              height={400}
              className="w-full h-full md:rounded-[10px] rounded-[10px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col gap-6 md:gap-6 w-full">
            <div className="flex flex-col gap-6 md:gap-5">
              <h3 className="text-card-foreground font-bold text-[2rem] leading-[1.2]">
                Streamline your next gig today
              </h3>
              <p className="text-card-foreground text-lg md:text-sm leading-[1.45] md:leading-normal">
                Create setlists, find lyrics, and organize your music—all in one
                seamless flow.
              </p>
              <div className="h-px bg-purple w-full" />
              <p className="text-card-foreground text-lg md:text-sm leading-[1.45] md:leading-normal">
                Stay in the zone with tools that keep you focused and inspired.
              </p>
              <div className="h-px bg-purple w-full" />
              <p className="text-card-foreground text-lg md:text-sm leading-[1.45] md:leading-normal">
                Plan, collaborate, and get ready for every performance with
                ease.
              </p>
            </div>
            <div className="pt-4">
              <button className="bg-purple px-12 md:px-16 lg:px-20 py-3 rounded-[10px] text-primary-foreground font-medium text-base hover:opacity-90 transition-opacity">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </section>
      <Questions />
      <Testimonials />
      <Pricing />

      <Contact />
      <section className="newsletter px-6  justify-center py-24 hidden lg:flex bg-background-secondary">
        <div className="content  flex flex-col items-center justify-center gap-5 w-full max-w-6xl mx-auto text-center">
          <span className="text-primary-foreground bg-linear-to-b from-primary to-blue p-4 rounded-full">
            <Mail />
          </span>
          <h3 className="text-[1.8rem] md:text-[2.1rem] font-semibold text-foreground">
            Stay in the loop
          </h3>
          <p className="text-foreground/80 text-[.9rem] max-w-lg text-pretty">
            Be the first to know when our mobile apps launch, get exclusive
            updates, and receive tips on maximizing your setlist workflow.
          </p>
          <div className="input_submit grid grid-cols-5 gap-5 w-full max-w-md items-center justify-center ">
            <input
              type="text"
              placeholder="Enter your email address"
              className="border bg-card text-card-foreground border-border w-full col-span-3 py-2 rounded-md placeholder:text-muted-foreground px-4 text-sm"
            />
            <button className="bg-primary w-full rounded-md text-sm py-2 text-primary-foreground col-span-2 hover:opacity-90 transition-opacity">
              Notify me
            </button>
          </div>
          <p className="text-foreground/80 text-[.9rem]">
            Join 5,000+ musicians already on the waitlist
          </p>
        </div>
      </section>
      <ComingSoon />
    </main>
  );
}
