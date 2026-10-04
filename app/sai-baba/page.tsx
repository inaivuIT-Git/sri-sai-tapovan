import Link from "next/link";
import "./sai-baba.css";

export default function SaiBabaPage() {
  return (
    <main className="sai-page">
      {/* PAGE HERO */}
      <section className="sai-hero">
        <div className="sai-hero-content">
          <p>SHRADDHA · SABURI</p>

          <h1>Shirdi Sai Baba</h1>

          <div className="sai-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Sai Baba</span>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="sai-intro">
        <div className="sai-container sai-intro-grid">
          <div className="sai-image">
            <div className="sai-image-placeholder">
              <img src="/images/sai-baba/image-1.jpg" alt="Shirdi Sai Baba" />
            </div>
          </div>

          <div className="sai-intro-content">
            <p className="sai-label">THE SAINT OF SHIRDI</p>

            <h2>
              A Life of Love,
              <span> Faith & Compassion</span>
            </h2>

            <div className="sai-line"></div>

            <p>
              Shirdi Sai Baba is revered by millions of devotees as a spiritual
              master whose life and teachings emphasised love, compassion,
              faith, patience and service to humanity.
            </p>

            <p>
              Baba lived a simple life in the village of Shirdi and welcomed
              people from every religion and social background. His teachings
              encouraged devotees to look beyond differences and recognise the
              presence of the Divine in every living being.
            </p>

            <p>
              His message continues to inspire devotees throughout the world to
              live with faith, humility, kindness and concern for others.
            </p>

            <div className="sai-intro-quote">
              <span>“</span>

              <div>
                <strong>Sabka Malik Ek</strong>
                <p>One God governs all.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HISTORY */}
      <section className="sai-history">
        <div className="sai-container">
          <div className="sai-section-heading">
            <p className="sai-label">HIS JOURNEY</p>
            <h2>The Life of Sai Baba</h2>

            <p>
              Sai Baba&apos;s life in Shirdi became a timeless example of
              simplicity, devotion, compassion and spiritual wisdom.
            </p>
          </div>

          <div className="history-timeline">
            <article className="history-item">
              <div className="history-marker">01</div>

              <div className="history-content">
                <p className="history-small">EARLY YEARS</p>
                <h3>The Young Saint</h3>

                <p>
                  Details about Sai Baba&apos;s birth and early life remain
                  uncertain. He rarely spoke about his origins, family or
                  birthplace, and this mystery became part of his remarkable
                  spiritual story.
                </p>

                <p>
                  He appeared in Shirdi as a young ascetic and was noticed
                  meditating beneath a neem tree. Even at a young age, his
                  disciplined and contemplative life attracted the attention of
                  the villagers.
                </p>
              </div>
            </article>

            <article className="history-item">
              <div className="history-marker">02</div>

              <div className="history-content">
                <p className="history-small">SHIRDI</p>
                <h3>Arrival in Shirdi</h3>

                <p>
                  Sai Baba eventually made Shirdi his home. He lived simply and
                  gradually became known among the villagers and visitors for
                  his spiritual wisdom, compassion and concern for those who
                  approached him.
                </p>

                <p>
                  People from different communities began visiting Baba for
                  guidance, comfort and blessings.
                </p>
              </div>
            </article>

            <article className="history-item">
              <div className="history-marker">03</div>

              <div className="history-content">
                <p className="history-small">DWARKAMAI</p>
                <h3>Life in the Mosque</h3>

                <p>
                  Sai Baba lived for many years in an old mosque in Shirdi,
                  which later became known as Dwarkamai.
                </p>

                <p>
                  Dwarkamai became a place where people gathered around Baba
                  regardless of religion, caste, wealth or social position. He
                  listened to their concerns, offered guidance and encouraged
                  them to live with faith and patience.
                </p>
              </div>
            </article>

            <article className="history-item">
              <div className="history-marker">04</div>

              <div className="history-content">
                <p className="history-small">SERVICE</p>
                <h3>Compassion for All</h3>

                <p>
                  Feeding the hungry and helping people in need were important
                  expressions of Baba&apos;s compassion. He taught that serving
                  others was itself a form of worship.
                </p>

                <p>
                  Baba also showed kindness towards animals and encouraged
                  devotees to treat all living beings with respect and
                  compassion.
                </p>
              </div>
            </article>

            <article className="history-item">
              <div className="history-marker">05</div>

              <div className="history-content">
                <p className="history-small">1918</p>
                <h3>Mahasamadhi</h3>

                <p>
                  Sai Baba remained in Shirdi until his Mahasamadhi in 1918. His
                  physical presence ended, but his teachings and spiritual
                  influence continued through generations of devotees.
                </p>

                <p>
                  Shirdi subsequently became one of India&apos;s major places of
                  pilgrimage, welcoming devotees from across the world.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* TEACHINGS */}
      <section className="teachings-section">
        <div className="sai-container">
          <div className="sai-section-heading">
            <p className="sai-label">TIMELESS WISDOM</p>
            <h2>Teachings of Sai Baba</h2>

            <p>
              Baba&apos;s teachings were simple, practical and centred on living
              a life of faith, compassion and service.
            </p>
          </div>

          <div className="teachings-grid">
            <article className="teaching-card">
              <div className="teaching-icon">ॐ</div>
              <h3>Faith</h3>
              <span>Shraddha</span>
              <p>
                Place sincere faith in the Divine and continue on the spiritual
                path with trust and devotion.
              </p>
            </article>

            <article className="teaching-card">
              <div className="teaching-icon">⌛</div>
              <h3>Patience</h3>
              <span>Saburi</span>
              <p>
                Face life with patience and remain steady even during
                difficulties and uncertainty.
              </p>
            </article>

            <article className="teaching-card">
              <div className="teaching-icon">♡</div>
              <h3>Compassion</h3>
              <span>Love</span>
              <p>
                Treat every person and living being with kindness, dignity and
                understanding.
              </p>
            </article>

            <article className="teaching-card">
              <div className="teaching-icon">🤲</div>
              <h3>Service</h3>
              <span>Seva</span>
              <p>
                Helping the hungry, poor and those in need is a meaningful
                expression of devotion.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* UNITY */}
      <section className="unity-section">
        <div className="sai-container unity-content">
          <p>ONE DIVINE · MANY PATHS</p>

          <h2>Sabka Malik Ek</h2>

          <div className="unity-line"></div>

          <p className="unity-description">
            Sai Baba welcomed people of different religions and backgrounds. His
            life reminded devotees that spiritual truth rises above divisions
            and that humanity is united by the same Divine presence.
          </p>
        </div>
      </section>

      {/* SHRADDHA SABURI */}
      <section className="faith-section">
        <div className="sai-container faith-grid">
          <div className="faith-item">
            <span>श्रद्धा</span>
            <h3>Shraddha</h3>
            <p>Faith</p>
          </div>

          <div className="faith-symbol">ॐ</div>

          <div className="faith-item">
            <span>सबुरी</span>
            <h3>Saburi</h3>
            <p>Patience</p>
          </div>
        </div>

        <p className="faith-message">
          Two simple principles that continue to guide millions of Sai devotees
          around the world.
        </p>
      </section>

      {/* CTA */}
      <section className="sai-cta">
        <div className="sai-container sai-cta-inner">
          <div>
            <p className="sai-label">SRI SAI TAPOVAN</p>
            <h2>Walk the Path of Faith & Service</h2>

            <p>
              Join us for prayers, spiritual programmes and upcoming events at
              Sri Sai Tapovan Spiritual Trust.
            </p>
          </div>

          <div className="sai-cta-buttons">
            <Link href="/calendar" className="sai-primary-btn">
              View Events
            </Link>

            <Link href="/contact" className="sai-outline-btn">
              Visit Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
