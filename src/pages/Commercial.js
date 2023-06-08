import React from "react";
import commercial from "../assets/commercial.mp4";
import Navbar from "../components/Navbar";
import Collections from "../components/Collections";
import Footer from "../components/footer/Footer";
import Navbar2 from "../components/Navbar2";
const Commercial = () => {
  return (
    <div>
      <div className="banner  font-semibold ">
        <div className="overlay"> </div>
        <video src={commercial} autoPlay loop muted />
        {/* ===== below code to make text popup above video */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
        <div className="banner-content">
          <Navbar2 />
          <div className="flex justify-center  pt-[15rem] md:pt-[20rem]">
            <h1 className="text-5xl text-white">Commercial</h1>
          </div>
          {/* <Topbar /> */}
        </div>
      </div>
      <Collections />
      <Footer />
    </div>
  );
};

export default Commercial;
