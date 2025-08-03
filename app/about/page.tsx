import ContactLinks from "@/components/ContactLinks";
import ResumeSection from "@/components/ResumeSection";
import { metaData } from "../config";
import Image from "next/image";
import WorkExperienceCard from "@/components/WorkExperienceCard";

export default function AboutPage() {
  return (
    <div>
      <div className="flex flex-col items-center gap-4 mb-8">
        <Image
          src="/images/portrait.png"
          alt={metaData.name}
          width={200}
          height={200}
          className="rounded-full shadow-lg border border-gray-300 dark:border-gray-700"
        />
        <p>Software Engineer | UniMelb M.IT (2023), B.Sc (2021)</p>
        <ContactLinks />
      </div>
      {/* Professional Summary */}
      <ResumeSection title="About">
        <p>
          Motivated Full Stack Developer with 1 year of experience in web/mobile
          development and testing. Proficient in React Native, Next.js, Symfony,
          and TypeScript. Strong problem-solving abilities and collaborative
          experience in Agile teams. AWS Certified Cloud Practitioner with a
          passion for continuous learning.
        </p>
      </ResumeSection>

      {/* Technical Skills */}
      <ResumeSection title="Technical Stack">
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Languages:</strong> TypeScript, JavaScript, Java, Python,
            PHP, C
          </li>
          <li>
            <strong>Front-End:</strong> HTML5, CSS3, React Native (Expo),
            React.js, Next.js, Cocos Creator
          </li>
          <li>
            <strong>Back-End/DB:</strong> PHP (Symfony5), MySQL, MongoDB
          </li>
          <li>
            <strong>Tools:</strong> AWS, Postman, Git, Trello, Figma, CI/CD
            (GitHub Actions)
          </li>
        </ul>
      </ResumeSection>

      {/* Work Experience */}
      <ResumeSection title="Work Experience">
        <WorkExperienceCard
          title="Front-End Developer"
          jobType="Intern->Full Time"
          time="Apr 2025 - Present"
          company="Growild Technology"
          position="Sydney"
          points={[
            "Built mobile game interfaces using Cocos Creator and TypeScript.",
            "Collaborated with designers to deliver smooth gameplay experiences.",
            "Participated in Agile sprints and daily stand-ups.",
          ]}
        />

        <WorkExperienceCard
          title="Front-End Developer"
          jobType="Intern->Part Time"
          time="Mar 2024 - Dec 2024"
          company="Tanggram Pty Ltd"
          position="Melbourne"
          points={[
            "Enhanced React Native apps (Redux, Redux-Saga) for smoother UX.",
            "Maintained company website (Next.js) and improved SEO.",
            "Added data visualization features to admin system (Symfony5).",
          ]}
        />
      </ResumeSection>

      {/* Education */}
      <ResumeSection title="Education">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Master of Information Technology</strong> - University of
            Melbourne (Mar 2022 - Jul 2023)
          </li>
          <li>
            <strong>Bachelor of Science (First Class Honors)</strong> -
            University of Melbourne (Aug 2018 - Nov 2021)
          </li>
        </ul>
      </ResumeSection>

      {/* Interests */}
      <ResumeSection title="Interests">
        <p>
          Travelling, Photography, Badminton, Tennis, Hiking, Reading, Movies,
          Networking and cultural exchange.
        </p>
      </ResumeSection>
    </div>
  );
}
