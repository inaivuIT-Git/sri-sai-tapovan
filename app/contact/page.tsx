import Link from "next/link";
import "./contact.css";

const contactDetails = [
  {
    icon: "📍",
    title: "எங்களைச் சந்திக்க",
    value: "ஸ்ரீ சாய் தபோவனம் ஆன்மிக அறக்கட்டளை",
    description: "புதுப்பட்டி மாரியம்மன் கோவில் தெரு, செட்டிச்சாவடி, சேலம் – 636 008.",
  },
  {
    icon: "📞",
    title: "தொலைபேசியில் தொடர்பு கொள்ள",
    value: "+91 96778 72775",
    description: "ஆலய வருகை மற்றும் ஆன்மிக நிகழ்வுகள் தொடர்பான விசாரணைகளுக்கு.",
    href: "tel:+919677872775",
  },
  {
    icon: "✉️",
    title: "மின்னஞ்சல் அனுப்ப",
    value: "saitapovan2018@gmail.com",
    description: "உங்கள் கேள்விகளையும் கருத்துகளையும் எங்களுடன் பகிரலாம்.",
    href: "mailto:saitapovan2018@gmail.com",
  },
];

const values = ["நம்பிக்கை", "பொறுமை", "அன்பு", "சேவை"];

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero" aria-labelledby="contact-hero-title">
        <div className="contact-hero-image" aria-hidden="true" />
        <div className="contact-hero-overlay" aria-hidden="true" />
        <div className="contact-container contact-hero-content">
          <p className="contact-hero-eyebrow">சாய் சத்சங் @ குருபாதம்</p>
          <h1 id="contact-hero-title">தொடர்புக்கு</h1>
          <span className="contact-hero-line" aria-hidden="true" />
          <p className="contact-hero-subtitle">
            சாயியின் அருளில் இணைவோம்.
            <br className="contact-desktop-break" />
            உங்கள் வருகைக்கும் உரையாடலுக்கும் அன்புடன் வரவேற்கிறோம்.
          </p>
          <div className="contact-hero-actions">
            <a className="contact-button contact-button-primary" href="#location">எங்கள் இருப்பிடத்தைக் காண</a>
            <a className="contact-button contact-button-outline" href="tel:+919677872775">எங்களை அழைக்க</a>
          </div>
        </div>
        <div className="contact-values-strip" aria-label="சத்சங்கத்தின் நான்கு பண்புகள்">
          {values.map((value, index) => (
            <span className="contact-value-item" key={value}>
              {index > 0 && <i aria-hidden="true">·</i>}
              {value}
            </span>
          ))}
        </div>
      </section>

      <section className="contact-intro-section">
        <div className="contact-container contact-intro-grid">
          <div className="contact-intro-heading">
            <p className="contact-eyebrow">உங்களுடன் இணைவதில் மகிழ்ச்சி</p>
            <h2>உங்கள் வருகை<br /><span>எங்களுக்கு மகிழ்ச்சி.</span></h2>
            <span className="contact-rule" aria-hidden="true" />
          </div>
          <div className="contact-intro-copy">
            <p className="contact-lead">
              ஆலயத்தைத் தரிசிக்கவும், ஆன்மிக நிகழ்வுகளைப் பற்றி அறியவும், சாய் சத்சங் @ குருபாதத்துடன் இணைவதற்கும் உங்களை அன்புடன் வரவேற்கிறோம்.
            </p>
            <p>
              அமைதியான ஒரு பிரார்த்தனைக்காகவோ, சத்சங்கத்தில் பங்கேற்கவோ, அல்லது உங்கள் கேள்விகளைப் பகிர்ந்துகொள்ளவோ எங்களைத் தொடர்புகொள்ளலாம். உங்களுக்கு உதவுவதில் மகிழ்ச்சி அடைவோம்.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-details-section" aria-label="தொடர்பு விவரங்கள்">
        <div className="contact-container">
          <div className="contact-section-heading">
            <p className="contact-eyebrow">தொடர்பு விவரங்கள்</p>
            <h2>எங்களை எவ்வாறு அணுகலாம்?</h2>
          </div>
          <div className="contact-details-grid">
            {contactDetails.map((item) => (
              <article className="contact-detail-card" key={item.title}>
                <div className="contact-detail-icon" aria-hidden="true">{item.icon}</div>
                <div className="contact-detail-content">
                  <h3>{item.title}</h3>
                  {item.href ? (
                    <a className="contact-detail-value" href={item.href}>{item.value}</a>
                  ) : (
                    <p className="contact-detail-value">{item.value}</p>
                  )}
                  <p className="contact-detail-description">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-welcome-section">
        <div className="contact-container contact-welcome-grid">
          <div>
            <p className="contact-eyebrow">ஒரு அன்பான அழைப்பு</p>
            <h2>வாருங்கள்…<br /><span>சாயியின் அருளை உணர்வோம்.</span></h2>
          </div>
          <p>
            நம்பிக்கை, பொறுமை, அன்பு மற்றும் சேவையை வாழ்வில் கடைப்பிடிக்கும் ஆன்மிகப் பயணத்தில் ஒன்றிணைவோம். உங்கள் வருகை இந்தச் சத்சங்கத்தின் அன்பான இணைப்பாக இருக்கும்.
          </p>
        </div>
      </section>

      <section className="contact-location-section" id="location">
        <div className="contact-container">
          <div className="contact-location-heading">
            <p className="contact-eyebrow">எங்கள் இருப்பிடம்</p>
            <h2>சேலம் ஷிர்டிக்கு வருகை தருங்கள்</h2>
            <p>
              சாய் சத்சங் @ குருபாதத்தில் சில அமைதியான தருணங்களைப் பகிர்ந்து, பிரார்த்தனையிலும் பக்தியிலும் மனதை ஒன்றிணைக்க உங்களை வரவேற்கிறோம்.
            </p>
          </div>

          <div className="contact-location-grid">
            <div className="contact-address-card">
              <span className="contact-address-symbol" aria-hidden="true">⌖</span>
              <p className="contact-eyebrow">முகவரி</p>
              <h3>ஸ்ரீ சாய் தபோவனம் ஆன்மிக அறக்கட்டளை</h3>
              <p>புதுப்பட்டி மாரியம்மன் கோவில் தெரு,<br />செட்டிச்சாவடி, சேலம் – 636 008.</p>
              <a className="contact-button contact-button-primary" href="https://www.google.com/maps/place/Salem+Shirdi/@11.7236611,78.1510535,17z" target="_blank" rel="noopener noreferrer">வரைபடத்தில் வழியைக் காண</a>
            </div>
            <div className="contact-map-wrapper">
              <iframe
                src="https://www.google.com/maps?q=11.723049,78.150659&z=17&output=embed"
                width="100%"
                height="420"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="சாய் சத்சங் @ குருபாதம் இருப்பிட வரைபடம்"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="contact-closing-section">
        <div className="contact-closing-overlay" aria-hidden="true" />
        <div className="contact-container contact-closing-content">
          <span className="contact-closing-om" aria-hidden="true">ॐ</span>
          <p className="contact-closing-eyebrow">சாயியின் அருளில்</p>
          <h2>அமைதியில் சாயியை உணர்வோம்.<br />அன்பில் சாயியை வாழ்வோம்.</h2>
          <span className="contact-closing-line" aria-hidden="true" />
          <p>நம்பிக்கையுடன் இருப்போம். பொறுமையுடன் சேவை செய்வோம்.</p>
          <div className="contact-closing-actions">
            <Link href="/satsang" className="contact-button contact-button-outline">சத்சங்கத்தை அறிய</Link>
            <Link href="/sai-baba" className="contact-button contact-button-outline">சாய்பாபாவைப் பற்றி</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
