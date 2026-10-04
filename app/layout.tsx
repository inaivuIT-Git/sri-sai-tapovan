import type { Metadata } from "next";
import Header from "./components/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sri Sai Tapovan Spiritual Trust",
  description:
    "Sri Sai Tapovan Spiritual Trust – A sacred space dedicated to devotion, spiritual growth, compassionate service and the teachings of Shirdi Sai Baba.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}