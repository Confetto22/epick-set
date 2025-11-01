const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "£0",
      period: "/month",
      description: "Perfect for getting started with your first setlists",
      features: [
        "Up to 3 setlists",
        "Basic lyrics & chords",
        "Mobile & web access",
        "Community support",
      ],
      buttonText: "Get Started Free",
      buttonStyle: "border border-gray-600 text-white hover:bg-gray-800",
      popular: false,
    },
    {
      name: "Solo",
      price: "£7",
      period: "/month",
      description: "Ideal for solo musicians and singer-songwriters",
      features: [
        "Unlimited setlists",
        "Advanced lyrics & chords editor",
        "Audio file uploads",
        "AI setlist suggestions",
        "Offline access",
        "Priority support",
      ],
      buttonText: "Start Solo Plan",
      buttonStyle: "bg-linear-to-b from-[#9715FA] to-[#235CFB] text-white",
      popular: true,
    },
    {
      name: "Band",
      price: "£15",
      period: "/month",
      description: "Perfect for bands and collaborative groups",
      features: [
        "Everything in Solo",
        "Up to 8 band members",
        "Real-time collaboration",
        "Shared setlist libraries",
        "Performance analytics",
        "Premium support",
      ],
      buttonText: "Start Band Plan",
      buttonStyle: "border border-gray-600 text-white hover:bg-gray-800",
      popular: false,
    },
  ];

  return (
    <section className="px-6 py-24 flex justify-center bg-[#0C081F]">
      <div className="max-w-6xl mx-auto grid gap-12">
        <div className="text-center mb-16  flex flex-col items-center justify-center">
          <h2 className="text-white font-semibold text-[1.6rem] md:text-[2.2rem] mb-6">
            Choose your music plan
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            From solo artists to full bands, find the perfect plan to organize
            your music and elevate your performances.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 border flex flex-col items-start gap-8 ${
                plan.popular
                  ? "border-[#6927DA] bg-[#201b2a37]"
                  : "border-gray-700 bg-[#201b2a37]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-linear-to-b from-[#9715FA] to-[#235CFB] text-white px-4 py-1 rounded-lg text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8 grid gap-2">
                <h3 className="text-white text-2xl  font-semibold ">
                  {plan.name}
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-white text-5xl font-bold">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 text-lg ml-1">
                    {plan.period}
                  </span>
                </div>
                <p className="text-gray-400">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8 grid gap-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-[#6927DA] flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-1 px-6 rounded-lg font-medium transition-colors  ${plan.buttonStyle}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center flex flex-col gap-3">
          <p className="text-gray-400 text-lg mb-6">
            All plans include cloud sync, regular updates, and access to our
            growing music library
          </p>
          <div className="flex md:flex-row flex-col justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#6927DA]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>30-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#6927DA]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#6927DA]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>No setup fees</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
