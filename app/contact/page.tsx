import "./contact.css";

const contactDetails = [
  {
    icon: "📍",
    title: "Visit Us",
    value: "Sri Sai Tapovan Spiritual Trust",
    description: "Temple & Spiritual Centre",
  },
  {
    icon: "📞",
    title: "Call Us",
    value: "+91 XXXXX XXXXX",
    description: "For temple and spiritual enquiries",
  },
  {
    icon: "✉️",
    title: "Email Us",
    value: "info@srisaitapovan.org",
    description: "We would be happy to hear from you",
  },
];

export default function ContactPage() {
  return (
    <main className="contact-page">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="contact-hero">
        <div className="contact-hero-content">
          <p className="contact-eyebrow">SRI SAI TAPOVAN SPIRITUAL TRUST</p>

          <h1>Contact Us</h1>

          <div className="contact-hero-divider">
            <span>ॐ</span>
          </div>

          <p className="contact-breadcrumb">Home&nbsp; / &nbsp;Contact</p>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="contact-intro-section">
        <div className="contact-container">
          <div className="contact-intro-content">
            <p className="contact-label">CONNECT WITH US</p>

            <h2>
              We Would Be Happy
              <br />
              <span>To Hear From You</span>
            </h2>

            <p>
              Whether you would like to visit the temple, learn more about our
              spiritual activities, or connect with Sri Sai Tapovan Spiritual
              Trust, we welcome you with warmth and devotion.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT DETAILS
      ===================================================== */}

      <section className="contact-details-section">
        <div className="contact-container">
          <div className="contact-details-grid">
            {contactDetails.map((item) => (
              <div className="contact-detail-card" key={item.title}>
                <div className="contact-detail-icon">{item.icon}</div>

                <div className="contact-detail-content">
                  <h3>{item.title}</h3>

                  <p className="contact-detail-value">{item.value}</p>

                  <p className="contact-detail-description">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          GET IN TOUCH
      ===================================================== */}

      <section className="contact-message-section">
        <div className="contact-container">
          <div className="contact-message-box">
            <div>
              <p className="contact-label">GET IN TOUCH</p>

              <h2>
                Connect With
                <br />
                Sri Sai Tapovan
              </h2>
            </div>

            <p>
              For enquiries about temple activities, spiritual programmes,
              special celebrations and other Trust activities, please feel free
              to contact us.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          VISIT + MAP
      ===================================================== */}

      <section className="contact-location-section">
        <div className="contact-container">
          <div className="contact-location-content">
            <p className="contact-label">FIND US</p>

            <h2>Visit Sri Sai Tapovan</h2>

            <p>
              We welcome you to visit Sri Sai Tapovan, spend a peaceful moment
              in prayer and experience the spiritual atmosphere of the Trust.
            </p>

            <div className="contact-location-info">
              <div className="contact-location-info-icon">📍</div>

              <div>
                <h3>Temple Location</h3>

                <p>Salem Shirdi</p>
              </div>
            </div>
          </div>

          {/* GOOGLE MAP */}

          <div className="contact-map-wrapper">
            <iframe
              src="https://www.google.com/maps?q=11.723049,78.150659&z=17&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Sri Sai Tapovan Spiritual Trust Location"
            />
          </div>

          <div className="contact-map-link">
            <a
              href="https://www.google.com/maps/place/Salem+Shirdi/@11.7236611,78.1510535,3a,75y/data=!3m8!1e2!3m6!1sCIABIhAGbzaquDWLeWf6KBAABuC2!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FANWiy9SZMGWIDCB0c5trt9xoWa6RCKal0h7iNfzYsUH9i_44CyfaCgioo70JEGwOSxpR8DYdiCDpsUq8L1xU6W_oL_V-0PztkurEc3TUV3NhZbb-gxkV8ofAgRe81IZqsvwm_BaZ4rn78DcPfOxk%3Dw203-h270-k-no!7i3492!8i4656!4m9!3m8!1s0x3babf100079753fd:0x78b37ed82b5b138d!8m2!3d11.723049!4d78.150659!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11wx2zj7j9!18m1!1e1"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Larger Map
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="contact-cta">
        <div className="contact-container">
          <div className="contact-cta-inner">
            <div>
              <p className="contact-label">EVERYONE IS WELCOME</p>

              <h2>
                Come With Faith.
                <br />
                Leave With Peace.
              </h2>

              <p>
                May the blessings of Sai Baba guide every step of your spiritual
                journey.
              </p>
            </div>

            <a href="/sai-baba" className="contact-cta-button">
              Discover Sai Baba
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
