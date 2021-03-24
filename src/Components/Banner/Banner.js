import React from "react";
import BannerBackground from "./img/bannerPic.jpeg";
function Banner() {
  return (
    <div
      id="banner"
      style={{
        height: "80vh",
        backgroundImage: `url(${BannerBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    ></div>
  );
}

export default Banner;
