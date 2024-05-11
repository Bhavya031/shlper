import '../../styles/globals.css'
import { Questrial } from 'next/font/google'
import { Providers } from "./providers";
import { Link } from "@nextui-org/link";
import { getServerSession } from 'next-auth';
import clsx from "clsx";
// If loading a variable font, you don't need to specify the font weight
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
        </Providers>
      </body>
    </html>
  )
}