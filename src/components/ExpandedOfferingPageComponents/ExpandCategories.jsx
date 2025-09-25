import Container from "@/pages/Shared/Container";
import BundleSection from "../SelectedGameComponent/BundleSection";
import Categories from "../SelectedGameComponent/Categories";
import { gameCategories } from "@/lib/StaticData";

const ExpandCategories = () => {
  return (
    <Container>
      <div className="py-[64px] px-[111px]">
        <div className="flex items-start gap-6   w-full">
          <div className="w-[267px]">
            <Categories data={gameCategories} />
          </div>
          <div className="w-full ">
            <BundleSection />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ExpandCategories;
