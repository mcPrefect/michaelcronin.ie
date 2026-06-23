"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

import { books } from "../../data/booksData";

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
      style={{
        height: `${book.h}vh`,
        cursor: book.active ? "pointer" : "default",
        alignSelf: "flex-end",
      }}
      animate={lifting ? { y: "-30vh", scale: 1.05 } : { y: 0, scale: 1 }}
      whileHover={!lifting ? { y: book.active ? "-3vh" : "-1vh" } : {}}
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

        {/* Top border */}
        <div className="relative z-10 flex flex-col items-center pt-4 gap-[3px]">
          <div className="w-[80%] h-[1.5px]" style={{ backgroundColor: book.accent, opacity: 0.8 }} />
          <div className="w-[55%] h-[1px]"   style={{ backgroundColor: book.accent, opacity: 0.4 }} />
        </div>

        {/* Title */}
        <div
          className="relative z-10 flex-1 flex items-center justify-center px-1"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed", transform: "rotate(180deg)" }}
        >
          <span
            className="font-extrabold tracking-[0.2em] text-center leading-none"
            style={{
              color: book.accent,
              fontSize: book.active ? "13px" : "11px",
              textShadow: "0 1px 6px rgba(0,0,0,0.6)",
            }}
          >
            {book.title}
          </span>
        </div>

        {/* Bottom: label + border */}
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

      {/* Pages (right side) */}
      <div
        style={{
          width: "15px",
          height: "100%",
          flexShrink: 0,
          background: `repeating-linear-gradient(
            to bottom,
            ${book.pages}ff 0px,
            ${book.pages}ff 1.5px,
            ${book.pages}77 1.5px,
            ${book.pages}77 2.5px
          )`,
          boxShadow: "inset -2px 0 6px rgba(0,0,0,0.2), 2px 0 5px rgba(0,0,0,0.3)",
          opacity: book.active ? 1 : 0.6,
        }}
      />
    </motion.div>
  );
}

export default function Shelf() {
  const router = useRouter();

  return (
    <main
      className="h-screen overflow-hidden relative"
      style={{ background: "radial-gradient(ellipse at 50% 20%, #2e1f10 0%, #120b04 100%)" }}
    >
      {/* Title */}
      {/* <div className="absolute top-6 left-0 right-0 flex justify-center z-20 pointer-events-none">
        <h1
          className="font-handwritten tracking-wide"
          style={{ color: "rgba(245,201,138,0.45)", fontSize: "clamp(1.6rem, 3vw, 2.5rem)" }}
        >
          Travels &amp; Tales
        </h1>
      </div> */}

      {/* Scroll hint */}
      {/* <div className="absolute bottom-12 right-8 z-20 pointer-events-none flex items-center gap-2"
        style={{ color: "rgba(245,201,138,0.3)" }}>
        <span className="text-[10px] tracking-[0.2em] uppercase">scroll</span>
        <span className="text-sm">→</span>
      </div> */}

      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #120b04, transparent)" }} />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #120b04, transparent)" }} />

      {/* Scrollable books area */}
      <div
        className="absolute inset-0 scrollbar-hide"
        style={{ overflowX: "auto", overflowY: "hidden", bottom: "24px" }}
      >
        <div
          className="flex items-end gap-[3px] h-full"
          style={{ paddingLeft: "80px", paddingRight: "80px", paddingTop: "80px" }}
        >
          {books.map((book) => (
            <Book key={book.id} book={book} onNavigate={(href) => router.push(href)} />
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

      {/* Back link */}
      <Link
        href="/"
        className="absolute bottom-[34px] left-8 z-20 text-[10px] tracking-[0.3em] uppercase transition-all duration-200 hover:opacity-70"
        style={{ color: "rgba(245,201,138,0.3)" }}
      >
        ← home
      </Link>
    </main>
  );
}
