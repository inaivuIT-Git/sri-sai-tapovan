"use client";

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

  return (
    <header className="site-header">
      <div className="header-container">

        <Link href="/" className="site-logo">
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