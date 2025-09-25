import { cn } from "@/lib/utils";
import PropTypes from "prop-types";
import { Link } from "react-router";
import { IoIosArrowForward } from "react-icons/io";

const Bredcrump = ({ data, className }) => {
  return (
    <nav className="text-white flex items-center gap-1">
      {data.map((item, index) => {
        return (
          <span key={index} className="text-white flex items-center gap-1">
            {item.path ? (
              <Link to={item.path} className={cn("text-white hover:underline")}>
                {item.title}
              </Link>
            ) : (
              <span
                className={cn(
                  "font-medium",
                  className,
                  data[1]?.title ||
                    data[2]?.title ||
                    data[3]?.title === item.title
                    ? "text-primaryColor"
                    : ""
                )}
              >
                {item.title}
              </span>
            )}
            {index < data?.length - 1 && (
              <span className="mx-0.5">
                {" "}
                <IoIosArrowForward />{" "}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Bredcrump;

Bredcrump.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string,
    })
  ).isRequired,
  className: PropTypes.string,
};
