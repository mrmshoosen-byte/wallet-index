"use client";

import { useMemo, useState } from "react";
import wallets from "../data/wallets.json";

export default function Home() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const totalWallets = wallets.length;

  const search = () => {
    const found = wallets.find(
      (w) => w.address.toLowerCase() === query.trim().toLowerCase()
    );
    setResult(found || null);
    setHasSearched(true);
  };

  const canSearch = useMemo(() => query.trim().length > 0, [query]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05050b] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(124,58,237,0.35),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.22),transparent_40%),radial-gradient(circle_at_50%_100%,rgba(236,72,153,0.18),transparent_45%)]" />

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center px-6 py-20">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-violet-200 backdrop-blur">
          Wallet Intelligence
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
        </div>

        <h1 className="text-center text-5xl font-semibold leading-tight md:text-6xl">
          Wallet Index
        </h1>

        <p className="mt-5 max-w-2xl text-center text-base text-neutral-300 md:text-lg">
          A fast, dark-mode wallet verification interface with smooth micro-animations and instant lookup.
        </p>

        <div className="mt-10 w-full rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_18px_60px_rgba(76,29,149,0.35)] backdrop-blur-xl md:p-6">
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              className="w-full flex-1 rounded-2xl border border-white/15 bg-black/50 px-4 py-3 text-sm outline-none transition duration-200 placeholder:text-neutral-500 focus:border-violet-400 focus:ring-2 focus:ring-violet-500/40"
              placeholder="Paste wallet address..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            <button
              onClick={search}
              disabled={!canSearch}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500 px-6 py-3 text-sm font-medium text-white transition duration-200 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(168,85,247,0.55)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition duration-700 group-hover:translate-x-full" />
              <span className="relative">Search</span>
            </button>
          </div>

          {hasSearched && result && (
            <div className="mt-4 rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
              ✔ Found in index
            </div>
          )}

          {hasSearched && !result && (
            <div className="mt-4 rounded-xl border border-rose-400/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-300">
              ✖ Not found
            </div>
          )}

          <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-neutral-300">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              Indexed wallets: <strong className="text-white">{totalWallets}</strong>
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              Theme: <strong className="text-violet-300">Midnight</strong>
            </span>
          </div>
        </div>

        <a
          href="/wallets"
          className="group mt-8 inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-500/10 px-5 py-2 text-sm text-violet-200 transition hover:border-violet-300 hover:bg-violet-400/15 hover:text-violet-100"
        >
          View all indexed wallets
          <span className="transition group-hover:translate-x-0.5">→</span>
        </a>
      </section>
    </main>
  );
}
