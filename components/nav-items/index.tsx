import {Cog6ToothIcon, RectangleGroupIcon} from "@heroicons/react/24/outline";
import React from "react";


export const navItems = {
  student: [
    {
      label: 'Dashboard',
      href: '/',
      icon: <RectangleGroupIcon className="w-6 h-6" />
    },
    {
      label: 'Settings',
      href: '/settings',
      icon: <Cog6ToothIcon className="w-6 h-6" />
    }
  ]
}
