import { cn } from "@/lib/utils";
import PropTypes from "prop-types";
import { useState } from "react";

const Categories = ({ data }) => {
  const [categoryName, setCategory] = useState("All Categories");

  return (
    <div className="p-[20px] bg-gradient-to-b from-gray-700/30 via-black-20 to-black-80 rounded-md h-[1133px]">
      <h3 className="  uppercase font-bold text-gray-400 tracking-widest">
        Select categories
      </h3>
      <div className="flex flex-col items-start w-full gap-0 mt-2">
        {data?.map((category, idx) => {
          return (
            <button
              key={`index - ${idx}`}
              onClick={() => setCategory(category)}
              className={cn(
                "bg-transparent text-white hover:bg-primaryColor hover:rounded-sm hover:text-black text-left w-full text-nowrap uppercase py-[10px] text-sm px-4   hover:border-none border-b border-gray-700 hover:shadow-primaryColor hover:shadow-[0px_3px_20px_0px_rgba(200,255,0,0.60)] ",
                categoryName == category &&
                  "bg-primaryColor text-black rounded-sm font-semibold border-none shadow-primaryColor shadow-[0px_3px_20px_0px_rgba(200,255,0,0.60)]"
              )}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;

Categories.propTypes = {
  data: PropTypes.object,
};
