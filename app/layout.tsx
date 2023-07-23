import { Metadata } from 'next';
import './styles/globals.css';
import { Inter } from 'next/font/google';
import Showcase from './showcase';
import Header from './header';
import Footer from './footer';

const inter = Inter({ subsets: ['latin'] })

export interface RootLayoutProps{
  title: string;
  description: string;
  keywords: string;
  children: any;
}

export const metadata: Metadata = {
  title: 'DJ Events',
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en">      
      <body className={inter.className}>
        <Header />
        <Showcase />
        {children}
        <Footer />
      </body>
    </html>
  )
}
