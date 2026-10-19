import Link from "next/link";
import "./about.css";

const journey = [
  {
    label: "தொடக்கம்",
    title: "வீட்டில் தொடங்கிய பிரார்த்தனை",
    text: "ஆரம்பத்தில் பிரார்த்தனைகள் வீட்டிலேயே நடைபெற்று வந்தன.",
    image: "/images/about/journey/journey-01.jpg",
    imageAlt: "சாயியின் அருளை நினைத்து நடைபெற்ற ஆரம்பகால பிரார்த்தனை",
  },
  {
    label: "சத்சங்கம்",
    title: "பக்தர்கள் பெருகிய கூடுகை",
    text: "காலப்போக்கில் அதிகமான பக்தர்கள் பிரார்த்தனைகளில் கலந்து கொள்ளத் தொடங்கினர். அனைவருக்கும் இடமளிக்க ஒரு பெரிய இடம் தேவைப்பட்டது.",
    image: "/images/about/journey/journey-02.jpg",
    imageAlt: "ஒன்றிணைந்து பிரார்த்தனையில் ஈடுபடும் பக்தர்கள்",
  },
  {
    label: "புதிய இடம்",
    title: "சாய் தபோவனம்",
    text: "அதிகமான பக்தர்கள் ஒன்றாகக் கூடுவதற்காக ஒரு பெரிய இடம் தேவைப்பட்டது. அந்தத் தேவையிலிருந்து சாய் தபோவனம் உருவானது.",
    image: "/images/about/journey/journey-03.jpg",
    imageAlt: "ஆன்மிகக் கூடுகைக்கான அமைதியான தலம்",
  },
  {
    label: "சாயியின் திருவுருவம்",
    title: "வேப்பமரத்தின் கீழ் சாய்",
    text: "ஷிர்டியை நினைவூட்டும் வகையில், சாயியின் திருவுருவம் வேப்பமரத்தின் கீழ் நிறுவப்பட்டது.",
    image: "/images/about/journey/sai-baba-paduka.jpeg",
    imageAlt: "பூமாலைகளால் அலங்கரிக்கப்பட்ட சாயிபாபாவின் திருவுருவம்",
  },
  {
    label: "அன்பான அடையாளம்",
    title: "சேலம் ஷிர்டி",
    text: "வேப்பமரத்தின் கீழ் சாயியின் திருவுருவம் அமைந்ததன் மூலம், இந்தப் புனிதத் தலம் “சேலம் ஷிர்டி” என்ற அடையாளத்தைப் பெற்றது.",
    image: "/images/about/journey/sai-baba-paduka.jpeg",
    imageAlt: "சாயிபாபா அலங்கரிக்கப்பட்டு வழிபடப்படும் புனிதத் தருணம்",
  },
  {
    label: "இன்று",
    title: "சாய் சத்சங் @ குருபாதம்",
    text: "ஒரு வீட்டில் தொடங்கிய பிரார்த்தனை, பக்தர்களின் சத்சங்கமாக வளர்ந்து, சாய் தபோவனமாக மலர்ந்து, இன்று சாய் சத்சங் @ குருபாதம் என்ற ஆன்மிகப் பயணமாகத் தொடர்கிறது.",
    image: "/images/about/journey/journey-05.jpg",
    imageAlt: "அன்பு மற்றும் சேவை வழியாக ஒன்றிணையும் பக்தர்கள்",
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
    symbol: "❋",
    title: "சேவை",
    text: "அன்பையும் கருணையையும் செயல்களின் மூலம் வெளிப்படுத்துதல்.",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* Hero intentionally retains the shared inner-page design and dimensions. */}
      <section className="about-hero" aria-labelledby="about-hero-title">
        <div className="about-hero-image" aria-hidden="true" />
        <div className="about-hero-overlay" aria-hidden="true" />
        <div className="about-hero-content">
          <p className="about-hero-eyebrow">சாய் சத்சங் @ குருபாதம்</p>
          <h1 id="about-hero-title">
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
        <div className="about-hero-bottomline" aria-label="நம்பிக்கை, பொறுமை, அன்பு, சேவை">
          <span>நம்பிக்கை</span><i aria-hidden="true">·</i>
          <span>பொறுமை</span><i aria-hidden="true">·</i>
          <span>அன்பு</span><i aria-hidden="true">·</i>
          <span>சேவை</span>
        </div>
      </section>

      {/* An open editorial introduction with no decorative image frame. */}
      <section className="about-intro-section">
        <div className="about-container about-intro-grid">
          <figure className="about-intro-media">
            <img src="/images/gallery/gallery-1.jpeg" alt="சாய் தபோவனத்தின் ஆன்மிகச் சூழல்" />
            <figcaption>
              <span aria-hidden="true">ॐ</span>
              அமைதி · நம்பிக்கை · அன்பு
            </figcaption>
          </figure>
          <div className="about-intro-copy">
            <p className="about-eyebrow">எங்களைப் பற்றி</p>
            <h2>மனம் அமைதியடையும் இடம். உள்ளம் விழித்தெழும் அனுபவம்.</h2>
            <span className="about-rule" aria-hidden="true" />
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

      {/* The journey is presented as a dedicated editorial story, separate from the hero. */}
      <section className="about-journey-section" id="our-journey">
        <div className="about-container">
          <div className="about-journey-heading">
            <div className="about-journey-heading-main">
              <p className="about-eyebrow">எங்கள் ஆன்மிகப் பயணம்</p>
              <h2>சாயியின் அருளில் வளர்ந்த<br /><span>எங்கள் பயணம்</span></h2>
              <span className="about-rule" aria-hidden="true" />
            </div>
            <div className="about-journey-heading-copy">
              <p className="about-journey-lead">
                வீட்டில் தொடங்கிய எளிய பிரார்த்தனை, பக்தர்கள் ஒன்றிணையும் சத்சங்கமாக வளர்ந்தது.
              </p>
              <p>
                ஒவ்வொரு கட்டத்திலும் சாயியின் அருளும் பக்தர்களின் அன்பும் இந்தப் பயணத்தை வழிநடத்தின.
                அந்தப் பயணத்தின் முக்கியமான தருணங்கள் இங்கே.
              </p>
            </div>
          </div>
          <div className="about-journey-grid">
            {journey.map((item) => (
              <article className="about-journey-card" key={item.title}>
                <figure className="about-journey-image-wrap">
                  <img src={item.image} alt={item.imageAlt} loading="lazy" />
                </figure>
                <div className="about-journey-card-copy">
                  <span className="about-journey-label">{item.label}</span>
                  <span className="about-journey-mark" aria-hidden="true">✦</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Salem Shirdi */}
      <section className="about-salem-section">
        <div className="about-container about-salem-grid">
          <div className="about-salem-copy">
            <p className="about-eyebrow">ஒரு புனிதமான அடையாளம்</p>
            <h2>சேலம் ஷிர்டி</h2>
            <span className="about-rule" aria-hidden="true" />
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
          <figure className="about-salem-media">
            <img src="/images/gallery/gallery-2.jpeg" alt="சேலம் ஷிர்டியின் ஆன்மிகச் சூழல்" />
            <figcaption>SALEM · SHIRDI</figcaption>
          </figure>
        </div>
      </section>

      {/* Purpose */}
      <section className="about-purpose-section">
        <div className="about-container">
          <div className="about-purpose-heading">
            <div>
              <p className="about-eyebrow">எங்கள் நோக்கம்</p>
              <h2>வாழ்க்கையை மாற்றும் ஒரு ஆன்மிகப் பயணம்.</h2>
            </div>
            <p>
              சத்சங்கம், பக்தி, தியானம் மற்றும் சேவை ஆகியவற்றின் மூலம் உள்ளார்ந்த அமைதியையும்
              ஆன்மிக உணர்வையும் வளர்க்கும் சூழலை உருவாக்குவது.
            </p>
          </div>
          <div className="about-purpose-grid">
            {purposeItems.map((item) => (
              <article className="about-purpose-item" key={item.title}>
                <span className="about-purpose-symbol" aria-hidden="true">{item.symbol}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* The vision and service stories are combined into one shorter editorial feature. */}
      <section className="about-life-section">
        <div className="about-container about-life-grid">
          <div className="about-life-gallery" aria-label="சத்சங்கத்தின் புகைப்படங்கள்">
            <img className="about-life-image-main" src="/images/gallery/gallery-4.jpeg" alt="ஆன்மிகக் கூடுகையின் ஒரு தருணம்" />
            <img className="about-life-image-small" src="/images/gallery/gallery-6.jpeg" alt="பக்தியின் அமைதியான தருணம்" />
            <span className="about-life-caption">அன்பு · நன்றி · சேவை</span>
          </div>
          <div className="about-life-copy">
            <p className="about-eyebrow">எங்கள் பார்வை</p>
            <h2>சாதாரண வாழ்க்கையிலிருந்து தெய்வீக வாழ்க்கை.</h2>
            <span className="about-rule" aria-hidden="true" />
            <p className="about-lead">
              உலக வாழ்க்கையை விட்டு விலகுவது அல்ல; உலக வாழ்க்கையையே அன்புடனும் நன்றியுடனும் வாழ்வது.
            </p>
            <p>
              குடும்பத்தில் அன்பு, உறவுகளில் புரிதல், வாழ்க்கையில் நன்றி, செயல்களில் சேவை,
              மனதில் நம்பிக்கை, வாழ்வில் பொறுமை — இவற்றை அன்றாட வாழ்க்கையில் கடைப்பிடிப்பதே
              இந்த ஆன்மிகப் பயணத்தின் நோக்கம்.
            </p>
            <p>
              ஆன்மிகம் என்பது தியானத்தில் மட்டும் முடிந்து விடுவதில்லை. நாம் எப்படி வாழ்கிறோம்,
              பிறரை எப்படி நடத்துகிறோம், தேவையான இடத்தில் எப்படிச் சேவை செய்கிறோம் என்பதிலும்
              அது வெளிப்படுகிறது.
            </p>
            <blockquote className="about-service-quote">
              <span aria-hidden="true">“</span>
              <p>உண்மையான அன்புடன் வாழ்வதே தவம்.</p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* One closing banner combines the present identity and the invitation. */}
      <section className="about-closing-section">
        <div className="about-closing-image" aria-hidden="true" />
        <div className="about-closing-overlay" aria-hidden="true" />
        <div className="about-container about-closing-content">
          <span className="about-closing-om" aria-hidden="true">ॐ</span>
          <p className="about-eyebrow">எங்கள் தற்போதைய அடையாளம்</p>
          <h2>சாய் சத்சங் <span>@ குருபாதம்</span></h2>
          <p className="about-closing-copy">
            ஒரு வீட்டில் தொடங்கிய பிரார்த்தனை, பக்தர்களின் சத்சங்கமாக வளர்ந்து,
            சாய் தபோவனமாக மலர்ந்து, இன்று சாய் சத்சங் @ குருபாதம் என்ற ஆன்மிகப் பயணமாகத் தொடர்கிறது.
          </p>
          <p className="about-closing-emphasis">
            இடம் மாறலாம். பயணம் தொடர்கிறது.
            <br />
            சாயியின் அருள் தொடர்ந்து வழிநடத்தட்டும்.
          </p>
          <div className="about-closing-values">
            <span>அமைதி</span><i aria-hidden="true">·</i>
            <span>அன்பு</span><i aria-hidden="true">·</i>
            <span>சேவை</span><i aria-hidden="true">·</i>
            <span>சரணாகதி</span>
          </div>
          <p className="about-closing-quote">“Sabka Malik Ek”</p>
          <div className="about-closing-actions">
            <Link href="/satsang" className="about-button about-button-light">சத்சங்கத்தை அறிய</Link>
            <Link href="/sai-baba" className="about-button about-button-outline">சாய்பாபாவைப் பற்றி</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
