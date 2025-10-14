import { skillData } from "../constants/skill";
import SkillCard from "../components/SkillCard";
import { useEffect, useRef, useState } from "react";

export default function SkillInfo() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const windowHeight = window.innerHeight;
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = rect.height;

      // 스크롤 진행도 계산: 컨테이너가 완전히 지나가는 전체 구간 기준
      // rect.top이 windowHeight일 때 0, rect.bottom이 0일 때 1
      const scrollRange = containerHeight + windowHeight;
      const scrolled = windowHeight - rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollRange));

      setScrollProgress(progress);

      const newVisibleCards = new Set<number>();
      cardRefs.current.forEach((cardRef, index) => {
        if (cardRef) {
          const cardRect = cardRef.getBoundingClientRect();
          if (cardRect.top < windowHeight - 100 && cardRect.bottom > 100) {
            newVisibleCards.add(index);
          }
        }
      });
      setVisibleCards(newVisibleCards);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <div className="fixed top-0 left-0 w-full h-screen bg-[#191919] -z-10" />
      <div className="sticky top-0 h-screen pointer-events-none">
        <h2
          className="absolute text-centertransform title text-[var(--gray-400)]/90 z-10"
          style={{
            top:
              scrollProgress > 0.65
                ? `${350 - (scrollProgress - 0.65) * 1500}px`
                : "350px",

            left: "50%",
            transform: "translateX(-80%)",
            opacity: scrollProgress > 0.8 ? 0 : scrollProgress > 0.1 ? 1 : 0,
            transition: "top 0.4s ease-out, opacity 0.4s ease-out",
          }}
        >
          SKILLS & TOOLS
        </h2>
      </div>

      <section className="relative w-full h-[400vh]">
        {/* HTML - 느린 속도 */}
        <div
          ref={(el) => {
            cardRefs.current[0] = el;
          }}
          className="absolute"
          style={{
            top: `${(1 - scrollProgress) * 20}%`,
            left: "10%",
            opacity: visibleCards.has(0) ? 1 : 0,
            transform: visibleCards.has(0)
              ? "none"
              : "translateY(20px) scale(0.9)",
            transition:
              "top 0.9s ease-out, opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          <SkillCard skill={skillData[0]} />
        </div>

        {/* CSS */}
        <div
          ref={(el) => {
            cardRefs.current[1] = el;
          }}
          className="absolute"
          style={{
            top: `${5 + (1 - scrollProgress) * 20}%`,
            left: "75%",
            opacity: visibleCards.has(1) ? 1 : 0,
            transform: visibleCards.has(1)
              ? "none"
              : "translateY(10px) scale(0.9)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          <SkillCard skill={skillData[1]} />
        </div>

        {/* JS - 느린 속도 */}
        <div
          ref={(el) => {
            cardRefs.current[2] = el;
          }}
          className="absolute"
          style={{
            top: `${30 + (1 - scrollProgress) * 0}%`,
            left: "15%",
            opacity: visibleCards.has(2) ? 1 : 0,
            transform: visibleCards.has(2)
              ? "none"
              : "translateY(50px) scale(0.9)",
            transition:
              "top 1.2s ease-out, opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          <SkillCard skill={skillData[2]} />
        </div>

        {/* TS */}
        <div
          ref={(el) => {
            cardRefs.current[3] = el;
          }}
          className="absolute"
          style={{
            top: `${65 + (1 - scrollProgress) * 20}%`,
            left: "50%",
            opacity: visibleCards.has(3) ? 1 : 0,
            transform: visibleCards.has(3)
              ? "none"
              : "translateY(50px) scale(0.9)",
            transition: "opacity 0.4s ease-out, transform 0.4s ease-out",
          }}
        >
          <SkillCard skill={skillData[3]} />
        </div>

        {/* React - 느린 속도 */}
        <div
          ref={(el) => {
            cardRefs.current[4] = el;
          }}
          className="absolute"
          style={{
            top: `${40 + (1 - scrollProgress) * 0}%`,
            left: "45%",
            opacity: visibleCards.has(4) ? 1 : 0,
            transform: visibleCards.has(4)
              ? "none"
              : "translateY(50px) scale(0.9)",
            transition:
              "top 1.0s ease-out, opacity 0.6s ease-out, transform 0.6s ease-in",
          }}
        >
          <SkillCard skill={skillData[4]} />
        </div>

        {/* Vue */}
        <div
          ref={(el) => {
            cardRefs.current[5] = el;
          }}
          className="absolute"
          style={{
            top: `${50 + (1 - scrollProgress) * 100}%`,
            left: "18%",
            opacity: visibleCards.has(5) ? 1 : 0,
            transform: visibleCards.has(5)
              ? "none"
              : "translateY(50px) scale(0.9)",
            transition:
              "top 0.2s ease-out, opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          <SkillCard skill={skillData[5]} />
        </div>

        {/* Next.js */}
        <div
          ref={(el) => {
            cardRefs.current[6] = el;
          }}
          className="absolute"
          style={{
            top: `${20 + (1 - scrollProgress) * 100}%`,
            left: "20%",
            opacity: visibleCards.has(6) ? 1 : 0,
            transform: visibleCards.has(6)
              ? "none"
              : "translateY(50px) scale(0.9)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          <SkillCard skill={skillData[6]} />
        </div>

        {/* Tailwind */}
        <div
          ref={(el) => {
            cardRefs.current[7] = el;
          }}
          className="absolute"
          style={{
            top: `${15 + (1 - scrollProgress) * 120}%`,
            left: "61%",
            opacity: visibleCards.has(7) ? 1 : 0,
            transform: visibleCards.has(7)
              ? "none"
              : "translateY(50px) scale(0.9)",
            transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
          }}
        >
          <SkillCard skill={skillData[7]} />
        </div>

        {/* TanStack Query */}
        <div
          ref={(el) => {
            cardRefs.current[8] = el;
          }}
          className="absolute"
          style={{
            top: `${60 + (1 - scrollProgress) * 100}%`,
            left: "80%",
            opacity: visibleCards.has(8) ? 1 : 0,
            transform: visibleCards.has(8)
              ? "none"
              : "translateY(50px) scale(0.9)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          <SkillCard skill={skillData[8]} />
        </div>

        {/* Zustand */}
        <div
          ref={(el) => {
            cardRefs.current[9] = el;
          }}
          className="absolute"
          style={{
            top: `${37 + (1 - scrollProgress) * 100}%`,
            left: "70%",
            opacity: visibleCards.has(9) ? 1 : 0,
            transform: visibleCards.has(9)
              ? "none"
              : "translateY(50px) scale(0.9)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          <SkillCard skill={skillData[9]} />
        </div>

        {/* GitHub */}
        <div
          ref={(el) => {
            cardRefs.current[10] = el;
          }}
          className="absolute"
          style={{
            top: `${70 + (1 - scrollProgress) * 100}%`,
            left: "10%",
            opacity: visibleCards.has(10) ? 1 : 0,
            transform: visibleCards.has(10)
              ? "none"
              : "translateY(50px) scale(0.9)",
            transition: "opacity 0.4s ease-out, transform 0.4s ease-out",
          }}
        >
          <SkillCard skill={skillData[10]} />
        </div>
      </section>
      <div className="sticky top-0 h-screen pointer-events-none">
        <h2
          className="absolute left-3/4 title text-[var(--gray-400)]/90 z-20"
          style={{
            top:
              scrollProgress > 0.85
                ? `${400 - (scrollProgress - 0.85) * 3000}px`
                : "50%",
            transform: "translate(-50%, -50%)",
            opacity:
              scrollProgress < 0.75
                ? 0
                : scrollProgress < 0.95
                ? (scrollProgress - 0.8) / 0.1
                : 1,
            transition: "top 0.6s ease-out, opacity 0.1s linear",
          }}
        >
          PROJECTS
        </h2>
      </div>
    </div>
  );
}
