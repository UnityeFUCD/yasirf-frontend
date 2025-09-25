import AppSection from "@/components/HomePageComponents/AppSection/AppSection";
import Banner from "@/components/HomePageComponents/Banner";
import ClientFeedback from "@/components/HomePageComponents/ClientFeedback/ClientFeedback";
import HowItWorks from "@/components/HomePageComponents/HowItWorks/HowItWorks";
import JoinTeam from "@/components/HomePageComponents/JoinTeam/JoinTeam";
import Offers from "@/components/HomePageComponents/Offers/Offers";
import Process from "@/components/HomePageComponents/Process/Process";
import Promote from "@/components/HomePageComponents/PromoteSection/Promote";
import Questions from "@/components/HomePageComponents/Questions/Qustions";
import WhyChooseUs from "@/components/HomePageComponents/WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Banner />
      <Offers />
      <Process />
      <HowItWorks />
      <WhyChooseUs />
      <Questions />
      <ClientFeedback />
      <Promote />
      <AppSection />
      <JoinTeam />
    </div>
  );
};

export default Home;
