import { useEffect, useState } from "react";

interface ProjectCardProps {
  project: ProjectData;
}

const projectIndex: Record<string, string> = {
  TOUCHBASE: "Project_001",
  NUNEW: "Project_002",
  STUDIUM: "Project_003",
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, [project.id]);

  return (
    <div
      className={[
        "w-full h-full grid lg:grid-cols-[1fr_360px] transition-opacity duration-300",
        visible ? "opacity-100" : "opacity-0",
      ].join(" ")}
    >
      {/* 썸네일 — 남은 높이 전부 */}
      <div className="relative h-full overflow-hidden border-r border-[var(--gray-900)]">
        <img
          src={project.thumbnail}
          alt={`${project.name} 스크린샷`}
          className="w-full h-full object-cover object-top"
        />
        {/* 하단 페이드 */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#191919]/80 to-transparent pointer-events-none" />
      </div>

      {/* 프로젝트 정보 */}
      <aside className="flex flex-col gap-6 px-10 py-10 justify-center">
        <p className="font-mono text-xs text-[var(--gray-600)] tracking-widest uppercase">
          {projectIndex[project.id]}
        </p>

        <h3 className="font-mono text-4xl font-bold text-white tracking-tight leading-none">
          {project.name}
        </h3>

        <div className="w-12 h-px bg-[var(--gray-700)]" />

        <p className="text-[var(--gray-400)] text-sm leading-relaxed">
          {project.description}
        </p>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={[
            "mt-4 inline-flex items-center gap-2.5 font-mono text-sm px-5 py-3 w-fit",
            "border border-[var(--gray-800)] text-[var(--gray-300)] rounded-lg",
            "transition-colors duration-150",
            "hover:border-[var(--gray-500)] hover:text-white hover:bg-[#222]",
            "focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2",
          ].join(" ")}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub에서 보기
        </a>
      </aside>
    </div>
  );
}
