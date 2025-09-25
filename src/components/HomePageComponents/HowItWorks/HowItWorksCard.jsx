import { cn } from "@/lib/utils";
import PropTypes from "prop-types";

const HowItWorksCard = ({ icon, title, semiTitle, firstProps }) => {
  return (
    <div className="flex items-center gap-[18px]">
      <div className="flex-shrink-0 size-[140px] md:size-[160px] lg:size-[200px] rounded-full border border-primaryColor/50 bg-primaryColor/10 backdrop-blur-xl flex items-center justify-center px-6 ">
        <div className="flex flex-col gap-[12px] items-center">
          <p>{icon}</p>
          <h3 className="text-xl md:text-2xl lg:text-[32px] text-white uppercase text-center leading-none">
            {title}
          </h3>
        </div>
      </div>
      <p
        className={cn(
          "text-xl uppercase text-white/70 font-medium max-w-[170px] md:max-w-[236px]"
        )}
      >
        {semiTitle}
      </p>
    </div>
  );
};

export default HowItWorksCard;

HowItWorksCard.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  semiTitle: PropTypes.string,
  firstProps: PropTypes.string,
};
