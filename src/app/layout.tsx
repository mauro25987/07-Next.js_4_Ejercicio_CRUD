import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ejercicio - CRUD",
  description: "Ejercicio para practicar Server Actions en Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
