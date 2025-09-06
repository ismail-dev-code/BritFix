"use client"
import { SessionProvider } from "next-auth/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import WhyBritFix from "./components/WhyBritFix";

export default function Home() {
  return (
   <>
   <SessionProvider>
   <Navbar/>
   <Banner/>
   <WhyBritFix/>
   <Footer/>
   </SessionProvider>
   </>
  );
}
