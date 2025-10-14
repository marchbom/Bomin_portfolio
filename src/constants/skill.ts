import htmlIcon from "../assets/icons/html-icon.png";
import cssIcon from "../assets/icons/css-icon.png";
import jsIcon from "../assets/icons/js-icon.png";
import tsIcon from "../assets/icons/ts-icon.png";
import reactIcon from "../assets/icons/react-icon.png";
import vueIcon from "../assets/icons/vue-icon.png";
import nextIcon from "../assets/icons/nextjs-icon.png";
import tailwindIcon from "../assets/icons/tailwind-icon.png";
import tanstackIcon from "../assets/icons/tanstack-icon.png";
import zustandIcon from "../assets/icons/zustand-icon.png";
import githubIcon from "../assets/icons/github-icon.png";

export const skillData: Skill[] = [
  {
    id: "html",
    name: "HTML",
    icon: htmlIcon,
    description: "시멘틱 마크업을 활용하여 웹 구조를 설계한 경험이 있습니다.",
  },
  {
    id: "css",
    name: "CSS",
    icon: cssIcon,
    description: "스타일링을 활용하여 디자인을 구현한 경험이 있습니다.",
  },
  {
    id: "js",
    name: "Javascript",
    icon: jsIcon,
    description: "웹 브라우저의 동적 구현을 위해 사용했습니다.",
  },

  {
    id: "ts",
    name: "Typescript",
    icon: tsIcon,
    description:
      "자바스크립트 기반의 정적 타입을 추가한 언어로, 타입 안정성을 위해 사용한 경험이 있습니다.",
  },
  {
    id: "react",
    name: "React",
    icon: reactIcon,
    description:
      "컴포넌트 기반 UI 라이브러리로 재사용성을 높이고 효율적인 렌더링을 위해 고민합니다.",
  },
  {
    id: "vue",
    name: "Vue.js",
    icon: vueIcon,
    description: "Vue.js를 사용하여 간단한 프로젝트를 구현한 경험이 있습니다.",
  },
  {
    id: "next",
    name: "Next.js",
    icon: nextIcon,
    description:
      "SSR기반의 Next.js를 사용하여 프로젝트를 구현한 경험이 있습니다.",
  },
  {
    id: "tailwind",
    name: "TailwindCSS",
    icon: tailwindIcon,
    description: "tailwindcss를 사용하여 스타일링을 구현한 경험이 있습니다.",
  },
  {
    id: "tanstack",
    name: "TanStack Query",
    icon: tanstackIcon,
    description: "데이터 캐싱과 쿼리 관리를 위해 사용한 경험이 있습니다.",
  },
  {
    id: "zustand",
    name: "Zustand",
    icon: zustandIcon,
    description:
      "전역 상태관리 라이브러리로 상태관리를 위해 사용한 경험이 있습니다.",
  },
  {
    id: "github",
    name: "Github",
    icon: githubIcon,
    description: "깃허브를 사용하여 프로젝트를 관리한 경험이 있습니다.",
  },
];
