import Link from "next/link";
import "./satsang.css";

export default function SatsangPage() {
  return (
    <main className="satsang-page">

      {/* =====================================================
          HERO
      ===================================================== */}
     <section className="satsang-hero">
  <div className="satsang-hero-overlay" />

  <div className="satsang-hero-content">

    <p className="hero-eyebrow">
      ஸ்ரீ சாய் தபோவனம்
    </p>

    <h1>சத்சங்கம்</h1>

    <div className="hero-line" />

    <p className="hero-subtitle">
      சாதாரண வாழ்க்கையிலிருந்து
      <br />
      தெய்வீக வாழ்க்கையை நோக்கிய ஓர் ஆன்மிகப் பயணம்
    </p>

   

  </div>
</section>


      {/* =====================================================
          01 — WHAT IS SATSANG
      ===================================================== */}
      <section className="story-section first-story">
        <div className="story-container">

          <div className="story-content">

            <span className="section-number">01</span>

            <p className="section-eyebrow">
              உண்மையை நோக்கிய இணைவு
            </p>

            <h2>
              சத்சங்கம் என்றால் என்ன?
            </h2>

            <div className="meaning-inline">

              <div>
                <strong>சத்</strong>
                <span>உண்மை</span>
              </div>

              <b>+</b>

              <div>
                <strong>சங்கம்</strong>
                <span>உண்மையோடு இணைவு</span>
              </div>

            </div>

            <p>
              வாழ்க்கையில் நாம் பல அடையாளங்களை ஏற்றுக்கொள்கிறோம்.
              ஒரு பெயர். ஒரு குடும்பம். ஒரு தொழில்.
              ஒரு உறவு. ஒரு சமூக அடையாளம்.
            </p>

            <p>
              இந்த அடையாளங்கள் வாழ்க்கையின் ஒரு பகுதியாக இருந்தாலும்,
              அவை நம்முடைய முழுமையான உண்மை அல்ல.
            </p>

            <p>
              அவற்றுக்கு அப்பால், அமைதியானதும், அன்பானதும்,
              தூய்மையானதும், தெய்வீகமானதுமான ஓர் உண்மையான
              இயல்பு நம்முள் இருக்கிறது.
            </p>

            <p className="story-highlight">
              சத்சங்கம் அந்த உண்மையை புதிதாக உருவாக்குவதில்லை.
              அதை நம்முள் இருந்து வெளிப்படச் செய்யும்
              ஒரு அருளான சூழலை உருவாக்குகிறது.
            </p>

          </div>

          <div className="story-image">
            <img
              src="/images/gallery/gallery-1.jpeg"
              alt="Sri Sai Tapovan spiritual surroundings"
            />
          </div>

        </div>
      </section>


      {/* =====================================================
          02 — BEYOND RITUAL
      ===================================================== */}
      <section className="story-section reverse-story">
        <div className="story-container">

          <div className="story-image">
            <img
              src="/images/gallery/gallery-3.jpeg"
              alt="Sai Baba devotional worship"
            />
          </div>

          <div className="story-content">

            <span className="section-number">02</span>

            <p className="section-eyebrow">
              ஒரு பூஜையைத் தாண்டி
            </p>

            <h2>
              ஒரு பூஜையைத் தாண்டிய
              <br />
              சத்சங்கம்
            </h2>

            <p>
              சத்சங்கம் ஒரு பூஜை.
              ஆனால் பூஜையைத் தாண்டிய ஓர் அனுபவமும் கூட.
            </p>

            <p>
              அங்கு ஒருவர் தன்னுடைய முழு இருப்போடு கலந்து
              கொள்ளும்போது, அவருடைய உள்ளத்தில் ஒரு நுண்ணிய
              மாற்றம் நிகழத் தொடங்குகிறது.
            </p>

            <p>
              அதற்குப் பெரிய பொருட்கள் தேவையில்லை.
              பணம் தேவையில்லை.
              பெரிய வெளிப்புறத் தயாரிப்புகள் தேவையில்லை.
            </p>

            <div className="faith-pair">

              <div>
                <span>01</span>

                <strong>நம்பிக்கை</strong>

                <p>
                  குருவின் அருளில் முழு நம்பிக்கை.
                </p>
              </div>

              <div>
                <span>02</span>

                <strong>பொறுமை</strong>

                <p>
                  எல்லாம் அதற்குரிய நேரத்தில்
                  மலரும் என்ற நம்பிக்கையுடன் காத்திருத்தல்.
                </p>
              </div>

            </div>

            <p className="story-highlight">
              மீதியை குருவிடம் விட்டுவிடும் அந்த
              மனநிலையே சரணாகதியின் தொடக்கம்.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          03 — FOUR PILLARS
      ===================================================== */}
      <section className="pillars-section">

        <div className="pillars-container">

          <div className="pillars-heading">

            <span className="section-number">03</span>

            <p className="section-eyebrow">
              சாய் தபோவனத்தின் ஆன்மிகப் பாதை
            </p>

            <h2>
              சத்சங்கத்தின் நான்கு தூண்கள்
            </h2>

            <p>
              சத்சங்கப் பயணத்தை வழிநடத்தும் நான்கு
              முக்கியமான உணர்வுகள்.
            </p>

          </div>


          <div className="pillar-grid">

            <div className="pillar-item">

              <div className="pillar-top">
                <span className="pillar-number">01</span>
                <span className="pillar-symbol">🙏</span>
              </div>

              <h3>நம்பிக்கை</h3>

              <p>
                குருவின் அருளில்
                முழு நம்பிக்கை.
              </p>

            </div>


            <div className="pillar-item">

              <div className="pillar-top">
                <span className="pillar-number">02</span>
                <span className="pillar-symbol">✦</span>
              </div>

              <h3>பொறுமை</h3>

              <p>
                எல்லாம் அதற்குரிய நேரத்தில்
                மலரும் என்ற நம்பிக்கையுடன்
                காத்திருத்தல்.
              </p>

            </div>


            <div className="pillar-item">

              <div className="pillar-top">
                <span className="pillar-number">03</span>
                <span className="pillar-symbol">♡</span>
              </div>

              <h3>அன்பு</h3>

              <p>
                எதிர்பார்ப்பில்லாமல்
                அன்பை வழங்குதல்.
              </p>

            </div>


            <div className="pillar-item">

              <div className="pillar-top">
                <span className="pillar-number">04</span>
                <span className="pillar-symbol">ॐ</span>
              </div>

              <h3>சரணாகதி</h3>

              <p>
                “என்னை வழிநடத்துங்கள்”
                என்று உள்ளத்தை குருவிடம்
                ஒப்படைத்தல்.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          04 — MEDITATION / HEART TO HEART
      ===================================================== */}
      <section className="story-section meditation-section">

        <div className="story-container">

          <div className="story-image large-image">

            <img
              src="/images/gallery/gallery-5.jpeg"
              alt="Meditation and spiritual reflection"
            />

          </div>


          <div className="story-content">

            <span className="section-number">04</span>

            <p className="section-eyebrow">
              இதயத்திலிருந்து இதயத்திற்கு
            </p>

            <h2>
              தியானம் —
              <br />
              இறைவனோடு இதய உரையாடல்
            </h2>

            <p>
              சாய் தபோவனத்தில் தியானம் என்பது
              கட்டாயமான ஒரு முறையல்ல.
            </p>

            <p>
              ஒருவர் கண்களை மூடி அமரலாம்.
              அல்லது இயற்கையைப் பார்த்துக் கொண்டிருக்கலாம்.
              அமைதியாக இருக்கலாம்.
            </p>

            <p>
              அல்லது தன்னுடைய இஷ்ட தெய்வத்தோடு
              மனதாரப் பேசலாம்.
            </p>


            <div className="heart-box">

              <span className="heart-quote-mark">
                “
              </span>

              <blockquote>
                எனக்கு இது புரியவில்லை.
                <br />
                எனக்கு பயமாக இருக்கிறது.
                <br />
                என்னை வழிநடத்துங்கள்.
                <br />
                என்னால் முடியவில்லை.
              </blockquote>

              <div className="heart-divider" />

              <strong>
                Heart to Heart
              </strong>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          05 — INNER TRANSFORMATION
      ===================================================== */}
      <section className="transformation-section">

        <div className="transformation-image" />

        <div className="transformation-overlay" />

        <div className="transformation-container">

          <div className="transformation-heading">

            <span className="section-number">
              05
            </span>

            <p className="section-eyebrow">
              சத்சங்கத்தின் ஆழமான பயணம்
            </p>

            <h2>
              உள்ளத்தின் மாற்றம்
            </h2>

            <p>
              சத்சங்கம் நம்மை வெளியில் இருந்து மாற்றுவதில்லை.
              அது நம்மை உள்ளிருந்து மாற்றும் ஒரு பயணம்.
            </p>

          </div>


          <div className="transformation-intro">

            <span>முன்பு</span>

            <span className="transformation-line" />

            <span>மாற்றம்</span>

          </div>


          <div className="transformation-list">

            <div className="transformation-row">

              <div className="change-before">
                கோபம்
              </div>

              <div className="change-arrow">
                <span />
              </div>

              <div className="change-after">
                பொறுமை
              </div>

            </div>


            <div className="transformation-row">

              <div className="change-before">
                பொறாமை
              </div>

              <div className="change-arrow">
                <span />
              </div>

              <div className="change-after">
                மகிழ்ச்சி
              </div>

            </div>


            <div className="transformation-row">

              <div className="change-before">
                பயம்
              </div>

              <div className="change-arrow">
                <span />
              </div>

              <div className="change-after">
                நம்பிக்கை
              </div>

            </div>


            <div className="transformation-row">

              <div className="change-before">
                காயம்
              </div>

              <div className="change-arrow">
                <span />
              </div>

              <div className="change-after">
                மன்னிப்பு
              </div>

            </div>


            <div className="transformation-row">

              <div className="change-before">
                தனிமை
              </div>

              <div className="change-arrow">
                <span />
              </div>

              <div className="change-after">
                தெய்வீகத் தொடர்பு
              </div>

            </div>

          </div>


          <div className="grace-message">

            <div className="grace-symbol">
              ॐ
            </div>

            <div>

              <p className="section-eyebrow">
                குருவின் அருள்
              </p>

              <h3>
                நமக்குள் ஏற்கனவே இருக்கும்
                <br />
                ஒளியை நமக்கே காட்டுகிறது.
              </h3>

            </div>

          </div>


          <p className="transformation-ending">
            குணங்கள் மாறும்போது,
            வாழ்க்கையும் மாறத் தொடங்குகிறது.
          </p>

        </div>
      </section>


      {/* =====================================================
          06 — SEVA
      ===================================================== */}
      <section className="story-section seva-section">

        <div className="story-container">

          <div className="story-content">

            <span className="section-number">06</span>

            <p className="section-eyebrow">
              அன்பும் சேவையும்
            </p>

            <h2>
              சேவையே தவம்
            </h2>

            <p>
              தவம் என்பது காட்டுக்குச் சென்று கண்களை
              மூடி அமர்வது மட்டும் அல்ல.
            </p>

            <div className="seva-list">

              <p>
                ஒருவரை காயப்படுத்தாமல் இருப்பதும் தவம்.
              </p>

              <p>
                பிறருடைய வலியைப் புரிந்து கொள்வதும் தவம்.
              </p>

              <p>
                தேவையான இடத்தில் உதவுவதும் தவம்.
              </p>

              <p>
                எந்த எதிர்பார்ப்பும் இல்லாமல்
                சேவை செய்வதும் தவம்.
              </p>

              <p>
                உண்மையான அன்புடன் வாழ்வதும் தவம்.
              </p>

            </div>

            <p className="story-highlight">
              வாழ்க்கையையே ஒரு தியானமாக மாற்றும்
              பாதையை சாய் தபோவனம் நினைவூட்டுகிறது.
            </p>

          </div>


          <div className="story-image">

            <img
              src="/images/gallery/gallery-7.jpeg"
              alt="Devotional service at Sai Tapovan"
            />

          </div>

        </div>
      </section>


      {/* =====================================================
          07 — ORDINARY TO DIVINE
      ===================================================== */}
      <section className="divine-section">

        <div className="divine-image" />

        <div className="divine-overlay" />

        <div className="divine-container">

          <div className="divine-heading">

            <span className="section-number">
              07
            </span>

            <p className="section-eyebrow">
              வாழ்க்கையின் உண்மையான மாற்றம்
            </p>

            <h2>
              சாதாரண வாழ்க்கையிலிருந்து
              <br />
              தெய்வீக வாழ்க்கை
            </h2>

            <div className="divine-divider" />

            <p>
              சாய் தபோவனம் உலக வாழ்க்கையை விட்டுவிட்டு
              ஓடுவதற்கான இடம் அல்ல.
            </p>

            <p>
              மாறாக, உலக வாழ்க்கைக்குள் இருந்தபடியே
              அதை தெய்வீகமாக வாழ கற்றுக்கொள்ளும் இடம்.
            </p>

          </div>


          <div className="divine-journey">

            <div className="journey-item">
              <span className="journey-context">
                குடும்பத்தில்
              </span>
              <strong>அன்பு</strong>
            </div>

            <div className="journey-connector">
              <span />
            </div>

            <div className="journey-item">
              <span className="journey-context">
                உறவுகளில்
              </span>
              <strong>புரிதல்</strong>
            </div>

            <div className="journey-connector">
              <span />
            </div>

            <div className="journey-item">
              <span className="journey-context">
                வாழ்க்கையில்
              </span>
              <strong>நன்றி</strong>
            </div>

            <div className="journey-connector">
              <span />
            </div>

            <div className="journey-item">
              <span className="journey-context">
                செயல்களில்
              </span>
              <strong>சேவை</strong>
            </div>

            <div className="journey-connector">
              <span />
            </div>

            <div className="journey-item">
              <span className="journey-context">
                மனதில்
              </span>
              <strong>நம்பிக்கை</strong>
            </div>

            <div className="journey-connector">
              <span />
            </div>

            <div className="journey-item">
              <span className="journey-context">
                வாழ்வில்
              </span>
              <strong>பொறுமை</strong>
            </div>

          </div>


          <div className="divine-ending">

            <p>
              சத்சங்கத்தில் கிடைக்கும் அமைதி,
              சத்சங்கம் முடிந்த பிறகும்
              நம்முடைய வாழ்க்கையில் தொடர வேண்டும்.
            </p>

            <strong>
              அதுவே உண்மையான சத்சங்கத்தின் பலன்.
            </strong>

          </div>

        </div>
      </section>


      {/* =====================================================
          08 — SMALL SATSANG
      ===================================================== */}
      <section className="small-satsang-section">

        <div className="small-satsang-container">

          <div className="small-satsang-image">

            <img
              src="/images/gallery/gallery-2.jpeg"
              alt="Satsang gathering"
            />

          </div>


          <div className="small-satsang-content">

            <span className="section-number">
              08
            </span>

            <p className="section-eyebrow">
              சிறிய தருணம்
            </p>

            <h2>
              ஒரு சிறிய சத்சங்கம் —
              <br />
              ஒரு பெரிய மாற்றம்
            </h2>

            <p>
              வாழ்க்கையை மாற்றுவதற்கு எப்போதும்
              பெரிய நிகழ்வு தேவையில்லை.
            </p>

            <div className="small-points">

              <span>
                ஒரு சிறிய சத்சங்கம் போதும்.
              </span>

              <span>
                ஒரு நிமிட மௌனம் போதும்.
              </span>

              <span>
                ஒரு உண்மையான பிரார்த்தனை போதும்.
              </span>

              <span>
                ஒரு குருவின் அருள் பார்வை போதும்.
              </span>

            </div>

            <p>
              மாற்றம் உடனடியாகத் தெரியாமல் இருக்கலாம்.
              ஆனால் வாழ்க்கை மெதுவாக மாறும்.
            </p>

            <p className="small-highlight">
              எண்ணங்கள் மாறும்.
              பார்வை மாறும்.
              வார்த்தைகள் மாறும்.
              செயல்கள் மாறும்.
              உறவுகள் மாறும்.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          09 — INVITATION
      ===================================================== */}
      <section className="invitation-section">

        <div className="invitation-image" />

        <div className="invitation-overlay" />

        <div className="invitation-content">

          <span className="section-number">
            09
          </span>

          <p className="section-eyebrow">
            ஒரு அருளான அழைப்பு
          </p>

          <h2>
            சாய் தபோவனம்
          </h2>

          <div className="invitation-om">
            ॐ
          </div>

          <p>
            அந்த வகையில், சாய் தபோவனம் ஒரு இடமாக மட்டும் இல்லாமல்,
            சாதாரண வாழ்க்கையிலிருந்து தெய்வீக வாழ்க்கையை நோக்கி
            செல்லும் ஓர் அருளான அழைப்பாக இருக்கட்டும்.
          </p>

          <p className="invitation-emphasis">
            நம்பிக்கையுடன் இருப்பது போதும்.
            <br />
            பொறுமையுடன் காத்திருப்பது போதும்.
          </p>

          <div className="invitation-values">

            <span>அமைதி</span>
            <span>அன்பு</span>
            <span>சேவை</span>
            <span>சரணாகதி</span>

          </div>

        </div>
      </section>


      {/* =====================================================
          FINAL
      ===================================================== */}
      <section className="satsang-final">

        <div className="final-om">
          ॐ
        </div>

        <p>
          அமைதியில் சாயியை உணர்வோம்.
          <br />
          அன்பில் சாயியை வாழ்வோம்.
          <br />
          சேவையில் சாயியை வெளிப்படுத்துவோம்.
          <br />
          சரணாகதியில் சாயியுடன் ஒன்றாவோம்.
        </p>

        <strong>
          “Sabka Malik Ek”
        </strong>

        <div className="final-links">

          <Link href="/sai-baba">
            சாய்பாபாவைப் பற்றி
          </Link>

          <Link href="/about">
            எங்களைப் பற்றி
          </Link>

        </div>

      </section>

    </main>
  );
}