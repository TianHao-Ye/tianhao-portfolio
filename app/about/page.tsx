// app/about/page.tsx
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <section>
        <h1 className="text-4xl font-bold mb-2">About Me</h1>
        <p className="text-gray-600">
          Motivated Full Stack Developer with 1 year of experience in web/mobile
          development, testing. Proficient in React Native, Next.js, Symfony,
          and TypeScript. Strong problem-solving abilities and collaborative
          experience in Agile teams. AWS Certified Cloud Practitioner with a
          passion for continuous learning.
        </p>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <ul className="space-y-1 text-blue-600">
          <li>
            Email:{" "}
            <a href="mailto:yetianhaowork@gmail.com" className="underline">
              yetianhaowork@gmail.com
            </a>
          </li>
          <li>Phone: 0452 150 286</li>
          <li>
            LinkedIn:{" "}
            <Link
              href="https://www.linkedin.com/in/tianhao-ye-9957a9225/"
              target="_blank"
              className="underline"
            >
              linkedin.com/in/tianhao-ye
            </Link>
          </li>
          <li>
            GitHub:{" "}
            <Link
              href="https://github.com/TianHao-Ye"
              target="_blank"
              className="underline"
            >
              github.com/TianHao-Ye
            </Link>
          </li>
        </ul>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ul className="list-disc list-inside">
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
          </ul>
          <ul className="list-disc list-inside">
            <li>
              <strong>Tools:</strong> AWS, Postman, Git, Trello, Figma
            </li>
            <li>
              <strong>DevOps:</strong> CI/CD (GitHub Actions)
            </li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Master of Information Technology</strong> – The University
            of Melbourne (2022 – 2023)
          </li>
          <li>
            <strong>Bachelor of Science (First Class Honors)</strong> – The
            University of Melbourne (2018 – 2021)
          </li>
        </ul>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Work Experience</h2>

        <div className="mb-4">
          <h3 className="font-bold text-lg">
            Front-End Developer - Growild Technology
          </h3>
          <p className="text-sm text-gray-500">Apr 2025 – Present | Sydney</p>
          <ul className="list-disc list-inside mt-2">
            <li>Built mobile game UIs using Cocos Creator and TypeScript</li>
            <li>
              Collaborated in Agile team, participated in sprints and daily
              stand-ups
            </li>
            <li>Helped test and debug to ensure cross-platform game quality</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-bold text-lg">
            Front-End Developer (Part-Time) - Tanggram Pty Ltd
          </h3>
          <p className="text-sm text-gray-500">
            Mar 2024 – Dec 2024 | Melbourne
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>
              Improved mobile apps (React Native) with Redux and Redux-Saga
            </li>
            <li>Added visualization to admin system (Symfony5)</li>
            <li>
              Maintained and optimized website (Next.js), improving SEO and
              loading time by 15%
            </li>
            <li>
              Participated in Agile development and performed manual
              testing/code reviews
            </li>
          </ul>
        </div>
      </section>

      {/* Interests */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Interests</h2>
        <p>
          Travelling, Photography, Badminton, Tennis, Hiking, Reading, Movies,
          Networking, and Cultural Exchange
        </p>
      </section>
    </div>
  );
}
