import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"; // Tooltip and related components

import { RotateCcw } from "lucide-react";

const Test = () => {
  return (
    <section className="w-full flex flex-col items-center space-y-10">
      <div>{/* TODO: Add language changing option */}</div>

      <div className="max-w-6xl text-2xl overflow-hidden">
        <p className="opacity-40 max-h-[115px] leading-relaxed">
          little problem hello my world chicken apple can you eat what you do
          random word generator application programming interface hehe me is
          funny why you no funny little problem hello my world chicken apple can
          you eat what you do random word generator application programming
          interface hehe me is funny why you no funny
        </p>
      </div>

      <div>
        <TooltipProvider delayDuration={100}>
          {" "}
          <Tooltip>
            <TooltipTrigger aria-label="notification">
              {" "}
              {/* Tooltip trigger component */}
              <RotateCcw
                size={32}
                className="hover:text-white transition duration-100 ease-in rounded-md p-1"
                aria-label="Restart test"
              />{" "}
              {/* Bell icon */}
            </TooltipTrigger>
            <TooltipContent>
              {" "}
              {/* Tooltip content component */}
              <p>Restart test</p> {/* Tooltip text */}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </section>
  );
};

export default Test;
