import { ReactTyped } from "react-typed";

export default function Loading() {
  return (
    <>
      <div className="w-screen h-screen flex bg-[#191919] items-center justify-center">
        <span className="b-e text-[var(--gray-600)] tracking-wide">
          bomin@MacBook Pro/Portfolio %&nbsp;
        </span>
        <ReactTyped
          strings={[" npm run dev"]}
          typeSpeed={110}
          backSpeed={100}
          backDelay={2000}
          showCursor={true}
          style={{ color: "white", letterSpacing: "100%", fontSize: "14px" }}
          loop
        />
      </div>
    </>
  );
}
