import { cn } from "@/lib/utils";
import PropTypes from "prop-types";

const Container = ({ children, className }) => {
  return (
    <div className={cn("max-w-[1440px]  mx-auto", className)}>
      {children}
    </div>
  );
};

export default Container;

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.node,
};
