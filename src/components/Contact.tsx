import { useState } from "react";
import { EMAIL, GITHUB, PORTFOLIO, stripScheme } from "../constants/contact";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  const valueClass =
    "text-[var(--gray-300)] underline-offset-4 hover:text-white hover:underline transition-colors";

  return (
    <section className="min-h-screen w-full flex flex-col justify-center px-8 sm:px-20 py-28">
      <div className="w-full max-w-5xl">
        {/* 대형 타이포 메시지 */}
        <h2 className="font-mono font-bold text-white leading-[0.95] tracking-[-0.03em] text-[clamp(2.75rem,9vw,7rem)]">
          LET&rsquo;S BUILD
          <br />
          SOMETHING.
        </h2>

        <p className="mt-8 font-mono text-sm sm:text-base text-[var(--gray-500)]">
          함께 만들 준비가 되어 있습니다 — 프론트엔드 개발자 김보민
        </p>

        {/* 연락처 */}
        <div className="mt-14 max-w-xl border-t border-[var(--gray-800)] pt-8 space-y-3.5 font-mono text-sm sm:text-base">
          <div className="flex items-baseline gap-5 sm:gap-8">
            <span className="w-24 shrink-0 text-[var(--gray-600)]">email</span>
            <button
              type="button"
              onClick={copyEmail}
              aria-label="이메일 주소 복사"
              className={`${valueClass} cursor-pointer text-left`}
            >
              {EMAIL}
            </button>
            {copied && <span className="text-xs text-[#27c93f]">✓ 복사됨</span>}
          </div>

          <div className="flex items-baseline gap-5 sm:gap-8">
            <span className="w-24 shrink-0 text-[var(--gray-600)]">github</span>
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className={valueClass}
            >
              {stripScheme(GITHUB)}
            </a>
          </div>

          <div className="flex items-baseline gap-5 sm:gap-8">
            <span className="w-24 shrink-0 text-[var(--gray-600)]">
              portfolio
            </span>
            <a
              href={PORTFOLIO}
              target="_blank"
              rel="noopener noreferrer"
              className={valueClass}
            >
              {stripScheme(PORTFOLIO)}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
