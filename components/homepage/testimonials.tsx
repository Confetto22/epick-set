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
    },
    {
      quote:
        "Updating setlists on the fly is a breeze. Everything I need is right at my fingertips, on stage or off.",
      name: "Michael Andrews",
      role: "Music Coordinator",
      image:
        "https://images.unsplash.com/photo-1522158637959-30385a09e0da?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    },
    {
      quote:
        "EpickSet lets me focus on the music, not the admin. The AI setlist ideas spark new inspiration every time.",
      name: "Alex Duignan",
      role: "Singer-Songwriter",
      image:
        "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    },
  ];

  return (
    <section className="px-6 pb-24 pt-10 flex justify-center bg-[#0C081F]">
      <div className="max-w-6xl mx-auto grid gap-6">
        <div className="mb-16 ">
          <h2 className="text-white f text-[1.8rem] md:text-[2.2rem] font-semibold mb-6">
            Real stories from real musicians
          </h2>
          <p className="text-gray-400 text-lg">
            Discover how artists stay focused, creative, and ready for every
            performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-linear-to-br from-[#2d1b6949] to-[#1a0b3d61] rounded-xl grid gap-5 p-8 border-2 border-purple-800/30"
            >
              <blockquote className="text-white text-lg italic mb-8 leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </blockquote>

              <div className="flex flex-col items-start bg-[#1c2232b0] min-h-34 p-4 gap-6">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover size-[60px]"
                />
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400">{testimonial.role}</p>
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
