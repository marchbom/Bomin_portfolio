export default function ProjectGnb() {
  return (
    <>
      <div className="sticky top-20 w-full h-[89px] border border-t-[var(--gray-600)] border-b-[var(--gray-600)] mt-5">
        <ul className="flex gap-4 mx-auto">
          <li>
            <p className="text-[var(--gray-600)] text-center">Project_001</p>
            <p className="text-[var(--white)]">TOUCHBASE</p>
          </li>
          <li>
            <p className="text-[var(--gray-600)]">Project_002</p>
            <p className="text-[var(--white)]">NUNEW</p>
          </li>
          <li>
            <p className="text-[var(--gray-600)]">Project_003</p>
            <p className="text-[var(--white)]">STUDIUM</p>
          </li>
        </ul>
      </div>
    </>
  );
}
