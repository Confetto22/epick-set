import { Briefcase } from "lucide-react";

const Openings = () => {
  return (
    <section className="bg-background-secondary dark:bg-secondary px-6 md:px-[112px] py-12 md:py-16 flex flex-col gap-12 items-center justify-center">
      {/* Header Section */}
      <div className="flex flex-col gap-4 items-center justify-center w-full">
        <h2 className="text-foreground font-bold text-2xl md:text-[32px] leading-normal text-center">
          Current Openings
        </h2>
        <p className="text-muted-foreground text-base md:text-lg leading-[1.45] text-center font-normal">
          Check back soon for new opportunities
        </p>
      </div>

      {/* Card */}
      <div className="bg-card border border-border rounded-[10px] flex flex-col gap-6 items-center justify-center px-6 md:px-12 py-6 md:min-h-[440px] w-full max-w-[768px]">
        {/* Icon Circle */}
        <div className="bg-linear-to-b from-primary to-blue rounded-full size-20 flex items-center justify-center shrink-0">
          <Briefcase className="text-primary-foreground size-10" />
        </div>

        {/* Heading */}
        <h3 className="text-card-foreground font-semibold text-xl md:text-2xl leading-normal text-center">
          No Open Positions Right Now
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-base md:text-lg leading-[1.45] text-center max-w-[641px] font-normal">
          We don&apos;t have any open positions at the moment, but we&apos;re
          always growing! Submit your information below and we&apos;ll reach out
          when a role that matches your skills becomes available.
        </p>

        {/* Input and Button Row */}
        <div className="flex flex-col sm:flex-row gap-4 items-stretch w-full max-w-[448px]">
          <input
            type="text"
            placeholder="Enter your email address"
            className="flex-1 border border-border bg-background text-card-foreground rounded-[10px] h-11 px-6 py-4 text-base placeholder:text-muted-foreground focus:outline-none focus:border-primary"
          />
          <button className="bg-linear-to-r from-[#562296] to-[#732ccb] border border-[#562296] text-primary-foreground px-5 py-2.5 rounded-[8px] h-11 text-base font-medium hover:opacity-90 transition-opacity shrink-0">
            Notify Me
          </button>
        </div>

        {/* Footer Text */}
        <p className="text-muted-foreground text-sm md:text-base leading-5 text-center">
          Or check out our{" "}
          <span className="text-accent font-medium">general newsletter</span>{" "}
          for company updates
        </p>
      </div>
    </section>
  );
};

export default Openings;
