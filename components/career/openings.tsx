import { Briefcase } from "lucide-react";

const Openings = () => {
  return (
    <section className="px-6 py-12 flex flex-col gap-5 items-center justify-center">
      <h3 className="text-white font-semibold text-[1.6rem] md:text-[1.8rem]">
        Current Openings
      </h3>
      <p className="text-gray-300">Check back soon for new opportunities</p>
      <div className="box bg-[#131026] border border-gray-800 rounded-md flex flex-col gap-4 items-center justify-center  px-7 py-12 min-h-[40vh] max-w-xl w-full">
        <div className="text-white  max-w-[70px] p-3 bg-linear-to-b from-[#9715FA] rounded-full text-center to-[#235CFB]">
          <Briefcase />
        </div>
        <h3 className="capitalize text-white font-semibold text-[1.5rem] md:text-[1.6rem]">
          No open positions right now
        </h3>
        <p className="text-gray-300 text-center">
          We don&apos;t have any open positions at the moment, but we&apos;re
          always growing! Submit your information below and we&apos;ll reach out
          when a role that matches your skills becomes available.
        </p>
        <div className="grid grid-cols-3 gap-3  w-full max-w-[80%]">
          <input
            type="text"
            placeholder="Enter your email address"
            className="border border-gray-600 col-span-2 px-3 text-white rounded-md placeholder:text-gray-500 bg-[#1f063f3e]"
          />
          <button className="bg-[#9715FA] px-4 py-2 text-[.9rem] col-span-1 text-white rounded-md">
            Notify Me
          </button>
        </div>
        <p className="text-gray-300">
          Or check out our{" "}
          <span className="text-[#cb30e0]">general newsletter</span> for company
          updates
        </p>
      </div>
    </section>
  );
};

export default Openings;
