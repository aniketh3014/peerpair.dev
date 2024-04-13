import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "@/components/ui/Header";
import NextTopLoader from 'nextjs-toploader';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PeerPair",
  description: "PeerPair is a platform for finding study partners."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Providers>
            <div className="fixed top-0 w-full z-[50] border-transparent border-b">
              <Header/>
            </div>
              <NextTopLoader />
            <div>
              {children}
            </div>
            
          </Providers>
        </body>
    </html>
  );
}
