import React from "react";
import Html from "./Img/html.png";
import Css from "./Img/Css.png";
import Bootstrap from "./Img/bootstrap.png";
import JavaScript from "./Img/javaScript.png";
import ReactLogo from "./Img/react.png";
import NodeLogo from "./Img/NodeLogo.svg.png";

function MyServices() {
  return (
    // background color change
    <>
      <h2
        className="text-center"
        style={{ fontFamily: "Overpass", fontSize: "3.3rem" }}
      >
        What Can I Do For You?
      </h2>
      <div className="d-flex justify-content-center align-items-center flex-wrap mx-auto text-center mt-4">
        <div className="experienceItems" style={{ marginBottom: "30px" }}>
          <img
            src={JavaScript}
            style={{ width: "160px", marginBottom: "15px", marginTop: "25px" }}
          ></img>
          <h2>JavaScript</h2>
        </div>
        <div className="experienceItems" style={{ marginBottom: "30px" }}>
          <img
            src={ReactLogo}
            style={{ width: "300px", marginBottom: "5px" }}
          ></img>
          <h2>React JS</h2>
        </div>
        <div className="experienceItems" style={{ marginBottom: "30px" }}>
          <img
            src={NodeLogo}
            style={{ width: "210px", marginBottom: "2px", marginTop: "45px" }}
          ></img>
          <h2>Node.js</h2>
        </div>
        <div className="experienceItems" style={{ marginBottom: "30px" }}>
          <img
            src={Bootstrap}
            style={{ width: "340px", marginBottom: "5px" }}
          ></img>
          <h2>Bootstrap</h2>
        </div>
        <div className="experienceItems" style={{ marginBottom: "30px" }}>
          <img src={Css} style={{ width: "120px", marginBottom: "15px" }}></img>
          <h2>CSS</h2>
        </div>
        <div className="experienceItems" style={{ marginBottom: "30px" }}>
          <img
            src={Html}
            style={{ width: "160px", marginBottom: "15px" }}
          ></img>
          <h2>HTML</h2>
        </div>
      </div>
    </>
  );
}

export default MyServices;
