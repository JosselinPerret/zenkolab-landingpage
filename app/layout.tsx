import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "ZenkoLab",
  description: "Un oeil sur demain, dès aujourd'hui.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
