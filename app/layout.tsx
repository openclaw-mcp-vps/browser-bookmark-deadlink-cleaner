import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bookmark Deadlink Cleaner – Find & Remove Dead Bookmarks",
  description: "Automatically scan your bookmark collection for 404s, redirects, and dead sites. Bulk cleanup tools for developers and researchers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d56dbea1-8431-4d20-8b68-915c241553b7"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
