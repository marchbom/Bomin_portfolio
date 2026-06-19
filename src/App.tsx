import { useDarkMode } from "usehooks-ts";
import Main from "./pages/Main";
import { useEffect, useState } from "react";
import Loading from "./pages/Loading";
import SkillInfo from "./pages/SkillInfo";
import Project from "./pages/Project";
import Contact from "./components/Contact";
import bgNoise from "./assets/bg-img/noise2.png";
function App() {
  const { isDarkMode } = useDarkMode();
  const [isLoading, setIsLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4500);
    const insertMain = setTimeout(() => setFadeIn(true), 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(insertMain);
    };
  }, []);

  if (isLoading) return <Loading />;
  return (
    <>
      <div
        className={`relative min-h-screen transition-opacity duration-2000 ease-in-out bg-[#191919] ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* 전역 배경 질감 — 노이즈 + 옅은 글로우 */}
        <div
          className="fixed inset-0 z-0 pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="absolute inset-0 bg-repeat opacity-[0.06]"
            style={{ backgroundImage: `url(${bgNoise})` }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 22%, rgba(255,255,255,0.05), transparent 55%)",
            }}
          />
        </div>

        {/* 콘텐츠 */}
        <div className="relative z-10">
          <section className="h-screen">
            <Main />
          </section>
          <section>
            <SkillInfo />
          </section>
          <section>
            <Project />
          </section>
          <section>
            <Contact />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
