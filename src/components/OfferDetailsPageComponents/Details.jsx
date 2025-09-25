import Container from "@/pages/Shared/Container";
import CardTitle from "./CardTitle";

const Details = () => {
  return (
    <Container className="py-8">
      <div className="bg-background py-8 px-[155px]">
        <div>
          <CardTitle className="text-[52px]">What you will get</CardTitle>
          <div className="">
            <p className="flex items-center gap-2 font-thin">
              <p className="w-1.5 h-1.5 bg-primaryColor rounded-full"></p>Heroic
              plus Normal full raid runs at 10% discount;
            </p>
            <p className="flex items-center gap-2 font-thin">
              <p className="w-1.5 h-1.5 bg-primaryColor rounded-full"></p>
              FREE 70-80 leveling;
            </p>
            <p className="flex items-center gap-2 font-thin">
              <p className="w-1.5 h-1.5 bg-primaryColor rounded-full"></p>
              Chance to get 600-613 ilvl items from Normal raid;
            </p>
            <p className="flex items-center gap-2 font-thin">
              <p className="w-1.5 h-1.5 bg-primaryColor rounded-full"></p>
              Chance to loot 613-623 ilvl gear from Heroic raid;
            </p>
            <p className="flex items-center gap-2 font-thin">
              <p className="w-1.5 h-1.5 bg-primaryColor rounded-full"></p>
              Valorstones currency;
            </p>
            <p className="flex items-center gap-2 font-thin">
              <p className="w-1.5 h-1.5 bg-primaryColor rounded-full"></p>
              Chance to get Sureki Skyrazor mount.
            </p>
          </div>
        </div>
        <div className="mt-[44px]">
          <CardTitle className="text-[52px]">Service Options</CardTitle>
          <div>
            <p className="text-primaryColor font-semibold capitalize">
              execution options
            </p>
            <p className="flex items-center gap-2 font-thin">
              <span className="font-semibold">Express Start:</span> Checkbox
              option for immediate service prioritization, independent of other
              options.
            </p>
            <p className="flex items-center gap-2 font-thin">
              <span className="font-semibold">Normal:</span>
              Standard completion timeline.
            </p>
            <p className="flex items-center gap-2 font-thin">
              <span className="font-semibold">Express:</span>Faster completion
              with an additional percentage price increase.
            </p>
            <p className="flex items-center gap-2 font-thin">
              <span className="font-semibold">Super Express:</span> Priority
              completion with a higher percentage price increase.
            </p>
          </div>
          <div className="py-4">
            <p className="text-primaryColor font-semibold capitalize">
              Number of Guardians
            </p>
            <p className="flex items-center gap-2 font-thin">
              <span className="font-semibold">One Guardian: </span> Standard
              price.
            </p>
            <p className="flex items-center gap-2 font-thin">
              <span className="font-semibold">Two Guardians:</span>
              Price increase based on a percentage.
            </p>
            <p className="flex items-center gap-2 font-thin">
              <span className="font-semibold">Three Guardians:</span> Higher
              price increase based on a percentage.
            </p>
          </div>
          <div className="py-4">
            <p className="text-primaryColor font-semibold capitalize">
              Trials Options
            </p>
            <p className="flex items-center gap-2 font-thin">
              <span className="font-semibold">No Wins After 7-0: </span> Base
              option with no additional cost.
            </p>
            <p className="flex items-center gap-2 font-thin">
              <span className="font-semibold">+3 Wins:</span>
              Adds $14.00.
            </p>
            <p className="flex items-center gap-2 font-thin">
              <span className="font-semibold">+5 Wins:</span> Adds $23.00.
            </p>
            <p className="flex items-center gap-2 font-thin">
              <span className="font-semibold">+10 Wins:</span> Pricing varies
              based on the offer.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Details;
