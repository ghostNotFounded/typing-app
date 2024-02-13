"use client";

import { Navlinks } from "@/constants";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MainNav = () => {
  const pathname = usePathname();

  return (
    <div className="flex space-x-5">
      {Navlinks.map((link) => (
        <Link href={link.href} key={link.name} aria-label={link.name}>
          <span className={pathname === link.href ? "text-teal" : ""}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger aria-label={link.name}>
                  {link.icon}
                </TooltipTrigger>
                <TooltipContent>
                  <p>{link.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </span>
        </Link>
      ))}
    </div>
  );
};

export default MainNav;
