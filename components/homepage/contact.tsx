import { CloudDownload, Mail, Phone } from "lucide-react";

const Contact = () => {
  const contactCards = [
    {
      icon: <Mail />,
      title: "Email Us",
      availability: "Weekdays 10am - 4pm",
      address: "support@musyc.ai",
    },
    {
      icon: <Phone />,
      title: "Call Us",
      availability: "Weekdays 10am - 4pm",
      address: "+44 (0) 70000 000",
    },
    {
      icon: <CloudDownload />,
      title: "Follow Us",
      availability: "Weekdays 10am - 4pm",
      address: "@setlist",
    },
  ];

  return (
    <section className="w-full mx-auto flex flex-col px-6 items-center py-24 bg-[#131026]">
      <div className="flex flex-col justify-center max-w-6xl  items-center gap-8 w-full mx-auto">
        <div className="heading text-center w-full">
          <div className="w-full">
            <h2 className="text-[1.8rem] md:text-[2.1rem] text-white font-semibold">
              Let&apos;s connect and collaborate
            </h2>
            <p className="text-gray-300   ">
              We&apos;re here to support your music journey and let you
              concentrate in what matters
            </p>
          </div>
        </div>
        <div className="contact_cards w-full grid md:grid-cols-3 lg:grid-cols-3 gap-7 justify-items-center">
          {contactCards.map((card) => (
            <div
              key={card.address}
              className="border border-[#1447E6] rounded-md px-4 w-full max-w-md py-9 flex flex-col items-center justify-center gap-3"
            >
              <span className="text-[#1447E6] bg-[#1449e635] p-4 rounded-full">
                {card.icon}
              </span>
              <h3 className="text-white font-semibold">{card.title}</h3>
              <p className="text-sm text-gray-300">{card.availability}</p>
              <p className="text-sm text-gray-300">{card.address}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
