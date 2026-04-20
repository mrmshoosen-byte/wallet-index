export const metadata = {
  title: "Wallet Index",
  description: "Web3 wallet lookup tool",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <style>{`
          * { box-sizing: border-box; }
          html, body {
            margin: 0;
            padding: 0;
            min-height: 100%;
            background: #04050b;
            color: #f4f4f5;
            font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          }
          a { color: inherit; text-decoration: none; }
        `}</style>
      </body>
    </html>
  );
}
