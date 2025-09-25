import Container from "@/pages/Shared/Container";
import React from "react";

const Tires = () => {
  return (
    <section className="">
      <Container className='bg-[#05091D] pt-[104px] px-[152px]'>
        <h2 className="text-[56px] text-[#FBFBFF] font-normal uppercase leading-[50px] text-center pb-[59px]">
          Exclusive <span className="font-bold text-primaryColor">Tiers</span>
        </h2>
        <div className="flex justify-between">
          <div className="p-6 bg-gradient-to-b from-[#161A32] to-[rgba(22,26,50,0.00)] w-[362px] h-[350px] flex flex-col gap-[10px]">
            <div className="bg-[#FAC900] p-3 h-12 flex justify-between items-center">
              <h4 className="text-[24px] text-[#05091D] uppercase font-semibold">
                Gold Tier
              </h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="23"
                viewBox="0 0 28 23"
                fill="none"
              >
                <path
                  d="M27.3574 7.49121C27.1895 7.79184 26.9953 8.07095 26.7714 8.32922C25.1188 10.694 21.4252 16.0053 18.062 20.7896C15.4243 24.5464 8.78154 23.5106 6.46681 17.7112C3.62953 11.1029 0.594022 4.03018 0 2.63397L0.039107 2.67423L10.6904 14.1196L10.7773 14.2154C10.8084 14.2494 10.8414 14.2855 10.8765 14.3223C11.1664 14.6375 11.5534 15.0513 11.7712 15.2839L11.8083 15.3242C11.8312 15.3478 11.8514 15.3686 11.8683 15.3881L11.9384 15.463L11.3424 17.062C10.4746 19.1643 9.28184 19.4927 7.85309 19.0234C7.84904 19.0213 7.845 19.0192 7.84095 19.0192C7.60698 18.9421 7.36088 18.7804 7.13703 18.5846C8.86785 20.3758 11.4772 20.205 12.345 18.3013L12.964 16.8127L15.5356 10.6232L18.505 3.47822C18.6089 3.14149 18.7491 2.82142 18.917 2.51871C19.8057 0.923931 21.5244 -0.123058 23.4642 0.0116346C25.8477 0.171321 27.7896 2.13755 27.9844 4.587C28.0653 5.65065 27.8273 6.64904 27.3574 7.49121Z"
                  fill="#FBFBFF"
                />
              </svg>
            </div>
            <h2 className="text-[18px] text-[#FBFBFF] font-normal leading-[24px] pt-2">
              <span className="font-bold">
                {" "}
                Points Accumulation:
                <br />{" "}
              </span>
              Start earning points and enjoy direct discounts on various
              services.
            </h2>
            <h2 className="text-[18px] text-[#FBFBFF] font-normal  leading-[24px] pt-2">
              <span className="font-bold">
                {" "}
                Benefits: <br />{" "}
              </span>
              Access to special promotions and early updates.
            </h2>
          </div>
          <div className="p-6 bg-gradient-to-b from-[#161A32] to-[rgba(22,26,50,0.00)] w-[362px] h-[350px] flex flex-col gap-[10px]">
            <div className="bg-[#E7E6E1] p-3 h-12 flex justify-between items-center">
              <h4 className="text-[24px] text-[#05091D] uppercase font-semibold">
                Platinum Tier
              </h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="23"
                viewBox="0 0 28 23"
                fill="none"
              >
                <path
                  d="M27.3574 7.49121C27.1895 7.79184 26.9953 8.07095 26.7714 8.32922C25.1188 10.694 21.4252 16.0053 18.062 20.7896C15.4243 24.5464 8.78154 23.5106 6.46681 17.7112C3.62953 11.1029 0.594022 4.03018 0 2.63397L0.039107 2.67423L10.6904 14.1196L10.7773 14.2154C10.8084 14.2494 10.8414 14.2855 10.8765 14.3223C11.1664 14.6375 11.5534 15.0513 11.7712 15.2839L11.8083 15.3242C11.8312 15.3478 11.8514 15.3686 11.8683 15.3881L11.9384 15.463L11.3424 17.062C10.4746 19.1643 9.28184 19.4927 7.85309 19.0234C7.84904 19.0213 7.845 19.0192 7.84095 19.0192C7.60698 18.9421 7.36088 18.7804 7.13703 18.5846C8.86785 20.3758 11.4772 20.205 12.345 18.3013L12.964 16.8127L15.5356 10.6232L18.505 3.47822C18.6089 3.14149 18.7491 2.82142 18.917 2.51871C19.8057 0.923931 21.5244 -0.123058 23.4642 0.0116346C25.8477 0.171321 27.7896 2.13755 27.9844 4.587C28.0653 5.65065 27.8273 6.64904 27.3574 7.49121Z"
                  fill="#FBFBFF"
                />
              </svg>
            </div>
            <h2 className="text-[18px] text-[#FBFBFF] font-normal  leading-[24px] pt-2">
              <span className="font-bold">
                {" "}
                Upgrade for $12/Month: <br />{" "}
              </span>
              Enjoy enhanced benefits, including direct discounts and a free
              voucher for one service or product.
            </h2>
            <h2 className="text-[18px] text-[#FBFBFF] font-normal  leading-[24px] pt-2">
              <span className="font-bold">
                {" "}
                Additional Perks: <br />{" "}
              </span>
              Exclusive offers and early access to new features.
            </h2>
          </div>
          <div className="p-6 bg-gradient-to-b from-[#161A32] to-[rgba(22,26,50,0.00)] w-[362px] h-[350px] flex flex-col gap-[10px]">
            <div className="bg-primaryColor p-3 h-12 flex justify-between items-center">
              <h4 className="text-[24px] text-[#05091D] uppercase font-semibold">
                Iridescent Tier
              </h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="23"
                viewBox="0 0 28 23"
                fill="none"
              >
                <path
                  d="M27.3574 7.49121C27.1895 7.79184 26.9953 8.07095 26.7714 8.32922C25.1188 10.694 21.4252 16.0053 18.062 20.7896C15.4243 24.5464 8.78154 23.5106 6.46681 17.7112C3.62953 11.1029 0.594022 4.03018 0 2.63397L0.039107 2.67423L10.6904 14.1196L10.7773 14.2154C10.8084 14.2494 10.8414 14.2855 10.8765 14.3223C11.1664 14.6375 11.5534 15.0513 11.7712 15.2839L11.8083 15.3242C11.8312 15.3478 11.8514 15.3686 11.8683 15.3881L11.9384 15.463L11.3424 17.062C10.4746 19.1643 9.28184 19.4927 7.85309 19.0234C7.84904 19.0213 7.845 19.0192 7.84095 19.0192C7.60698 18.9421 7.36088 18.7804 7.13703 18.5846C8.86785 20.3758 11.4772 20.205 12.345 18.3013L12.964 16.8127L15.5356 10.6232L18.505 3.47822C18.6089 3.14149 18.7491 2.82142 18.917 2.51871C19.8057 0.923931 21.5244 -0.123058 23.4642 0.0116346C25.8477 0.171321 27.7896 2.13755 27.9844 4.587C28.0653 5.65065 27.8273 6.64904 27.3574 7.49121Z"
                  fill="#FBFBFF"
                />
              </svg>
            </div>
            <h2 className="text-[18px] text-[#FBFBFF]  leading-[24px] pt-2 font-bold w-[314px]">
              Gain access to a unique suite of perks revealed only when you
              reach this tier.
            </h2>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Tires;
