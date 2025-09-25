import React from "react";
import Container from "@/pages/Shared/Container";

const Rewards = () => {
  return (
    <section className="">
      <Container className='bg-[#05091D] pt-[184px] pl-[210px] pr-[194px]'>
        <div className="flex justify-between relative">
          <div className="p-8 bg-gradient-to-b from-[#161A32] to-[rgba(22,26,50,0.00)] w-[353px] h-[210px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M23.0533 5.51934L22.96 10.5726C22.9467 11.266 23.3867 12.186 23.9467 12.5993L27.2534 15.106C29.3734 16.706 29.0267 18.666 26.4934 19.466L22.1867 20.8126C21.4667 21.0393 20.7067 21.826 20.52 22.5593L19.4934 26.4793C18.68 29.5726 16.6533 29.8793 14.9733 27.1593L12.6267 23.3593C12.2 22.666 11.1867 22.146 10.3867 22.186L5.93338 22.4126C2.74671 22.5726 1.84003 20.7327 3.92003 18.306L6.56 15.2393C7.05334 14.666 7.28 13.5993 7.05333 12.8793L5.70673 8.57264C4.92007 6.03931 6.33338 4.63933 8.85338 5.466L12.7867 6.75933C13.4534 6.97266 14.4534 6.82598 15.0134 6.41265L19.1201 3.45265C21.3334 1.85265 23.1067 2.78601 23.0533 5.51934Z"
                stroke="#C8FF00"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M29.2138 29.333L25.1738 25.293"
                stroke="#C8FF00"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h4 className="text-[24px] font-semibold uppercase text-[#FBFBFF] w-[289px] leading-[21px] py-[10px]">
              1 Point for Every Dollar Spent
            </h4>
            <p className="text-[18px] font-normal text-[#FBFBFF] opacity-50">
              Accumulate points with every purchase and unlock incredible
              rewards.
            </p>
          </div>
          <div className="w-[239px] mt-[120px]">
            <h2 className="text-[56px] text-[#FBFBFF] font-normal uppercase leading-[50px] text-center ">
              earn <span className="font-bold text-primaryColor">rewards</span>
            </h2>
          </div>
          <div className="p-8 bg-gradient-to-b from-[#161A32] to-[rgba(22,26,50,0.00)] w-[353px] h-[210px] mt-[280px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M5.31853 19.5479L3.29188 17.5212C2.46521 16.6945 2.46521 15.3345 3.29188 14.5079L5.31853 12.4812C5.66519 12.1345 5.9452 11.4545 5.9452 10.9745V8.10779C5.9452 6.93446 6.9052 5.97449 8.07854 5.97449H10.9452C11.4252 5.97449 12.1052 5.69453 12.4519 5.34786L14.4785 3.32117C15.3052 2.49451 16.6652 2.49451 17.4919 3.32117L19.5186 5.34786C19.8652 5.69453 20.5452 5.97449 21.0252 5.97449H23.8919C25.0652 5.97449 26.0252 6.93446 26.0252 8.10779V10.9745C26.0252 11.4545 26.3052 12.1345 26.6519 12.4812L28.6786 14.5079C29.5052 15.3345 29.5052 16.6945 28.6786 17.5212L26.6519 19.5479C26.3052 19.8946 26.0252 20.5746 26.0252 21.0546V23.9211C26.0252 25.0944 25.0652 26.0546 23.8919 26.0546H21.0252C20.5452 26.0546 19.8652 26.3345 19.5186 26.6812L17.4919 28.7079C16.6652 29.5346 15.3052 29.5346 14.4785 28.7079L12.4519 26.6812C12.1052 26.3345 11.4252 26.0546 10.9452 26.0546H8.07854C6.9052 26.0546 5.9452 25.0944 5.9452 23.9211V21.0546C5.9452 20.5612 5.66519 19.8812 5.31853 19.5479Z"
                stroke="#C8FF00"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 20L20 12"
                stroke="#C8FF00"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.3263 19.3327H19.3383"
                stroke="#C8FF00"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.6593 12.6667H12.6713"
                stroke="#C8FF00"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h4 className="text-[24px] font-semibold uppercase text-[#FBFBFF] w-[289px] leading-[21px] py-[10px]">
              Redeem for Discounts
            </h4>
            <p className="text-[18px] font-normal text-[#FBFBFF] opacity-50">
              Use your points for direct discounts or select from our premium
              service packages.
            </p>
          </div>
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 size-[200px] bg-primaryColor blur-[200px] opacity-70" />
        </div>
      </Container>
    </section>
  );
};

export default Rewards;
