'use client'

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {Cog6ToothIcon, RectangleGroupIcon} from "@heroicons/react/24/outline";
import {usePathname} from "next/navigation";
import {Avatar, NextUIProvider} from "@nextui-org/react";
import {navItems} from "@/components/nav-items";


interface Props {
  children: React.ReactNode
}




const Layout = (props: Props) => {

  const pathname = usePathname()

  return (
    <NextUIProvider>
    <div
      style={{ backgroundImage: 'url(assets/background.png)'}}
      className="min-w-screen min-h-screen bg-gray-50 text-gray-900 space-y-5 bg-cover bg-center">
      <div className="mx-auto max-w-1440">
        <div className={'relative flex items-center justify-between py-3'}>
          <Image
            width={120}
            height={47}
            src={'/assets/logo.png'}
            alt={'knvas logo'}
            className="object-contain object-center scale-80"
          />

          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <div className="font-medium text-base">Darlene Robertson</div>
                <div className="text-sm">Student Portal</div>
              </div>
              <div className="bg-white w-16 h-16 flex items-center justify-center rounded-xl border">
                <Avatar isBordered radius="md" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-full mx-auto grid grid-cols-6 gap-x-5">
          <div className="relative">
            <div className="w-full space-y-2">
              {
                navItems['student'].map((menuItem,key) => (
                  <Link
                    key={key}
                    href={menuItem.href}
                    className={`inline-flex items-center space-x-2
                    w-full px-4 py-3 rounded-lg 
                   ${pathname === menuItem.href ? 'text-white bg-primary hover:text-white' : 'hover:text-primary'}
                   text-sm text-gray-800 font-medium`}
                  >
                    {menuItem.icon}
                    <span>{menuItem.label}</span>
                  </Link>
                ))
              }
            </div>
          </div>
          <div className="col-span-5">
            {props.children}
          </div>
        </div>
      </div>
    </div>
    </NextUIProvider>
  );
};

export default Layout;