import {
  characterSlice,
  echoes,
  gameIntroBg,
  Net,
  osiris,
  raids,
} from "@/assets";
import { Button } from "../ui/button";
import Container from "@/pages/Shared/Container";
import Categories from "./Categories";
import BundleSection from "./BundleSection";
import { offersCardData, Slider } from "../DynamicComponents/Slider";
import GamesInfo from "./GamesInfo";
import { gameCategories } from "@/lib/StaticData";
import SelectGame from "../MobileSection/SelectGame";
import OffersCard from "../HomePageComponents/Offers/OffersCard";

const Games = () => {
  return (
    <>
      <div className=" bg-background">
        <div className="mb-16 md:mb-20 lg:mb-0">
          <Container className="py-[64px] px-4 md:px-8 hidden lg:block">
            <div className="lg:grid grid-cols-3 items-center gap-8">
              <div className="text-white text-3xl relative w-full min-w-[271px] aspect-[364/158]">
                <figure className="absolute top-0 left-0 w-full h-full">
                  <img
                    src={gameIntroBg}
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </figure>
                <img
                  src={osiris}
                  alt=""
                  className="absolute bottom-0 z-10 -ml-8 xl:ml-0 w-[180px] xl:w-[212px]"
                />
                <div className="relative z-20 flex flex-col gap-4 items-end justify-end h-full w-full p-4">
                  <h2 className="text-2xl uppercase font-semibold">
                    trials of osiris
                  </h2>
                  <Button className="bg-transparent border border-primaryColor text-primaryColor rounded-none font-semibold hover:bg-primaryColor hover:text-black transition-all duration-300">
                    get started
                  </Button>
                </div>
              </div>
              <div className="text-white text-3xl relative w-full min-w-[271px] aspect-[364/158]">
                <figure className="absolute top-0 left-0 w-full h-full">
                  <img
                    src={gameIntroBg}
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </figure>
                <img
                  src={raids}
                  alt=""
                  className="absolute bottom-0 z-10 -ml-8 xl:ml-0 w-[180px] xl:w-[212px]"
                />
                <div className="relative z-20 flex flex-col gap-4 items-end justify-end h-full w-full p-4">
                  <h2 className="text-2xl uppercase font-semibold">raids</h2>
                  <Button className="bg-transparent border border-primaryColor text-primaryColor rounded-none font-semibold hover:bg-primaryColor hover:text-black transition-all duration-300">
                    get started
                  </Button>
                </div>
              </div>
              <div className="text-white text-3xl relative w-full min-w-[271px] aspect-[364/158]">
                <figure className="absolute top-0 left-0 w-full h-full">
                  <img
                    src={gameIntroBg}
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </figure>
                <img
                  src={echoes}
                  alt=""
                  className="absolute bottom-0 z-10 -ml-8 xl:ml-0 w-[180px] xl:w-[212px]"
                />
                <div className="relative z-20 flex flex-col gap-4 items-end justify-end h-full w-full p-4">
                  <h2 className="text-2xl uppercase font-semibold">
                    episode echoes
                  </h2>
                  <Button className="bg-transparent border border-primaryColor text-primaryColor rounded-none font-semibold hover:bg-primaryColor hover:text-black transition-all duration-300">
                    get started
                  </Button>
                </div>
              </div>
            </div>
          </Container>
          <div className="lg:hidden flex gap-6 overflow-auto pt-24 hide-scrollbar">
            <div className="text-white text-3xl relative w-full min-w-[271px] aspect-[271/148] first:ml-4 first:md:ml-8 last:mr-4 last:md:mr-8">
              <figure className="absolute top-0 left-0 w-full h-full">
                <img
                  src={gameIntroBg}
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </figure>
              <img
                src={osiris}
                alt=""
                className="absolute bottom-0 z-10 -ml-8 xl:ml-0 w-[180px] xl:w-[212px]"
              />
              <div className="relative z-20 flex flex-col gap-4 items-end justify-end h-full w-full p-4">
                <h2 className="text-2xl uppercase font-semibold">
                  trials of osiris
                </h2>
                <Button className="bg-transparent border border-primaryColor text-primaryColor rounded-none font-semibold hover:bg-primaryColor hover:text-black transition-all duration-300">
                  get started
                </Button>
              </div>
            </div>
            <div className="text-white text-3xl relative w-full min-w-[271px] aspect-[271/148] first:ml-4 first:md:ml-8 last:mr-4 last:md:mr-8">
              <figure className="absolute top-0 left-0 w-full h-full">
                <img
                  src={gameIntroBg}
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </figure>
              <img
                src={raids}
                alt=""
                className="absolute bottom-0 z-10 -ml-8 xl:ml-0 w-[180px] xl:w-[212px]"
              />
              <div className="relative z-20 flex flex-col gap-4 items-end justify-end h-full w-full p-4">
                <h2 className="text-2xl uppercase font-semibold">raids</h2>
                <Button className="bg-transparent border border-primaryColor text-primaryColor rounded-none font-semibold hover:bg-primaryColor hover:text-black transition-all duration-300">
                  get started
                </Button>
              </div>
            </div>
            <div className="text-white text-3xl relative w-full min-w-[271px] aspect-[271/148] first:ml-4 first:md:ml-8 last:mr-4 last:md:mr-8">
              <figure className="absolute top-0 left-0 w-full h-full">
                <img
                  src={gameIntroBg}
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </figure>
              <img
                src={echoes}
                alt=""
                className="absolute bottom-0 z-10 -ml-8 xl:ml-0 w-[180px] xl:w-[212px]"
              />
              <div className="relative z-20 flex flex-col gap-4 items-end justify-end h-full w-full p-4">
                <h2 className="text-2xl uppercase font-semibold">
                  episode echoes
                </h2>
                <Button className="bg-transparent border border-primaryColor text-primaryColor rounded-none font-semibold hover:bg-primaryColor hover:text-black transition-all duration-300">
                  get started
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 md:px-8">
          <SelectGame />
        </div>
        <Container className="py-[64px] px-4 md:px-8">
          <div className="flex items-start gap-6 w-full">
            <div className="w-[267px] hidden lg:block">
              <Categories data={gameCategories} />
            </div>
            <div className="w-full">
              <BundleSection />
            </div>
          </div>
        </Container>
      </div>
      <div className="pt-20 pb-[140px] lg:py-[100px]  relative overflow-hidden bg-background border-b border-gray-700">
        <Container className="px-4 md:px-8">
          <h1 className="uppercase text-white text-center text-[40px] lg:text-[56px] mb-10 lg:mb-[52px] leading-[90%]">
            recommended <br className="sm:hidden" />{" "}
            <span className="font-bold z-40">for you</span>
          </h1>

          <div className="w-full z-20 hidden lg:block">
            <Slider gameSectionProps={"gameSectionProps"} />
          </div>
        </Container>
        <div className="lg:hidden relative z-20">
          <div className="flex gap-5  overflow-auto hide-scrollbar">
            {offersCardData?.map((data, idx) => (
              <div
                className="flex-shrink-0 first:ml-4 md:first:ml-8 last:mr-4 md:last:mr-8"
                key={idx}
              >
                <OffersCard data={data} />
              </div>
            ))}
          </div>
        </div>
        <div className="text-white absolute bottom-0 left-14   text-4xl bg-primaryColor/80   size-[200px] blur-[150px] pointer-events-none hidden lg:block" />
        <div className="text-white absolute top-[170px] scale-75 right-1/3  text-4xl bg-primaryColor/80   size-[200px] blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0">
          <img src={Net} alt="" />
        </div>
      </div>
      <div>
        <GamesInfo />
      </div>
    </>
  );
};

export default Games;
