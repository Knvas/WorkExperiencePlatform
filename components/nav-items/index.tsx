import {RectangleGroupIcon} from "@heroicons/react/24/outline";
import React from "react";
import SettingsNav from "@/components/icons/settings-nav";
import StudentNav from "@/components/icons/student-nav";
import SchoolNav from "@/components/icons/school-nav";


const student = [
  {
    label: 'Dashboard',
    href: '/',
    icon: (active?: boolean) => <RectangleGroupIcon className="w-6 h-6" />
  },
  {
    label: 'Settings',
    href: '/settings',
    icon: (active?: boolean) =>  <SettingsNav />
  }
]

const school = [
  {
    label: 'Dashboard',
    href: '/',
    icon: (active?: boolean) => <RectangleGroupIcon className="w-6 h-6" />
  },
  {
    label: 'Student',
    href: '/student',
    icon: (active?: boolean) =>  <StudentNav />
  },
  {
    label: 'Settings',
    href: '/settings',
    icon: (active?: boolean) => <SettingsNav />
  }

]

const superAdmin = [
  {
    label: 'Dashboard',
    href: '/',
    icon: (active?: boolean) => <RectangleGroupIcon className="w-6 h-6" />
  },
  {
    label: 'Student',
    href: '/student',
    icon: (active?: boolean) => <StudentNav />
  },
  {
    label: 'School',
    href: '/school',
    icon: (active?: boolean) => <SchoolNav />
  },
  {
    label: 'Settings',
    href: '/settings',
    icon: (active?: boolean) => <SettingsNav />
  }
]


export const navItems = { student, school, superAdmin }
