import { useState } from "react";
import {
  DiscoverCardIcon,
  MaestroCardIcon,
  MasterCardIcon,
  VisaCardIcon,
} from "./Icons";
import {
  applePay,
  cashapp,
  checkedboxIcon,
  googlePay, 
  paypal,
  samsungpay,
  venmo,
  visaCard,
} from "@/assets";

const PaymentMethod = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleSectionClick = (section) => {
    if (selectedSection === section) {
      setSelectedSection(null);
    } else {
      setSelectedSection(section);
    }
  };

  return (
    <div className=" ">
      <div>
        <h2 className="text-[40px] font-bold capitalize">payment method</h2>
        <div className="flex items-center justify-between w-full">
          <p className="text-lg uppercase font-semibold">
            Pay by Credit Card{" "}
            <span className="text-sm font-thin capitalize">
              Service Fee applicable
            </span>
          </p>
          <p className="flex items-center gap-1">
            <MasterCardIcon /> <MaestroCardIcon /> <VisaCardIcon />{" "}
            <DiscoverCardIcon />
          </p>
        </div>
        <div
          className="flex items-center gap-5   cursor-pointer border border-gray-400/40 mt-5 py-4 px-4"
          onClick={() => handleSectionClick("card1")}
        >
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-4">
              {selectedSection === "card1" ? (
                <img
                  src={checkedboxIcon}
                  alt="Checked"
                  className="h-4 w-4 cursor-pointer"
                />
              ) : (
                <span className="opacity-40">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <circle
                      cx="8"
                      cy="8"
                      r="7.25"
                      stroke="#FBFBFF"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
              )}

              <p className="text-white text-sm uppercase font-medium">
                card xxxx 9567
                <br />
                <span className="font-thin capitalize">$0.89 service fee</span>
              </p>
            </div>
            <p>
              <img src={visaCard} alt="" />
            </p>
          </div>
        </div>
        <div
          className="flex items-center gap-5   cursor-pointer border border-gray-400/40 mt-5 py-4 px-4"
          onClick={() => handleSectionClick("pro")}
        >
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-4">
              {selectedSection === "pro" ? (
                <img
                  src={checkedboxIcon}
                  alt="Checked"
                  className="h-4 w-4 cursor-pointer"
                />
              ) : (
                <span className="opacity-40">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <circle
                      cx="8"
                      cy="8"
                      r="7.25"
                      stroke="#FBFBFF"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
              )}

              <p className="text-white text-sm uppercase font-medium">
                card xxxx 9567
                <br />
                <span className="font-thin capitalize">$0.89 service fee</span>
              </p>
            </div>
            <p>
              <img src={visaCard} alt="" />
            </p>
          </div>
        </div>
        <div
          className="flex items-center gap-5   cursor-pointer border border-gray-400/40 mt-5 py-4 px-4"
          onClick={() => handleSectionClick("card2")}
        >
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-4">
              {selectedSection === "card2" ? (
                <img
                  src={checkedboxIcon}
                  alt="Checked"
                  className="h-4 w-4 cursor-pointer"
                />
              ) : (
                <span className="opacity-40">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <circle
                      cx="8"
                      cy="8"
                      r="7.25"
                      stroke="#FBFBFF"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
              )}

              <p className="text-white text-sm uppercase font-medium">
                card xxxx 9567
                <br />
                <span className="font-thin capitalize">$0.89 service fee</span>
              </p>
            </div>
            <p>
              <img src={visaCard} alt="" />
            </p>
          </div>
        </div>
        <div className="py-4">
          <h2 className="text-lg uppercase pb-4">add new card</h2>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              className="placeholder:uppercase px-4 py-6 border border-gray-400/30 outline-none bg-transparent"
              placeholder="credit/ debit card no."
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                className="placeholder:uppercase px-4 py-6 border border-gray-400/30 outline-none bg-transparent"
                placeholder="Exp. date"
              />
              <input
                type="text"
                className="placeholder:uppercase px-4 py-6 border border-gray-400/30 outline-none bg-transparent"
                placeholder="cvc code"
              />
            </div>
            <div className="flex items-center gap-2 font-thin">
              <p className="w-full h-0.5 bg-gray-400/20" />
              OR
              <p className="w-full h-0.5 bg-gray-400/20" />
            </div>
            <div>
              <h2 className="text-lg font-medium uppercase">
                Pay by mobile pay
              </h2>
              <div className="mt-4 flex items-center gap-[17.55px]">
                <img src={applePay} alt="" />
                <img src={googlePay} alt="" />
                <img src={samsungpay} alt="" />
              </div>
            </div>
            <div className="flex items-center gap-2 font-thin">
              <p className="w-full h-0.5 bg-gray-400/20" />
              OR
              <p className="w-full h-0.5 bg-gray-400/20" />
            </div>
            <div>
              <h2 className="text-lg font-medium uppercase">Digital wallets</h2>
              <div className="mt-4 flex items-center gap-[17.55px]">
                <img src={paypal} alt="" />
                <img src={cashapp} alt="" />
                <img src={venmo} alt="" />
              </div>
            </div>
            <div
              className="flex items-center gap-5   cursor-pointer border border-gray-400/40 mt-5 py-4 px-4"
              onClick={() => handleSectionClick("voucher")}
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                  {selectedSection === "voucher" ? (
                    <img
                      src={checkedboxIcon}
                      alt="Checked"
                      className="h-4 w-4 cursor-pointer"
                    />
                  ) : (
                    <span className="opacity-40">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <circle
                          cx="8"
                          cy="8"
                          r="7.25"
                          stroke="#FBFBFF"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </span>
                  )}

                  <p className="text-white text-sm uppercase font-medium">
                    Gift voucher ($30)
                    <br />
                    <span className="font-thin capitalize">No service fee</span>
                  </p>
                </div>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="42"
                    height="33"
                    viewBox="0 0 42 33"
                    fill="none"
                  >
                    <path
                      d="M40.1189 10.7848C39.875 11.2085 39.5929 11.6019 39.2677 11.966C36.8668 15.2992 31.5009 22.7857 26.6149 29.5294C22.783 34.8248 13.1325 33.3647 9.76977 25.1902C5.64787 15.8756 1.23798 5.90629 0.375 3.93827L0.431813 3.99503L15.9056 20.1277L16.032 20.2628C16.077 20.3107 16.125 20.3616 16.176 20.4135C16.5972 20.8578 17.1594 21.441 17.4758 21.7689L17.5297 21.8256C17.563 21.8589 17.5924 21.8883 17.6169 21.9157L17.7187 22.0214L16.8528 24.2752C15.5922 27.2384 13.8594 27.7013 11.7837 27.0398C11.7778 27.0368 11.772 27.0339 11.7661 27.0339C11.4262 26.9253 11.0686 26.6973 10.7434 26.4213C13.2579 28.9462 17.0487 28.7054 18.3094 26.022L19.2086 23.9238L22.9446 15.1994L27.2585 5.12828C27.4093 4.65365 27.6131 4.2025 27.857 3.77581C29.148 1.5279 31.6449 0.0521314 34.463 0.241985C37.9257 0.46707 40.7468 3.23855 41.0299 6.69115C41.1474 8.19041 40.8016 9.59768 40.1189 10.7848Z"
                      fill="#C8FF00"
                    />
                  </svg>
                </p>
              </div>
            </div>
            <p className="text-sm font-thin">
              Want to see if you{" "}
              <button className="underline">qualify for a discount?</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
