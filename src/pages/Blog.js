import React from "react";
import Navbar2 from "../components/Navbar2";

const Blog = () => {
  const url =
    "https://cdn.pixabay.com/photo/2019/05/17/18/32/flower-4210320_640.jpg";
  return (
    <div>
      {/* ====== fixed navbar ========= */}
      <div
        style={{ backgroundImage: `url(${url})` }}
        className="h-85 w-full bg-cover bg-no-repeat  "
      >
        <div className="font-serif lg:text-[4rem] text-[2rem] text-white flex justify-center items-center  py-[8rem] ">
          <h1>Blog</h1>
        </div>
        <Navbar2 />
      </div>
    </div>
  );
};

export default Blog;
