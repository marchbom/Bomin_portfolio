import { useDarkMode } from "usehooks-ts";
import Main from "./pages/Main";
import { useEffect, useState } from "react";
import Loading from "./pages/Loading";
import SkillInfo from "./pages/SkillInfo";
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
    const insertMain = setTimeout(() => setFadeIn(true), 4200);

    return () => {
      clearTimeout(timer);
      clearTimeout(insertMain);
    };
  }, []);

  if (isLoading) return <Loading />;
  return (
    <>
      <div
        className={`min-h-screen transition-opacity duration-3000 ease-in-out bg-[#191919] ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <section className="h-screen">
          <Main />
        </section>
        <section>
          <SkillInfo />
        </section>
      </div>
    </>
  );
}

export default App;
