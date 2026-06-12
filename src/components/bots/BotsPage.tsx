"use client"

import Link from "next/link"
import { Lock, Search, Wrench } from "lucide-react"
import { useMemo, useReducer } from "react"

import {
  botFilters,
  botsPageReducer,
  filterBots,
  getBotHref,
  getBotStatusLabel,
  initialBotsPageState,
  type BotFilter
} from "@/components/bots/BotsPage.helpers"
import {
  badgeStack,
  botAvatar,
  botCard,
  botCardBody,
  botCardTop,
  botFooter,
  botGrid,
  botInfoGrid,
  botInfoLabel,
  botInfoTile,
  botInfoValue,
  botsPageContent,
  botsPageShell,
  botStrategy,
  botText,
  botTitle,
  controlsPanel,
  emptyState,
  emptyText,
  emptyTitle,
  filterButton,
  filterRow,
  lockedButton,
  maintenanceOverlay,
  maintenancePill,
  searchIcon,
  searchInput,
  searchWrap
} from "@/components/bots/BotsPage.styles"
import { Badge, buttonStyles, Container } from "@/components/ui"
import { bots } from "@/data/bots"

export function BotsPage() {
  const [state, dispatch] = useReducer(botsPageReducer, initialBotsPageState)
  const visibleBots = useMemo(() => filterBots(bots, state), [state])

  return (
    <main className={botsPageShell()}>
      <Container className={botsPageContent()}>
        <section className={controlsPanel()} aria-label="Bot filters">
          <div className={filterRow()}>
            {botFilters.map((filter) => (
              <button
                className={filterButton({ active: state.filter === filter })}
                key={filter}
                onClick={() => dispatch({ type: "set-filter", filter: filter as BotFilter })}
                type="button"
              >
                {filter}
              </button>
            ))}
          </div>
          <div className={searchWrap()}>
            <Search className={searchIcon()} aria-hidden="true" size={18} />
            <input
              className={searchInput()}
              onChange={(event) => dispatch({ type: "set-search", search: event.target.value })}
              placeholder="Search bots by name, game, or difficulty"
              type="search"
              value={state.search}
            />
          </div>
        </section>

        {visibleBots.length > 0 ? (
          <section className={botGrid()} aria-label="Bot roster">
            {visibleBots.map((bot) => {
              const isActive = bot.status === "active"
              const botHref = getBotHref(bot)

              return (
                <article className={botCard({ status: bot.status, game: bot.game })} key={bot.id}>
                  <div className={botCardTop()}>
                    <div className={botAvatar({ game: bot.game })}>{bot.avatar}</div>
                    <div className={badgeStack()}>
                      <Badge tone={bot.game === "Joker" ? "joker" : "bura"}>{bot.game}</Badge>
                      <Badge tone={bot.difficulty === "Easy" && isActive ? "success" : "locked"}>
                        {getBotStatusLabel(bot)}
                      </Badge>
                    </div>
                  </div>

                  <div className={botCardBody()}>
                    <div>
                      <h2 className={botTitle()}>{bot.name}</h2>
                      <p className={botText()}>{bot.personality}</p>
                    </div>
                    <div className={botInfoGrid()}>
                      <div className={botInfoTile()}>
                        <p className={botInfoLabel()}>Difficulty</p>
                        <p className={botInfoValue()}>{bot.difficulty}</p>
                      </div>
                      <div className={botInfoTile()}>
                        <p className={botInfoLabel()}>Reward</p>
                        <p className={botInfoValue()}>{isActive ? `${bot.reward} pt` : "Locked"}</p>
                      </div>
                    </div>
                  </div>

                  <div className={botFooter()}>
                    <p className={botStrategy()}>{bot.strategy}</p>
                    {isActive && botHref ? (
                      <Link className={buttonStyles({ intent: "primary", size: "sm" })} href={botHref}>
                        Play
                      </Link>
                    ) : (
                      <span className={lockedButton()}>
                        <Lock aria-hidden="true" size={16} />
                        Locked
                      </span>
                    )}
                  </div>

                  {!isActive ? (
                    <div className={maintenanceOverlay()} aria-hidden="true">
                      <span className={maintenancePill()}>
                        <Wrench aria-hidden="true" size={16} />
                        Under Maintenance
                      </span>
                    </div>
                  ) : null}
                </article>
              )
            })}
          </section>
        ) : (
          <section className={emptyState()} aria-live="polite">
            <h2 className={emptyTitle()}>No bots match this view</h2>
            <p className={emptyText()}>
              Try a different search or switch back to All to see the complete arena roster.
            </p>
          </section>
        )}
      </Container>
    </main>
  )
}
