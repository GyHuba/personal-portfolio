import "../css/project-component.css";

export default function ProjectComponent() {
  const projects = [
    {
      title: "Memorty card",
      description:
        "Test your memory with this fun game! Remember all the guys of the Rick and Morty series and be careful not to choose the same character twice. The game was written in react.",
      image: "../public/memory-card.png",
      liveView:
        "https://rick-and-memorty-by-huba-gyihor.netlify.app/?fbclid=IwAR1M6ORS2jgO7vZhaU_W3FnvjKQrQTFJkFO9cjw07LIP0_EuulGygotmoUM",
      sourceCode: "https://github.com/GyHuba/memory-card",
      id: 0,
    },
    {
      title: "Toy webshop",
      description:
        "This project was a collaboration with my classmates. We built an online webshop for childrens toys as the final assignment of the bootcamp.",
      image: "/toy-webshop.png",
      liveView: "",
      sourceCode: "https://github.com/GyHuba/toy-webshop",
      id: 1,
    },
    {
      title: "Libary",
      description:
        "This is a usefull application with local storage to keep track of the books you read or waiting to be read. Written in Javascript",
      image: "../public/library.png",
      liveView: "https://gyhuba.github.io/libary/",
      sourceCode: "https://github.com/GyHuba/libary",
      id: 2,
    },
    {
      title: "Etch a sketch",
      description:
        "Express yourself and get creative with this sketching game written in Javascript.",
      image: "../public/etch-a-sketch.png",
      liveView: "https://gyhuba.github.io/etch-a-sketch/",
      sourceCode: "https://github.com/GyHuba/etch-a-sketch",
      id: 3,
    },
    {
      title: "Tic-tac-toe",
      description:
        "A classic game you can play with your friends and get nostalgic together over a beer. The program was written in Javascript.",
      image: "../public/tic-tac-toe.png",
      liveView: "https://gyhuba.github.io/tic-tac-toe/",
      sourceCode: "https://github.com/GyHuba/tic-tac-toe",
      id: 4,
    },
    {
      title: "Calculator",
      description:
        "Whether you work or study, a calculator always comes handy. I made this one useing Javascipt",
      image: "../public/calculator.png",
      liveView: "https://gyhuba.github.io/calculator/",
      sourceCode: "https://github.com/GyHuba/calculator",
      id: 5,
    },
  ];

  return (
    <>
      <div className="container content hidden">
        <div className="second-title" id="projects">
          Projects
        </div>
        <div className="projects-container">
          {projects.map((project) => (
            <div className="project-container" key={project.id}>
              <div className="card-title">{project.title}</div>
              <div
                className="project-image"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                {project.liveView !== "" && (
                  <a
                    target="blank"
                    href={project.liveView}
                    className="live-view"
                  >
                    Live view
                  </a>
                )}
                <a
                  target="blank"
                  href={project.sourceCode}
                  className="source-code"
                >
                  Source code
                </a>
              </div>
              <div className="project-descrition">{project.description}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
