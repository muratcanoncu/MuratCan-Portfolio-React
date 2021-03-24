import { useState } from "react";
import ProjectItem from "./ProjectItem";
//! ScreenShots
import CalculatorJS from "./Img/calculator.png";
function MyProjects() {
  const [projectState, setProjectState] = useState([
    {
      id: 1,
      image: "",
      title: "Streaming Page",
      explanation: "React",
      link: "",
      repoLink: "",
    },
    {
      id: 2,
      image: "",
      title: "ToDo List",
      explanation: "New tasks can be added,excluded,done or undo,React",
      link: "",
      repoLink: "",
    },
    {
      id: 3,
      image: "",
      title: "Dice Game,JavaScript",
      explanation: "",
      link: "",
      repoLink: "",
    },
    {
      id: 4,
      image: CalculatorJS,
      title: "Calculator",
      explanation: "Calculator made with JavaScript",
      link: "https://muratcanoncu.github.io/Calculator/",
      repoLink: "https://github.com/muratcanoncu/Calculator",
    },
    {
      id: 5,
      image: "",
      title: "Record Shop",
      explanation: "",
      link: "",
      repoLink: "",
    },
    { id: 6, image: "", title: "", explanation: "", link: "", repoLink: "" },
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
