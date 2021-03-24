function ProjectItem(props) {
  return (
    <div
      className="projectItem m-4 text-center pb-2"
      style={{ height: "500px", width: "350px" }}
    >
      <img src={props.img} className="w-100" style={{ height: "60%" }}></img>
      <h1>{props.title}</h1>
      <p className="w-75 mx-auto">{props.explanation}</p>
      <div className="d-flex flex-column ">
        {/* browser deployment link */}
        <p className="mb-1">
          <a href={props.browserLink} target="_blank" className="projectLink">
            To the project !
          </a>
        </p>
        <p>
          {/* github repolink */}
          <a href={props.repoLink} target="_blank" className="repoLink mt-2">
            Code !
          </a>
        </p>
      </div>
    </div>
  );
}

export default ProjectItem;
