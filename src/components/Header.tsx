import { IoSunnyOutline, IoMoon, IoShareSocialOutline } from "react-icons/io5";
import { useDarkMode } from "usehooks-ts";

export default function Header() {
  const { isDarkMode, toggle } = useDarkMode();
  const toTopHandler = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header className="w-full flex absolute justify-between">
        <button
          onClick={toTopHandler}
          className="font-mono sm:text-[30px] text-[color:var(--gray-900)] dark:text-[var(--gray-300)] hover:text-[var(--gray-500)] dark:hover:text-[color:var(--gray-100)] cursor-pointer ml-20 mt-5 dark:text-3xl"
        >
          PORTFOLIO
        </button>
        <div className="flex gap-4 mt-5">
          <div
            onClick={toggle}
            className="dark:bg-[#404040] dark:hover:bg-[var(--gray-900)] bg-[var(--gray-200)] hover:bg-[var(--gray-300)] sm:w-10 sm:h-10 rounded-full flex items-center justify-center cursor-pointer"
          >
            {isDarkMode ? (
              <IoSunnyOutline className="absolute w-5 h-5 dark:text-white text-[color:var(--black)]" />
            ) : (
              <IoMoon className="absolute w-5 h-5 dark:text-white text-[color:var(--black)]" />
            )}
          </div>
          <div className="dark:bg-[#404040] bg-[var(--gray-200)] hover:bg-[var(--gray-300)] dark:hover:bg-[var(--gray-900)] sm:w-10 sm:h-10 rounded-full flex items-center justify-center sm:mr-10 cursor-pointer">
            <IoShareSocialOutline className="absolute w-5 h-5 dark:text-[var(--white)] text-[color:var(--black)]" />
          </div>
        </div>
      </header>
    </>
  );
}
