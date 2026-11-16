"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./header.css";

type NavItem = { ta: string; en: string; href: string };

const navItems: NavItem[] = [
  { ta: "முகப்பு", en: "Home", href: "/" },
  { ta: "எங்களைப் பற்றி", en: "About", href: "/about" },
  { ta: "சத்சங்கம்", en: "Satsang", href: "/satsang" },
  { ta: "சாய்பாபா", en: "Sai Baba", href: "/sai-baba" },
  { ta: "தட்சிணை", en: "Dakshina", href: "/donation" },
  { ta: "காட்சியகம்", en: "Gallery", href: "/gallery" },
  { ta: "தொடர்பு", en: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname() || "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const legacyEnglishRoute = pathname === "/calendar" || pathname === "/sai-baba-stories";
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/") || legacyEnglishRoute;
  const localPath = pathname.startsWith("/en/") || pathname === "/en" ? pathname.replace(/^\/en(?=\/|$)/, "") || "/" : pathname;
  const homePath = isEnglish ? "/en" : "/";
  const hasTamilEquivalent = !["/calendar", "/sai-baba-stories"].includes(localPath);
  const switchPath = isEnglish ? (hasTamilEquivalent ? localPath : "/") : `/en${localPath === "/" ? "" : localPath}`;
  const isHome = pathname === "/" || pathname === "/en";
  const closeMenu = () => setMenuOpen(false);
  const pageHref = (href: string) => isEnglish ? `/en${href === "/" ? "" : href}` : href;
  const isActive = (href: string) => href === "/" ? localPath === "/" : localPath === href || localPath.startsWith(`${href}/`);

  return (
    <header className={`site-header ${isHome ? "site-header-home" : ""} ${isEnglish ? "site-header-en" : ""}`}>
      <div className="header-inner">
        <Link href={homePath} className="site-brand" onClick={closeMenu} aria-label={isEnglish ? "Sai Satsang @ Gurupadam — Home" : "சாய் சத்சங் @ குருபாதம் — முகப்பு"}>
          <span className="site-logo-frame" aria-hidden="true">
            <Image src="/images/logo/paduka-logo.png" alt="" width={512} height={512} sizes="46px" className="site-logo-image" priority />
          </span>
          <span className="site-brand-name">{isEnglish ? "Sai Satsang @ Gurupadam" : "சாய் சத்சங் @ குருபாதம்"}</span>
        </Link>

        <nav className="desktop-nav" aria-label={isEnglish ? "Main navigation" : "முதன்மை வழிசெலுத்தல்"}>
          {navItems.map((item) => {
            const active = isActive(item.href);
            return <Link key={item.href} href={pageHref(item.href)} className={`desktop-nav-link ${active ? "is-active" : ""}`} aria-current={active ? "page" : undefined}>{isEnglish ? item.en : item.ta}</Link>;
          })}
        </nav>

        <Link className="language-switch" href={switchPath} onClick={closeMenu} aria-label={isEnglish ? "Switch to Tamil" : "Switch to English"}>
          <span className={!isEnglish ? "language-current" : ""}>தமிழ்</span>
          <span className="language-divider">|</span>
          <span className={isEnglish ? "language-current" : ""}>EN</span>
        </Link>

        <button type="button" className={`mobile-menu-toggle ${menuOpen ? "is-open" : ""}`} aria-label={menuOpen ? (isEnglish ? "Close menu" : "மெனுவை மூடு") : (isEnglish ? "Open menu" : "மெனுவைத் திற")} aria-expanded={menuOpen} aria-controls="mobile-site-nav" onClick={() => setMenuOpen((open) => !open)}>
          <span /><span />
        </button>
      </div>

      <nav id="mobile-site-nav" className={`mobile-site-nav ${menuOpen ? "mobile-site-nav-open" : ""}`} aria-label={isEnglish ? "Mobile navigation" : "கைபேசி வழிசெலுத்தல்"} aria-hidden={!menuOpen}>
        {navItems.map((item) => {
          const active = isActive(item.href);
          return <Link key={item.href} href={pageHref(item.href)} className={`mobile-nav-link ${active ? "is-active" : ""}`} aria-current={active ? "page" : undefined} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>{isEnglish ? item.en : item.ta}</Link>;
        })}
        <Link className="mobile-language-switch" href={switchPath} onClick={closeMenu}>{isEnglish ? "தமிழுக்கு மாறவும்" : "View in English"}</Link>
      </nav>
    </header>
  );
}
