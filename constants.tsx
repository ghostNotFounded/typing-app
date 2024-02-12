import { NavlinkType, SocialsType } from "./types";

import { Code2, Crown, Info, Keyboard, Settings } from "lucide-react";

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

export const Socials: SocialsType[] = [
  {
    id: "github",
    icon: <Code2 size={16} />,
    name: "Github",
    link: "",
  },
  {
    id: "github",
    icon: <Code2 size={16} />,
    name: "Github",
    link: "",
  },
  {
    id: "github",
    icon: <Code2 size={16} />,
    name: "Github",
    link: "",
  },
  {
    id: "github",
    icon: <Code2 size={16} />,
    name: "Github",
    link: "",
  },
];
