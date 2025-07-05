const Education = () => {
  const experiences = [
    {
      university: "Universitas Gadjah Mada",
      degree: "Bachelor Degree in Information Engineering",
      date: "2022 - 2026 (Expected)",
    },
  ];

  return (
    <article className="flex flex-col items-center justify-center space-y-5 py-8">
      <h1 className="text-3xl font-bold text-center dark:text-neutral-100">
        Education
      </h1>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <Experience
            key={index}
            university={exp.university}
            degree={exp.degree}
            date={exp.date}
          />
        ))}
      </div>
    </article>
  );
};

interface ExperienceProps {
  university: string;
  degree: string;
  date: string;
}

const Experience = ({ university, degree, date }: ExperienceProps) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-2">
      <h2 className="text-lg font-bold text-center text-neutral-900 dark:text-neutral-100">
        {university}
      </h2>
      <p className="text-xs font-medium dark:text-neutral-400 text-neutral-600 text-center">
        {date}
      </p>
      <p className="text-sm font-medium dark:text-neutral-300 text-neutral-700 text-center">
        {degree}
      </p>
    </div>
  );
};

export default Education;
