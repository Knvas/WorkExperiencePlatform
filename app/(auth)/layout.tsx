'use client'

import React from 'react';
import Image from "next/image";
import {NextUIProvider} from "@nextui-org/react";

interface Props {
  children: React.ReactNode
}


const AuthLayout = (props: Props) => {
  return (
    <NextUIProvider>
      <div className="w-min-screen min-h-screen bg-center bg-cover bg-no-repeat overflow-scroll" style={{ backgroundImage: 'url(assets/auth_bg.png)' }}>
        <div className="max-w-1440 mx-auto p-4">
          <div
            className="md:w-[400px] mx-auto lg:w-[450px] backdrop-blur-xl bg-white  shadow translate-y-40 rounded-md py-16 px-12 overflow-hidden"
          >
            <div className="relative h-10">
              <Image
                fill
                src={'/assets/logo.png'}
                alt={'knvas logo'}
                className="object-contain object-center"
                />
            </div>

            {props.children}
          </div>
        </div>
      </div>
    </NextUIProvider>
  );
};

export default AuthLayout;