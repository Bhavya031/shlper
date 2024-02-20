import { Questrial } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const QuestrialFont = Questrial({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
})
 
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={QuestrialFont.className}>
      <body>{children}</body>
    </html>
  )
}