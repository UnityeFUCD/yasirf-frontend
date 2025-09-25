import React from "react";
import Container from "@/pages/Shared/Container";
import Jobdescription from "../DynamicComponents/Jobdetail/Jobdescription";

const Must = () => {
  return (
    <section>
      <Container className="bg-[#05091D] pt-[44px] lg:px-[150px] px-4 overflow-hidden">
        <h3 className="text-[#FBFBFF] lg:text-[52px] text-[32px] font-medium  uppercase">
          You must have
        </h3>
        <div className="">
          <Jobdescription
            heading="Technology skills"
            subheading="Nibh accumsan tincidunt ac mi faucibus ullamcorper suscipit. Ultrices nisi eget eu suscipit ut facilisi id vulputate. Turpis tempor curabitur arcu rhoncus sit nunc. Pulvinar tellus vestibulum aliquam integer ut diam. Dolor sit eu ac et nulla accumsan. Pretium condimentum facilisis porttitor eu. Pretium enim mattis diam praesent. Adipiscing volutpat dui etiam amet fermentum purus."
          />
          <Jobdescription
            heading="Communication"
            subheading="Nibh accumsan tincidunt ac mi faucibus ullamcorper suscipit. Ultrices nisi eget eu suscipit ut facilisi id vulputate. Turpis tempor curabitur arcu rhoncus sit nunc. Pulvinar tellus vestibulum aliquam integer ut diam. Dolor sit eu ac et nulla accumsan. Pretium condimentum facilisis porttitor eu. Pretium enim mattis diam praesent. Adipiscing volutpat dui etiam amet fermentum purus."
          />
          <Jobdescription
            heading="Experience"
            subheading="Nibh accumsan tincidunt ac mi faucibus ullamcorper suscipit. Ultrices nisi eget eu suscipit ut facilisi id vulputate. Turpis tempor curabitur arcu rhoncus sit nunc. Pulvinar tellus vestibulum aliquam integer ut diam. Dolor sit eu ac et nulla accumsan. Pretium condimentum facilisis porttitor eu. Pretium enim mattis diam praesent. Adipiscing volutpat dui etiam amet fermentum purus."
          />
        </div>
      </Container>
    </section>
  );
};

export default Must;
