interface Journey {
  title: string;
  description: string;
  date: string;
}

const Journey = () => {
  const journeyData: Journey[] = [
    {
      title: "Started my first job",
      description:
        "Lorem ipsum dolor sit amet consectetur. Quam sit venenatis porttitor ac tincidunt pharetra molestie amet quis. Quam nec donec morbi ac.",
      date: "January 2020",
    },
    {
      title: "Graduated from University",
      description: "Completed my Bachelor's degree in Computer Science.",
      date: "June 2019",
    },
    {
      title: "Launched my first project",
      description: "Released my first open-source project on GitHub.",
      date: "March 2018",
    },
  ];

  return (
    <article className="flex flex-col items-center justify-center space-y-8 py-8">
      <div className="flex flex-col items-center justify-center space-y-2">
        <h1 className="text-3xl font-bold text-center dark:text-neutral-100 text-neutral-900">
          Journey
        </h1>
        <p className="text-base font-medium text-center dark:text-neutral-400 text-neutral-600">
          This section is a curated timeline of milestones, updates, and
          personal highlights throughout my journey.
        </p>
      </div>

      <div className="w-full">
        {journeyData.map((journey, index) => (
          <MyJourney
            key={index}
            title={journey.title}
            description={journey.description}
            date={journey.date}
            isLast={index === journeyData.length - 1}
          />
        ))}
      </div>
    </article>
  );
};

interface MyJourneyProps extends Journey {
  isLast: boolean;
}

const MyJourney = ({ title, description, date, isLast }: MyJourneyProps) => {
  return (
    <div className="flex flex-row space-x-2">
      <div className="flex flex-col items-center">
        <div className="w-5 h-5 rounded-full bg-brand-500 shadow-sm z-10" />

        {!isLast && (
          <div className="w-0.5 h-full bg-neutral-900 dark:bg-neutral-100" />
        )}
      </div>

      <div className="w-full flex flex-col space-y-2 pb-4">
        <p className="text-sm font-medium text-brand-600 dark:text-brand-400">
          {date}
        </p>
        <h2 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
          {title}
        </h2>
        <p className="text-xs dark:text-neutral-400 text-neutral-600">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Journey;
