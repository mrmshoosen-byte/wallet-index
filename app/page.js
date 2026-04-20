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
    <main className="page">
      <div className="bg-layer" />

      <section className="content">
        <div className="pill">
          Wallet Intelligence
          <span className="dot" />
        </div>

        <h1>Wallet Index</h1>

        <p>
          A fast wallet verification interface with rich dark visuals, fluid micro-animations, and instant lookup.
        </p>

        <div className="panel">
          <div className="controls">
            <input
              placeholder="Paste wallet address..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            <button onClick={search} disabled={!canSearch}>
              <span className="shine" />
              <span>Search</span>
            </button>
          </div>

          {hasSearched && result && <div className="message success">✔ Found in index</div>}
          {hasSearched && !result && <div className="message error">✖ Not found</div>}

          <div className="meta">
            <span>Indexed wallets: <strong>{totalWallets}</strong></span>
            <span>Theme: <strong>Midnight</strong></span>
          </div>
        </div>

        <a href="/wallets" className="linkBtn">
          View all indexed wallets <span>→</span>
        </a>
      </section>
    </main>
  );
}
