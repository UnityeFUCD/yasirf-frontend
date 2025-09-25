import React, { useState } from "react";
import { checkedboxIcon } from "@/assets";
import Container from "../Shared/Container";

const Applicationform2 = () => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedSectionabout, setSelectedSectiononeabout] = useState(null);
  const [selectedSectiondiscord, setSelectedSectionondiscord] = useState(null);
  const [useverification, setuseVerification] = useState([]);
  const [useselect, setuseSelect] = useState([]);






  
  const handleSectionClick = (section) => {
    if (selectedSection === section) {
      setSelectedSection(null);
    } else {
      setSelectedSection(section);
    }
  };

  const handleSectionClickabout = (section) =>{
    if(selectedSectionabout === section){
        setSelectedSectiononeabout(null);
    }else{
        setSelectedSectiononeabout(section);
    }
  };

  const handleSectionClickdiscord = (section) => {
    if(selectedSectiondiscord === section){
        setSelectedSectionondiscord(null);
    }else{
        setSelectedSectionondiscord(section);
    }
  };

  const handleSectionClickverification = async (section) => {
    const checkSection = useverification.includes(section);
    if (checkSection) {
      setuseVerification(useverification.filter((item) => item !== section));
    } else {
      setuseVerification([...useverification, section]);
    }
  };
 
  const handleSectionClickselect = async (section) => {
    const checkselect = useselect.includes(section);
    if(checkselect){
        setuseSelect(useselect.filter((item) => item !== section));
    }else{
        setuseSelect([...useselect, section]);
    }
  }

  return (
    <section >
      <Container className='lg:pt-[251px] lg:pb-[60px] pt-[160px] pb-[68px] bg-[#05091D] relative lg:px-0 px-4'>

        <h2 className=" text-[#FBFBFF] lg:text-[56px] text-[40px] leading-[36px] font-medium text-center uppercase">
          Apply to join as booster!
        </h2>
        <p className="text-[#FBFBFF] text-[16px] uppercase font-semibold pt-[58px] pb-6 lg:text-center text-start">
          step 01/ 02
        </p>
        <div className=" lg:w-[685px] w-full mx-auto bg-gradient-to-b from-[#161A31] to-transparent lg:p-6 p-4">
          <h4 className="text-[18px] text-[#FBFBFF] uppercase font-bold">
            Personal details
          </h4>
          <div className="lg:flex flex-wrap justify-between gap-[10px] mt-[20px]">
            <div className="">
              <p className="text-[16px] text-[#FBFBFF] uppercase font-semibold text-start lg:pb-3 py-3">
                first name
              </p>
              <input
                type="text"
                placeholder="Jhon"
                className="p-5 bg-transparent text-[16px] text-[#FBFBFF] font-normal border border-[#FBFBFF3B] outline-none lg:w-[308px] w-full"
              />
            </div>

            <div className="">
              <p className="text-[16px] text-[#FBFBFF] uppercase font-semibold text-start lg:pb-3 py-3">
                last name
              </p>
              <input
                type="text"
                placeholder="Doe"
                className="p-5 bg-transparent text-[16px] text-[#FBFBFF] font-normal border border-[#FBFBFF3B] outline-none lg:w-[308px] w-full"
              />
            </div>
          </div>
          <p className="text-[16px] text-[#FBFBFF] uppercase font-semibold pt-[20px] pb-3">
            are you 18+?*<span className="text-[#FF5E00]">*</span>
          </p>

          <div
            className="flex items-center gap-5 pb-[12px] cursor-pointer"
            onClick={() => handleSectionClick("yes")}
          >
            {selectedSection === "yes" ? (
              <img
                src={checkedboxIcon}
                alt="Checked"
                className="h-4 w-4 cursor-pointer"
              />
            ) : (
              <input
                className="p-1 h-4 w-4 rounded-full bg-transparent border-2 border-[rgba(200,255,0,1)] appearance-none checked:border-[rgba(200,255,0,1)] cursor-pointer"
                type="checkbox"
                checked={false}
                readOnly
              />
            )}
            <h5 className="text-[16px] text-[#FBFBFF] uppercase font-normal">
              Yes
            </h5>
          </div>
          <div
            className="flex items-center gap-5 pb-[12px] cursor-pointer"
            onClick={() => handleSectionClick("No")}
          >
            {selectedSection === "No" ? (
              <img
                src={checkedboxIcon}
                alt="Checked"
                className="h-4 w-4 cursor-pointer"
              />
            ) : (
              <input
                className="p-1 h-4 w-4 rounded-full bg-transparent border-2 border-[rgba(200,255,0,1)] appearance-none checked:border-[rgba(200,255,0,1)] cursor-pointer"
                type="checkbox"
                checked={false}
                readOnly
              />
            )}
            <h5 className="text-[16px] text-[#FBFBFF] uppercase font-normal">
              No
            </h5>
          </div>

          <p className="text-[16px] text-[#FBFBFF] uppercase font-semibold pt-[20px] pb-3">
            How did you hear about us?<span className="text-[#FF5E00]">*</span>
          </p>

          <div
            className="flex items-center gap-5 pb-[12px] cursor-pointer"
            onClick={() => handleSectionClickabout("Facebook")}
          >
            {selectedSectionabout === "Facebook" ? (
              <img
                src={checkedboxIcon}
                alt="Checked"
                className="h-4 w-4 cursor-pointer"
              />
            ) : (
              <input
                className="p-1 h-4 w-4 rounded-full bg-transparent border-2 border-[rgba(200,255,0,1)] appearance-none checked:border-[rgba(200,255,0,1)] cursor-pointer"
                type="checkbox"
                checked={false}
                readOnly
              />
            )}
            <h5 className="text-[16px] text-[#FBFBFF] uppercase font-normal">
              Facebook
            </h5>
          </div>
          <div
            className="flex items-center gap-5 pb-[12px] cursor-pointer"
            onClick={() => handleSectionClickabout("Instagram")}
          >
            {selectedSectionabout === "Instagram" ? (
              <img
                src={checkedboxIcon}
                alt="Checked"
                className="h-4 w-4 cursor-pointer"
              />
            ) : (
              <input
                className="p-1 h-4 w-4 rounded-full bg-transparent border-2 border-[rgba(200,255,0,1)] appearance-none checked:border-[rgba(200,255,0,1)] cursor-pointer"
                type="checkbox"
                checked={false}
                readOnly
              />
            )}
            <h5 className="text-[16px] text-[#FBFBFF] uppercase font-normal">
              Instagram
            </h5>
          </div>
          <div
            className="flex items-center gap-5 pb-[12px] cursor-pointer"
            onClick={() => handleSectionClickabout("Discord")}
          >
            {selectedSectionabout === "Discord" ? (
              <img
                src={checkedboxIcon}
                alt="Checked"
                className="h-4 w-4 cursor-pointer"
              />
            ) : (
              <input
                className="p-1 h-4 w-4 rounded-full bg-transparent border-2 border-[rgba(200,255,0,1)] appearance-none checked:border-[rgba(200,255,0,1)] cursor-pointer"
                type="checkbox"
                checked={false}
                readOnly
              />
            )}
            <h5 className="text-[16px] text-[#FBFBFF] uppercase font-normal">
              Discord
            </h5>
          </div>
          <div
            className="flex items-center gap-5 pb-[12px] cursor-pointer"
            onClick={() => handleSectionClickabout("A colleague/ friend")}
          >
            {selectedSectionabout === "A colleague/ friend" ? (
              <img
                src={checkedboxIcon}
                alt="Checked"
                className="h-4 w-4 cursor-pointer"
              />
            ) : (
              <input
                className="p-1 h-4 w-4 rounded-full bg-transparent border-2 border-[rgba(200,255,0,1)] appearance-none checked:border-[rgba(200,255,0,1)] cursor-pointer"
                type="checkbox"
                checked={false}
                readOnly
              />
            )}
            <h5 className="text-[16px] text-[#FBFBFF] uppercase font-normal">
              A colleague/ friend
            </h5>
          </div>
          <div
            className="flex items-center gap-5 pb-[12px] cursor-pointer"
            onClick={() => handleSectionClickabout("other")}
          >
            {selectedSectionabout === "other" ? (
              <img
                src={checkedboxIcon}
                alt="Checked"
                className="h-4 w-4 cursor-pointer"
              />
            ) : (
              <input
                className="p-1 h-4 w-4 rounded-full bg-transparent border-2 border-[rgba(200,255,0,1)] appearance-none checked:border-[rgba(200,255,0,1)] cursor-pointer"
                type="checkbox"
                checked={false}
                readOnly
              />
            )}
            <h5 className="text-[16px] text-[#FBFBFF] uppercase font-normal">
              other
            </h5>
          </div>

          <p className="text-[16px] text-[#FBFBFF] uppercase font-semibold pt-[20px] pb-3">
            tell us something about yourself
            <span className="text-[#FF5E00]">*</span>
          </p>
          <textarea
            type="text"
            placeholder="Add here..."
            className="p-5 bg-transparent text-[16px] text-[#FBFBFF] font-normal border border-[#FBFBFF3B] outline-none w-full"
          />
        </div>
        <div className=" lg:w-[685px] w-full mx-auto bg-gradient-to-b from-[#161A31] to-transparent lg:p-6 p-4 mt-10">
          <h4 className="text-[20px] text-[#FBFBFF] uppercase font-bold">
            Join Vanguard boost Discord
          </h4>
          <p className="text-[16px] text-[#FBFBFF] uppercase font-semibold text-start pt-5 pb-3 leading-[14px]">
            You are invited to join the recruiting Discord server.
          </p>
          <div className="flex flex-wrap gap-3 items-center">
            <div
              className="flex items-center lg:gap-5 gap-2 cursor-pointer"
              onClick={() => handleSectionClickdiscord("I've joined the server.")}
            >
              {selectedSectiondiscord === "I've joined the server." ? (
                <img
                  src={checkedboxIcon}
                  alt="Checked"
                  className="h-4 w-4 cursor-pointer"
                />
              ) : (
                <input
                  className="p-1 h-4 w-4 rounded-full bg-transparent border-2 border-[rgba(200,255,0,1)] appearance-none checked:border-[rgba(200,255,0,1)] cursor-pointer"
                  type="checkbox"
                  checked={false}
                  readOnly
                />
              )}
              <h5 className="text-[16px] text-[#FBFBFF] uppercase font-normal text-nowrap">
                I've joined the server.
              </h5>
            </div>
            <div className="">
              <button
                type="button"
                className="lg:w-[126px] w-[109px] h-[42px] text-[#FBFBFF] text-[16px] font-bold uppercase border border-[#FBFBFF]"
              >
                get started
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-[685px] w-full mx-auto bg-gradient-to-b from-[#161A31] to-transparent lg:p-6 p-4 mt-10">
          <h4 className="text-[20px] text-[#FBFBFF] uppercase font-bold">
            Message to confirm
          </h4>
          <p className="text-[16px] text-[#FBFBFF] uppercase font-semibold text-start pt-5 pb-3 leading-[14px] w-full">
            send a friend request to{" "}
            <a href="" className="underline">
              {" "}
              @vanguardrecruiter
            </a>{" "}
            on Discord and notify them of your submitted application.
          </p>
          <div className="lg:flex gap-x-3 items-center">
            <h5 className="text-[16px] text-[#FBFBFF] uppercase font-normal">
              Example: "Hello! I've just sent an application to become a
              booster."
            </h5>

            <div className="">
              <button
                type="button"
                className=" w-[126px] h-[42px] text-[#FBFBFF] text-[16px] font-bold uppercase border border-[#FBFBFF] lg:mt-0 mt-3"
              >
                get started
              </button>
            </div>
          </div>
        </div>
        <div className=" lg:w-[685px] w-full mx-auto bg-gradient-to-b from-[#161A31] to-transparent lg:p-6 p-4 mt-10">
          <h4 className="text-[20px] text-[#FBFBFF] uppercase font-bold">
            Secure Verification
          </h4>

          <div
            className="flex items-center gap-x-5 py-5 cursor-pointer"
            onClick={() =>
              handleSectionClickverification(
                "i am agreed for the third part verification process"
              )
            }
          >
            {useverification.includes("i am agreed for the third part verification process") === true
             ? (
              <img
                src={checkedboxIcon}
                alt="Checked"
                className="h-4 w-4 cursor-pointer flex-shrink-0"
              />
            ) : (
              <input
                className="p-1 h-4 w-4 rounded-full bg-transparent border-2 border-[rgba(200,255,0,1)] appearance-none checked:border-[rgba(200,255,0,1)] cursor-pointer flex-shrink-0"
                type="checkbox"
                checked={false}
                readOnly
              />
            )}
            <h5 className="text-[16px] text-[#FBFBFF] uppercase font-normal">
              i am agreed for the third part verification process
            </h5>
          </div>
          <div
            className="flex items-center gap-5 cursor-pointer"
            onClick={() => handleSectionClickverification("I understand and agree")}
          >
            {useverification.includes("I understand and agree") === true ? (
              <img
                src={checkedboxIcon}
                alt="Checked"
                className="h-4 w-4 cursor-pointer flex-shrink-0"
              />
            ) : (
              <input
                className="p-1 h-4 w-4 rounded-full bg-transparent border-2 border-[rgba(200,255,0,1)] appearance-none checked:border-[rgba(200,255,0,1)] cursor-pointer flex-shrink-0"
                type="checkbox"
                checked={false}
                readOnly
              />
            )}
            <h5 className="text-[16px] text-[#FBFBFF] uppercase font-normal w-[490px] leading-[14px]">
              Attempts at verification fraud will result in application
              rejection!
              <span className="text-[16px] font-bold uppercase">
               
                I understand and agree.
              </span>
            </h5>
          </div>
        </div>
        <div className=" lg:w-[685px] w-full mx-auto bg-gradient-to-b from-[#161A31] to-transparent lg:p-6 p-4 mt-10">
          <button
            type="button"
            className="lg:w-[126px] w-full h-[50px] text-[#000] text-[16px] font-bold uppercase border bg-primaryColor outline-none border-primaryColor mb-6"
          >
            get started
          </button>

          <div
            className="flex items-center gap-5 cursor-pointer"
            onClick={() =>
              handleSectionClickselect(
                " Discord"
              )
            }
          >
            {useselect.includes(" Discord") === true
             ? (
              <img
                src={checkedboxIcon}
                alt="Checked"
                className="h-4 w-4 cursor-pointer flex-shrink-0"
              />
            ) : (
              <input
                className="p-1 h-4 w-4 rounded-full bg-transparent border-2 border-[rgba(200,255,0,1)] appearance-none checked:border-[rgba(200,255,0,1)] cursor-pointer flex-shrink-0"
                type="checkbox"
                checked={false}
                readOnly
              />
            )}
            <h5 className="text-[16px] text-[#FBFBFF] uppercase font-normal leading-[14px]">
              clicking the "Submit" button sends the application for
              consideration, which may take up to 7 days. If approved, you will
              be contacted via Discord.
              <span className="text-[16px] font-bold uppercase">
                {" "}
                I’ve read this information thoroughly.
              </span>
            </h5>
          </div>
          <div
            className="flex items-center gap-5 py-6 cursor-pointer"
            onClick={() => handleSectionClickselect(" I understand.")}
          >
            {useselect.includes( " I understand.") === true ? (
              <img
                src={checkedboxIcon}
                alt="Checked"
                className="h-4 w-4 cursor-pointer flex-shrink-0"
              />
            ) : (
              <input
                className="p-1 h-4 w-4 rounded-full bg-transparent border-2 border-[rgba(200,255,0,1)] appearance-none checked:border-[rgba(200,255,0,1)] cursor-pointer flex-shrink-0"
                type="checkbox"
                checked={false}
                readOnly
              />
            )}
            <h5 className="text-[16px] text-[#FBFBFF] uppercase font-normal leading-[14px]">
              If any form fields are filled out incorrectly or missing, the
              application may be declined without further explanation.
              <span className="text-[16px] font-bold uppercase">
                I understand.
              </span>
            </h5>
          </div>
          <div
            className="flex items-center gap-5 cursor-pointer"
            onClick={() => handleSectionClickselect("i am not a robot.")}
          >
            {useselect.includes("i am not a robot.") === true ? (
              <img
                src={checkedboxIcon}
                alt="Checked"
                className="h-4 w-4 cursor-pointer flex-shrink-0"
              />
            ) : (
              <input
                className="p-1 h-4 w-4 rounded-full bg-transparent border-2 border-[rgba(200,255,0,1)] appearance-none checked:border-[rgba(200,255,0,1)] cursor-pointer flex-shrink-0"
                type="checkbox"
                checked={false}
                readOnly
              />
            )}
            <h5 className="text-[16px] text-[#FBFBFF] uppercase font-normal w-[490px]">
              i am not a robot.
            </h5>
          </div>
        </div>
      </Container>
      
  
    </section>
  );
};

export default Applicationform2;
