import React, { useState } from "react";
import { checkedboxIcon } from "@/assets";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "../Shared/Container";

const Applicationform1 = () => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [useVpn, setUseVpn] = useState(null);
  const [streamAble, setStreamAble] = useState(null);
  const [useplatform, setUseplatform] = useState([]);
  const [useregion, setUseregion] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");

  const handleSectionClick = (section) => {
    if (selectedSection === section) {
      setSelectedSection(null);
    } else {
      setSelectedSection(section);
    }
  };

  const handlestream = (section) => {
    if (streamAble === section) {
      setStreamAble(null);
    } else {
      setStreamAble(section);
    }
  };

  const handlevpn = (section) => {
    if (useVpn === section) {
      setUseVpn(null);
    } else {
      setUseVpn(section);
    }
  };

  const handleplatform = async (section) => {
    const checkSection = useplatform.includes(section);
    if (checkSection) {
      setUseplatform(useplatform.filter((item) => item !== section));
    } else {
      setUseplatform([...useplatform, section]);
    }
  };
  console.log(useplatform);

  const handleregion = (section) => {
    const checkregion = useregion.includes(section);
    if (checkregion) {
      setUseregion(useregion.filter((item) => item !== section));
    } else {
      setUseregion([...useregion, section]);
    }
  };

  return (
    <section>
      <Container className="lg:pt-[251px] lg:pb-[60px] pt-[160px] pb-[68px] bg-[#05091D] relative lg:px-0 px-4">
        <h2 className=" text-[#FBFBFF] lg:text-[56px] text-[40px] leading-[36px] font-medium text-center uppercase">
          Apply to join as booster!
        </h2>
        <p className="text-[#FBFBFF] text-[16px] uppercase font-semibold pt-[58px] pb-6 lg:text-center text-start ">
          step 01/ 02
        </p>
        <div className="lg:w-[685px] w-full mx-auto bg-gradient-to-b from-[#161A31] to-transparent lg:p-6 p-4">
          <h4 className="text-[18px] text-[#FBFBFF] uppercase font-bold">
            contact information
          </h4>
          <div className="lg:flex flex-wrap justify-between gap-[10px] lg:mt-10 mt-5">
            <div className="">
              <p className="text-[16px] text-[#FBFBFF] uppercase font-semibold text-start lg:pb-3 py-3">
                email<span className="text-[#FF5E00]">*</span>
              </p>
              <input
                type="text"
                placeholder="mail@example.com"
                className="p-5 bg-transparent text-[16px] text-[#FBFBFF] font-normal border border-[#FBFBFF3B] outline-none lg:w-[308px] w-full"
              />
            </div>

            <div className="">
              <p className="text-[16px] text-[#FBFBFF] uppercase font-semibold text-start lg:pb-3 py-3">
                discord<span className="text-[#FF5E00]">*</span>
              </p>
              <input
                type="text"
                placeholder="van.boost"
                className="p-5 bg-transparent text-[16px] text-[#FBFBFF] font-normal border border-[#FBFBFF3B] outline-none lg:w-[308px] w-full"
              />
            </div>
            <div className="">
              <p className="text-[16px] text-[#FBFBFF] uppercase font-semibold text-start lg:pb-3 py-3">
                nickname<span className="text-[#FF5E00]">*</span>
              </p>
              <input
                type="text"
                placeholder="van_123"
                className="p-5 bg-transparent text-[16px] text-[#FBFBFF] font-normal border border-[#FBFBFF3B] outline-none lg:w-[308px] w-full"
              />
            </div>
            <div className="">
              <p className="text-[16px] text-[#FBFBFF] uppercase font-semibold text-start lg:pb-3 py-3">
                referred by
              </p>
              <input
                type="text"
                placeholder="user_12244"
                className="p-5 bg-transparent text-[16px] text-[#FBFBFF] font-normal border border-[#FBFBFF3B] outline-none lg:w-[308px] w-full"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-[685px] w-full mx-auto bg-gradient-to-b from-[#161A31] to-transparent lg:p-6 p-4 my-10">
          <h4 className="text-[18px] text-[#FBFBFF] uppercase font-bold">
            service options
          </h4>
          <p className="text-[16px] text-[#FBFBFF] uppercase font-semibold pt-[20px] pb-3 lg:text-nowrap">
            What games do you provide services for?
            <span className="text-[#FF5E00]">*</span>
          </p>
          <div className="">
            <Select>
              <SelectTrigger className="w-full p-5 bg-transparent text-[16px] text-[#FBFBFF] font-normal border border-[#FBFBFF3B] outline-none lg:h-20 h-[54px] rounded-none">
                <SelectValue placeholder="Destiny" />
              </SelectTrigger>
              <SelectContent className="bg-black text-white cursor-pointer">
                <SelectItem value="light" className="cursor-pointer">
                  Destiny
                </SelectItem>
                <SelectItem value="dark" className="cursor-pointer">
                  Destiny 1
                </SelectItem>
                <SelectItem value="system" className="cursor-pointer">
                  Destiny 2
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <p className="text-[16px] text-[#FBFBFF] uppercase font-semibold pt-[20px] pb-3">
            i can dedicate<span className="text-[#FF5E00]">*</span>
          </p>
          <div
            className="flex items-center gap-5 pb-[12px] cursor-pointer"
            onClick={() => handleSectionClick("less than 4hrs/ day")}
          >
            {selectedSection === "less than 4hrs/ day" ? (
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
              less than 4hrs/ day
            </h5>
          </div>
          <div
            className="flex items-center gap-5 pb-[12px] cursor-pointer"
            onClick={() => handleSectionClick("less than 7hrs/ day")}
          >
            {selectedSection === "less than 7hrs/ day" ? (
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
              less than 7hrs/ day
            </h5>
          </div>
          <div
            className="flex items-center gap-5 pb-[12px] cursor-pointer"
            onClick={() => handleSectionClick("full time")}
          >
            {selectedSection === "full time" ? (
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
              full time
            </h5>
          </div>
          <input
            type="text"
            placeholder="other"
            className="p-5 bg-transparent text-[16px] text-[#FBFBFF] font-normal border border-[#FBFBFF3B] outline-none w-full mt-3"
          />
          <div className="relative">
            <p className="text-[16px] text-[#FBFBFF] uppercase font-semi-bold pt-[20px] pb-3">
              are you applying as a solo booster, a small group, or a
              team/community?<span className="text-[#FF5E00]">*</span>
            </p>
            <div className="">
              <Select onValueChange={(value) => setSelectedValue(value)}>
                <SelectTrigger className="w-full p-5 bg-transparent text-[16px] text-[#FBFBFF] font-normal border border-[#FBFBFF3B] outline-none lg:h-20 h-[54px] rounded-none">
                  <SelectValue placeholder="Solo" />
                </SelectTrigger>
                <SelectContent className="bg-black text-white cursor-pointer">
                  <SelectItem value="solo" className="cursor-pointer">
                    Solo
                  </SelectItem>
                  <SelectItem value="small-group" className="cursor-pointer">
                    Small Group
                  </SelectItem>
                  <SelectItem value="team-community" className="cursor-pointer">
                    Team Community
                  </SelectItem>
                </SelectContent>
              </Select>
              {selectedValue && (
                <Accordion
                  type="single"
                  collapsible
                  className="mt-4 border border-[#FBFBFF3B]"
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="p-4 text-white hover:no-underline">
                      {selectedValue.replace("-", " ").toUpperCase()}
                    </AccordionTrigger>
                    <AccordionContent className="p-4 text-gray-300 border-none">
                      {selectedValue === "solo" && (
                        <>
                          <p className="text-[16px] text-[#FBFBFF] font-normal py-5">
                            Small Group
                          </p>
                          <div className="flex flex-wrap justify-between gap-[10px]">
                            <div className="">
                              <p className="text-[16px] text-[#FBFBFF] uppercase font-semibold text-start pb-3">
                                no of members in the group
                                <span className="text-[#FF5E00]">*</span>
                              </p>
                              <input
                                type="text"
                                placeholder="mail@example.com"
                                className="p-5 bg-transparent text-[16px] text-[#FBFBFF] font-normal border border-[#FBFBFF3B] outline-none lg:w-[290px] w-[260px]"
                              />
                            </div>

                            <div className="">
                              <p className="text-[16px] text-[#FBFBFF] uppercase font-semibold text-start pb-3">
                                enter discord username for all
                                <span className="text-[#FF5E00]">*</span>
                              </p>
                              <input
                                type="text"
                                placeholder="van.boost"
                                className="p-5 bg-transparent text-[16px] text-[#FBFBFF] font-normal border border-[#FBFBFF3B] outline-none lg:w-[290px] w-[260px]"
                              />
                            </div>
                          </div>
                          <p className="text-[16px] text-[#FBFBFF] font-normal mt-5">
                            Team/ Community
                          </p>
                        </>
                      )}
                      {selectedValue === "small-group" &&
                        "Small Group mode is ideal for collaboration in small teams."}
                      {selectedValue === "team-community" &&
                        "Team Community mode helps you engage with a larger team."}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              )}
            </div>
          </div>
        </div>
        <div className="lg:w-[685px] w-full mx-auto bg-gradient-to-b from-[#161A31] to-transparent lg:p-6 p-4 my-10">
          <h4 className="text-[18px] text-[#FBFBFF] uppercase font-bold">
            Regions and services
          </h4>
          <p className="text-[16px] text-[#FBFBFF] uppercase font-semi-bold pt-[20px] pb-3">
            select country/ region<span className="text-[#FF5E00]">*</span>
          </p>
          <div className="">
            <Select>
              <SelectTrigger className="w-full p-5 bg-transparent text-[16px] text-[#FBFBFF] font-normal border border-[#FBFBFF3B] outline-none h-20 rounded-none">
                <SelectValue placeholder="select" />
              </SelectTrigger>
              <SelectContent className="bg-black text-white cursor-pointer">
                <SelectItem value="light" className="cursor-pointer">
                  select
                </SelectItem>
                <SelectItem value="dark" className="cursor-pointer">
                  select 1
                </SelectItem>
                <SelectItem value="system" className="cursor-pointer">
                  select 2
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <p className="text-[16px] text-[#FBFBFF] uppercase font-semibold pt-[20px] pb-3">
            select all applicable services
            <span className="text-[#FF5E00]">*</span>
          </p>
          <div
            className="flex items-center gap-5 pb-[12px] cursor-pointer"
            onClick={() => handleregion("Piloted")}
          >
            {useregion.includes("Piloted") === true ? (
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
              Piloted
            </h5>
          </div>
          <div
            className="flex items-center gap-5 pb-[12px] cursor-pointer"
            onClick={() => handleregion("Selfplay")}
          >
            {useregion.includes("Selfplay") === true ? (
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
              Selfplay
            </h5>
          </div>
          <div
            className="flex items-center gap-5 pb-[12px] cursor-pointer"
            onClick={() => handleregion("Coaching")}
          >
            {useregion.includes("Coaching") === true ? (
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
              Coaching
            </h5>
          </div>
          <div
            className="flex items-center gap-5 pb-[12px] cursor-pointer"
            onClick={() => handleregion("PvP")}
          >
            {useregion.includes("PvP") === true ? (
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
              PvP
            </h5>
          </div>
          <div
            className="flex items-center gap-5 pb-[12px] cursor-pointer"
            onClick={() => handleregion("PvE")}
          >
            {useregion.includes("PvE") === true ? (
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
              PvE
            </h5>
          </div>
        </div>
        <div className="lg:w-[685px] w-full mx-auto bg-gradient-to-b from-[#161A31] to-transparent lg:p-6 p-4 my-10">
          <h4 className="text-[18px] text-[#FBFBFF] uppercase font-bold">
            Platforms
          </h4>
          <p className="text-[16px] text-[#FBFBFF] uppercase font-semibold leading-[14px] pt-[20px] pb-3">
            Specify the platforms you provide services on
            <span className="text-[#FF5E00]">*</span>
          </p>
          <div
            className="flex items-center gap-5 pb-[12px] cursor-pointer"
            onClick={() => handleplatform("Xbox")}
          >
            {useplatform.includes("Xbox") === true ? (
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
              Xbox
            </h5>
          </div>
          <div
            className="flex items-center gap-5 pb-[12px] cursor-pointer"
            onClick={() => handleplatform("PC")}
          >
            {useplatform.includes("PC") === true ? (
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
              PC
            </h5>
          </div>
          <div
            className="flex items-center gap-5 pb-[12px] cursor-pointer"
            onClick={() => handleplatform("Playstation")}
          >
            {useplatform.includes("Playstation") === true ? (
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
              Playstation
            </h5>
          </div>
        </div>
        <div className="lg:w-[685px] w-full mx-auto bg-gradient-to-b from-[#161A31] to-transparent lg:p-6 p-4 my-10">
          <h4 className="text-[18px] text-[#FBFBFF] uppercase font-bold">
            Gaming experience
          </h4>
          <p className="text-[16px] text-[#FBFBFF] uppercase font-semibold pt-[20px] pb-3">
            Destiny Tracker: Link to game profiles like Raider.io, tracker.gg,
            etc.<span className="text-[#FF5E00]">*</span>
          </p>
          <input
            type="text"
            placeholder="Add all applicable links "
            className="p-5 bg-transparent text-[16px] text-[#FBFBFF] font-normal border border-[#FBFBFF3B] outline-none w-full"
          />
          <p className="text-[16px] text-[#FBFBFF] uppercase lg:font-semibold font-bold leading-[14px] pt-[20px] pb-3 ">
            Explain your gaming experience, achievements, and any previous
            marketplace work<span className="text-[#FF5E00]">*</span>
          </p>
          <textarea
            type="text"
            placeholder="Add here..."
            className="p-5 bg-transparent text-[16px] text-[#FBFBFF] font-normal border border-[#FBFBFF3B] outline-none w-full"
          />
        </div>
        <div className="lg:w-[685px] w-full mx-auto bg-gradient-to-b from-[#161A31] to-transparent lg:p-6 p-4 my-10">
          <h4 className="text-[18px] text-[#FBFBFF] uppercase font-bold">
            Verification
          </h4>
          <p className="text-[16px] text-[#FBFBFF] uppercase font-semibold pt-[20px] pb-3">
            Upload screenshots to verify your gaming profile and completed
            orders
          </p>
          <div className="relative">
            <p className="text-[16px] text-[#FBFBFF] uppercase font-semibold text-start pb-3">
              add cover letter/ resume
            </p>
            <input
              type="text"
              placeholder=""
              className="p-5 bg-transparent text-[16px] text-[#FBFBFF] font-normal border border-[#FBFBFF3B] outline-none lg:w-[637px] w-full h-[80px]"
            />
            <button
              type="button"
              className="h-[42px] w-[126px] text-[#FBFBFF] text-[16px] font-bold uppercase my-[22px]  border border-[#FBFBFF] absolute top-[34px] right-3"
            >
              get started
            </button>
          </div>
        </div>
        <div className="lg:w-[685px] w-full mx-auto bg-gradient-to-b from-[#161A31] to-transparent lg:p-6 p-4 mt-10">
          <h4 className="text-[18px] text-[#FBFBFF] uppercase font-bold">
            vpn & streaming
          </h4>
          <div className="">
            <p className="text-[16px] text-[#FBFBFF] uppercase font-semibold pt-[20px] pb-3">
              do you use vpn for piloted services?
            </p>
            <div
              className="flex items-center gap-5 pb-[12px] cursor-pointer"
              onClick={() => handlevpn("Yes")}
            >
              {useVpn === "Yes" ? (
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
              onClick={() => handlevpn("No")}
            >
              {useVpn === "No" ? (
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
          </div>

          <div className="">
            <p className="text-[16px] text-[#FBFBFF] uppercase font-semibold pt-[20px] pb-3">
              Are you able to stream? your services?
              <span className="text-[#FF5E00]">*</span>
            </p>
            <div
              className="flex items-center gap-5 pb-[12px] cursor-pointer"
              onClick={() => handlestream("Yes")}
            >
              {streamAble === "Yes" ? (
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
              onClick={() => handlestream("No")}
            >
              {streamAble === "No" ? (
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
            <button className="w-[126px] h-[50px] bg-[#C8FF00] text-[#000] text-[16px] font-bold uppercase mt-10 ">
              get started
            </button>
          </div>
        </div>
        {/* <div className="absolute -top-10 left-[50%] size-[200px] bg-primaryColor blur-[200px]" /> */}
      </Container>
    </section>
  );
};

export default Applicationform1;
