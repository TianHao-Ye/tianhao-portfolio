"use client";

import { metaData } from "@/app/config";
import Link from "next/link";
import { FaHome, FaProjectDiagram, FaBook, FaUser } from "react-icons/fa";

const navLinks = [
  { path: "/", name: "Home", icon: <FaHome /> },
  { path: "/projects", name: "Projects", icon: <FaProjectDiagram /> },
  { path: "/notes", name: "Notes", icon: <FaBook /> },
  { path: "/about", name: "About", icon: <FaUser /> },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight hover:opacity-80 transition"
            >
              {metaData.name}
            </Link>
          </div>

          {/* Right: Navigation Links */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map(({ path, name, icon }) => (
              <Link
                key={path}
                href={path}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
              >
                {icon}
                <span>{name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
