"use client"

import { Crown } from "lucide-react"
import { useMemo, useState } from "react"

import {
  getPeriodPlayers,
  getRankChangeTone,
  leaderboardPeriods,
  type LeaderboardPeriod
} from "@/components/leaderboard/LeaderboardPage.helpers"
import {
  changeText,
  crownIcon,
  leaderboardContent,
  leaderboardPanel,
  leaderboardShell,
  pageDescription,
  pageEyebrow,
  pageHeader,
  pageTitle,
  pageTitleWrap,
  periodButton,
  periodTabs,
  playerCell,
  playerMeta,
  playerName,
  podiumAvatar,
  podiumCard,
  podiumGrid,
  podiumIdentity,
  podiumMeta,
  podiumName,
  podiumPoints,
  podiumPointsUnit,
  podiumRank,
  rankText,
  summaryCard,
  summaryGrid,
  summaryLabel,
  summaryMeta,
  summaryValue,
  tableHeader,
  tableHeaderOptional,
  tableHeaderRight,
  tablePanel,
  tableRow,
  valueText,
  winsText
} from "@/components/leaderboard/LeaderboardPage.styles"
import { Container } from "@/components/ui"
import { leaderboardPlayers } from "@/data/leaderboard"

const podiumPlaces = ["first", "second", "third"] as const

export function LeaderboardPage() {
  const [period, setPeriod] = useState<LeaderboardPeriod>("Weekly")
  const players = useMemo(() => getPeriodPlayers(leaderboardPlayers, period), [period])
  const podiumPlayers = players.slice(0, 3)
  const currentUserRank = players.findIndex((player) => player.isCurrentUser) + 1
  const topPlayer = players[0]

  return (
    <main className={leaderboardShell()}>
      <Container className={leaderboardContent()}>
        <section className={pageHeader()}>
          <div className={pageTitleWrap()}>
            <p className={pageEyebrow()}>Leaderboard</p>
            <h1 className={pageTitle()}>Arena rankings for every card table.</h1>
            <p className={pageDescription()}>
              Compare points, wins, favorite games, and rank movement. Your local profile is highlighted in the list.
            </p>
          </div>
          <div className={periodTabs()} aria-label="Leaderboard period">
            {leaderboardPeriods.map((item) => (
              <button
                className={periodButton({ active: period === item })}
                key={item}
                onClick={() => setPeriod(item)}
                type="button"
              >
                {item}
              </button>
            ))}
          </div>
        </section>

        <section className={summaryGrid()} aria-label="Leaderboard summary">
          <div className={summaryCard()}>
            <p className={summaryLabel()}>Top player</p>
            <p className={summaryValue()}>{topPlayer.name}</p>
            <p className={summaryMeta()}>{topPlayer.points} points this view</p>
          </div>
          <div className={summaryCard()}>
            <p className={summaryLabel()}>Your rank</p>
            <p className={summaryValue()}>#{currentUserRank}</p>
            <p className={summaryMeta()}>Highlighted in the ranked list</p>
          </div>
          <div className={summaryCard()}>
            <p className={summaryLabel()}>Period</p>
            <p className={summaryValue()}>{period}</p>
            <p className={summaryMeta()}>Leaderboard updates after saved matches</p>
          </div>
        </section>

        <section className={leaderboardPanel()}>
          <div className={podiumGrid()}>
            {podiumPlayers.map((player, index) => (
              <article className={podiumCard({ place: podiumPlaces[index] })} key={player.id}>
                {index === 0 ? (
                  <Crown aria-hidden="true" className={crownIcon()} size={22} />
                ) : null}
                <div className={podiumRank({ place: podiumPlaces[index] })}>#{index + 1}</div>
                <div className={podiumAvatar()}>{player.name.slice(0, 2)}</div>
                <div className={podiumIdentity()}>
                  <h2 className={podiumName()}>{player.name}</h2>
                  <p className={podiumMeta()}>{player.favoriteGame} specialist</p>
                </div>
                <p className={podiumPoints()}>
                  {player.points}
                  <span className={podiumPointsUnit()}>pts</span>
                </p>
              </article>
            ))}
          </div>

          <div className={tablePanel()}>
            <div className={tableHeader()}>
              <span>Rank</span>
              <span>Player</span>
              <span className={tableHeaderRight()}>Points</span>
              <span className={tableHeaderOptional()}>Wins</span>
              <span className={tableHeaderOptional()}>Move</span>
            </div>
            {players.map((player, index) => (
              <div className={tableRow({ current: player.isCurrentUser })} key={player.id}>
                <span className={rankText()}>#{index + 1}</span>
                <div className={playerCell()}>
                  <p className={playerName()}>{player.name}</p>
                  <p className={playerMeta()}>{player.favoriteGame}</p>
                </div>
                <span className={valueText()}>{player.points}</span>
                <span className={winsText()}>{player.wins}</span>
                <span className={changeText({ tone: getRankChangeTone(player.rankChange) })}>
                  {player.rankChange}
                </span>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </main>
  )
}
