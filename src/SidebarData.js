import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/menu",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: <IoIcons.IoMdMap />,
        cName: "nav-text",
    },
  {
    title: "Map",
    path: "/user78141",
    icon: <IoIcons.IoMdMap />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
