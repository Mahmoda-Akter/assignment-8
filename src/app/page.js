import Banner from "@/component/Banner/Banner";
import Featured from "@/component/Featured/Featured";
import Footer from "@/component/Footer/Footer";
import Navber from "@/component/Navbar/Navber";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
   <div>
      <Navber></Navber>
      <Banner></Banner>
      <Suspense fallback={<div className="flex justify-center items-center h-40"><span className="loading loading-spinner loading-xl"></span></div>}>
        <Featured></Featured>
      </Suspense>
      <Footer></Footer>
   </div>
  );
}
