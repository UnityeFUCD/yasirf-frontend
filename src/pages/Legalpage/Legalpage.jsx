import { Legalbg } from "@/assets";
import Legaltabscontent from "@/components/DynamicComponents/legalpage/Legaltabscontent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Container from "@/pages/Shared/Container";

const Legalpage = () => {
  return (
    <section className="">
      <Container className='pt-[110px] pb-[77px] bg-[#05091D]'>
        <Tabs defaultValue="account" className="w-full">
          <div className="flex justify-between">
            <TabsList className="flex flex-col gap-2 px-6  pb-[439px] w-[300px]">
              <div className="flex flex-col gap-2 px-6 pt-6 pb-[439px] border-r   border-white/30 rounded-none">
                <TabsTrigger
                  value="account"
                  className="text-white  data-[state=active]:bg-primaryColor data-[state=active]:border-none text-[16px] font-bold uppercase  w-[202px] h-[42px] rounde4d-[4px] data-[state=active]:text-[#05091D] text-opacity-50 text-left"
                >
                  get started
                </TabsTrigger>
                <TabsTrigger
                  value="password1"
                  className="text-white  data-[state=active]:bg-primaryColor data-[state=active]:border-none text-[16px] font-bold uppercase  w-[202px] h-[42px] rounde4d-[4px] data-[state=active]:text-[#05091D] text-opacity-50 text-left"
                >
                  get started
                </TabsTrigger>
                <TabsTrigger
                  value="password2"
                  className="text-white  data-[state=active]:bg-primaryColor data-[state=active]:border-none text-[16px] font-bold uppercase  w-[202px] h-[42px] rounde4d-[4px] data-[state=active]:text-[#05091D] text-opacity-50 text-left"
                >
                  get started
                </TabsTrigger>
                <TabsTrigger
                  value="password3"
                  className="text-white  data-[state=active]:bg-primaryColor data-[state=active]:border-none text-[16px] font-bold uppercase  w-[202px] h-[42px] rounde4d-[4px] data-[state=active]:text-[#05091D] text-opacity-50 text-left"
                >
                  get started
                </TabsTrigger>
              </div>
            </TabsList>
            <div className=" h-[942px] w-full relative  mt-6 ml-6">
              <TabsContent value="account" className="w-full relative">
                <img src={Legalbg} alt="Legalbg" />
                <div className="absolute top-6 text-white left-6 text-3xl">
                  <Legaltabscontent />
                </div>
              </TabsContent>
              <TabsContent value="password1" className="w-full relative">
                <img src={Legalbg} alt="Legalbg" />
                <div className="absolute top-6 text-white left-6 text-3xl">
                  <Legaltabscontent />
                </div>
              </TabsContent>
              <TabsContent value="password2" className="w-full relative">
                <img src={Legalbg} alt="Legalbg" />
                <div className="absolute top-6 text-white left-6 text-3xl">
                  <Legaltabscontent />
                </div>
              </TabsContent>
              <TabsContent value="password3" className="w-full relative">
                <img src={Legalbg} alt="Legalbg" />
                <div className="absolute top-6 text-white left-6 text-3xl">
                  <Legaltabscontent />
                </div>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </Container>
    </section>
  );
};

export default Legalpage;
