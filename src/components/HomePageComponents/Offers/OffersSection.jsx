import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { offersCategories } from "@/lib/StaticData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import OffersCard from "./OffersCard";
import { offerCardPhoto } from "@/assets";
import SelectGame from "@/components/MobileSection/SelectGame";

const OffersSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    offersCategories[0]?.name
  );
  const scrollContainerRef = useRef(null);

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const offersCardData = [
    {
      name: "AWAKENED RAISED BUNDLE",
      status: {
        primary: "EXPIRING",
        secondary: "NEW LAUNCH",
      },
      contents: {
        bundle_type: "Season & Awakened Bundle",
        features: [
          "Season 4 Awakened Bundle",
          "Full runs with all rewards",
          "493-515 ilvl gear",
        ],
      },
      pricing: {
        current_price: 20.99,
        from_text: "FROM",
      },
      image: <img src={offerCardPhoto} alt="image" />,
    },
    {
      name: "AWAKENED RAISED BUNDLE",
      status: {
        primary: "LIMITED",
        secondary: "WEEKLY ROTATION",
      },
      contents: {
        bundle_type: "Season & Awakened Bundle",
        features: ["Full runs with all rewards", "493-515 ilvl gear"],
      },
      pricing: {
        current_price: 20.99,
        original_price: 26.0,
        from_text: "FROM",
      },
      image: <img src={offerCardPhoto} alt="image" />,
    },
    {
      name: "AWAKENED RAISED BUNDLE",
      status: {
        primary: "LIMITED",
        secondary: "WEEKLY ROTATION",
      },
      contents: {
        bundle_type: "Season & Awakened Bundle",
        features: ["Full runs with all rewards", "493-515 ilvl gear"],
      },
      pricing: {
        current_price: 20.99,
        original_price: 26.0,
        from_text: "FROM",
      },
      image: <img src={offerCardPhoto} alt="image" />,
    },
  ];

  return (
    <div>
      <SelectGame />
      <h2 className="text-[32px] lg:text-[40px] font-bold text-white">
        Destiny 2 Offers
      </h2>
      <div className="relative flex items-center mt-6 max-w-[850px]">
        {/* Left Scroll Button */}
        <button
          className="absolute left-0 top-0.5 z-10 p-2 text-white bg-gray-700 shadow-black shadow-lg rounded-full hidden lg:block"
          onClick={handleScrollLeft}
        >
          <ChevronLeft size={20} />
        </button>

        {/* Scrollable Category List */}
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-3 overflow-x-auto scrollbar-none scroll-smooth lg:px-10 pb-4 hide-scrollbar "
        >
          {offersCategories?.map((offer, idx) => (
            <Button
              key={idx}
              className={`font-medium transition-all ${
                selectedCategory === offer.name
                  ? "bg-primaryColor font-bold text-black shadow-primaryColor/20 shadow-lg"
                  : "bg-gray-800 text-white"
              }`}
              onClick={() => setSelectedCategory(offer.name)}
            >
              {offer.name}
            </Button>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          className="absolute right-0 top-0.5 z-10 p-2 text-white bg-gray-700 rounded-full hidden lg:block"
          onClick={handleScrollRight}
        >
          <ChevronRight size={20} />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6 mt-[31px] pb-10">
        {offersCardData?.map((data, idx) => (
          <OffersCard key={`index - ${idx}`} data={data} />
        ))}
        {offersCardData?.map((data, idx) => (
          <OffersCard key={`index - ${idx}`} data={data} />
        ))}
        {offersCardData?.map((data, idx) => (
          <OffersCard key={`index - ${idx}`} data={data} />
        ))}
      </div>
    </div>
  );
};

export default OffersSection;
