import Link from "next/link";
import { createEnglishMetadata } from "../metadata";
import "../../about/about.css";

export const metadata = createEnglishMetadata("About Us | Sai Satsang @ Gurupadam", "Discover the spiritual journey of Sai Tapovan, Salem Shirdi and Sai Satsang @ Gurupadam.", "/about");

const journey = [
  { label: "The beginning", title: "Prayers that began at home", text: "In the beginning, prayers and devotional gatherings were held in a home, in a simple atmosphere of faith and love.", image: "/images/about/journey/journey-01.jpg", imageAlt: "An early prayer gathering remembering Sai's grace" },
  { label: "Satsang", title: "A growing circle of devotees", text: "Over time, more devotees began joining the prayers. As the gathering grew, a larger space was needed to welcome everyone.", image: "/images/about/journey/journey-02.jpg", imageAlt: "Devotees coming together in prayer" },
  { label: "A new place", title: "Sai Tapovan", text: "The need for a larger place where devotees could gather gave rise to Sai Tapovan — a peaceful space for prayer and spiritual fellowship.", image: "/images/about/journey/journey-03.jpg", imageAlt: "A peaceful place for spiritual gatherings" },
  { label: "Sai's presence", title: "Sai beneath the neem tree", text: "Inspired by the sacred memories of Shirdi, the idol of Sai Baba was installed beneath a neem tree.", image: "/images/about/journey/sai-baba-paduka.jpeg", imageAlt: "Sai Baba adorned with garlands" },
  { label: "A beloved identity", title: "Salem Shirdi", text: "With Sai Baba's presence beneath the neem tree, this sacred place came to be affectionately known among devotees as “Salem Shirdi”.", image: "/images/about/journey/sai-baba-paduka.jpeg", imageAlt: "A devotional moment at the Sai shrine" },
  { label: "Today", title: "Sai Satsang @ Gurupadam", text: "What began as prayer in a home grew into a satsang of devotees, blossomed as Sai Tapovan and continues today as the spiritual journey of Sai Satsang @ Gurupadam.", image: "/images/about/journey/journey-05.jpg", imageAlt: "Devotees united through love and service" },
];
const purposeItems = [
  { symbol: "ॐ", title: "Satsang", text: "A grace-filled space to walk together in the pursuit of truth." },
  { symbol: "✦", title: "Spiritual growth", text: "A journey towards understanding our true nature." },
  { symbol: "♡", title: "Love", text: "A way of life that offers love without expectation." },
  { symbol: "❋", title: "Service", text: "Expressing love and compassion through our actions." },
];

export default function EnglishAboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero" aria-labelledby="about-hero-title">
        <div className="about-hero-image" aria-hidden="true" /><div className="about-hero-overlay" aria-hidden="true" />
        <div className="about-hero-content"><p className="about-hero-eyebrow">Sai Satsang @ Gurupadam</p><h1 id="about-hero-title">A journey that<br /><span>began with a prayer…</span></h1><p className="about-hero-subtitle">A spiritual journey that began with love and continues through devotion and service.</p><div className="about-hero-actions"><Link href="/en/satsang" className="about-button about-button-light">Discover Satsang</Link><a href="#our-journey" className="about-text-link">Our journey</a></div></div>
        <div className="about-hero-bottomline" aria-label="Faith, patience, love and service"><span>Faith</span><i aria-hidden="true">·</i><span>Patience</span><i aria-hidden="true">·</i><span>Love</span><i aria-hidden="true">·</i><span>Service</span></div>
      </section>

      <section className="about-intro-section"><div className="about-container about-intro-grid">
        <figure className="about-intro-media"><img src="/images/gallery/gallery-1.jpeg" alt="The spiritual atmosphere of Sai Tapovan" /><figcaption><span aria-hidden="true">ॐ</span>Peace · Faith · Love</figcaption></figure>
        <div className="about-intro-copy"><p className="about-eyebrow">About us</p><h2>A place where the mind finds peace and the heart awakens.</h2><span className="about-rule" aria-hidden="true" /><p className="about-lead">Sri Sai Tapovan is a sacred place filled with love, simplicity and devotion.</p><p>Set amidst the quiet of nature, it offers a divine space to step away from the rush of everyday life and listen to the voice within.</p><p>Here, satsang is more than a gathering. It is a grace-filled atmosphere that helps us reconnect with our true nature.</p><p className="about-inline-emphasis">A spiritual journey from ordinary living towards a more conscious and divine way of life.</p></div>
      </div></section>

      <section className="about-journey-section" id="our-journey"><div className="about-container">
        <div className="about-journey-heading"><div className="about-journey-heading-main"><p className="about-eyebrow">Our spiritual journey</p><h2>A journey nurtured by Sai&apos;s grace</h2><span className="about-rule" aria-hidden="true" /></div><div className="about-journey-heading-copy"><p className="about-journey-lead">A simple prayer that began at home grew into a satsang where devotees came together.</p><p>At every stage, Sai&apos;s grace and the love of devotees guided this journey. Here are some of its defining moments.</p></div></div>
        <div className="about-journey-grid">{journey.map((item) => <article className="about-journey-card" key={item.title}><figure className="about-journey-image-wrap"><img src={item.image} alt={item.imageAlt} loading="lazy" /></figure><div className="about-journey-card-copy"><span className="about-journey-label">{item.label}</span><span className="about-journey-mark" aria-hidden="true">✦</span><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
      </div></section>

      <section className="about-salem-section"><div className="about-container about-salem-grid"><div className="about-salem-copy"><p className="about-eyebrow">A sacred identity</p><h2>Salem Shirdi</h2><span className="about-rule" aria-hidden="true" /><p className="about-lead">At Sai Tapovan, the idol of Sai Baba was installed beneath a neem tree.</p><p>The neem tree became a meaningful reminder of the spiritual memories of Shirdi.</p><p>Over time, devotees began to lovingly identify this sacred place as “Salem Shirdi”.</p><blockquote className="about-salem-quote">A sacred place that carries the memory of Shirdi and invites devotees to experience Sai&apos;s grace.</blockquote></div><figure className="about-salem-media"><img src="/images/gallery/gallery-2.jpeg" alt="The spiritual atmosphere of Salem Shirdi" /><figcaption>SALEM · SHIRDI</figcaption></figure></div></section>

      <section className="about-purpose-section"><div className="about-container"><div className="about-purpose-heading"><div><p className="about-eyebrow">Our purpose</p><h2>A spiritual journey that transforms the way we live.</h2></div><p>To nurture inner peace and spiritual awareness through satsang, devotion, meditation and service.</p></div><div className="about-purpose-grid">{purposeItems.map((item) => <article className="about-purpose-item" key={item.title}><span className="about-purpose-symbol" aria-hidden="true">{item.symbol}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>

      <section className="about-life-section"><div className="about-container about-life-grid"><div className="about-life-gallery" aria-label="Photographs from satsang"><img className="about-life-image-main" src="/images/gallery/gallery-4.jpeg" alt="A moment from a spiritual gathering" /><img className="about-life-image-small" src="/images/gallery/gallery-6.jpeg" alt="A quiet moment of devotion" /><span className="about-life-caption">Love · Gratitude · Service</span></div><div className="about-life-copy"><p className="about-eyebrow">Our vision</p><h2>From ordinary living to a divine way of life.</h2><span className="about-rule" aria-hidden="true" /><p className="about-lead">Spirituality does not mean withdrawing from the world; it means living our everyday lives with love and gratitude.</p><p>Love in the family, understanding in relationships, gratitude in life, service through our actions, faith in the heart and patience in our journey — these are the values we seek to practise every day.</p><p>Spirituality does not end with meditation. It is also reflected in how we live, how we treat others and how we serve when someone is in need.</p><blockquote className="about-service-quote"><span aria-hidden="true">“</span><p>To live with genuine love is itself a form of spiritual practice.</p></blockquote></div></div></section>

      <section className="about-closing-section"><div className="about-closing-image" aria-hidden="true" /><div className="about-closing-overlay" aria-hidden="true" /><div className="about-container about-closing-content"><span className="about-closing-om" aria-hidden="true">ॐ</span><p className="about-eyebrow">Who we are today</p><h2>Sai Satsang <span>@ Gurupadam</span></h2><p className="about-closing-copy">A prayer that began in a home grew into a satsang of devotees, blossomed as Sai Tapovan and continues today as the spiritual journey of Sai Satsang @ Gurupadam.</p><p className="about-closing-emphasis">The place may change. The journey continues.<br />May Sai&apos;s grace guide us always.</p><div className="about-closing-values"><span>Peace</span><i aria-hidden="true">·</i><span>Love</span><i aria-hidden="true">·</i><span>Service</span><i aria-hidden="true">·</i><span>Surrender</span></div><p className="about-closing-quote">“Sabka Malik Ek”</p><div className="about-closing-actions"><Link href="/en/satsang" className="about-button about-button-light">Discover Satsang</Link><Link href="/en/sai-baba" className="about-button about-button-outline">About Sai Baba</Link></div></div></section>
    </main>
  );
}
