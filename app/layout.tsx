'use client'

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import {NextUIProvider} from "@nextui-org/react";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </body>
    </html>
  )
}
