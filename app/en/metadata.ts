import type { Metadata } from "next";

export function createEnglishMetadata(title: string, description: string, path = ""): Metadata {
  const url = `https://www.salemshirdi.org/en${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: "Salem Shirdi | Sai Satsang @ Gurupadam",
      url,
      title,
      description,
      images: [{ url: "/images/salemshirdi-share.jpg", width: 1200, height: 630, alt: "Salem Shirdi - Sai Satsang @ Gurupadam" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/salemshirdi-share.jpg"],
    },
  };
}
