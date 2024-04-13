import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "@/components/ui/Header";
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PeerPair.dev",
  description: "PeerPair.dev is a platform for developers to collaborate and do pair programming with their peers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/logo.png?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={inter.className}>
          <Providers>
            <div className="fixed top-0 w-full z-[50] border-transparent border-b">
              <Header/>
            </div>
              <NextTopLoader />
            <div>
              {children}
              <Toaster />
            </div>
            
          </Providers>
        </body>
    </html>
  );
}
