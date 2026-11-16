import Link from "next/link";
import { createEnglishMetadata } from "./metadata";
import "../home.css";

export const metadata = createEnglishMetadata(
  "Sai Satsang @ Gurupadam | Salem Shirdi",
  "A sacred space in Salem for devotion, satsang, spiritual growth and compassionate service in the grace of Shirdi Sai Baba.",
);

const activities = [
  {
    icon: "ॐ",
    title: "Satsang",
    text: "Come together to remember Sai, listen to His teachings and experience peace and spiritual fellowship.",
    href: "/en/satsang",
  },
  {
    icon: "♫",
    title: "Bhajans",
    text: "Spend peaceful moments singing Sai's name with love and deep devotion.",
    href: "/en/satsang",
  },
  {
    icon: "♨",
    title: "Aarti & Pooja",
    text: "Participate in daily aarti and special poojas with faith and reverence.",
    href: "/en/satsang",
  },
  {
    icon: "▤",
    title: "Sai Satcharitra",
    text: "Read the life, leelas and teachings of Sai Baba and reflect on their meaning in our lives.",
    href: "/en/sai-baba-stories",
  },
];
const pillars = [
  {
    icon: "♧",
    title: "Faith",
    english: "Shraddha",
    text: "Trust wholeheartedly in divine grace and the guidance of the Guru.",
  },
  {
    icon: "⌛",
    title: "Patience",
    english: "Saburi",
    text: "Wait with patience, trusting that everything unfolds at the right time.",
  },
  {
    icon: "♡",
    title: "Love",
    english: "Compassion",
    text: "Treat every living being with kindness, dignity and compassion.",
  },
  {
    icon: "♧",
    title: "Surrender",
    english: "Sharanagati",
    text: "Place your heart in the hands of the Divine and Guru, and accept their guidance.",
  },
];
const galleryItems = [
  {
    image: "gallery-2.jpeg",
    category: "Spiritual gathering",
    title: "Satsang",
  },
  {
    image: "gallery-3.jpeg",
    category: "Music & remembrance",
    title: "Bhajans",
  },
  { image: "gallery-5.jpeg", category: "Moments of devotion", title: "Aarti" },
  {
    image: "gallery-7.jpeg",
    category: "Reading & reflection",
    title: "Sai Satcharitra",
  },
];
const galleryStrip = [
  "gallery-1.jpeg",
  "gallery-3.jpeg",
  "gallery-5.jpeg",
  "gallery-7.jpeg",
  "gallery-8.jpeg",
];

export default function EnglishHome() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero-image" aria-hidden="true" />
        <div className="home-hero-overlay" aria-hidden="true" />
        <div className="home-hero-inner">
          <div className="home-hero-copy">
            <h1>
              Sai Satsang @ <span>Gurupadam</span>
            </h1>
            <p className="home-hero-description">
              May peace and devotion blossom through the boundless grace of Sai
              Nath…
              <br />
              <span className="home-hero-subline">
                Let us come together at the Guru&apos;s feet and discover the
                divine within.
              </span>
            </p>
            <div className="home-hero-actions">
              <Link
                href="/en/sai-baba"
                className="home-button home-button-gold"
              >
                Discover Sai Baba
              </Link>
              <Link
                href="/en/satsang"
                className="home-button home-button-ghost"
              >
                Join the Satsang
              </Link>
            </div>
          </div>
        </div>
        <div className="home-hero-bottomline">
          <span>Faith</span>
          <i />
          <span>Patience</span>
          <i />
          <span>Love</span>
          <i />
          <span>Service</span>
        </div>
      </section>

      <section className="home-activities home-section">
        <div className="home-section-intro">
          <div className="home-section-intro-copy">
            <p className="home-eyebrow">Our Satsang</p>
            <h2>
              Devotion.
              <br />
              Love.
              <br />
              Service.
            </h2>
            <p className="home-section-description">
              Remember Sai, reflect on His teachings and grow together as a
              spiritual community.
            </p>
            <Link href="/en/satsang" className="home-text-link">
              Discover more <span>↗</span>
            </Link>
          </div>
        </div>
        <div className="home-activities-grid">
          {activities.map((activity) => (
            <Link
              href={activity.href}
              className="home-activity"
              key={activity.title}
            >
              <span className="home-activity-icon" aria-hidden="true">
                {activity.icon}
              </span>
              <h3>{activity.title}</h3>
              <p>{activity.text}</p>
              <span className="home-activity-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-moment">
        <div className="home-moment-image" aria-hidden="true" />
        <div className="home-moment-shade" aria-hidden="true" />
        <div className="home-moment-inner">
          <div className="home-moment-quote">
            <span className="home-quote-mark">“</span>
            <blockquote>
              Why fear when
              <br />I am here?
            </blockquote>
            <p>— Sai Baba</p>
          </div>
          <div className="home-moment-story">
            <div>
              <p className="home-eyebrow">A central teaching of Sai</p>
              <h3 className="home-moment-teaching-title">Sabka Malik Ek</h3>
              <p className="home-moment-teaching-subtitle">
                One God governs all.
              </p>
              <p className="home-moment-copy">
                Beyond differences of religion, caste, language and community,
                Sai&apos;s simple truth brings everyone together through love.
              </p>
              <Link
                href="/en/sai-baba"
                className="home-button home-button-gold"
              >
                Explore Sai&apos;s teachings
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-pillars home-section">
        <div className="home-section-intro home-pillars-intro">
          <div className="home-section-intro-copy">
            <p className="home-eyebrow">Four pillars of life</p>
            <h2>
              A journey rooted
              <br />
              in faith and
              <br />
              patience
            </h2>
            <Link href="/en/satsang" className="home-text-link">
              Discover more <span>↗</span>
            </Link>
          </div>
        </div>
        <div className="home-pillars-grid">
          {pillars.map((pillar) => (
            <article className="home-pillar" key={pillar.title}>
              <div className="home-pillar-top">
                <span className="home-pillar-icon" aria-hidden="true">
                  {pillar.icon}
                </span>
              </div>
              <h3>{pillar.title}</h3>
              <p className="home-pillar-english">{pillar.english}</p>
              <p className="home-pillar-description">{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-programs home-section">
        <div className="home-section-intro home-programs-intro">
          <div className="home-section-intro-copy">
            <p className="home-eyebrow">Events & activities</p>
            <h2>
              What we do
              <br />
              at Satsang
            </h2>
            <Link
              href="/en/calendar"
              className="home-round-link"
              aria-label="View event calendar"
            >
              ↗
            </Link>
          </div>
        </div>
        <div className="home-programs-grid">
          {galleryItems.map((item) => (
            <Link
              href="/en/gallery"
              className="home-program-card"
              key={item.image}
            >
              <div className="home-program-image">
                <img
                  src={`/images/gallery/${item.image}`}
                  alt={item.title}
                  loading="lazy"
                />
              </div>
              <p>{item.category}</p>
              <h3>{item.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-trust">
        <div className="home-trust-image">
          <img
            src="/images/about/image-1.jpeg"
            alt="Sai Satsang at Gurupadam"
            loading="lazy"
          />
        </div>
        <div className="home-trust-copy">
          <div className="home-trust-content">
            <p className="home-eyebrow">Our spiritual home</p>
            <h2>
              Sai Satsang @ Gurupadam —<br />A spiritual home in Salem
            </h2>
            <p>
              Through Sai&apos;s grace, devotees gather here for satsang,
              prayer, pooja and service, discovering inner peace and spiritual
              companionship.
            </p>
            <Link href="/en/about" className="home-button home-button-gold">
              About our spiritual home
            </Link>
          </div>
          <span className="home-trust-watermark" aria-hidden="true">
            ॐ
          </span>
        </div>
      </section>

      <section className="home-gallery home-section">
        <div className="home-section-intro home-gallery-intro">
          <div className="home-section-intro-copy">
            <p className="home-eyebrow">Photographs</p>
            <h2>Moments of devotion</h2>
            <p className="home-section-description">
              A glimpse of the temple, poojas, satsangs and festive
              celebrations.
            </p>
            <Link href="/en/gallery" className="home-text-link">
              Explore the gallery <span>↗</span>
            </Link>
          </div>
        </div>
        <div className="home-gallery-strip">
          {galleryStrip.map((image, index) => (
            <Link
              href="/en/gallery"
              className={`home-gallery-thumb home-gallery-thumb-${index + 1}`}
              key={image}
            >
              <img
                src={`/images/gallery/${image}`}
                alt={`A spiritual moment at Sai Satsang @ Gurupadam ${index + 1}`}
                loading="lazy"
              />
            </Link>
          ))}
          <Link
            href="/en/gallery"
            className="home-gallery-next"
            aria-label="View all photographs"
          >
            ↗
          </Link>
        </div>
      </section>

      <section className="home-final">
        <div className="home-final-image" aria-hidden="true" />
        <div className="home-final-overlay" aria-hidden="true" />
        <div className="home-final-inner">
          <div className="home-final-heading">
            <p className="home-eyebrow">In Sai&apos;s grace</p>
            <h2>
              Let us all
              <br />
              come together.
            </h2>
          </div>
          <div className="home-final-copy">
            <p>
              Join us in satsang, service and a shared journey of spiritual
              growth.
            </p>
            <div className="home-final-actions">
              <Link href="/en/satsang" className="home-button home-button-gold">
                Join the Satsang
              </Link>
              <Link
                href="/en/donation"
                className="home-button home-button-ghost"
              >
                Dakshina / Offerings
              </Link>
            </div>
            <div className="home-final-links">
              <Link href="">Events</Link>
              <Link href="">Sai Baba Stories</Link>
              <Link href="">Gallery</Link>
              <Link href="">Contact</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
