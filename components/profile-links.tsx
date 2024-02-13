// Importing necessary components
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"; // Tooltip and related components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Avatar component and its subcomponents
import { Banana, Bell, User } from "lucide-react"; // Icon components from Lucide React

import Link from "next/link"; // Next.js Link component
import { auth } from "@/auth"; // Authentication module

// MainNav component definition
const MainNav = async () => {
  // Fetching user session
  const session = await auth();

  return (
    <div className="flex space-x-5 items-center">
      {" "}
      {/* Main navigation div */}
      <span>
        {" "}
        {/* Container for the bell icon */}
        <TooltipProvider delayDuration={100}>
          {" "}
          {/* Tooltip provider component */}
          <Tooltip>
            <TooltipTrigger aria-label="notification">
              {" "}
              {/* Tooltip trigger component */}
              <Bell size={20} /> {/* Bell icon */}
            </TooltipTrigger>
            <TooltipContent>
              {" "}
              {/* Tooltip content component */}
              <p>Notifications</p> {/* Tooltip text */}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </span>
      {!session ? (
        // If user not logged in
        <Link href={"/auth"}>
          {" "}
          {/* Link to the authentication page */}
          <User size={20} /> {/* User icon */}
        </Link>
      ) : (
        <Link href={"/profile"}>
          {" "}
          {/* If user is logged in, link to the profile page */}
          <Avatar>
            {" "}
            {/* Avatar component */}
            <AvatarImage
              src={session.user?.image || "/user_fallback.jpeg"}
              alt="user-profile-image"
              aria-label="Visit user profile"
            />{" "}
            {/* User image or fallback image */}
            <AvatarFallback>
              {" "}
              {/* Avatar fallback component */}
              <Banana size={32} className="text-teal" />{" "}
              {/* Banana icon as fallback */}
            </AvatarFallback>
          </Avatar>
        </Link>
      )}
    </div>
  );
};

// Exporting MainNav component
export default MainNav;
