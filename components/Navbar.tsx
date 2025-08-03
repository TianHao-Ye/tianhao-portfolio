"use client";

import { metaData } from "@/app/config";
import Link from "next/link";

const navLinks = [
  { path: "/", name: "Home" },
  { path: "/projects", name: "Projects" },
  { path: "/notes", name: "Notes" },
  { path: "/about", name: "About" },
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
              {metaData.title}
            </Link>
          </div>

          {/* Right: Navigation Links */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map(({ path, name }) => (
              <Link
                key={path}
                href={path}
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
