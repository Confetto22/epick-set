import Openings from "@/components/career/openings";
import OurValues from "@/components/career/our-values";

const Page = () => {
  return (
    <section className="careers_page bg-[#0C081F]">
      <section className="career_hero flex bg-linear-to-tr from-[#000000] via-[#061c64c1] min-h-[60vh] to-[#000000] justify-center ">
        <div className="content max-w-xl text-center flex flex-col  gap-5 items-center justify-center  px-6 py-12 ">
          <button className="bg-linear-to-b from-[#9715FA] to-[#235CFB] rounded-md px-3 text-white py-1 text-[.9rem]">
            Join Our Team
          </button>
          <h2 className="text-white text-[1.9rem] md:max-w-[400px] md:leading-[2.2rem] md:text-[2.3rem] font-semibold">
            Build the future of music organisation
          </h2>
          <p className="text-gray-300">
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
