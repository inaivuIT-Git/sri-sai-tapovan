"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "../../gallery/gallery.css";

// English captions use the same photographs and video paths as the Tamil gallery.
type Photo = { src: string; title: string; category: string; alt: string };
type Video = { src: string; title: string; category: string; description: string };
const photos: Photo[] = [
  { src: "/images/gallery/gallery-1.jpeg", title: "Sai's Sacred Presence", category: "Temple", alt: "The sacred shrine of Sai with devotional decorations" },
  { src: "/images/gallery/gallery-2.jpeg", title: "United in Devotion", category: "Devotees", alt: "Devotees gathered in worship of Sai" },
  { src: "/images/gallery/gallery-3.jpeg", title: "The Sacredness of Pooja", category: "Pooja", alt: "A moment of Sai worship adorned with flowers" },
  { src: "/images/gallery/gallery-4.jpeg", title: "A Blessed Darshan", category: "Darshan", alt: "A devotional view of Sai's presence" },
  { src: "/images/gallery/gallery-5.jpeg", title: "Festival Memories", category: "Festival", alt: "A place of worship decorated for a festival" },
  { src: "/images/gallery/gallery-6.jpeg", title: "A Moment of Peace", category: "Meditation", alt: "A peaceful spiritual setting for meditation" },
  { src: "/images/gallery/gallery-7.jpeg", title: "Love Expressed Through Service", category: "Service", alt: "Spiritual service offered with love" },
  { src: "/images/gallery/gallery-8.jpeg", title: "Memorable Moments of Satsang", category: "Satsang", alt: "A spiritual place prepared for satsang" },
  { src: "/images/gallery/gallery-9.jpeg", title: "In Sai's Grace", category: "Spiritual life", alt: "A devotional scene recalling Sai's grace" },
];
const videos: Video[] = [
  { src: "/videos/satsang-1.mp4", title: "Moments of Satsang", category: "Satsang", description: "Beautiful moments spent together in remembrance of Sai." },
  { src: "/videos/satsang-2.mp4", title: "Pooja and Prayer", category: "Worship", description: "Scenes filled with devotion, prayer and reverence." },
  { src: "/videos/satsang-3.mp4", title: "Special Festival Moments", category: "Festival", description: "Joyful memories of devotees coming together." },
  { src: "/videos/satsang-4.mp4", title: "Love and Service", category: "Service", description: "Moments that express love through selfless service." },
];

function PhotoCard({ photo }: { photo: Photo }) {
  const [imageFailed, setImageFailed] = useState(false);
  return <article className="gallery-photo-card"><div className="gallery-photo-media">{imageFailed ? <div className="gallery-media-fallback" role="img" aria-label={photo.alt}><span aria-hidden="true">ॐ</span><p>Add photograph</p></div> : <img src={photo.src} alt={photo.alt} loading="lazy" onError={() => setImageFailed(true)} />}<span className="gallery-photo-category">{photo.category}</span></div><div className="gallery-photo-caption"><h3>{photo.title}</h3><span aria-hidden="true">✦</span></div></article>;
}
function VideoCard({ video }: { video: Video }) {
  const [videoFailed, setVideoFailed] = useState(false);
  const [thumbnail, setThumbnail] = useState<string | undefined>(undefined);
  useEffect(() => {
    let cancelled = false; let captured = false; let seekRequested = false;
    const preview = document.createElement("video"); preview.muted = true; preview.playsInline = true; preview.preload = "metadata";
    const captureFrame = () => {
      if (cancelled || captured || !preview.videoWidth || !preview.videoHeight) return;
      try { const canvas = document.createElement("canvas"); canvas.width = 640; canvas.height = 360; const context = canvas.getContext("2d"); if (!context) return; context.fillStyle = "#170e09"; context.fillRect(0, 0, canvas.width, canvas.height); const scale = Math.min(canvas.width / preview.videoWidth, canvas.height / preview.videoHeight); const width = preview.videoWidth * scale; const height = preview.videoHeight * scale; context.drawImage(preview, (canvas.width - width) / 2, (canvas.height - height) / 2, width, height); captured = true; setThumbnail(canvas.toDataURL("image/jpeg", 0.84)); } catch { /* Native video controls remain available if thumbnail extraction is blocked. */ }
    };
    const handleLoadedMetadata = () => { if (Number.isFinite(preview.duration) && preview.duration > 1) { seekRequested = true; preview.addEventListener("seeked", captureFrame, { once: true }); try { preview.currentTime = Math.min(0.8, preview.duration * 0.08); } catch { seekRequested = false; captureFrame(); } } };
    const handleLoadedData = () => { if (!seekRequested) captureFrame(); };
    preview.addEventListener("loadedmetadata", handleLoadedMetadata); preview.addEventListener("loadeddata", handleLoadedData); preview.src = video.src; preview.load();
    return () => { cancelled = true; preview.removeEventListener("loadedmetadata", handleLoadedMetadata); preview.removeEventListener("loadeddata", handleLoadedData); preview.pause(); preview.removeAttribute("src"); preview.load(); };
  }, [video.src]);
  return <article className="gallery-video-card"><div className="gallery-video-media">{videoFailed ? <div className="gallery-video-fallback"><span className="gallery-play-symbol" aria-hidden="true">▶</span><p>Add the video file to <code>public/videos</code></p></div> : <video controls playsInline preload="metadata" poster={thumbnail} onError={() => setVideoFailed(true)} aria-label={video.title}><source src={video.src} type="video/mp4" />Your browser cannot play this video.</video>}</div><div className="gallery-video-copy"><p className="gallery-card-eyebrow">{video.category}</p><h3>{video.title}</h3><p>{video.description}</p></div></article>;
}

export default function EnglishGalleryPage() {
  return <main className="gallery-page">
    <section className="gallery-hero" aria-labelledby="gallery-hero-title"><div className="gallery-hero-image" aria-hidden="true" /><div className="gallery-hero-overlay" aria-hidden="true" /><div className="gallery-container gallery-hero-content"><p className="gallery-hero-eyebrow">Sai Satsang @ Gurupadam</p><h1 id="gallery-hero-title">Gallery</h1><span className="gallery-hero-line" aria-hidden="true" /><p className="gallery-hero-subtitle">Blessed moments of pooja, satsang, meditation and service.<br className="gallery-desktop-break" />Photographs and videos that remind us of Sai&apos;s grace.</p><div className="gallery-hero-actions"><a className="gallery-button gallery-button-primary" href="#photos">View photographs</a><a className="gallery-button gallery-button-outline" href="#videos">Watch videos</a></div></div><div className="gallery-values-strip" aria-label="Faith, patience, love and service"><span>Faith</span><i aria-hidden="true">·</i><span>Patience</span><i aria-hidden="true">·</i><span>Love</span><i aria-hidden="true">·</i><span>Service</span></div></section>
    <section className="gallery-intro gallery-container" aria-labelledby="gallery-photos-title"><div><p className="gallery-eyebrow">Memories filled with devotion</p><h2>Sai in our memories</h2></div><p className="gallery-intro-copy">Every photograph holds a memory, and every memory is an experience that reminds us of Sai&apos;s grace. Explore moments of worship, satsang, festivals and service.</p></section>
    <section className="gallery-photos-section" id="photos" aria-labelledby="gallery-photos-heading"><div className="gallery-container"><div className="gallery-section-heading"><div><p className="gallery-eyebrow">Photographs</p><h2 id="gallery-photos-heading">Moments blessed by Sai</h2></div><p>Devotion · Togetherness · Service</p></div><div className="gallery-photo-grid">{photos.map((photo) => <PhotoCard key={photo.src} photo={photo} />)}</div></div></section>
    <section className="gallery-videos-section" id="videos" aria-labelledby="gallery-videos-heading"><div className="gallery-container"><div className="gallery-section-heading gallery-video-heading"><div><p className="gallery-eyebrow">Videos</p><h2 id="gallery-videos-heading">Moments to watch, memories to cherish</h2></div><p>Glimpses from the path of Sai</p></div><div className="gallery-video-grid">{videos.map((video) => <VideoCard key={video.src} video={video} />)}</div></div></section>
    <section className="gallery-closing"><div className="gallery-closing-overlay" aria-hidden="true" /><div className="gallery-closing-content gallery-container"><span className="gallery-closing-om" aria-hidden="true">ॐ</span><p className="gallery-eyebrow">In Sai&apos;s grace</p><h2>Experience Sai in peace.<br />Live Sai through love.</h2><span className="gallery-closing-line" aria-hidden="true" /><p>Remain in faith. Serve with patience.</p><div className="gallery-closing-links"><Link href="/en/satsang">Discover Satsang</Link><Link href="/en/sai-baba">About Sai Baba</Link></div></div></section>
  </main>;
}
