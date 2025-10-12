interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="relative w-[282px] h-[364px] rounded-2xl overflow-hidden bg-white/10 border border-white/20 backdrop-blur-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.1)] glass-inner">
      <div
        className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 animate-blob opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.03), transparent 70%)",
          filter: "url(#rgb-shift)",
        }}
      />

      <div className="p-6 flex h-full text-white flex-col justify-between relative z-10">
        <div>
          <img src={skill.icon} alt={skill.name} className="w-20 h-20 mb-2" />
          <p className="text-xl font-semibold">{skill.name}</p>
        </div>
        <p className="text-sm opacity-90">{skill.description}</p>
      </div>
    </div>
  );
}
