import { lootTable } from "@/assets";
import Container from "@/pages/Shared/Container";
import CardTitle from "./CardTitle";
import { LevelingOptions } from "./LevelingOptions";

const LootOptions = () => {
  return (
    <Container>
      <div className={"px-[155px] w-[1000px]"}>
        <img src={lootTable} alt="" className="w-[731px] h-[594px]" />
        <div className="mt-[44px]">
          <CardTitle className="text-[52px] font-normal">
            Leveling options
          </CardTitle>
          <p className="mt-4">
            <span className="font-semibold">
              I don&apos;t need 70-80 leveling{" "}
            </span>{" "}
            — check this option if you already have an 80 level character.
          </p>
          <div className="mt-[44px] ">
            <LevelingOptions />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LootOptions;
