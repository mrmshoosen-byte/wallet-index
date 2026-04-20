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
    <main className="walletsPage">
      <div className="bgLayer" />

      <section className="content">
        <div className="topRow">
          <h1>All Wallets</h1>
          <button onClick={copyAll} className="copyAllBtn">
            <span className="shine" />
            <span>{copied === "all" ? "Copied all ✓" : "Copy All"}</span>
          </button>
        </div>

        <div className="list">
          {wallets.map((w, i) => (
            <div key={i} className="walletCard">
              <div className="address">{w.address}</div>

              <div className="actions">
                {w.twitter && (
                  <a href={w.twitter} target="_blank" className="tweetBtn">
                    Tweet
                  </a>
                )}

                <button onClick={() => copyOne(w.address)} className="copyBtn">
                  {copied === w.address ? "Copied ✓" : "Copy"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .walletsPage {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background: #05050b;
          padding: 40px 24px;
        }

        .bgLayer {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at top right, rgba(124, 58, 237, 0.22), transparent 40%),
            radial-gradient(circle at bottom left, rgba(14, 165, 233, 0.16), transparent 45%);
        }

        .content {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .topRow {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
          flex-wrap: wrap;
        }

        h1 { margin: 0; font-size: clamp(1.9rem, 5vw, 2.5rem); }

        .copyAllBtn {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          border: 1px solid rgba(167, 139, 250, 0.45);
          padding: 10px 14px;
          background: rgba(139, 92, 246, 0.2);
          color: #f5f3ff;
          font-weight: 600;
          cursor: pointer;
          transition: transform .18s, border-color .2s, background .2s;
        }

        .copyAllBtn:hover {
          transform: translateY(-1px) scale(1.02);
          border-color: rgba(196, 181, 253, 0.85);
          background: rgba(139, 92, 246, 0.28);
        }

        .shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(110deg, transparent 20%, rgba(255, 255, 255, 0.28) 50%, transparent 80%);
          transform: translateX(-120%);
          transition: transform .7s;
        }

        .copyAllBtn:hover .shine { transform: translateX(120%); }

        .list { display: grid; gap: 10px; }

        .walletCard {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          align-items: center;
          flex-wrap: wrap;
          padding: 14px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.06);
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.28);
          backdrop-filter: blur(8px);
        }

        .address {
          font-size: 13px;
          color: #f5f5f5;
          word-break: break-all;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        }

        .actions { display: flex; gap: 8px; align-items: center; }

        .tweetBtn,
        .copyBtn {
          border-radius: 10px;
          padding: 7px 11px;
          font-size: 12px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: background .2s, border-color .2s, transform .18s;
        }

        .tweetBtn {
          color: #a5f3fc;
          border-color: rgba(34, 211, 238, 0.45);
          background: rgba(34, 211, 238, 0.12);
        }

        .tweetBtn:hover {
          transform: translateY(-1px);
          background: rgba(34, 211, 238, 0.2);
          border-color: rgba(103, 232, 249, 0.65);
        }

        .copyBtn {
          color: white;
          background: rgba(0, 0, 0, 0.5);
          cursor: pointer;
        }

        .copyBtn:hover {
          transform: translateY(-1px);
          border-color: rgba(167, 139, 250, 0.65);
          background: rgba(139, 92, 246, 0.24);
        }
      `}</style>
    </main>
  );
}
