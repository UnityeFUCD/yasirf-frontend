import Container from "@/pages/Shared/Container";
import { Button } from "../ui/button";
import { exploreCharacter, eyebg } from "@/assets";

const ExpandExploreMore = () => {
  return (
    <Container>
      <div className="text-white flex items-center gap-2  relative">
        <div className="-mt-[360px]">
          <img src={eyebg} alt="" />
        </div>
        <div className="mt-20">
          <h2 className="text-[100px] uppercase font-medium leading-none">
            be aware,
            <br />{" "}
            <span className="text-nowrap">
              <span className="font-bold">explore</span> more!
            </span>
          </h2>
          <p className="mt-4 font-Manpore text-[#FBFBFF]/90 text-xl">
            Get the best Destiny 2 services, weapons, latest raids, difficult{" "}
            <br />
            challenges and much more.
          </p>
          <div className="py-10 ml-10 flex items-center gap-4">
            <Button className=" text-black border border-primaryColor rounded-none uppercase font-semibold">
              get started
            </Button>
            <Button className="text-primaryColor border border-primaryColor rounded-none uppercase bg-transparent font-semibold">
              get started
            </Button>
          </div>
        </div>
        <div className="h-[515px] overflow-hidden">
          <img src={exploreCharacter} alt="" />
        </div>
        <div className="absolute -bottom-20 left-1/2 size-[200px] bg-blue-900 blur-[100px] z-10"></div>
      </div>
    </Container>
  );
};

export default ExpandExploreMore;
