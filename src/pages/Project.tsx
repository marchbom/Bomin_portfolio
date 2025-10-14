import ProjectGnb from "../components/ProjectGnb";
import ProjectCard from "../components/ProjectCard";

export default function Project() {
  return (
    <>
      <div className="w-full h-screen">
        <div className="pt-12">
          <ProjectGnb />
        </div>
        <ProjectCard />
      </div>
    </>
  );
}
