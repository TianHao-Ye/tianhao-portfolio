interface WorkExperienceProps {
  title: string;
  jobType?: string;
  time: string;
  company: string;
  position?: string;
  points: string[]; // Array of bullet points
}

export default function WorkExperience({
  title,
  jobType,
  time,
  company,
  position,
  points,
}: WorkExperienceProps) {
  return (
    <div className="mb-6">
      {/* Title & Time */}
      <div className="flex justify-between items-center">
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-lg font-semibold">{jobType}</p>
        <p className="text-lg font-semibold">{time}</p>
      </div>

      {/* Company & Position */}
      <p className="text-lg font-semibold mt-1">
        {company}
        {position && `, ${position}`}
      </p>

      {/* Bullet Points */}
      <ul className="list-disc pl-6 mt-2 space-y-1">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
