import { cn } from "@/lib/utils";
import PropTypes from "prop-types";

const CardTitle = ({ children, className }) => {
  return <div className={cn("uppercase text-xl font-medium tracking-wide", className)}>{children}</div>;
};

export default CardTitle;

CardTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
