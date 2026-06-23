"use client";

import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { books } from "../data/booksData";

function Book({ book, onNavigate }) {
  const [lifting, setLifting] = useState(false);

  const handleClick = () => {
    if (!book.active || lifting) return;
    setLifting(true);
    setTimeout(() => onNavigate(book.href), 750);
  };

  return (
    <motion.div
      className="relative flex flex-shrink-0"
      style={{ height: `${book.h}%`, cursor: book.active ? "pointer" : "default", alignSelf: "flex-end" }}
      animate={lifting ? { y: "-25vh", scale: 1.05 } : { y: 0, scale: 1 }}
      whileHover={!lifting ? { y: book.active ? "-2vh" : "-0.5vh" } : {}}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      onClick={handleClick}
    >
      {/* Spine */}
      <div
        className="relative overflow-hidden flex flex-col justify-between"
        style={{
          width: `${book.w}px`,
          height: "100%",
          backgroundColor: book.spine,
          backgroundImage: book.artwork ? `url(${book.artwork})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: "inset -4px 0 12px rgba(0,0,0,0.4)",
          opacity: book.active ? 1 : 0.72,
        }}
      >
        {book.artwork && (
          <div className="absolute inset-0" style={{ backgroundColor: `${book.spine}cc` }} />
        )}
        <div className="relative z-10 flex flex-col items-center pt-4 gap-[3px]">
          <div className="w-[80%] h-[1.5px]" style={{ backgroundColor: book.accent, opacity: 0.8 }} />
          <div className="w-[55%] h-[1px]"   style={{ backgroundColor: book.accent, opacity: 0.4 }} />
        </div>
        <div
          className="relative z-10 flex-1 flex items-center justify-center px-1"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed", transform: "rotate(180deg)" }}
        >
          <span
            className="font-extrabold tracking-[0.2em] text-center leading-none"
            style={{ color: book.accent, fontSize: book.active ? "13px" : "11px", textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}
          >
            {book.title}
          </span>
        </div>
        <div className="relative z-10 flex flex-col items-center pb-4 gap-[3px]">
          <span
            className={book.active ? "font-handwritten" : ""}
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              color: book.accent,
              opacity: book.active ? 0.8 : 0.3,
              fontSize: book.active ? "11px" : "8px",
              letterSpacing: book.active ? "0.04em" : "0.2em",
              textTransform: book.active ? "none" : "uppercase",
              marginBottom: "5px",
            }}
          >
            {book.active ? book.subtitle : "soon"}
          </span>
          <div className="w-[55%] h-[1px]"   style={{ backgroundColor: book.accent, opacity: 0.4 }} />
          <div className="w-[80%] h-[1.5px]" style={{ backgroundColor: book.accent, opacity: 0.8 }} />
        </div>
      </div>

      {/* Pages */}
      <div
        style={{
          width: "15px",
          height: "100%",
          flexShrink: 0,
          background: `repeating-linear-gradient(to bottom, ${book.pages}ff 0px, ${book.pages}ff 1.5px, ${book.pages}77 1.5px, ${book.pages}77 2.5px)`,
          boxShadow: "inset -2px 0 6px rgba(0,0,0,0.2), 2px 0 5px rgba(0,0,0,0.3)",
          opacity: book.active ? 1 : 0.6,
        }}
      />
    </motion.div>
  );
}

export default function BookCarousel() {
  const containerRef = useRef(null);
  const router = useRouter();
  const tripled = [...books, ...books, ...books];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Start scrolled to the middle copy
    const oneSet = el.scrollWidth / 3;
    el.scrollLeft = oneSet;

    const onScroll = () => {
      const w = el.scrollWidth / 3;
      // Silently jump when drifting into the first or last clone
      if (el.scrollLeft < w) {
        el.scrollLeft += w;
      } else if (el.scrollLeft >= w * 2) {
        el.scrollLeft -= w;
      }
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // Full-bleed breakout from the homepage's px padding
    <div
      className="relative"
      style={{
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
        height: "75vh",
        background: "radial-gradient(ellipse at 50% 20%, #2e1f10 0%, #120b04 100%)",
      }}
    >
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #120b04, transparent)" }} />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #120b04, transparent)" }} />

      {/* Scrollable books */}
      <div
        ref={containerRef}
        className="absolute inset-0 scrollbar-hide"
        style={{ overflowX: "auto", overflowY: "hidden", bottom: "24px", scrollBehavior: "auto" }}
      >
        <div
          className="flex items-end gap-[3px] h-full"
          style={{ paddingLeft: "80px", paddingRight: "80px", paddingTop: "20px" }}
        >
          {tripled.map((book, i) => (
            <Book key={i} book={book} onNavigate={(href) => router.push(href)} />
          ))}
        </div>
      </div>

      {/* Shelf plank */}
      <div
        className="absolute left-0 right-0 bottom-0 z-10"
        style={{
          height: "24px",
          background: "linear-gradient(to bottom, #9b6a3c 0%, #7a4f28 50%, #4a2e10 100%)",
          boxShadow: "0 -2px 8px rgba(0,0,0,0.5), 0 8px 20px rgba(0,0,0,0.8)",
        }}
      />

      {/* Scroll hint */}
      <div className="absolute bottom-[34px] right-8 z-20 pointer-events-none flex items-center gap-2"
        style={{ color: "rgba(245,201,138,0.3)" }}>
        <span className="text-[10px] tracking-[0.2em] uppercase">scroll</span>
        <span className="text-sm">→</span>
      </div>
    </div>
  );
}
