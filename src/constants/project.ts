import touchbase from "../assets/images/projects/touchbase.png";
import nunew from "../assets/images/projects/nunew.png";
import studium from "../assets/images/projects/studium.png";

export const projects: Record<string, ProjectData> = {
  NUNEW: {
    id: "NUNEW",
    name: "NUNEW",
    description: "MZ세대를 위한 쉽고 간결한 뉴스 요약 서비스",
    thumbnail: nunew,
    link: "https://github.com/nunews/NUNEWS_FE",
  },
  STUDIUM: {
    id: "STUDIUM",
    name: "STUDIUM",
    description: "스터디원을 모집해 효율적인 학습을 도와주는 서비스",
    thumbnail: studium,
    link: "https://github.com/marchbom/Studium",
  },
  TOUCHBASE: {
    id: "TOUCHBASE",
    name: "TOUCHBASE",
    description: "KBO 야구 팬들의 커뮤니티",
    thumbnail: touchbase,
    link: "https://github.com/FE5-2-7team/TouchBase",
  },
};
