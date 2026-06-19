interface ProjectGnbProps {
  projectOrder: readonly string[];
  selected: string;
  onSelect: (id: string) => void;
}

const projectLabels: Record<string, { index: string; name: string }> = {
  TOUCHBASE: { index: "Project_001", name: "TOUCHBASE" },
  NUNEW: { index: "Project_002", name: "NUNEW" },
  STUDIUM: { index: "Project_003", name: "STUDIUM" },
};

export default function ProjectGnb({
  projectOrder,
  selected,
  onSelect,
}: ProjectGnbProps) {
  return (
    <nav
      aria-label="프로젝트 목록"
      className="w-full border-t border-b border-[var(--gray-900)]"
    >
      <ul className="flex justify-center h-[89px] text-center">
        {projectOrder.map((id, i) => {
          const label = projectLabels[id];
          const isActive = selected === id;
          return (
            <li key={id}>
              <button
                onClick={() => onSelect(id)}
                aria-pressed={isActive}
                className={[
                  "gnb-item h-[89px] flex flex-col items-center justify-center px-10 cursor-pointer transition-colors duration-200",
                  "border-l border-l-[var(--gray-900)]",
                  i === projectOrder.length - 1 ? "border-r border-r-[var(--gray-900)]" : "",
                  isActive
                    ? "bg-[#222] text-white"
                    : "text-[var(--gray-600)] hover:text-[var(--gray-300)] hover:bg-[#1e1e1e]",
                ].join(" ")}
              >
                <p className="text-xs font-mono mb-1 opacity-60">{label.index}</p>
                <p className={`font-mono text-sm font-semibold tracking-widest ${isActive ? "text-white" : ""}`}>
                  {label.name}
                </p>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
