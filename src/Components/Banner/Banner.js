import React from "react";
import BannerBackground from "./img/bannerPic.jpeg";
function Banner() {
  return (
    <div
      className="w-100"
      style={{
        height: "80vh",
        backgroundImage: `url(${BannerBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "60% 90%",
        backgroundPosition: "center",
      }}
    ></div>
  );
}

export default Banner;
