import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Banana, Bell, User } from "lucide-react";
import Link from "next/link";
import { auth } from "@/auth";

const MainNav = async () => {
  const session = await auth();

  return (
    <div className="flex space-x-5 items-center">
      <span>
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

      {!session ? (
        <Link href={"/auth"}>
          <User size={20} />
        </Link>
      ) : (
        <Link href={"/profile"}>
          <Avatar>
            <AvatarImage src={session.user?.image || "/user_fallback.jpeg"} />
            <AvatarFallback>
              <Banana size={32} className="text-teal" />
            </AvatarFallback>
          </Avatar>
        </Link>
      )}
    </div>
  );
};

export default MainNav;
