"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const PAGE_LABELS = {
  italy:     "ITALIA",
  edinburgh: "EDINBURGH",
  london:    "LONDON",
  leeds:     "LEEDS",
  kilkenny:  "KILKENNY",
  flagmount: "FLAGMOUNT",
  malta:        "MALTA",
  anniversary:  "ANNIVERSARY",
};

function slugFromPath(path) {
  if (!path) return null;
  const segment = path.split("/")[1];
  return PAGE_LABELS[segment] ? segment : null;
}

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/shelf";
  const slug = slugFromPath(next);
  const label = PAGE_LABELS[slug] ?? "TRAVELS & TALES";

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password, slug }),
    });

    setLoading(false);

    if (res.ok) {
      router.push(next);
    } else {
      setError("Incorrect password");
      setPassword("");
    }
  };

  return (
    <main
      className="min-h-screen flex items-center justify-center"
      style={{ background: "radial-gradient(ellipse at 50% 30%, #2e1f10 0%, #120b04 100%)" }}
    >
      <div
        className="flex flex-col items-center gap-6 px-10 py-12 rounded-sm"
        style={{
          background: "rgba(250,245,237,0.04)",
          border: "1px solid rgba(245,201,138,0.15)",
          minWidth: "300px",
        }}
      >
        <div className="flex flex-col items-center gap-1">
          <span
            className="font-handwritten"
            style={{ color: "rgba(245,201,138,0.5)", fontSize: "12px", letterSpacing: "0.3em" }}
          >
            michaelcronin.ie
          </span>
          <h1
            className="font-extrabold tracking-[0.25em]"
            style={{ color: "rgba(245,201,138,0.9)", fontSize: "22px" }}
          >
            {label}
          </h1>
          <div style={{ width: "80%", height: "1px", background: "rgba(245,201,138,0.2)", marginTop: "4px" }} />
        </div>

        <p
          className="text-center"
          style={{ color: "rgba(245,201,138,0.45)", fontSize: "12px", letterSpacing: "0.1em" }}
        >
          Enter the password to continue
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-full">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            autoFocus
            className="w-full text-center outline-none rounded-none"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(245,201,138,0.25)",
              color: "rgba(245,201,138,0.9)",
              padding: "10px 16px",
              fontSize: "14px",
              letterSpacing: "0.15em",
            }}
          />

          {error && (
            <p style={{ color: "#c0504a", fontSize: "12px", letterSpacing: "0.1em" }}>{error}</p>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            className="w-full tracking-[0.25em] uppercase transition-opacity duration-200"
            style={{
              background: "rgba(245,201,138,0.12)",
              border: "1px solid rgba(245,201,138,0.35)",
              color: "rgba(245,201,138,0.85)",
              padding: "10px 16px",
              fontSize: "11px",
              cursor: loading || !password ? "default" : "pointer",
              opacity: loading || !password ? 0.4 : 1,
            }}
          >
            {loading ? "..." : "Enter"}
          </button>
        </form>
      </div>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
