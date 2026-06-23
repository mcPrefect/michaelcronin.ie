"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function CityGalleryPage({ tripInfo, photos, sections }) {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#faf5ed", color: "#1c120b" }}>

      {/* ── HERO ──────────────────────────────────────────── */}
      <div
        className="relative text-white px-6 py-20 text-center overflow-hidden"
        style={{ backgroundColor: tripInfo.heroColor }}
      >
        {tripInfo.heroArtwork && (
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url('${tripInfo.heroArtwork}')`, opacity: 0.2 }}
          />
        )}

        <div className="absolute inset-x-0 top-5 flex items-center px-10 pointer-events-none">
          <div className="flex-1" style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }} />
          <span className="mx-3 text-white/25 text-xs">✦</span>
          <div className="flex-1" style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }} />
        </div>
        <div className="absolute inset-x-0 bottom-5 flex items-center px-10 pointer-events-none">
          <div className="flex-1" style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }} />
          <span className="mx-3 text-white/25 text-xs">✦</span>
          <div className="flex-1" style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }} />
        </div>

        <h1
          className="relative font-extrabold tracking-[0.2em] mb-3 leading-none"
          style={{ fontSize: "clamp(3rem, 12vw, 8rem)" }}
        >
          {tripInfo.title}
        </h1>
        {tripInfo.dates && (
          <p className="relative text-white/55 text-xs tracking-[0.3em] uppercase mb-4">
            {tripInfo.dates}
          </p>
        )}
        {tripInfo.description && (
          <p className="relative text-white/70 max-w-lg mx-auto text-base leading-relaxed">
            {tripInfo.description}
          </p>
        )}
      </div>

      {/* ── SECTIONS ──────────────────────────────────────── */}
      {sections.map((section) => {
        const sectionPhotos = photos.filter((p) => p.location === section.location);

        return (
          <div key={section.location}>

            {/* Section banner */}
            <div
              className="relative w-full overflow-hidden flex items-end"
              style={{ height: "300px" }}
            >
              {section.artwork ? (
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${section.artwork}')` }}
                />
              ) : (
                <div className="absolute inset-0" style={{ backgroundColor: section.color }} />
              )}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(10,5,3,0.82) 0%, rgba(10,5,3,0.2) 55%, transparent 100%)",
                }}
              />
              <div className="relative z-10 px-8 pb-7 w-full">
                <h2
                  className="text-white font-extrabold tracking-[0.15em] leading-none"
                  style={{ fontSize: "clamp(2rem, 7vw, 4.5rem)" }}
                >
                  {section.location.toUpperCase()}
                </h2>
                {section.artwork && section.artworkCredit && (
                  <p className="text-white/40 text-[11px] mt-1.5 italic">
                    {section.artworkCredit}
                  </p>
                )}
              </div>
            </div>

            {/* Photos or coming soon */}
            {sectionPhotos.length === 0 ? (
              <div className="py-16 text-center">
                <p className="font-handwritten text-2xl" style={{ color: "#c4a882" }}>
                  Photos coming soon...
                </p>
              </div>
            ) : (
              <div className="px-4 md:px-10 py-8 pb-4">
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-3">
                  {sectionPhotos.map((photo) => {
                    const globalIndex = photos.indexOf(photo);
                    return (
                      <div
                        key={photo.src}
                        className="break-inside-avoid mb-3 relative group cursor-pointer overflow-hidden"
                        style={{ borderRadius: "3px" }}
                        onClick={() => setLightboxIndex(globalIndex)}
                      >
                        <Image
                          src={photo.src}
                          alt={photo.caption || tripInfo.title}
                          width={1200}
                          height={800}
                          className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div
                          className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            background: "linear-gradient(to top, rgba(28,18,11,0.75) 0%, rgba(28,18,11,0.1) 50%, transparent 100%)",
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
          href="/shelf"
          className="text-[11px] tracking-[0.25em] uppercase transition-opacity duration-200 hover:opacity-50"
          style={{ color: "#7a5c4a" }}
        >
          ← Travels &amp; Tales
        </Link>
        {tripInfo.heroArtworkCredit && (
          <p className="text-xs mt-4 italic" style={{ color: "#b5a090" }}>
            Header artwork: {tripInfo.heroArtworkCredit}
          </p>
        )}
        <p className="text-xs mt-1" style={{ color: "#b5a090" }}>
          Built with a little help from AI
        </p>
      </div>

      {/* ── LIGHTBOX ──────────────────────────────────────── */}
      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={photos.map((p) => ({ src: p.src }))}
        styles={{ container: { backgroundColor: "rgba(10,5,3,0.97)" } }}
      />
    </main>
  );
}
