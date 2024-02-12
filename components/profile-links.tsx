"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { usePathname } from "next/navigation";
import { Bell, ChevronDown, User } from "lucide-react";
import Link from "next/link";

const MainNav = () => {
  const pathname = usePathname();

  return (
    <div className="flex space-x-5">
      <span className={pathname === "/notification" ? "text-teal" : ""}>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger aria-label="notification">
              <Bell size={20} />
            </TooltipTrigger>
            <TooltipContent>
              <p>Notifications</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </span>

      <Link href={"/profile"} className={`relative flex cursor-pointer`}>
        <User size={20} />
      </Link>
    </div>
  );
};

export default MainNav;
