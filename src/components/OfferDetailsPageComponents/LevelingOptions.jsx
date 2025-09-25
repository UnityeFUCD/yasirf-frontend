import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function LevelingOptions() {
  return (
    <Accordion type="single" collapsible className="w-full px-5">
      <AccordionItem value="item-1" className="border-b-0 bg-[#161A32]">
        <AccordionTrigger
          className={"uppercase  px-5 font-thin text-[28px] hover:no-underline"}
        >
          Additional options
        </AccordionTrigger>
        <AccordionContent className="px-5">
          <p className="font-thin">
            Unlock dual destiny options for{" "}
            <span className="font-semibold">$12</span>
          </p>
          <p className="font-thin">
            The final shape legendary campaign{" "}
            <span className="font-semibold">$27</span>
          </p>
          <p className="font-thin">
            We will stream all the Chatterwhite Shader boosting processes for
            you. <span className="font-semibold">Free</span>
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-b-0 bg-[#161A32] mt-4">
        <AccordionTrigger
          className={"uppercase  px-5 font-thin text-[28px] hover:no-underline"}
        >
          requirements
        </AccordionTrigger>
        <AccordionContent className="px-5">
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="border-b-0 bg-[#161A32] mt-4">
        <AccordionTrigger
          className={"uppercase  px-5 font-thin text-[28px] hover:no-underline"}
        >
          how it works
        </AccordionTrigger>
        <AccordionContent className="px-5">
          Yes. Its animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className="border-b-0 bg-[#161A32] mt-4">
        <AccordionTrigger
          className={"uppercase  px-5 font-thin text-[28px] hover:no-underline"}
        >
          Why Choose Us
        </AccordionTrigger>
        <AccordionContent className="px-5">
          Yes. Its animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
