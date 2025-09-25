import Container from "@/pages/Shared/Container";
import { Button } from "../ui/button";
import PriceAndAwards from "./PriceAndAwards";

const PersonalDetails = () => {
  return (
    <Container>
      <div className="-mt-20 pb-96">
        <div
          className="p-6 bg-white/5  z-20 h-96 max-w-[720px] mx-auto"
          style={{
            background:
              "linear-gradient(180deg, #161A31 0%, rgba(22,26,49,0.00) 100%)",
          }}
        >
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold uppercase">
              personal information
            </h3>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="uppercase font-medium">full name</label>
                <input
                  type="text"
                  placeholder="van.boost"
                  className="p-5 outline-none border border-gray-600/60 bg-transparent"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="uppercase font-medium">email</label>
                <input
                  type="email"
                  placeholder="mail@example.com"
                  className="p-5 outline-none border border-gray-600/60 bg-transparent"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold uppercase">billing address</h3>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="uppercase font-medium">
                  H no./ Building no./ Flat no.
                </label>
                <input
                  type="text"
                  placeholder="342"
                  className="p-5 outline-none border border-gray-600/60 bg-transparent"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="uppercase font-medium">locality</label>
                <input
                  type="text"
                  placeholder="Enter here"
                  className="p-5 outline-none border border-gray-600/60 bg-transparent"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="uppercase font-medium">city</label>
                <input
                  type="text"
                  placeholder="Enter here"
                  className="p-5 outline-none border border-gray-600/60 bg-transparent"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="uppercase font-medium">state</label>
                <input
                  type="text"
                  placeholder="Enter here"
                  className="p-5 outline-none border border-gray-600/60 bg-transparent"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="uppercase font-medium">Pin code</label>
                <input
                  type="text"
                  placeholder="Enter here"
                  className="p-5 outline-none border border-gray-600/60 bg-transparent"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="uppercase font-medium">country</label>
                <input
                  type="text"
                  placeholder="Enter here"
                  className="p-5 outline-none border border-gray-600/60 bg-transparent"
                />
              </div>
            </div>
            <div className="pt-10 -ml-8">
              <Button className="w-fit px-6 text-black py-4 font-bold  rounded-none">
                get started
              </Button>
            </div>
          </div>
        </div>
        <div className="pt-80">
          <PriceAndAwards />
        </div>
      </div>
    </Container>
  );
};

export default PersonalDetails;
