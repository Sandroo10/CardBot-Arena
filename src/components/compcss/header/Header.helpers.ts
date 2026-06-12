export const navItems = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "Bots",
    href: "/bots"
  },
  {
    label: "Leaderboard",
    href: "/leaderboard"
  },
]

export function isActiveRoute(pathname: string, href: string) {
  if (href === "/") {
    return pathname === href
  }

  return pathname === href || pathname.startsWith(`${href}/`)
}
