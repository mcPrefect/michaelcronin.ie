"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { italyPhotos, tripInfo } from "../../data/italyPhotos";

const sections = [
  {
    location: "Firenze",
    artwork: "/italy/Firenze.jpg",
    artworkTitle: "A View of Florence from the Convent of Capuchins at Montugi",
    artworkArtist: "Thomas Bowles III (English, 1712–1767)",
  },
  {
    location: "Monti del Chianti",
    artwork: "/italy/Chianti.jpg",
    artworkTitle: "Stilleben mit Obst und Chiantiflasche",
    artworkArtist: "Marie Egner (Austrian, 1850–1940)",
  },
  {
    location: "Pisa",
    artwork: "/italy/Pisa.jpg",
    artworkTitle: "Pisa (1843–44)",
    artworkArtist: "Francis Seymour Haden (English, 1818–1910)",
  },
];

export default function ItalyGallery() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#faf5ed", color: "#1c120b" }}>

      {/* ── HERO ──────────────────────────────────────────── */}
      <div
        className="relative text-white px-6 py-20 text-center overflow-hidden"
        style={{ backgroundColor: "#a83220" }}
      >
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url('/italy/Harvest.jpg')", opacity: 0.2 }}
        />

        <div className="absolute inset-x-0 top-5 flex items-center px-10 pointer-events-none">
          <div className="flex-1" style={{ borderTop: "1px solid rgba(255,255,255,0.25)" }} />
          <span className="mx-3 text-white/30 text-xs">✦</span>
          <div className="flex-1" style={{ borderTop: "1px solid rgba(255,255,255,0.25)" }} />
        </div>

        <div className="absolute inset-x-0 bottom-5 flex items-center px-10 pointer-events-none">
          <div className="flex-1" style={{ borderTop: "1px solid rgba(255,255,255,0.25)" }} />
          <span className="mx-3 text-white/30 text-xs">✦</span>
          <div className="flex-1" style={{ borderTop: "1px solid rgba(255,255,255,0.25)" }} />
        </div>

        <h1
          className="relative font-extrabold tracking-[0.2em] mb-3 leading-none"
          style={{ fontSize: "clamp(4rem, 14vw, 9rem)" }}
        >
          {tripInfo.title}
        </h1>
        <p className="relative text-white/60 text-xs tracking-[0.3em] uppercase mb-4">
          {tripInfo.dates}
        </p>
        <p className="relative text-white/75 max-w-lg mx-auto text-base leading-relaxed">
          {tripInfo.description}
        </p>
      </div>

      {/* ── MAP ──────────────────────────────────────────── */}
      <div className="px-4 md:px-8 py-12">
        <div className="relative max-w-4xl mx-auto">
          <div
            className="relative overflow-hidden shadow-lg"
            style={{ borderRadius: "2px" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/italy/map.jpg"
              alt="Thusciae Descriptio, Abraham Ortelius, 1570"
              className="w-full h-auto block"
              style={{ transform: "scale(1.18)", transformOrigin: "center center" }}
            />

            {/* ── Pins — adjust top/left % to reposition on the map ── */}
            {[
              { label: "Firenze",           id: "firenze", top: "25%", left: "38%" },
              { label: "Monti del Chianti", id: "chianti", top: "37%", left: "44%" },
              { label: "Pisa",              id: "pisa",    top: "44%", left: "24%" },
            ].map((pin) => (
              <a
                key={pin.id}
                href={`#${pin.id}`}
                className="absolute group"
                style={{ top: pin.top, left: pin.left, transform: "translate(-50%, -50%)" }}
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  className="w-3 h-3 rounded-full border-2 border-white shadow-md transition-transform duration-200 group-hover:scale-150"
                  style={{ backgroundColor: "#a83220" }}
                />
                <span
                  className="absolute left-4 -top-1 text-xs font-handwritten whitespace-nowrap px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                  style={{ backgroundColor: "#faf5ed", color: "#a83220", boxShadow: "0 1px 4px rgba(0,0,0,0.15)" }}
                >
                  {pin.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Map credit */}
        <p className="text-center text-[11px] mt-3 italic" style={{ color: "#b5a090" }}>
          <em>Thusciae Descriptio</em> — Abraham Ortelius, 1570 · Engraved by Frans Hogenberg ·{" "}
          <a
            href="https://www.davidrumsey.com"
            target="_blank"
            className="underline hover:opacity-70 transition-opacity"
          >
            David Rumsey Map Collection
          </a>
        </p>
      </div>

      {/* ── SECTIONS ──────────────────────────────────────── */}
      {sections.map((section) => {
        const photos = italyPhotos.filter((p) => p.location === section.location);

        return (
          <div key={section.location} id={section.location === "Firenze" ? "firenze" : section.location === "Monti del Chianti" ? "chianti" : "pisa"}>

            {/* Artwork banner */}
            <div
              className="relative w-full overflow-hidden flex items-end"
              style={{ height: "340px" }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${section.artwork}')` }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(10,5,3,0.78) 0%, rgba(10,5,3,0.15) 55%, transparent 100%)",
                }}
              />
              <div className="relative z-10 px-8 pb-7 w-full">
                <h2
                  className="text-white font-extrabold tracking-[0.15em] leading-none"
                  style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
                >
                  {section.location.toUpperCase()}
                </h2>
                <p className="text-white/45 text-[11px] mt-1.5 italic">
                  {section.artworkTitle} — {section.artworkArtist}
                </p>
              </div>
            </div>

            {/* Photos */}
            {photos.length > 0 && (
              <div className="px-4 md:px-10 py-8 pb-4">
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-3">
                  {photos.map((photo) => {
                    const globalIndex = italyPhotos.indexOf(photo);
                    return (
                      <div
                        key={photo.src}
                        className="break-inside-avoid mb-3 relative group cursor-pointer overflow-hidden"
                        style={{ borderRadius: "3px" }}
                        onClick={() => setLightboxIndex(globalIndex)}
                      >
                        <Image
                          src={photo.src}
                          alt={photo.caption || "Italy"}
                          width={1200}
                          height={800}
                          className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
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
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* ── FOOTER ────────────────────────────────────────── */}
      <div className="text-center py-10 mt-8" style={{ borderTop: "1px solid #e5d8c8" }}>
        <Link
          href="/"
          className="text-[11px] tracking-[0.25em] uppercase transition-opacity duration-200 hover:opacity-50"
          style={{ color: "#7a5c4a" }}
        >
          ← michaelcronin.ie
        </Link>
        <p className="text-xs mt-4" style={{ color: "#b5a090" }}>
          Header artwork: <em>Harvest in Tuscany</em> — Angiolo Tommasi (1858–1923)
        </p>
        <p className="text-xs mt-1" style={{ color: "#b5a090" }}>
          Built with a little help from AI
        </p>
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
