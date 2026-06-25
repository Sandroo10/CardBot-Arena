"use client"

import { Crown, Flame, HardDrive, Medal, RotateCcw, Trophy } from "lucide-react"
import { useEffect, useState } from "react"

import {
  getAchievementIcon,
  getWinRate,
  profileStats
} from "@/components/profile/ProfilePage.helpers"
import {
  achievementBody,
  achievementCard,
  achievementGrid,
  achievementIcon,
  achievementProgress,
  achievementText,
  achievementTitle,
  historyBot,
  historyHeader,
  historyRow,
  historySection,
  historyTable,
  historyTableHeader,
  historyTableInner,
  historyText,
  localNotice,
  overviewGrid,
  overviewPanel,
  panelDescription,
  panelHeader,
  panelTitle,
  performanceLabel,
  performanceList,
  performanceRow,
  performanceValue,
  pointsText,
  profileAvatar,
  profileContent,
  profileDescription,
  profileEyebrow,
  profileHeader,
  profileIdentity,
  profileName,
  profileRank,
  profileRankLabel,
  profileRankValue,
  profileShell,
  resultBadge,
  statsGrid
} from "@/components/profile/ProfilePage.styles"
import { Button, Container, StatCard } from "@/components/ui"
import { defaultUserProfile } from "@/data/profile"
import { clearLocalProgress, readLocalProfile } from "@/lib/progress-storage"

const achievementIcons = {
  trophy: Trophy,
  medal: Medal,
  flame: Flame,
  crown: Crown
}

export function ProfilePage() {
  const [profile, setProfile] = useState(defaultUserProfile)
  const winRate = getWinRate(profile)

  useEffect(() => {
    function syncProfile() {
      setProfile(readLocalProfile(defaultUserProfile))
    }

    syncProfile()
    window.addEventListener("cardbot-progress-change", syncProfile)
    window.addEventListener("storage", syncProfile)

    return () => {
      window.removeEventListener("cardbot-progress-change", syncProfile)
      window.removeEventListener("storage", syncProfile)
    }
  }, [])

  function resetProgress() {
    clearLocalProgress()
    setProfile(readLocalProfile(defaultUserProfile))
  }

  return (
    <main className={profileShell()}>
      <Container className={profileContent()}>
        <section className={profileHeader()}>
          <div className={profileAvatar()}>{profile.initials}</div>
          <div className={profileIdentity()}>
            <p className={profileEyebrow()}>Player profile</p>
            <h1 className={profileName()}>{profile.username}</h1>
            <p className={profileDescription()}>
              Track your arena results, achievements, favorite game, and progress against CardBot opponents.
            </p>
          </div>
          <div className={profileRank()}>
            <p className={profileRankLabel()}>Arena rank</p>
            <p className={profileRankValue()}>#{profile.rank}</p>
          </div>
        </section>

        <section className={statsGrid()} aria-label="Profile statistics">
          {profileStats(profile).map((stat) => (
            <StatCard key={stat.label} label={stat.label} meta={stat.meta} value={stat.value} />
          ))}
        </section>

        <section className={overviewGrid()}>
          <div className={overviewPanel()}>
            <div className={panelHeader()}>
              <h2 className={panelTitle()}>Performance</h2>
              <p className={panelDescription()}>A quick view of your current arena habits.</p>
            </div>
            <div className={performanceList()}>
              <div className={performanceRow()}>
                <span className={performanceLabel()}>Win rate</span>
                <span className={performanceValue()}>{winRate}%</span>
              </div>
              <div className={performanceRow()}>
                <span className={performanceLabel()}>Favorite game</span>
                <span className={performanceValue()}>{profile.favoriteGame}</span>
              </div>
              <div className={performanceRow()}>
                <span className={performanceLabel()}>Best streak</span>
                <span className={performanceValue()}>{profile.bestStreak} wins</span>
              </div>
              <div className={performanceRow()}>
                <span className={performanceLabel()}>Matches played</span>
                <span className={performanceValue()}>{profile.wins + profile.losses}</span>
              </div>
            </div>
          </div>

          <div className={overviewPanel()}>
            <div className={panelHeader()}>
              <h2 className={panelTitle()}>Achievements</h2>
              <p className={panelDescription()}>Unlocked milestones and the next goals in reach.</p>
            </div>
            <div className={achievementGrid()}>
              {profile.achievements.map((achievement) => {
                const Icon = achievementIcons[getAchievementIcon(achievement)]

                return (
                  <article
                    className={achievementCard({ unlocked: achievement.unlocked })}
                    key={achievement.id}
                  >
                    <div className={achievementIcon({ unlocked: achievement.unlocked })}>
                      <Icon aria-hidden="true" size={21} />
                    </div>
                    <div className={achievementBody()}>
                      <h3 className={achievementTitle()}>{achievement.title}</h3>
                      <p className={achievementText()}>{achievement.description}</p>
                      {achievement.progress ? (
                        <p className={achievementProgress()}>{achievement.progress}</p>
                      ) : null}
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className={historySection()}>
          <div className={historyHeader()}>
            <div>
              <h2 className={panelTitle()}>Match history</h2>
              <p className={panelDescription()}>Recent Easy wins and archived matches from maintenance tiers.</p>
            </div>
            <p className={localNotice()}>
              <HardDrive aria-hidden="true" size={17} />
              Progress saved locally on this device.
            </p>
            <Button intent="ghost" size="sm" onClick={resetProgress}>
              <RotateCcw aria-hidden="true" size={16} />
              Reset local
            </Button>
          </div>

          <div className={historyTable()}>
            <div className={historyTableInner()}>
              <div className={historyTableHeader()}>
                <span>Opponent</span>
                <span>Game</span>
                <span>Difficulty</span>
                <span>Result</span>
                <span>Points</span>
                <span>Date</span>
              </div>
              {profile.matchHistory.map((match) => (
                <div className={historyRow()} key={match.id}>
                  <span className={historyBot()}>{match.botName}</span>
                  <span className={historyText()}>{match.game}</span>
                  <span className={historyText()}>{match.difficulty}</span>
                  <span className={resultBadge({ result: match.result })}>{match.result}</span>
                  <span className={pointsText({ earned: match.pointsEarned > 0 })}>
                    +{match.pointsEarned}
                  </span>
                  <span className={historyText()}>{match.playedAt}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Container>
    </main>
  )
}
