// import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hello John',
  description: 'This project is created by John Tovor, the Genius Coder.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen px-10`}>{children}</body>
    </html>
  )
}
