import "./sai-baba-stories.css";

const stories = [
  {
    title: "The Story of Grinding Wheat",
    subtitle: "Sai Satcharitra – Chapter 1",
    language: "English",
    description:
      "Sai Baba's grinding of wheat and the spiritual significance behind this divine Leela.",
    videoId: "nxDSSPtdrk8",
    channel: "Shirdi Books",
  },
  {
    title: "The Purpose of Sai Satcharitra",
    subtitle: "Sai Satcharitra – Chapter 2",
    language: "English",
    description:
      "The story behind the writing of Sai Satcharitra, Hemadpant and the importance of a Guru.",
    videoId: "Jiwe4M2TWzU",
    channel: "Shirdi Books",
  },
  {
    title: "Sai Baba's Stories as a Beacon of Light",
    subtitle: "Sai Satcharitra – Chapter 3",
    language: "English",
    description:
      "Stories of Sai Baba, His love for devotees and the spiritual guidance found in His Leelas.",
    videoId: "8gKc3RT5Ngc",
    channel: "Shirdi Books",
  },
  {
    title: "Sai Baba's First Advent in Shirdi",
    subtitle: "Sai Satcharitra – Chapter 4",
    language: "English",
    description:
      "Sai Baba's connection with Shirdi, His personality and the mission of the Saints.",
    videoId: "6Z9F-qtxIWU",
    channel: "Shirdi Books",
  },
  {
    title: "How Sai Baba Came to Be Called Sai",
    subtitle: "Sai Satcharitra – Chapter 5",
    language: "English",
    description:
      "The story of Chand Patil, Baba's return to Shirdi and the origin of the name Sai.",
    videoId: "R9xwoKPAno4",
    channel: "Shirdi Books",
  },
  {
    title: "Sai Baba Story – Chapter 13",
    subtitle: "Sri Sai Satcharitra",
    language: "Tamil",
    description:
      "A Tamil Sai Satcharitra chapter sharing the life and teachings of Shirdi Sai Baba.",
    videoId: "0G3lkIwfO7Q",
    channel: "Giri Bhakti",
  },
  {
    title: "Sai Satcharitra Chapters 16–17",
    subtitle: "Part 2",
    language: "Tamil",
    description:
      "A Tamil narration from Sai Satcharitra covering Chapters 16 and 17 – Part 2.",
    videoId: "Nrtwvfv2xKM",
    channel: "Giri Bhakti",
  },
  {
    title: "Sai Satcharitra Chapter 25",
    subtitle: "Part 1",
    language: "Tamil",
    description:
      "A Tamil Sai Satcharitra narration from the sacred life and Leelas of Sai Baba.",
    videoId: "mt8Qvj2M4PA",
    channel: "Giri Bhakti",
  },
];

export default function SaiBabaStoriesPage() {
  return (
    <main className="stories-page">

      {/* HERO */}
      <section className="stories-hero">
        <div className="stories-hero-content">

          <p className="stories-eyebrow">
            SRI SAI TAPOVAN SPIRITUAL TRUST
          </p>

          <h1>Sai Baba Stories</h1>

          <div className="stories-divider">
            <span>ॐ</span>
          </div>

          <p className="stories-breadcrumb">
            Home&nbsp; / &nbsp;Sai Baba Stories
          </p>

        </div>
      </section>


      {/* INTRO */}
      <section className="stories-intro">
        <div className="stories-container">

          <p className="stories-label">
            DIVINE LEELAS
          </p>

          <h2>
            Stories of <span>Sai Baba</span>
          </h2>

          <p className="stories-intro-text">
            Spend a few peaceful moments listening to stories from
            Sai Satcharitra and devotional narrations about the life,
            teachings and Leelas of Shirdi Sai Baba.
          </p>

        </div>
      </section>


      {/* STORIES */}
      <section className="stories-list-section">
        <div className="stories-container">

          <div className="stories-section-heading">

            <p className="stories-label">
              WATCH & LISTEN
            </p>

            <h2>
              Sai Satcharitra Stories
            </h2>

            <p>
              Freely available YouTube narrations selected for devotees
              and visitors of Sri Sai Tapovan.
            </p>

          </div>


          <div className="stories-grid">

            {stories.map((story, index) => (

              <article
                className="story-card"
                key={story.videoId}
              >

                {/* VIDEO THUMBNAIL */}
                <a
                  className="story-thumbnail"
                  href={`https://www.youtube.com/watch?v=${story.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Watch ${story.title} on YouTube`}
                >

                  <img
                    src={`https://img.youtube.com/vi/${story.videoId}/hqdefault.jpg`}
                    alt={story.title}
                  />

                  <span className="story-play">
                    ▶
                  </span>

                  <span className="story-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </a>


                {/* CONTENT */}
                <div className="story-content">

                  <div className="story-meta">
                    <span>{story.language}</span>
                    <span>{story.channel}</span>
                  </div>

                  <h3>
                    {story.title}
                  </h3>

                  <p className="story-subtitle">
                    {story.subtitle}
                  </p>

                  <p className="story-description">
                    {story.description}
                  </p>

                  <a
                    className="story-watch"
                    href={`https://www.youtube.com/watch?v=${story.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch Story
                    <span>→</span>
                  </a>

                </div>

              </article>

            ))}

          </div>


          <p className="stories-note">
            Videos are hosted on YouTube and remain the property of
            their respective creators and channels. Sri Sai Tapovan
            Spiritual Trust provides these links for devotional viewing.
          </p>

        </div>
      </section>


      {/* QUOTE */}
      <section className="stories-quote">

        <div className="stories-quote-inner">

          <div className="stories-quote-symbol">
            ॐ
          </div>

          <blockquote>
            “If My Leelas are written, ignorance will vanish.”
          </blockquote>

          <p>
            — Sai Baba
          </p>

        </div>

      </section>


      {/* CTA */}
      <section className="stories-cta">

        <div className="stories-container stories-cta-inner">

          <div>

            <p className="stories-label">
              WALK THE PATH
            </p>

            <h2>
              Faith, Patience
              <br />
              & Devotion
            </h2>

            <p>
              Continue exploring the life and teachings of Sai Baba.
            </p>

          </div>


          <div className="stories-cta-buttons">

            <a
              href="/sai-baba"
              className="stories-primary-btn"
            >
              Sai Baba
            </a>

            <a
              href="/gallery"
              className="stories-outline-btn"
            >
              View Gallery
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}