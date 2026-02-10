import type { ReactNode } from "react";

export const metadata = {
  title: "rag-plus docs",
  description: "Project documentation for rag-plus",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: "2rem" }}>
        {children}
      </body>
    </html>
  );
}
