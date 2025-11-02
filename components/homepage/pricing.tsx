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
      buttonStyle:
        "border border-foreground/20 text-foreground hover:border-foreground/40",
      popular: false,
      borderColor: "#717182",
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
      buttonStyle:
        "bg-gradient-to-b from-primary to-blue text-primary-foreground",
      popular: true,
      borderColor: "#6927da",
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
      buttonStyle:
        "border border-foreground/20 text-foreground hover:border-foreground/40",
      popular: false,
      borderColor: "#717182",
    },
  ];

  return (
    <section className="bg-background-secondary px-6 md:px-10 py-10 lg:py-10 flex justify-center">
      <div className="max-w-6xl mx-auto justify-center flex flex-col gap-16 w-full">
        <div className="flex flex-col gap-5 items-center">
          <h2 className="text-foreground font-bold text-[2rem] leading-[48px] tracking-[0.4063px] text-center">
            Choose your music plan
          </h2>
          <p className="text-foreground text-lg leading-[28px] tracking-[-0.4395px] text-center max-w-[732px]">
            From solo artists to full bands, find the perfect plan to organize
            your music and elevate your performances.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full justify-items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-[10px] border ${
                plan.popular ? "border-purple" : "border-border"
              } flex flex-col max-w-md w-full`}
            >
              {plan.popular && (
                <div className="absolute -top-[11px] left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-linear-to-b from-primary to-blue rounded-[8px] px-[17px] py-[5px] border border-transparent">
                    <span className="text-primary-foreground font-medium text-xs leading-4">
                      Most Popular
                    </span>
                  </div>
                </div>
              )}

              <div className="flex flex-col justify-center h-full gap-8 p-8 flex-1">
                <div className="flex flex-col gap-2">
                  <h3 className="text-card-foreground font-bold text-2xl leading-8 tracking-[0.0703px]">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-card-foreground font-bold text-4xl leading-10 tracking-[0.3691px]">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground font-normal text-base leading-6 tracking-[-0.3125px]">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground font-normal text-base leading-6 tracking-[-0.3125px]">
                    {plan.description}
                  </p>
                </div>

                <ul className="flex flex-col w-full gap-4 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-purple shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-card-foreground font-normal text-base leading-6 tracking-[-0.3125px]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-2 px-4 rounded-lg font-medium text-sm leading-5 tracking-[-0.1504px] transition-colors ${plan.buttonStyle}`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 items-center">
          <p className="text-muted-foreground font-normal text-base leading-6 tracking-[-0.3125px] text-center">
            All plans include cloud sync, regular updates, and access to our
            growing music library
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-purple shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-muted-foreground font-normal text-sm leading-5 tracking-[-0.1504px]">
                30-day free trial
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-purple shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-muted-foreground font-normal text-sm leading-5 tracking-[-0.1504px]">
                Cancel anytime
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-purple shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-muted-foreground font-normal text-sm leading-5 tracking-[-0.1504px]">
                No setup fees
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
