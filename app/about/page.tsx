import Link from "next/link";
import "./about.css";

const journey = [
  {
    label: "தொடக்கம்",
    title: "வீட்டில் தொடங்கிய பிரார்த்தனை",
    text: "ஆரம்பத்தில் பிரார்த்தனைகள் வீட்டிலேயே நடைபெற்று வந்தன.",
  },
  {
    label: "சத்சங்கம்",
    title: "பக்தர்கள் பெருகிய சத்சங்கம்",
    text: "காலப்போக்கில் அதிகமான பக்தர்கள் பிரார்த்தனைகளில் கலந்து கொள்ளத் தொடங்கினர். வீட்டில் அனைவருக்கும் இடமளிப்பது சிரமமாகியது.",
  },
  {
    label: "ஒரு புதிய இடம்",
    title: "சாய் தபோவனம்",
    text: "அதிகமான பக்தர்கள் ஒன்றாகக் கூடுவதற்காக ஒரு பெரிய இடம் தேவைப்பட்டது. அந்தத் தேவையிலிருந்து சாய் தபோவனம் உருவானது.",
  },
  {
    label: "சாயியின் திருவுருவம்",
    title: "வேப்பமரத்தின் கீழ் சாய்",
    text: "ஷிர்டியை நினைவூட்டும் வகையில், சாயியின் திருவுருவம் வேப்பமரத்தின் கீழ் நிறுவப்பட்டது.",
  },
  {
    label: "ஒரு அடையாளம்",
    title: "சேலம் ஷிர்டி",
    text: "வேப்பமரத்தின் கீழ் சாயியின் திருவுருவம் அமைந்ததன் மூலம், இந்தப் புனிதத் தலம் “சேலம் ஷிர்டி” என்ற அடையாளத்தைப் பெற்றது.",
  },
  {
    label: "இன்று",
    title: "சாய் சத்சங் @ குருபாதம்",
    text: "ஒரு வீட்டில் தொடங்கிய பிரார்த்தனை, பக்தர்களின் சத்சங்கமாக வளர்ந்து, சாய் தபோவனமாக மலர்ந்து, இன்று சாய் சத்சங் @ குருபாதம் என்ற ஆன்மிகப் பயணமாகத் தொடர்கிறது.",
  },
];

const purposeItems = [
  {
    symbol: "ॐ",
    title: "சத்சங்கம்",
    text: "உண்மையை நோக்கி ஒன்றாகப் பயணிக்கும் ஓர் அருளான சூழல்.",
  },
  {
    symbol: "✦",
    title: "ஆன்மிகம்",
    text: "நம்முடைய உண்மையான இயல்பை உணர்வதற்கான பயணம்.",
  },
  {
    symbol: "♡",
    title: "அன்பு",
    text: "எதிர்பார்ப்பில்லாமல் அன்பை வழங்கும் வாழ்க்கை.",
  },
  {
    symbol: "↗",
    title: "சேவை",
    text: "அன்பையும் கருணையையும் செயல்களின் மூலம் வெளிப்படுத்துதல்.",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-image" aria-hidden="true" />
        <div className="about-hero-overlay" aria-hidden="true" />

        <div className="about-hero-content">
          <p className="about-hero-eyebrow">சாய் சத்சங் @ குருபாதம்</p>
          <h1>
            ஒரு பிரார்த்தனையில்
            <br />
            <span>தொடங்கிய பயணம்…</span>
          </h1>
          <p className="about-hero-subtitle">
            அன்பில் தொடங்கி, பக்தி மற்றும் சேவையால் தொடர்ந்து மலரும் ஆன்மிகப் பயணம்.
          </p>
          <div className="about-hero-actions">
            <Link href="/satsang" className="about-button about-button-light">
              சத்சங்கத்தை அறிய
            </Link>
            <a href="#our-journey" className="about-text-link">
              எங்கள் பயணம்
            </a>
          </div>
        </div>

        <div className="about-hero-bottomline" role="group" aria-label="நம்பிக்கை, பொறுமை, அன்பு, சேவை">
          <span>நம்பிக்கை</span><i aria-hidden="true" />
          <span>பொறுமை</span><i aria-hidden="true" />
          <span>அன்பு</span><i aria-hidden="true" />
          <span>சேவை</span>
        </div>
      </section>

      {/* INTRO */}
      <section className="about-intro-section">
        <div className="about-container about-intro-grid">
          <div className="about-intro-media">
            <img src="/images/gallery/gallery-1.jpeg" alt="சாய் தபோவனத்தின் ஆன்மிகச் சூழல்" />
            <div className="about-image-note">
              <span className="about-image-note-mark">ॐ</span>
              <span>அமைதி · நம்பிக்கை · அன்பு</span>
            </div>
          </div>

          <div className="about-intro-copy">
            <p className="about-eyebrow">எங்களைப் பற்றி</p>
            <h2>
              மனம் அமைதியடையும் இடம்.
              <br />
              உள்ளம் விழித்தெழும் அனுபவம்.
            </h2>
            <div className="about-rule" />
            <p className="about-lead">
              ஸ்ரீ சாய் தபோவனம் அன்பும் எளிமையும் நிறைந்த ஒரு புனிதத் தலமாக அமைந்திருக்கிறது.
            </p>
            <p>
              இயற்கையின் அமைதியில் அமர்ந்து, வாழ்க்கையின் பரபரப்பிலிருந்து சற்று விலகி,
              நம்முடைய உள்ளத்தின் குரலைக் கேட்கும் ஒரு தெய்வீகத் தளம்.
            </p>
            <p>
              இங்கு சத்சங்கம் என்பது வெறும் ஒரு கூடுகை அல்ல. அது நம்முடைய உண்மையான
              இயல்பை மீண்டும் உணரச் செய்யும் ஒரு அருள் சூழல்.
            </p>
            <p className="about-inline-emphasis">
              சாதாரண வாழ்க்கையிலிருந்து தெய்வீக வாழ்க்கையை நோக்கிய ஓர் ஆன்மிகப் பயணம்.
            </p>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="about-journey-section" id="our-journey">
        <div className="about-journey-image" aria-hidden="true" />
        <div className="about-journey-overlay" aria-hidden="true" />

        <div className="about-container about-journey-container">
          <div className="about-journey-heading">
            <p className="about-eyebrow">எங்கள் தொடக்கம்</p>
            <h2>ஒரு பிரார்த்தனையில் தொடங்கியது.</h2>
            <p>
              ஒரு சிறிய பிரார்த்தனையில் தொடங்கி, இன்று ஒரு சத்சங்கப் பயணமாக மலர்ந்த கதை.
            </p>
          </div>

          <div className="about-timeline">
            {journey.map((item) => (
              <article className="about-timeline-item" key={item.title}>
                <div className="about-timeline-marker" aria-hidden="true" />
                <div className="about-timeline-copy">
                  <p className="about-timeline-label">{item.label}</p>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SALEM SHIRDI */}
      <section className="about-salem-section">
        <div className="about-container about-salem-grid">
          <div className="about-salem-copy">
            <p className="about-eyebrow">ஒரு புனிதமான அடையாளம்</p>
            <h2>சேலம் ஷிர்டி</h2>
            <div className="about-rule" />
            <p className="about-lead">
              சாய் தபோவனத்தில் சாயியின் திருவுருவம் வேப்பமரத்தின் கீழ் நிறுவப்பட்டது.
            </p>
            <p>
              வேப்பமரம் ஷிர்டியின் ஆன்மிக நினைவுகளை நமக்கு ஏற்படுத்தும் ஒரு முக்கியமான
              அடையாளமாக அமைந்தது.
            </p>
            <p>
              இதன் மூலம் இந்த இடம் பக்தர்களிடையே “சேலம் ஷிர்டி” என்ற அன்பான அடையாளத்தைப் பெற்றது.
            </p>
            <blockquote className="about-salem-quote">
              ஷிர்டியின் நினைவைத் தாங்கி, சாயியின் அருளுணர்வை அனுபவிக்கும் ஒரு புனிதமான இடம்.
            </blockquote>
          </div>

          <div className="about-salem-media">
            <img src="/images/gallery/gallery-2.jpeg" alt="சேலம் ஷிர்டி" />
            <span className="about-media-caption">SALEM · SHIRDI</span>
          </div>
        </div>
      </section>

      {/* PURPOSE */}
      <section className="about-purpose-section">
        <div className="about-container">
          <div className="about-purpose-heading">
            <div>
              <p className="about-eyebrow">எங்கள் நோக்கம்</p>
              <h2>
                வாழ்க்கையை மாற்றும்
                <br />
                ஒரு ஆன்மிகப் பயணம்.
              </h2>
            </div>
            <p>
              சத்சங்கம், பக்தி, தியானம் மற்றும் சேவை ஆகியவற்றின் மூலம் உள்ளார்ந்த அமைதியையும்
              ஆன்மிக உணர்வையும் வளர்க்கும் சூழலை உருவாக்குவது.
            </p>
          </div>

          <div className="about-purpose-list">
            {purposeItems.map((item) => (
              <article className="about-purpose-item" key={item.title}>
                <span className="about-purpose-symbol" aria-hidden="true">{item.symbol}</span>
                <div className="about-purpose-copy">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="about-vision-section">
        <div className="about-vision-image" aria-hidden="true" />
        <div className="about-vision-overlay" aria-hidden="true" />

        <div className="about-container about-vision-content">
          <p className="about-eyebrow">எங்கள் பார்வை</p>
          <h2>
            சாதாரண வாழ்க்கையிலிருந்து
            <br />
            <span>தெய்வீக வாழ்க்கை.</span>
          </h2>
          <div className="about-vision-rule" />
          <p>
            உலக வாழ்க்கையை விட்டு விலகுவது அல்ல. உலக வாழ்க்கையையே அன்பு, நன்றி,
            நம்பிக்கை, பொறுமை மற்றும் சேவையுடன் வாழ்வது.
          </p>
          <div className="about-vision-values">
            <span>அன்பு</span>
            <span>நன்றி</span>
            <span>நம்பிக்கை</span>
            <span>பொறுமை</span>
            <span>சேவை</span>
          </div>
        </div>
      </section>

      {/* SERVICE */}
      <section className="about-service-section">
        <div className="about-container about-service-grid">
          <div className="about-service-copy">
            <p className="about-eyebrow">ஆன்மிகமும் சேவையும்</p>
            <h2>
              அன்பில் ஆன்மிகம்.
              <br />
              சேவையில் வெளிப்பாடு.
            </h2>
            <div className="about-rule" />
            <p className="about-lead">
              ஆன்மிகம் என்பது தியானத்தில் மட்டும் முடிந்து விடுவதில்லை.
            </p>
            <p>
              நாம் எப்படி வாழ்கிறோம், பிறரை எப்படி நடத்துகிறோம், எவ்வளவு அன்புடன் நடந்து
              கொள்கிறோம், தேவையான இடத்தில் எப்படி உதவுகிறோம் என்பதிலும் ஆன்மிகம் வெளிப்படுகிறது.
            </p>
            <p>
              அதனால் சாய் தபோவனத்தின் ஆன்மிகப் பயணத்தில் அன்பும் சேவையும் முக்கியமான
              இடத்தைப் பெறுகின்றன.
            </p>
            <blockquote className="about-service-quote">
              <span aria-hidden="true">“</span>
              <p>உண்மையான அன்புடன் வாழ்வதே தவம்.</p>
            </blockquote>
          </div>

          <div className="about-service-gallery">
            <div className="about-service-image-main">
              <img src="/images/gallery/gallery-4.jpeg" alt="ஆன்மிகக் கூடுகை" />
            </div>
            <div className="about-service-image-small">
              <img src="/images/gallery/gallery-6.jpeg" alt="பக்தியின் ஒரு தருணம்" />
            </div>
          </div>
        </div>
      </section>

      {/* CURRENT IDENTITY */}
      <section className="about-identity-section">
        <div className="about-identity-image" aria-hidden="true" />
        <div className="about-identity-overlay" aria-hidden="true" />

        <div className="about-container about-identity-content">
          <span className="about-identity-om" aria-hidden="true">ॐ</span>
          <p className="about-eyebrow">எங்கள் தற்போதைய அடையாளம்</p>
          <h2>சாய் சத்சங்<br /><span>@ குருபாதம்</span></h2>
          <p>
            ஒரு வீட்டில் தொடங்கிய பிரார்த்தனை, பக்தர்களின் சத்சங்கமாக வளர்ந்து,
            சாய் தபோவனமாக மலர்ந்து, இன்று சாய் சத்சங் @ குருபாதம் என்ற ஆன்மிகப் பயணமாகத் தொடர்கிறது.
          </p>
          <p className="about-identity-emphasis">
            இடம் மாறலாம். பயணம் தொடர்கிறது.
            <br />
            சாயியின் அருள் தொடர்ந்து வழிநடத்தட்டும்.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="about-final-section">
        <div className="about-container about-final-inner">
          <span className="about-final-om" aria-hidden="true">ॐ</span>
          <p className="about-eyebrow">சாய் சத்சங் @ குருபாதம்</p>
          <div className="about-final-message">
            <span>அமைதியில் சாயியை உணர்வோம்.</span>
            <span>அன்பில் சாயியை வாழ்வோம்.</span>
            <span>சேவையில் சாயியை வெளிப்படுத்துவோம்.</span>
            <span>சரணாகதியில் சாயியுடன் ஒன்றாவோம்.</span>
          </div>
          <p className="about-final-quote">“Sabka Malik Ek”</p>
          <div className="about-final-actions">
            <Link href="/satsang" className="about-button about-button-dark">
              சத்சங்கத்தை அறிய
            </Link>
            <Link href="/sai-baba" className="about-button about-button-outline">
              சாய்பாபாவைப் பற்றி
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
