"use client";

import { useState } from "react";
import wallets from "../../data/wallets.json";

export default function WalletsPage() {
  const [copied, setCopied] = useState("");

  const copyAll = async () => {
    await navigator.clipboard.writeText(wallets.map((w) => w.address).join("\n"));
    setCopied("all");
    setTimeout(() => setCopied(""), 1500);
  };

  const copyOne = async (addr) => {
    await navigator.clipboard.writeText(addr);
    setCopied(addr);
    setTimeout(() => setCopied(""), 1200);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05050b] px-6 py-12 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.22),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.16),transparent_45%)]" />

      <section className="relative z-10 mx-auto max-w-4xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">All Wallets</h1>

          <button
            onClick={copyAll}
            className="group relative overflow-hidden rounded-xl border border-violet-400/30 bg-violet-500/15 px-4 py-2 text-sm font-medium text-violet-100 transition duration-200 hover:scale-[1.03] hover:border-violet-300 hover:bg-violet-500/25 active:scale-[0.98]"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-full" />
            <span className="relative">{copied === "all" ? "Copied all ✓" : "Copy All"}</span>
          </button>
        </div>

        <div className="space-y-3">
          {wallets.map((w, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_10px_28px_rgba(0,0,0,0.28)] backdrop-blur md:flex-row md:items-center md:justify-between"
            >
              <div className="text-sm break-all text-neutral-100">{w.address}</div>

              <div className="flex items-center gap-3">
                {w.twitter && (
                  <a
                    href={w.twitter}
                    target="_blank"
                    className="rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-xs text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/20"
                  >
                    Tweet
                  </a>
                )}

                <button
                  onClick={() => copyOne(w.address)}
                  className="rounded-lg border border-white/20 bg-black/40 px-3 py-1.5 text-xs text-white transition hover:border-violet-300 hover:bg-violet-500/20"
                >
                  {copied === w.address ? "Copied ✓" : "Copy"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
