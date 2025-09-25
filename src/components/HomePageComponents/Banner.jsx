import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { StarIcon, StarIcon2 } from "../Icons/HomeIcon";
import PickGame from "./PickGame";
import { Link } from "react-router";
import {
  BoostIcon,
  CashbackIcon,
  DollarIcon,
  LockIcon,
  OptionsIcon,
  PaymentIcon,
  SafeIcon,
  SupportIcon,
} from "./cart/Icons";
import { Line2 } from "@/assets";

const Banner = () => {
  const bannerbenefitsData = [
    {
      label: "SSL SECURE",
      icon: <LockIcon />,
      background: "primaryColor",
    },
    {
      label: "VPN, SAFE BOOST",
      icon: <BoostIcon />,
      background: "#6F742F",
    },
    {
      label: "SECURE PAYMENTS",
      icon: <PaymentIcon />,
      background: "#C3FF00",
    },
    {
      label: "MONEY REFUNDS",
      icon: <DollarIcon />,
      background: "#C3FF00",
    },
    {
      label: "24/7 SUPPORT",
      icon: <SupportIcon />,
      background: "#3A3D40",
    },
    {
      label: "CASHBACK",
      icon: <CashbackIcon />,
      background: "#3A3D40",
    },
    {
      label: "MULTIPLE PAYMENT OPTIONS",
      icon: <OptionsIcon />,
      background: "#3A3D40",
    },
    {
      label: "SAFE SERVICE",
      icon: <SafeIcon />,
      background: "#3A3D40",
    },
  ];

  return (
    <div className="h-[600px] lg:min-h-screen bg-background   mx-auto relative overflow-hidden">
      <div className="overflow-hidden">
        <div className="flex flex-col  absolute top-[140px] lg:top-40 left-0 lg:left-40 z-20">
          <h1 className="text-[52px] lg:text-[100px] uppercase text-white w-[90%] sm:w-[80%] lg:w-full max-w-[800px] leading-[90%] px-4 md:px-8 lg:px-0">
            Start{" "}
            <span className="text-primaryColor font-bold">dominating</span>{" "}
            destiny 2
          </h1>
          <div className=" flex-wrap gap-2 max-w-[610px] mt-8 px-4 md:px-8 lg:px-0 hidden lg:flex">
            {bannerbenefitsData?.map((data, idx) => (
              <Button
                key={`index - ${idx}`}
                className={cn(
                  "font-semibold px-2 py-0 h-8 rounded-none flex items-center gap-1 text-xs",
                  data?.label === "VPN, SAFE BOOST" &&
                    "bg-primaryColor/25 border border-primaryColor/40 text-primaryColor",
                  data?.label === "MONEY REFUNDS" &&
                    "bg-white/10   border border-primaryColor text-primaryColor",
                  data?.label === "24/7 SUPPORT" &&
                    " border border-slate-700 bg-black/60 text-primaryColor",
                  data?.label === "CASHBACK" &&
                    " border border-white/10 bg-white/20 backdrop-filter-[5px] text-white",
                  data?.label === "MULTIPLE PAYMENT OPTIONS" &&
                    " border border-white/10 bg-white/20 backdrop-filter-[5px] text-white",
                  data?.label === "SAFE SERVICE" &&
                    " border border-slate-700 bg-black/60 text-primaryColor"
                )}
              >
                <span
                  className={cn(
                    "-mt-1",
                    data?.label === "MONEY REFUNDS" && "mt-[1px]",
                    data?.label === "MULTIPLE PAYMENT OPTIONS" && "mt-[0.5px]",
                    data?.label === "CASHBACK" && "mt-[0.5px]",
                    data?.label === "SAFE SERVICE" && "mt-[1px]"
                  )}
                >
                  {data?.icon}
                </span>
                {data?.label}
              </Button>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2 max-w-2xl mt-[22px] px-4 md:px-8 lg:px-0 lg:hidden">
            {bannerbenefitsData.slice(0, 6)?.map((data, idx) => (
              <Button
                key={`index - ${idx}`}
                className={cn(
                  "font-semibold px-2 py-0 h-8 rounded-none flex items-center gap-1 text-xs",
                  data?.label === "VPN, SAFE BOOST" &&
                    "bg-primaryColor/25 border border-primaryColor/40 text-primaryColor",
                  data?.label === "MONEY REFUNDS" &&
                    "bg-white/10   border border-primaryColor text-primaryColor",
                  data?.label === "24/7 SUPPORT" &&
                    " border border-slate-700 bg-black/60 text-primaryColor",
                  data?.label === "CASHBACK" &&
                    " border border-white/10 bg-white/20 backdrop-filter-[5px] text-white",
                  data?.label === "MULTIPLE PAYMENT OPTIONS" &&
                    " border border-white/10 bg-white/20 backdrop-filter-[5px] text-white",
                  data?.label === "SAFE SERVICE" &&
                    " border border-slate-700 bg-black/60 text-primaryColor"
                )}
              >
                <span
                  className={cn(
                    "-mt-1",
                    data?.label === "MONEY REFUNDS" && "mt-[1px]",
                    data?.label === "MULTIPLE PAYMENT OPTIONS" && "mt-[0.5px]",
                    data?.label === "CASHBACK" && "mt-[0.5px]",
                    data?.label === "SAFE SERVICE" && "mt-[1px]"
                  )}
                >
                  {data?.icon}
                </span>
                {data?.label}
              </Button>
            ))}
          </div>
        </div>
        <div className="text-white absolute bottom-8 lg:bottom-1/2 lg:translate-y-1/2 lg:right-40 px-4 md:px-8 lg:px-0 w-full lg:w-fit flex lg:flex-col justify-between items-end lg:items-start">
          <div className="">
            <h3 className="text-4xl">240+ </h3>
            <p className="flex items-center gap-2 pb-1 text-xs xs:text-sm text-nowrap tracking-tighter md:tracking-normal">
              reviews on <StarIcon /> Trustpilot
            </p>
          </div>

          <div className="w-fit">
            <div className="flex items-center gap-1">
              <StarIcon2 />
              <StarIcon2 />
              <StarIcon2 />
              <StarIcon2 />
              <StarIcon2 />
            </div>

            <div className="flex items-center justify-between mt-[9.63px] z-30">
              <span className="uppercase textbase font-semibold">
                excellent
              </span>{" "}
              <Link
                className="text-[#00B67A] cursor-pointer hover:underline"
                to={"/see-all"}
              >
                See all
              </Link>
            </div>
          </div>
        </div>
        Review section *
        {/* <div className="absolute top-[400px] right-[230px] mt-20 text-white">
          <p className="flex items-start gap-1">
            <StarIcon /> Be the first to leave a review!{" "}
            <span className="text-[#00B67A] underline cursor-pointer">
              Add Review
            </span>
          </p>
        </div> */}
        <div className="lg:block hidden">
          <div
            className={cn(
              `size-[350px] rounded-full absolute top-1/2 -right-60 -translate-y-1/2 blur-[200px]`,
              "bg-primaryColor/50"
            )}
          />
          <div>
            <p className="text-sm font-normal uppercase absolute top-1/3 tracking-widest -right-10 text-gray-500 rotate-90">
              blockchain gaming
            </p>
          </div>
        </div>
        <div className="lg:block hidden">
          <div className="text-sm font-normal uppercase absolute top-1/2 tracking-widest right-0 text-gray-500 ">
            <img src={Line2} alt="" className="r" />
          </div>
          <div className="text-sm font-normal uppercase absolute top-[65%] tracking-widest -right-3 text-gray-500 rotate-180">
            <p className="rotate-90">AI gaming</p>
          </div>
        </div>
        <div
          className={cn(
            `size-[350px] rounded-full absolute top-40 left-0 -translate-y-1/2 z-10 blur-[200px]`,
            "bg-primaryColor/70"
          )}
        />
        <div className="absolute left-40 bottom-0 w-full hidden lg:block ">
          <PickGame />
        </div>
      </div>
    </div>
  );
};

export default Banner;
