import { offerbannerbg, offerbanneroverlay } from "@/assets";
import Bredcrump from "@/components/DynamicComponents/Bredcrump";
import { StarIcon, StarIcon2 } from "@/components/Icons/HomeIcon";
import Container from "@/pages/Shared/Container";
import { Link } from "react-router";

const OfferDetailsBanner = () => {
  const BredcrumpData = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Destiny 2",
      path: "/destiny-2",
    },
    {
      title: "Trials of Osiris",
      path: "trials-of-osiris",
    },
    {
      title: "Nerubian Conqueror Bundle",
    },
  ];
  return (
    <Container>
      <div className="relative">
        <img src={offerbannerbg} alt="" className="w-full h-full" />
        <img
          src={offerbanneroverlay}
          alt=""
          className="absolute top-0 left-0"
        />
        <div className="absolute top-40 text-white w-[823px] ps-[155px]">
          <Bredcrump data={BredcrumpData} className="text-xl" />
          <div className="py-4 flex flex-col -mt-4">
            <h1 className="text-[52px] uppercase font-bold">
              Nerubian Conqueror Bundle
            </h1>
            <p>
              Buy Nerub-ar Palace Heroic Raid Plus Normal to complete the {"  "}
              <span className="text-primaryColor">Nerub-ar Palace raid</span> on
              Heroic and Normal difficulty and get an{" "}
              <span className="text-primaryColor">
                70-80 leveling for free.
              </span>{" "}
              Defeating all bosses will grant you the chance to equip your
              characters with{" "}
              <span className="text-primaryColor">600-623 ilvl gear </span> for
              you freshly leveled character. You can also split your order into
              several sessions to unlock Great Vault rewards over two weeks.
              Additionally, you can complete two runs on{" "}
              <span className="text-primaryColor">
                {" "}
                two different characters{" "}
              </span>{" "}
              vto gear up your alt as well.
            </p>
            {/* Review section */}
            <div className="text-white right-[230px] mt-10 w-fit">
              <div>
                <div className="flex items-center gap-1">
                  <span className="uppercase textbase font-semibold pe-5">
                    excellent
                  </span>{" "}
                  <StarIcon2 />
                  <StarIcon2 />
                  <StarIcon2 />
                  <StarIcon2 />
                  <StarIcon2 />
                </div>

                <div className="flex items-start justify-between gap-3 mt-[9.63px] z-30">
                  <p className="flex items-center gap-2 pb-1 text-gray-300">
                    240+ reviews on{" "}
                    <span className="flex items-center gap-0">
                      <StarIcon />
                      Trustpilot
                    </span>
                  </p>
                  <Link
                    className="text-[#00B67A] cursor-pointer  underline"
                    to={"/see-all"}
                  >
                    See all
                  </Link>
                </div>
              </div>
            </div>  
            {/* <div className="absoluteright-[230px] mt-10 w-fit text-white">
              <p className="flex items-start gap-1">
                <StarIcon /> Be the first to leave a review!{" "}
                <span className="text-[#00B67A] underline cursor-pointer">
                  Add Review
                </span>
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OfferDetailsBanner;
