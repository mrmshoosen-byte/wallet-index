"use client";

import { useState } from "react";
import wallets from "../data/wallets.json";

export default function Home() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);

  const search = () => {
    const found = wallets.find(
      (w) => w.address.toLowerCase() === query.toLowerCase()
    );
    setResult(found || null);
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      
      {/* glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(128,0,255,0.2),transparent_60%)]"></div>

      <h1 className="text-5xl font-semibold mb-3 z-10">
        Wallet Index
      </h1>

      <p className="text-neutral-400 mb-8 z-10 text-center max-w-md">
        Search and verify wallets indexed from Twitter discussions.
      </p>

      <div className="z-10 w-full max-w-xl bg-neutral-900 border border-neutral-800 rounded-2xl p-4">
        <div className="flex gap-2">
          <input
            className="flex-1 bg-black border border-neutral-700 px-4 py-3 rounded-lg"
            placeholder="Paste wallet address..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button
            onClick={search}
            className="bg-purple-600 px-5 rounded-lg hover:bg-purple-500"
          >
            Search
          </button>
        </div>

        {result && (
          <div className="mt-4 text-green-400 text-sm">
            ✔ Found in index
          </div>
        )}

        {query && !result && (
          <div className="mt-4 text-red-400 text-sm">
            ✖ Not found
          </div>
        )}
      </div>

      {/* link to wallets page */}
      <a
        href="/wallets"
        className="z-10 mt-8 text-sm text-purple-400 hover:underline"
      >
        View all indexed wallets →
      </a>
    </main>
  );
}
