import { useState } from "react";
//@ts-expect-error
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
//@ts-expect-error
import { vscDarkPlus, prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useDarkMode } from "usehooks-ts";

export default function Introduce() {
  const { isDarkMode } = useDarkMode();
  const tabs = ["profile-overview.html", "skills.html", "contact.ts"];

  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  const codeMap: Record<string, string> = {
    "profile-overview.html": `<!-- start .scope-profile -->
<section class="scope-profile">
  <h3>프로필</h3>
  <p>
    안녕하세요. 프론트엔드 개발자 김보민입니다. 
    사용자 중심 UI/UX를 구현하는 데 집중합니다.
    협업과 커뮤니케이션을 중시하며,
    효율충입니다.
    
  </p>
  <p>추가적인 소개를 작성합니다.</p>
</section>`,

    "skills.html": `<section class="skills">
  <h3>보유 기술</h3>
  <ul>
    <li>HTML, CSS, JavaScript</li>
    <li>React, TypeScript, Vue</li>
    <li>Tailwind CSS</li>
    <li>Git, Figma, Slack, Notion</li>
  </ul>
</section>`,

    "contact.ts": `const contact = {
  email
  "sirubom1203@gmail.com",
  github
  "https://github.com/marchbom",
  portfolio
  "https://github.com/Porc-FE/Bomin"
}



export default contact;`,
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
                  className={`px-1.5 pb-1 ${
                    activeTab === tab ? "border-b-2 border-[#AEC6F6] text-[#AEC6F6] pt-0.5" : ""
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
        {isDarkMode ? (
          <div className="break-words text-[11px] h-full overflow-x-hidden">
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
          <div className="break-words text-[11px] h-full overflow-x-hidden">
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
