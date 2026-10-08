import Link from "next/link";

import "./home.css";

const satsangActivities = [
  {
    icon: "ॐ",

    title: "சத்சங்கம்",

    text: "சாயியை நினைவுகூர்ந்து, அவருடைய போதனைகளை கேட்டு, அமைதியையும் ஆன்மிகத் தோழமையையும் அனுபவிக்கும் ஒரு அருள் சூழல்.",
  },

  {
    icon: "♪",

    title: "பஜன்",

    text: "சாயியின் நாமத்தை அன்புடன் பாடி, பக்தியிலும் இறைநினைவிலும் சில அமைதியான தருணங்களை செலவிடுவோம்.",
  },

  {
    icon: "🪔",

    title: "ஆரத்தி & பூஜை",

    text: "நம்பிக்கையுடனும் பக்தியுடனும் ஆரத்தி மற்றும் சிறப்பு பூஜைகளில் கலந்து கொண்டு சாயியின் அருளை உணர்வோம்.",
  },

  {
    icon: "📖",

    title: "சாய் சத்சரித்ரா",

    text: "சாயியின் வாழ்க்கை, லீலைகள் மற்றும் போதனைகளை வாசித்து, கேட்டு, அவற்றை நம் வாழ்க்கையில் உணர்வோம்.",
  },
];

const fourPillars = [
  {
    number: "01",

    title: "நம்பிக்கை",

    english: "Shraddha",

    text: "இறைவனின் அருளிலும், குருவின் வழிகாட்டுதலிலும் மனப்பூர்வமான நம்பிக்கையுடன் இருப்பது.",
  },

  {
    number: "02",

    title: "பொறுமை",

    english: "Saburi",

    text: "எல்லாம் அதற்குரிய நேரத்தில் நடைபெறும் என்ற நம்பிக்கையுடன் பொறுமையாக காத்திருப்பது.",
  },

  {
    number: "03",

    title: "அன்பு",

    english: "Love",

    text: "ஒவ்வொரு உயிரையும் கருணையுடனும் மரியாதையுடனும் அணுகி, எதிர்பார்ப்பில்லாமல் அன்பை வழங்குவது.",
  },

  {
    number: "04",

    title: "சரணாகதி",

    english: "Surrender",

    text: "“என்னை வழிநடத்துங்கள்” என்று உள்ளத்தை இறைவனிடமும் குருவிடமும் ஒப்படைப்பது.",
  },
];

const ordinaryToDivine = [
  {
    title: "குடும்பத்தில்",

    value: "அன்பு",
  },

  {
    title: "உறவுகளில்",

    value: "புரிதல்",
  },

  {
    title: "வாழ்க்கையில்",

    value: "நன்றி",
  },

  {
    title: "செயல்களில்",

    value: "சேவை",
  },

  {
    title: "மனதில்",

    value: "நம்பிக்கை",
  },

  {
    title: "வாழ்வில்",

    value: "பொறுமை",
  },
];

const teachings = [
  {
    number: "01",

    title: "நம்பிக்கை",

    english: "Shraddha",

    text: "இறைவனின் அருளிலும் குருவின் வழிகாட்டுதலிலும் முழு நம்பிக்கையுடன் பயணித்தல்.",
  },

  {
    number: "02",

    title: "பொறுமை",

    english: "Saburi",

    text: "வாழ்க்கையின் சூழ்நிலைகளை நம்பிக்கையுடன் ஏற்றுக்கொண்டு, சரியான நேரத்திற்காக காத்திருத்தல்.",
  },

  {
    number: "03",

    title: "அன்பு",

    english: "Love",

    text: "ஒவ்வொரு உயிரையும் கருணையுடனும் மரியாதையுடனும் அணுகி அன்பை வழங்குதல்.",
  },

  {
    number: "04",

    title: "சேவை",

    english: "Seva",

    text: "பிறரின் நலனில் அக்கறை கொண்டு, தேவையான இடத்தில் உதவி செய்வதை இறைநேசத்தின் ஒரு வெளிப்பாடாக வாழ்தல்.",
  },
];

const homeGalleryImages = [
  {
    image: "gallery-1.jpeg",

    category: "ஆலயம்",

    title: "ஸ்ரீ சாய் தபோவனம்",
  },

  {
    image: "gallery-3.jpeg",

    category: "பூஜை & ஆரத்தி",

    title: "தினசரி ஆரத்தி",
  },

  {
    image: "gallery-5.jpeg",

    category: "திருவிழாக்கள்",

    title: "திருவிழா தருணங்கள்",
  },

  {
    image: "gallery-7.jpeg",

    category: "பக்தி தருணங்கள்",

    title: "ஆன்மிக அனுபவங்கள்",
  },
];

const shirdiJourney = [
  {
    number: "01",

    title: "ஷீர்டியை அடைவது எப்படி?",

    text: "ஷீர்டி செல்லும் பயணத்திற்குத் தேவையான பயனுள்ள தகவல்களை அறிந்து கொள்ளுங்கள்.",

    icon: "✈",
  },

  {
    number: "02",

    title: "சாயியுடன் தொடர்புடைய இடங்கள்",

    text: "சாய்பாபாவின் வாழ்க்கையுடன் தொடர்புடைய முக்கியமான ஆன்மிகத் தலங்களை அறிந்து கொள்ளுங்கள்.",

    icon: "🛕",
  },

  {
    number: "03",

    title: "அருகிலுள்ள இடங்கள்",

    text: "ஷீர்டி பயணத்தின் போது பார்க்கக்கூடிய முக்கியமான இடங்களைப் பற்றி அறிந்து கொள்ளுங்கள்.",

    icon: "⌖",
  },
];

export default function Home() {
  return (
    <main className="home-page">
      {/* =====================================================

    HOME HERO

===================================================== */}

      <section className="home-hero">
        <div className="home-hero-overlay" />

        <div className="home-hero-content">
          <p className="home-hero-eyebrow">ஸ்ரீ சாய் தபோவனம்</p>

          <h1>
            சாதாரண வாழ்க்கையிலிருந்து
            <br />
            <span>தெய்வீக வாழ்க்கையை நோக்கி</span>
          </h1>

          <div className="home-hero-divider" />

          <p className="home-hero-description">
            ஒரு சத்சங்கம்&nbsp; • &nbsp;ஒரு ஆன்மிகப் பயணம்
            <br />
            சாயியுடன் சில அமைதியான தருணங்கள்.
          </p>
        </div>
      </section>

      {/* =====================================================

    A MOMENT WITH SAI

===================================================== */}
      <section className="home-moment">
        <div className="home-moment-inner">
          <p className="home-moment-eyebrow">சாயியுடன் ஒரு தருணம்</p>

          <div className="home-moment-divider" />

          <blockquote className="home-moment-quote">
            <span className="home-moment-quote-mark">“</span>

            <p>நான் இங்கே இருக்கும்போது ஏன் பயம்?</p>

            <span className="home-moment-quote-mark closing">”</span>
          </blockquote>

          <Link href="/sai-baba" className="home-moment-link">
            சாயியின் போதனைகளை அறிய <span>→</span>
          </Link>
        </div>
      </section>

      {/* =====================================================

          03 — SRI SAI TAPOVAN

      ===================================================== */}

      <section className="home-intro">
        <div className="home-intro-container">
          <div className="home-intro-image">
            <img src="/images/gallery/gallery-1.jpeg" alt="Sri Sai Tapovan" />
          </div>

          <div className="home-intro-content">
            <span className="home-section-number">01</span>

            <p className="home-section-eyebrow">ஸ்ரீ சாய் தபோவனம்</p>

            <h2>
              ஒரு இடம் மட்டுமல்ல…
              <br />
              ஒரு ஆன்மிக அனுபவம்.
            </h2>

            <div className="home-small-line" />

            <p>
              ஸ்ரீ சாய் தபோவனம் என்பது சாயியின் அருளையும், ஆன்மிக அமைதியையும்
              உணர்ந்து, நம்முடைய உள்ளத்தை நோக்கித் திரும்பிச் செல்லும் ஒரு
              புனிதமான சூழல்.
            </p>

            <p>
              இங்கு நாம் அவசரமான வாழ்க்கையிலிருந்து சில தருணங்கள் விலகி, சாயியை
              நினைத்து, கேட்டு, பிரார்த்தித்து, நம்மை நாமே உணர முயல்கிறோம்.
            </p>

            <Link href="/about" className="home-text-link">
              எங்களைப் பற்றி அறிய →
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================

          04 — SAI SATSANG

      ===================================================== */}

      <section className="home-satsang">
        <div className="home-satsang-heading">
          <span className="home-section-number">02</span>

          <p className="home-section-eyebrow">சாய் சத்சங்கம்</p>

          <h2>
            ஒரு பூஜையைத் தாண்டிய
            <br />
            ஓர் ஆன்மிக அனுபவம்.
          </h2>

          <p>
            சத்சங்கம் என்பது ஒன்றாகக் கூடுவது மட்டும் அல்ல. சாயியை
            நினைவுகூர்ந்து, அவருடைய போதனைகளை கேட்டு, நம் வாழ்க்கையைப் பற்றி
            சிந்தித்து, அன்புடனும் நம்பிக்கையுடனும் வாழத் தொடங்கும் ஒரு ஆன்மிகப்
            பயணம்.
          </p>
        </div>

        <div className="home-satsang-grid">
          {satsangActivities.map((activity) => (
            <article className="home-satsang-card" key={activity.title}>
              <div className="home-satsang-icon">{activity.icon}</div>

              <h3>{activity.title}</h3>

              <p>{activity.text}</p>
            </article>
          ))}
        </div>

        <div className="home-centered-link">
          <Link href="/satsang" className="home-outline-button">
            சத்சங்கத்தை அறிய
          </Link>
        </div>
      </section>

      {/* =====================================================

          05 — FOUR PILLARS

      ===================================================== */}

      <section className="home-pillars">
        <div className="home-pillars-container">
          <div className="home-pillars-heading">
            <span className="home-section-number">03</span>

            <p className="home-section-eyebrow">சத்சங்கத்தின் அடித்தளம்</p>

            <h2>நான்கு தூண்கள்</h2>

            <p>
              சாயியின் பாதையில் நம்முடைய ஆன்மிகப் பயணத்தை வழிநடத்தும் எளிய
              உண்மைகள்.
            </p>
          </div>

          <div className="home-pillars-grid">
            {fourPillars.map((pillar) => (
              <article className="home-pillar-card" key={pillar.number}>
                <span className="home-pillar-number">{pillar.number}</span>

                <div>
                  <span className="home-pillar-english">{pillar.english}</span>

                  <h3>{pillar.title}</h3>

                  <p>{pillar.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================

          06 — ORDINARY TO DIVINE

      ===================================================== */}

      <section className="home-divine">
        <div className="home-divine-overlay" />

        <div className="home-divine-container">
          <span className="home-section-number">04</span>

          <p className="home-section-eyebrow">சாயியின் பாதையில் ஒரு வாழ்க்கை</p>

          <h2>
            சாயியை நினைப்பது மட்டும் அல்ல… <br />
            சாயியை வாழ்வது.{" "}
          </h2>

          <p className="home-divine-intro">
            அன்பில் சாயியை உணர்வோம். <br />
            நம்பிக்கையில் சாயியை நினைவுகூர்வோம். <br />
            சேவையில் சாயியை வெளிப்படுத்துவோம். <br />
            பொறுமையில் சாயியின் வழியைப் பின்பற்றுவோம். <br />
          </p>
        </div>
      </section>

      {/* =====================================================

          07 — SAI BABA TEACHINGS

      ===================================================== */}

      <section className="home-teachings">
        <div className="home-teachings-container">
          <div className="home-teachings-heading">
            <div>
              <span className="home-section-number">05</span>

              <p className="home-section-eyebrow">சாயியின் வழிகாட்டுதல்</p>

              <h2>சாயியின் போதனைகள்</h2>
            </div>

            <Link href="/sai-baba" className="home-text-link">
              அனைத்தையும் அறிய →
            </Link>
          </div>

          <div className="home-teachings-grid">
            {teachings.map((teaching) => (
              <article className="home-teaching-card" key={teaching.number}>
                <span className="home-teaching-number">{teaching.number}</span>

                <span className="home-teaching-english">
                  {teaching.english}
                </span>

                <h3>{teaching.title}</h3>

                <p>{teaching.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================

          08 — LOVE & SERVICE

      ===================================================== */}

      <section className="home-service">
        <div className="home-service-image" />

        <div className="home-service-overlay" />

        <div className="home-service-content">
          <span className="home-section-number">06</span>

          <p className="home-section-eyebrow">அன்பை வாழ்க்கையாக்குவோம்</p>

          <h2>அன்பும் சேவையும்</h2>

          <div className="home-service-line" />

          <p className="home-service-lead">
            ஆன்மிகம் என்பது தியானத்தில் மட்டும் முடிந்து விடுவதில்லை.
          </p>

          <p>
            நாம் எப்படி வாழ்கிறோம், பிறரை எப்படி நடத்துகிறோம், எவ்வளவு அன்புடன்
            நடந்து கொள்கிறோம், தேவையான இடத்தில் எப்படி உதவுகிறோம் என்பதிலும்
            ஆன்மிகம் வெளிப்படுகிறது.
          </p>

          <p>
            அதனால் சாய் தபோவனத்தின் ஆன்மிகப் பயணத்தில் அன்பும் சேவையும்
            முக்கியமான இடத்தைப் பெறுகின்றன.
          </p>
        </div>
      </section>

      {/* =====================================================

          09 — UPCOMING EVENTS

      ===================================================== */}

      <section className="home-events">
        <div className="home-events-container">
          <div className="home-events-heading">
            <span className="home-section-number">07</span>

            <p className="home-section-eyebrow">
              சத்சங்கம் & ஆன்மிக நிகழ்வுகள்
            </p>

            <h2>வரவிருக்கும் நிகழ்வுகள்</h2>

            <p>
              சாய் தபோவனத்தில் நடைபெறும் பூஜைகள், சத்சங்கங்கள் மற்றும் ஆன்மிக
              நிகழ்வுகளை அறிந்து கொள்ளுங்கள்.
            </p>
          </div>

          <div className="home-events-preview">
            <div className="home-event-placeholder">
              <span>ॐ</span>

              <div>
                <strong>நிகழ்வுகள் தொடர்ந்து அறிவிக்கப்படும்</strong>

                <p>
                  அடுத்த சத்சங்கம் மற்றும் சிறப்பு நிகழ்வுகளின் விவரங்களுக்கு
                  Calendar பக்கத்தைப் பார்க்கவும்.
                </p>
              </div>
            </div>
          </div>

          <div className="home-centered-link">
            <Link href="/calendar" className="home-outline-button">
              முழு நிகழ்வு காலண்டரைப் பார்க்க
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================

          10 — GALLERY

      ===================================================== */}

      <section className="home-gallery">
        <div className="home-gallery-container">
          <div className="home-gallery-heading">
            <span className="home-section-number">08</span>

            <p className="home-section-eyebrow">சத்சங்கத்தின் தருணங்கள்</p>

            <h2>பக்தியின் சில தருணங்கள்</h2>

            <p>
              பிரார்த்தனை, பூஜை, திருவிழாக்கள் மற்றும் ஆன்மிக அனுபவங்களின் சில
              நினைவுகள்.
            </p>
          </div>

          <div className="home-gallery-grid">
            {homeGalleryImages.map((item) => (
              <article className="home-gallery-card" key={item.image}>
                <div className="home-gallery-image">
                  <img src={`/images/gallery/${item.image}`} alt={item.title} />
                </div>

                <div className="home-gallery-content">
                  <span>{item.category}</span>

                  <h3>{item.title}</h3>
                </div>
              </article>
            ))}
          </div>

          <div className="home-centered-link">
            <Link href="/gallery" className="home-outline-button">
              அனைத்து படங்களையும் பார்க்க
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================

          11 — SHIRDI JOURNEY

      ===================================================== */}

      <section className="home-shirdi">
        <div className="home-shirdi-image" />

        <div className="home-shirdi-overlay" />

        <div className="home-shirdi-container">
          <div className="home-shirdi-heading">
            <span className="home-section-number">09</span>

            <p className="home-section-eyebrow">ஒரு புனிதப் பயணம்</p>

            <h2>
              ஷீர்டியை நோக்கிய
              <br />
              உங்கள் பயணம்
            </h2>

            <p>
              சாயியின் பாதங்களைத் தேடி ஷீர்டி செல்லத் திட்டமிடுகிறீர்களா? உங்கள்
              ஆன்மிகப் பயணத்திற்கு உதவும் தகவல்களை இங்கே அறிந்து கொள்ளுங்கள்.
            </p>
          </div>

          <div className="home-shirdi-options">
            {shirdiJourney.map((item) => (
              <article className="home-shirdi-option" key={item.number}>
                <div className="home-shirdi-icon">{item.icon}</div>

                <span>{item.number}</span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="home-centered-link">
            <Link href="/shirdi-travel" className="home-light-button">
              ஷீர்டி பயணத்தை அறிய
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================

          12 — ASK SAI

      ===================================================== */}

      <section className="home-ask-sai">
        <div className="home-ask-sai-inner">
          <span className="home-section-number">10</span>

          <p className="home-section-eyebrow">உங்கள் மனதில் ஒரு கேள்வி?</p>

          <h2>சாயியிடம் கேளுங்கள்.</h2>

          <p>
            உங்கள் ஆன்மிகப் பயணம், வாழ்க்கை அல்லது சாயியின் போதனைகள் குறித்து
            ஏதேனும் கேள்வி இருந்தால், எங்களுடன் பகிர்ந்து கொள்ளலாம்.
          </p>

          <Link href="/ask-sai" className="home-ask-sai-button">
            Ask Sai
          </Link>
        </div>
      </section>

      {/* =====================================================

          13 — FINAL SPIRITUAL CLOSING

      ===================================================== */}

      <section className="home-final">
        <div className="home-final-container">
          <div className="home-final-om">ॐ</div>

          <p className="home-final-eyebrow">ஸ்ரீ சாய் தபோவனம்</p>

          <h2>
            ஒரு பிரார்த்தனையில் தொடங்கிய பயணம்…
            <br />
            ஒரு சத்சங்கமாக தொடர்கிறது.
          </h2>

          <div className="home-final-message">
            <p>நம்பிக்கையுடன் இருப்போம்.</p>

            <p>பொறுமையுடன் காத்திருப்போம்.</p>

            <p>அன்புடன் வாழ்வோம்.</p>

            <p>சேவையில் மலர்வோம்.</p>
          </div>

          <div className="home-final-quote">“Sabka Malik Ek”</div>

          <div className="home-final-divider" />

          <div className="home-final-links">
            <Link href="/satsang">சத்சங்கத்தை அறிய</Link>

            <Link href="/sai-baba">சாய்பாபாவைப் பற்றி</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
