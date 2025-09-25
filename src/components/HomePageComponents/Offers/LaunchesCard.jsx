import PropTypes from "prop-types";

const LaunchesCard = ({
  image,
  title,
  description,
  customWidth = "w-[225px]",
}) => {
  return (
    <div className="">
      <div className={`relative ${customWidth}`}>
        <div className="relative">
          <img
            src={image}
            alt="card image"
            className="w-full aspect-[225/181] rounded-md"
          />
          <h3 className="uppercase text-primaryColor font-bold absolute left-0 bottom-0">
            {title ? title : ""}
          </h3>
        </div>
        <div className=" ">
          <h3 className=" uppercase font-bold text-white">
            {description ? description : ""}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default LaunchesCard;

LaunchesCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
};
