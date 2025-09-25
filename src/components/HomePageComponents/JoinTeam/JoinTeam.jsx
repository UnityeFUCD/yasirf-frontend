import { paymentBg } from "@/assets";
import { Button } from "@/components/ui/button";

const JoinTeam = () => {
  return (
    <div className="bg-background max-w-[1440px] mx-auto relative border-gray-600 border-b overflow-hidden flex items-center justify-center px-4 md:px-8">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-[32px] lg:text-[56px] uppercase text-white leading-none text-center z-20 mt-[126px]">
          are you a{" "}
          <span className="font-bold">
            professional gamer <br className="hidden lg:block" />
          </span>{" "}
          or a <span className="font-bold">supplier</span> willing to work{" "}
          <br /> with vanguard boost?
        </h2>
        <p className="text-gray-400 text-center lg:text-xl font-Manpore mt-3 mb-[42px] lg:mb-12">
          Join our team of over 1000+ dedicated persons, who are making their
          earnings <br className="hidden lg:block" /> by doing what they like
          most.
        </p>
        <div>
          <Button className="font-bold rounded-none px-6 py-[18px]">
            start earning today
          </Button>
        </div>
        <div className="py-[60px] pb-[110px] lg:pb-[90px]">
          <img src={paymentBg} alt="payment" className="w-[90%] lg:w-full mx-auto" />
        </div>
      </div>
      <div className="bg-primaryColor/20 opacity-80 lg:opacity-100 absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-24 lg:bottom-40 lg:left-80 size-[299px] blur-[100px]" />
    </div>
  );
};

export default JoinTeam;
