import "./gallery.css";

const categories = [
  {
    title: "Temple",
    description:
      "Glimpses of Sri Sai Tapovan and the temple premises.",
    icon: "🛕",
  },
  {
    title: "Pooja & Aarti",
    description:
      "Moments from daily pooja, aarti and devotional activities.",
    icon: "🪔",
  },
  {
    title: "Festivals",
    description:
      "Special celebrations and important spiritual occasions.",
    icon: "🌺",
  },
  {
    title: "Devotional Moments",
    description:
      "Beautiful moments shared by devotees and the Trust.",
    icon: "🙏",
  },
];

const galleryImages = [
  {
    image: "gallery-1.jpeg",
    category: "Temple",
    title: "Temple",
  },
  {
    image: "gallery-2.jpeg",
    category: "Temple",
    title: "Sri Sai Tapovan",
  },
  {
    image: "gallery-3.jpeg",
    category: "Pooja & Aarti",
    title: "Daily Aarti",
  },
  {
    image: "gallery-4.jpeg",
    category: "Pooja & Aarti",
    title: "Special Pooja",
  },
  {
    image: "gallery-5.jpeg",
    category: "Festivals",
    title: "Festival Celebration",
  },
  {
    image: "gallery-6.jpeg",
    category: "Festivals",
    title: "Special Celebration",
  },
  {
    image: "gallery-7.jpeg",
    category: "Devotional Moments",
    title: "Devotional Moments",
  },
  {
    image: "gallery-8.jpeg",
    category: "Devotional Moments",
    title: "Moments of Devotion",
  },
];

export default function GalleryPage() {
  return (
    <main className="gallery-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="gallery-hero">

        <div className="gallery-hero-content">

          <p className="gallery-eyebrow">
            SRI SAI TAPOVAN
          </p>

          <h1>Gallery</h1>

          <div className="gallery-divider">
            <span>ॐ</span>
          </div>

          <p className="gallery-breadcrumb">
            Home&nbsp; / &nbsp;Gallery
          </p>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="gallery-intro">

        <div className="gallery-container">

          <p className="gallery-label">
            MOMENTS OF DEVOTION
          </p>

          <h2>
            Our Gallery
          </h2>

          <p className="gallery-intro-text">
            Explore moments from Sri Sai Tapovan, including temple
            activities, pooja, festivals and devotional gatherings.
          </p>

        </div>

      </section>


      {/* =====================================================
          CATEGORIES
      ===================================================== */}

      <section className="gallery-categories">

        <div className="gallery-container">

          <div className="gallery-category-grid">

            {categories.map((category) => (

              <div
                key={category.title}
                className="gallery-category-card"
              >

                <div className="gallery-category-icon">
                  {category.icon}
                </div>

                <h3>
                  {category.title}
                </h3>

                <p>
                  {category.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PHOTOS
      ===================================================== */}

      <section className="gallery-photos">

        <div className="gallery-container">

          <div className="gallery-section-heading">

            <p className="gallery-label">
              MOMENTS OF DEVOTION
            </p>

            <h2>
              Our Memories
            </h2>

            <p>
              A collection of moments from Sri Sai Tapovan.
            </p>

          </div>


          <div className="gallery-photo-grid">

            {galleryImages.map((item) => (

              <article
                className="gallery-photo-card"
                key={item.image}
              >

                <div className="gallery-photo-image">

                  <img
                    src={`/images/gallery/${item.image}`}
                    alt={item.title}
                  />

                </div>

                <div className="gallery-photo-content">

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

        </div>

      </section>


      {/* =====================================================
          VIDEOS
      ===================================================== */}

      <section className="gallery-videos">

        <div className="gallery-container">

          <div className="gallery-section-heading">

            <p className="gallery-label">
              WATCH & LISTEN
            </p>

            <h2>
              Devotional Videos
            </h2>

            <p>
              Moments of prayer, devotion and spiritual activities
              from Sri Sai Tapovan.
            </p>

          </div>


          <div className="gallery-video-grid">

            <div className="gallery-video-card">

              <div className="gallery-video-thumbnail">
                <div className="gallery-play-button">
                  ▶
                </div>
              </div>

              <div className="gallery-video-content">
                <p>DEVOTIONAL</p>
                <h3>Spiritual Moments</h3>
              </div>

            </div>


            <div className="gallery-video-card">

              <div className="gallery-video-thumbnail">
                <div className="gallery-play-button">
                  ▶
                </div>
              </div>

              <div className="gallery-video-content">
                <p>POOJA & AARTI</p>
                <h3>Temple Activities</h3>
              </div>

            </div>


            <div className="gallery-video-card">

              <div className="gallery-video-thumbnail">
                <div className="gallery-play-button">
                  ▶
                </div>
              </div>

              <div className="gallery-video-content">
                <p>FESTIVALS</p>
                <h3>Special Celebrations</h3>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ADMIN NOTE
      ===================================================== */}

      <section className="gallery-admin-note">

        <div className="gallery-container">

          <div className="gallery-admin-content">

            <div className="gallery-admin-icon">
              📷
            </div>

            <div>

              <p className="gallery-label">
                FUTURE ADMIN FEATURE
              </p>

              <h3>
                More Memories Coming Soon
              </h3>

             
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}