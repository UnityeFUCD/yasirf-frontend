import {
  headphoneIcon,
  keyIcon,
  messageIcon,
  OrderIcon,
  whyChoose,
  whychoosebg,
} from "@/assets";

const WhyChooseUs = () => {
  const whyChooseData = [
    {
      icon: (
        <div className="size-[36px] relative overflow-visible">
          <img
            src={keyIcon}
            alt=""
            className="max-w-none scale-125 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      ),
      title: "VPN PROTECTION",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor adipiscing elit sed do eiusmod tempor",
    },
    {
      icon: (
        <div className="size-[36px] relative overflow-visible">
          <img
            src={messageIcon}
            alt=""
            className="max-w-none scale-125 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      ),
      title: "FAST DELIVERY",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor adipiscing elit sed do eiusmod tempor",
    },
    {
      icon: (
        <div className="size-[36px] relative overflow-visible">
          <img
            src={headphoneIcon}
            alt=""
            className="max-w-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      ),
      title: "24/7 SUPPORT",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor adipiscing elit sed do eiusmod tempor",
    },
    {
      icon: (
        <div className="size-[36px] relative overflow-visible">
          <img
            src={OrderIcon}
            alt=""
            className="max-w-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      ),
      title: "CUSTOM ORDERS",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor adipiscing elit sed do eiusmod tempor",
    },
  ];

  return (
    <div className="bg-background   mx-auto">
      <div className="border-b border-[#FBFBFF3A]">
        <div className="border-r border-[#FBFBFF3A] w-fit flex text-sm text-white">
          <p className="py-7 ml-4 md:ml-8 uppercase tracking-[2.38px]">[06]</p>
          <p className="py-7 mx-[18px] uppercase tracking-[2.38px]">
            download app
          </p>
        </div>
      </div>
      
      <div className="px-4 md:px-8 lg:px-[165px] relative text-white pb-24 lg:pb-[150px] overflow-hidden">
        <div className="absolute lg:-top-[30%] top-1/2 -translate-y-1/2 right-0">
          <img src={whychoosebg} alt="" />
        </div>
        <div>
          <h2 className="text-[32px] lg:text-[56px] text-center leading-none pt-[93.93px] ">
            Our service comes with <br />
            <span className="font-bold">Vanguard Boost key features</span>
          </h2>
          <div className="pb-6 pt-10 lg:pt-[66.66px] grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 lg:gap-[80px]">
            {whyChooseData?.map((data, idx) => (
              <div
                key={`index - ${idx}`}
                className="flex flex-col  gap-4 items-start"
              >
                <div>{data?.icon}</div>
                <div>
                  <h3 className="text-xl lg:text-[24px] text-left leading-normal">
                    {data?.title}
                  </h3>
                  <p className="text-[18px] text-left pt-[12px] text-[#FBFBFF]/60 text-sm">
                    {data?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
