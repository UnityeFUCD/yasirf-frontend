import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CardTitle from "../OfferDetailsPageComponents/CardTitle";
import { Button } from "../ui/button";
import { Checkbox2 } from "../ui/checkbox2";
import { DynamicSelect } from "../DynamicComponents/DynamicSelect";

const Bundle = () => {
  return (
    <div className="z-20">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem
          value="item-1"
          className="border-b-0 bg-white/5 backdrop-blur-lg p-4"
        >
          <AccordionTrigger className="hover:no-underline text-2xl uppercase font-semibold">
            {" "}
            <div className="flex items-center gap-2">
              Nerubian Conqueror Bundle
              <span className="bg-white/20 backdrop-blur-md px-2 text-xs py-1 border border-white/50 rounded-full">
                09
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-2"
          className="border-b-0 bg-white/5 backdrop-blur-lg p-4"
        >
          <AccordionTrigger className="hover:no-underline text-2xl uppercase font-semibold">
            {" "}
            <div className="flex items-center gap-2">
              Nerubian Conqueror Bundle
              <span className="bg-white/20 backdrop-blur-md px-2 text-xs py-1 border border-white/50 rounded-full">
                07
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="flex items-start gap-1 uppercase bg-primaryColor py-0.5 px-1.5 rounded-full text-black font-semibold text-xs">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 12 13"
                        fill="none"
                      >
                        <path
                          d="M7.5 2.70312C8.56087 2.70313 9.57828 3.12455 10.3284 3.8747C11.0786 4.62484 11.5 5.64226 11.5 6.70312C11.5 7.76399 11.0786 8.78141 10.3284 9.53155C9.57828 10.2817 8.56087 10.7031 7.5 10.7031C6.43913 10.7031 5.42172 10.2817 4.67157 9.53155C3.92143 8.78141 3.5 7.76399 3.5 6.70312C3.5 5.64226 3.92143 4.62484 4.67157 3.8747C5.42172 3.12455 6.43913 2.70313 7.5 2.70312ZM7.5 3.70312C6.70435 3.70312 5.94129 4.0192 5.37868 4.5818C4.81607 5.14441 4.5 5.90748 4.5 6.70312C4.5 7.49877 4.81607 8.26184 5.37868 8.82445C5.94129 9.38705 6.70435 9.70312 7.5 9.70312C8.29565 9.70312 9.05871 9.38705 9.62132 8.82445C10.1839 8.26184 10.5 7.49877 10.5 6.70312C10.5 5.90748 10.1839 5.14441 9.62132 4.5818C9.05871 4.0192 8.29565 3.70312 7.5 3.70312ZM7 4.70312H7.75V6.59312L8.915 7.75812L8.385 8.28813L7 6.90312V4.70312ZM1 9.70312C0.867392 9.70312 0.740215 9.65045 0.646447 9.55668C0.552678 9.46291 0.5 9.33573 0.5 9.20312C0.5 9.07052 0.552678 8.94334 0.646447 8.84957C0.740215 8.7558 0.867392 8.70312 1 8.70312H2.915C3.07 9.05813 3.27 9.39313 3.5 9.70312H1ZM1.5 7.20312C1.36739 7.20312 1.24021 7.15045 1.14645 7.05668C1.05268 6.96291 1 6.83573 1 6.70312C1 6.57052 1.05268 6.44334 1.14645 6.34957C1.24021 6.2558 1.36739 6.20312 1.5 6.20312H2.525L2.5 6.70312L2.525 7.20312H1.5ZM2 4.70312C1.86739 4.70312 1.74021 4.65045 1.64645 4.55668C1.55268 4.46291 1.5 4.33573 1.5 4.20312C1.5 4.07052 1.55268 3.94334 1.64645 3.84957C1.74021 3.7558 1.86739 3.70312 2 3.70312H3.5C3.27 4.01312 3.07 4.34812 2.915 4.70312H2Z"
                          fill="#05091D"
                        />
                      </svg>
                    </span>
                    expiring
                  </p>
                  <p className="flex items-center gap-1 uppercase bg-primaryColor/20 backdrop-blur-sm py-0.5 px-1.5 rounded-full text-primaryColor border border-primaryColor/40 font-medium text-xs">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 12 13"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_4085_1790)">
                          <path
                            d="M11.5701 6.69717C11.5701 6.56932 11.5072 6.45693 11.4116 6.38643L11.4136 6.38296L10.0666 5.60531L10.842 4.26236L10.8394 4.26077C10.8638 4.20541 10.8749 4.14508 10.8717 4.08465C10.8685 4.02422 10.8512 3.96538 10.821 3.9129C10.7906 3.86051 10.7483 3.81602 10.6974 3.78304C10.6466 3.75006 10.5887 3.72952 10.5285 3.72307V3.71932H8.9729V2.1682H8.96972C8.96322 2.10803 8.94264 2.05024 8.90967 1.99949C8.87669 1.94875 8.83224 1.90648 8.7799 1.87609C8.72736 1.8458 8.6684 1.82837 8.60784 1.82523C8.54728 1.8221 8.48683 1.83334 8.43145 1.85803L8.42957 1.85471L7.0599 2.64551L6.30146 1.33175L6.29871 1.33334C6.26299 1.28449 6.21628 1.24473 6.16235 1.21727C6.10841 1.18981 6.04878 1.17543 5.98826 1.17529C5.86041 1.17529 5.74787 1.23814 5.67752 1.33377L5.67405 1.33175L4.90304 2.66718L3.57541 1.90065L3.57382 1.9034C3.51846 1.87895 3.45813 1.86787 3.39769 1.87106C3.33726 1.87425 3.27843 1.89161 3.22595 1.92174C3.17353 1.95215 3.12901 1.99449 3.09601 2.04531C3.063 2.09614 3.04243 2.15403 3.03598 2.21428H3.03208V3.7563H1.49902V3.75933C1.43885 3.76584 1.38106 3.78642 1.33031 3.81939C1.27957 3.85237 1.23729 3.89682 1.20691 3.94916C1.17675 4.00169 1.15939 4.06058 1.15623 4.12107C1.15306 4.18155 1.16419 4.24194 1.18871 4.29732L1.18538 4.29934L1.94325 5.6121L0.586143 6.39567L0.587732 6.39842C0.538881 6.43414 0.49912 6.48085 0.471665 6.53479C0.444209 6.58872 0.429829 6.64835 0.429688 6.70887C0.429688 6.83672 0.49253 6.94926 0.588165 7.01962L0.586143 7.02308L1.93313 7.80074L1.15779 9.14368L1.16039 9.14513C1.13595 9.20049 1.12487 9.26082 1.12806 9.32125C1.13124 9.38168 1.1486 9.44052 1.17874 9.493C1.20916 9.54539 1.25151 9.58988 1.30233 9.62286C1.35316 9.65584 1.41103 9.67638 1.47128 9.68282V9.68672H3.02673V11.2377H3.02991C3.0432 11.3556 3.10922 11.466 3.21974 11.5298C3.27231 11.56 3.33126 11.5774 3.3918 11.5805C3.45234 11.5836 3.51277 11.5724 3.56818 11.5479L3.57006 11.5512L4.93973 10.7604L5.69817 12.0742L5.70092 12.0726C5.73664 12.1214 5.78336 12.1612 5.83729 12.1886C5.89122 12.2161 5.95086 12.2305 6.01137 12.2306C6.13923 12.2306 6.25176 12.1678 6.32212 12.0723L6.32544 12.0742L7.09645 10.7387L8.42422 11.5052L8.42581 11.5025C8.48117 11.5269 8.54151 11.538 8.60194 11.5348C8.66237 11.5317 8.7212 11.5143 8.77368 11.4842C8.8261 11.4537 8.87062 11.4114 8.90363 11.3606C8.93663 11.3098 8.9572 11.2519 8.96366 11.1916H8.96756V9.64974H10.5008V9.64671C10.5609 9.6402 10.6187 9.61963 10.6695 9.58665C10.7202 9.55367 10.7625 9.50922 10.7929 9.45688C10.823 9.40434 10.8404 9.34542 10.8436 9.2849C10.8467 9.22439 10.8356 9.16398 10.8111 9.10858L10.8144 9.1067L10.0565 7.79395L11.4136 7.01037L11.412 7.00763C11.4609 6.9719 11.5007 6.92519 11.5281 6.87126C11.5556 6.81733 11.5699 6.75769 11.5701 6.69717ZM5.09186 8.34335L3.66945 7.71493L4.29715 8.80202L3.94235 9.00687L2.97992 7.34018L3.3447 7.12941L4.72145 7.73067L4.11686 6.68359L4.47181 6.47874L5.43395 8.14543L5.09186 8.34335ZM5.76391 7.95531L4.80163 6.28848L5.98118 5.60762L6.16147 5.91995L5.33672 6.39596L5.53868 6.74586L6.34581 6.27996L6.5261 6.592L5.71898 7.05819L5.93827 7.43799L6.76302 6.96197L6.94332 7.27431L5.76391 7.95531ZM8.49516 6.37848L7.54198 5.40277L7.91282 6.71451L7.53562 6.93236L6.09603 5.54131L6.49331 5.3119L7.48116 6.34742L7.10309 4.95984L7.38047 4.79977L8.39071 5.82244L7.98765 4.44915L8.38493 4.21974L8.8725 6.16077L8.49516 6.37848Z"
                            fill="#C8FF00"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_4085_1790">
                            <rect
                              width="12"
                              height="12"
                              fill="white"
                              transform="translate(0 0.703125)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    new launch
                  </p>
                </div>
                <div className="flex flex-col gap-4 mt-4">
                  <div>
                    <CardTitle>region</CardTitle>
                    <div className="flex items-center gap-3 mt-4">
                      <Button className="bg-transparent border border-[#FBFBFF]/60 text-[#FBFBFF]/60 rounded-none font-semibold h-9">
                        get started
                      </Button>
                      <Button className="bg-transparent border border-[#FBFBFF]/60 text-[#FBFBFF]/60 rounded-none font-semibold h-9">
                        get started
                      </Button>
                      <Button className="text-black rounded-none font-bold h-9">
                        get started
                      </Button>
                    </div>
                  </div>
                  <div>
                    <CardTitle>Platform</CardTitle>
                    <div className="flex items-center gap-3 mt-4">
                      <Button className="bg-transparent border border-[#FBFBFF]/60 text-[#FBFBFF]/60 rounded-none font-semibold h-9">
                        get started
                      </Button>
                      <Button className="text-black rounded-none font-bold h-9">
                        get started
                      </Button>
                      <Button className="bg-transparent border border-[#FBFBFF]/60 text-[#FBFBFF]/60 rounded-none font-semibold h-9">
                        get started
                      </Button>
                    </div>
                  </div>
                  <div>
                    <CardTitle className="mb-3">boost method</CardTitle>
                    <Button className="text-black rounded-none font-bold h-9">
                      get started
                    </Button>
                    <div className="flex items-center gap-3 mt-4">
                      <Button className="bg-transparent border border-[#FBFBFF]/60 text-[#FBFBFF]/60 rounded-none font-semibold h-9">
                        get started
                      </Button>
                      <Button className="bg-transparent border border-[#FBFBFF]/60 text-[#FBFBFF]/60 rounded-none font-semibold h-9">
                        get started
                      </Button>
                    </div>
                  </div>
                  <div>
                    <CardTitle className="mb-3">execution options</CardTitle>
                    <div className="flex items-center gap-3 mt-4">
                      <Button className="bg-transparent border border-[#FBFBFF]/60 text-[#FBFBFF]/60 rounded-none font-semibold h-9">
                        get started
                      </Button>
                      <Button className="bg-transparent border border-[#FBFBFF]/60 text-[#FBFBFF]/60 rounded-none font-semibold h-9">
                        get started
                      </Button>{" "}
                    </div>
                  </div>
                  <div>
                    <CardTitle className="mb-3">additional options</CardTitle>
                    <div className="flex flex-col items-start gap-3 mt-4">
                      <div className="flex items-center justify-between w-full space-x-2">
                        <div className="flex items-center gap-1">
                          <Checkbox2
                            id="dualDestiny"
                            bgColor={"bg-primaryColor"}
                            color="text-black"
                          />
                          <label
                            htmlFor="dualDestiny"
                            className="text-xs uppercase text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Unlock dual destiny options
                          </label>
                        </div>
                        <p className="text-xs font-semibold">$12.00</p>
                      </div>
                      <div className="flex items-center justify-between w-full space-x-2">
                        <div className="flex items-center gap-1">
                          <Checkbox2
                            id="campaign"
                            bgColor={"bg-primaryColor"}
                            color="text-black"
                          />
                          <label
                            htmlFor="campaign"
                            className="text-xs uppercase text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            the final shape legendary campaign
                          </label>
                        </div>
                        <p className="text-xs font-semibold">$27.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <CardTitle className="mb-3">date & time</CardTitle>
                    <div className="grid grid-cols-2 items-center gap-3 mt-4">
                      <Button className="text-black rounded-none font-bold h-9">
                        get started
                      </Button>
                      <DynamicSelect
                        placeholder="schedule"
                        className="flex items-center "
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="uppercase font-thin text-sm">
                      <span className="font-semibold">1 hour</span> Average
                      start time
                    </p>
                    <p className="uppercase font-thin text-sm">
                      <span className="font-semibold">1 hour</span> order
                      completion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="border-b-0 bg-white/5 backdrop-blur-lg p-4"
        >
          <AccordionTrigger className="hover:no-underline text-2xl uppercase font-semibold">
            {" "}
            <div className="flex items-center gap-2">
              Lorem ipsum dolor sit amet
              <span className="bg-white/20 backdrop-blur-md px-2 text-xs py-1 border border-white/50 rounded-full">
                07
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Bundle;
