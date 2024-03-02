import '../../styles/globals.css'
import { Questrial } from 'next/font/google'
import { Metadata } from "next";
import { Providers } from "./providers";
import { Link } from "@nextui-org/link";
import { getServerSession } from 'next-auth';
import clsx from "clsx";
import { SpeedInsights } from '@vercel/speed-insights/next';

const QuestrialFont = Questrial({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
})
 
export default async function RootLayout({ children }) {
  const session = await getServerSession();

  return (
    <html lang="en" className='dark'>
      <body className={QuestrialFont.className}>
        <Providers>
          {children}
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  )
}