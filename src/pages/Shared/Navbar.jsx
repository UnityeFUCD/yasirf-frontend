import { logo, Man, notificationIcon } from "@/assets";
import { Dropdown } from "@/components/HomePageComponents/Dropdown";
import { SelectCurrency } from "@/components/HomePageComponents/SelectCurrency";
import { SearchIcon } from "@/components/Icons/NavbarIcons";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router";
import { cn } from "@/lib/utils";
import { CartModal } from "@/components/HomePageComponents/cart/CartModal";

const Navbar = () => {
  const location = useLocation();
  console.log(location);
  return (
    // <Container>
    <div
      className={cn(
        "bg-transparent py-4 lg:py-[29px] px-4 md:px-8 lg:px-[52px] flex items-center justify-between gap-8 w-full overflow-hidden",
        (location?.pathname === "/team" ||
          location?.pathname === "/application-registration") &&
          "bg-background border-b border-white/30",
        (location?.pathname === "/selected-game" ||
          location?.pathname === "/offer-details" ||
          location?.pathname === "/expanded-offerings" ||
          location?.pathname === "/legal-page" ||
          location?.pathname === "/resource" ||
          location?.pathname === "/about" ||
          location?.pathname === "/join-our-team" ||
          location?.pathname === "/application-form-1" ||
          location?.pathname === "/application-form-2" ||
          location?.pathname === "/job-details" ||
          location?.pathname === "/job-application-form" ||
          location?.pathname === "/job-application-form" ||
          location?.pathname === "/app-games" ||
          location?.pathname === "/resource-details" ||
          location?.pathname === "/support" ||
          location?.pathname === "/support-2" ||
          location?.pathname === "/support-3") &&
          "border-white/30 border-b"
      )}
    >
      <div className="flex items-center flex-shrink-0 w-fit gap-3 lg:gap-8 ">
        <Link to={"/"}>
          <img
            src={logo}
            alt="logo"
            className="w-[170px] h-[41.783px] hidden md:block"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="37"
            viewBox="0 0 45 37"
            fill="none"
            className="md:hidden"
          >
            <path
              d="M43.2843 12.3118C43.0186 12.7733 42.7114 13.2017 42.3572 13.5982C39.7425 17.2283 33.8986 25.3818 28.5774 32.7262C24.4041 38.4933 13.894 36.9031 10.2317 28.0004C5.74257 17.8561 0.939849 6.99875 0 4.85542L0.0618743 4.91723L16.9141 22.487L17.0517 22.6341C17.1008 22.6863 17.153 22.7418 17.2085 22.7982C17.6672 23.2821 18.2796 23.9173 18.6242 24.2744L18.6828 24.3362C18.7191 24.3724 18.7511 24.4044 18.7778 24.4343L18.8887 24.5494L17.9457 27.0039C16.5727 30.2312 14.6855 30.7353 12.425 30.0148C12.4186 30.0116 12.4122 30.0084 12.4058 30.0084C12.0356 29.8901 11.6462 29.6418 11.2921 29.3412C14.0305 32.091 18.159 31.8288 19.532 28.9064L20.5113 26.6213L24.5801 17.1196L29.2783 6.15144C29.4426 5.63452 29.6644 5.14319 29.9301 4.67849C31.3361 2.23034 34.0554 0.623106 37.1246 0.829872C40.8957 1.07501 43.9681 4.09337 44.2764 7.85353C44.4044 9.48634 44.0278 11.019 43.2843 12.3118Z"
              fill="#C8FF00"
            />
          </svg>
        </Link>
        <div>
          <Dropdown />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="max-w-[351px] size-[36px] md:w-full relative  md:h-[48px]">
          <input
            type="text"
            className={`placeholder:uppercase text-lg placeholder-transparent md:placeholder:text-gray-500 font-medium w-full  
                ${
                  location?.pathname === "/support-3" ||
                  location?.pathname === "/join-our-team" ||
                  location?.pathname === "/selected-game"
                    ? "bg-white/5 backdrop-blur-[5px]  md:placeholder:text-[#FFF]/75"
                    : "bg-white/5 backdrop:filter:5px"
                } 
                 bg-white/5 text-white rounded-full md:py-[12px] md:ps-[17px]
                 border border-white border-opacity-20 outline-none md:px-6 md:pe-12 w-full h-full `}
            placeholder="Search"
          />
          <span className="absolute top-1/2 right-1/2 md:right-[8px] translate-x-1/2 md:translate-x-0 -translate-y-1/2">
            <SearchIcon className="size-4 md:size-6" />
          </span>
        </div>
        {(location?.pathname === "/selected-game" ||
          location?.pathname === "/about" ||
          location?.pathname === "/resource" ||
          location?.pathname === "/team" ||
          location?.pathname === "/application-registration" ||
          location?.pathname === "/join-our-team" ||
          location?.pathname === "/application-form-1" ||
          location?.pathname === "/application-form-2" ||
          location?.pathname === "/job-details" ||
          location?.pathname === "/job-application-form" ||
          location?.pathname === "/legal-page" ||
          location?.pathname === "/resource-details" ||
          location?.pathname === "/support" ||
          location?.pathname === "/support-2" ||
          location?.pathname === "/support-3" ||
          location?.pathname === "/app-games") && (
          <div>
            <div className="flex items-center gap-2">
              <button className=" hidden md:flex items-center gap-1 bg-primaryColor px-3 py-2 rounded-full text-nowrap text-lg">
                <span className="font-bold">$ </span>5.00 <span></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2"
                  height="24"
                  viewBox="0 0 2 24"
                  fill="none"
                >
                  <path d="M1.04688 0.75V23.25" stroke="black" />
                </svg>
                <span className="flex items-center gap-1 ">
                  <span className="px-1 flex items-center gap-1 ">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                    >
                      <path
                        d="M12.9459 0.392255C13.1479 0.284966 13.476 0.146122 13.6653 0.0956331C13.8546 0.0451442 14.1702 0.000966506 14.3595 0.000966506C14.5488 -0.0053446 14.8644 0.0198998 15.0537 0.0577665C15.243 0.0956331 15.5711 0.202922 15.7794 0.310211C15.9876 0.411188 16.2842 0.606833 16.442 0.739366C16.5998 0.871899 16.8396 1.14959 16.9721 1.35785C17.1109 1.55981 17.275 1.88799 17.3381 2.07732C17.4012 2.26665 17.4706 2.59483 17.4896 2.8031C17.5085 3.01136 17.5022 3.33954 17.4643 3.52888C17.4328 3.71821 17.3381 4.03376 17.2561 4.2231C17.174 4.41243 16.7954 4.99936 16.4105 5.52318C16.0255 6.05332 14.7192 7.87092 13.5076 9.56229C12.2896 11.26 11.1284 12.8251 10.9202 13.0334C10.6488 13.3174 10.409 13.4878 10.0683 13.6456C9.80952 13.7655 9.41195 13.9043 9.18477 13.9485C8.93865 13.9927 8.54739 14.0116 8.20662 13.9927C7.8406 13.9674 7.46196 13.898 7.13381 13.7844C6.85614 13.6961 6.47119 13.532 6.28187 13.4247C6.09255 13.3174 5.78964 13.1154 5.61925 12.9829C5.44255 12.8441 5.14595 12.5538 4.95663 12.3329C4.76731 12.1183 4.50227 11.7586 4.36974 11.5377C4.24353 11.3168 3.68188 10.0987 3.12023 8.8302C2.5649 7.56167 2.04111 6.3815 1.96539 6.2111C1.88573 6.04565 1.44318 5.0413 0.966972 3.96059L0.924129 3.86336C0.438209 2.73999 0.0406385 1.81225 0.0469491 1.79332C0.0595704 1.77439 0.690635 2.4055 1.45422 3.19439C2.2115 3.98959 3.44839 5.27074 4.19936 6.05332C4.94401 6.8359 5.84012 7.76994 6.18721 8.13598C6.5343 8.50203 6.8309 8.81127 6.85614 8.8302C6.87507 8.84914 7.00759 8.98798 7.41148 9.42976L7.23478 9.90309C7.13381 10.1618 6.98866 10.5026 6.91293 10.6604C6.8309 10.8182 6.69206 11.0391 6.60371 11.159C6.51536 11.2726 6.32604 11.4367 6.18721 11.5187C6.04838 11.6008 5.80857 11.6702 5.6508 11.6828C5.49304 11.6891 5.22168 11.6765 4.73576 11.6008L4.92508 11.727C5.02605 11.8027 5.25323 11.9037 5.42993 11.9605C5.60032 12.0236 5.92847 12.0678 6.15566 12.0678C6.42701 12.0678 6.66051 12.0236 6.84983 11.9353C7.00759 11.8658 7.24109 11.7018 7.3673 11.5692C7.56293 11.361 7.92895 10.5468 9.59496 6.65287C10.6867 4.08425 11.6585 1.82488 11.7595 1.63554C11.8542 1.44621 12.075 1.13697 12.2517 0.941321C12.4284 0.751988 12.744 0.505855 12.9459 0.392255Z"
                        fill="#05091D"
                      />
                    </svg>{" "}
                    35.00{" "}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <rect
                      x="0.5"
                      width="24"
                      height="24"
                      rx="12"
                      fill="#05091D"
                    />
                    <path
                      d="M6.39258 12H12.5M12.5 12H18.6074M12.5 12V5.89258M12.5 12V18.1074"
                      stroke="#C8FF00"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              <button className="flex items-center gap-1 bg-primaryColor h-[34px] p-2 rounded-full text-nowrap text-lg md:hidden">
                <span className="flex items-center gap-1 ">
                  <span className="px-1 flex items-center gap-1 ">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                    >
                      <path
                        d="M12.9459 0.392255C13.1479 0.284966 13.476 0.146122 13.6653 0.0956331C13.8546 0.0451442 14.1702 0.000966506 14.3595 0.000966506C14.5488 -0.0053446 14.8644 0.0198998 15.0537 0.0577665C15.243 0.0956331 15.5711 0.202922 15.7794 0.310211C15.9876 0.411188 16.2842 0.606833 16.442 0.739366C16.5998 0.871899 16.8396 1.14959 16.9721 1.35785C17.1109 1.55981 17.275 1.88799 17.3381 2.07732C17.4012 2.26665 17.4706 2.59483 17.4896 2.8031C17.5085 3.01136 17.5022 3.33954 17.4643 3.52888C17.4328 3.71821 17.3381 4.03376 17.2561 4.2231C17.174 4.41243 16.7954 4.99936 16.4105 5.52318C16.0255 6.05332 14.7192 7.87092 13.5076 9.56229C12.2896 11.26 11.1284 12.8251 10.9202 13.0334C10.6488 13.3174 10.409 13.4878 10.0683 13.6456C9.80952 13.7655 9.41195 13.9043 9.18477 13.9485C8.93865 13.9927 8.54739 14.0116 8.20662 13.9927C7.8406 13.9674 7.46196 13.898 7.13381 13.7844C6.85614 13.6961 6.47119 13.532 6.28187 13.4247C6.09255 13.3174 5.78964 13.1154 5.61925 12.9829C5.44255 12.8441 5.14595 12.5538 4.95663 12.3329C4.76731 12.1183 4.50227 11.7586 4.36974 11.5377C4.24353 11.3168 3.68188 10.0987 3.12023 8.8302C2.5649 7.56167 2.04111 6.3815 1.96539 6.2111C1.88573 6.04565 1.44318 5.0413 0.966972 3.96059L0.924129 3.86336C0.438209 2.73999 0.0406385 1.81225 0.0469491 1.79332C0.0595704 1.77439 0.690635 2.4055 1.45422 3.19439C2.2115 3.98959 3.44839 5.27074 4.19936 6.05332C4.94401 6.8359 5.84012 7.76994 6.18721 8.13598C6.5343 8.50203 6.8309 8.81127 6.85614 8.8302C6.87507 8.84914 7.00759 8.98798 7.41148 9.42976L7.23478 9.90309C7.13381 10.1618 6.98866 10.5026 6.91293 10.6604C6.8309 10.8182 6.69206 11.0391 6.60371 11.159C6.51536 11.2726 6.32604 11.4367 6.18721 11.5187C6.04838 11.6008 5.80857 11.6702 5.6508 11.6828C5.49304 11.6891 5.22168 11.6765 4.73576 11.6008L4.92508 11.727C5.02605 11.8027 5.25323 11.9037 5.42993 11.9605C5.60032 12.0236 5.92847 12.0678 6.15566 12.0678C6.42701 12.0678 6.66051 12.0236 6.84983 11.9353C7.00759 11.8658 7.24109 11.7018 7.3673 11.5692C7.56293 11.361 7.92895 10.5468 9.59496 6.65287C10.6867 4.08425 11.6585 1.82488 11.7595 1.63554C11.8542 1.44621 12.075 1.13697 12.2517 0.941321C12.4284 0.751988 12.744 0.505855 12.9459 0.392255Z"
                        fill="#05091D"
                      />
                    </svg>{" "}
                    35.00{" "}
                  </span>
                </span>
              </button>
            </div>
          </div>
        )}
        <div className="hidden md:block">
          <SelectCurrency />
        </div>

        {location?.pathname !== "/login" || location?.pathname !== "/signup" ? (
          <button className="size-[36px] md:w-[48px] md:h-[48px] flex-shrink-0">
            <img src={Man} alt="" />
          </button>
        ) : (
          <div>
            <Link to={"/login"}>
              <Button className="font-bold tracking-wider  rounded-full bg-primaryColor/20 text-white px-5 h-[48px]">
                sign in
              </Button>
            </Link>
          </div>
        )}

        {location?.pathname === "/selected-game" ||
          location?.pathname === "/about" ||
          location?.pathname === "/resource" ||
          location?.pathname === "/team" ||
          location?.pathname === "/application-registration" ||
          location?.pathname === "/join-our-team" ||
          location?.pathname === "/application-form-1" ||
          location?.pathname === "/application-form-2" ||
          location?.pathname === "/job-details" ||
          location?.pathname === "/job-application-form" ||
          location?.pathname === "/legal-page" ||
          location?.pathname === "/resource-details" ||
          location?.pathname === "/support" ||
          location?.pathname === "/support-2" ||
          location?.pathname === "/support-3" ||
          location?.pathname === "/app-games" || (
            <>
              <div>
                <Button className="font-bold tracking-wider  rounded-full bg-primaryColor/15 backdrop-blur-[10px] text-white size-[36px] md:w-[55px] md:h-[55px] p-2 md:p-3">
                  <img
                    src={notificationIcon}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </Button>
              </div>
              <div className="relative">
                <CartModal />
                <p className="absolute top-0 items-center justify-center -right-2 font-bold bg-primaryColor px-2 rounded-full hidden md:flex ">
                  3
                </p>
              </div>
            </>
          )}
      </div>
    </div>
    // </Container>
  );
};

export default Navbar;
