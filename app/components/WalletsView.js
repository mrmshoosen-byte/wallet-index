"use client";

import { useState } from "react";
import wallets from "../../data/wallets.json";

export default function WalletsView() {
  const [copied, setCopied] = useState("");

  const copyAll = async () => {
    await navigator.clipboard.writeText(
      wallets.map((w) => w.address).join("\n")
    );
    setCopied("all");
    setTimeout(() => setCopied(""), 1500);
  };

  const copyOne = async (addr) => {
    await navigator.clipboard.writeText(addr);
    setCopied(addr);
    setTimeout(() => setCopied(""), 1200);
  };

  return (
    <main className="min-h-screen bg-black text-white relative">

      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(128,0,255,0.15),transparent_60%)]" />

      <section className="relative max-w-4xl mx-auto px-6 py-12">

        {/* header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold">All Wallets</h1>

          <button
            onClick={copyAll}
            className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-500 transition"
          >
            {copied === "all" ? "Copied All ✓" : "Copy All"}
          </button>
        </div>

        {/* list */}
        <div className="space-y-3">
          {wallets.map((w, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-neutral-900 border border-neutral-800 p-4 rounded-xl"
            >

              {/* address */}
              <div className="text-sm break-all text-neutral-200">
                {w.address}
              </div>

              {/* actions */}
              <div className="flex gap-3 items-center">

                {w.twitter && (
                  <a
                    href={w.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 text-xs hover:underline"
                  >
                    View Tweet
                  </a>
                )}

                <button
                  onClick={() => copyOne(w.address)}
                  className="text-xs bg-white text-black px-3 py-1 rounded hover:opacity-80"
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
