import Container from "@/pages/Shared/Container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { gamesInfoCategories } from "@/lib/StaticData";
import { CharacterImage, characterSlice2, horizontalLine } from "@/assets";
import { cn } from "@/lib/utils";
import PropTypes from "prop-types";
const GamesInfo = ({ expandpageProps, OfferDetailsProps }) => {
  return (
    <div
      className={cn(
        "max-w-[1440px]  mx-auto relative bg-background border-b border-gray-700 overflow-hidden",
        expandpageProps && "border-b-0 z-20 px-[52px]",
        OfferDetailsProps && "border-t"
      )}
    >
      <Container
        className={cn(
          " lg:px-[120px] pt-[68px] lg:py-[91px] relative",
          expandpageProps &&
            "border-t border-b border-gray-700 px-0 ps-[120px] py-[80px]"
        )}
      >
        <div className="absolute top-0 left-20 hidden lg:block">
          <img src={horizontalLine} alt="" />
        </div>

        <div className="text-white flex flex-col lg:flex-row items-start gap-5  ml-5">
          <div>
            <h1 className="text-[40px] lg:text-[56px] uppercase leading-[90%]">
              more information for{" "}
              <span className="font-bold">D2 Boosting</span>
            </h1>
            <div
              className={cn(
                "max-w-[826px] mt-[26px]",
                expandpageProps && "max-w-[800px]"
              )}
            >
              <Tabs defaultValue="about service" className="w-fit  ">
                <div className="w-[calc(100vw-20px)] overflow-auto hide-scrollbar">
                  <TabsList className="flex  items-center gap-[12px] text-white">
                    {gamesInfoCategories?.map((data, idx) => {
                      return (
                        <TabsTrigger
                          key={`index ${idx}`}
                          value={data?.value}
                          className="text-white   focus:bg-primaryColor data-[state=active]:shadow-primaryColor data-[state=active]:shadow-[0px_3px_20px_0px_rgba(200,255,0,F0.60)] data-[state=active]:bg-primaryColor data-[state=active]:font-semibold  uppercase flex-none w-fit bg-white/10 backdrop-blur-sm"
                        >
                          {data?.title}
                        </TabsTrigger>
                      );
                    })}
                  </TabsList>
                </div>
                <TabsContent value="about service">
                  <div className="mt-[26px] ">
                    <h2 className="text-4xl font-medium uppercase">
                      What Destiny 2 Carry Services do we offer?
                    </h2>
                    <div className="text-gray-400 text-lg">
                      <p className="mt-2">
                        Explore every available Destiny 2 boost feature at
                        Vanguard Boost. Our top-notch PvP teams are ready to
                        help you excel in Trials of Osiris and elevate your
                        Glory Ranks. Our raid clans are also highly efficient,
                        completing over 10 raid runs each day. Additionally, we
                        offer a variety of other game services. Check out the
                        complete list of our Destiny 2 boosting options:
                      </p>
                      <div className="mt-1">
                        <li>
                          Trials of Osiris Boosting Raids Carry Exotic and
                          Legendary
                          <li>
                            weapons Crucible Services Gambit Services Strikes
                            and
                          </li>
                          <li>
                            Nightfalls Dungeons Triumphs and Seals Leveling and
                          </li>
                          <li>Farming Services</li>
                        </li>
                        <p className="mt-1">
                          If you want something special that is not listed on
                          our site — just ask our manager through the chat about
                          the desired game service. We will provide the best
                          services on any platform: PC, Xbox, PS4 or PS5.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          <div>
            <img
              src={CharacterImage}
              alt=""
              className={cn("", expandpageProps && "w-full h-full")}
            />
            <img
              src={characterSlice2}
              alt=""
              className="w-[369.195px] h-[100px] -mt-8  -ml-5 rotate-[-7deg]"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GamesInfo;

GamesInfo.propTypes = {
  expandpageProps: PropTypes.string,
  OfferDetailsProps: PropTypes.string,
};
