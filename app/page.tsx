import Link from "next/link";
import "./home.css";

const activities = [
  {
    icon: "ॐ",
    title: "சத்சங்கம்",
    text: "சாயியை நினைவுகூர்ந்து, அவருடைய போதனைகளை கேட்டு, அமைதியையும் ஆன்மிகத் தோழமையையும் அனுபவிப்போம்.",
    href: "/satsang",
  },
  {
    icon: "♫",
    title: "பஜன்",
    text: "சாயியின் நாமத்தை அன்புடன் பாடி, பக்தியிலும் இறைநினைவிலும் சில அமைதியான தருணங்களை செலவிடுவோம்.",
    href: "/satsang",
  },
  {
    icon: "♨",
    title: "ஆரத்தி & பூஜை",
    text: "நம்பிக்கையுடனும் பக்தியுடனும் ஆரத்தி மற்றும் சிறப்பு பூஜைகளில் கலந்து கொள்வோம்.",
    href: "/calendar",
  },
  {
    icon: "▤",
    title: "சாய் சத்சரித்ரா",
    text: "சாயியின் வாழ்க்கை, லீலைகள் மற்றும் போதனைகளை வாசித்து, அவற்றை நம் வாழ்க்கையில் உணர்வோம்.",
    href: "/satsang",
  },
];

const pillars = [
  {
    icon: "♧",
    title: "நம்பிக்கை",
    english: "Shraddha",
    text: "இறைவனின் அருளிலும், குருவின் வழிகாட்டுதலிலும் மனப்பூர்வமான நம்பிக்கையுடன் இருப்பது.",
  },
  {
    icon: "⌛",
    title: "பொறுமை",
    english: "Saburi",
    text: "எல்லாம் அதற்குரிய நேரத்தில் நடைபெறும் என்ற நம்பிக்கையுடன் பொறுமையாகக் காத்திருப்பது.",
  },
  {
    icon: "♡",
    title: "அன்பு",
    english: "Love",
    text: "ஒவ்வொரு உயிரையும் கருணையுடனும் மரியாதையுடனும் அணுகி அன்பை வழங்குவது.",
  },
  {
    icon: "♧",
    title: "சரணாகதி",
    english: "Surrender",
    text: "உள்ளத்தை இறைவனிடமும் குருவிடமும் ஒப்படைத்து வழிகாட்டுதலை ஏற்றுக்கொள்வது.",
  },
];

const galleryItems = [
  {
    image: "gallery-2.jpeg",
    category: "ஆன்மிகக் கூடுகை",
    title: "சத்சங்கம்",
  },
  {
    image: "gallery-3.jpeg",
    category: "இசையும் இறைநினைவும்",
    title: "பஜன்",
  },
  {
    image: "gallery-5.jpeg",
    category: "பக்தியின் தருணங்கள்",
    title: "ஆரத்தி",
  },
  {
    image: "gallery-7.jpeg",
    category: "வாசிப்பும் பகிர்வும்",
    title: "சாய் சத்சரித்ரா",
  },
];

const galleryStrip = [
  "gallery-1.jpeg",
  "gallery-3.jpeg",
  "gallery-5.jpeg",
  "gallery-7.jpeg",
  "gallery-8.jpeg",
];

export default function Home() {
  return (
    <main className="home-page">
      {/* HERO */}
      <section className="home-hero">
        <div className="home-hero-image" aria-hidden="true" />
        <div className="home-hero-overlay" aria-hidden="true" />

        <div className="home-hero-inner">
          <div className="home-hero-copy">
            <h1>
              சாய் சத்சங் @
              <span>குருபாதம்</span>
            </h1>
            <p className="home-hero-description">
              சாயிநாதனின் பேரருளில் மன அமைதியும், பக்தியும் பெருகும்…
              <br />
              <span className="home-hero-subline">
                குருபாதத்தில் இணைவோம், தெய்வீக நிலை காண்போம்.
              </span>
            </p>
            <div className="home-hero-actions">
              <Link href="/sai-baba" className="home-button home-button-gold">
                சாய்பாபாவைப் பற்றி அறிய
              </Link>
              <Link href="/satsang" className="home-button home-button-ghost">
                சத்சங்கத்தில் இணைய
              </Link>
            </div>
          </div>
        </div>
        <div className="home-hero-bottomline">
          <span>நம்பிக்கை</span><i /> <span>பொறுமை</span><i /> <span>அன்பு</span><i /> <span>சேவை</span>
        </div>
      </section>

      {/* 01 — OUR SATSANG */}
      <section className="home-activities home-section">
        <div className="home-section-intro">
          <div className="home-section-intro-copy">
            <p className="home-eyebrow">எங்கள் சத்சங்கம்</p>
            <h2>பக்தி.<br />அறிவு.<br />சேவை.</h2>
            <p className="home-section-description">
              சாயியை நினைவுகூர்ந்து, அவருடைய போதனைகளை வாழ்வில் உணர்ந்து,
              ஒரு ஆன்மிகச் சமூகமாக இணைவோம்.
            </p>
            <Link href="/satsang" className="home-text-link">மேலும் அறிய <span>↗</span></Link>
          </div>
        </div>

        <div className="home-activities-grid">
          {activities.map((activity) => (
            <Link href={activity.href} className="home-activity" key={activity.title}>
              <span className="home-activity-icon" aria-hidden="true">{activity.icon}</span>
              <h3>{activity.title}</h3>
              <p>{activity.text}</p>
              <span className="home-activity-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 02 — A MOMENT WITH SAI */}
      <section className="home-moment">
        <div className="home-moment-image" aria-hidden="true" />
        <div className="home-moment-shade" aria-hidden="true" />
        <div className="home-moment-inner">
          <div className="home-moment-quote">
            <span className="home-quote-mark">“</span>
            <blockquote>நான் இங்கே இருக்கும்போது<br />ஏன் பயம்?</blockquote>
            <p>— சாய்பாபா</p>
          </div>
          <div className="home-moment-story">
            <div>
              <p className="home-eyebrow">சாயியின் மையப் போதனை</p>
              <h3 className="home-moment-teaching-title">Sabka Malik Ek</h3>
              <p className="home-moment-teaching-subtitle">எல்லோருக்கும் ஒரே இறைவன்.</p>
              <p className="home-moment-copy">
                மதம், சாதி, மொழி மற்றும் சமூக வேறுபாடுகளைக் கடந்து,
                அனைவரையும் அன்பால் இணைக்கும் சாயியின் எளிய உண்மை.
              </p>
              <Link href="/sai-baba" className="home-button home-button-gold">
                சாயியின் போதனைகளை அறிய
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — FOUR PILLARS */}
      <section className="home-pillars home-section">
        <div className="home-section-intro home-pillars-intro">
          <div className="home-section-intro-copy">
            <p className="home-eyebrow">வாழ்க்கையின் நான்கு தூண்கள்</p>
            <h2>நம்பிக்கையும்<br />பொறுமையிலும்<br />தொடங்கும் பயணம்</h2>
            <Link href="/satsang" className="home-text-link">மேலும் அறிய <span>↗</span></Link>
          </div>
        </div>

        <div className="home-pillars-grid">
          {pillars.map((pillar) => (
            <article className="home-pillar" key={pillar.title}>
              <div className="home-pillar-top">
                <span className="home-pillar-icon" aria-hidden="true">{pillar.icon}</span>
              </div>
              <h3>{pillar.title}</h3>
              <p className="home-pillar-english">{pillar.english}</p>
              <p className="home-pillar-description">{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 04 — ACTIVITIES & MOMENTS */}
      <section className="home-programs home-section">
        <div className="home-section-intro home-programs-intro">
          <div className="home-section-intro-copy">
            <p className="home-eyebrow">நிகழ்வுகள் & செயல்பாடுகள்</p>
            <h2>சத்சங்கத்தில்<br />நாம் செய்வது</h2>
            <Link href="/calendar" className="home-round-link" aria-label="நிகழ்வுகள் காலண்டரைப் பார்க்க">↗</Link>
          </div>
        </div>

        <div className="home-programs-grid">
          {galleryItems.map((item) => (
            <Link href="/gallery" className="home-program-card" key={item.image}>
              <div className="home-program-image">
                <img src={`/images/gallery/${item.image}`} alt={item.title} loading="lazy" />
              </div>
              <p>{item.category}</p>
              <h3>{item.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* BRAND / TRUST INTRODUCTION */}
      <section className="home-trust">
        <div className="home-trust-image">
          <img src="/images/about/image-1.jpeg" alt="சாய் சத்சங் @ குருபாதம்" loading="lazy" />
        </div>
        <div className="home-trust-copy">
          <div className="home-trust-content">
            <p className="home-eyebrow">எங்கள் ஆலயம்</p>
            <h2>சாய் சத்சங் @ குருபாதம் —<br />சேலத்தில் ஒரு ஆன்மிக இல்லம்</h2>
            <p>
              சாயியின் அருளில், பக்தர்கள் ஒன்றுகூடி சத்சங்கம், பிரார்த்தனை,
              பூஜை மற்றும் சேவையின் மூலம் ஆன்மிக அமைதியை உணர்ந்து கொள்ளும் இடம்.
            </p>
            <Link href="/about" className="home-button home-button-gold">
              எங்கள் ஆலயத்தைப் பற்றி
            </Link>
          </div>
          <span className="home-trust-watermark" aria-hidden="true">ॐ</span>
        </div>
      </section>

      {/* 06 — GALLERY STRIP */}
      <section className="home-gallery home-section">
        <div className="home-section-intro home-gallery-intro">
          <div className="home-section-intro-copy">
            <p className="home-eyebrow">புகைப்படங்கள்</p>
            <h2>ஆன்மிகத் தருணங்கள்</h2>
            <p className="home-section-description">
              ஆலயம், பூஜைகள், சத்சங்கங்கள் மற்றும் திருவிழாக்களின் சில தருணங்கள்.
            </p>
            <Link href="/gallery" className="home-text-link">அனைத்து புகைப்படங்களும் <span>↗</span></Link>
          </div>
        </div>

        <div className="home-gallery-strip">
          {galleryStrip.map((image, index) => (
            <Link href="/gallery" className={`home-gallery-thumb home-gallery-thumb-${index + 1}`} key={image}>
              <img src={`/images/gallery/${image}`} alt={`சாய் சத்சங் @ குருபாதம் — ஆன்மிகத் தருணம் ${index + 1}`} loading="lazy" />
            </Link>
          ))}
          <Link href="/gallery" className="home-gallery-next" aria-label="அனைத்து புகைப்படங்களையும் பார்க்க">↗</Link>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="home-final">
        <div className="home-final-image" aria-hidden="true" />
        <div className="home-final-overlay" aria-hidden="true" />
        <div className="home-final-inner">
          <div className="home-final-heading">
            <p className="home-eyebrow">சாயியின் அருளில்</p>
            <h2>நாம் அனைவரும்<br />ஒன்றாக இணைவோம்.</h2>
          </div>
          <div className="home-final-copy">
            <p>சத்சங்கம், சேவை மற்றும் ஆன்மிகப் பயணத்தில் எங்களுடன் இணைந்து கொள்ளுங்கள்.</p>
            <div className="home-final-actions">
              <Link href="/satsang" className="home-button home-button-gold">சத்சங்கத்தில் இணைய</Link>
              <Link href="/donation" className="home-button home-button-ghost">தட்சிணை / நன்கொடை</Link>
            </div>
            <div className="home-final-links">
              <Link href="/calendar">நிகழ்வுகள்</Link>
              <Link href="/shirdi-travel">ஷீர்டி பயணம்</Link>
              <Link href="/ask-sai">சாயியிடம் கேளுங்கள்</Link>
              <Link href="/contact">தொடர்பு</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
