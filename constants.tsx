import { NavlinkType } from "./types";

import { Crown, Info, Keyboard, Settings } from "lucide-react";

export const Navlinks: NavlinkType[] = [
  {
    name: "Test",
    href: "/",
    icon: <Keyboard size={20} />,
  },
  {
    name: "Leaderboard",
    href: "/leaderboard",
    icon: <Crown size={20} />,
  },
  {
    name: "About",
    href: "/about",
    icon: <Info size={20} />,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: <Settings size={20} />,
  },
];
