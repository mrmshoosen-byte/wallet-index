"use client";

import wallets from "../../data/wallets.json";

export default function WalletsPage() {

  const copyAll = () => {
    navigator.clipboard.writeText(
      wallets.map(w => w.address).join("\n")
    );
  };

  const copyOne = (addr) => {
    navigator.clipboard.writeText(addr);
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      <h1 className="text-3xl mb-6">All Wallets</h1>

      <button
        onClick={copyAll}
        className="mb-6 bg-purple-600 px-4 py-2 rounded-lg"
      >
        Copy All
      </button>

      <div className="space-y-3">
        {wallets.map((w, i) => (
          <div
            key={i}
            className="flex justify-between items-center bg-neutral-900 border border-neutral-800 p-3 rounded-xl"
          >
            <div className="text-sm break-all">{w.address}</div>

            <div className="flex gap-3">
              {w.twitter && (
                <a
                  href={w.twitter}
                  target="_blank"
                  className="text-blue-400 text-xs"
                >
                  Tweet
                </a>
              )}

              <button
                onClick={() => copyOne(w.address)}
                className="text-xs bg-white text-black px-2 py-1 rounded"
              >
                Copy
              </button>
            </div>
          </div>
        ))}
      </div>

    </main>
  );
}
