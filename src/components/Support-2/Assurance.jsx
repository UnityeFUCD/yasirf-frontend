import { Assurancebg, Assurancecard, Net } from "@/assets";
import Container from "@/pages/Shared/Container";
import React from "react";

const Assurance = () => {
  return (
    <section className="">
      <Container className='relative pt-[87px] pb-[100px] bg-[#05091D]'>
        <div className="flex gap-x-5">
          <img
            src={Assurancebg}
            alt="Assurancebg"
            className="h-[638px] mt-20"
          />
          <div className="-ml-40 relative">
            <img
              src={Assurancecard}
              alt="Assurancecard"
              className="h-[850px] relative z-20"
            />
            <div className="absolute top-[120px] left-[110px]">
              <Assurancesvg />
            </div>
            <div className="absolute top-[400px] left-[200px]">
              <Assurancesvg1 />
            </div>
            <div className="absolute bottom-[150px] left-[100px]">
              <Assurancesvg2 />
            </div>
          </div>
          <div className="">
            <div className="-ml-10">
              <h3 className="text-[#FBFBFF] text-[56px] font-bold uppercase w-[492px] leading-[28px]">
                Service Assurance
              </h3>
              <p className="text-[18px] font-normal text-[#FBFBFF] opacity-50 pt-[16px] leading-[27px] w-[500px]">
                Volutpat vulputate commodo consectetur diam neque. Pulvinar quis
                id sit sed. Neque vitae nunc suspendisse odio pellentesque et
                erat varius.
              </p>
            </div>
            <div className="mt-[258px]">
              <h3 className="text-[#FBFBFF] text-[56px] font-bold uppercase w-[492px] leading-[28px]">
                booster screening
              </h3>
              <p className="text-[18px] font-normal text-[#FBFBFF] opacity-50 pt-[16px] leading-[27px] w-[500px]">
                We weed out bad actors and underperforming boosters, ensuring
                that only the best, world-class boosters are available to
                customers.
              </p>
            </div>
            <div className="mt-[180px] -ml-10">
              <h3 className="text-[#FBFBFF] text-[56px] font-bold uppercase w-[492px] leading-[28px]">
                Lyft System
              </h3>
              <p className="text-[18px] font-normal text-[#FBFBFF] opacity-50 pt-[16px] leading-[27px] w-[500px]">
                This system ensures that customers are frequently updated on
                their order status and given the opportunity to verify delivery.
                Payments are held until the customer confirms they have received
                everything they expected, guaranteeing satisfaction.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[1140px] mx-auto">

        <div className="flex justify-between mt-[223px] relative">
          <div className="py-6 px-5 rounded-md bg-gradient-to-b from-[rgba(251,251,255,0.09)] to-[rgba(251,251,255,0)] w-[250px] h-[237px]">
            <Assurancesvg4 />
            <h2 className="text-[24px] font-medium uppercase text-[#FBFBFF] leading-[50px]">
              VPN protection
            </h2>
            <p className="text-[14px] font-normal text-[#FBFBFF] opacity-50 leading-[18px]">
              Lorem ipsum dolor sit amet consectetur. Lacus eget vel elementum
              elementum laoreet nisi. Sit quis non vivamus etiam enim quis sed.
            </p>
          </div>
          <div className="py-6 px-5 rounded-md bg-gradient-to-b from-[rgba(251,251,255,0.09)] to-[rgba(251,251,255,0)] w-[250px] h-[237px]">
            <Assurancesvg5 />
            <h2 className="text-[24px] font-medium uppercase text-[#FBFBFF] leading-[50px] ">
              custom orders
            </h2>
            <p className="text-[14px] font-normal text-[#FBFBFF] opacity-50 leading-[18px]">
              Lorem ipsum dolor sit amet consectetur. Lacus eget vel elementum
              elementum laoreet nisi. Sit quis non vivamus etiam enim quis sed.
            </p>
          </div>
          <div className="absolute top-36 left-1/2 -translate-x-1/2 z-50 ">
            <div className="flex justify-center">
              <Assurancesvg3 />
            </div>
            <h2 className="text-[56px] font-bold uppercase text-[#FBFBFF] leading-[50px] w-[501px] pt-8 text-center">
              How we provide <span className="text-[#C8FF00]">100%</span>{" "}
              assurance
            </h2>
          </div>
        <div className="w-[300px] h-[300px] rounded-[399px] opacity-30 bg-[#C8FF00] blur-[150px] absolute top-20 left-1/2 -translate-x-1/2 z-0"></div>
        </div>
        <div className="flex justify-between mt-[52px] relative">
          <div className="py-6 px-5 rounded-md bg-gradient-to-b from-[rgba(251,251,255,0.09)] to-[rgba(251,251,255,0)] w-[250px] h-[237px] ml-32 mt-5">
            <Assurancesvg6 />
            <h2 className="text-[24px] font-medium uppercase text-[#FBFBFF] leading-[50px]">
              fast delivery
            </h2>
            <p className="text-[14px] font-normal text-[#FBFBFF] opacity-50 leading-[18px]">
              Lorem ipsum dolor sit amet consectetur. Lacus eget vel elementum
              elementum laoreet nisi. Sit quis non vivamus etiam enim quis sed.
            </p>
          </div>
          <div className="py-6 px-5 rounded-md bg-gradient-to-b from-[rgba(251,251,255,0.09)] to-[rgba(251,251,255,0)] w-[250px] h-[237px] mr-32 mt-16">
            <Assurancesvg7 />
            <h2 className="text-[24px] font-medium uppercase text-[#FBFBFF] leading-[50px] ">
            24/7 support
            </h2>
            <p className="text-[14px] font-normal text-[#FBFBFF] opacity-50 leading-[18px]">
              Lorem ipsum dolor sit amet consectetur. Lacus eget vel elementum
              elementum laoreet nisi. Sit quis non vivamus etiam enim quis sed.
            </p>
          </div>
        </div>
        </div>
          <img src={Net} alt="Net" className="absolute top-[40%] -right-16"/>
      </Container>
    </section>
  );
};

export default Assurance;

const Assurancesvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
  >
    <path
      d="M24.4762 40.4325L24.4725 40.4213L23.76 40.1888C20.3713 38.991 17.3983 36.8446 15.195 34.005C13.4133 31.7107 12.1891 29.0338 11.6189 26.1854C11.0487 23.337 11.1481 20.3951 11.9092 17.5918C12.6704 14.7884 14.0726 12.2002 16.005 10.0314C17.9375 7.86253 20.3475 6.17237 23.0449 5.0942C25.7423 4.01603 28.6533 3.57934 31.5483 3.81858C34.4433 4.05782 37.2431 4.96644 39.727 6.47278C42.2108 7.97911 44.3106 10.042 45.8609 12.4986C47.4111 14.9552 48.3693 17.7385 48.66 20.6288C48.7612 21.66 47.91 22.5 46.875 22.5C45.84 22.5 45.0112 21.6563 44.8875 20.6288C44.5528 17.9769 43.5156 15.4626 41.8832 13.3461C40.2508 11.2295 38.0824 9.58766 35.6026 8.5903C33.1227 7.59294 30.4214 7.27634 27.7781 7.67326C25.1348 8.07018 22.6456 9.1662 20.568 10.8479C18.4904 12.5296 16.9 14.736 15.9612 17.2386C15.0224 19.7412 14.7694 22.4492 15.2283 25.0825C15.6873 27.7157 16.8415 30.1784 18.5716 32.2159C20.3017 34.2534 22.5447 35.7916 25.0687 36.6713C25.7054 35.5101 26.7314 34.6107 27.9659 34.1316C29.2005 33.6525 30.5645 33.6243 31.8178 34.052C33.0711 34.4797 34.1334 35.3359 34.8174 36.4699C35.5015 37.6038 35.7636 38.9427 35.5575 40.2508C35.3515 41.559 34.6905 42.7525 33.6909 43.6212C32.6914 44.4899 31.4174 44.9781 30.0933 44.9998C28.7692 45.0215 27.4798 44.5753 26.4524 43.7399C25.4249 42.9044 24.7251 41.7332 24.4762 40.4325ZM21.5025 43.3388C17.8298 41.8393 14.6188 39.3955 12.195 36.255C11.5789 37.1789 11.2501 38.2645 11.25 39.375V41.25C11.25 48.6413 18.225 56.25 30 56.25C41.775 56.25 48.75 48.6413 48.75 41.25V39.375C48.75 37.8832 48.1574 36.4524 47.1025 35.3975C46.0476 34.3427 44.6168 33.75 43.125 33.75H37.5C38.2865 34.8004 38.8438 36.0043 39.1357 37.2836C39.4276 38.563 39.4477 39.8894 39.1946 41.177C38.9416 42.4646 38.421 43.6848 37.6667 44.7585C36.9123 45.8323 35.9409 46.7357 34.8154 47.4103C33.6898 48.0849 32.4352 48.5158 31.1327 48.6749C29.8301 48.8341 28.5086 48.718 27.2538 48.3342C25.9989 47.9505 24.8386 47.3075 23.8479 46.447C22.8572 45.5865 22.0581 44.5276 21.5025 43.3388ZM41.25 22.5C41.25 19.0725 39.7162 16.0013 37.2975 13.9388C36.1165 12.9385 34.7419 12.1926 33.2595 11.7478C31.7771 11.303 30.2189 11.1688 28.6823 11.3537C27.1457 11.5386 25.6637 12.0386 24.3292 12.8223C22.9946 13.6061 21.8361 14.6567 20.9262 15.9087C20.0162 17.1606 19.3743 18.5868 19.0407 20.0981C18.7071 21.6094 18.6889 23.1733 18.9873 24.6919C19.2856 26.2106 19.8941 27.6513 20.7747 28.9241C21.6553 30.1968 22.789 31.2742 24.105 32.0888C25.7725 30.7369 27.8534 29.9983 30 29.9963C32.1457 29.9962 34.2265 30.7321 35.895 32.0813C37.5315 31.0745 38.8829 29.6653 39.8203 27.988C40.7577 26.3108 41.2499 24.4214 41.25 22.5Z"
      fill="#C8FF00"
    />
  </svg>
);

const Assurancesvg1 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
  >
    <g clip-path="url(#clip0_2460_17922)">
      <path
        d="M26.2501 5C30.2401 4.99973 34.1494 6.12277 37.5309 8.24058C40.9124 10.3584 43.6293 13.3854 45.3707 16.9752C47.1121 20.5651 47.8077 24.5726 47.3779 28.5393C46.9481 32.506 45.4101 36.2715 42.9402 39.405L52.0701 48.535C52.5255 49.0065 52.7775 49.638 52.7718 50.2935C52.7661 50.949 52.5032 51.576 52.0397 52.0395C51.5762 52.5031 50.9491 52.766 50.2937 52.7717C49.6382 52.7774 49.0067 52.5254 48.5351 52.07L39.4051 42.94C36.7438 45.0374 33.6194 46.4679 30.2927 47.1123C26.966 47.7566 23.5335 47.5961 20.2814 46.644C17.0294 45.6919 14.0522 43.976 11.5982 41.6393C9.14426 39.3026 7.28466 36.413 6.17459 33.2115C5.06452 30.0099 4.73616 26.5894 5.21692 23.2351C5.69767 19.8809 6.97359 16.6902 8.93824 13.9294C10.9029 11.1685 13.4993 8.91756 16.5108 7.36423C19.5223 5.81091 22.8616 5.00029 26.2501 5ZM26.2501 10C21.9404 10 17.8071 11.712 14.7597 14.7595C11.7122 17.807 10.0001 21.9402 10.0001 26.25C10.0001 30.5598 11.7122 34.693 14.7597 37.7405C17.8071 40.788 21.9404 42.5 26.2501 42.5C30.5599 42.5 34.6932 40.788 37.7406 37.7405C40.7881 34.693 42.5001 30.5598 42.5001 26.25C42.5001 21.9402 40.7881 17.807 37.7406 14.7595C34.6932 11.712 30.5599 10 26.2501 10ZM26.2501 12.5C29.8969 12.5 33.3942 13.9487 35.9729 16.5273C38.5515 19.1059 40.0001 22.6033 40.0001 26.25C40.0001 29.8967 38.5515 33.3941 35.9729 35.9727C33.3942 38.5513 29.8969 40 26.2501 40C22.6034 40 19.1061 38.5513 16.5274 35.9727C13.9488 33.3941 12.5001 29.8967 12.5001 26.25C12.5001 22.6033 13.9488 19.1059 16.5274 16.5273C19.1061 13.9487 22.6034 12.5 26.2501 12.5Z"
        fill="#C8FF00"
      />
    </g>
    <defs>
      <clipPath id="clip0_2460_17922">
        <rect width="60" height="60" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const Assurancesvg2 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
  >
    <path
      d="M8.33203 8.33301V51.6663H51.6654V23.6546L44.556 30.7639V44.557H15.4414V15.4424H29.2344L36.3438 8.33301H8.33203ZM45.5268 8.88049L29.848 24.5617L24.2462 18.9599L18.5016 24.7072L29.8478 36.0508L35.5924 30.3062L51.2711 14.6249L45.5265 8.88034L45.5268 8.88049Z"
      fill="#C8FF00"
    />
  </svg>
);

const Assurancesvg3 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="62"
    height="49"
    viewBox="0 0 62 49"
    fill="none"
  >
    <path
      d="M60.577 15.9595C60.2053 16.6 59.7753 17.1946 59.2796 17.7449C55.6203 22.7828 47.4416 34.0982 39.9945 44.291C34.1539 52.2946 19.4448 50.0877 14.3194 37.7325C8.03682 23.654 1.31533 8.58604 0 5.61149L0.086594 5.69728L23.6715 30.0809L23.8641 30.285C23.9328 30.3575 24.006 30.4344 24.0836 30.5128C24.7256 31.1843 25.5826 32.0659 26.0648 32.5614L26.1469 32.6472C26.1977 32.6975 26.2425 32.7418 26.2798 32.7833L26.4351 32.943L25.1153 36.3495C23.1938 40.8283 20.5527 41.5279 17.389 40.528C17.38 40.5236 17.3711 40.5192 17.3621 40.5192C16.844 40.355 16.2991 40.0103 15.8034 39.5932C19.6359 43.4094 25.4139 43.0455 27.3354 38.9897L28.7059 35.8185L34.4002 22.6319L40.9754 7.41012C41.2053 6.69274 41.5159 6.01086 41.8876 5.36595C43.8554 1.96837 47.6611 -0.262166 51.9564 0.0247868C57.2342 0.364989 61.534 4.55391 61.9655 9.77231C62.1447 12.0383 61.6176 14.1653 60.577 15.9595Z"
      fill="#C8FF00"
    />
  </svg>
);

const Assurancesvg4 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="78"
    height="64"
    viewBox="0 0 78 64"
    fill="none"
  >
    <g filter="url(#filter0_d_2460_17927)">
      <path
        d="M31.5 39.5C29.417 39.5 27.646 38.7715 26.187 37.3145C24.728 35.8575 23.999 34.0885 24 32.0075C24.001 29.9265 24.73 28.154 26.187 26.69C27.646 25.23 29.417 24.5 31.5 24.5C33.333 24.5 34.9 25.045 36.201 26.135C37.501 27.224 38.355 28.564 38.763 30.155H54V33.845H50.193V39.5H46.5V33.845H38.763C38.355 35.436 37.501 36.776 36.201 37.865C34.901 38.954 33.334 39.499 31.5 39.5ZM31.5 33.845C32.008 33.845 32.443 33.665 32.805 33.305C33.167 32.945 33.347 32.51 33.345 32C33.343 31.49 33.163 31.055 32.805 30.695C32.447 30.335 32.012 30.155 31.5 30.155C30.988 30.155 30.553 30.335 30.195 30.695C29.837 31.055 29.657 31.49 29.655 32C29.653 32.51 29.833 32.945 30.195 33.305C30.557 33.665 30.992 33.845 31.5 33.845Z"
        fill="#C8FF00"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_2460_17927"
        x="0"
        y="0.5"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="12" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.784314 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2460_17927"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_2460_17927"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

const Assurancesvg5 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="76"
    height="76"
    viewBox="0 0 76 76"
    fill="none"
  >
    <g filter="url(#filter0_d_2460_17939)">
      <path
        d="M24.5 24.5H36.5V36.5H24.5V24.5ZM39.5 24.5H51.5V36.5H39.5V24.5ZM24.5 39.5H36.5V51.5H24.5V39.5ZM47 39.5H44V44H39.5V47H44V51.5H47V47H51.5V44H47V39.5Z"
        fill="#C8FF00"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_2460_17939"
        x="0.5"
        y="0.5"
        width="75"
        height="75"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="12" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.784314 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2460_17939"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_2460_17939"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

const Assurancesvg6 = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="66" viewBox="0 0 80 66" fill="none">
    <g filter="url(#filter0_d_2460_17880)">
      <path d="M53.3333 24H36C34.5333 24 33.3333 25.2462 33.3333 26.7692V39.2308C33.3333 39.9652 33.6143 40.6696 34.1144 41.1889C34.6145 41.7082 35.2928 42 36 42H53.3333C54.8133 42 56 40.7677 56 39.2308V26.7692C56 26.0348 55.719 25.3304 55.219 24.8111C54.7189 24.2918 54.0406 24 53.3333 24ZM53.3333 29.0815L44.6667 33.6923L36 29.0815V26.7692L44.6667 31.3523L53.3333 26.7692V29.0815ZM30.6667 39.2308C30.6667 39.4662 30.7067 39.6877 30.7333 39.9231H25.3333C24.5973 39.9231 24 39.3 24 38.5385C24 37.7769 24.5973 37.1538 25.3333 37.1538H30.6667V39.2308ZM28 26.0769H30.7333C30.7067 26.3123 30.6667 26.5338 30.6667 26.7692V28.8462H28C27.2667 28.8462 26.6667 28.2231 26.6667 27.4615C26.6667 26.7 27.2667 26.0769 28 26.0769ZM25.3333 33C25.3333 32.2385 25.9333 31.6154 26.6667 31.6154H30.6667V34.3846H26.6667C25.9333 34.3846 25.3333 33.7615 25.3333 33Z" fill="#C8FF00"/>
    </g>
    <defs>
      <filter id="filter0_d_2460_17880" x="0" y="0" width="80" height="66" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="12"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.784314 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2460_17880"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2460_17880" result="shape"/>
      </filter>
    </defs>
  </svg>
  );
  const Assurancesvg7 = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
    <g filter="url(#filter0_d_2460_17933)">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M39.9703 27.4297C39.0148 27.4124 38.0652 27.5837 37.176 27.9339C36.2868 28.284 35.4754 28.806 34.7881 29.4701C34.1009 30.1341 33.5514 30.9272 33.171 31.8039C32.7907 32.6805 32.5869 33.6236 32.5714 34.5791V44.5719C32.5714 45.178 32.3306 45.7594 31.902 46.188C31.4733 46.6167 30.8919 46.8575 30.2857 46.8575H27.4286C26.5193 46.8575 25.6472 46.4963 25.0042 45.8533C24.3612 45.2104 24 44.3383 24 43.429V38.8578C24 37.9485 24.3612 37.0765 25.0042 36.4335C25.6472 35.7906 26.5193 35.4294 27.4286 35.4294H29.1429V34.538C29.1637 33.1332 29.4611 31.7463 30.018 30.4565C30.575 29.1667 31.3806 27.9992 32.3888 27.0207C33.397 26.0423 34.5881 25.272 35.894 24.7539C37.2 24.2358 38.5952 23.98 40 24.0012C41.4048 23.98 42.8 24.2358 44.106 24.7539C45.4119 25.272 46.603 26.0423 47.6112 27.0207C48.6194 27.9992 49.425 29.1667 49.982 30.4565C50.5389 31.7463 50.8363 33.1332 50.8571 34.538V35.4294H52.5714C53.4807 35.4294 54.3528 35.7906 54.9958 36.4335C55.6388 37.0765 56 37.9485 56 38.8578V43.429C56 44.3383 55.6388 45.2104 54.9958 45.8533C54.3528 46.4963 53.4807 46.8575 52.5714 46.8575H50.8571V48.0003C50.8574 49.5448 50.289 51.0354 49.2603 52.1876C48.2317 53.3397 46.8147 54.0728 45.28 54.2469C44.982 54.779 44.5473 55.222 44.021 55.5302C43.4947 55.8383 42.8956 56.0005 42.2857 56H38.8571C37.9478 56 37.0758 55.6388 36.4328 54.9958C35.7898 54.3529 35.4286 53.4808 35.4286 52.5716C35.4286 51.6623 35.7898 50.7902 36.4328 50.1473C37.0758 49.5043 37.9478 49.1431 38.8571 49.1431H42.2857C43.5246 49.1431 44.6103 49.7991 45.2114 50.7842C45.8414 50.6394 46.4037 50.2853 46.8064 49.7796C47.2091 49.274 47.4284 48.6467 47.4286 48.0003V34.5768C47.4129 33.6164 47.207 32.6686 46.8228 31.7882C46.4386 30.9079 45.8836 30.1124 45.1901 29.4478C44.4966 28.7832 43.6782 28.2626 42.7822 27.9162C41.8863 27.5698 40.9305 27.4045 39.9703 27.4297Z" fill="#C8FF00"/>
    </g>
    <defs>
      <filter id="filter0_d_2460_17933" x="0" y="0" width="80" height="80" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="12"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.784314 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2460_17933"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2460_17933" result="shape"/>
      </filter>
    </defs>
  </svg>
  );
  