import React from "react";
import BannerBackground from "./img/bannerPic.jpeg";
function Banner() {
  return (
    <header
      id="banner"
      className="d-flex justify-content-start align-items-end text-white"
      style={{
        height: "80vh",
        backgroundImage: `url(${BannerBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div
        id="nameTitle"
        className="d-flex flex-column justify-content-center align-items-start"
      >
        <h1>Murat Can Öncü</h1>
        <h2>Software Developer</h2>
      </div>
    </header>
  );
}

export default Banner;
