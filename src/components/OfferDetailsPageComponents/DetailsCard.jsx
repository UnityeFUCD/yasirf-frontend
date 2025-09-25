import Container from "@/pages/Shared/Container";
import CardTitle from "./CardTitle";
import { Button } from "../ui/button";
import { Checkbox2 } from "../ui/checkbox2";
import { DynamicSelect } from "../DynamicComponents/DynamicSelect";

const DetailsCard = () => {
  return (
    <Container>
      <div className="relative">
        <div
          className="absolute -mt-[340px] top-0 right-20 z-20 w-[377px] h-[1958px] p-8 border border-[#F30]/50 bg-background/20 backdrop-blur-[5px] overflow-hidden"
          style={{
            background: `lightgray 0% 0% / 271.43px 271.43px repeat, rgba(255, 51, 0, 0.04)`,
          }}
        >
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="flex items-center   gap-1 text-xs uppercase bg-[#F30] text-white rounded-3xl w-fit px-2 py-1">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M7.5 2C8.56087 2 9.57828 2.42143 10.3284 3.17157C11.0786 3.92172 11.5 4.93913 11.5 6C11.5 7.06087 11.0786 8.07828 10.3284 8.82843C9.57828 9.57857 8.56087 10 7.5 10C6.43913 10 5.42172 9.57857 4.67157 8.82843C3.92143 8.07828 3.5 7.06087 3.5 6C3.5 4.93913 3.92143 3.92172 4.67157 3.17157C5.42172 2.42143 6.43913 2 7.5 2ZM7.5 3C6.70435 3 5.94129 3.31607 5.37868 3.87868C4.81607 4.44129 4.5 5.20435 4.5 6C4.5 6.79565 4.81607 7.55871 5.37868 8.12132C5.94129 8.68393 6.70435 9 7.5 9C8.29565 9 9.05871 8.68393 9.62132 8.12132C10.1839 7.55871 10.5 6.79565 10.5 6C10.5 5.20435 10.1839 4.44129 9.62132 3.87868C9.05871 3.31607 8.29565 3 7.5 3ZM7 4H7.75V5.89L8.915 7.055L8.385 7.585L7 6.2V4ZM1 9C0.867392 9 0.740215 8.94732 0.646447 8.85355C0.552678 8.75979 0.5 8.63261 0.5 8.5C0.5 8.36739 0.552678 8.24021 0.646447 8.14645C0.740215 8.05268 0.867392 8 1 8H2.915C3.07 8.355 3.27 8.69 3.5 9H1ZM1.5 6.5C1.36739 6.5 1.24021 6.44732 1.14645 6.35355C1.05268 6.25979 1 6.13261 1 6C1 5.86739 1.05268 5.74021 1.14645 5.64645C1.24021 5.55268 1.36739 5.5 1.5 5.5H2.525L2.5 6L2.525 6.5H1.5ZM2 4C1.86739 4 1.74021 3.94732 1.64645 3.85355C1.55268 3.75979 1.5 3.63261 1.5 3.5C1.5 3.36739 1.55268 3.24021 1.64645 3.14645C1.74021 3.05268 1.86739 3 2 3H3.5C3.27 3.31 3.07 3.645 2.915 4H2Z"
                      fill="#FBFBFF"
                    />
                  </svg>
                </span>
                expiring in 2d, 3hrs
              </span>
              <span className="flex items-start gap-1 text-xs uppercase bg-[#7FFFD4] text-black font-medium rounded-3xl w-fit px-2 py-1">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_2460_13206)">
                      <path
                        d="M11.5701 5.99405C11.5701 5.86619 11.5072 5.7538 11.4116 5.6833L11.4136 5.67983L10.0666 4.90218L10.842 3.55924L10.8394 3.55765C10.8638 3.50229 10.8749 3.44195 10.8717 3.38152C10.8685 3.32109 10.8512 3.26226 10.821 3.20978C10.7906 3.15738 10.7483 3.11289 10.6974 3.07991C10.6466 3.04693 10.5887 3.02639 10.5285 3.01995V3.01619H8.9729V1.46507H8.96972C8.96322 1.40491 8.94264 1.34711 8.90967 1.29637C8.87669 1.24562 8.83224 1.20335 8.7799 1.17297C8.72736 1.14268 8.6684 1.12525 8.60784 1.12211C8.54728 1.11897 8.48683 1.13021 8.43145 1.15491L8.42957 1.15159L7.0599 1.94239L6.30146 0.628623L6.29871 0.630212C6.26299 0.581361 6.21628 0.541601 6.16235 0.514145C6.10841 0.48669 6.04878 0.47231 5.98826 0.472168C5.86041 0.472168 5.74787 0.53501 5.67752 0.630646L5.67405 0.628623L4.90304 1.96406L3.57541 1.19753L3.57382 1.20027C3.51846 1.17583 3.45813 1.16475 3.39769 1.16794C3.33726 1.17112 3.27843 1.18848 3.22595 1.21862C3.17353 1.24903 3.12901 1.29136 3.09601 1.34219C3.063 1.39301 3.04243 1.4509 3.03598 1.51116H3.03208V3.05318H1.49902V3.05621C1.43885 3.06272 1.38106 3.08329 1.33031 3.11627C1.27957 3.14924 1.23729 3.1937 1.20691 3.24604C1.17675 3.29856 1.15939 3.35746 1.15623 3.41794C1.15306 3.47843 1.16419 3.53881 1.18871 3.5942L1.18538 3.59622L1.94325 4.90897L0.586143 5.69255L0.587732 5.69529C0.538881 5.73101 0.49912 5.77773 0.471665 5.83166C0.444209 5.88559 0.429829 5.94523 0.429688 6.00575C0.429688 6.1336 0.49253 6.24614 0.588165 6.31649L0.586143 6.31996L1.93313 7.09761L1.15779 8.44056L1.16039 8.442C1.13595 8.49736 1.12487 8.55769 1.12806 8.61813C1.13124 8.67856 1.1486 8.73739 1.17874 8.78987C1.20916 8.84227 1.25151 8.88675 1.30233 8.91973C1.35316 8.95271 1.41103 8.97326 1.47128 8.9797V8.9836H3.02673V10.5346H3.02991C3.0432 10.6525 3.10922 10.7628 3.21974 10.8267C3.27231 10.8569 3.33126 10.8742 3.3918 10.8774C3.45234 10.8805 3.51277 10.8693 3.56818 10.8447L3.57006 10.8481L4.93973 10.0573L5.69817 11.371L5.70092 11.3694C5.73664 11.4183 5.78336 11.458 5.83729 11.4855C5.89122 11.513 5.95086 11.5273 6.01137 11.5275C6.13923 11.5275 6.25176 11.4646 6.32212 11.3691L6.32544 11.371L7.09645 10.0356L8.42422 10.8021L8.42581 10.7994C8.48117 10.8238 8.54151 10.8349 8.60194 10.8317C8.66237 10.8285 8.7212 10.8112 8.77368 10.781C8.8261 10.7506 8.87062 10.7083 8.90363 10.6575C8.93663 10.6066 8.9572 10.5487 8.96366 10.4885H8.96756V8.94662H10.5008V8.94358C10.5609 8.93708 10.6187 8.9165 10.6695 8.88353C10.7202 8.85055 10.7625 8.8061 10.7929 8.75376C10.823 8.70121 10.8404 8.64229 10.8436 8.58178C10.8467 8.52127 10.8356 8.46086 10.8111 8.40545L10.8144 8.40357L10.0565 7.09082L11.4136 6.30725L11.412 6.3045C11.4609 6.26878 11.5007 6.22206 11.5281 6.16813C11.5556 6.1142 11.5699 6.05456 11.5701 5.99405ZM5.09186 7.64022L3.66945 7.0118L4.29715 8.0989L3.94235 8.30375L2.97992 6.63706L3.3447 6.42628L4.72145 7.02755L4.11686 5.98047L4.47181 5.77562L5.43395 7.44231L5.09186 7.64022ZM5.76391 7.25219L4.80163 5.58535L5.98118 4.90449L6.16147 5.21683L5.33672 5.69284L5.53868 6.04273L6.34581 5.57683L6.5261 5.88888L5.71898 6.35506L5.93827 6.73486L6.76302 6.25885L6.94332 6.57118L5.76391 7.25219ZM8.49516 5.67536L7.54198 4.69964L7.91282 6.01138L7.53562 6.22923L6.09603 4.83818L6.49331 4.60877L7.48116 5.6443L7.10309 4.25671L7.38047 4.09665L8.39071 5.11931L7.98765 3.74603L8.38493 3.51662L8.8725 5.45765L8.49516 5.67536Z"
                        fill="#05091D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2460_13206">
                        <rect width="12" height="12" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                New Arrival
              </span>
            </div>
            <div>
              <CardTitle>region</CardTitle>
              <div className="flex items-center gap-3 mt-4">
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
              <div className="flex items-center gap-3 mt-4">
                <Button className="text-black rounded-none font-bold h-9">
                  get started
                </Button>
                <Button className="bg-transparent border border-[#FBFBFF]/60 text-[#FBFBFF]/60 rounded-none font-semibold h-9">
                  get started
                </Button>
              </div>
            </div>
            <div>
              <CardTitle className="mb-3">no. of guardians</CardTitle>
              <div className="flex items-center gap-3 mt-4">
                <Button className="bg-transparent border border-[#FBFBFF]/60 text-[#FBFBFF]/60 rounded-none font-semibold h-9">
                  get started
                </Button>
                <Button className="bg-transparent border border-[#FBFBFF]/60 text-[#FBFBFF]/60 rounded-none font-semibold h-9">
                  get started
                </Button>{" "}
              </div>
              <div className="flex items-center gap-3 mt-4">
                <Button className="text-black rounded-none font-bold h-9">
                  get started
                </Button>
              </div>
            </div>
            <div>
              <CardTitle className="mb-3">difficulty</CardTitle>
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
            <div>
              <CardTitle className="mb-3">trial options</CardTitle>
              <div className="flex items-center gap-3 mt-4">
                <DynamicSelect placeholder="No Wins After 7-0" />
              </div>
            </div>
            <div>
              <CardTitle className="mb-3">Raid Options</CardTitle>
              <div className="flex items-center gap-3 mt-4">
                <DynamicSelect placeholder="Complete weekly challenge" />
              </div>
            </div>
            <div>
              <CardTitle className="mb-3">Buy Red-Border Weapons</CardTitle>
              <div className="flex items-center gap-3 mt-4">
                <DynamicSelect placeholder="select weapon" />
              </div>
            </div>
            <div>
              <CardTitle className="mb-3">Exotic Raid WeapoN</CardTitle>
              <div className="flex items-center gap-3 mt-4">
                <DynamicSelect placeholder="Guaranteed droP" />
              </div>
            </div>
            <div>
              <CardTitle className="mb-3">Completion Type</CardTitle>
              <div className="flex items-center gap-3 mt-4">
                <Button className="bg-transparent border border-[#FBFBFF]/60 text-[#FBFBFF]/60 rounded-none font-semibold h-9">
                  get started
                </Button>
                <Button className="bg-transparent border border-[#FBFBFF]/60 text-[#FBFBFF]/60 rounded-none font-semibold h-9">
                  get started
                </Button>
              </div>
              <div className="mt-4">
                <Button className="text-black rounded-none font-bold h-9">
                  get started
                </Button>
              </div>
            </div>
            <div>
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
                <span className="font-semibold">1 hour</span> Average start time
              </p>
              <p className="uppercase font-thin text-sm">
                <span className="font-semibold">1 hour</span> order completion
              </p>
            </div>
            <div className="-mt-4">
              <p className="text-xl font-semibold">$20.99</p>
            </div>
            <div className="-mt-3">
              <Button className="text-black rounded-none font-bold h-12 w-full">
                get started
              </Button>
            </div>
            <div>
              <p className="text-sm font-thin uppercase">
                You need to have the Confidence Passage unlocked to buy this
                offer!
              </p>
            </div>
            <div className="px-4 py-3 bg-white/5 mt-1 flex items-center justify-between gap-1">
              <div className="flex items-center gap-3">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984"
                      stroke="#FBFBFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 6V18"
                      stroke="#FBFBFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="#FBFBFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <p className="text-sm uppercase">
                  found cheaper? <br /> we price match.
                </p>
              </div>
              <Button className="bg-transparent rounded-none text-primaryColor border border-primaryColor px-1 h-14 flex items-center justify-center">
                get started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DetailsCard;
