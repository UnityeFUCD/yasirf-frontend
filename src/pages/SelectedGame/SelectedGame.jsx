import { gameBg, gameBgOverlay } from "@/assets";
import Bredcrump from "@/components/DynamicComponents/Bredcrump";
import Container from "../Shared/Container";
import Games from "@/components/SelectedGameComponent/Games";

const SelectedGame = () => {
  const BredcrumpData = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Destiny 2",
    },
  ];
  return (
    <>
      {" "}
      <div className="relative bg-background">
        <figure className="absolute top-0 left-0 w-full h-full">
          <img src={gameBg} alt="game bg" className="w-full h-full object-cover object-center" />
        </figure>
        <img
          src={gameBgOverlay}
          alt="overlay"
          className="absolute top-0 left-0 w-full h-full"
        />
        <Container className="relative z-10 pt-[100px] lg:pt-[165px] pb-[32px] lg:pb-[95px] px-4 md:px-8">
          <div className="">
            <Bredcrump data={BredcrumpData} />
            <div className=" mt-3">
              <h2 className="text-[34px] xs:text-[40px] lg:text-[56px] uppercase text-white leading-[90%]">
                <span className="font-bold">destiny 2</span> boosting services
              </h2>
              <p className="text-white mt-3 lg:mt-4 font-Manpore">
                Get the best Destiny 2 services, weapons, latest raids,
                difficult challenges and much more.
              </p>
            </div>
          </div>
        </Container>
      </div>
      <div className="lg:py-20">
        <Games />
      </div>
    </>
  );
};

export default SelectedGame;
