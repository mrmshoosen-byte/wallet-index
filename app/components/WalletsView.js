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
    <main className="walletsPage">
  <div className="bgLayer" />
  <section className="content">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold">All Wallets</h1>

        <button
          onClick={copyAll}
          className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-500 transition"
        >
          {copied === "all" ? "Copied All ✓" : "Copy All"}
        </button>
      </div>

      {/* LIST */}
      <div className="space-y-3">
        {wallets.map((w, i) => (
          <div
            key={i}
            className="flex justify-between items-center bg-neutral-900 border border-neutral-800 p-4 rounded-xl"
          >

            {/* ADDRESS */}
            <div className="text-sm break-all text-neutral-200 max-w-[60%]">
              {w.address}
            </div>

            {/* ACTIONS */}
            <div className="flex gap-3 items-center">

              {/* VIEW TWEET BUTTON (always visible if link exists) */}
              {w.twitter ? (
                <a
                  href={w.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 text-xs hover:underline"
                >
                  View Tweet
                </a>
              ) : (
                <span className="text-neutral-600 text-xs">
                  No tweet
                </span>
              )}

              {/* COPY BUTTON */}
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
