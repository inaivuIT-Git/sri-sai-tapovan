import Link from "next/link";
import "./home.css";
const homeGalleryImages = [
  {
    image: "gallery-1.jpeg",
    category: "Temple",
    title: "Temple",
  },
  {
    image: "gallery-3.jpeg",
    category: "Pooja & Aarti",
    title: "Daily Aarti",
  },
  {
    image: "gallery-5.jpeg",
    category: "Festivals",
    title: "Festival Celebration",
  },
  {
    image: "gallery-7.jpeg",
    category: "Devotional Moments",
    title: "Moments of Devotion",
  },
];

export default function Home() {
  return (
    <main>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero">

        <div className="hero-content">

          <p className="hero-small">
            Welcome to
          </p>

          <h1>
            Sri Sai Tapovan
            <span>Spiritual Trust</span>
          </h1>

          <div className="hero-line"></div>

          <p className="hero-description">
            A sacred space dedicated to devotion, spiritual growth,
            compassionate service and the timeless teachings of
            Shirdi Sai Baba.
          </p>

          <div className="hero-buttons">

            <Link
              href="/about"
              className="primary-btn"
            >
              Discover Our Trust
            </Link>

            <Link
              href="/calendar"
              className="secondary-btn"
            >
              Upcoming Events
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          WELCOME
      ===================================================== */}

      <section className="welcome-section">

        <div className="section-container welcome-grid">

          <div className="welcome-image">

            <div className="image-placeholder">

              <img
                src="/images/hero/sai-baba.jpeg"
                alt="Shirdi Sai Baba"
              />

            </div>

          </div>


          <div className="welcome-content">

            <p className="section-label">
              WELCOME
            </p>

            <h2>
              A Place of Faith, Peace & Service
            </h2>

            <div className="small-line"></div>

            <p>
              Sri Sai Tapovan Spiritual Trust is a spiritual and
              charitable organisation inspired by the divine teachings
              of Shirdi Sai Baba.
            </p>

            <p>
              The Trust provides a peaceful place for devotees to
              gather, pray and participate in spiritual activities
              while encouraging compassion, unity and service to
              humanity.
            </p>

            <Link
              href="/about"
              className="text-link"
            >
              Learn more about our Trust →
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          OUR PATH
      ===================================================== */}

      <section className="values-section">

        <div className="section-heading">

          <p className="section-label">
            OUR PATH
          </p>

          <h2>
            Faith · Devotion · Service
          </h2>

          <p>
            Guided by the teachings of Sai Baba, we strive to create
            a community rooted in faith, compassion and selfless
            service.
          </p>

        </div>


        <div className="values-grid section-container">

          <div className="value-card">

            <div className="value-icon">
              ॐ
            </div>

            <h3>
              Spirituality
            </h3>

            <p>
              Creating a peaceful environment for prayer, meditation
              and spiritual growth.
            </p>

          </div>


          <div className="value-card">

            <div className="value-icon">
              🙏
            </div>

            <h3>
              Devotion
            </h3>

            <p>
              Following the teachings of Sai Baba through faith,
              patience and devotion.
            </p>

          </div>


          <div className="value-card">

            <div className="value-icon">
              ♡
            </div>

            <h3>
              Service
            </h3>

            <p>
              Serving people with compassion and supporting
              charitable activities.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          EVENTS
      ===================================================== */}

      <section className="events-section">

        <div className="section-container">

          <div className="events-header">

            <div>

              <p className="section-label">
                TEMPLE CALENDAR
              </p>

              <h2>
                Upcoming Events
              </h2>

            </div>

            <Link href="/calendar">
              View Full Calendar →
            </Link>

          </div>


          <div className="events-grid">

            <article className="event-card">

              <div className="event-date">

                <strong>
                  15
                </strong>

                <span>
                  OCT
                </span>

              </div>


              <div className="event-details">

                <span>
                  Temple Event
                </span>

                <h3>
                  Special Sai Baba Pooja
                </h3>

                <p>
                  6:00 PM onwards
                </p>

              </div>

            </article>


            <article className="event-card">

              <div className="event-date">

                <strong>
                  22
                </strong>

                <span>
                  OCT
                </span>

              </div>


              <div className="event-details">

                <span>
                  Spiritual Gathering
                </span>

                <h3>
                  Bhajan & Prayer
                </h3>

                <p>
                  6:30 PM onwards
                </p>

              </div>

            </article>


            <article className="event-card">

              <div className="event-date">

                <strong>
                  30
                </strong>

                <span>
                  OCT
                </span>

              </div>


              <div className="event-details">

                <span>
                  Seva
                </span>

                <h3>
                  Annadanam
                </h3>

                <p>
                  12:00 PM onwards
                </p>

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          QUOTE
      ===================================================== */}

      <section className="quote-section">

        <div className="quote-symbol">
          “
        </div>

        <blockquote>
          Faith and patience guide the devotee towards peace,
          compassion and spiritual awakening.
        </blockquote>

        <p>
          — Inspired by the teachings of Shirdi Sai Baba
        </p>

      </section>


      {/* =====================================================
          GALLERY
      ===================================================== */}

      <section className="home-gallery">

  <div className="home-gallery-container">

    <div className="home-gallery-heading">

      <p className="home-gallery-label">
        MOMENTS OF DEVOTION
      </p>

      <h2>
        Our Gallery
      </h2>

    </div>


    <div className="home-gallery-grid">

      {homeGalleryImages.map((item) => (

        <article
          className="home-gallery-card"
          key={item.image}
        >

          <div className="home-gallery-image">

            <img
              src={`/images/gallery/${item.image}`}
              alt={item.title}
            />

          </div>

          <div className="home-gallery-content">

            <p>
              {item.category}
            </p>

            <h3>
              {item.title}
            </h3>

          </div>

        </article>

      ))}

    </div>


    <div className="home-gallery-button">

      <a href="/gallery">
        View Gallery
      </a>

    </div>

  </div>

</section>

    </main>
  );
}