import { useState } from "react";
import {
  IoSunnyOutline,
  IoMoon,
  IoShareSocialOutline,
  IoCheckmarkOutline,
} from "react-icons/io5";
import { useDarkMode } from "usehooks-ts";

export default function Header() {
  const { isDarkMode, toggle } = useDarkMode();
  const [copied, setCopied] = useState(false);

  const toTopHandler = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  const handleShare = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: document.title, url });
      } else {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // 사용자가 공유를 취소한 경우 등 — 무시
    }
  };

  const circleBtn =
    "relative dark:bg-[var(--gray-800)] dark:hover:bg-[var(--gray-900)] bg-[var(--gray-200)] hover:bg-[var(--gray-300)] sm:w-10 sm:h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors";

  return (
    <header className="w-full flex absolute justify-between">
      <button
        onClick={toTopHandler}
        className="font-mono sm:text-[30px] text-[color:var(--gray-900)] dark:text-[var(--gray-300)] hover:text-[var(--gray-500)] dark:hover:text-[color:var(--gray-100)] cursor-pointer ml-20 mt-5 dark:text-3xl"
      >
        PORTFOLIO
      </button>
      <div className="flex gap-4 mt-5">
        <button
          type="button"
          onClick={toggle}
          aria-label={isDarkMode ? "라이트 모드로 전환" : "다크 모드로 전환"}
          aria-pressed={isDarkMode}
          className={circleBtn}
        >
          {isDarkMode ? (
            <IoSunnyOutline className="w-5 h-5 dark:text-white text-[var(--black)]" />
          ) : (
            <IoMoon className="w-5 h-5 dark:text-white text-[var(--black)]" />
          )}
        </button>
        <button
          type="button"
          onClick={handleShare}
          aria-label={copied ? "링크가 복사되었습니다" : "포트폴리오 공유하기"}
          className={`${circleBtn} sm:mr-10`}
        >
          {copied ? (
            <IoCheckmarkOutline className="w-5 h-5 text-green-500" />
          ) : (
            <IoShareSocialOutline className="w-5 h-5 dark:text-[var(--white)] text-[color:var(--black)]" />
          )}
        </button>
      </div>
    </header>
  );
}
