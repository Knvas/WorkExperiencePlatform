'use client'

import React from 'react';
import {Avatar, Divider, NextUIProvider} from "@nextui-org/react";
import Image from "next/image";
import {navItems} from "@/components/nav-items";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {SessionProvider, signOut, useSession} from "next-auth/react";
import {Session} from "next-auth";
import {UserType} from "@/types";
import SchoolIcon from "@/components/icons/schools";
import {ArrowLeftOnRectangleIcon} from "@heroicons/react/24/outline";
import SignOutIcon from "@/components/icons/signout";
import {Card, CardBody, CardHeader} from "@nextui-org/card";

interface Props {
  children: React.ReactNode,
  session: Session
}

const portalName = {
  'admin': 'Admin Portal',
  'student': 'Student Portal',
  'school': 'School Portal'
}


const LayoutClient = (props: Props) => {
  const pathname = usePathname()
  const user: UserType = JSON.parse(props.session.user?.name as string)

  return (
    <SessionProvider session={{...props.session, expires: ''}}>
      <NextUIProvider>
        <div
          style={{ backgroundImage: 'url(assets/background.png)'}}
          className="min-w-screen min-h-screen bg-gray-50 text-gray-900 space-y-5 bg-cover bg-center px-4">
          <div className="mx-auto max-w-1440 h-screen flex flex-col">

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
                    <div className="font-medium text-base">{user.name}</div>
                    <div className="text-sm">{
                      //@ts-ignore
                      portalName[user.type]
                    }</div>
                  </div>
                  <div className="bg-white w-16 h-16 flex items-center justify-center rounded-xl border">
                    <Avatar isBordered radius="md" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-full mx-auto grid grid-cols-7 gap-x-3 flex-1 overflow-hidden">
              <div className="relative h-full flex flex-col pb-5 justify-between">
                <div className="w-full space-y-2">
                    {
                      //@ts-ignore
                      navItems[user.type].map((menuItem,key) => (
                        <Link
                          key={key}
                          href={menuItem.href}
                          className={`inline-flex items-center space-x-2
                    w-full px-4 py-3 rounded-lg 
                   ${pathname.split('/')[1] === menuItem.href.split('/')[1] ? 'text-white bg-primary hover:text-white' : 'hover:text-primary'}
                   text-sm text-gray-800 font-medium`}
                        >
                          {menuItem.icon()}
                          <span>{menuItem.label}</span>
                        </Link>
                      ))
                    }
                  </div>
                <div
                  onClick={() => signOut()}
                  className={`inline-flex items-center space-x-2
                    w-full px-4 py-3 rounded-lg cursor-pointer
                    hover:text-primary
                   text-sm text-gray-800 font-medium`}
                >
                  <SignOutIcon />
                  <span>Sign Out</span>
                </div>
              </div>

              {props.children}

              </div>
          </div>
        </div>
      </NextUIProvider>
    </SessionProvider>

  );
};

export default LayoutClient;