import { feedbacksection, userOne, Women } from "@/assets";
import { Slider } from "@/components/DynamicComponents/Slider";

const ClientFeedback = () => {
  const feedbackData = [
    {
      name: "Arlenia Arsum",
      username: "BARLENE",
      profile_image: <img src={Women} alt="" className="w-20 h-20" />,
      verified: true,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus m...",
      date: "23 Nov 2021",
    },
    {
      name: "Arlenia Arsum",
      username: "BARLENE",
      profile_image: <img src={Women} alt="" className="w-20 h-20" />,
      verified: true,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus m...",
      date: "23 Nov 2021",
    },
    {
      name: "Arlenia Arsum",
      username: "BARLENE",
      profile_image: <img src={Women} alt="" className="w-20 h-20" />,
      verified: true,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus m...",
      date: "23 Nov 2021",
    },
    {
      name: "Arlenia Arsum",
      username: "BARLENE",
      profile_image: <img src={Women} alt="" className="w-20 h-20" />,
      verified: true,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus m...",
      date: "23 Nov 2021",
    },
  ];

  return (
    <>
      {/* <div className="max-w-[1440px] w-full mx-auto relative">
        <img src={feedbacksection} alt="" className="" />
        <div className="px-4 px-8 lg:px-[165px]   absolute top-[10%] left-[10%] text-white z-10"></div>
        <div className="absolute bottom-0 left-0 pt-[84.26px] w-full text-white max-w-[1440px]">
          <div className=" "><Slider data={feedbackData} /></div>
        </div>
        <div className="absolute bottom-[0%] right-[0%] h-[400px] w-[800px] bg-gradient-to-r from-transparent to-black" />
        <div className="absolute bottom-[0%] left-[0%] h-[400px] w-[800px] bg-gradient-to-r from-black to-transparent" />
      </div> */}

      {/* revised code */}
      <div className="relative text-white">
        <div className="border-b border-[#FBFBFF3A] z-10 relative">
          <div className="border-r border-[#FBFBFF3A] w-fit flex text-sm text-white">
            <p className="py-7 ml-4 md:ml-8 uppercase tracking-[2.38px]">
              [05]
            </p>
            <p className="py-7 mx-[18px] uppercase tracking-[2.38px]">
              clients feedback
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-[54px] mb-[65px] lg:mb-[84px] z-10 relative px-4 md:px-8">
          <h1 className="text-[32px] lg:text-[56px] uppercase text-center">
            By Gamers For <span className="font-bold">Gamers</span>
          </h1>
          <p className="text-xl lg:text-[32px] text-center text-[#82904C] uppercase max-w-[764px] mt-[42px] lg:mt-[54px]">
            One of the standout features of this gaming website is its{" "}
            <span className="text-primaryColor">extensive library</span> of game
            guides and tutorials. It has helped me level up my skills, conquer
            challenging quests, and discover{" "}
            <span className="text-primaryColor">
              hidden secrets within games.
            </span>
          </p>
          <div className="pt-[19px] flex items-start gap-4">
            <img
              src={userOne}
              alt="user"
              className="w-[61.739px] h-[61.739px] rounded-full
              "
            />
            <div>
              <p className="text-2xl">Arlene McCoy</p>
              <p className="text-gray-300 uppercase">team f113</p>
            </div>
          </div>
        </div>
        <Slider data={feedbackData} />

        <figure className="h-full w-full overflow-hidden opacity-20 absolute top-0 left-0">
          <img
            src="https://i.ibb.co.com/b5thKyDJ/feedback-Bg.png"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </figure>
      </div>
    </>
  );
};

export default ClientFeedback;
