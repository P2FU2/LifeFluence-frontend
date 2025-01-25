import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LifeFluence",
  description: "Organize sua vida como um workflow!",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-background text-foreground">
        <nav className="p-4 bg-primary text-white">LifeFluence</nav>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
