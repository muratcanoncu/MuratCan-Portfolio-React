import { useState } from "react";
import ProjectItem from "./ProjectItem";
//! ScreenShots
import CalculatorJS from "./Img/calculator.png";
import RecordShop from "./Img/RecordShop.png";
import SocialMedia from "./Img/socialMedia.png";
import CovidGame from "./Img/covidGame.png";
import CurrencyConverter from "./Img/foreignConvert.png";
import FetchFlix from "./Img/fetchFlix.png";
function MyProjects() {
  const [projectState, setProjectState] = useState([
    {
      id: 1,
      image: FetchFlix,
      title: "Streaming Page",
      explanation: "React",
      link: "https://muratcanoncu.github.io/Movie-Browser-React/",
      repoLink: "https://github.com/muratcanoncu/Movie-Browser-React",
    },
    {
      id: 2,
      image: RecordShop,
      title: "Record Shop(ReactJS)",
      explanation: "Online Shop",
      link: "https://reactproject-fbw41-1.github.io/Record-Shop-project/#/",
      repoLink: "https://github.com/ReactProject-FbW41-1/Record-Shop-project",
    },
    {
      id: 3,
      image: SocialMedia,
      title: "Social Media(ReactJS)",
      explanation: "Log In,Sign Up,add Post,Delete Post,Like Post",
      link: "https://muratcanoncu.github.io/socialMediaApp-React/#/",
      repoLink: "https://github.com/muratcanoncu/socialMediaApp-React",
    },
    {
      id: 4,
      image: CalculatorJS,
      title: "Calculator(JavaScrip)",
      explanation: "Calculator",
      link: "https://muratcanoncu.github.io/Calculator/",
      repoLink: "https://github.com/muratcanoncu/Calculator",
    },
    {
      id: 5,
      image: CovidGame,
      title: "Covid Hit Game",
      explanation: "Javascript fundamentals,DOM manipulation,Asynchronized JS",
      link: "https://muratcanoncu.github.io/Covid-hitting-game/",
      repoLink: "https://github.com/muratcanoncu/Covid-hitting-game",
    },
    {
      id: 6,
      image: CurrencyConverter,
      title: "Currency Converter",
      explanation: "Pure JavaScript,DOM Manipulation",
      link: "https://muratcanoncu.github.io/foreignCurrencyConverter/",
      repoLink: "https://github.com/muratcanoncu/foreignCurrencyConverter",
    },
    // { id: 7, image: "", title: "", explanation: "", link: "", repoLink: "" },
  ]);
  return (
    <>
      <h2
        id="myProjects"
        style={{ fontFamily: "Overpass", fontSize: "3.2rem" }}
        className="text-center my-3"
      >
        My Projects
      </h2>
      <div className="d-flex flex-wrap justify-content-center">
        {projectState.map((project, index) => {
          return (
            <ProjectItem
              key={project.id}
              img={project.image}
              title={project.title}
              explanation={project.explanation}
              browserLink={project.link}
              repoLink={project.repoLink}
            ></ProjectItem>
          );
        })}
      </div>
    </>
  );
}

export default MyProjects;
