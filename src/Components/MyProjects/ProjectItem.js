function ProjectItem(props) {
  return (
    <div
      className="projectItem m-4 text-center pb-2"
      style={{ height: "500px", width: "350px" }}
    >
      <img src={props.img} className="w-100" style={{ height: "60%" }}></img>
      <h1>{props.title}</h1>
      <p className="w-75 mx-auto">{props.explanation}</p>
      {/* browser deployment link */}
      <a href="#" className="projectLink">
        To the project!
      </a>
      {/* github repolink */}
      <a href="#" className="d-block mt-2">
        Code !
      </a>
    </div>
  );
}

export default ProjectItem;
