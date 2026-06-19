interface SkillCardProps {
  skill: Skill;
}

const fileNames: Record<string, string> = {
  html: "index.html",
  css: "styles.css",
  js: "script.js",
  ts: "types.ts",
  react: "App.tsx",
  vue: "App.vue",
  next: "page.tsx",
  tailwind: "tailwind.config.ts",
  tanstack: "query.ts",
  zustand: "store.ts",
  github: "README.md",
};

export default function SkillCard({ skill }: SkillCardProps) {
  const fileName = fileNames[skill.id] ?? `${skill.id}.ts`;

  return (
    <div className="group w-[282px] h-[364px] rounded-xl overflow-hidden bg-[#1c1c1c] border border-[var(--gray-900)] transition-colors duration-300 hover:border-[var(--gray-700)]">
      {/* 터미널 헤더 */}
      <div className="flex items-center gap-2 px-4 h-9 border-b border-[var(--gray-900)] bg-[#222]">
        <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        <span className="ml-2 font-mono text-xs text-[var(--gray-600)]">
          {fileName}
        </span>
      </div>

      {/* 본문 */}
      <div className="flex flex-col h-[calc(100%-2.25rem)] p-7">
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-14 h-14 mb-8 transition-transform duration-300 group-hover:-translate-y-1"
        />

        <h3 className="font-mono text-2xl font-bold tracking-tight text-white">
          {skill.name}
        </h3>

        <div className="w-8 h-px my-4 bg-[var(--gray-700)]" />

        <p className="text-sm leading-relaxed text-[var(--gray-400)]">
          {skill.description}
        </p>
      </div>
    </div>
  );
}
