import Details from "@/components/OfferDetailsPageComponents/Details";
import DetailsCard from "@/components/OfferDetailsPageComponents/DetailsCard"; 
import LootOptions from "@/components/OfferDetailsPageComponents/LootOptions";
import OfferDetailsBanner from "@/components/OfferDetailsPageComponents/OfferDetailsBanner";
import RecomendedSection from "@/components/OfferDetailsPageComponents/RecomendedSection";
import GamesInfo from "@/components/SelectedGameComponent/GamesInfo";

const OfferDetails = () => {
  return (
    <div className="text-white">
      <OfferDetailsBanner />
      <DetailsCard />
      <Details />
      <LootOptions />
      <RecomendedSection OfferDetailsProps={"OfferDetailsProps"} />
      <GamesInfo OfferDetailsProps={"OfferDetailsProps"} />
    </div>
  );
};

export default OfferDetails;
