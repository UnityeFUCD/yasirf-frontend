import {
  promoteBg,
  promoteDollarIcon,
  promoteMessageIcon,
  promoteNetworkIcon,
} from "@/assets";
import { Button } from "@/components/ui/button";
import Container from "@/pages/Shared/Container";

const Promote = () => {
  const promoteData = [
    {
      title: "HIGH PAYOUTS",
      description: "Earn industry-leading percentages.",
      icon: <img src={promoteDollarIcon} alt="" className="w-[90%]" />,
    },
    {
      title: "FAST PAYMENTS",
      description: "Quick and seamless payout process.",
      icon: <img src={promoteMessageIcon} alt="" />,
    },
    {
      title: "BOOSTING NETWORK",
      description: "Build and grow your boosting career with our support.",
      icon: <img src={promoteNetworkIcon} alt="" className="w-[80%]" />,
    },
  ];

  return (
    <div className="relative">
      <figure className="h-[704px] w-full overflow-hidden">
        <img
          src={promoteBg}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </figure>
      <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 min-w-[660px]">
        <h1 className="text-[56px] uppercase font-bold text-white text-center">
          Earn upto <span className="text-primaryColor">$500/day</span> by{" "}
          <br />
          helping others!
        </h1>
        <div className="py-[55px] grid grid-cols-3 gap-[36px] items-start">
          {promoteData?.map((data, idx) => (
            <div
              key={`index - ${idx}`}
              className="flex flex-col gap-5 items-start"
            >
              <div>{data?.icon}</div>
              <div>
                <h1 className="text-[24px] text-white">{data?.title}</h1>
                <p className="text-gray-300 text-[20px]">{data?.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="  flex items-center justify-center gap-5">
          {/* <Button className="uppercase bg-primaryColor text-black rounded-none font-bold hover:bg-primaryColor px-6 py-[18px]">
              get started
            </Button> */}
          <Button className="uppercase bg-transparent text-primaryColor border border-primaryColor rounded-none font-bold hover:text-black hover:bg-primaryColor px-6 py-[18px]">
            get started
          </Button>
        </div>
      </div>
      <div className="lg:hidden absolute bottom-[65px] left-4 md:left-8">
        <h1 className="text-[56px] uppercase text-white leading-[90%] mb-6">
          join the <br /> <span className="text-primaryColor font-bold">revolution!</span>
        </h1>
        <div className="">
          {/* <Button className="uppercase bg-primaryColor text-black rounded-none font-bold hover:bg-primaryColor px-6 py-[18px]">
              get started
            </Button> */}
          <Button className="uppercase bg-transparent text-primaryColor border border-primaryColor rounded-none font-bold hover:text-black hover:bg-primaryColor px-6 py-[18px]">
            get started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Promote;
