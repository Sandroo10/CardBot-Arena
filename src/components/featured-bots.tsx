import Link from "next/link"

import {
  avatar,
  badgeRow,
  botActionRow,
  botBody,
  botCard,
  botDescription,
  botMetaGrid,
  botMetaItem,
  botMetaLabel,
  botMetaValue,
  botName,
  cardTop,
  featuredContainer,
  featuredHeaderRow,
  featuredPlayLink,
  featuredSection,
  featuredSpotlight,
  lockedAction,
  maintenanceOverlay,
  maintenancePill,
  rewardText,
  spotlightBody,
  spotlightBotBubble,
  spotlightBotBubbleText,
  spotlightBotBubbleTitle,
  spotlightCardRank,
  spotlightCardStack,
  spotlightCardSuit,
  spotlightPlayingCard,
  spotlightPlayingCardOffset,
  spotlightVisual,
  viewAllBotsLink
} from "@/components/compcss/featured-bots/FeaturedBots.styles"
import {
  getBotActionLabel,
  getBotHref,
  getFeaturedBot
} from "@/components/compcss/featured-bots/FeaturedBots.helpers"
import { cn } from "@/lib/utils"
import { Badge, buttonStyles, Container, SectionHeader } from "@/components/ui"
import { bots } from "@/data/bots"

export function FeaturedBots() {
  const bot = getFeaturedBot(bots)
  const isActive = bot.status === "active"

  return (
    <section className={featuredSection()} id="featured-bot">
      <Container className={featuredContainer()}>
        <div className={featuredHeaderRow()}>
          <SectionHeader
            description="A featured Bura table is open now. The rest of the roster lives on the Bots page, including locked Medium and Hard tiers."
            eyebrow="Featured bot"
            title="Start with Bura Easy."
          />
          <Link className={cn(buttonStyles({ intent: "secondary" }), viewAllBotsLink())} href="/bots">
            View All Bots
          </Link>
        </div>

        <div className={featuredSpotlight()}>
          <div className={spotlightVisual()}>
            <div className={spotlightBotBubble()}>
              <p className={spotlightBotBubbleTitle()}>Bura practice table</p>
              <p className={spotlightBotBubbleText()}>
                Clean starter flow, readable pace, and one point for a win.
              </p>
            </div>
            <div className={spotlightCardStack()}>
              <div className={spotlightPlayingCard()}>
                <span className={spotlightCardRank()}>10</span>
                <span className={spotlightCardSuit()}>Bura</span>
              </div>
              <div className={`${spotlightPlayingCard()} ${spotlightPlayingCardOffset()}`}>
                <span className={spotlightCardRank()}>A</span>
                <span className={spotlightCardSuit()}>Club</span>
              </div>
            </div>
          </div>

          <div className={spotlightBody()}>
            <article className={botCard({ status: bot.status, game: bot.game })}>
              <div className={cardTop()}>
                <div className={avatar({ game: bot.game })}>{bot.avatar}</div>
                <div className={badgeRow()}>
                  <Badge tone={bot.game === "Joker" ? "joker" : "bura"}>{bot.game}</Badge>
                  <Badge tone={bot.difficulty === "Easy" ? "success" : "locked"}>
                    {bot.difficulty}
                  </Badge>
                </div>
              </div>

              <div className={botBody()}>
                <div>
                  <h3 className={botName()}>{bot.name}</h3>
                  <p className={botDescription()}>{bot.personality}</p>
                </div>
                <div className={botMetaGrid()}>
                  <div className={botMetaItem()}>
                    <p className={botMetaLabel()}>Reward</p>
                    <p className={botMetaValue()}>{isActive ? `${bot.reward} pt` : "Locked"}</p>
                  </div>
                  <div className={botMetaItem()}>
                    <p className={botMetaLabel()}>Status</p>
                    <p className={botMetaValue()}>{isActive ? "Playable" : "Soon"}</p>
                  </div>
                </div>
              </div>

              <div className={botActionRow()}>
                <p className={rewardText()}>{isActive ? "Easy win grants 1 point" : "Tier in progress"}</p>
                {isActive ? (
                  <Link
                    className={cn(
                      buttonStyles({ intent: "primary", size: "sm" }),
                      featuredPlayLink()
                    )}
                    href={getBotHref(bot)}
                  >
                    {getBotActionLabel(bot)}
                  </Link>
                ) : (
                  <span className={lockedAction()}>{getBotActionLabel(bot)}</span>
                )}
              </div>

              {!isActive ? (
                <div className={maintenanceOverlay()} aria-hidden="true">
                  <span className={maintenancePill()}>Under Maintenance</span>
                </div>
              ) : null}
            </article>
          </div>
        </div>
      </Container>
    </section>
  )
}
