"use client";

import { useState } from "react";
import wallets from "../../data/wallets.json";

export default function WalletsView() {
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
 codex/change-ui-to-black-with-animations-x7lhqv
                  <a href={w.twitter} target="_blank" rel="noopener noreferrer" className="tweetBtn">
                    View Tweet
=======
                  <a href={w.twitter} target="_blank" className="tweetBtn">
                    Tweet
 main
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
    </main>
  );
}
