import Link from "next/link";
import "./about.css";

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* PAGE BANNER */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">
          <p>WHO WE ARE</p>
          <h1>About Our Trust</h1>

          <div className="about-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="about-intro">
        <div className="about-container about-intro-grid">
          <div className="about-image">
            <div className="about-image-placeholder">
              <img
                src="/images/about/image-1.jpg"
                alt="Sri Sai Tapovan Spiritual Trust"
              />
            </div>
          </div>

          <div className="about-content">
            <p className="about-label">SRI SAI TAPOVAN</p>

            <h2>
              A Sacred Space for
              <span> Faith, Peace & Service</span>
            </h2>

            <div className="about-line"></div>

            <p>
              Sri Sai Tapovan Spiritual Trust is a spiritual and charitable
              organisation dedicated to the teachings and values of Shirdi Sai
              Baba.
            </p>

            <p>
              The Trust provides a peaceful spiritual environment where devotees
              can come together for prayer, worship, meditation and spiritual
              gatherings.
            </p>

            <p>
              Inspired by Sai Baba&apos;s message of faith, patience, love,
              compassion and service to humanity, the Trust strives to bring
              people together beyond differences of religion, community and
              social background.
            </p>

            <div className="about-quote">
              <span>“</span>

              <p>
                Our spiritual journey is guided by faith, strengthened by
                patience and expressed through service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="vision-section">
        <div className="about-container">
          <div className="about-section-heading">
            <p className="about-label">OUR PURPOSE</p>
            <h2>Vision & Mission</h2>

            <p>
              Creating a spiritual community rooted in devotion, compassion and
              selfless service.
            </p>
          </div>

          <div className="vision-grid">
            <article className="vision-card">
              <div className="vision-number">01</div>

              <div className="vision-icon">ॐ</div>

              <h3>Our Vision</h3>

              <p>
                To create a peaceful spiritual environment where individuals and
                families can strengthen their faith, experience inner peace and
                follow the timeless teachings of Shirdi Sai Baba.
              </p>
            </article>

            <article className="vision-card">
              <div className="vision-number">02</div>

              <div className="vision-icon">🙏</div>

              <h3>Our Mission</h3>

              <p>
                To promote devotion, spiritual awareness, unity and
                compassionate service through prayer, spiritual programmes,
                community activities and charitable initiatives.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="core-values">
        <div className="about-container">
          <div className="about-section-heading">
            <p className="about-label">WHAT GUIDES US</p>
            <h2>Our Core Values</h2>
          </div>

          <div className="core-values-grid">
            <article className="core-value">
              <div className="core-value-icon">ॐ</div>
              <h3>Faith</h3>
              <p>
                Trusting in the divine and walking the spiritual path with
                sincerity and devotion.
              </p>
            </article>

            <article className="core-value">
              <div className="core-value-icon">⌛</div>
              <h3>Patience</h3>
              <p>
                Facing every stage of life with patience, understanding and
                inner strength.
              </p>
            </article>

            <article className="core-value">
              <div className="core-value-icon">♡</div>
              <h3>Compassion</h3>
              <p>
                Treating every individual with kindness, dignity, respect and
                understanding.
              </p>
            </article>

            <article className="core-value">
              <div className="core-value-icon">🤲</div>
              <h3>Service</h3>
              <p>
                Serving humanity selflessly and extending support to those in
                need.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="activities-section">
        <div className="about-container activities-grid">
          <div className="activities-content">
            <p className="about-label">OUR ACTIVITIES</p>

            <h2>Devotion Through Prayer & Service</h2>

            <div className="about-line"></div>

            <p>
              Sri Sai Tapovan Spiritual Trust conducts spiritual and community
              activities that encourage devotion, fellowship and service.
            </p>

            <div className="activity-list">
              <div className="activity-item">
                <span>01</span>
                <div>
                  <h3>Daily Worship & Aarti</h3>
                  <p>
                    Regular prayer and worship dedicated to Shirdi Sai Baba.
                  </p>
                </div>
              </div>

              <div className="activity-item">
                <span>02</span>
                <div>
                  <h3>Bhajans & Spiritual Programmes</h3>
                  <p>
                    Devotional gatherings bringing devotees together in prayer
                    and remembrance.
                  </p>
                </div>
              </div>

              <div className="activity-item">
                <span>03</span>
                <div>
                  <h3>Festival Celebrations</h3>
                  <p>
                    Special prayers and programmes during important spiritual
                    occasions.
                  </p>
                </div>
              </div>

              <div className="activity-item">
                <span>04</span>
                <div>
                  <h3>Annadanam & Seva</h3>
                  <p>
                    Supporting community service and food distribution
                    activities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="activities-image">
            <div className="activities-placeholder">
              <img
                src="/images/about/image-1.jpg"
                alt="Sri Sai Tapovan Spiritual Trust"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SHRADDHA SABURI */}
      <section className="shraddha-section">
        <div className="shraddha-decoration">ॐ</div>

        <div className="about-container shraddha-content">
          <p>THE PATH SHOWN BY SAI BABA</p>

          <h2>Shraddha & Saburi</h2>

          <div className="shraddha-words">
            <div>
              <strong>Shraddha</strong>
              <span>Faith</span>
            </div>

            <div className="shraddha-divider"></div>

            <div>
              <strong>Saburi</strong>
              <span>Patience</span>
            </div>
          </div>

          <p className="shraddha-description">
            Faith and patience remain at the heart of our spiritual journey and
            inspire the activities of Sri Sai Tapovan Spiritual Trust.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="about-container about-cta-inner">
          <div>
            <p className="about-label">VISIT SRI SAI TAPOVAN</p>
            <h2>Come, Pray & Experience Peace</h2>

            <p>
              We welcome devotees and visitors to join our prayers, spiritual
              programmes and temple events.
            </p>
          </div>

          <div className="about-cta-buttons">
            <Link href="/calendar" className="about-primary-btn">
              View Events
            </Link>

            <Link href="/contact" className="about-outline-btn">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
