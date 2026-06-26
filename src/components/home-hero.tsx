import Link from "next/link"
import { ArrowDown } from "lucide-react"

import { floatingCards } from "@/components/compcss/home-hero/HomeHero.helpers"
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
  handCard,
  handRow,
  heroActions,
  heroContainer,
  heroCopy,
  heroDescription,
  heroGlowOne,
  heroGlowTwo,
  heroSection,
  heroTitle,
  heroVisual,
  playedCards,
  playingCard,
  scoreChip,
  scoreLabel,
  scoreValue,
  scrollCue,
  scrollCueIcon,
  tableSurface
} from "@/components/compcss/home-hero/HomeHero.styles"
import { homePageCopy } from "@/components/home/HomePage.helpers"
import { buttonStyles, Container } from "@/components/ui"

export function HomeHero() {
  return (
    <section className={heroSection()}>
      <div className={heroGlowOne()} />
      <div className={heroGlowTwo()} />
      <Container className={heroContainer()}>
        <div className={heroCopy()}>
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
        </div>

        <div className={heroVisual()} aria-hidden="true">
          <div className={arenaPanel()}>
            <div className={arenaHeader()}>
              <p className={arenaTitle()}>Live practice table</p>
              <span className={arenaStatus()}>Ready</span>
            </div>
            <div className={tableSurface()}>
              <div className={botRow()}>
                <div className={botAvatar()}>BE</div>
                <div className={botMeta()}>
                  <p className={botName()}>Bura Easy Bot</p>
                  <p className={botSubtext()}>Ready for a clean starter match</p>
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

        </div>
      </Container>
      <Link aria-label="Scroll to featured bot section" className={scrollCue()} href="#featured-bot">
        <ArrowDown aria-hidden="true" className={scrollCueIcon()} size={22} />
      </Link>
    </section>
  )
}
