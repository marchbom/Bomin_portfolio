import bgNoise from "../assets/bg-img/noise2.png";
import Header from "../components/Header";
import Introduce from "../components/Introduce";
import { useDarkMode } from "usehooks-ts";

export default function Main() {
  const { isDarkMode } = useDarkMode();
  return (
    <>
      <div className="w-full h-screen relative dark:bg-[#131313] bg-[var(--white)] z-20">
        {isDarkMode && (
          <img
            src={bgNoise}
            className="absolute w-full h-full inset-0 opacity-60 dark:bg-repeat z-0"
          />
        )}

        <Header />
        <div className="absolute ml-10 h-screen w-px bg-[#e8e8e8] dark:bg-[var(--gray-800)] dark:opacity-20 "></div>
        <div className="absolute top-[178px] w-full h-px bg-[#e8e8e8] dark:bg-[var(--gray-800)] dark:opacity-20"></div>
        <div className="absolute top-[201px] w-full h-px bg-[#e8e8e8] dark:bg-[var(--gray-800)] dark:opacity-20"></div>
        <div className="absolute top-[178px] right-0">
          <Introduce />
        </div>
        <div className="absolute z-20 bottom-0 ml-20 dark:text-[var(--gray-400)]">
          <span className="absolute flex flex-col sm:text-2xl mt-5 font-mono text-[var(--gray-600)] dark:opacity-80">
            &lt;FRONT-END DEVELOPER /&gt;
          </span>
          <h1 className="sm:text-[220px] text-[var(--gray-900)] dark:text-[var(--gray-300)] mt-2 bottom-0 font-mono ">
            KIM BOMIN
          </h1>
        </div>
      </div>
    </>
  );
}
