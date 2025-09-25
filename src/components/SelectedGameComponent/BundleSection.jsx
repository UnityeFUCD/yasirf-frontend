import { offerCardPhoto } from "@/assets";
import OffersCard from "../HomePageComponents/Offers/OffersCard";
import { Button } from "../ui/button";

const BundleSection = () => {
  const offersCardData = [
    {
      name: "AWAKENED RAISED BUNDLE",
      status: {
        primary: "EXPIRING",
        secondary: "NEW LAUNCH",
      },
      contents: {
        bundle_type: "Season & Awakened Bundle",
        features: [
          "Season 4 Awakened Bundle",
          "Full runs with all rewards",
          "493-515 ilvl gear",
        ],
      },
      pricing: {
        current_price: 20.99,
        from_text: "FROM",
      },
      image: <img src={offerCardPhoto} alt="image" />,
    },
    {
      name: "AWAKENED RAISED BUNDLE",
      status: {
        primary: "LIMITED",
        secondary: "WEEKLY ROTATION",
      },
      contents: {
        bundle_type: "Season & Awakened Bundle",
        features: ["Full runs with all rewards", "493-515 ilvl gear"],
      },
      pricing: {
        current_price: 20.99,
        original_price: 26.0,
        from_text: "FROM",
      },
      image: <img src={offerCardPhoto} alt="image" />,
    },
    {
      name: "AWAKENED RAISED BUNDLE",
      status: {
        primary: "LIMITED",
        secondary: "WEEKLY ROTATION",
      },
      contents: {
        bundle_type: "Season & Awakened Bundle",
        features: ["Full runs with all rewards", "493-515 ilvl gear"],
      },
      pricing: {
        current_price: 20.99,
        original_price: 26.0,
        from_text: "FROM",
      },
      image: <img src={offerCardPhoto} alt="image" />,
    },
  ];

  return (
    <div className="w-full">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full pb-10">
        {offersCardData?.map((data, idx) => (
          <OffersCard key={`index - ${idx}`} data={data} />
        ))}
        {offersCardData?.map((data, idx) => (
          <OffersCard key={`index - ${idx}`} data={data} />
        ))}
        <div className="md:col-span-2 lg:col-span-3 w-full h-full">
          <div className="py-[29px] flex flex-col md:flex-row md:items-center gap-8 justify-between gap-3 border border-primaryColor rounded-md px-[37px] h-full">
            <div className="">
              <h3 className="text-[28px] lg:text-4xl text-white uppercase">
                looking for something <span className="font-bold">else?</span>
              </h3>
              <p className="text-white lg:text-xl uppercase font-semibold">
                you can always use custom order.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button className="uppercase border border-primaryColor rounded-none bg-transparent font-semibold text-primaryColor hover:bg-primaryColor hover:text-black hover:font-bold">
                Get started
              </Button>
              <Button className="uppercase border border-primaryColor rounded-none  font-bold">
                Get started
              </Button>
            </div>
          </div>
        </div>

        {offersCardData?.map((data, idx) => (
          <OffersCard key={`index - ${idx}`} data={data} />
        ))}
      </div>

     
    </div>
  );
};

export default BundleSection;
