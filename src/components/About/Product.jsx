import { Productbg } from "@/assets";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Container from "@/pages/Shared/Container";
import Productcard from "../DynamicComponents/about/Productcard";

const Product = () => {
  return (
    <section className="lg:block hidden">
      <Container className="relative pt-[66px] pb-[181px] lg:pl-[120px] px-4">
        <div className="relative z-50">
        <h2 className="xl:text-[56px] text-[32px] leading-10 font-normal text-[#FBFBFF] uppercase">
          products and <span className="font-bold"> services</span>
        </h2>
        <Tabs defaultValue="account" className="w-full">
          <TabsList>
            <div className="xl:flex  gap-x-4 pt-6">
              <TabsTrigger
                value="account"
                className="text-white border border-white rounded-none data-[state=active]:bg-primaryColor data-[state=active]:border-none text-[16px] font-bold uppercase  w-[126px] h-[50px] data-[state=active]:text-[#05091D]"
              >
                get started
              </TabsTrigger>
              <TabsTrigger
                value="password"
                className="text-white border border-white rounded-none data-[state=active]:bg-primaryColor data-[state=active]:border-none text-[16px] font-bold uppercase  w-[126px] h-[50px] data-[state=active]:text-[#05091D]"
              >
                get started
              </TabsTrigger>
              <TabsTrigger
                value="password1"
                className="text-white border border-white rounded-none data-[state=active]:bg-primaryColor data-[state=active]:border-none text-[16px] font-bold uppercase  w-[126px] h-[50px] data-[state=active]:text-[#05091D]"
              >
                get started
              </TabsTrigger>
            </div>
          </TabsList>

          <TabsContent value="account">
            <div className="xl:mt-[64px] mt-[120px]">
              <p className="text-[18px] font-normal font-Manpore text-[#FBFBFF] xl:w-[718px] w-full">
                With Vanguard Boost, you’ll find skilled pro players ready to
                guide you through personalized lessons.
              </p>
              <h4 className="py-[34px] text-[#FBFBFF] text-[24px] font-semibold uppercase">
                Here are a few tips for getting the most out of coaching:
              </h4>
              <div className="flex flex-wrap gap-x-8 items-start">
                <Productcard
                  para="Don’t hesitate to ask your coach any questions—they’re here to help."
                  Icon={productsvg}
                />
                <Productcard
                  para="Before purchasing, request a link to the coach’s character profile or equivalent credentials for verification."
                  Icon={productsvg1}
                />
                <Productcard
                  para="Be open to feedback and suggestions from your coach, even if they seem unconventional at first."
                  Icon={productsvg2}
                />
                <Productcard
                  para="Avoid discussing order details in the in-game chat to ensure a smooth experience."
                  Icon={productsvg3}
                />
                <Productcard
                  para="With the right coach, you’ll see your skills grow faster than ever."
                  Icon={productsvg4}
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="password">
            <div className="xl:mt-[64px] mt-[120px] xl:w-[718px] w-full">
              <p className="text-[18px] font-normal font-Manpore text-[#FBFBFF] w-[718px]">
                For piloted services with Vanguard Boost, your account details
                will be required to allow the booster to complete the service on
                your behalf. After placing an order, you’ll securely provide
                your login information, and the booster will log in to carry out
                the service efficiently and securely
              </p>
              <h4 className="py-[34px] text-[#FBFBFF] text-[24px] font-semibold uppercase">
                Here are a few tips for getting the most out of coaching:
              </h4>
              <div className="flex gap-x-8 items-start">
                <Productcard
                  para="Enable any account security features, such as two-factor authentication, and temporarily disable any restrictions that may hinder the booster’s access."
                  parawidth="w-[197px]"
                  Icon={productsvg5}
                />
                <Productcard
                  para="Avoid logging into your account during the service to prevent interruptions."
                  parawidth="w-[197px]"
                  Icon={productsvg6}
                />
                <Productcard
                  para="Trust that your booster will follow all instructions to complete the order as smoothly and quickly as possible."
                  parawidth="w-[197px]"
                  Icon={productsvg7}
                />
                <Productcard
                  para="Your account’s security and privacy are our top priorities throughout the process.  "
                  parawidth="w-[197px]"
                  Icon={productsvg8}
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="password1" className="xl:w-[718px] w-full">
            <div className="xl:mt-[64px] mt-[120px]">
              <p className="text-[18px] font-normal font-Manpore text-[#FBFBFF] w-[718px]">
                The majority of services on Vanguard Boost do not require you to
                share your account details with anyone. After placing an order,
                simply provide your in-game nickname to the booster, go online,
                and wait for an invitation. You can either participate in the
                process or follow the group and let them handle everything.
              </p>
              <h4 className="py-[34px] text-[#FBFBFF] text-[24px] font-semibold uppercase">
                Here are a few tips for getting the most out of coaching:
              </h4>
              <div className="flex gap-x-8">
                <Productcard
                  para="Avoid chatting with your booster in the in-game chat ( we use website chat or discord ), especially about anything related to your order"
                  parawidth="w-[343px]"
                  Icon={productsvg9}
                />
                <Productcard
                  para="Follow the booster’s instructions to ensure your run is quicker and smoother."
                  parawidth="w-[343px]"
                  Icon={productsvg10}
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
        </div>
        <img
          src={Productbg}
          alt="productbg"
          className="absolute top-0 left-0 h-full w-full z-0"
        />
      </Container>
    </section>
  );
};

export default Product;

const productsvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="78"
    height="78"
    viewBox="0 0 78 78"
    fill="none"
  >
    <g filter="url(#filter0_d_2460_15924)">
      <path
        d="M38.925 48C39.45 48 39.894 47.8185 40.257 47.4555C40.62 47.0925 40.801 46.649 40.8 46.125C40.799 45.601 40.618 45.157 40.257 44.793C39.896 44.429 39.452 44.248 38.925 44.25C38.398 44.252 37.9545 44.4335 37.5945 44.7945C37.2345 45.1555 37.053 45.599 37.05 46.125C37.047 46.651 37.2285 47.095 37.5945 47.457C37.9605 47.819 38.404 48 38.925 48ZM37.575 42.225H40.35C40.35 41.4 40.444 40.75 40.632 40.275C40.82 39.8 41.351 39.15 42.225 38.325C42.875 37.675 43.3875 37.056 43.7625 36.468C44.1375 35.88 44.325 35.174 44.325 34.35C44.325 32.95 43.8125 31.875 42.7875 31.125C41.7625 30.375 40.55 30 39.15 30C37.725 30 36.569 30.375 35.682 31.125C34.795 31.875 34.176 32.775 33.825 33.825L36.3 34.8C36.425 34.35 36.7065 33.8625 37.1445 33.3375C37.5825 32.8125 38.251 32.55 39.15 32.55C39.95 32.55 40.55 32.769 40.95 33.207C41.35 33.645 41.55 34.126 41.55 34.65C41.55 35.15 41.4 35.619 41.1 36.057C40.8 36.495 40.425 36.901 39.975 37.275C38.875 38.25 38.2 38.9875 37.95 39.4875C37.7 39.9875 37.575 40.9 37.575 42.225ZM39 54C36.925 54 34.975 53.6065 33.15 52.8195C31.325 52.0325 29.7375 50.9635 28.3875 49.6125C27.0375 48.2615 25.969 46.674 25.182 44.85C24.395 43.026 24.001 41.076 24 39C23.999 36.924 24.393 34.974 25.182 33.15C25.971 31.326 27.0395 29.7385 28.3875 28.3875C29.7355 27.0365 31.323 25.968 33.15 25.182C34.977 24.396 36.927 24.002 39 24C41.073 23.998 43.023 24.392 44.85 25.182C46.677 25.972 48.2645 27.0405 49.6125 28.3875C50.9605 29.7345 52.0295 31.322 52.8195 33.15C53.6095 34.978 54.003 36.928 54 39C53.997 41.072 53.603 43.022 52.818 44.85C52.033 46.678 50.9645 48.2655 49.6125 49.6125C48.2605 50.9595 46.673 52.0285 44.85 52.8195C43.027 53.6105 41.077 54.004 39 54Z"
        fill="#C8FF00"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_2460_15924"
        x="0"
        y="0"
        width="78"
        height="78"
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
          result="effect1_dropShadow_2460_15924"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_2460_15924"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
const productsvg1 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="80"
    height="81"
    viewBox="0 0 80 81"
    fill="none"
  >
    <g filter="url(#filter0_d_2460_15928)">
      <path
        d="M38.0752 40C40.1638 40 42.1668 39.1703 43.6437 37.6935C45.1205 36.2166 45.9502 34.2136 45.9502 32.125C45.9502 30.0364 45.1205 28.0334 43.6437 26.5565C42.1668 25.0797 40.1638 24.25 38.0752 24.25C35.9866 24.25 33.9836 25.0797 32.5067 26.5565C31.0299 28.0334 30.2002 30.0364 30.2002 32.125C30.2002 34.2136 31.0299 36.2166 32.5067 37.6935C33.9836 39.1703 35.9866 40 38.0752 40ZM28.5127 42.25C27.4684 42.25 26.4669 42.6648 25.7285 43.4033C24.99 44.1417 24.5752 45.1432 24.5752 46.1875V46.75C24.5752 49.4421 26.2886 51.7191 28.7208 53.2671C31.1666 54.8241 34.4774 55.75 38.0752 55.75C38.2717 55.75 38.4671 55.7474 38.6613 55.7421C37.7947 54.7702 37.2277 53.5683 37.0288 52.2814C36.8298 50.9945 37.0073 49.6775 37.5399 48.4892C38.0725 47.3009 38.9375 46.292 40.0305 45.5842C41.1236 44.8764 42.398 44.4999 43.7002 44.5H50.4502C50.7089 44.5 50.9643 44.5142 51.2163 44.5427C50.9016 43.8583 50.3972 43.2785 49.7629 42.8721C49.1286 42.4657 48.391 42.2498 47.6377 42.25H28.5127ZM45.3877 47.3125C45.3877 47.0141 45.2692 46.728 45.0582 46.517C44.8472 46.306 44.5611 46.1875 44.2627 46.1875H43.7002C42.3575 46.1875 41.0699 46.7209 40.1205 47.6703C39.1711 48.6197 38.6377 49.9073 38.6377 51.25C38.6377 52.5927 39.1711 53.8803 40.1205 54.8297C41.0699 55.7791 42.3575 56.3125 43.7002 56.3125H44.2627C44.5611 56.3125 44.8472 56.194 45.0582 55.983C45.2692 55.772 45.3877 55.4859 45.3877 55.1875C45.3877 54.8891 45.2692 54.603 45.0582 54.392C44.8472 54.181 44.5611 54.0625 44.2627 54.0625H43.7002C42.9543 54.0625 42.2389 53.7662 41.7115 53.2387C41.184 52.7113 40.8877 51.9959 40.8877 51.25C40.8877 50.5041 41.184 49.7887 41.7115 49.2613C42.2389 48.7338 42.9543 48.4375 43.7002 48.4375H44.2627C44.5611 48.4375 44.8472 48.319 45.0582 48.108C45.2692 47.897 45.3877 47.6109 45.3877 47.3125ZM49.8877 46.1875C49.5893 46.1875 49.3032 46.306 49.0922 46.517C48.8812 46.728 48.7627 47.0141 48.7627 47.3125C48.7627 47.6109 48.8812 47.897 49.0922 48.108C49.3032 48.319 49.5893 48.4375 49.8877 48.4375H50.4502C51.1961 48.4375 51.9115 48.7338 52.4389 49.2613C52.9664 49.7887 53.2627 50.5041 53.2627 51.25C53.2627 51.9959 52.9664 52.7113 52.4389 53.2387C51.9115 53.7662 51.1961 54.0625 50.4502 54.0625H49.8877C49.5893 54.0625 49.3032 54.181 49.0922 54.392C48.8812 54.603 48.7627 54.8891 48.7627 55.1875C48.7627 55.4859 48.8812 55.772 49.0922 55.983C49.3032 56.194 49.5893 56.3125 49.8877 56.3125H50.4502C51.7929 56.3125 53.0805 55.7791 54.0299 54.8297C54.9793 53.8803 55.5127 52.5927 55.5127 51.25C55.5127 49.9073 54.9793 48.6197 54.0299 47.6703C53.0805 46.7209 51.7929 46.1875 50.4502 46.1875H49.8877ZM44.2627 50.125C43.9643 50.125 43.6782 50.2435 43.4672 50.4545C43.2562 50.6655 43.1377 50.9516 43.1377 51.25C43.1377 51.5484 43.2562 51.8345 43.4672 52.0455C43.6782 52.2565 43.9643 52.375 44.2627 52.375H49.8877C50.1861 52.375 50.4722 52.2565 50.6832 52.0455C50.8942 51.8345 51.0127 51.5484 51.0127 51.25C51.0127 50.9516 50.8942 50.6655 50.6832 50.4545C50.4722 50.2435 50.1861 50.125 49.8877 50.125H44.2627Z"
        fill="#C8FF00"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_2460_15928"
        x="0.575195"
        y="0.25"
        width="78.9375"
        height="80.0625"
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
          result="effect1_dropShadow_2460_15928"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_2460_15928"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
const productsvg2 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="76"
    height="79"
    viewBox="0 0 76 79"
    fill="none"
  >
    <g filter="url(#filter0_d_2460_15932)">
      <path
        d="M34.5071 50.8507L34.0234 52.4415C27.7931 51.8902 24.1504 47.64 24.1504 43.5V42.375C24.1504 41.4799 24.506 40.6214 25.1389 39.9885C25.7718 39.3556 26.6303 39 27.5254 39H37.7404C36.4757 39.8871 35.4435 41.066 34.7315 42.4369C34.0194 43.8078 33.6484 45.3302 33.6499 46.875C33.6499 48.2925 33.9559 49.638 34.5071 50.8507ZM35.4004 24.375C37.0414 24.375 38.6152 25.0269 39.7756 26.1873C40.936 27.3477 41.5879 28.9215 41.5879 30.5625C41.5879 32.2035 40.936 33.7773 39.7756 34.9377C38.6152 36.0981 37.0414 36.75 35.4004 36.75C33.7594 36.75 32.1855 36.0981 31.0252 34.9377C29.8648 33.7773 29.2129 32.2035 29.2129 30.5625C29.2129 28.9215 29.8648 27.3477 31.0252 26.1873C32.1855 25.0269 33.7594 24.375 35.4004 24.375ZM51.1504 46.875C51.1508 48.2459 50.7932 49.5932 50.1132 50.7835C49.4331 51.9739 48.4541 52.9661 47.273 53.662C46.0918 54.3579 44.7495 54.7334 43.3787 54.7514C42.0079 54.7694 40.6561 54.4292 39.4571 53.7645L36.3251 54.7162C36.201 54.7541 36.0689 54.7576 35.943 54.7262C35.8171 54.6947 35.702 54.6296 35.6103 54.5379C35.5185 54.4461 35.4534 54.3311 35.422 54.2052C35.3906 54.0792 35.394 53.9471 35.4319 53.823L36.3859 50.6932C35.8038 49.6418 35.47 48.4711 35.4102 47.2708C35.3503 46.0705 35.566 44.8724 36.0407 43.7683C36.5154 42.6643 37.2364 41.6835 38.1487 40.9011C39.061 40.1187 40.1402 39.5555 41.3037 39.2546C42.4672 38.9537 43.6842 38.9231 44.8614 39.1651C46.0385 39.4071 47.1447 39.9154 48.0951 40.6509C49.0456 41.3865 49.815 42.3298 50.3446 43.4086C50.8742 44.4875 51.1498 45.6732 51.1504 46.875ZM41.0254 43.5C40.727 43.5 40.4409 43.6185 40.2299 43.8295C40.0189 44.0405 39.9004 44.3266 39.9004 44.625C39.9004 44.9234 40.0189 45.2095 40.2299 45.4205C40.4409 45.6315 40.727 45.75 41.0254 45.75H45.5254C45.8238 45.75 46.1099 45.6315 46.3209 45.4205C46.5319 45.2095 46.6504 44.9234 46.6504 44.625C46.6504 44.3266 46.5319 44.0405 46.3209 43.8295C46.1099 43.6185 45.8238 43.5 45.5254 43.5H41.0254ZM39.9004 49.125C39.9004 49.4234 40.0189 49.7095 40.2299 49.9205C40.4409 50.1315 40.727 50.25 41.0254 50.25H43.2754C43.5738 50.25 43.8599 50.1315 44.0709 49.9205C44.2819 49.7095 44.4004 49.4234 44.4004 49.125C44.4004 48.8266 44.2819 48.5405 44.0709 48.3295C43.8599 48.1185 43.5738 48 43.2754 48H41.0254C40.727 48 40.4409 48.1185 40.2299 48.3295C40.0189 48.5405 39.9004 48.8266 39.9004 49.125Z"
        fill="#C8FF00"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_2460_15932"
        x="0.150391"
        y="0.375"
        width="75"
        height="78.377"
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
          result="effect1_dropShadow_2460_15932"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_2460_15932"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
const productsvg3 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="73"
    height="78"
    viewBox="0 0 73 78"
    fill="none"
  >
    <g filter="url(#filter0_d_2460_15936)">
      <path
        d="M35.0996 46.5H38.0996V37.5H35.0996V46.5ZM36.5996 34.5C37.0246 34.5 37.3811 34.356 37.6691 34.068C37.9571 33.78 38.1006 33.424 38.0996 33C38.0986 32.576 37.9546 32.22 37.6676 31.932C37.3806 31.644 37.0246 31.5 36.5996 31.5C36.1746 31.5 35.8186 31.644 35.5316 31.932C35.2446 32.22 35.1006 32.576 35.0996 33C35.0986 33.424 35.2426 33.7805 35.5316 34.0695C35.8206 34.3585 36.1766 34.502 36.5996 34.5ZM36.5996 54C33.1246 53.125 30.2556 51.131 27.9926 48.018C25.7296 44.905 24.5986 41.449 24.5996 37.65V28.5L36.5996 24L48.5996 28.5V37.65C48.5996 41.45 47.4686 44.9065 45.2066 48.0195C42.9446 51.1325 40.0756 53.126 36.5996 54Z"
        fill="#C8FF00"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_2460_15936"
        x="0.599609"
        y="0"
        width="72"
        height="78"
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
          result="effect1_dropShadow_2460_15936"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_2460_15936"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
const productsvg4 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="76"
    height="76"
    viewBox="0 0 76 76"
    fill="none"
  >
    <g filter="url(#filter0_d_2460_15940)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M44.7528 24.4729C44.8582 24.3045 45.0113 24.171 45.1929 24.0892C45.3745 24.0075 45.5764 23.9811 45.7731 24.0134L50.9574 24.8742C51.221 24.9179 51.4564 25.064 51.6118 25.2803C51.7672 25.4966 51.8299 25.7655 51.7862 26.0278L50.9232 31.1881C50.8902 31.3838 50.7998 31.5653 50.6632 31.7097C50.5266 31.8542 50.35 31.9551 50.1558 31.9998C49.9616 32.0445 49.7584 32.0308 49.572 31.9607C49.3856 31.8905 49.2242 31.7669 49.1083 31.6055L47.7089 29.6593L40.5021 34.2418C40.1947 34.4375 39.8267 34.516 39.4657 34.4629C39.1048 34.4098 38.7753 34.2287 38.538 33.9529L34.5192 29.2781L27.0039 33.1203C26.6471 33.3028 26.2322 33.3368 25.8502 33.2149C25.4683 33.093 25.1507 32.8251 24.9672 32.4702C24.7838 32.1153 24.7496 31.7024 24.8721 31.3224C24.9946 30.9423 25.2638 30.6263 25.6206 30.4438L34.2006 26.0559C34.5035 25.9011 34.8501 25.8525 35.1842 25.918C35.5184 25.9836 35.8205 26.1594 36.0417 26.417L39.9818 31.0016L45.9506 27.2055L44.7871 25.5864C44.6714 25.425 44.6064 25.233 44.6003 25.0348C44.5942 24.8366 44.6473 24.6411 44.7528 24.4729ZM31.553 34.3241L25.7012 37.6546C25.47 37.786 25.2778 37.9758 25.144 38.2048C25.0101 38.4338 24.9394 38.6938 24.939 38.9587V50.4952C24.939 51.3259 25.6165 52 26.4513 52H31.553V34.3241ZM34.0736 52H41.47V38.3328L38.1448 39.986L34.8217 34.1997C34.6535 33.9057 34.3907 33.6767 34.0756 33.5496L34.0736 52ZM49.6407 52H43.9906V37.0788L48.9652 34.6029C49.1957 34.4884 49.4519 34.4344 49.7093 34.446C49.9668 34.4577 50.217 34.5346 50.4362 34.6695C50.6553 34.8043 50.8362 34.9927 50.9617 35.2167C51.0872 35.4406 51.153 35.6928 51.153 35.9492V50.4952C51.153 50.8943 50.9937 51.2771 50.7101 51.5593C50.4265 51.8415 50.0418 52 49.6407 52Z"
        fill="#C8FF00"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_2460_15940"
        x="0.799805"
        y="0"
        width="75"
        height="76"
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
          result="effect1_dropShadow_2460_15940"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_2460_15940"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

const productsvg5 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="78"
    height="78"
    viewBox="0 0 78 78"
    fill="none"
  >
    <g filter="url(#filter0_d_2460_16064)">
      <path
        d="M37.5 24C35.5109 24 33.6032 24.7902 32.1967 26.1967C30.7902 27.6032 30 29.5109 30 31.5C30 33.4891 30.7902 35.3968 32.1967 36.8033C33.6032 38.2098 35.5109 39 37.5 39C39.4891 39 41.3968 38.2098 42.8033 36.8033C44.2098 35.3968 45 33.4891 45 31.5C45 29.5109 44.2098 27.6032 42.8033 26.1967C41.3968 24.7902 39.4891 24 37.5 24ZM37.5 40.5C33.9075 40.5 30.6375 41.541 28.233 43.008C27.033 43.74 26.007 44.604 25.266 45.543C24.537 46.464 24 47.5695 24 48.75C24 50.0175 24.6165 51.0165 25.5045 51.729C26.3445 52.404 27.453 52.851 28.6305 53.163C30.9975 53.7885 34.1565 54 37.5 54L38.5275 53.9925C38.7787 53.989 39.025 53.9226 39.2439 53.7991C39.4627 53.6757 39.647 53.4993 39.7799 53.286C39.9128 53.0728 39.99 52.8296 40.0044 52.5788C40.0189 52.328 39.9701 52.0776 39.8625 51.8505C39.2937 50.6466 38.9991 49.3315 39 48C39 46.122 39.5745 44.382 40.5555 42.9405C40.7013 42.7263 40.7892 42.4779 40.8104 42.2197C40.8317 41.9614 40.7858 41.7021 40.677 41.4669C40.5682 41.2317 40.4004 41.0286 40.1898 40.8776C39.9793 40.7266 39.7332 40.6326 39.4755 40.605C38.8295 40.535 38.171 40.5 37.5 40.5ZM48.474 42.0765C48.1663 41.974 47.8337 41.974 47.526 42.0765L43.026 43.5765C42.7272 43.676 42.4673 43.8671 42.2831 44.1226C42.099 44.3781 41.9999 44.6851 42 45V47.5065C41.9998 49.1109 42.5912 50.6591 43.6612 51.8547C44.7311 53.0503 46.2044 53.8093 47.799 53.9865C47.934 54.0015 48.068 54.0015 48.201 53.9865C49.7956 53.8093 51.2689 53.0503 52.3388 51.8547C53.4088 50.6591 54.0002 49.1109 54 47.5065V45C54.0001 44.6851 53.901 44.3781 53.7169 44.1226C53.5327 43.8671 53.2728 43.676 52.974 43.5765L48.474 42.0765Z"
        fill="#C8FF00"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_2460_16064"
        x="0"
        y="0"
        width="78"
        height="78"
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
          result="effect1_dropShadow_2460_16064"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_2460_16064"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
const productsvg6 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="77"
    height="78"
    viewBox="0 0 77 78"
    fill="none"
  >
    <g filter="url(#filter0_d_2460_16070)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M29 24C27.8065 24 26.6619 24.4741 25.818 25.318C24.9741 26.1619 24.5 27.3065 24.5 28.5V49.5C24.5 50.6935 24.9741 51.8381 25.818 52.682C26.6619 53.5259 27.8065 54 29 54H38C39.1935 54 40.3381 53.5259 41.182 52.682C42.0259 51.8381 42.5 50.6935 42.5 49.5V28.5C42.5 27.3065 42.0259 26.1619 41.182 25.318C40.3381 24.4741 39.1935 24 38 24H29ZM44.4395 31.9395C44.7208 31.6583 45.1023 31.5003 45.5 31.5003C45.8977 31.5003 46.2792 31.6583 46.5605 31.9395L52.5605 37.9395C52.8417 38.2208 52.9997 38.6023 52.9997 39C52.9997 39.3977 52.8417 39.7792 52.5605 40.0605L46.5605 46.0605C46.2776 46.3337 45.8987 46.4849 45.5054 46.4815C45.1121 46.4781 44.7359 46.3203 44.4578 46.0422C44.1797 45.7641 44.0219 45.3879 44.0185 44.9946C44.0151 44.6013 44.1663 44.2224 44.4395 43.9395L47.879 40.5H35C34.6022 40.5 34.2206 40.342 33.9393 40.0607C33.658 39.7794 33.5 39.3978 33.5 39C33.5 38.6022 33.658 38.2206 33.9393 37.9393C34.2206 37.658 34.6022 37.5 35 37.5H47.879L44.4395 34.0605C44.1583 33.7792 44.0003 33.3977 44.0003 33C44.0003 32.6023 44.1583 32.2208 44.4395 31.9395Z"
        fill="#C8FF00"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_2460_16070"
        x="0.5"
        y="0"
        width="76.5"
        height="78"
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
          result="effect1_dropShadow_2460_16070"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_2460_16070"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
const productsvg7 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="84"
    height="84"
    viewBox="0 0 84 84"
    fill="none"
  >
    <g filter="url(#filter0_d_2460_16074)">
      <path
        d="M49.8405 49.0053L53.1255 59.1183L42.006 51.0363L49.8405 49.0053ZM60 37.9653H46.2525L42.0075 24.8838L37.7475 37.9683L24 37.9503L35.133 46.0458L30.873 59.1168L42.006 51.0363L48.8805 46.0458L60 37.9653Z"
        fill="#C8FF00"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_2460_16074"
        x="0"
        y="0.883789"
        width="84"
        height="82.2344"
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
          result="effect1_dropShadow_2460_16074"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_2460_16074"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

const productsvg8 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="76"
    height="82"
    viewBox="0 0 76 82"
    fill="none"
  >
    <g filter="url(#filter0_d_2460_16078)">
      <path
        d="M38 24.5L24.5 30.5V39.5C24.5 47.825 30.26 55.61 38 57.5C45.74 55.61 51.5 47.825 51.5 39.5V30.5L38 24.5ZM38 40.985H48.5C47.705 47.165 43.58 52.67 38 54.395V41H27.5V32.45L38 27.785V40.985Z"
        fill="#C8FF00"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_2460_16078"
        x="0.5"
        y="0.5"
        width="75"
        height="81"
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
          result="effect1_dropShadow_2460_16078"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_2460_16078"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

const productsvg9 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="78"
    height="78"
    viewBox="0 0 78 78"
    fill="none"
  >
    <g filter="url(#filter0_d_2460_16092)">
      <path
        d="M39 24C47.2845 24 54 30.7155 54 39C54 47.2845 47.2845 54 39 54C36.5734 54.0032 34.1824 53.4153 32.034 52.287L25.599 53.9625C25.384 54.0185 25.1581 54.0173 24.9436 53.9591C24.7292 53.9009 24.5337 53.7877 24.3765 53.6307C24.2193 53.4736 24.1059 53.2782 24.0475 53.0639C23.9891 52.8495 23.9877 52.6236 24.0435 52.4085L25.7175 45.975C24.5863 43.8243 23.9967 41.4301 24 39C24 30.7155 30.7155 24 39 24ZM40.878 40.5H34.125L33.972 40.5105C33.7027 40.5475 33.456 40.6808 33.2774 40.8857C33.0988 41.0906 33.0004 41.3532 33.0004 41.625C33.0004 41.8968 33.0988 42.1594 33.2774 42.3643C33.456 42.5692 33.7027 42.7025 33.972 42.7395L34.125 42.75H40.878L41.0295 42.7395C41.2988 42.7025 41.5455 42.5692 41.7241 42.3643C41.9028 42.1594 42.0012 41.8968 42.0012 41.625C42.0012 41.3532 41.9028 41.0906 41.7241 40.8857C41.5455 40.6808 41.2988 40.5475 41.0295 40.5105L40.878 40.5ZM43.875 35.25H34.125L33.972 35.2605C33.7027 35.2975 33.456 35.4308 33.2774 35.6357C33.0988 35.8406 33.0004 36.1032 33.0004 36.375C33.0004 36.6468 33.0988 36.9094 33.2774 37.1143C33.456 37.3192 33.7027 37.4525 33.972 37.4895L34.125 37.5H43.875L44.028 37.4895C44.2973 37.4525 44.544 37.3192 44.7226 37.1143C44.9013 36.9094 44.9997 36.6468 44.9997 36.375C44.9997 36.1032 44.9013 35.8406 44.7226 35.6357C44.544 35.4308 44.2973 35.2975 44.028 35.2605L43.875 35.25Z"
        fill="#C8FF00"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_2460_16092"
        x="0"
        y="0"
        width="78"
        height="78.0039"
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
          result="effect1_dropShadow_2460_16092"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_2460_16092"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
const productsvg10 = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="74"
    height="78"
    viewBox="0 0 74 78"
    fill="none"
  >
    <g filter="url(#filter0_d_2460_16096)">
      <path
        d="M43.75 27.75H49.375V53.625H24.625V27.75H30.25V30H43.75V27.75ZM29.125 39H44.875V36.75H29.125V39ZM29.125 48H44.875V45.75H29.125V48ZM32.5 27.75V24.375H41.5V27.75H32.5Z"
        fill="#C8FF00"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_2460_16096"
        x="0.625"
        y="0.375"
        width="72.75"
        height="77.25"
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
          result="effect1_dropShadow_2460_16096"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_2460_16096"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
