import React from "react";
import Html from "./Img/html.png";
import Css from "./Img/Css.png";
import Bootstrap from "./Img/bootstrap.png";
import JavaScript from "./Img/javaScript.png";
import ReactLogo from "./Img/react.png";

function MyServices() {
  return (
    <>
      <h1
        className="text-center"
        style={{ fontFamily: "Overpass", fontSize: "3.3rem" }}
      >
        What Can I Do For You?
      </h1>
      <div className="d-flex justify-content-center align-items-center flex-wrap mx-auto text-center mt-4">
        <div
          className="experienceItems"
          style={{ width: "500px", marginBottom: "30px" }}
        >
          <img
            src={JavaScript}
            style={{ width: "180px", marginBottom: "15px" }}
          ></img>
          <h2>JavaScript</h2>
        </div>
        <div
          className="experienceItems"
          style={{ width: "500px", marginBottom: "30px" }}
        >
          <img
            src={ReactLogo}
            style={{ width: "290px", marginBottom: "5px" }}
          ></img>
          <h2>React JS</h2>
        </div>
        <div
          className="experienceItems"
          style={{ width: "500px", marginBottom: "30px" }}
        >
          <img
            src={Bootstrap}
            style={{ width: "320px", marginBottom: "5px" }}
          ></img>
          <h2>Bootstrap</h2>
        </div>
        <div
          className="experienceItems"
          style={{ width: "500px", marginBottom: "30px" }}
        >
          <img src={Css} style={{ width: "170px", marginBottom: "15px" }}></img>
          <h2>CSS</h2>
        </div>
        <div
          className="experienceItems"
          style={{ width: "500px", marginBottom: "30px" }}
        >
          <img
            src={Html}
            style={{ width: "230px", marginBottom: "15px" }}
          ></img>
          <h2>HTML</h2>
        </div>
      </div>
    </>
  );
}

export default MyServices;
