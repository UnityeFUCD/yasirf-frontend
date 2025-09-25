import { awardbg, discount, freechest, giftbox, Man } from "@/assets";
import {
  ActiveIcon,
  InActiveIcon,
  TrophyIcon,
  UserIcon,
  VoucherIcon,
} from "./Icons";
import { cn } from "@/lib/utils";

const PriceAndAwards = () => {
  const usersData = [
    {
      name: "john doe",
      id: "345234",
      image: <img src={Man} alt="" />,
      imageProps: "image",
    },
    { name: "tier 2", id: "member", image: <UserIcon /> },
    { name: "1", id: "voucher (s)", image: <VoucherIcon /> },
    { name: "4,059", id: "total reward points", image: <TrophyIcon /> },
  ];

  const optionsData = [
    {
      title: "$5 discount ",
      desctiption:
        "Eget sit nulla neque diam facilisis. Eu elementum morbi nunc amet porta scelerisque ac faucibus etiam.",
      image: <img src={giftbox} alt="" />,
      buttonText: "get started",
    },
    {
      title: "$10 discount ",
      desctiption:
        "Eget sit nulla neque diam facilisis. Eu elementum morbi nunc amet porta scelerisque ac faucibus etiam.",
      image: <img src={discount} alt="" />,
      buttonText: "get started",
    },
    {
      title: "free chest",
      desctiption:
        "Eget sit nulla neque diam facilisis. Eu elementum morbi nunc amet porta scelerisque ac faucibus etiam.",
      image: <img src={freechest} alt="" />,
      buttonText: "get started",
    },
  ];
  return (
    <div className="max-w-[1250px]">
      <div className="px-5 py-[23px] relative">
        <img src={awardbg} alt="" className="w-full h-full" />
        <div className="absolute top-20 left-24">
          <div>
            <h2 className="text-[32px] uppercase tracking-wide">
              points and rewards
            </h2>
            <div className="pt-4">
              <div className="grid grid-cols-4 w-full gap-5">
                {usersData?.map((data, idx) => {
                  return (
                    <div
                      key={`index - ${idx}`}
                      className="flex items-center gap-5 p-4 bg-white/5 border border-white/20 backdrop-blur-lg"
                    >
                      {data?.imageProps ? (
                        <img src={data?.image?.props?.src} alt="" />
                      ) : (
                        data?.image
                      )}
                      <div>
                        <h4 className="text-lg uppercase">{data?.name}</h4>
                        <p className="text-sm opacity-50">{data?.id}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="py-5 mt-0 ml-0">
              <h3 className="text-2xl font-medium">MILESTONES</h3>
              <div className="py-2">
                <div className="flex items-start  gap-[360px] w-full">
                  {/* step 1 */}
                  <div
                    className={cn(
                      "text-2xl   flex flex-col gap-4 items-center relative ",
                      "opacity-100 gap-0 mt-3"
                    )}
                  >
                    <span className="-mt-3 z-20">
                      <ActiveIcon />
                    </span>

                    <span className="text-center uppercase leading-none mt-2">
                      30 points
                    </span>
                    <p
                      className={cn(
                        "absolute top-3 left-16 w-[428.978px] bg-gray-20 z-10 h-0.5 ml-1 bg-primaryColor"
                      )}
                    />
                  </div>
                  {/* step 2 */}
                  <div
                    className={cn(
                      "text-2xl flex flex-col items-center gap-2 text-center relative z-20"
                    )}
                  >
                    <span className="z-20">
                      <span className="-mt-5">
                        <ActiveIcon />
                      </span>
                    </span>
                    <span className="text-center uppercase leading-none">
                      50 points
                    </span>
                    <p
                      className={cn(
                        "absolute top-6  left-14 -z-10 bg-gray-200 opacity-30 w-[446.978px] h-0.5"
                      )}
                    />
                  </div>
                  {/* step 3 */}
                  <div
                    className={cn(
                      "text-2xl flex flex-col items-center gap-4 text-center z-20 mt-3"
                    )}
                  >
                    <span className={cn("opacity-30 ")}>
                      <InActiveIcon />
                    </span>

                    <span className="text-center uppercase leading-none">
                      300 points
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pb-5">
              <h3 className="text-2xl font-medium uppercase">reward options</h3>
              <div className="pt-5 grid grid-cols-3 gap-5">
                {optionsData?.map((data, idx) => {
                  return (
                    <div
                      key={`index - ${idx}`}
                      className="relative bg-background rounded-xl h-[314px] w-[333px]"
                    >
                      <div className="flex items-center justify-center">
                        <img
                          src={data?.image?.props?.src}
                          alt=""
                          className=" w-[333px] h-[165px] rounded-t-xl"
                        />
                      </div>

                      <div className=" bg-[#161A31] px-5 flex flex-col py-5 -mt-0">
                        <h4 className="text-lg uppercase font-semibold">
                          {data?.title}
                        </h4>
                        <p className="text-sm opacity-50 mt-2">
                          {data?.desctiption}
                        </p>
                        <button className="text-black mt-5 font-bold w-full rounded-none uppercase px-6 py-3.5  bg-primaryColor">
                          {data?.buttonText}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceAndAwards;
