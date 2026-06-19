import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vscDarkPlus,
  prism,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useDarkMode } from "usehooks-ts";
import { codeMap } from "../constants/codeMap";

export default function Introduce() {
  const { isDarkMode } = useDarkMode();
  const tabs = ["profile-overview.html", "skills.tsx", "contact.ts"];
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  const handleCodeClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const text = target.textContent || "";

    // GitHub
    if (
      text.includes("github.com/marchbom") &&
      !text.includes("Bomin_portfolio")
    ) {
      window.open("https://github.com/marchbom", "_blank");
      return;
    }

    // 포트폴리오
    if (text.includes("Bomin_portfolio")) {
      window.open("https://github.com/marchbom/Bomin_portfolio", "_blank");
      return;
    }
  };

  return (
    <>
      <div className="sm:w-[326px] h-full right-0 mr-[228px] border-1 border-t-0 border-[rgba(49,49,49,0.8)] overflow-hidden">
        <div className="flex w-[326px] h-[23px] bg-[#313131] justify-between items-center opacity-100">
          <div className="mt-1 font-mono text-[10px] flex">
            <div className="ml-1.5 text-[#AEC6F6] flex gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-1.5 pb-1 cursor-pointer ${
                    activeTab === tab
                      ? "border-b-2 border-[#AEC6F6] text-[#AEC6F6] pt-0.5"
                      : ""
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
        {isDarkMode ? (
          <div
            className="break-words text-[11px] h-full overflow-x-hidden"
            onClick={handleCodeClick}
          >
            <SyntaxHighlighter
              language="tsx"
              style={vscDarkPlus}
              wrapLines={true}
              customStyle={{ margin: 0, padding: 12 }}
            >
              {codeMap[activeTab] ?? "// 내용 없음"}
            </SyntaxHighlighter>
          </div>
        ) : (
          <div
            className="break-words text-[11px] h-full overflow-x-hidden"
            onClick={handleCodeClick}
          >
            <SyntaxHighlighter
              language="tsx"
              style={prism}
              wrapLines={true}
              customStyle={{ margin: 0, padding: 12 }}
            >
              {codeMap[activeTab] ?? "// 내용 없음"}
            </SyntaxHighlighter>
          </div>
        )}
      </div>
    </>
  );
}
