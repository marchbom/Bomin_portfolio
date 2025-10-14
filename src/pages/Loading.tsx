import { ReactTyped } from "react-typed";
import { useEffect, useState } from "react";

export default function Loading() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-screen h-screen flex bg-[#191919] items-center justify-center">
      <div
        className={`flex transition-opacity duration-200 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="b-e text-[var(--gray-600)] tracking-wide">
          bomin@MacBook Pro/Portfolio %&nbsp;
        </span>
        <ReactTyped
          strings={["npm run dev"]}
          typeSpeed={110}
          showCursor={true}
          style={{
            color: "white",
            letterSpacing: "0.05em",
            fontSize: "14px",
          }}
        />
      </div>
    </div>
  );
}
