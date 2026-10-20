
import type { Metadata } from "next";
import Header from "./components/header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.salemshirdi.org"),

  title: "சாய் சத்சங் @ குருபாதம் | Salem Shirdi",

  description:
    "Sri Sai Tapovan Spiritual Trust – A sacred space dedicated to devotion, spiritual growth, compassionate service and the teachings of Shirdi Sai Baba.",

  openGraph: {
    type: "website",
    url: "https://www.salemshirdi.org/",
    siteName: "Salem Shirdi",
    title: "சாய் சத்சங் @ குருபாதம் | Salem Shirdi",
    description:
      "A sacred space dedicated to Sai Baba's teachings, devotion, satsang and compassionate service.",
    images: [
      {
        url: "/images/salemshirdi-share.jpg",
        width: 1200,
        height: 630,
        alt: "Salem Shirdi - சாய் சத்சங் @ குருபாதம்",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "சாய் சத்சங் @ குருபாதம் | Salem Shirdi",
    description:
      "Devotion, satsang and compassionate service in the grace of Shirdi Sai Baba.",
    images: ["/images/salemshirdi-share.jpeg"],
  },

  icons: {
    icon: "/images/logo/paduka-logo.png",
    apple: "/images/logo/paduka-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ta">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
