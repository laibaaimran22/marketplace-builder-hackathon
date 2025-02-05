
import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { satoshi } from "@/styles/fonts";
import TopBanner from "@/components/layout/Banner/TopBanner";
import TopNavbar from "@/components/layout/Navbar/TopNavbar/index";
import Footer from "@/components/layout/Footer/index";
import HolyLoader from "holy-loader";
import Providers from "./providers";
import { ClerkProvider } from "@clerk/nextjs";


export const metadata: Metadata = {
  title: "SHOP.CO",
  description: "NextGeneration E-Commerce Platform by LaibaImran",
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <ClerkProvider>
    <html lang="en">
      
        <body className={satoshi.className}>
          <HolyLoader color="#868686" />
          <TopBanner />
          <Providers>
            <TopNavbar /> 
            {children}
          </Providers>
          <Footer />
        </body>
      </html></ClerkProvider>
  );
}