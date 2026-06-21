"use client";

import { useState } from "react";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { italyPhotos, tripInfo } from "../../data/italyPhotos";

export default function ItalyGallery() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [activeLocation, setActiveLocation] = useState("All");

  const locations = ["All", ...tripInfo.locations];

  const filtered =
    activeLocation === "All"
      ? italyPhotos
      : italyPhotos.filter((p) => p.location === activeLocation);

  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: "#faf5ed", color: "#1c120b" }}
    >
      {/* ── HERO ──────────────────────────────────────────── */}
      <div
        className="relative text-white px-6 py-20 text-center overflow-hidden"
        style={{ backgroundColor: "#a83220" }}
      >
        {/* Top decorative rule */}
        <div className="absolute inset-x-0 top-5 flex items-center px-10 pointer-events-none">
          <div className="flex-1" style={{ borderTop: "1px solid rgba(255,255,255,0.25)" }} />
          <span className="mx-3 text-white/30 text-xs">✦</span>
          <div className="flex-1" style={{ borderTop: "1px solid rgba(255,255,255,0.25)" }} />
        </div>

        {/* Bottom decorative rule */}
        <div className="absolute inset-x-0 bottom-5 flex items-center px-10 pointer-events-none">
          <div className="flex-1" style={{ borderTop: "1px solid rgba(255,255,255,0.25)" }} />
          <span className="mx-3 text-white/30 text-xs">✦</span>
          <div className="flex-1" style={{ borderTop: "1px solid rgba(255,255,255,0.25)" }} />
        </div>

        {/* Stamp corner — top right */}
        {/* <div
          className="absolute top-8 right-8 w-16 h-20 hidden md:flex flex-col items-center justify-center text-center"
          style={{
            border: "2px solid rgba(255,255,255,0.3)",
            padding: "4px",
          }}
        >
          <span className="text-2xl">🇮🇹</span>
          <span className="text-white/50 text-[8px] tracking-widest mt-1 uppercase">
            Italia
          </span>
        </div> */}

        <h1
          className="font-extrabold tracking-[0.2em] mb-3 leading-none"
          style={{ fontSize: "clamp(4rem, 14vw, 9rem)" }}
        >
          {tripInfo.title}
        </h1>

        <p className="text-white/60 text-xs tracking-[0.3em] uppercase mb-6">
          {tripInfo.dates}
        </p>

        <p className="text-white/75 max-w-lg mx-auto text-base leading-relaxed mb-10">
          {tripInfo.description}
        </p>

      </div>

      {/* ── FILTER BAR ────────────────────────────────────── */}
      <div
        className="sticky top-0 z-10 flex items-center justify-center gap-3 flex-wrap py-4 px-4"
        style={{
          backgroundColor: "#faf5ed",
          borderBottom: "1px solid #e5d8c8",
        }}
      >
        {locations.map((loc) => {
          const isActive = activeLocation === loc;
          return (
            <button
              key={loc}
              onClick={() => setActiveLocation(loc)}
              className="px-4 py-1.5 text-xs tracking-widest uppercase transition-all duration-200"
              style={{
                borderRadius: "999px",
                border: `1px solid ${isActive ? "#a83220" : "#c9b9a8"}`,
                backgroundColor: isActive ? "#a83220" : "transparent",
                color: isActive ? "#fff" : "#7a5c4a",
                fontWeight: isActive ? 600 : 400,
              }}
            >
              {loc}
              {loc !== "All" && (
                <span className="ml-1 opacity-60">
                  ({italyPhotos.filter((p) => p.location === loc).length})
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* ── GALLERY ───────────────────────────────────────── */}
      <div className="px-4 md:px-10 py-8 pb-20">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="font-handwritten text-2xl" style={{ color: "#a83220" }}>
              No photos here yet — check back soon!
            </p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-3">
            {filtered.map((photo, i) => {
              const globalIndex = italyPhotos.indexOf(photo);
              return (
                <div
                  key={photo.src}
                  className="break-inside-avoid mb-3 relative group cursor-pointer overflow-hidden"
                  style={{ borderRadius: "3px" }}
                  onClick={() => setLightboxIndex(globalIndex)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo.src}
                    alt={photo.caption || "Italy"}
                    className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    style={{ display: "block" }}
                  />

                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(28,18,11,0.75) 0%, rgba(28,18,11,0.1) 50%, transparent 100%)",
                    }}
                  >
                    {photo.caption && (
                      <p className="font-handwritten text-white text-xl leading-tight drop-shadow-md">
                        {photo.caption}
                      </p>
                    )}
                    {photo.location && (
                      <p
                        className="text-[10px] tracking-[0.2em] uppercase mt-0.5"
                        style={{ color: "#f5c98a" }}
                      >
                        {photo.location}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* ── FOOTER ────────────────────────────────────────── */}
      <div
        className="text-center py-10"
        style={{ borderTop: "1px solid #e5d8c8" }}
      >
        <p
          className="font-handwritten text-lg mb-3"
          style={{ color: "#a83220" }}
        >
          {italyPhotos.length} photos · {tripInfo.dates}
        </p>
        <Link
          href="/"
          className="text-[11px] tracking-[0.25em] uppercase transition-opacity duration-200 hover:opacity-50"
          style={{ color: "#7a5c4a" }}
        >
          ← michaelcronin.ie
        </Link>
      </div>

      {/* ── LIGHTBOX ──────────────────────────────────────── */}
      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={italyPhotos.map((p) => ({ src: p.src }))}
        styles={{ container: { backgroundColor: "rgba(10,5,3,0.97)" } }}
      />
    </main>
  );
}
