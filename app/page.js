"use client";

import { useState } from "react";
import wallets from "../data/wallets.json";

export default function Home() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleSearch = () => {
    const found = wallets.find(
      (w) => w.address.toLowerCase() === query.toLowerCase()
    );
    setResult(found ? found.address : null);
  };

  const copyAll = () => {
    const all = wallets.map((w) => w.address).join("\n");
    navigator.clipboard.writeText(all);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black blur-3xl opacity-40" />

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
          Wallet Index
        </h1>

        <p className="text-neutral-400 max-w-md mb-8">
          Instantly check if your wallet address has been indexed.  
          Simple. Fast. Public.
        </p>

        {/* SEARCH BAR */}
        <div className="w-full max-w-xl bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-2xl p-4 shadow-xl">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Paste wallet address..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-black border border-neutral-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-purple-500"
            />

            <button
              onClick={handleSearch}
              className="bg-purple-600 px-5 py-3 rounded-lg text-sm font-medium hover:bg-purple-500 transition"
            >
              Search
            </button>
          </div>

          <div className="mt-4 text-sm">
            {result ? (
              <span className="text-green-400">✔ Address found</span>
            ) : query ? (
              <span className="text-red-400">✖ Not found</span>
            ) : null}
          </div>
        </div>
      </section>

      {/* STATS / TRUST BAR */}
      <section className="flex justify-center px-4 mb-12">
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl px-6 py-4 text-sm text-neutral-400">
          {wallets.length} addresses indexed
        </div>
      </section>

      {/* ALL ADDRESSES */}
      <section className="max-w-3xl mx-auto px-4 pb-20">
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-lg">

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">All Indexed Addresses</h2>

            <button
              onClick={copyAll}
              className="text-sm bg-white text-black px-3 py-1 rounded-lg hover:opacity-80 transition"
            >
              {copied ? "Copied!" : "Copy All"}
            </button>
          </div>

          <textarea
            readOnly
            value={wallets.map((w) => w.address).join("\n")}
            className="w-full h-72 bg-black border border-neutral-800 rounded-lg p-3 text-xs text-neutral-300 focus:outline-none resize-none"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-xs text-neutral-600 pb-6">
        Built for transparency • Not affiliated with any platform
      </footer>
    </main>
  );
}
