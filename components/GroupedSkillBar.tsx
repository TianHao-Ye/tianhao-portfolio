"use client";
import { useState } from "react";

interface Skill {
  name: string;
  percentage: number;
  color: string;
}

interface GroupedSkillBarProps {
  category: string;
  skills: Skill[];
}

export default function GroupedSkillBar({
  category,
  skills,
}: GroupedSkillBarProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex items-center gap-4 mb-3">
      {/* Category label with fixed width */}
      <p className="w-40 shrink-0 font-medium text-gray-800 dark:text-gray-200">
        {category}
      </p>

      {/* Skill bar (flexible width) */}
      <div className="flex-1 relative flex h-8 rounded-full overflow-hidden border border-gray-300 dark:border-gray-700">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="h-full flex items-center justify-center text-xs font-semibold text-white cursor-pointer transition-all duration-300"
            style={{
              width: `${skill.percentage}%`,
              backgroundColor: skill.color,
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === index ? `${skill.percentage}%` : skill.name}
          </div>
        ))}
      </div>
    </div>
  );
}
