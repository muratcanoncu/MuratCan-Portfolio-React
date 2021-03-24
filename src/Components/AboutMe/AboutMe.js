import React from "react";
import MuratCanPic from "./Img/MuratCanPic.jpeg";

function AboutMe() {
  return (
    <>
      <div id="aboutme" className="container p-3 mb-5 aboutMe">
        <div className="row">
          <div className="col-sm-12 col-md-5 d-flex justify-content-center align-items-center ">
            <img
              src={MuratCanPic}
              style={{ width: "270px", height: "270px", borderRadius: "5px" }}
              className="mb-3 pictureMe"
            ></img>
          </div>
          <div className="col-sm-12 col-md-7">
            <h1 className="text-center aboutMeHeader">Murat Can Öncü</h1>
            <p className="w-75 mx-auto text-center aboutMeText mb-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release
            </p>
            <div className="d-flex justify-content-between w-50 align-items-center mx-auto">
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
      </div>
    </>
  );
}

export default AboutMe;
