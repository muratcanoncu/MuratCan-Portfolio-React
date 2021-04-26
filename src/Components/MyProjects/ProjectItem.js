function ProjectItem(props) {
  return (
    <div
      className="projectItem m-5 text-center pb-2"
      style={{ height: "480px", width: "480px" }}
    >
      <img
        src={props.img}
        className="w-100 p-2"
        style={{ height: "60%", borderBottom: "2px solid lightgrey" }}
      ></img>
      <h3 className="mt-3">{props.title}</h3>
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
