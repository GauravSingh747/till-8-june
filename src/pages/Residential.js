import React from "react";
import residential from "../assets/residential.mp4";
import Collections from "../components/Collections";
import Footer from "../components/footer/Footer";
import Navbar2 from "../components/Navbar2";
const Residential = () => {
  return (
    <div>
      <div className="banner  font-semibold ">
        <div className="overlay"> </div>
        <video src={residential} autoPlay loop muted playsinline />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
        <div className="banner-content">
          <Navbar2 />
          {/* <========= Topbar ======= /> */}
          <div className="flex justify-center  pt-[15rem] md:pt-[20rem]">
            <h1 className="text-5xl text-white">Residential</h1>
          </div>
        </div>
      </div>
      <Collections />
      <Footer />
    </div>
  );
};

export default Residential;
