import Link from "next/link"
import { ArrowLeft, Gauge, Lock, Sparkles, Swords, Wrench } from "lucide-react"

import {
  getBotStatusTone,
  getDifficultyNote,
  getRewardText,
  previewCards
} from "@/components/bot-detail/BotDetailPage.helpers"
import {
  actionRow,
  backLink,
  badgeRow,
  botIdentity,
  cardFan,
  cardLabel,
  cardRank,
  detailContent,
  detailGrid,
  detailShell,
  detailSubtitle,
  detailTitle,
  disabledAction,
  heroAvatar,
  heroCopy,
  heroPanel,
  infoPanel,
  lockedNotice,
  previewCard,
  sectionText,
  sectionTitle,
  secondaryTextLink,
  statGrid,
  statLabel,
  statTile,
  statValue,
  statusPill,
  statusRow,
  tableHeader,
  tableKicker,
  tableMeta,
  tablePanel,
  tableTitle,
  tacticIcon,
  tacticItem,
  tacticList,
  titleBlock
} from "@/components/bot-detail/BotDetailPage.styles"
import { Badge, buttonStyles, Container } from "@/components/ui"
import type { Bot } from "@/types/game"

type BotDetailPageProps = {
  bot: Bot
}

const tableNotes = [
  "Clear card reads help you understand each round quickly.",
  "Simple pacing keeps the table easy to scan while you learn.",
  "The one-point reward makes progress visible after every win."
]

export function BotDetailPage({ bot }: BotDetailPageProps) {
  const isActive = bot.status === "active"

  return (
    <main className={detailShell()}>
      <Container className={detailContent()}>
        <Link className={backLink()} href="/bots">
          <ArrowLeft aria-hidden="true" size={18} />
          Back to bots
        </Link>

        <section className={heroPanel()} aria-labelledby="bot-detail-title">
          <div className={heroCopy()}>
            <div className={statusRow()}>
              <span className={statusPill({ status: bot.status })}>
                {isActive ? (
                  <Sparkles aria-hidden="true" size={16} />
                ) : (
                  <Wrench aria-hidden="true" size={16} />
                )}
                {getBotStatusTone(bot)}
              </span>
              <Badge tone={bot.game === "Joker" ? "joker" : "bura"}>{bot.game}</Badge>
              <Badge tone={isActive ? "success" : "locked"}>{bot.difficulty}</Badge>
            </div>

            <div className={botIdentity()}>
              <div className={heroAvatar({ game: bot.game })} aria-hidden="true">
                {bot.avatar}
              </div>
              <div className={titleBlock()}>
                <h1 className={detailTitle()} id="bot-detail-title">
                  {bot.name}
                </h1>
                <p className={detailSubtitle()}>{bot.personality}. {bot.strategy}</p>
              </div>
            </div>

            <div className={badgeRow()} aria-label="Bot stats">
              <Badge tone={isActive ? "success" : "locked"}>{getRewardText(bot)}</Badge>
              <Badge tone="neutral">{getDifficultyNote(bot)}</Badge>
            </div>

            {!isActive ? (
              <div className={lockedNotice()} role="status">
                <Lock aria-hidden="true" size={18} />
                This bot is intentionally visible as a preview only. The playable action stays locked until its table ships.
              </div>
            ) : null}

            <div className={actionRow()}>
              {isActive ? (
                <Link className={buttonStyles({ intent: "primary", size: "md" })} href={`/play/${bot.id}`}>
                  <Swords aria-hidden="true" size={18} />
                  Play table
                </Link>
              ) : (
                <span className={disabledAction()}>
                  <Lock aria-hidden="true" size={18} />
                  Locked
                </span>
              )}
              <Link className={secondaryTextLink()} href="/leaderboard">
                View leaderboard
              </Link>
            </div>
          </div>

          <div className={tablePanel()} aria-label="Arena table preview">
            <div className={tableHeader()}>
              <div>
                <p className={tableKicker()}>Table preview</p>
                <h2 className={tableTitle()}>{bot.game} practice setup</h2>
              </div>
              <div className={tableMeta()}>{isActive ? "Ready" : "Locked"}</div>
            </div>

            <div className={cardFan()} aria-hidden="true">
              {previewCards.map((card) => (
                <div className={previewCard({ accent: card.accent })} key={card.label}>
                  <span className={cardRank()}>{card.rank}</span>
                  <span className={cardLabel()}>{card.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={detailGrid()} aria-label="Bot details">
          <div className={infoPanel()}>
            <h2 className={sectionTitle()}>Table status</h2>
            <p className={sectionText()}>
              The detail view shows every bot safely, but only active bots are presented as available tables.
            </p>
            <div className={statGrid()}>
              <div className={statTile()}>
                <p className={statLabel()}>Game</p>
                <p className={statValue()}>{bot.game}</p>
              </div>
              <div className={statTile()}>
                <p className={statLabel()}>Difficulty</p>
                <p className={statValue()}>{bot.difficulty}</p>
              </div>
              <div className={statTile()}>
                <p className={statLabel()}>Reward</p>
                <p className={statValue()}>{isActive ? `${bot.reward} pt` : "Locked"}</p>
              </div>
              <div className={statTile()}>
                <p className={statLabel()}>Status</p>
                <p className={statValue()}>{isActive ? "Playable" : "Maintenance"}</p>
              </div>
            </div>
          </div>

          <div className={infoPanel()}>
            <h2 className={sectionTitle()}>Why this table is beginner-friendly</h2>
            <p className={sectionText()}>
              Bura Easy is designed as the first playable table, with a readable setup and low-pressure rewards.
            </p>
            <div className={tacticList()}>
              {tableNotes.map((note) => (
                <div className={tacticItem()} key={note}>
                  <Gauge className={tacticIcon()} aria-hidden="true" size={18} />
                  {note}
                </div>
              ))}
            </div>
          </div>
        </section>
      </Container>
    </main>
  )
}
