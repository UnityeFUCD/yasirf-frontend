import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion2";
import { ChevronRight } from "lucide-react";
import React from "react";

const Articleaccordion = () => {
  return (
    <Accordion type="single" collapsible className="space-y-4">
      {accordionData.map((item) => (
        <AccordionItem
          key={item.id}
          value={`item-${item.id}`}
          className="border-none"
        >
          <AccordionTrigger className="bg-[linear-gradient(180deg,rgba(22,26,49,0)_0%,#161A31_100%)]
           py-[23px] px-[17px] flex justify-between items-center w-full [&[data-state=open]>svg]:rotate-90">
            <div>
              <p className="text-[#C8FF00] text-[12px] uppercase font-semibold text-start">
                {item.date} <span className="text-[#FBFBFF]">| 9 min read</span>
              </p>
              <h4 className="text-[20px] text-[#FBFBFF] font-bold uppercase leading-6 pt-2">
                {item.title}
              </h4>
            </div>
            <ChevronRight className="text-white transition-transform duration-300 group-data-[state=open]:rotate-90" />
          </AccordionTrigger>
          <AccordionContent className="text-white text-[16px] uppercase px-4 py-4 bg-[linear-gradient(180deg,rgba(22,26,49,0)_0%,#161A31_100%)]">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Articleaccordion;

const accordionData = [
  {
    id: 1,
    date: "Sep 01, 2024",
    title: "Here will be the first blog title",
    content: "This is the content of the first accordion item.",
  },
  {
    id: 2,
    date: "Sep 02, 2024",
    title: "Here will be the second blog title",
    content: "This is the content of the second accordion item.",
  },
  {
    id: 3,
    date: "Sep 03, 2024",
    title: "Here will be the third blog title",
    content: "This is the content of the third accordion item.",
  },
  {
    id: 4,
    date: "Sep 03, 2024",
    title: "Here will be the third blog title",
    content: "This is the content of the third accordion item.",
  },
  {
    id: 5,
    date: "Sep 03, 2024",
    title: "Here will be the third blog title",
    content: "This is the content of the third accordion item.",
  },
  {
    id: 6,
    date: "Sep 03, 2024",
    title: "Here will be the third blog title",
    content: "This is the content of the third accordion item.",
  },
  {
    id: 7,
    date: "Sep 03, 2024",
    title: "Here will be the third blog title",
    content: "This is the content of the third accordion item.",
  },
];
