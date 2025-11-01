"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const Questions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
    <section className="px-6 py-24 flex justify-center bg-[#0C081F]">
      <div className="max-w-6xl mx-auto grid gap-6 w-full">
        <div className="">
          <h2 className="text-white font-normal text-[3rem] mb-6">
            Your setlist questions answered
          </h2>
          <p className="text-gray-400 text-lg max-w-4xl">
            Explore helpful tips for organizing setlists, managing lyrics, and
            making your music flow smoother, right at your fingertips.
          </p>
        </div>

        <div className="space-y-0">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                value={index.toString()}
                key={index}
                className="border-b-gray-500 "
              >
                <AccordionTrigger className="duration-300 ease-in cursor-pointer hover:text-[#6927DA] capitalize text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 duration-300 ease-in">
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
