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
            className="h-24 w-auto object-contain inline-block"
            title={img.replace(/\.(svg|png)/, "")} // tooltip on hover
          />
        ))}
      </div>
    </section>
  );
}
