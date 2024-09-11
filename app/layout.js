

import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "ShopNow",
  description: "This is shoping app provide everythiing in shoping related",
};
export default function RootLayout({children}) {
  return (
    <html lang="en">
      <head>
        <Script src="https://unpkg.com/@phosphor-icons/web"></Script>
      </head>
      <body className={inter.className}>
        <header>
          
        </header>
        {children}
      </body>
    </html>
  );
}
