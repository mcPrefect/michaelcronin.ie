"use client";

import { logos } from "../data/skills";

export default function SkillsStrip() {
  return (
    <section className="mt-20 overflow-hidden">
      <div className="whitespace-nowrap animate-scroll flex gap-8 px-4 py-6 items-center">
        {[...logos, ...logos].map((img, i) => (
          <img
            key={i}
            src={`/skills/${img}`}
            alt={img.replace(/\.(svg|png)$/, "")}
            className="h-16 sm:h-20 w-auto object-contain mx-4 my-2 transition-transform hover:scale-105"
            title={img.replace(/\.(svg|png)/, "")} // tooltip on hover
          />
        ))}
      </div>
    </section>
  );
}
