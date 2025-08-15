import { useState } from "react";
import { ExternalLink } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "C++ Tetris game",
    description:
      "A C++ Tetris game showcasing my skills through piece spawning, rotation, collision detection.",
    image: "/projects/work.png",
    tags: ["C++"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Logo",
    description:
      "One of my original design projects created using Canva, showcasing my creativity and attention to visual detail.",
    image: "/projects/Logo.png",
    tags: ["Canva"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "C++ Quiz Bee game",
    description:
      "A C++ Quiz Bee game with 2–5 teams, interactive questions, real-time scoring, and rounds that challenge knowledge.",
    image: "/projects/work2.png",
    tags: ["C++"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

const colors = [
  "rgba(10, 10, 35, 0.9)",   // deep midnight blue
  "rgba(20, 24, 82, 0.9)",   // rich starlit navy
  "rgba(45, 60, 120, 0.9)",  // cosmic indigo
  "rgba(90, 100, 160, 0.9)", // twilight purple
  "rgba(255, 215, 0, 0.6)",  // golden starlight
];
const sectionBg = "transparent";
export const ProjectsSection = () => {
  const [cardColors, setCardColors] = useState(Array(projectsData.length).fill(sectionBg));
  const [colorIndices, setColorIndices] = useState(Array(projectsData.length).fill(0));

  const handleTitleClick = (index) => {
    const newColors = [...cardColors];
    const newIndices = [...colorIndices];
    newColors[index] = colors[newIndices[index]];
    newIndices[index] = (newIndices[index] + 1) % colors.length;
    setCardColors(newColors);
    setColorIndices(newIndices);
  };

  return (
    <section
  id="projects"
  className="py-24 px-4 relative"
  style={{ backgroundColor: sectionBg }}
>
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, i) => (
            <div
              key={project.id}
              className="group rounded-lg overflow-hidden shadow-xs card-hover transition-colors duration-500"
              style={{ backgroundColor: cardColors[i] }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3
                  className="text-xl font-semibold mb-1 cursor-pointer"
                  onClick={() => handleTitleClick(i)}
                >
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
