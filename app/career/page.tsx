import Openings from "@/components/career/openings";
import OurValues from "@/components/career/our-values";

const Page = () => {
  return (
    <section className="careers_page bg-background">
      <section className="career_hero relative flex flex-col items-center justify-center min-h-[60vh] md:min-h-[80vh] px-6 md:px-[120px] lg:px-[241px] py-12 md:py-16 lg:py-20">
        {/* Background Image Overlay - will be shown in dark mode */}
        <div className="absolute inset-0 pointer-events-none dark:block hidden">
          {/* Background image will be added here when available */}
          {/* <img 
            src="/career-hero-bg.jpg" 
            alt="" 
            className="absolute object-cover object-center w-full h-full opacity-20" 
          /> */}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col gap-6 items-center justify-center">
          {/* Badge Button */}
          <button className="bg-linear-to-b from-primary to-blue rounded-[8px] px-[17px] py-[7px] h-[30px] text-primary-foreground text-xs font-medium leading-4 text-center shrink-0 hover:opacity-90 transition-opacity">
            Join Our Team
          </button>

          {/* Heading */}
          <h1 className="text-card-foreground dark:text-foreground font-semibold text-[2rem] md:text-[3rem] lg:text-[52px] leading-[1.1] text-center max-w-[565px]">
            Build the future of music organisation
          </h1>

          {/* Paragraph */}
          <p className="text-card-foreground dark:text-foreground text-base md:text-lg leading-[1.45] text-center max-w-[629px] font-normal">
            We&apos;re on a mission to empower musicians worldwide with tools
            that make their creative process seamless. Join us in
            revolutionising how artists manage their music.
          </p>
        </div>
      </section>
      <Openings />
      <OurValues />
    </section>
  );
};

export default Page;
