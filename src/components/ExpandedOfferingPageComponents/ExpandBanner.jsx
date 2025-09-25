import {
  expandbanner,
  expandoverlay,
  leftPirticles,
  rightPirticles, 
  trials_of_osiris,
} from "@/assets";
import Container from "@/pages/Shared/Container";
import Bredcrump from "../DynamicComponents/Bredcrump";

const ExpandBanner = () => {
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
    },
  ];
  return (
    <div>
      <Container>
        <div className="relative">
          <img src={expandbanner} alt="" />
          <img src={leftPirticles} alt="" className="absolute top-0 right-0" />
          <img src={rightPirticles} alt="" className="absolute top-0 left-0" />
          <img
            src={expandoverlay}
            alt=""
            className="absolute bottom-0 left-0"
          />
          <div className="absolute bottom-28 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background p-[10px] rounded-xl">
            <h3 className="text-xl">
              <Bredcrump data={BredcrumpData} />
            </h3>
          </div>
          <img
            src={trials_of_osiris}
            alt=""
            className="absolute -bottom-5 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </Container>
    </div>
  );
};

export default ExpandBanner;
