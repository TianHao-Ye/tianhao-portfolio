"use client";

import { FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactLinks() {
  return (
    <div className="flex space-x-4 mb-8 text-2xl">
      {/* Email */}
      <a
        href="mailto:yetianhaowork@gmail.com"
        className="hover:text-blue-500 transition-colors"
        title="Email"
      >
        <MdEmail />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/tianhao-ye-9957a9225/"
        target="_blank"
        className="hover:text-blue-600 transition-colors"
        title="LinkedIn"
      >
        <FaLinkedin />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/TianHao-Ye"
        target="_blank"
        className="hover:text-gray-700 transition-colors"
        title="GitHub"
      >
        <FaGithub />
      </a>

      {/* Phone (just icon, no text) */}
      <a
        href="tel:0452150286"
        className="hover:text-green-500 transition-colors"
        title="Phone"
      >
        <FaPhone />
      </a>
    </div>
  );
}
