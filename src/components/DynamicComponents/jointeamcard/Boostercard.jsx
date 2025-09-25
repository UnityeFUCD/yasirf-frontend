import PropTypes from "prop-types";

const Boostercard = ({ title, imgSrc, commingSoonProps }) => {
  return (
    <div className="w-[267px] h-[134px] relative group cursor-pointer">
      <img
        src={imgSrc}
        alt={title}
        className="h-full w-full object-contain rounded-md transition-all duration-300"
      />
      <div className="absolute top-0 left-0 bg-black/30 text-white h-full w-full" />
      <h4 className="text-[24px] font-semibold text-[#FBFBFF] uppercase absolute bottom-2 left-[10%] transform -translate-x-[10%]">
        {title ? title : ""}
      </h4>
      <div className="absolute inset-0 border  group-hover:border-primaryColor opacity-20 group-hover:opacity-50 transition-all duration-300 ease-in-out"></div>
      {commingSoonProps && (
        <div className="absolute top-0 bg-black/70 w-full h-full">
          <p className="flex items-center justify-center min-h-full uppercase text-sm font-medium ">
            <span className="bg-gray-500 rounded-2xl border border-gray-400/60 px-2 h-6 flex items-center justify-center">
              Coming Soon
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Boostercard;

Boostercard.propTypes = {
  title: PropTypes.string,
  imgSrc: PropTypes.string,
  commingSoonProps: PropTypes.string,
};
