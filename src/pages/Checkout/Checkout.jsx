import OrderSummary from "@/components/CheckoutPageComponents/OrderSummary";
import PaymentMethod from "@/components/CheckoutPageComponents/PaymentMethod";
import Stepper from "@/components/CheckoutPageComponents/Stepper";
import Container from "../Shared/Container";
import { useContext } from "react";
import { AuthContext } from "@/Context/AuthContext";
import ReviewOrder from "@/components/CheckoutPageComponents/ReviewOrder";
import PersonalDetails from "@/components/CheckoutPageComponents/PersonalDetails";

const Checkout = () => {
  const { step } = useContext(AuthContext);
  return (
    <Container>
      <div className="text-white">
        <Stepper />
        {step === 1 && (
          <div className="grid grid-cols-2 gap-[44px]  px-[155px] -mt-20 z-20">
            <PaymentMethod />
            <OrderSummary />
          </div>
        )}

        {step === 2 && <ReviewOrder />}
        {step === 2 && (
          <div className="bg-white/5 backdrop-blur-md px-5 py-2 rounded-xl w-fit mx-auto flex items-center gap-2 mt-20">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M20 3.33203V5.33203C20 7.21736 20 8.16003 20.5867 8.74536C21.1707 9.33203 22.1133 9.33203 24 9.33203H26"
                  stroke="#FBFBFF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.6654 14.666H21.332M10.6654 18.666H21.332M10.6654 22.666H16.2254M5.33203 21.3327V10.666C5.33203 6.89535 5.33203 5.00868 6.50403 3.83802C7.6747 2.66602 9.56136 2.66602 13.332 2.66602H18.8947C19.4387 2.66602 19.712 2.66602 19.9574 2.76735C20.2014 2.86868 20.3947 3.06068 20.78 3.44735L25.884 8.55135C26.2707 8.93802 26.4627 9.13002 26.564 9.37535C26.6654 9.61935 26.6654 9.89268 26.6654 10.4367V21.3327C26.6654 25.1033 26.6654 26.99 25.4934 28.1607C24.3227 29.3327 22.436 29.3327 18.6654 29.3327H13.332C9.56136 29.3327 7.6747 29.3327 6.50403 28.1607C5.33203 26.99 5.33203 25.1033 5.33203 21.3327Z"
                  stroke="#FBFBFF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="uppercase tracking-wide">
              Your payment will appear on your account statement as VB Limited
              Ltd.
            </span>
          </div>
        )}
        {step === 2.5 && <PersonalDetails />}
      </div>
    </Container>
  );
};

export default Checkout;
