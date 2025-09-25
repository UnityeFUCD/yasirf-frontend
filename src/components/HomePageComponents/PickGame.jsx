import { card1, card2, card3, card4, card5, card6, card7, gamePhoto } from "@/assets"; 
import Boostercard from "../DynamicComponents/jointeamcard/Boostercard";

const PickGame = () => {
  return (
    <div className="text-white flex flex-col pt-20  gap-[30px]">
      <p className="text-4xl font-medium text-white">Pick your Game</p>
      <div className="flex flex-wrap items-center justify-center max-w-6xl gap-6 ">
      <Boostercard title="destiny 2" imgSrc={gamePhoto} /> 
      <Boostercard title=" world of warcraft" imgSrc={card6} commingSoonProps={"commingSoonProps"} />
      <Boostercard title="path of exile 2" imgSrc={card7} commingSoonProps={"commingSoonProps"} />
      <Boostercard title="wow cataclysm" imgSrc={card2} commingSoonProps={"commingSoonProps"} />
      <Boostercard title="diablo 4" imgSrc={card4} commingSoonProps={"commingSoonProps"} />
      <Boostercard title="marvel rivals" imgSrc={card3} commingSoonProps={"commingSoonProps"} />
      <Boostercard title="call of duty" imgSrc={card1} commingSoonProps={"commingSoonProps"} />
      <Boostercard title="new world" imgSrc={card5} commingSoonProps={"commingSoonProps"} />
        
      
      </div>
    </div>
  );
};

export default PickGame;
