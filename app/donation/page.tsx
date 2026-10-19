import Link from "next/link";
import "./donation.css";

export default function DonationPage() {
  return (
    <main className="donation-page">
      <section className="donation-hero">
        <div className="donation-hero-image" aria-hidden="true" />
        <div className="donation-hero-overlay" aria-hidden="true" />
        <div className="donation-container donation-hero-inner">
          <p className="donation-eyebrow donation-hero-eyebrow">சாய் சத்சங் @ குருபாதம்</p>
          <h1>தட்சிணை</h1>
          <span className="donation-rule" aria-hidden="true" />
          <p className="donation-hero-subtitle">பக்தியுடன் அளிக்கும் ஒரு அர்ப்பணிப்பு</p>
          <div className="donation-hero-actions">
            <a className="donation-button donation-button-primary" href="#donation-details">அர்ப்பணிப்பு விவரங்கள்</a>
            <Link className="donation-button donation-button-outline" href="/satsang">சத்சங்கத்தை அறிய</Link>
          </div>
        </div>
        <div className="donation-hero-bottomline" role="group" aria-label="நம்பிக்கை, பொறுமை, அன்பு, சேவை">
          <span>நம்பிக்கை</span><i aria-hidden="true" />
          <span>பொறுமை</span><i aria-hidden="true" />
          <span>அன்பு</span><i aria-hidden="true" />
          <span>சேவை</span>
        </div>
      </section>

      <section className="donation-intro donation-section">
        <div className="donation-container donation-intro-grid">
          <div className="donation-section-heading">
            <p className="donation-eyebrow">சாய் சச்சரித்ரத்தின் அடிப்படையில்</p>
            <h2>சாய்பாபாவின்<br />தட்சிணை</h2>
            <span className="donation-rule" aria-hidden="true" />
            <p className="donation-muted-note">தட்சிணை என்பது பணத்தைத் தாண்டிய ஓர் ஆன்மிக அர்ப்பணிப்பு.</p>
          </div>
          <div className="donation-copy">
            <p className="donation-lead">ஸ்ரீ சாய்பாபா தமக்காக ஒருபோதும் தட்சிணை கேட்கவில்லை.</p>
            <p>பக்தர்களின் மனதைத் தூய்மைப்படுத்தவும், பற்றையும் அகங்காரத்தையும் நீக்கவும், தானம், தியாகம், பக்தி, சரணாகதி போன்ற உயர்ந்த குணங்களை வளர்க்கவுமே தட்சிணையைப் பெற்றார்.</p>
            <p>பக்தர்களிடமிருந்து பெற்ற தட்சிணையில், தமக்காக மிகச் சிறிதளவே பயன்படுத்தி, மீதமிருந்த அனைத்தையும் ஏழைகள், எளியோர் மற்றும் தேவையுள்ளவர்களுக்குத் தானமாக வழங்கினார்.</p>
            <p>ஷிர்டி சன்ஸ்தானத்தில் இருந்த பொருட்கள், அலங்காரங்கள், மற்ற உபகரணங்கள் எல்லாம், ராதா-கிருஷ்ண மாய் அவர்களின் ஆலோசனைக்கும் வேண்டுகோளுக்கும் ஏற்ப, செல்வந்த பக்தர்களால் வழங்கப்பட்டவையே.</p>
          </div>
        </div>
      </section>

      <section className="donation-quote-section">
        <div className="donation-quote-image" aria-hidden="true" />
        <div className="donation-quote-overlay" aria-hidden="true" />
        <div className="donation-container donation-quote-inner">
          <p className="donation-eyebrow">பாபாவின் வார்த்தைகள்</p>
          <span className="donation-quote-mark" aria-hidden="true">“</span>
          <blockquote>
            நான் யாரிடமும் காரணமில்லாமல் தட்சிணை கேட்பதில்லை. ஃபகீர் யாரைக் காட்டுகிறாரோ, அவர்களிடம்தான் கேட்கிறேன். நான் ஒருவரிடமிருந்து ஒரு ரூபாய் தட்சிணை பெற்றால், அவருக்கு நூறு மடங்கு திருப்பிக் கொடுக்க வேண்டிய கடன் எனக்கு உண்டு.
          </blockquote>
          <p className="donation-quote-source">— பாபா</p>
        </div>
      </section>

      <section className="donation-meaning donation-section">
        <div className="donation-container">
          <div className="donation-heading-block">
            <p className="donation-eyebrow">தட்சிணையின் உண்மையான பொருள்</p>
            <h2>ஒரு அர்ப்பணிப்பு. ஒரு ஆன்மிகப் பயணம்.</h2>
            <p className="donation-heading-copy">தட்சிணை என்பது வெறும் பணமோ பொருளோ அல்ல; அது குருவின் மீது கொண்ட நம்பிக்கை, பக்தி மற்றும் முழுமையான அர்ப்பணிப்பின் வெளிப்பாடு.</p>
          </div>
          <div className="donation-offerings">
            <article className="donation-offering">
              <span className="donation-offering-symbol" aria-hidden="true">◉</span>
              <h3>பணம்</h3>
              <p>ஒருவரால் இயன்றதை பக்தியுடன் அர்ப்பணிக்கலாம்.</p>
            </article>
            <article className="donation-offering">
              <span className="donation-offering-symbol" aria-hidden="true">✧</span>
              <h3>பொருள்</h3>
              <p>தேவையான பொருட்களையும் அர்ப்பணிக்கலாம்.</p>
            </article>
            <article className="donation-offering">
              <span className="donation-offering-symbol" aria-hidden="true">♡</span>
              <h3>அன்னதானம்</h3>
              <p>அன்னதானத்தின் மூலம் சேவையை வெளிப்படுத்தலாம்.</p>
            </article>
            <article className="donation-offering">
              <span className="donation-offering-symbol" aria-hidden="true">ॐ</span>
              <h3>சேவை</h3>
              <p>தன்னால் இயன்ற சேவையையும் அர்ப்பணிக்கலாம்.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="donation-faith donation-section">
        <div className="donation-container donation-faith-grid">
          <div className="donation-faith-image-wrap">
            <img src="/images/gallery/gallery-6.jpeg" alt="சாய் வழிபாட்டில் பக்தர்கள்" />
            <span className="donation-image-caption">நம்பிக்கையும் பொறுமையும்</span>
          </div>
          <div className="donation-faith-content">
            <p className="donation-eyebrow">உண்மையான தட்சிணை</p>
            <h2>ஸ்ரத்தா <span>•</span> சபூரி</h2>
            <p className="donation-lead">எதையும் அர்ப்பணிக்க இயலாத நிலையிலும் வருந்த வேண்டியதில்லை.</p>
            <p>ஏனெனில், பாபா நம்மிடம் எதிர்பார்க்கும் உயர்ந்த தட்சிணை <strong>ஸ்ரத்தா (நம்பிக்கை)</strong> மற்றும் <strong>சபூரி (பொறுமை)</strong> ஆகிய இரு தெய்வீக குணங்களே.</p>
            <div className="donation-faith-cards">
              <article>
                <h3>ஸ்ரத்தா</h3>
                <p>குருவின் மீதும், அவர் காட்டும் ஆன்மிகப் பாதையின் மீதும் மனப்பூர்வமான நம்பிக்கையுடன் இருப்பது.</p>
              </article>
              <article>
                <h3>சபூரி</h3>
                <p>வாழ்க்கையின் சூழ்நிலைகள் எப்படியிருந்தாலும் பொறுமையுடன் இருந்து, குருவின் வழிகாட்டுதலின் மீது நம்பிக்கை வைத்திருப்பது.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="donation-surrender donation-section">
        <div className="donation-container donation-surrender-grid">
          <div className="donation-section-heading">
            <p className="donation-eyebrow">சரணாகதி</p>
            <h2>குருவின் திருவடிகளில் சரணடைதல்</h2>
            <span className="donation-rule" aria-hidden="true" />
          </div>
          <div className="donation-copy">
            <p>இந்த இரு தட்சிணைகளையும் வாழ்வில் கடைப்பிடித்து, குருவின் திருவடிகளில் சரணடைவதே உண்மையான சரணாகதி.</p>
            <p>அதுவே தன்னை உணரும் ஞானத்திற்கும், ஆன்மிக முன்னேற்றத்திற்கும், பிறப்பு-இறப்பு சுழற்சியிலிருந்து விடுதலைக்கும் வழிகாட்டுகிறது.</p>
            <p className="donation-highlight">நம்பிக்கையுடன் இருப்போம். பொறுமையுடன் காத்திருப்போம்.</p>
          </div>
        </div>
      </section>

      <section className="donation-invitation">
        <div className="donation-container donation-invitation-inner">
          <span className="donation-invitation-om" aria-hidden="true">ॐ</span>
          <p className="donation-eyebrow">ஒரு அன்பான அழைப்பு</p>
          <h2>சாய் சத்சங் @ குருபாதம்</h2>
          <p>இந்த தெய்வீகப் பயணத்தில் இணைந்து, நம்பிக்கை, அன்பு மற்றும் சேவையின் வழியில் பயணிக்க அன்புடன் அழைக்கிறோம்.</p>
        </div>
      </section>

      <section className="donation-details donation-section" id="donation-details">
        <div className="donation-container">
          <div className="donation-details-heading">
            <p className="donation-eyebrow">தட்சிணை / திருப்பணி</p>
            <h2>உங்கள் அர்ப்பணிப்பு</h2>
            <p>உங்களால் இயன்ற அர்ப்பணிப்பை பக்தியுடன் வழங்கலாம்.</p>
          </div>

          <div className="donation-details-grid">
            <div className="donation-bank-card">
              <div className="donation-trust-details">
                <p className="donation-bank-label">Trust information</p>
                <h3>Sri Sai Tapovan Spiritual Trust</h3>
                <p className="donation-trust-tamil">ஸ்ரீ ராம ஜெயம்</p>
                <p><strong>Reg. No:</strong> 37/2025</p>
                <p>Puddhupatti Mariamman Kovil Street,<br />Chettichavady, Salem - 636 008.</p>
                <p><strong>Mobile:</strong> <a href="tel:9677872775">96778 72775</a></p>
              </div>
              <div className="donation-bank-divider" />
              <p className="donation-bank-label">வங்கி விவரங்கள்</p>
              <div className="donation-bank-row">
                <span>Account Name</span>
                <strong>002922010002012</strong>
              </div>
              <div className="donation-bank-row">
                <span>Account Number</span>
                <strong>SRI SAI TAPOVAN SPIRITUAL TRUST</strong>
              </div>
              <div className="donation-bank-row">
                <span>IFSC Code</span>
                <strong>UBIN0900290</strong>
              </div>
            </div>

            <aside className="donation-qr-card">
              <p className="donation-eyebrow">விரைவான அர்ப்பணிப்பு</p>
              <h3>QR மூலம் அர்ப்பணிக்க</h3>
              <p className="donation-qr-subtitle">Scan &amp; Contribute</p>
              <div className="donation-qr-frame">
                <img src="/images/donation/donation-qr.png" alt="Sri Sai Tapovan Spiritual Trust Donation QR Code" />
              </div>
              <p className="donation-qr-note">பணம் செலுத்துவதற்கு முன் பெறுநர் விவரங்களை சரிபார்க்கவும்.</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="donation-final">
        <div className="donation-container donation-final-inner">
          <span className="donation-final-om" aria-hidden="true">ॐ</span>
          <p className="donation-final-eyebrow">இந்த தெய்வீகப் பயணத்தில்</p>
          <h2>நம்பிக்கையுடன்<br />சேவை செய்வோம்.</h2>
          <span className="donation-rule" aria-hidden="true" />
          <p className="donation-final-note">பக்தியுடன் அளிக்கும் ஒவ்வொரு அர்ப்பணிப்பும் ஒரு சேவையாகிறது.</p>
        </div>
      </section>
    </main>
  );
}
