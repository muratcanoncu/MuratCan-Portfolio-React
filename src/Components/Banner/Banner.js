import React from "react";
import BannerBackground from "./img/bannerPic.jpeg";
function Banner() {
  return (
    <header
      id="banner"
      style={{
        height: "80vh",
        backgroundImage: `url(${BannerBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    ></header>
  );
}

export default Banner;
