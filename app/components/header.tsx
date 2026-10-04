import Link from "next/link";
import "./header.css";

export default function Header() {
  return (
    <header className="site-header">

      <div className="header-container">

        {/* LOGO */}
        <Link href="/" className="site-logo">

          <div className="logo-symbol">
            ॐ
          </div>

          <div className="logo-text">

            <span className="logo-name">
              Sri Sai Tapovan
            </span>

            <span className="logo-subtitle">
              Spiritual Trust
            </span>

          </div>

        </Link>


        {/* DESKTOP MENU */}
        <nav className="main-nav">

          <Link href="/">
            Home
          </Link>

          <Link href="/about">
            About Us
          </Link>

          <Link href="/sai-baba">
            Sai Baba
          </Link>

          <Link href="/sai-baba-stories">
            Sai Baba Stories
          </Link>

          <Link href="/calendar">
            Calendar
          </Link>

          <Link href="/gallery">
            Gallery
          </Link>

          <Link href="/contact">
            Contact
          </Link>

        </nav>


        {/* MOBILE MENU BUTTON */}
        <button
          className="mobile-menu-button"
          aria-label="Open menu"
        >
          ☰
        </button>

      </div>

    </header>
  );
}