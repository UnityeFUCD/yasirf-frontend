import { launchesCardPhoto } from "@/assets";
import LaunchesCard from "./LaunchesCard";

const NewLaunchesSection = () => {
  return (
    <div className="p-[21.3px] bg-gradient-to-b from-gray-700/30 via-black-20 to-black-80 rounded-md ">
      <div>
        <h3 className="uppercase text-[#FBFBFF]/60 font-semibold tracking-wider">
          new launches
        </h3>
      </div>
      <div className="pt-4 flex flex-col gap-6">
        <LaunchesCard
          image={launchesCardPhoto}
          title="season 3 2024"
          description="PvE features three-player 'strikes' and dungeons and six-player raids"
        />
        <LaunchesCard
          image={launchesCardPhoto}
          title="season 3 2024"
          description="PvE features three-player 'strikes' and dungeons and six-player raids"
        />
        <LaunchesCard
          image={launchesCardPhoto}
          title="season 3 2024"
          description="PvE features three-player 'strikes' and dungeons and six-player raids"
        />
      </div>
    </div>
  );
};

export default NewLaunchesSection;
