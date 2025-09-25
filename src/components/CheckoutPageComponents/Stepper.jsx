import { cn } from "@/lib/utils";
import { ActiveIcon, InActiveIcon } from "./Icons";
import { useContext } from "react";
import { AuthContext } from "@/Context/AuthContext";
import { Net } from "@/assets";

const Stepper = () => {
  const { step } = useContext(AuthContext);

  return (
    <div className="relative h-[550px] flex items-center justify-center">
      <div>
        <h1 className="text-primaryColor uppercase text-[56px] text-center">
          <span className="text-white">secure</span> checkout
        </h1>
        <div className="mt-[58.48px]">
          <div className="flex items-start  gap-[208px] w-full">
            {/* step 1 */}
            <div
              className={cn(
                "text-2xl   flex flex-col gap-4 items-center relative",
                step === 1 || step === 2 || step === 2.5 || step === 3
                  ? "opacity-100 gap-0 mt-3"
                  : "opacity-30 gap-4 mt-3"
              )}
            >
              {step === 1 || step === 2 || step === 2.5 || step === 3 ? (
                <span className="-mt-3 z-20">
                  <ActiveIcon />
                </span>
              ) : (
                <InActiveIcon />
              )}
              <span className="text-center uppercase leading-none">
                01 payment <br /> method
              </span>
              <p
                className={cn(
                  "absolute top-3 left-16 w-[294.978px] bg-gray-20 z-10 h-0.5 ml-1",
                  step === 2 || step === 2.5 || step === 3
                    ? "bg-primaryColor"
                    : "bg-gray-100  opacity-30"
                )}
              />
            </div>
            {/* step 2 */}
            <div
              className={cn(
                "text-2xl flex flex-col items-center gap-4 text-center relative z-20",
                step === 2 || step === 2.5 || step === 3
                  ? "opacity-100   gap-1"
                  : "opacity-30 mt-3"
              )}
            >
              <span className="z-20">
                {step === 2 || step === 2.5 || step === 3 ? (
                  <span className="-mt-5">
                    <ActiveIcon />
                  </span>
                ) : (
                  <span
                    className={cn("", (step === 1 || step === 2) && "top-6")}
                  >
                    <InActiveIcon />
                  </span>
                )}
              </span>
              <span className="text-center uppercase leading-none">
                02 review <br /> order
              </span>
              <p
                className={cn(
                  "absolute top-3  left-14 -z-10 bg-gray-200 w-[287.978px] h-0.5",
                  step === 3
                    ? "bg-primaryColor top-6"
                    : "bg-gray-100  opacity-100",
                  (step === 2 || step === 2.5) &&
                    "top-6 bg-gray-100  opacity-40",
                  step === 2.5 && "top-6"
                )}
              />
            </div>
            {/* step 3 */}
            <div
              className={cn(
                "text-2xl flex flex-col items-center gap-4 text-center z-20",
                step === 3 ? "opacity-100 gap-1 mt-3" : "opacity-30 mt-3",
                step == 3 && "top-6 gap-0"
              )}
            >
              {step === 3 ? (
                <span className="-mt-3">
                  <ActiveIcon />
                </span>
              ) : (
                <span className={cn("", (step === 1 || step === 2) && "top-6")}>
                  <InActiveIcon />
                </span>
              )}
              <span className="text-center uppercase leading-none">
                03 <br /> payment
              </span>
            </div>
          </div>
        </div>
      </div>
      <img src={Net} className="absolute top-0 z-10 right-0" alt="" />

      <div className="absolute -top-40 left-1/2 bg-primaryColor/30 size-[399px] blur-[150px]" />
    </div>
  );
};

export default Stepper;
