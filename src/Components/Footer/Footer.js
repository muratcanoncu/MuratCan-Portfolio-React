import React from "react";

function Footer(props) {
  return (
    <div
      className="w-100 d-flex justify-content-between align-items-center flex-wrap my-3"
      style={{ height: "auto", padding: "0 10%" }}
    >
      <div
        className="d-flex justify-content-center align-items-center mx-auto"
        style={{
          // border: "1px solid black",
          width: "200px",
          height: "50px",
          fontWeight: "bolder",
          // color: "grey",
        }}
      >
        <h5 style={{ cursor: "pointer" }} onClick={props.contactModal}>
          Contact Information
        </h5>
      </div>
      <div className="pt-3 mx-auto">
        <div
          style={{ borderBottom: "1px solid black", width: "50%" }}
          className="mx-auto mb-1"
        ></div>
        <h3 className="name font-weight-bolder mb-0">Murat Can Öncü</h3>
        <p className="text-center mb-0">Berlin | Istanbul</p>
        <p style={{ fontSize: "0.8rem", color: "gray" }}>
          Copyright ©2021 All rights reserved
        </p>
      </div>

      <div className="mx-auto">
        <h4 className="text-center font-weight-bold">Reach Me Out!</h4>
        <div
          className="footerLogos d-flex justify-content-between align-items-center"
          style={{ width: "190px" }}
        >
          <a href="#">
            <i
              id="linkedinLogo"
              className="fab fa-linkedin"
              title="LinkedIn"
            ></i>
          </a>
          <a href="#">
            <i id="xingLogo" className="fab fa-xing" title="Xing"></i>
          </a>
          <a href="#">
            <i
              id="gitHubLogo"
              className="fab fa-github-square"
              title="GitHub"
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
