import ExpandBanner from "@/components/ExpandedOfferingPageComponents/ExpandBanner";
import ExpandCategories from "@/components/ExpandedOfferingPageComponents/ExpandCategories";
import ExpandExploreMore from "@/components/ExpandedOfferingPageComponents/ExpandExploreMore";
import WeaponsFarm from "@/components/ExpandedOfferingPageComponents/WeaponsFarm";
import GamesInfo from "@/components/SelectedGameComponent/GamesInfo";

const ExpandedOffering = () => {
  return (
    <div>
      <ExpandBanner />
      <WeaponsFarm />
      <ExpandCategories />
      <ExpandExploreMore />
      <GamesInfo expandpageProps={"expandpageProps"} />
    </div>
  );
};

export default ExpandedOffering;
