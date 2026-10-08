import Link from "next/link";
import "./about.css";

export default function AboutPage() {
  return (
    <main className="about-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="about-hero">

  <div className="about-hero-image" />

  <div className="about-hero-overlay" />

  <div className="about-hero-content">

    <p className="about-hero-eyebrow">
      ஸ்ரீ சாய் தபோவனம்
    </p>

    <h1>
      எங்களைப் பற்றி
    </h1>

    <div className="about-hero-line" />

    <p className="about-hero-subtitle">
      ஒரு இடம் மட்டுமல்ல…
      <br />
      ஒரு ஆன்மிகப் பயணம்
    </p>

   

    <p className="about-hero-breadcrumb">
      Home&nbsp; / &nbsp;எங்களைப் பற்றி
    </p>

  </div>
</section>


      {/* =====================================================
          01 — SRI SAI TAPOVAN
      ===================================================== */}
      <section className="about-story-section about-intro-section">

        <div className="about-story-container">

          <div className="about-story-content">

            <span className="about-section-number">
              01
            </span>

            <p className="about-section-eyebrow">
              ஸ்ரீ சாய் தபோவனம்
            </p>

            <h2>
              ஒரு இடம் மட்டுமல்ல…
              <br />
              ஒரு அனுபவம்.
            </h2>

            <p>
              ஸ்ரீ சாய் தபோவனம் அன்பும் எளிமையும்
              நிறைந்த ஒரு புனிதத் தலமாக அமைந்திருக்கிறது.
            </p>

            <p>
              இயற்கையின் அமைதியில் அமர்ந்து,
              வாழ்க்கையின் பரபரப்பிலிருந்து சற்று விலகி,
              நம்முடைய உள்ளத்தின் குரலைக் கேட்கும்
              ஒரு தெய்வீகத் தளம்.
            </p>

            <p>
              இங்கு சத்சங்கம் என்பது வெறும் ஒரு கூடுகை அல்ல.
              அது நம்முடைய உண்மையான இயல்பை மீண்டும்
              உணரச் செய்யும் ஒரு அருள் சூழல்.
            </p>

            <div className="about-highlight">
              சாதாரண வாழ்க்கையிலிருந்து
              தெய்வீக வாழ்க்கையை நோக்கிய
              ஓர் ஆன்மிகப் பயணம்.
            </div>

          </div>


          <div className="about-story-image">

            <img
              src="/images/about/gallery-1.jpeg"
              alt="Sri Sai Tapovan"
            />

          </div>

        </div>
      </section>


      {/* =====================================================
          02 — OUR SPIRITUAL JOURNEY
      ===================================================== */}
      <section className="journey-section">

        <div className="journey-background" />

        <div className="journey-overlay" />

        <div className="journey-container">

          <div className="journey-heading">

            <span className="about-section-number">
              02
            </span>

            <p className="about-section-eyebrow">
              எங்கள் தொடக்கம்
            </p>

            <h2>
              எங்கள் ஆன்மிகப் பயணம்
            </h2>

            <p>
              ஒரு சிறிய பிரார்த்தனையில் தொடங்கி,
              இன்று ஒரு சத்சங்கப் பயணமாக மலர்ந்த கதை.
            </p>

          </div>


          <div className="journey-timeline">

            {/* STEP 01 */}
            <div className="journey-step">

              <div className="journey-step-number">
                01
              </div>

              <div className="journey-step-content">

                <span>
                  தொடக்கம்
                </span>

                <h3>
                  வீட்டில் தொடங்கிய பிரார்த்தனை
                </h3>

                <p>
                  ஆரம்பத்தில் பிரார்த்தனைகள் வீட்டிலேயே
                  நடைபெற்று வந்தன.
                </p>

              </div>

            </div>


            {/* STEP 02 */}
            <div className="journey-step">

              <div className="journey-step-number">
                02
              </div>

              <div className="journey-step-content">

                <span>
                  சத்சங்கம்
                </span>

                <h3>
                  பக்தர்கள் பெருகிய சத்சங்கம்
                </h3>

                <p>
                  காலப்போக்கில் அதிகமான பக்தர்கள்
                  பிரார்த்தனைகளில் கலந்து கொள்ளத் தொடங்கினர்.
                  வீட்டில் அனைவருக்கும் இடமளிப்பது
                  சிரமமாகியது.
                </p>

              </div>

            </div>


            {/* STEP 03 */}
            <div className="journey-step">

              <div className="journey-step-number">
                03
              </div>

              <div className="journey-step-content">

                <span>
                  ஒரு புதிய இடம்
                </span>

                <h3>
                  சாய் தபோவனம்
                </h3>

                <p>
                  அதிகமான பக்தர்கள் ஒன்றாகக் கூடுவதற்காக,
                  ஒரு பெரிய இடம் தேவைப்பட்டது.
                  அந்தத் தேவையிலிருந்து
                  சாய் தபோவனம் உருவானது.
                </p>

              </div>

            </div>


            {/* STEP 04 */}
            <div className="journey-step">

              <div className="journey-step-number">
                04
              </div>

              <div className="journey-step-content">

                <span>
                  சாயியின் திருவுருவம்
                </span>

                <h3>
                  வேப்பமரத்தின் கீழ் சாய்
                </h3>

                <p>
                  ஷிர்டியை நினைவூட்டும் வகையில்,
                  சாயியின் திருவுருவம் வேப்பமரத்தின் கீழ்
                  நிறுவப்பட்டது.
                </p>

              </div>

            </div>


            {/* STEP 05 */}
            <div className="journey-step">

              <div className="journey-step-number">
                05
              </div>

              <div className="journey-step-content">

                <span>
                  ஒரு அடையாளம்
                </span>

                <h3>
                  சேலம் ஷிர்டி
                </h3>

                <p>
                  வேப்பமரத்தின் கீழ் சாயியின் திருவுருவம்
                  அமைந்ததன் மூலம், இந்தப் புனிதத் தலம்
                  “சேலம் ஷிர்டி” என்ற அடையாளத்தைப் பெற்றது.
                </p>

              </div>

            </div>


            {/* STEP 06 */}
            <div className="journey-step journey-final-step">

              <div className="journey-step-number">
                06
              </div>

              <div className="journey-step-content">

                <span>
                  இன்று
                </span>

                <h3>
                  Sai Satsang @ Gurupadam
                </h3>

                <p>
                  இன்று, இந்த ஆன்மிகப் பயணம்
                  <strong>
                    {" "}Sai Satsang @ Gurupadam
                  </strong>
                  {" "}என்ற அடையாளத்துடன்
                  தொடர்கிறது.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          03 — SALEM SHIRDI
      ===================================================== */}
      <section className="about-story-section salem-shirdi-section">

        <div className="about-story-container">

          <div className="about-story-image">

            <img
              src="/images/gallery/gallery-2.jpeg"
              alt="Salem Shirdi"
            />

          </div>


          <div className="about-story-content">

            <span className="about-section-number">
              03
            </span>

            <p className="about-section-eyebrow">
              ஒரு புனிதமான அடையாளம்
            </p>

            <h2>
              சேலம் ஷிர்டி
            </h2>

            <p>
              சாய் தபோவனத்தில் சாயியின் திருவுருவம்
              வேப்பமரத்தின் கீழ் நிறுவப்பட்டது.
            </p>

            <p>
              வேப்பமரம் ஷிர்டியின் ஆன்மிக நினைவுகளை
              நமக்கு ஏற்படுத்தும் ஒரு முக்கியமான அடையாளமாக
              அமைந்தது.
            </p>

            <p>
              இதன் மூலம் இந்த இடம் பக்தர்களிடையே
              “சேலம் ஷிர்டி” என்ற அன்பான அடையாளத்தைப் பெற்றது.
            </p>

            <div className="about-highlight">
              ஷிர்டியின் நினைவைத் தாங்கி,
              சாயியின் அருளுணர்வை அனுபவிக்கும்
              ஒரு புனிதமான இடம்.
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          04 — OUR PURPOSE
      ===================================================== */}
      <section className="purpose-section">

        <div className="purpose-container">

          <div className="purpose-heading">

            <span className="about-section-number">
              04
            </span>

            <p className="about-section-eyebrow">
              எங்கள் நோக்கம்
            </p>

            <h2>
              வாழ்க்கையை மாற்றும்
              <br />
              ஒரு ஆன்மிகப் பயணம்
            </h2>

            <p>
              சத்சங்கம், பக்தி, தியானம் மற்றும் சேவை
              ஆகியவற்றின் மூலம் உள்ளார்ந்த அமைதியையும்
              ஆன்மிக உணர்வையும் வளர்க்கும் சூழலை உருவாக்குவது.
            </p>

          </div>


          <div className="purpose-grid">

            <div className="purpose-item">

              <span className="purpose-icon">
                ॐ
              </span>

              <h3>
                சத்சங்கம்
              </h3>

              <p>
                உண்மையை நோக்கி ஒன்றாகப் பயணிக்கும்
                ஓர் அருளான சூழல்.
              </p>

            </div>


            <div className="purpose-item">

              <span className="purpose-icon">
                ✦
              </span>

              <h3>
                ஆன்மிகம்
              </h3>

              <p>
                நம்முடைய உண்மையான இயல்பை
                உணர்வதற்கான பயணம்.
              </p>

            </div>


            <div className="purpose-item">

              <span className="purpose-icon">
                ♡
              </span>

              <h3>
                அன்பு
              </h3>

              <p>
                எதிர்பார்ப்பில்லாமல் அன்பை வழங்கும்
                வாழ்க்கை.
              </p>

            </div>


            <div className="purpose-item">

              <span className="purpose-icon">
                🙏
              </span>

              <h3>
                சேவை
              </h3>

              <p>
                அன்பையும் கருணையையும் செயல்களின்
                மூலம் வெளிப்படுத்துதல்.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          05 — OUR VISION
      ===================================================== */}
      <section className="vision-section">

        <div className="vision-image" />

        <div className="vision-overlay" />

        <div className="vision-content">

          <span className="about-section-number">
            05
          </span>

          <p className="about-section-eyebrow">
            எங்கள் பார்வை
          </p>

          <h2>
            சாதாரண வாழ்க்கையிலிருந்து
            <br />
            தெய்வீக வாழ்க்கை
          </h2>

          <div className="vision-line" />

          <p>
            உலக வாழ்க்கையை விட்டு விலகுவது அல்ல.
            <br />
            உலக வாழ்க்கையையே அன்பு,
            நன்றி, நம்பிக்கை, பொறுமை மற்றும்
            சேவையுடன் வாழ்வது.
          </p>

          <div className="vision-values">

            <span>அன்பு</span>
            <span>நன்றி</span>
            <span>நம்பிக்கை</span>
            <span>பொறுமை</span>
            <span>சேவை</span>

          </div>

        </div>
      </section>


      {/* =====================================================
          06 — SPIRITUALITY & SERVICE
      ===================================================== */}
      <section className="about-story-section service-section">

        <div className="about-story-container">

          <div className="about-story-content">

            <span className="about-section-number">
              06
            </span>

            <p className="about-section-eyebrow">
              ஆன்மிகமும் சேவையும்
            </p>

            <h2>
              அன்பில் ஆன்மிகம்
              <br />
              சேவையில் வெளிப்பாடு
            </h2>

            <p>
              ஆன்மிகம் என்பது தியானத்தில் மட்டும்
              முடிந்து விடுவதில்லை.
            </p>

            <p>
              நாம் எப்படி வாழ்கிறோம்,
              பிறரை எப்படி நடத்துகிறோம்,
              எவ்வளவு அன்புடன் நடந்து கொள்கிறோம்,
              தேவையான இடத்தில் எப்படி உதவுகிறோம்
              என்பதிலும் ஆன்மிகம் வெளிப்படுகிறது.
            </p>

            <p>
              அதனால் சாய் தபோவனத்தின் ஆன்மிகப் பயணத்தில்
              அன்பும் சேவையும் முக்கியமான இடத்தைப் பெறுகின்றன.
            </p>

            <div className="service-quote">
              <span>“</span>

              <p>
                உண்மையான அன்புடன் வாழ்வதே தவம்.
              </p>

            </div>

          </div>


          <div className="service-image-grid">

            <div className="service-image-main">

              <img
                src="/images/gallery/gallery-4.jpeg"
                alt="Spiritual gathering"
              />

            </div>

            <div className="service-image-small">

              <img
                src="/images/gallery/gallery-6.jpeg"
                alt="Devotional moment"
              />

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          07 — SAI SATSANG @ GURUPADAM
      ===================================================== */}
      <section className="gurupadam-section">

        <div className="gurupadam-background" />

        <div className="gurupadam-overlay" />

        <div className="gurupadam-content">

          <span className="about-section-number">
            07
          </span>

          <p className="about-section-eyebrow">
            எங்கள் தற்போதைய அடையாளம்
          </p>

          <h2>
            Sai Satsang
            <br />
            @ Gurupadam
          </h2>

          <div className="gurupadam-om">
            ॐ
          </div>

          <p>
            ஒரு வீட்டில் தொடங்கிய பிரார்த்தனை,
            பக்தர்களின் சத்சங்கமாக வளர்ந்து,
            சாய் தபோவனமாக மலர்ந்து,
            இன்று Sai Satsang @ Gurupadam
            என்ற ஆன்மிகப் பயணமாக தொடர்கிறது.
          </p>

          <p className="gurupadam-emphasis">
            இடம் மாறலாம்.
            <br />
            பயணம் தொடர்கிறது.
            <br />
            சாயியின் அருள் தொடர்ந்து வழிநடத்தட்டும்.
          </p>

        </div>
      </section>


      {/* =====================================================
    FINAL — SRI SAI TAPOVAN
===================================================== */}

<section className="about-final-section">

  <div className="about-final-container">

    <div className="about-final-om">
      ॐ
    </div>

    <p className="about-final-eyebrow">
      ஸ்ரீ சாய் தபோவனம்
    </p>

    <h2 className="about-final-title">
      ஒரு பிரார்த்தனையில் தொடங்கிய
      <br />
      பயணம்…
      <br />
      ஒரு சத்சங்கமாக தொடர்கிறது.
    </h2>

    <div className="about-final-message">
      <p>நம்பிக்கையுடன் இருப்போம்.</p>
      <p>பொறுமையுடன் காத்திருப்போம்.</p>
      <p>அன்புடன் வாழ்வோம்.</p>
      <p>சேவையில் மலர்வோம்.</p>
    </div>

    <div className="about-final-quote">
      “Sabka Malik Ek”
    </div>

    <div className="about-final-divider" />

    <div className="about-final-links">

      <Link href="/satsang">
        சத்சங்கத்தை அறிய
      </Link>

      <Link href="/sai-baba">
        சாய்பாபாவைப் பற்றி
      </Link>

    </div>

  </div>

</section>

    </main>
  );
}