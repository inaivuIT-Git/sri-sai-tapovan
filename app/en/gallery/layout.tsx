import { createEnglishMetadata } from "../metadata";

export const metadata = createEnglishMetadata("Gallery | Sai Satsang @ Gurupadam", "Photographs and videos of worship, satsang, meditation, festivals and service at Salem Shirdi.", "/gallery");

export default function EnglishGalleryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
