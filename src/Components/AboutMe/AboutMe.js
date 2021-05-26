import React from "react";
import ProfilePic from "./Img/ProfilePic.JPG";
import MuratCan from "./Img/MuratCan.jpg";
function AboutMe() {
  return (
    <>
      <div id="aboutme" className="container p-3 mb-5 aboutMe">
        <div className="row">
          <div className="col-sm-12 col-md-5 d-flex justify-content-center align-items-center ">
            <img
              src={ProfilePic}
              style={{ width: "300px", height: "300px", borderRadius: "50%" }}
              className="mb-3 pictureMe"
            ></img>
          </div>
          <div className="col-sm-12 col-md-7">
            <h1 className="text-center aboutMeHeader">Murat Can Öncü</h1>
            <p className="w-75 mx-auto text-center aboutMeText mb-5">
              Business graduate, Professional Athlete, Full Stack Web Developer
              with 2+ years of experience in Finance, Auditing, and Web
              Development. Seeking a position to apply analytic skills as part
              of a team for creating user-oriented solutions in the tech
              industry.
            </p>
            <div className="d-flex justify-content-between w-50 align-items-center mx-auto">
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
        </div>
      </div>
    </>
  );
}

export default AboutMe;
