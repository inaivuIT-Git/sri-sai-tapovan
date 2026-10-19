"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./header.css";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Satsang", href: "/satsang" },
  { label: "Sai Baba", href: "/sai-baba" },
  { label: "Calendar", href: "/calendar" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);

  return (
    <header className="site-header">
      <div className="header-container">

        {/* BRAND */}
        <Link
          href="/"
          className="site-logo"
          aria-label="சாய் சத்சங் @ குருபாதம்"
          onClick={() => setMenuOpen(false)}
        >
          <span className="logo-symbol" aria-hidden="true">
            ॐ
          </span>

          <span className="logo-name">
            சாய் சத்சங் @ குருபாதம்
          </span>
        </Link>


        {/* DESKTOP NAVIGATION */}
        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${
                isActive(item.href) ? "active" : ""
              }`}
              aria-current={
                isActive(item.href) ? "page" : undefined
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>


        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className={`mobile-menu-button ${
            menuOpen ? "open" : ""
          }`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span />
          <span />
          <span />
        </button>

      </div>


      {/* MOBILE NAVIGATION */}
      <nav
        id="mobile-navigation"
        className={`mobile-nav ${
          menuOpen ? "mobile-nav-open" : ""
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`mobile-nav-link ${
              isActive(item.href) ? "active" : ""
            }`}
            aria-current={
              isActive(item.href) ? "page" : undefined
            }
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}