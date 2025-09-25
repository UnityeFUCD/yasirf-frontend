import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import PropTypes from "prop-types";

const Checkbox2 = React.forwardRef(
  ({ color, bgColor, className, ...props }, ref) => (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        "peer h-4 w-4 shrink-0 rounded-sm border-2 border-zinc-700 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300",
        bgColor && `data-[state=checked]:bg-[#C8FF00]`, // Dynamically set bg color
        color && `data-[state=checked]:text-black`, // Dynamically set text color
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="flex items-center justify-center">
        <Check className="h-4 w-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
);

Checkbox2.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox2 };

Checkbox2.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  className: PropTypes.string,
};
