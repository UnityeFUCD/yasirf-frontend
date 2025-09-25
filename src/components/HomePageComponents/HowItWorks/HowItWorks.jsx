import {
  dashLine,
  howworksimage,
  howworksimage2,
  howworkstext,
  howworksverlay,
  workBg,
} from "@/assets";
import HowItWorksCard from "./HowItWorksCard";
import {
  CheckIcon,
  DescordIcon,
  DollarIcon,
  SupportIcon,
} from "@/components/Icons/HowItWorks";

const HowItWorks = () => {
  return (
    <div className="bg-background   mx-auto overflow-hidden relative">
      <div className="border-b border-[#FBFBFF3A]  absolute top-0 w-full z-20">
        <div className="border-r border-[#FBFBFF3A] w-fit flex text-sm text-white">
          <p className="py-7 ml-4 md:ml-8 uppercase tracking-[2.38px]">[03]</p>
          <p className="py-7 mx-[18px] uppercase tracking-[2.38px]">
            how it works
          </p>
        </div>
      </div>
      <div className="hidden lg:flex h-full w-full  items-center relative">
        <img src={howworksimage} alt="" />
        <img src={howworksimage2} alt="" />
        <img
          src={howworksverlay}
          alt=""
          className="absolute top-0 w-full h-full"
        />

        <div className="absolute top-[25%] right-[33%] z-10">
          <img src={dashLine} alt="" />
        </div>
        <div className="absolute top-[350px] left-40">
          <h1 className="text-white text-[120px] uppercase leading-none">
            how it <br />
            <span className="font-bold">works?</span>
          </h1>
        </div>
        <div className="absolute z-20 top-32 left-[40%]">
          <HowItWorksCard
            title="purchase a service"
            semiTitle="Purchase any service from our app or website."
            firstProps={"firstProps"}
            icon={<DollarIcon />}
          />
        </div>
        <div className="absolute z-20 top-[31%] left-[54%]">
          <HowItWorksCard
            title="24/7 live chat"
            semiTitle="Chat with us anytime on Discord."
            icon={<DescordIcon />}
          />
        </div>
        <div className="absolute z-20 top-[55%] right-[10%]">
          <HowItWorksCard
            title="100% assurance"
            semiTitle="The purchased service is constantly monitored by our service team."
            icon={<CheckIcon />}
          />
        </div>
        <div className="absolute z-20 top-[75%] right-[20%]">
          <HowItWorksCard
            title="100% support"
            semiTitle="The service is done, if there is any issue we are open to 100% support."
            icon={<SupportIcon />}
          />
        </div>
      </div>

      <div className="lg:hidden relative">
        <figure className=" absolute top-0 left-0 bottom-0  w-full overflow-hidden">
          <img
            src={workBg}
            className="w-full h-full object-cover object-center"
            alt=""
          />
        </figure>
        <img
          src={howworksverlay}
          alt=""
          className="absolute top-0 left-0 w-full h-full opacity-80"
        />
        <div className="relative z-20 px-4 md:px-8">
          <h1 className="text-white text-[60px] lg:text-[120px] uppercase leading-none pt-[104px]">
            how it <br />
            <span className="font-bold">works?</span>
          </h1>
          <div className=" py-[120px] ">
            <div className="pl-[50px] md:pl-[100px] relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="79"
                height="514"
                viewBox="0 0 79 514"
                fill="none"
              >
                <path
                  opacity="0.5"
                  d="M6.68709 1.33435C67.9462 74.2148 133.136 274.636 0.994873 513.522"
                  stroke="#C8FF00"
                  strokeWidth="1.5"
                  strokeDasharray="8 8"
                />
              </svg>
              <div className="absolute z-20 -top-3 xs:top-0 -translate-y-1/2 left-0">
                <HowItWorksCard
                  title="purchase a service"
                  semiTitle="Purchase any service from our app or website."
                  firstProps={"firstProps"}
                  icon={<DollarIcon />}
                />
              </div>
              <div className="absolute z-20 top-[15%] xs:top-[18%] md:top-[15%] left-[5%] xs:left-[10%]">
                <HowItWorksCard
                  title="24/7 live chat"
                  semiTitle="Chat with us anytime on Discord."
                  icon={<DescordIcon />}
                />
              </div>
              <div className="absolute z-20 bottom-[15%] xs:bottom-[19%] md:bottom-[18%] left-[5%] xs:left-[10%]">
                <HowItWorksCard
                  title="100% assurance"
                  semiTitle="The purchased service is constantly monitored by our service team."
                  icon={<CheckIcon />}
                />
              </div>
              <div className="absolute z-20 -bottom-3 xs:bottom-0 translate-y-1/2 left-0">
                <HowItWorksCard
                  title="100% support"
                  semiTitle="The service is done, if there is any issue we are open to 100% support."
                  icon={<SupportIcon />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
