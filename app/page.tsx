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
    <main className="bg-[#0C081F] ">
      <section className="hero-section min-h-[90vh] bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1762007655/epick-set/herobg_mmealm.jpg')] bg-cover bg-center">
        <div className="container min-w-full   min-h-[90vh] bg-[#00000068] px-6  py-8 flex items-center justify-center">
          <HeroCard />
        </div>
      </section>
      <section className="px-11 flex items-center justify-center pb-24 pt-8">
        <div className="content max-w-6xl mx-auto">
          <div className="flex  flex-col md:flex-row md:items-center py-12">
            <h2 className="text-white font-semibold md:w-[50%] text-[1.6rem] md:text-[2rem]">
              Organise your music, your way
            </h2>
            <p className="text-gray-400 md:w-[50%]">
              Bring every setlist, lyric, and chord together in one place. Plan
              your next show with ease and keep your creative flow
              uninterrupted.
            </p>
          </div>
          <div className="cards grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card) => (
              <div
                key={card.title}
                className=" rounded-lg border-2 border-gray-700"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={400}
                  height={200}
                  className="w-full max-h-56 object-cover rounded-t-lg"
                />
                <div className="px-4 bg-[#5d548b2f] min-h-36 justify-start py-5 flex flex-col items-start gap-3">
                  <h3 className="text-white text-xl font-semibold mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Tools />

      <section className="bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1761954929/epick-set/section-bg_conpjl.jpg')] bg-cover bg-center">
        <div className="cover bg-[#23011d35] w-full flex items-center justify-center h-full min-h-[50vh] px-6 py-15">
          <div className="box bg-[#0C081F] max-w-6xl w-full mx-auto grid gap-5 p-7 md:grid-cols-3">
            <Image
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbmNlcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
              alt="gig"
              width={300}
              height={400}
              className="h-full w-full object-cover object-center"
            />
            <div className="box_content md:col-span-2 flex  flex-col gap-4">
              <h3 className="text-white font-semibold text-[1.6rem]">
                Streamline your next gig today
              </h3>
              <menu className="text-gray-300 divide-y-2 divide-[#6927DA] flex flex-col gap-4">
                <p className="pb-4">
                  Create setlists, find lyrics, and organize your music-all in
                  one seamless flow.
                </p>
                <p className="pb-4">
                  Stay in the zone with tools that keep you focused and
                  inspired.
                </p>
                <p>
                  Plan, collaborate, and get ready for every performance with
                  ease.
                </p>
              </menu>
              <button className="rounded-md bg-[#6927DA] max-w-[250px] text-white py-2 px-4">
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
      <section className="newsletter px-6  justify-center py-24 hidden lg:flex bg-[#0C081F]">
        <div className="content  flex flex-col items-center justify-center gap-5 w-full max-w-6xl mx-auto text-center">
          <span className="text-white bg-linear-to-b from-[#9715FA] to-[#235CFB] p-4 rounded-full">
            <Mail />
          </span>
          <h3 className="text-[1.8rem] md:text-[2.1rem] font-semibold text-white">
            Stay in the loop
          </h3>
          <p className="text-gray-300 text-[.9rem] max-w-lg text-pretty">
            Be the first to know when our mobile apps launch, get exclusive
            updates, and receive tips on maximizing your setlist workflow.
          </p>
          <div className="input_submit grid grid-cols-5 gap-5 w-full max-w-md items-center justify-center ">
            <input
              type="text"
              placeholder="Enter your email address"
              className="border bg-[#131026cf] text-white border-gray-700 w-full col-span-3 py-2 rounded-md placeholder:text-gray-400 px-4 text-sm"
            />
            <button className="bg-[#9715FA] w-full rounded-md text-sm py-2 text-white col-span-2">
              Notify me
            </button>
          </div>
          <p className="text-gray-300 text-[.9rem]">
            Join 5,000+ musicians already on the waitlist
          </p>
        </div>
      </section>
      <ComingSoon />
    </main>
  );
}
