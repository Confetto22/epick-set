"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const Questions = () => {
  const faqs = [
    {
      question: "How do I build my first setlist?",
      answer:
        "Simply click 'Create Setlist' and start adding your songs. You can drag and drop to reorder them anytime.",
    },
    {
      question: "Can I bring in songs I already have?",
      answer:
        "Yes! You can import existing songs from various formats or add them manually to your setlists.",
    },
    {
      question: "Can I work with my band online?",
      answer:
        "Absolutely. Share setlists via link or invite band members to collaborate in real-time.",
    },
    {
      question: "How do I use set-lists on stage?",
      answer:
        "Access your setlists on any device during performances. The interface is optimized for stage use.",
    },
  ];

  return (
    <section className="bg-background dark:bg-secondary px-6 md:px-10 lg:px-[120px] py-16 flex justify-center">
      <div className="max-w-6xl mx-auto flex flex-col gap-10 w-full">
        <div className="flex flex-col gap-5">
          <h2 className="text-foreground font-bold text-[2rem] leading-[48px] tracking-[0.4063px]">
            <span className="hidden md:inline">
              Your setlist questions answered
            </span>
            <span className="md:hidden">Your setlist questions, answered</span>
          </h2>
          <p className="text-foreground text-lg leading-[1.45]">
            Explore helpful tips for organizing setlists, managing lyrics, and
            making your music flow smoother, right at your fingertips.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                value={index.toString()}
                key={index}
                className="border-b border-foreground/20 border-t-0 border-l-0 border-r-0 min-h-[57px]"
              >
                <AccordionTrigger className="text-foreground font-medium text-base leading-[1.45] tracking-[-0.2px] py-6 pr-6 items-center hover:text-purple hover:no-underline [&>svg]:text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground text-base leading-[1.45] pr-6 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Questions;
