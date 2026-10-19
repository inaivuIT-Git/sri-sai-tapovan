"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./header.css";

const navItems = [
  { label: "முகப்பு", href: "/" },
  { label: "எங்களைப் பற்றி", href: "/about" },
  { label: "சத்சங்கம்", href: "/satsang" },
  { label: "சாய்பாபா", href: "/sai-baba" },
  { label: "தட்சிணை", href: "/donation" },
  { label: "காட்சியகம்", href: "/gallery" },
  { label: "தொடர்பு", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = pathname === "/";

  const closeMenu = () => setMenuOpen(false);
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={`site-header ${isHome ? "site-header-home" : ""}`}>
      <div className="header-inner">
        <Link
          href="/"
          className="site-brand"
          onClick={closeMenu}
          aria-label="சாய் சத்சங் @ குருபாதம் — Home"
        >
          <span className="site-logo-frame" aria-hidden="true">
            <Image
              src="/images/logo/paduka-logo.png"
              alt=""
              width={512}
              height={512}
              sizes="46px"
              className="site-logo-image"
              priority
            />
          </span>
          <span className="site-brand-name">சாய் சத்சங் @ குருபாதம்</span>
        </Link>

        <nav className="desktop-nav" aria-label="முதன்மை வழிசெலுத்தல்">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`desktop-nav-link ${active ? "is-active" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className={`mobile-menu-toggle ${menuOpen ? "is-open" : ""}`}
          aria-label={menuOpen ? "மெனுவை மூடு" : "மெனுவைத் திற"}
          aria-expanded={menuOpen}
          aria-controls="mobile-site-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>

      <nav
        id="mobile-site-nav"
        className={`mobile-site-nav ${menuOpen ? "mobile-site-nav-open" : ""}`}
        aria-label="கைபேசி வழிசெலுத்தல்"
        aria-hidden={!menuOpen}
      >
        {navItems.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`mobile-nav-link ${active ? "is-active" : ""}`}
              aria-current={active ? "page" : undefined}
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
