import { useState } from "react";
import ProjectGnb from "../components/ProjectGnb";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants/project";

const projectOrder = ["TOUCHBASE", "NUNEW", "STUDIUM"] as const;

export default function Project() {
  const [selected, setSelected] = useState<string>("TOUCHBASE");

  return (
    <div className="w-full h-screen flex flex-col overflow-hidden">
      <ProjectGnb
        projectOrder={projectOrder}
        selected={selected}
        onSelect={setSelected}
      />
      <div className="flex-1 min-h-0">
        <ProjectCard project={projects[selected]} />
      </div>
    </div>
  );
}
