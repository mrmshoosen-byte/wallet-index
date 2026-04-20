import "./globals.css";

export const metadata = {
  title: "Wallet Index",
  description: "Web3 wallet lookup tool",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
