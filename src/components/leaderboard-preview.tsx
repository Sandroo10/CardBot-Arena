import Link from "next/link"

import {
  podiumPlayers,
  rankedPlayers
} from "@/components/compcss/leaderboard-preview/LeaderboardPreview.helpers"
import {
  leaderboardContainer,
  leaderboardFooter,
  leaderboardNote,
  leaderboardPanel,
  leaderboardSection,
  podiumAvatar,
  podiumCard,
  podiumGrid,
  podiumIdentity,
  podiumMeta,
  podiumName,
  podiumPoints,
  podiumPointsUnit,
  podiumRank,
  rankingChange,
  rankingGame,
  rankingHeader,
  rankingHeaderMove,
  rankingHeaderRight,
  rankingIndex,
  rankingName,
  rankingPoints,
  rankingRow,
  rankingWrap
} from "@/components/compcss/leaderboard-preview/LeaderboardPreview.styles"
import { buttonStyles, Container, SectionHeader } from "@/components/ui"

const podiumPlaces = ["first", "second", "third"] as const

export function LeaderboardPreview() {
  return (
    <section className={leaderboardSection()}>
      <Container className={leaderboardContainer()}>
        <SectionHeader
          description="A polished preview of the arena rankings, with your future local profile highlighted once match history is added."
          eyebrow="Leaderboard"
          title="Climb the table one win at a time."
        />

        <div className={leaderboardPanel()}>
          <div className={podiumGrid()}>
            {podiumPlayers.map((player, index) => (
              <article
                className={podiumCard({ place: podiumPlaces[index] })}
                key={player.id}
              >
                <div className={podiumRank({ place: podiumPlaces[index] })}>#{index + 1}</div>
                <div className={podiumAvatar()}>{player.name.slice(0, 2)}</div>
                <div className={podiumIdentity()}>
                  <h3 className={podiumName()}>{player.name}</h3>
                  <p className={podiumMeta()}>{player.favoriteGame} specialist</p>
                </div>
                <p className={podiumPoints()}>
                  {player.points}
                  <span className={podiumPointsUnit()}>pts</span>
                </p>
              </article>
            ))}
          </div>

          <div className={rankingWrap()}>
            <div className={rankingHeader()}>
              <span>Rank</span>
              <span>Player</span>
              <span className={rankingHeaderRight()}>Points</span>
              <span className={rankingHeaderMove()}>Move</span>
            </div>
            {rankedPlayers.map((player, index) => (
              <div className={rankingRow({ current: player.isCurrentUser })} key={player.id}>
                <span className={rankingIndex()}>#{index + 1}</span>
                <div>
                  <p className={rankingName()}>{player.name}</p>
                  <p className={rankingGame()}>
                    {player.wins} wins - {player.favoriteGame}
                  </p>
                </div>
                <span className={rankingPoints()}>{player.points}</span>
                <span className={rankingChange()}>{player.rankChange}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={leaderboardFooter()}>
          <p className={leaderboardNote()}>
            Current leaderboard values are presentation-ready mock data until local match saving is added.
          </p>
          <Link className={buttonStyles({ intent: "secondary" })} href="/leaderboard">
            Full Leaderboard
          </Link>
        </div>
      </Container>
    </section>
  )
}
