import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import PropTypes from "prop-types";

export function DynamicSelect({ placeholder, className }) {
  return (
    <Select className="text-black bg-transparent">
      <SelectTrigger
        className={cn(
          "w-full text-gray-200  uppercase bg-transparent border border-gray-500 rounded-none focus:ring-0 focus:ring-offset-0",
          className
        )}
      >
        <SelectValue placeholder={placeholder ?? "Select"} className="mt-2" />
      </SelectTrigger>
      <SelectContent className="bg-background/20 backdrop-blur-sm text-white border border-gray-500">
        <SelectGroup>
          <SelectItem value="apple">test0</SelectItem>
          <SelectItem value="banana">test1</SelectItem>
          <SelectItem value="blueberry">test2</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

DynamicSelect.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
};
