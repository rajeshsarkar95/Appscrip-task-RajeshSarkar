import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Footer from "./components/footer/page"
import Navbar from "./components/navbar/page";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({ children }){
  return (
    <html lang="en">
      <head>
      <Script src="https://unpkg.com/@phosphor-icons/web"></Script>

      </head>
      <body 
      className={inter.className}>
        <header>
        <Navbar/>
        </header>
        {children}
          <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  );
}