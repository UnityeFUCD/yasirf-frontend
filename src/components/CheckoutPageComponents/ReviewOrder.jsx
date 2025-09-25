import Bundle from "./Bundle";
import OrderSummary from "./OrderSummary";

const ReviewOrder = () => {
  return (
    <div className="grid grid-cols-2 gap-[44px]  px-[155px] -mt-20 z-20">
      <Bundle />
      <OrderSummary step2props={"step2props"} />
    </div>
  );
};

export default ReviewOrder;
