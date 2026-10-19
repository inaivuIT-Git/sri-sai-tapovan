"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./gallery.css";

type Photo = {
  src: string;
  title: string;
  category: string;
  alt: string;
};

type Video = {
  src: string;
  title: string;
  category: string;
  description: string;
};

// Update these paths to match the photographs available in public/images/gallery.
const photos: Photo[] = [
  {
    src: "/images/gallery/gallery-1.jpeg",
    title: "சாயியின் சந்நிதி",
    category: "ஆலயம்",
    alt: "சாயியின் சந்நிதி மற்றும் வழிபாட்டு அலங்காரம்",
  },
  {
    src: "/images/gallery/gallery-2.jpeg",
    title: "பக்தியில் ஒன்றிணைவோம்",
    category: "பக்தர்கள்",
    alt: "சாய் வழிபாட்டில் ஒன்றிணைந்த பக்தர்கள்",
  },
  {
    src: "/images/gallery/gallery-3.jpeg",
    title: "பூஜையின் புனிதம்",
    category: "பூஜை",
    alt: "மலர்களால் அலங்கரிக்கப்பட்ட சாய் வழிபாட்டுத் தருணம்",
  },
  {
    src: "/images/gallery/gallery-4.jpeg",
    title: "அருள்மிகு தரிசனம்",
    category: "தரிசனம்",
    alt: "சாயியின் அருள்மிகு தரிசனக் காட்சி",
  },
  {
    src: "/images/gallery/gallery-5.jpeg",
    title: "திருவிழா நினைவுகள்",
    category: "திருவிழா",
    alt: "திருவிழாவில் மலர்களால் அலங்கரிக்கப்பட்ட வழிபாட்டுத் தலம்",
  },
  {
    src: "/images/gallery/gallery-6.jpeg",
    title: "அமைதியின் தருணம்",
    category: "தியானம்",
    alt: "அமைதியான ஆன்மிகத் தியானச் சூழல்",
  },
  {
    src: "/images/gallery/gallery-7.jpeg",
    title: "அன்பின் வழியில் சேவை",
    category: "சேவை",
    alt: "அன்புடன் செய்யப்படும் ஆன்மிகச் சேவை",
  },
  {
    src: "/images/gallery/gallery-8.jpeg",
    title: "சத்சங்கத்தின் இனிய நினைவுகள்",
    category: "சத்சங்கம்",
    alt: "சத்சங்கத்திற்காக அலங்கரிக்கப்பட்ட ஆன்மிகத் தலம்",
  },
  {
    src: "/images/gallery/gallery-9.jpeg",
    title: "சாயியின் அருளில்",
    category: "ஆன்மிகம்",
    alt: "சாயியின் அருளை நினைவூட்டும் ஆன்மிகக் காட்சி",
  },
]

// Add the corresponding MP4 files to public/videos, or edit each src below.
const videos: Video[] = [
  {
    src: "/videos/satsang-1.mp4",
    title: "சத்சங்கத்தின் தருணங்கள்",
    category: "சத்சங்கம்",
    description: "ஒன்றுகூடி சாயியை நினைக்கும் இனிய தருணங்கள்.",
  },
  {
    src: "/videos/satsang-2.mp4",
    title: "பூஜையும் பிரார்த்தனையும்",
    category: "வழிபாடு",
    description: "பக்தியும் பிரார்த்தனையும் நிறைந்த காட்சிகள்.",
  },
  {
    src: "/videos/satsang-3.mp4",
    title: "திருவிழா சிறப்புத் தருணங்கள்",
    category: "திருவிழா",
    description: "ஒன்றிணையும் பக்தர்களின் மகிழ்ச்சியான நினைவுகள்.",
  },
  {
    src: "/videos/satsang-4.mp4",
    title: "அன்பும் சேவையும்",
    category: "சேவை",
    description: "சேவையின் வழியாக அன்பை வெளிப்படுத்தும் தருணங்கள்.",
  },
]

function PhotoCard({ photo }: { photo: Photo }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="gallery-photo-card">
      <div className="gallery-photo-media">
        {imageFailed ? (
          <div className="gallery-media-fallback" role="img" aria-label={photo.alt}>
            <span aria-hidden="true">ॐ</span>
            <p>புகைப்படத்தைச் சேர்க்கவும்</p>
          </div>
        ) : (
          <img
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        )}
        <span className="gallery-photo-category">{photo.category}</span>
      </div>
      <div className="gallery-photo-caption">
        <h3>{photo.title}</h3>
        <span aria-hidden="true">✦</span>
      </div>
    </article>
  );
}

function VideoCard({ video }: { video: Video }) {
  const [videoFailed, setVideoFailed] = useState(false);
  const [thumbnail, setThumbnail] = useState<string | undefined>(undefined);

  useEffect(() => {
    let cancelled = false;
    let captured = false;
    let seekRequested = false;
    const preview = document.createElement("video");
    preview.muted = true;
    preview.playsInline = true;
    preview.preload = "metadata";

    const captureFrame = () => {
      if (cancelled || captured || !preview.videoWidth || !preview.videoHeight) return;
      try {
        const canvas = document.createElement("canvas");
        canvas.width = 640;
        canvas.height = 360;
        const context = canvas.getContext("2d");
        if (!context) return;

        // Keep portrait videos centered with dark side bars, like the video player preview.
        context.fillStyle = "#170e09";
        context.fillRect(0, 0, canvas.width, canvas.height);
        const scale = Math.min(canvas.width / preview.videoWidth, canvas.height / preview.videoHeight);
        const width = preview.videoWidth * scale;
        const height = preview.videoHeight * scale;
        const x = (canvas.width - width) / 2;
        const y = (canvas.height - height) / 2;
        context.drawImage(preview, x, y, width, height);

        captured = true;
        setThumbnail(canvas.toDataURL("image/jpeg", 0.84));
      } catch {
        // If thumbnail extraction is unavailable, the native video player still works.
      }
    };

    const handleLoadedMetadata = () => {
      if (Number.isFinite(preview.duration) && preview.duration > 1) {
        seekRequested = true;
        preview.addEventListener("seeked", captureFrame, { once: true });
        try {
          // A frame slightly after the start is less likely to be a blank transition frame.
          preview.currentTime = Math.min(0.8, preview.duration * 0.08);
        } catch {
          seekRequested = false;
          captureFrame();
        }
      }
    };

    const handleLoadedData = () => {
      if (!seekRequested) captureFrame();
    };

    preview.addEventListener("loadedmetadata", handleLoadedMetadata);
    preview.addEventListener("loadeddata", handleLoadedData);
    preview.src = video.src;
    preview.load();

    return () => {
      cancelled = true;
      preview.removeEventListener("loadedmetadata", handleLoadedMetadata);
      preview.removeEventListener("loadeddata", handleLoadedData);
      preview.pause();
      preview.removeAttribute("src");
      preview.load();
    };
  }, [video.src]);

  return (
    <article className="gallery-video-card">
      <div className="gallery-video-media">
        {videoFailed ? (
          <div className="gallery-video-fallback">
            <span className="gallery-play-symbol" aria-hidden="true">▶</span>
            <p>வீடியோ கோப்பை <code>public/videos</code> கோப்புறையில் சேர்க்கவும்</p>
          </div>
        ) : (
          <video
            controls
            playsInline
            preload="metadata"
            poster={thumbnail}
            onError={() => setVideoFailed(true)}
            aria-label={video.title}
          >
            <source src={video.src} type="video/mp4" />
            உங்கள் உலாவி இந்த வீடியோவை இயக்க முடியவில்லை.
          </video>
        )}
      </div>
      <div className="gallery-video-copy">
        <p className="gallery-card-eyebrow">{video.category}</p>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </div>
    </article>
  );
}

export default function GalleryPage() {
  return (
    <main className="gallery-page">
      <section className="gallery-hero" aria-labelledby="gallery-hero-title">
        <div className="gallery-hero-image" aria-hidden="true" />
        <div className="gallery-hero-overlay" aria-hidden="true" />

        <div className="gallery-container gallery-hero-content">
          <p className="gallery-hero-eyebrow">சாய் சத்சங் @ குருபாதம்</p>
          <h1 id="gallery-hero-title">படத்தொகுப்பு</h1>
          <span className="gallery-hero-line" aria-hidden="true" />
          <p className="gallery-hero-subtitle">
            பூஜை, சத்சங்கம், தியானம் மற்றும் சேவையின் அருள்மிகு தருணங்கள்.
            <br className="gallery-desktop-break" />
            சாயியின் அருளை நினைவூட்டும் புகைப்படங்களும் காணொளிகளும்.
          </p>
          <div className="gallery-hero-actions">
            <a className="gallery-button gallery-button-primary" href="#photos">புகைப்படங்களைப் பார்க்க</a>
            <a className="gallery-button gallery-button-outline" href="#videos">காணொளிகளைப் பார்க்க</a>
          </div>
        </div>

        <div className="gallery-values-strip" aria-label="சத்சங்கத்தின் நான்கு பண்புகள்">
          <span>நம்பிக்கை</span><i aria-hidden="true">·</i>
          <span>பொறுமை</span><i aria-hidden="true">·</i>
          <span>அன்பு</span><i aria-hidden="true">·</i>
          <span>சேவை</span>
        </div>
      </section>

      <section className="gallery-intro gallery-container" aria-labelledby="gallery-photos-title">
        <div>
          <p className="gallery-eyebrow">பக்தியின் இனிய நினைவுகள்</p>
          <h2 id="gallery-photos-title">நினைவுகளில் சாயி</h2>
        </div>
        <p className="gallery-intro-copy">
          ஒவ்வொரு புகைப்படமும் ஒரு நினைவு; ஒவ்வொரு நினைவும் சாயியின் அருளை உணர்த்தும் ஓர் அனுபவம்.
          வழிபாடு, சத்சங்கம், திருவிழா மற்றும் சேவையின் தருணங்களை இங்கே காணலாம்.
        </p>
      </section>

      <section className="gallery-photos-section" id="photos" aria-labelledby="gallery-photos-heading">
        <div className="gallery-container">
          <div className="gallery-section-heading">
            <div>
              <p className="gallery-eyebrow">புகைப்படங்கள்</p>
              <h2 id="gallery-photos-heading">சாயியின் அருள்மிகு தருணங்கள்</h2>
            </div>
            <p>பக்தி · ஒன்றிணைவு · சேவை</p>
          </div>

          <div className="gallery-photo-grid">
            {photos.map((photo) => <PhotoCard key={photo.src} photo={photo} />)}
          </div>
        </div>
      </section>

      <section className="gallery-videos-section" id="videos" aria-labelledby="gallery-videos-heading">
        <div className="gallery-container">
          <div className="gallery-section-heading gallery-video-heading">
            <div>
              <p className="gallery-eyebrow">காணொளிகள்</p>
              <h2 id="gallery-videos-heading">காணும் தருணங்கள், மனதில் நிற்கும் நினைவுகள்</h2>
            </div>
            <p>சாயியின் பாதையில் சிறு காட்சிகள்</p>
          </div>
          <div className="gallery-video-grid">
            {videos.map((video) => <VideoCard key={video.src} video={video} />)}
          </div>
        </div>
      </section>

      <section className="gallery-closing">
        <div className="gallery-closing-overlay" aria-hidden="true" />
        <div className="gallery-closing-content gallery-container">
          <span className="gallery-closing-om" aria-hidden="true">ॐ</span>
          <p className="gallery-eyebrow">சாயியின் அருளில்</p>
          <h2>அமைதியில் சாயியை உணர்வோம்.<br />அன்பில் சாயியை வாழ்வோம்.</h2>
          <span className="gallery-closing-line" aria-hidden="true" />
          <p>நம்பிக்கையுடன் இருப்போம். பொறுமையுடன் சேவை செய்வோம்.</p>
          <div className="gallery-closing-links">
            <Link href="/satsang">சத்சங்கத்தை அறிய</Link>
            <Link href="/sai-baba">சாய்பாபாவைப் பற்றி</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
