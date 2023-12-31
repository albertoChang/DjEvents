import { Metadata } from 'next';
import './styles/globals.css';
import { Inter } from 'next/font/google';
import Header from './components/header';
import Footer from './components/footer';

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
        {children}    
        <Footer />    
      </body>
    </html>
  )
}
