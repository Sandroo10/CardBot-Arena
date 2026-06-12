import { homePageCopy } from "@/components/home/HomePage.helpers"
import {
  homeActions,
  homeDescription,
  homeEyebrow,
  homeHero,
  homeIntroCard,
  homeIntroCardContent,
  homeShell,
  homeTitle
} from "@/components/home/HomePage.styles"
import { buttonStyles, Card, CardContent, Container } from "@/components/ui"

export function HomePage() {
  return (
    <main className={homeShell()}>
      <Container className={homeHero()} as="section">
        <p className={homeEyebrow()}>{homePageCopy.eyebrow}</p>
        <h1 className={homeTitle()}>{homePageCopy.title}</h1>
        <p className={homeDescription()}>{homePageCopy.description}</p>
        <div className={homeActions()}>
          <a className={buttonStyles({ intent: "primary", size: "lg" })} href="/bots">
            Start Playing
          </a>
          <a className={buttonStyles({ intent: "secondary", size: "lg" })} href="/leaderboard">
            View Leaderboard
          </a>
        </div>
        <Card className={homeIntroCard()}>
          <CardContent className={homeIntroCardContent()}>
            This is just the first bla bla
          </CardContent>
        </Card>
      </Container>
    </main>
  )
}
