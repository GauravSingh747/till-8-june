import React from "react";
import YouTube from "react-youtube";

const Youtube = () => {
  const videoId = "bX0xL_covT0";
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-semibold mb-6">Find out more </h1>
      <div className="aspect-w-16 aspect-h-9">
        <div className="responsive-video">
          <YouTube videoId={videoId} className="w-full h-full " />
        </div>
      </div>
    </div>
  );
};

export default Youtube;
