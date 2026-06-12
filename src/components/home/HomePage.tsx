import { FeaturedBots } from "@/components/featured-bots"
import { HomeHero } from "@/components/home-hero"
import { homeSections, homeShell } from "@/components/home/HomePage.styles"
import { LeaderboardPreview } from "@/components/leaderboard-preview"

export function HomePage() {
  return (
    <main className={homeShell()}>
      <div className={homeSections()}>
        <HomeHero />
        <FeaturedBots />
        <LeaderboardPreview />
      </div>
    </main>
  )
}
