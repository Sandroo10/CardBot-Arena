"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, UserRound, X } from "lucide-react"
import { useState } from "react"

import { isActiveRoute, navItems } from "@/components/compcss/header/Header.helpers"
import {
  avatarLink,
  desktopNav,
  headerActions,
  headerInner,
  headerRoot,
  logoLink,
  logoCardCenter,
  logoCardRank,
  logoMark,
  logoText,
  menuButton,
  mobileNav,
  mobileNavInner,
  navLink
} from "@/components/compcss/header/Header.styles"

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className={headerRoot()}>
      <div className={headerInner()}>
        <Link className={logoLink()} href="/" onClick={() => setIsMenuOpen(false)}>
          <span className={logoMark()} aria-hidden="true">
            <span className={logoCardRank()}>J</span>
            <span className={logoCardCenter()}>★</span>
          </span>
          <span className={logoText()}>CardBot Arena</span>
        </Link>

        <nav className={desktopNav()} aria-label="Primary navigation">
          {navItems.map((item) => {
            const isActive = isActiveRoute(pathname, item.href)

            return (
              <Link
                aria-current={isActive ? "page" : undefined}
                className={navLink({ active: isActive })}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className={headerActions()}>
          <Link className={avatarLink()} href="/profile" aria-label="Open profile">
            <UserRound aria-hidden="true" size={20} />
          </Link>
          <button
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className={menuButton()}
            onClick={() => setIsMenuOpen((current) => !current)}
            type="button"
          >
            {isMenuOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <nav className={mobileNav()} aria-label="Mobile navigation">
          <div className={mobileNavInner()}>
            {navItems.map((item) => {
              const isActive = isActiveRoute(pathname, item.href)

              return (
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className={navLink({ active: isActive })}
                  href={item.href}
                  key={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </nav>
      ) : null}
    </header>
  )
}
