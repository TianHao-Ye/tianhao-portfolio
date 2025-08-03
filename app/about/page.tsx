import ContactLinks from "@/components/ContactLinks";
import ResumeSection from "@/components/ResumeSection";

export default function AboutPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <ContactLinks />

      {/* Professional Summary */}
      <ResumeSection title="Professional Summary">
        <p>
          Motivated Full Stack Developer with 1 year of experience in web/mobile
          development and testing. Proficient in React Native, Next.js, Symfony,
          and TypeScript. Strong problem-solving abilities and collaborative
          experience in Agile teams. AWS Certified Cloud Practitioner with a
          passion for continuous learning.
        </p>
      </ResumeSection>

      {/* Technical Skills */}
      <ResumeSection title="Technical Skills">
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
        <div>
          <h3 className="text-lg font-semibold">
            Front-End Developer - Growild Technology
          </h3>
          <p className="text-sm text-gray-500">Apr 2025 - Present | Sydney</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              Built mobile game interfaces using Cocos Creator and TypeScript.
            </li>
            <li>
              Collaborated with designers to deliver smooth gameplay
              experiences.
            </li>
            <li>Participated in Agile sprints and daily stand-ups.</li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold">
            Front-End Developer (Part-Time) - Tanggram Pty Ltd
          </h3>
          <p className="text-sm text-gray-500">
            Mar 2024 - Dec 2024 | Melbourne
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              Enhanced React Native apps (Redux, Redux-Saga) for smoother UX.
            </li>
            <li>Maintained company website (Next.js) and improved SEO.</li>
            <li>
              Added data visualization features to admin system (Symfony5).
            </li>
          </ul>
        </div>
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
