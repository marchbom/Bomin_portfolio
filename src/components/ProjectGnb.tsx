export default function ProjectGnb() {
  return (
    <>
      <div className="w-full h-[89px] border-t border-b border-t-[var(--gray-900)] border-b-[var(--gray-900)] mt-5">
        <ul className="flex justify-center h-full text-center">
          <li className="gnb-item border-l border-l-[var(--gray-900)]">
            <p className="text-[var(--gray-600)]">Project_001</p>
            <p className="text-[var(--white)]">TOUCHBASE</p>
          </li>
          <li className="gnb-item">
            <p className="text-[var(--gray-600)]">Project_002</p>
            <p className="text-[var(--white)]">NUNEW</p>
          </li>
          <li className="gnb-item">
            <p className="text-[var(--gray-600)]">Project_003</p>
            <p className="text-[var(--white)]">STUDIUM</p>
          </li>
        </ul>
      </div>
    </>
  );
}
