import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/customUi/CustomSelect";
import { FaChevronDown } from "react-icons/fa";
import LaunchesCard from "../HomePageComponents/Offers/LaunchesCard";

const FormSchema = z.object({
  gameName: z.string({
    required_error: "Please select an game Name to display.",
  }),
});
import { launchesCardPhoto } from "@/assets";

const SelectGame = () => {
  const [newLunchesActive, setNewLunchesActive] = useState(false);

  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className="lg:hidden bg-[linear-gradient(180deg,_#1A1D30_0%,_rgba(26,29,48,0.72)_50%,_rgba(26,29,48,0.51)_78%,_rgba(26,29,48,0)_100%)]  rounded-lg p-[18px] mb-8">
      <h3 className="font-bold text-white/70 uppercase tracking-[2.4px] mb-3">
        Select game
      </h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="gameName"
            render={({ field }) => (
              <FormItem className="w-full">
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="bg-[#fbfbff1a] rounded-full py-3 px-[18px] text-sm font-medium text-white">
                      <SelectValue placeholder="Select A Game" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="destiny2">DESTINY 2</SelectItem>
                    <SelectItem value="destiny3">DESTINY 3</SelectItem>
                    <SelectItem value="destiny4">DESTINY 4</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <div className="">
        <div
          className="flex justify-between items-center mt-7"
          onClick={() => setNewLunchesActive(!newLunchesActive)}
        >
          <h3 className="font-bold text-white/70 uppercase tracking-[2.4px]">
            new launches
          </h3>
          <FaChevronDown
            className={`text-white mr-[18px] transition-all duration-300 ${
              newLunchesActive && "rotate-180"
            }`}
          />
        </div>
        {newLunchesActive && (
          <div className="pt-4 grid sm:grid-cols-2 gap-6">
            <LaunchesCard
              image={launchesCardPhoto}
              customWidth="w-full"
              title="season 3 2024"
              description="PvE features three-player 'strikes' and dungeons and six-player raids"
            />
            <LaunchesCard
              image={launchesCardPhoto}
              customWidth="w-full"
              title="season 3 2024"
              description="PvE features three-player 'strikes' and dungeons and six-player raids"
            />
            <LaunchesCard
              image={launchesCardPhoto}
              customWidth="w-full"
              title="season 3 2024"
              description="PvE features three-player 'strikes' and dungeons and six-player raids"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectGame;
