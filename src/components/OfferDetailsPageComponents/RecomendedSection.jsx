import { Net } from "@/assets";
import { Slider } from "../DynamicComponents/Slider";
import { Button } from "../ui/button";
import Container from "@/pages/Shared/Container";
import { cn } from "@/lib/utils";
import PropTypes from "prop-types";

const RecomendedSection = ({ OfferDetailsProps }) => {
  return (
    <div
      className={cn(
        "py-[100px] relative max-w-[1400px] mx-auto overflow-hidden bg-background border-b border-gray-700",
        OfferDetailsProps && "border-b-0 max-w-[1440px]"
      )}
    >
      <h1 className="uppercase text-white text-center text-[56px] mb-[52px]">
        recommended <span className="font-bold z-40">for you</span>
      </h1>

      <div className="w-full z-20">
        <Slider gameSectionProps={"gameSectionProps"} />
        <Container className={"px-[300px]"}>
          <div className="py-[29px]  flex items-center justify-between gap-3 border border-primaryColor rounded-md px-[37px] mt-[80px]">
            <div className="">
              <h3 className="text-4xl text-white uppercase">
                looking for something <span className="font-bold">else?</span>
              </h3>
              <p className="text-white text-xl uppercase font-semibold">
                you can always use custom order.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button className="uppercase border border-primaryColor rounded-none bg-transparent font-semibold text-primaryColor hover:bg-primaryColor hover:text-black hover:font-bold">
                Get started
              </Button>
              <Button className="uppercase border border-primaryColor rounded-none  font-bold text-black">
                Get started
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <div className="text-white absolute bottom-0 left-14 text-4xl bg-primaryColor/80 size-[200px] blur-[150px]" />
      <div className="text-white absolute top-[200px] right-1/3 text-4xl bg-primaryColor/80 size-[200px] blur-[150px]" />
      <div className="absolute bottom-0 right-0">
        <img src={Net} alt="" />
      </div>
    </div>
  );
};

export default RecomendedSection;

RecomendedSection.propTypes = {
  OfferDetailsProps: PropTypes.object,
};
