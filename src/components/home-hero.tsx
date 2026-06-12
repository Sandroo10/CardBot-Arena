import Link from "next/link"

import { floatingCards, heroStats } from "@/components/compcss/home-hero/HomeHero.helpers"
import {
  arenaHeader,
  arenaPanel,
  arenaStatus,
  arenaTitle,
  botAvatar,
  botMeta,
  botName,
  botRow,
  botSubtext,
  cardRank,
  cardSuit,
  floatingBotCard,
  floatingBotText,
  floatingBotTitle,
  floatingReward,
  floatingRewardLabel,
  floatingRewardValue,
  handCard,
  handRow,
  heroActions,
  heroContainer,
  heroCopy,
  heroDescription,
  heroEyebrow,
  heroGlowOne,
  heroGlowTwo,
  heroSection,
  heroStatsGrid,
  heroTitle,
  heroVisual,
  playedCards,
  playingCard,
  scoreChip,
  scoreLabel,
  scoreValue,
  tableSurface
} from "@/components/compcss/home-hero/HomeHero.styles"
import { homePageCopy } from "@/components/home/HomePage.helpers"
import { buttonStyles, Container, StatCard } from "@/components/ui"

export function HomeHero() {
  return (
    <section className={heroSection()}>
      <div className={heroGlowOne()} />
      <div className={heroGlowTwo()} />
      <Container className={heroContainer()}>
        <div className={heroCopy()}>
          <p className={heroEyebrow()}>{homePageCopy.eyebrow}</p>
          <h1 className={heroTitle()}>{homePageCopy.title}</h1>
          <p className={heroDescription()}>{homePageCopy.description}</p>
          <div className={heroActions()}>
            <Link className={buttonStyles({ intent: "primary", size: "lg" })} href="/bots">
              Start Playing
            </Link>
            <Link className={buttonStyles({ intent: "secondary", size: "lg" })} href="/bots">
              View Bots
            </Link>
          </div>
          <div className={heroStatsGrid()}>
            {heroStats.map((stat) => (
              <StatCard key={stat.label} label={stat.label} meta={stat.meta} value={stat.value} />
            ))}
          </div>
        </div>

        <div className={heroVisual()} aria-hidden="true">
          <div className={arenaPanel()}>
            <div className={arenaHeader()}>
              <p className={arenaTitle()}>Live practice table</p>
              <span className={arenaStatus()}>Ready</span>
            </div>
            <div className={tableSurface()}>
              <div className={botRow()}>
                <div className={botAvatar()}>AI</div>
                <div className={botMeta()}>
                  <p className={botName()}>Joker Easy Bot</p>
                  <p className={botSubtext()}>Thinking like a friendly rival</p>
                </div>
                <div className={scoreChip()}>
                  <p className={scoreLabel()}>Bot</p>
                  <p className={scoreValue()}>12</p>
                </div>
              </div>
              <div className={playedCards()}>
                {floatingCards.map((card) => (
                  <div className={playingCard({ tone: card.tone })} key={`${card.rank}-${card.suit}`}>
                    <span className={cardRank()}>{card.rank}</span>
                    <span className={cardSuit()}>{card.suit}</span>
                  </div>
                ))}
              </div>
              <div className={handRow()}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <div className={handCard()} key={index} />
                ))}
              </div>
            </div>
          </div>

          <div className={floatingBotCard()}>
            <p className={floatingBotTitle()}>Beginner-friendly bots</p>
            <p className={floatingBotText()}>
              Easy tables are open now. Medium and Hard tiers stay visible as upcoming content.
            </p>
          </div>
          <div className={floatingReward()}>
            <p className={floatingRewardLabel()}>Win reward</p>
            <p className={floatingRewardValue()}>+1</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
