"use client";

import { logos } from "../data/skills";

export default function SkillsStrip() {
  return (
    <section className="mt-20 overflow-x-auto overflow-y-hidden scrollbar-hide touch-auto">
      <div className="flex gap-8 px-4 py-6 items-center min-w-max">
        {[...logos, ...logos].map((img, i) => (
          <img
            key={i}
            src={`/skills/${img}`}
            alt={img.replace(/\.(svg|png)$/, "")}
            className="h-16 sm:h-20 w-auto object-contain mx-4 my-2 transition-transform hover:scale-105 flex-shrink-0"
            title={img.replace(/\.(svg|png)/, "")}
          />
        ))}
      </div>
    </section>
  );
}
