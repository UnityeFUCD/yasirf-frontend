import { freeQuestionLine, Line2black, marquePhoto } from "@/assets";
import { GoPlus } from "react-icons/go";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import QuestionsMarquee from "./QuestionsMarquee";
import { AiOutlineMinus } from "react-icons/ai";

const Questions = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openItem, setOpenItem] = useState(1);

  const faqData = {
    categories: [
      { id: "general", title: "GENERAL" },
      { id: "payment", title: "PAYMENT" },
      { id: "boosting", title: "BOOSTING" },
      { id: "account", title: "ACCOUNT" },
      { id: "legal", title: "LEGAL" },
    ],
    faqItems: [
      {
        id: 1,
        question: "WHAT IS BAME?",
        answer:
          "Lorem ipsum dolor sit amet consectetur. Lacus eget vel elementum elementum laoreet nisi. Sit quis non vivamus etiam enim quis sed. Non posuere ultricies id interdum. Dui pulvinar platea sem at eget elementum",
      },
      {
        id: 2,
        question: "IS THERE ANY SUBSCRIPTION PLAN?",
        answer: "Lorem ipsum dolor sit amet consectetur...",
      },
      {
        id: 3,
        question: "IS THE CANCEL OF PAYMENT POSSIBLE?",
        answer: "Lorem ipsum dolor sit amet consectetur...",
      },
      {
        id: 4,
        question: "HOW WOULD I GET UPDATE FOR NEW GAMES ENTRIES?",
        answer: "Lorem ipsum dolor sit amet consectetur...",
      },
    ],
  };

  return (
    <div className="bg-white mx-auto relative overflow-hidden">
      <div className="border-b border-borderPrimary">
        <div className="border-r border-borderPrimary w-fit flex text-sm">
          <p className="py-7 ml-4 md:ml-8 uppercase tracking-[2.38px]">[04]</p>
          <p className="py-7 mx-[18px] uppercase tracking-[2.38px]">
            frequently asked questions
          </p>
        </div>
      </div>
      <div className="py-12 px-4 md:px-8 lg:px-[150px]">
        <div className="flex flex-col lg:flex-row items-start gap-[30px]">
          <div className="flex flex-row lg:flex-col flex-wrap justify-center gap-4 mx-auto w-[80%] lg:w-fit">
            {faqData.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`text-left tracking-widest text-sm  transition-colors duration-300
                ${
                  activeCategory === category.id
                    ? "text-black font-extrabold"
                    : "text-gray-500 font-medium hover:text-black hover:font-semibold"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
          <div className="absolute bottom-20 left-[30%] size-[200px] bg-primaryColor blur-[200px] z-10" />
          <div>
            <p className="text-sm font-normal uppercase hidden lg:block absolute top-[60%] tracking-widest -right-10 text-gray-500 rotate-90">
              blockchain gaming
            </p>
          </div>
          <div className="text-sm font-normal uppercase hidden lg:block absolute top-[75%] tracking-widest right-0 text-gray-500 ">
            <img src={Line2black} alt="" className="r" />
          </div>
          <div className="text-sm font-normal uppercase hidden lg:block absolute top-[83%] tracking-widest -right-3 text-gray-500 rotate-180">
            <p className="rotate-90">AI gaming</p>
          </div>
          {/* Accordion Section */}
          <div className="flex-1 space-y-4 z-20">
            {faqData.faqItems.map((item) => (
              <div key={item.id} className="border-b-2 border-gray-500">
                <button
                  onClick={() =>
                    setOpenItem(openItem === item.id ? null : item.id)
                  }
                  className="w-full flex items-start justify-between py-2 bg-transparent"
                >
                  <h3 className="text-2xl lg:text-[40px] font-bold text-left">
                    {item.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 size-10 md:size-14 lg:size-[80px] text-xl md:text-2xl lg:text-4xl  rounded-full bg-[#CCFF00] flex items-center justify-center transition-transform duration-300
                    ${openItem === item.id ? "rotate-180" : "rotate-0"}`}
                  >
                    {openItem === item.id ? <AiOutlineMinus /> : <GoPlus />}
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out
                  ${
                    openItem === item.id
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-4 text-gray-600 pe-16 text-xl">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Get Started Button */}
            <div className="pt-[45px]">
              <div className=" flex flex-col md:flex-row items-center gap-4 bg-backgroundLight p-6 md:w-fit  text-white">
                <span className="font-semibold text-2xl">
                  STILL HAVE QUESTIONS?
                </span>
                <button className="px-6 py-[18px] bg-[#CCFF00] text-black font-bold  transition-all duration-300 uppercase">
                  contact us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:pt-[98px]">
        <div className="bg-primaryColor py-[29.5px]">
          <Marquee pauseOnHover>
            <QuestionsMarquee image={marquePhoto} />
            <QuestionsMarquee image={marquePhoto} />
            <QuestionsMarquee image={marquePhoto} />
            <QuestionsMarquee image={marquePhoto} />
            <QuestionsMarquee image={marquePhoto} />
            <QuestionsMarquee image={marquePhoto} />
            <QuestionsMarquee image={marquePhoto} />
            <QuestionsMarquee image={marquePhoto} />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Questions;
