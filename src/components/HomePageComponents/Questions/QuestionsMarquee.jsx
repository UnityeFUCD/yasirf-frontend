import { cn } from "@/lib/utils";
import PropTypes from "prop-types";

const QuestionsMarquee = ({ image, className }) => {
  return (
    <div className={cn("ml-5 w-[183px] ", className)}>
      <img src={image} alt="image" />
    </div>
  );
};

export default QuestionsMarquee;

QuestionsMarquee.propTypes = {
  image: PropTypes.string,
  className: PropTypes.string,
};
