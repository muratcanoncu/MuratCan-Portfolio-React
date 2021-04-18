import React from "react";

function Footer(props) {
  return (
    <footer
      className="w-100 d-flex justify-content-between align-items-center flex-wrap my-3"
      style={{ height: "auto", padding: "0 10%" }}
    >
      <div
        className="d-flex justify-content-center align-items-center mx-auto px-auto"
        style={{
          width: "200px",
          height: "50px",
          fontWeight: "bolder",
        }}
      >
        <h5
          onClick={props.contactModal}
          className="contactInfo font-weight-bolder"
        >
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
          <a
            href="https://www.linkedin.com/in/murat-can-%C3%B6nc%C3%BC-05081992/"
            target="_blank"
          >
            <i
              id="linkedinLogo"
              className="fab fa-linkedin"
              title="LinkedIn"
            ></i>
          </a>
          <a href="#" target="_blank">
            <i id="xingLogo" className="fab fa-xing" title="Xing"></i>
          </a>
          <a href="https://github.com/muratcanoncu" target="_blank">
            <i
              id="gitHubLogo"
              className="fab fa-github-square"
              title="GitHub"
            ></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
