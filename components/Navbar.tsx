// components/Navbar.tsx
"use client";

import { metaData } from "@/app/config";
import Link from "next/link";
import { ThemeSwitchButton } from "./theme-provider";

const navLinks = {
  "/": { name: "Home" },
  "/projects": { name: "Projects" },
  "/notes": { name: "Notes" },
  "/about": { name: "About" },
};

export default function Navbar() {
  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-semibold">
            {metaData.title}
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {Object.entries(navLinks).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative"
            >
              {name}
            </Link>
          ))}
          {/* <ThemeSwitchButton /> */}
        </div>
      </div>
    </nav>
  );
}
