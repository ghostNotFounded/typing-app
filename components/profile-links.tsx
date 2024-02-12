"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { usePathname } from "next/navigation";
import { Banana, Bell } from "lucide-react";
import Link from "next/link";

const MainNav = () => {
  const pathname = usePathname();

  return (
    <div className="flex space-x-5 items-center">
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
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>
            <Banana size={32} className="text-teal" />
          </AvatarFallback>
        </Avatar>
      </Link>
    </div>
  );
};

export default MainNav;
