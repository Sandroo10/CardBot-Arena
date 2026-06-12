import { homePageCopy } from "@/components/home/HomePage.helpers"
import {
  homeActions,
  homeCard,
  homeCta,
  homeEyebrow,
  homeHero,
  homeShell,
  homeTitle
} from "@/components/home/HomePage.styles"

export function HomePage() {
  return (
    <main className={homeShell()}>
      <section className={homeHero()}>
        <p className={homeEyebrow()}>{homePageCopy.eyebrow}</p>
        <h1 className={homeTitle()}>{homePageCopy.title}</h1>
        <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
          {homePageCopy.description}
        </p>
        <div className={homeActions()}>
          <a className={homeCta({ intent: "primary" })} href="/bots">
            Start Playing
          </a>
          <a className={homeCta({ intent: "secondary" })} href="/leaderboard">
            View Leaderboard
          </a>
        </div>
        <div className={homeCard()}>
          This is just the first bla bla
        </div>
      </section>
    </main>
  )
}
