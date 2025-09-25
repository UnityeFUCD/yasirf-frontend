import { CiCircleQuestion } from "react-icons/ci";
import { Button } from "../ui/button";
import { useContext } from "react";
import { AuthContext } from "@/Context/AuthContext";
import PropTypes from "prop-types";

const OrderSummary = ({ step2props }) => {
  const { step, setStep } = useContext(AuthContext);
  return (
    <div>
      {" "}
      <div className="p-8 rounded-xl bg-white/5 z-20 backdrop-blur-sm h-fit">
        <div>
          <h2 className="text-[40px] capitalize font-semibold">
            Order summary
          </h2>
          <div className="p-3">
            <div className=" ">
              <h3 className="font-thin flex items-center justify-between py-4 border-b border-gray-700">
                Nerubian Conqueror Bundle{" "}
                <span className="font-medium text-lg">$20.99</span>
              </h3>
            </div>
            <div className=" ">
              <h3 className="font-thin flex items-center justify-between py-4 border-b border-gray-700">
                Payment service fee
                <span className="font-medium text-lg">$1.00</span>
              </h3>
            </div>
            <div className=" ">
              <h3 className="font-thin flex items-center justify-between py-4 border-b border-gray-700">
                <span>
                  Apply Promo <br />
                  <span className="flex items-center gap-2">
                    {" "}
                    Points you will recieve <CiCircleQuestion />{" "}
                  </span>
                </span>
                <span className="font-medium">
                  <input
                    type="text"
                    className="px-4 py-2 bg-white/10 backdrop-blur-md outline-none"
                    placeholder="XXXX-XXXX"
                  />
                </span>
              </h3>
            </div>
            <div className=" ">
              <h3 className="font-thin flex items-center justify-between py-4   border-gray-700">
                Subtotal
                <span className="font-medium text-xl">$21.99</span>
              </h3>
            </div>
            <div className="pt-10">
              <Button
                className="rounded-none px-6 text-black font-bold"
                onClick={() => {
                  if (step2props) {
                    return setStep(2.5);
                  } else {
                    setStep(2);
                  }
                }}
              >
                get started
              </Button>
            </div>
            <p className="text-sm font-thin mt-4">
              By placing an order at overgear.com, you&apos;re agreeing <br />{" "}
              to our <button className="underline">Terms of Use</button> and{" "}
              <button className="underline">Privacy Policy.</button>
            </p>
          </div>
        </div>
      </div>
      {step === 2 && (
        <div className="mt-4 bg-white/5 px-5 py-4 rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M14.4531 23.8834C14.4531 26.0334 16.1031 27.7667 18.1531 27.7667H22.3365C24.1198 27.7667 25.5698 26.2501 25.5698 24.3834C25.5698 22.3501 24.6865 21.6334 23.3698 21.1667L16.6531 18.8334C15.3365 18.3667 14.4531 17.6501 14.4531 15.6167C14.4531 13.7501 15.9031 12.2334 17.6865 12.2334H21.8698C23.9198 12.2334 25.5698 13.9667 25.5698 16.1167"
                  stroke="#FBFBFF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 10V30"
                  stroke="#FBFBFF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.0007 36.6663C29.2054 36.6663 36.6673 29.2044 36.6673 19.9997C36.6673 10.7949 29.2054 3.33301 20.0007 3.33301C10.7959 3.33301 3.33398 10.7949 3.33398 19.9997C3.33398 29.2044 10.7959 36.6663 20.0007 36.6663Z"
                  stroke="#FBFBFF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="uppercase leading-none">
              found cheaper? <br /> we price match.
            </p>
          </div>
          <div>
            <Button className="bg-transparent border border-primaryColor rounded-none text-primaryColor">
              get started
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;

OrderSummary.propTypes = {
  step2props: PropTypes.string,
};
