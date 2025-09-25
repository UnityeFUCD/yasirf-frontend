import { Net, Trainingbg, Traininglight } from "@/assets";
import Container from "@/pages/Shared/Container";
import React from "react";
import Supportcard from "../DynamicComponents/supportcard/Supportcard";

const Trainingcontrol = () => {
  return (
    <section className="">
      <Container className="pt-[108px] pb-[130px] relative px-[150px] overflow-hidden">
        <div className="flex justify-between">
          <div className="py-8 px-7 rounded-md bg-gradient-to-b from-[rgba(251,251,255,0.09)] to-[rgba(251,251,255,0)] w-[558px] h-[368px] relative z-50">
            <Supportcard
              Icon={Traingsvg}
              heading="reviews &"
              subheading="ratings"
              paragraph="At tempor aliquam quis mus ornare. Sapien velit magna dui lorem id. Turpis ultricies facilisis nec leo. Augue amet vestibulum ut cursus eget ac nisl. Volutpat habitasse elementum nisl turpis proin. Sit nullam at at gravida mattis tristique. Enim cursus orci facilisis nunc congue et scelerisque dolor. Habitant sed sed varius est neque pellentesque."
            />
          </div>
          <div className="py-8 px-7 rounded-md bg-gradient-to-b from-[rgba(251,251,255,0.09)] to-[rgba(251,251,255,0)] w-[558px] h-[368px] relative z-50">
            <Supportcard
              Icon={Traingsvg1}
              heading="quality  &"
              subheading="control"
              paragraph="At tempor aliquam quis mus ornare. Sapien velit magna dui lorem id. Turpis ultricies facilisis nec leo. Augue amet vestibulum ut cursus eget ac nisl. Volutpat habitasse elementum nisl turpis proin. Sit nullam at at gravida mattis tristique. Enim cursus orci facilisis nunc congue et scelerisque dolor. Habitant sed sed varius est neque pellentesque."
            />
          </div>
        </div>
        <img
          src={Trainingbg}
          alt="Trainingbg"
          className="absolute top-0 left-0 w-full h-full"
        />
        <img src={Net} alt="Net" className="absolute -top-6 right-0" />
        {/* <img src={Traininglight} alt="Traininglight" className="absolute bottom-0 left-0 rounded-lg "/> */}
        <div className="size-[350px] rounded-[399px] opacity-30 bg-[#C8FF00] blur-[150px] absolute bottom-0 left-0 z-10 overflow-hidden"></div>
      </Container>
    </section>
  );
};

export default Trainingcontrol;

const Traingsvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
  >
    <path
      d="M29.5 7C23.7084 7 19 11.9378 19 18.0116C19 23.9694 23.4432 28.7914 29.2347 29C29.4116 28.9768 29.5884 28.9768 29.7211 29C29.7653 29 29.7874 29 29.8316 29C29.8537 29 29.8537 29 29.8758 29C35.5347 28.7914 39.9779 23.9694 40 18.0116C40 11.9378 35.2916 7 29.5 7Z"
      fill="#C8FF00"
    />
    <path
      d="M40.6847 35.1687C34.5419 30.9438 24.5241 30.9438 18.3374 35.1687C15.5412 37.0995 14 39.7117 14 42.5057C14 45.2996 15.5412 47.8891 18.3153 49.7972C21.3977 51.9324 25.4489 53 29.5 53C33.5511 53 37.6023 51.9324 40.6847 49.7972C43.4588 47.8664 45 45.2769 45 42.4602C44.978 39.6663 43.4588 37.0768 40.6847 35.1687Z"
      fill="#C8FF00"
    />
    <path
      d="M47.4719 27.6252C47.6381 27.1137 48.3619 27.1137 48.5281 27.6252L49.4469 30.4532C49.5213 30.682 49.7345 30.8369 49.975 30.8369H52.9485C53.4864 30.8369 53.71 31.5252 53.2749 31.8413L50.8693 33.5891C50.6747 33.7305 50.5932 33.9811 50.6676 34.2099L51.5864 37.0379C51.7526 37.5494 51.1671 37.9748 50.732 37.6587L48.3264 35.9109C48.1318 35.7695 47.8682 35.7695 47.6736 35.9109L45.268 37.6587C44.8329 37.9748 44.2474 37.5494 44.4136 37.0379L45.3324 34.2099C45.4068 33.9811 45.3253 33.7305 45.1307 33.5891L42.7251 31.8413C42.29 31.5252 42.5136 30.8369 43.0515 30.8369H46.025C46.2655 30.8369 46.4787 30.682 46.5531 30.4532L47.4719 27.6252Z"
      fill="#C8FF00"
    />
  </svg>
);

const Traingsvg1 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M30 53C33.0204 53 36.0112 52.4051 38.8017 51.2492C41.5922 50.0934 44.1277 48.3992 46.2635 46.2635C48.3992 44.1277 50.0934 41.5922 51.2492 38.8017C52.4051 36.0112 53 33.0204 53 30C53 26.9796 52.4051 23.9888 51.2492 21.1983C50.0934 18.4078 48.3992 15.8723 46.2635 13.7365C44.1277 11.6008 41.5922 9.90663 38.8017 8.75077C36.0112 7.59491 33.0204 7 30 7C23.9 7 18.0499 9.42321 13.7365 13.7365C9.42321 18.0499 7 23.9 7 30C7 36.1 9.42321 41.9501 13.7365 46.2635C18.0499 50.5768 23.9 53 30 53ZM29.4071 39.3022L42.1849 23.9689L38.2596 20.6978L27.2707 33.8819L21.5846 28.1932L17.971 31.8068L25.6377 39.4734L27.6157 41.4514L29.4071 39.3022Z"
      fill="#C8FF00"
    />
  </svg>
);
