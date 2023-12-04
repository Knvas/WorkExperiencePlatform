import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {Cog6ToothIcon, RectangleGroupIcon} from "@heroicons/react/24/outline";
import {redirect, usePathname} from "next/navigation";
import {Avatar, NextUIProvider} from "@nextui-org/react";
import {navItems} from "@/components/nav-items";
import LayoutClient from "@/app/(dashboard)/layoutClient";
import {getServerSession, User} from "next-auth";
import {handler} from "@/app/api/auth/[...nextauth]/auth-config";
import {SessionProvider} from "next-auth/react";


interface Props {
  children: React.ReactNode
}




const Layout = async (props: Props) => {

  const session = await getServerSession(handler)
  if(!session){
    redirect('/login')
  }

  return (
    <LayoutClient
      session={{ ...session, expires: '' }}>
      {props.children}
    </LayoutClient>
  );
};

export default Layout;