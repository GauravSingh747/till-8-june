import React from "react";
import logo from "../assets/PNG-No Background.png";
import m3m from "../assets/m3m-2.jpg";
import dlf from "../assets/collection-img/dlf-Gurugram.webp";
import gate from "../assets/collection-img/india-gate.jpg";
import noida from "../assets/collection-img/gaur-mall.jpg";

const Collections = () => {
  return (
    <div>
      <div className="max-w-7xl my-10 px-4 mx-auto text-center">
        {/*======== Logo ======= */}
        <div className="flex justify-center ">
          <img src={logo} alt="logo-img" className="h-10 mb-4 " />
        </div>
        {/*======== Heading ======= */}
        <div>
          <h1 className="uppercase text-3xl py-4 ">
            the TURNKEY REALITY Collections
          </h1>
        </div>
        {/*======== Text ======= */}
        <div>
          <p>
            We deliver effortless luxury living at your doorstep with our
            exceptional contemporary properties one-of-a-kind.
          </p>
        </div>
        {/*======== Discover Links ======= */}
        <div className=" my-8 ">
          <a href="">DISCOVER PROPERTIES</a>
        </div>
      </div>
      {/* =============== property photos =============  */}

      <div className="my-10 p-8 gap-4  grid md:grid-cols-3 grid-cols-1 relative cursor-pointer ">
        {/* ==== 1 ==== */}

        <div className=" mr-4 relative  transition duration-300 transform hover:-translate-y-2  ">
          <img
            src={dlf}
            alt="commeercial-img"
            className="rounded-md w-full h-full object-cover "
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
          <h1 className="absolute bottom-4 left-4 text-3xl font-normal text-white ">
            Gurugram
          </h1>
        </div>
        {/* ==== 2 ==== */}
        <div className=" mr-4 relative  transition duration-300 transform hover:-translate-y-2  ">
          <img
            src={gate}
            alt="commeercial-img"
            className="rounded-md w-full h-full object-cover "
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
          <h1 className="absolute bottom-4 left-4 text-3xl font-normal text-white ">
            Delhi
          </h1>
        </div>
        {/* ==== 3 ==== */}
        <div className=" mr-4 relative  transition duration-300 transform hover:-translate-y-2  ">
          <img
            src={noida}
            alt="commeercial-img"
            className="rounded-md w-full h-full object-cover "
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
          <h1 className="absolute bottom-4 left-4 text-3xl font-normal text-white ">
            Noida
          </h1>
        </div>
        {/* =========== 2 ==================== */}
        {/* <div className="w-full mr-4">
          <div className=" absolute px-4 top-[20rem]"></div>
          <div className="">
            <img src={m3m} alt="m3m-img" className="rounded-[8px] z-10" />
          </div>
        </div> */}
        {/* ==== 3 ==== */}
        {/* <div className="w-full mr-4">
          <div className=" absolute px-4 top-[20rem]"></div>
          <div className="">
            <img src={m3m} alt="m3m-img" className="rounded-[8px] z-10" />
          </div>
        </div> */}
      </div>
      {/* ========================== */}

      {/* ========================== */}
    </div>
  );
};

export default Collections;
