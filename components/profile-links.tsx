"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ProfileDropdown from "./profile-dropdown";

import { usePathname } from "next/navigation";
import { Bell, ChevronDown, User } from "lucide-react";
import { useState } from "react";

const MainNav = () => {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);

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

      <div className="relative">
        {/* Drop down activator */}
        <div
          className={`relative flex cursor-pointer ${
            isOpen ? "text-teal" : ""
          }`}
          onClick={() => setOpen((prev) => !prev)}
        >
          <User size={20} />
          <ChevronDown
            size={20}
            className={`${isOpen ? "rotate-180" : ""} transition`}
          />
        </div>
        <ProfileDropdown open={isOpen} />
      </div>
    </div>
  );
};

export default MainNav;
