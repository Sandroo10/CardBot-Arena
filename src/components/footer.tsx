import Link from "next/link"

import { footerLinks } from "@/components/compcss/footer/Footer.helpers"
import {
  footerBrand,
  footerDescription,
  footerInner,
  footerLink,
  footerNav,
  footerRoot,
  footerTitle
} from "@/components/compcss/footer/Footer.styles"

export function Footer() {
  return (
    <footer className={footerRoot()}>
      <div className={footerInner()}>
        <div className={footerBrand()}>
          <p className={footerTitle()}>CardBot Arena</p>
          <p className={footerDescription()}>
            A local-first card-game dashboard for practicing Joker and Bura against bots.
          </p>
        </div>
        <nav className={footerNav()} aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <Link className={footerLink()} href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
