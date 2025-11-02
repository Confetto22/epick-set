import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "EpickSet brings all my music essentials together, no more frantic searching before a show.",
      name: "Louise Essuman",
      role: "Session Musician",
      image:
        "https://images.unsplash.com/photo-1563841930606-67e2bce48b78?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      quoteStyle: "medium-italic", // First two are medium italic
    },
    {
      quote:
        "Updating setlists on the fly is a breeze. Everything I need is right at my fingertips, on stage or off.",
      name: "Michael Andrews",
      role: "Music Coordinator",
      image:
        "https://images.unsplash.com/photo-1522158637959-30385a09e0da?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      quoteStyle: "medium-italic", // First two are medium italic
    },
    {
      quote:
        "EpickSet lets me focus on the music, not the admin. The AI setlist ideas spark new inspiration every time.",
      name: "Alex Duignan",
      role: "Singer-Songwriter",
      image:
        "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      quoteStyle: "italic", // Third one is regular italic
    },
  ];

  return (
    <section className="bg-background-secondary dark:bg-secondary px-6 md:px-10 lg:px-[120px] py-16 flex justify-center">
      <div className="max-w-6xl mx-auto flex flex-col gap-10 w-full">
        <div className="flex flex-col gap-6">
          <h2 className="text-foreground font-bold text-[2rem] leading-[1.2]">
            Real stories from real musicians
          </h2>
          <p className="text-foreground text-lg leading-normal">
            Discover how artists stay focused, creative, and ready for every
            performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="testimonial-card max-w-md min-h-72 relative"
            >
              {/* Content */}
              <div className="relative p-6 flex flex-col justify-center h-full gap-6 rounded-[16px] z-10">
                <p
                  className={`text-foreground text-lg md:text-base lg:text-base leading-normal italic ${
                    testimonial.quoteStyle === "medium-italic"
                      ? "font-medium"
                      : "font-normal"
                  }`}
                >
                  &quot;{testimonial.quote}&quot;
                </p>

                <div className="bg-card px-4 py-6 rounded-[16px]">
                  <div className="flex flex-row md:flex-col gap-5 md:gap-5 items-center md:items-start">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover size-[60px] shrink-0"
                    />
                    <div className="flex flex-col gap-1 flex-1 md:flex-none">
                      <h4 className="text-card-foreground font-bold text-lg leading-normal">
                        {testimonial.name}
                      </h4>
                      <p className="text-card-foreground font-normal text-base leading-normal">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
