import Container from "@/pages/Shared/Container";
import React from "react";
import Ourkeycard from "../DynamicComponents/about/Ourkeycard";
import Ourkeycardright from "../DynamicComponents/about/Ourkeycardright";
import { Keybg } from "@/assets";

const Ourkey = () => {
  return (
    <section className="">
      <Container className="pt-[100px] pb-[121px] bg-[#05091D] relative">
        <div className=" w-full xl:h-[622px] h-full xl:px-0 px-4">
          <h2 className="lg:text-[56px] text-[32px] font-normal text-[#FBFBFF] text-center uppercase lg:pb-[75px] pb-[54px]">
            our <span className="font-bold"> key principles</span>
          </h2>
          <div className=" mt-[50px] relative z-50 xl:block hidden">
            <div className="absolute -top-3 left-[180px]">
              <Ourkeycard
                heading="Highest Quality"
                subheading="The purchased service is constantly monitored by our service team."
                paragraphwidth="w-[206px] text-right"
                Icon={Svgicon}
              />
            </div>
            <div className="absolute top-[140px] left-[180px]">
              <Ourkeycard
                heading="Complete Transparency"
                subheading="The purchased service is constantly monitored by our service team."
                paragraphwidth="w-[274px] text-center"
                Icon={Svgicon1}
              />
            </div>
            <div className="absolute top-[290px] left-[400px]">
              <Ourkeycard
                heading="Infinite Love <3"
                subheading="The purchased service is constantly monitored by our service team."
                paragraphwidth="w-[206px] text-right"
                Icon={Svgicon2}
              />
            </div>
          </div>
          <div className="relative z-50 xl:block hidden">
            <div className="absolute -top-20 right-40">
              <Ourkeycardright
                heading="Great Prices"
                subheading="The purchased service is constantly monitored by our service team."
                paragraphwidth="w-[206px] "
                Icon={Svgicon3}
              />
            </div>
            <div className="absolute top-[70px] right-56">
              <Ourkeycardright
                heading="100% assurance"
                subheading="The purchased service is constantly monitored by our service team."
                paragraphwidth="w-[206px]"
                Icon={Svgicon4}
              />
            </div>
            <div className="absolute top-[210px] right-80">
              <Ourkeycardright
                heading="Lightning Fast"
                subheading="The purchased service is constantly monitored by our service team."
                paragraphwidth="w-[206px]"
                Icon={Svgicon5}
              />
            </div>
          </div>
          <div className="xl:hidden block">
            <div className="flex flex-col gap-6 mt-[250px] ">
              <div className="flex gap-x-4 items-center w-full">
                <div className="w-[60px] h-[60px] rounded-full flex justify-center items-center border border-[rgba(200,255,0,0.24)] bg-[rgba(174,197,90,0.06)] backdrop-blur-[10px] flex-shrink-0">
                  <Svgicon />
                </div>

                <div className="">
                  <h4 className="lg:text-[24px] text-[20px] text-[#FBFBFF] font-semibold uppercase">
                    Highest Quality
                  </h4>
                  <p
                    className={`lg:text-[18px] text-[16px] text-[#FBFBFF] font-normal opacity-50`}
                  >
                    The purchased service is constantly monitored by our service
                    team.
                  </p>
                </div>
              </div>
              <div className="flex gap-x-4 items-center">
                <div className="w-[60px] h-[60px] rounded-full flex justify-center items-center border border-[rgba(200,255,0,0.24)] bg-[rgba(174,197,90,0.06)] backdrop-blur-[10px] flex-shrink-0">
                  <Svgicon3 />
                </div>
                <div>
                  <h4 className="lg:text-[24px] text-[20px] text-[#FBFBFF] font-semibold uppercase">
                    Great Prices
                  </h4>
                  <p
                    className={`lg:text-[18px] text-[16px] text-[#FBFBFF] font-normal opacity-50  `}
                  >
                    The purchased service is constantly monitored by our service
                    team.
                  </p>
                </div>
              </div>
              <div className="flex gap-x-4 items-center ">
                <div className="w-[60px] h-[60px] rounded-full flex justify-center items-center border border-[rgba(200,255,0,0.24)] bg-[rgba(174,197,90,0.06)] backdrop-blur-[10px] flex-shrink-0">
                  <Svgicon1 />
                </div>
                <div>
                  <h4 className="lg:text-[24px] text-[20px] text-[#FBFBFF] font-semibold uppercase">
                    Complete Transparency
                  </h4>
                  <p
                    className={`lg:text-[18px] text-[16px] text-[#FBFBFF] font-normal opacity-50 `}
                  >
                    The purchased service is constantly monitored by our service
                    team.
                  </p>
                </div>
              </div>
              <div className="flex gap-x-4 items-center ">
                <div className="w-[60px] h-[60px] rounded-full flex justify-center items-center border border-[rgba(200,255,0,0.24)] bg-[rgba(174,197,90,0.06)] backdrop-blur-[10px] flex-shrink-0">
                  <Svgicon4 />
                </div>
                <div>
                  <h4 className="lg:text-[24px] text-[20px] text-[#FBFBFF] font-semibold uppercase">
                    100% assurance
                  </h4>
                  <p
                    className={`lg:text-[18px] text-[16px] text-[#FBFBFF] font-normal opacity-50`}
                  >
                    The purchased service is constantly monitored by our service
                    team.
                  </p>
                </div>
              </div>
              <div className="flex gap-x-4 items-center">
                <div className="w-[60px] h-[60px] rounded-full flex justify-center items-center border border-[rgba(200,255,0,0.24)] bg-[rgba(174,197,90,0.06)] backdrop-blur-[10px] flex-shrink-0">
                  <Svgicon2 />
                </div>
                <div>
                  <h4 className="lg:text-[24px] text-[20px] text-[#FBFBFF] font-semibold uppercase">
                    Infinite Love 3
                  </h4>
                  <p
                    className={`lg:text-[18px] text-[16px] text-[#FBFBFF] font-normal opacity-50 `}
                  >
                    The purchased service is constantly monitored by our service
                    team.
                  </p>
                </div>
              </div>
              <div className="flex gap-x-4 items-center">
                <div className="w-[60px] h-[60px] rounded-full flex justify-center items-center border border-[rgba(200,255,0,0.24)] bg-[rgba(174,197,90,0.06)] backdrop-blur-[10px] flex-shrink-0">
                  <Svgicon5 className="size-[19px]" />
                </div>
                <div>
                  <h4 className="lg:text-[24px] text-[20px] text-[#FBFBFF] font-semibold uppercase">
                    Lightning Fast
                  </h4>
                  <p
                    className={`lg:text-[18px] text-[16px] text-[#FBFBFF] font-normal opacity-50 `}
                  >
                    The purchased service is constantly monitored by our service
                    team.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src={Keybg}
            alt="keybg"
            className="absolute xl:top-[50%] left-1/2 top-[300px] -translate-x-1/2 -translate-y-[50%]  z-0  w-[263px] xl:w-[521px]"
          />
          <div className="absolute lg:top-1/2 top-[300px] left-1/2 -translate-x-1/2 -translate-y-1/2 lg:size-[200px] size-40 bg-primaryColor blur-[200px]" />
        </div>
      </Container>
    </section>
  );
};

export default Ourkey;

const Svgicon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
  >
    <path
      d="M5 5V31H31V14.1929L26.7344 18.4586V26.7344H9.26562V9.26562H17.5414L21.8071 5H5ZM27.3168 5.32849L17.9096 14.7372L14.5485 11.3761L11.1017 14.8245L17.9095 21.6307L21.3562 18.1839L30.7635 8.77516L27.3167 5.3284L27.3168 5.32849Z"
      fill="#C8FF00"
    />
  </svg>
);
const Svgicon1 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
  >
    <g clip-path="url(#clip0_2460_15843)">
      <path
        d="M15.7499 3C18.1438 2.99984 20.4895 3.67366 22.5183 4.94435C24.5472 6.21503 26.1774 8.03125 27.2222 10.1851C28.2671 12.339 28.6844 14.7436 28.4265 17.1236C28.1686 19.5036 27.2459 21.7629 25.7639 23.643L31.2419 29.121C31.5151 29.4039 31.6663 29.7828 31.6629 30.1761C31.6595 30.5694 31.5017 30.9456 31.2236 31.2237C30.9455 31.5018 30.5693 31.6596 30.176 31.663C29.7827 31.6664 29.4038 31.5152 29.1209 31.242L23.6429 25.764C22.0461 27.0224 20.1714 27.8808 18.1754 28.2674C16.1794 28.654 14.1199 28.5576 12.1687 27.9864C10.2174 27.4152 8.43113 26.3856 6.95875 24.9836C5.48636 23.5816 4.3706 21.8478 3.70456 19.9269C3.03852 18.006 2.8415 15.9536 3.12995 13.9411C3.41841 11.9285 4.18396 10.0141 5.36275 8.35763C6.54153 6.70113 8.09937 5.35054 9.90628 4.41854C11.7132 3.48655 13.7168 3.00017 15.7499 3ZM15.7499 6C13.164 6 10.6841 7.02723 8.8556 8.85571C7.02712 10.6842 5.99989 13.1641 5.99989 15.75C5.99989 18.3359 7.02712 20.8158 8.8556 22.6443C10.6841 24.4728 13.164 25.5 15.7499 25.5C18.3358 25.5 20.8157 24.4728 22.6442 22.6443C24.4727 20.8158 25.4999 18.3359 25.4999 15.75C25.4999 13.1641 24.4727 10.6842 22.6442 8.85571C20.8157 7.02723 18.3358 6 15.7499 6ZM15.7499 7.5C17.9379 7.5 20.0363 8.36919 21.5835 9.91637C23.1307 11.4635 23.9999 13.562 23.9999 15.75C23.9999 17.938 23.1307 20.0365 21.5835 21.5836C20.0363 23.1308 17.9379 24 15.7499 24C13.5619 24 11.4634 23.1308 9.91626 21.5836C8.36909 20.0365 7.49989 17.938 7.49989 15.75C7.49989 13.562 8.36909 11.4635 9.91626 9.91637C11.4634 8.36919 13.5619 7.5 15.7499 7.5Z"
        fill="#C8FF00"
      />
    </g>
    <defs>
      <clipPath id="clip0_2460_15843">
        <rect width="36" height="36" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const Svgicon2 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
  >
    <path
      d="M24.742 5.38477C21.8398 5.38477 19.36 7.45338 17.9975 8.87954C16.6351 7.45338 14.1608 5.38477 11.26 5.38477C6.26015 5.38477 2.76953 8.86984 2.76953 13.8586C2.76953 19.3555 7.10476 22.9085 11.2988 26.3451C13.2788 27.9692 15.328 29.6474 16.8995 31.5083C17.164 31.8198 17.5517 31.9998 17.9588 31.9998H18.0391C18.4475 31.9998 18.8338 31.8185 19.0969 31.5083C20.6712 29.6474 22.7191 27.9678 24.7005 26.3451C28.8931 22.9098 33.2311 19.3569 33.2311 13.8586C33.2311 8.86984 29.7405 5.38477 24.742 5.38477Z"
      fill="#C8FF00"
    />
  </svg>
);

const Svgicon3 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
  >
    <g clip-path="url(#clip0_2460_15812)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M34.6191 24.9226C34.6191 32.5649 27.6943 36.0003 18 36.0003C8.30572 36.0003 1.38086 32.5649 1.38086 24.9766C1.38086 16.6683 5.53629 12.4589 13.8446 8.24947L10.9029 2.76975C10.7273 2.49529 10.6296 2.17833 10.6201 1.85269C10.6105 1.52704 10.6896 1.20491 10.8487 0.920647C11.0079 0.636383 11.2412 0.400643 11.5238 0.238565C11.8064 0.0764859 12.1277 -0.00585434 12.4534 0.000323774H24.1971C24.5025 0.00813574 24.8008 0.093504 25.064 0.248394C25.3272 0.403284 25.5467 0.622603 25.7018 0.885708C25.8569 1.14881 25.9424 1.44705 25.9505 1.75236C25.9585 2.05766 25.8887 2.35999 25.7477 2.63089L22.1554 8.24947C30.4611 12.4023 34.6191 16.6118 34.6191 24.9226ZM19.6071 12.5669C19.6071 12.1407 19.4378 11.7319 19.1364 11.4305C18.835 11.1291 18.4262 10.9598 18 10.9598C17.5738 10.9598 17.165 11.1291 16.8636 11.4305C16.5622 11.7319 16.3929 12.1407 16.3929 12.5669V14.1792C15.3036 14.2211 14.2671 14.6593 13.478 15.4115C12.6889 16.1636 12.2016 17.178 12.1075 18.264C12.0134 19.35 12.3191 20.4331 12.967 21.3097C13.615 22.1863 14.5607 22.7962 15.6266 23.0249L19.4143 23.8529C19.8025 23.9365 20.146 24.1608 20.3787 24.4827C20.6113 24.8046 20.7165 25.2011 20.674 25.596C20.6315 25.9908 20.4443 26.356 20.1486 26.621C19.8528 26.886 19.4694 27.0321 19.0723 27.0312H16.9277C16.5953 27.0317 16.2708 26.9291 15.9991 26.7375C15.7274 26.5459 15.5218 26.2748 15.4106 25.9615C15.3456 25.7559 15.24 25.5655 15.1 25.4015C14.9599 25.2376 14.7884 25.1036 14.5954 25.0073C14.4025 24.9111 14.1922 24.8546 13.977 24.8414C13.7618 24.8281 13.5462 24.8582 13.3429 24.93C13.1396 25.0018 12.9528 25.1138 12.7937 25.2592C12.6346 25.4047 12.5063 25.5807 12.4166 25.7767C12.3269 25.9728 12.2776 26.1849 12.2715 26.4004C12.2655 26.6159 12.3029 26.8304 12.3814 27.0312C12.6845 27.8847 13.2212 28.6359 13.9304 29.1992C14.6397 29.7625 15.4929 30.1152 16.3929 30.2172V31.8526C16.3929 32.2788 16.5622 32.6876 16.8636 32.989C17.165 33.2904 17.5738 33.4597 18 33.4597C18.4262 33.4597 18.835 33.2904 19.1364 32.989C19.4378 32.6876 19.6071 32.2788 19.6071 31.8526V30.2172C20.7418 30.0882 21.7939 29.5609 22.5763 28.729C23.3586 27.8972 23.8205 26.8147 23.8798 25.6743C23.939 24.5339 23.5918 23.4094 22.8998 22.501C22.2078 21.5925 21.216 20.959 20.1009 20.7132L16.3131 19.8852C16.0058 19.8223 15.733 19.647 15.5481 19.3936C15.3632 19.1403 15.2794 18.827 15.3131 18.5152C15.3469 18.2033 15.4958 17.9153 15.7306 17.7073C15.9655 17.4994 16.2695 17.3866 16.5831 17.3909H19.0723C19.4052 17.3885 19.7305 17.4903 20.0026 17.6822C20.2747 17.874 20.4799 18.1462 20.5894 18.4606C20.739 18.8525 21.0358 19.1704 21.4166 19.3464C21.7973 19.5224 22.2318 19.5426 22.6272 19.4026C23.0227 19.2626 23.3477 18.9736 23.5329 18.5972C23.7181 18.2209 23.7489 17.787 23.6186 17.3883C23.3178 16.5337 22.7816 15.7814 22.0719 15.2182C21.3622 14.655 20.5078 14.3037 19.6071 14.2049V12.5669Z"
        fill="#C8FF00"
      />
    </g>
    <defs>
      <clipPath id="clip0_2460_15812">
        <rect width="36" height="36" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const Svgicon4 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
  >
    <path
      d="M14.6858 24.2595L14.6835 24.2528L14.256 24.1133C12.2228 23.3946 10.439 22.1067 9.117 20.403C8.04799 19.0264 7.31345 17.4203 6.97133 15.7112C6.6292 14.0022 6.68884 12.2371 7.14555 10.5551C7.60225 8.87302 8.44353 7.32011 9.60302 6.01882C10.7625 4.71752 12.2085 3.70342 13.8269 3.05652C15.4454 2.40962 17.192 2.14761 18.929 2.29115C20.666 2.43469 22.3459 2.97987 23.8362 3.88367C25.3265 4.78747 26.5864 6.02517 27.5165 7.49915C28.4467 8.97314 29.0216 10.6431 29.196 12.3773C29.2568 12.996 28.746 13.5 28.125 13.5C27.504 13.5 27.0068 12.9938 26.9325 12.3773C26.7317 10.7861 26.1094 9.27756 25.1299 8.00764C24.1505 6.73773 22.8495 5.75259 21.3615 5.15418C19.8736 4.55576 18.2528 4.3658 16.6669 4.60395C15.0809 4.84211 13.5874 5.49972 12.3408 6.50875C11.0943 7.51778 10.14 8.84157 9.57671 10.3431C9.01343 11.8447 8.86162 13.4695 9.13699 15.0495C9.41235 16.6294 10.1049 18.1071 11.1429 19.3295C12.181 20.552 13.5268 21.4749 15.0413 22.0028C15.4232 21.306 16.0388 20.7664 16.7796 20.479C17.5203 20.1915 18.3387 20.1746 19.0907 20.4312C19.8427 20.6878 20.48 21.2016 20.8905 21.8819C21.3009 22.5623 21.4582 23.3656 21.3345 24.1505C21.2109 24.9354 20.8143 25.6515 20.2145 26.1727C19.6148 26.6939 18.8504 26.9868 18.056 26.9999C17.2615 27.0129 16.4879 26.7452 15.8714 26.2439C15.2549 25.7426 14.8351 25.0399 14.6858 24.2595ZM12.9015 26.0033C10.6979 25.1036 8.77127 23.6373 7.317 21.753C6.94736 22.3074 6.75007 22.9587 6.75 23.625V24.75C6.75 29.1848 10.935 33.75 18 33.75C25.065 33.75 29.25 29.1848 29.25 24.75V23.625C29.25 22.7299 28.8944 21.8715 28.2615 21.2385C27.6286 20.6056 26.7701 20.25 25.875 20.25H22.5C22.9719 20.8803 23.3063 21.6026 23.4814 22.3702C23.6566 23.1378 23.6686 23.9336 23.5168 24.7062C23.365 25.4788 23.0526 26.2109 22.6 26.8551C22.1474 27.4994 21.5646 28.0414 20.8892 28.4462C20.2139 28.851 19.4611 29.1095 18.6796 29.205C17.8981 29.3005 17.1052 29.2308 16.3523 29.0005C15.5993 28.7703 14.9031 28.3845 14.3087 27.8682C13.7143 27.3519 13.2349 26.7165 12.9015 26.0033ZM24.75 13.5C24.75 11.4435 23.8298 9.60076 22.3785 8.36326C21.6699 7.76307 20.8451 7.31554 19.9557 7.04866C19.0663 6.78178 18.1313 6.70129 17.2094 6.81222C16.2874 6.92316 15.3982 7.22313 14.5975 7.69338C13.7968 8.16364 13.1017 8.79405 12.5557 9.5452C12.0097 10.2963 11.6246 11.1521 11.4244 12.0588C11.2243 12.9656 11.2133 13.904 11.3924 14.8151C11.5714 15.7263 11.9365 16.5908 12.4648 17.3544C12.9932 18.1181 13.6734 18.7645 14.463 19.2533C15.4635 18.4422 16.712 17.999 18 17.9978C19.2874 17.9977 20.5359 18.4393 21.537 19.2488C22.5189 18.6447 23.3297 17.7992 23.8922 16.7928C24.4546 15.7865 24.7499 14.6529 24.75 13.5Z"
      fill="#C8FF00"
    />
  </svg>
);

const Svgicon5 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
  >
    <path
      d="M23.295 8.15547L31.434 16.311C32.4362 17.3164 32.9989 18.6781 32.9989 20.0977C32.9989 21.5173 32.4362 22.879 31.434 23.8845C30.7897 24.5304 29.9907 25.0006 29.1131 25.25C28.2356 25.4995 27.3087 25.52 26.421 25.3095V25.4955C26.4216 25.8898 26.3444 26.2804 26.1939 26.6449C26.0434 27.0094 25.8226 27.3406 25.5439 27.6197C25.2653 27.8988 24.9344 28.1201 24.5701 28.2712C24.2058 28.4222 23.8153 28.5 23.421 28.5H20.256L20.2575 27.378L20.25 27.126C20.1899 26.1218 19.7648 25.1742 19.0549 24.4615C18.3449 23.7487 17.399 23.32 16.395 23.256L16.134 23.247H14.634L14.4825 23.2575C14.2129 23.2945 13.9658 23.428 13.7869 23.6332C13.608 23.8383 13.5095 24.1013 13.5095 24.3735C13.5095 24.6457 13.608 24.9086 13.7869 25.1138C13.9658 25.3189 14.2129 25.4524 14.4825 25.4895L14.6355 25.5H16.1355L16.326 25.5105C16.7549 25.5548 17.1555 25.7457 17.4601 26.0509C17.7648 26.3561 17.9549 26.757 17.9985 27.186L18.009 27.378L18.0075 28.5H10.5075C10.1134 28.4996 9.72326 28.4215 9.35934 28.2703C8.99541 28.1191 8.66485 27.8977 8.38653 27.6186C8.10822 27.3396 7.8876 27.0085 7.73729 26.6442C7.58697 26.2799 7.50991 25.8896 7.5105 25.4955V21.7395C7.5105 21.4535 7.5275 21.1725 7.5615 20.8965C7.3005 20.9565 7.0295 20.9865 6.7485 20.9865C6.25592 20.9863 5.7682 20.889 5.31321 20.7003C4.85822 20.5116 4.44486 20.2351 4.09676 19.8865C3.74866 19.538 3.47264 19.1243 3.28445 18.6691C3.09627 18.2139 2.99961 17.7261 3 17.2335C2.99922 16.7406 3.09558 16.2525 3.28359 15.7969C3.4716 15.3413 3.74756 14.9273 4.0957 14.5785C4.44384 14.2296 4.85733 13.9528 5.31252 13.7639C5.7677 13.575 6.25567 13.4777 6.7485 13.4775C7.5675 13.478 8.36381 13.7466 9.01578 14.2423C9.66775 14.7379 10.1395 15.4334 10.359 16.2225C11.4967 15.411 12.86 14.9761 14.2575 14.979H19.674C20.5785 14.979 21.4425 15.159 22.2315 15.4815C22.4833 15.0583 22.7839 14.6661 23.127 14.313L20.139 11.3205C19.72 10.9004 19.4848 10.3313 19.4848 9.73797C19.4848 9.14466 19.72 8.57557 20.139 8.15547C20.3461 7.94771 20.5921 7.78286 20.863 7.67038C21.134 7.5579 21.4244 7.5 21.7178 7.5C22.0111 7.5 22.3015 7.5579 22.5725 7.67038C22.8434 7.78286 23.0894 7.94771 23.2965 8.15547"
      fill="#C8FF00"
    />
  </svg>
);
