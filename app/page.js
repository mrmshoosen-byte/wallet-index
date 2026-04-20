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

      <style jsx>{`
        .page {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background: #05050b;
        }

        .bg-layer {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 15% 20%, rgba(124, 58, 237, 0.35), transparent 45%),
            radial-gradient(circle at 80% 0%, rgba(14, 165, 233, 0.23), transparent 40%),
            radial-gradient(circle at 50% 100%, rgba(236, 72, 153, 0.18), transparent 45%);
          pointer-events: none;
        }

        .content {
          position: relative;
          z-index: 1;
          max-width: 900px;
          margin: 0 auto;
          min-height: 100vh;
          padding: 80px 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          text-align: center;
        }

        .pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: rgba(255, 255, 255, 0.06);
          padding: 10px 14px;
          border-radius: 999px;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #ddd6fe;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #34d399;
          animation: pulse 1.25s ease-in-out infinite;
        }

        h1 {
          margin: 16px 0 8px;
          font-size: clamp(2.2rem, 8vw, 4rem);
          line-height: 1.1;
        }

        p {
          margin: 0;
          max-width: 700px;
          color: #d4d4d8;
        }

        .panel {
          margin-top: 30px;
          width: 100%;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 24px;
          padding: 20px;
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(14px);
          box-shadow: 0 24px 60px rgba(76, 29, 149, 0.35);
        }

        .controls {
          display: grid;
          gap: 12px;
          grid-template-columns: 1fr;
        }

        input {
          width: 100%;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          background: rgba(0, 0, 0, 0.45);
          color: #fff;
          padding: 14px;
          outline: none;
          font-size: 14px;
          transition: border-color .2s, box-shadow .2s;
        }

        input:focus {
          border-color: #a78bfa;
          box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.28);
        }

        button {
          position: relative;
          overflow: hidden;
          border: none;
          border-radius: 16px;
          padding: 14px 18px;
          color: #fff;
          cursor: pointer;
          background: linear-gradient(90deg, #7c3aed, #a855f7, #d946ef);
          font-weight: 600;
          transition: transform .18s, box-shadow .2s, opacity .2s;
        }

        button:hover:not(:disabled) {
          transform: translateY(-1px) scale(1.02);
          box-shadow: 0 0 28px rgba(168, 85, 247, 0.55);
        }

        button:active:not(:disabled) {
          transform: scale(0.98);
        }

        button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(110deg, transparent 20%, rgba(255, 255, 255, 0.3) 50%, transparent 80%);
          transform: translateX(-120%);
          transition: transform .7s;
        }

        button:hover .shine { transform: translateX(120%); }

        .message {
          margin-top: 14px;
          border-radius: 12px;
          padding: 11px 12px;
          border: 1px solid;
          text-align: left;
          font-size: 14px;
        }
        .success { color: #86efac; border-color: rgba(74, 222, 128, 0.4); background: rgba(34, 197, 94, 0.12); }
        .error { color: #fda4af; border-color: rgba(251, 113, 133, 0.4); background: rgba(244, 63, 94, 0.12); }

        .meta {
          margin-top: 14px;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          color: #d4d4d8;
          font-size: 12px;
        }

        .meta span {
          padding: 8px 12px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.06);
        }

        .linkBtn {
          margin-top: 22px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border-radius: 999px;
          border: 1px solid rgba(167, 139, 250, 0.45);
          padding: 10px 16px;
          color: #ddd6fe;
          background: rgba(139, 92, 246, 0.18);
          transition: transform .2s, background .2s;
        }

        .linkBtn:hover { transform: translateY(-1px); background: rgba(139, 92, 246, 0.26); }

        @keyframes pulse {
          0%, 100% { opacity: .45; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        @media (min-width: 720px) {
          .controls { grid-template-columns: 1fr auto; }
          button { min-width: 150px; }
        }
      `}</style>
    </main>
  );
}
