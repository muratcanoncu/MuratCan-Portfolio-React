function ProjectItem(props) {
  return (
    <div
      className="projectItem m-4 text-center"
      style={{ height: "490px", width: "350px" }}
    >
      <img src={props.img} className="w-100" style={{ height: "65%" }}></img>
      <h1>{props.title}</h1>
      <p className="w-75 mx-auto">{props.explanation}</p>
      <a href="#" className="projectLink">
        To the project!
      </a>
    </div>
  );
}

export default ProjectItem;
