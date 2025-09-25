import { gameIntroBg, gun, gunpirticles } from "@/assets";
import Container from "@/pages/Shared/Container";
import { Button } from "../ui/button";

const WeaponsFarm = () => {
  return (
    <Container>
      <div className="mt-20 px-[111px] bg-background  ">
        <h2 className="uppercase text-4xl text-white font-medium ">
          latest weapons to farm
        </h2>
        <div className="py-5 flex items-center gap-6">
          <div className="relative overflow-hidden w-[403px] text-white">
            <img src={gameIntroBg} alt="" />
            <img
              src={gun}
              alt=""
              className="absolute top-0 left-0 w-[400px] h-[160px]"
            />
            <img
              src={gunpirticles}
              alt=""
              className="absolute top-0 left-0 opacity-40  w-[403px]"
            />
            <div className="absolute top-2 right-3">
              <div className="flex items-end gap-1">
                <h3 className="text-xl font-bold text-primaryColor">$20.99</h3>
                <del className="text-gray-400">$25.00</del>
              </div>
            </div>
            <div className="absolute -bottom-6">
              <div className="flex items-center justify-between -mt-20 ">
                <h2 className="uppercase font-semibold text-2xl ml-4 text-nowrap">
                  shayura&apos;s weapon
                </h2>
                <Button className=" rounded-none border border-primaryColor bg-transparent text-primaryColor ml-5 hover:bg-primaryColor hover:text-black transition-all duration-300 hover:font-semibold">
                  get started
                </Button>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden w-[403px] text-white">
            <img src={gameIntroBg} alt="" />
            <img
              src={gun}
              alt=""
              className="absolute top-0 left-0 w-[400px] h-[160px]"
            />
            <img
              src={gunpirticles}
              alt=""
              className="absolute top-0 left-0 opacity-40  w-[403px]"
            />
            <div className="absolute top-2 right-3">
              <div className="flex items-end gap-1">
                <h3 className="text-xl font-bold text-primaryColor">$20.99</h3>
                <del className="text-gray-400">$25.00</del>
              </div>
            </div>
            <div className="absolute -bottom-6">
              <div className="flex items-center justify-between -mt-20 ">
                <h2 className="uppercase font-semibold text-2xl ml-4 text-nowrap">
                  shayura&apos;s weapon
                </h2>
                <Button className=" rounded-none border border-primaryColor bg-transparent text-primaryColor ml-5 hover:bg-primaryColor hover:text-black transition-all duration-300 hover:font-semibold">
                  get started
                </Button>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden w-[403px] text-white">
            <img src={gameIntroBg} alt="" />
            <img
              src={gun}
              alt=""
              className="absolute top-0 left-0 w-[400px] h-[160px]"
            />
            <img
              src={gunpirticles}
              alt=""
              className="absolute top-0 left-0 opacity-40  w-[403px]"
            />
            <div className="absolute top-2 right-3">
              <div className="flex items-end gap-1">
                <h3 className="text-xl font-bold text-primaryColor">$20.99</h3>
                <del className="text-gray-400">$25.00</del>
              </div>
            </div>
            <div className="absolute -bottom-6">
              <div className="flex items-center justify-between -mt-20 ">
                <h2 className="uppercase font-semibold text-2xl ml-4 text-nowrap">
                  shayura&apos;s weapon
                </h2>
                <Button className=" rounded-none border border-primaryColor bg-transparent text-primaryColor ml-5 hover:bg-primaryColor hover:text-black transition-all duration-300 hover:font-semibold">
                  get started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WeaponsFarm;
