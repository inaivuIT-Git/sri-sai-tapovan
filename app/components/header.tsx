"use client";

import { useState } from "react";
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

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-container">

        {/* LOGO */}
        <Link
          href="/"
          className="site-logo"
          onClick={closeMenu}
        >
          <div className="logo-symbol">ॐ</div>

          <div className="logo-text">
            <span className="logo-name">
              Sri Sai Tapovan
            </span>

            <span className="logo-subtitle">
              SPIRITUAL TRUST
            </span>
          </div>
        </Link>


        {/* DESKTOP NAV */}
        <nav className="main-nav">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${
                  isActive ? "active" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>


        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className={`mobile-menu-button ${
            menuOpen ? "open" : ""
          }`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={
            menuOpen ? "Close menu" : "Open menu"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>


      {/* MOBILE NAV */}
      <div
        className={`mobile-nav ${
          menuOpen ? "mobile-nav-open" : ""
        }`}
      >
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`mobile-nav-link ${
                isActive ? "active" : ""
              }`}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </header>
  );
}