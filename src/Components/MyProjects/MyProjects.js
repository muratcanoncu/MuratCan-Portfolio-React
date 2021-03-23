import { useState } from "react";
import ProjectItem from "./ProjectItem";
function MyProjects() {
  const [projectState, setProjectState] = useState([
    {
      id: 1,
      image: "",
      title: "Streaming Page,React",
      explanation: "",
      link: "",
    },
    {
      id: 2,
      image: "",
      title: "ToDo List,React",
      explanation: "New tasks can be added,excluded,done or undo",
      link: "",
    },
    {
      id: 3,
      image: "",
      title: "Dice Game,JavaScript",
      explanation: "",
      link: "",
    },
    { id: 4, image: "", title: "", explanation: "", link: "" },
    { id: 5, image: "", title: "", explanation: "", link: "" },
    { id: 6, image: "", title: "", explanation: "", link: "" },
    { id: 7, image: "", title: "", explanation: "", link: "" },
    { id: 8, image: "", title: "", explanation: "", link: "" },
    { id: 9, image: "", title: "", explanation: "", link: "" },
  ]);
  return (
    <div id="myProjects" className="d-flex flex-wrap justify-content-center">
      {projectState.map((project, index) => {
        return (
          <ProjectItem
            key={project.id}
            img={project.image}
            title={project.title}
            explanation={project.explanation}
            link={project.link}
          ></ProjectItem>
        );
      })}
    </div>
  );
}

export default MyProjects;
