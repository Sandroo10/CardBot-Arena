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
  groupBotsByStatus,
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
  controlGrid,
  controlsPanel,
  emptyState,
  emptyText,
  emptyTitle,
  filterButton,
  filterRow,
  lockedButton,
  lockedBotText,
  lockedPreview,
  maintenanceOverlay,
  maintenancePill,
  pageDescription,
  pageEyebrow,
  pageHeader,
  pageTitle,
  pageTitleWrap,
  resetButton,
  resultsBar,
  resultsText,
  rosterGroup,
  rosterGroupCount,
  rosterGroupHeader,
  rosterGroups,
  rosterGroupTitle,
  rosterSummary,
  searchIcon,
  searchInput,
  searchWrapCompact
} from "@/components/bots/BotsPage.styles"
import { Badge, buttonStyles, Container } from "@/components/ui"
import { bots } from "@/data/bots"

export function BotsPage() {
  const [state, dispatch] = useReducer(botsPageReducer, initialBotsPageState)
  const visibleBots = useMemo(() => filterBots(bots, state), [state])
  const { activeBots, maintenanceBots } = useMemo(() => groupBotsByStatus(visibleBots), [visibleBots])
  const activeCount = bots.filter((bot) => bot.status === "active").length
  const hasActiveFilters = state.filter !== "All" || state.search.trim().length > 0

  return (
    <main className={botsPageShell()}>
      <Container className={botsPageContent()}>
        <section className={controlsPanel()} aria-label="Bot filters">
          <div className={pageHeader()}>
            <div className={pageTitleWrap()}>
              <p className={pageEyebrow()}>Bot roster</p>
              <h1 className={pageTitle()}>Pick the Bura table or preview upcoming bots.</h1>
              <p className={pageDescription()}>
                Bura Easy is open for the current demo. The remaining Joker and Bura tiers stay visible as under-maintenance cards.
              </p>
            </div>
            <p className={rosterSummary()}>
              {activeCount} playable / {bots.length - activeCount} maintenance
            </p>
          </div>

          <div className={controlGrid()}>
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
            <div className={searchWrapCompact()}>
              <Search className={searchIcon()} aria-hidden="true" size={18} />
              <input
                className={searchInput()}
                onChange={(event) => dispatch({ type: "set-search", search: event.target.value })}
                placeholder="Search bots"
                type="search"
                value={state.search}
              />
            </div>
          </div>

          <div className={resultsBar()}>
            <p className={resultsText()}>
              Showing {visibleBots.length} of {bots.length} bots
            </p>
            {hasActiveFilters ? (
              <button
                className={resetButton()}
                onClick={() => dispatch({ type: "reset" })}
                type="button"
              >
                Reset filters
              </button>
            ) : null}
          </div>
        </section>

        {visibleBots.length > 0 ? (
          <section className={rosterGroups()} aria-label="Bot roster">
            {activeBots.length > 0 ? (
              <div className={rosterGroup()}>
                <div className={rosterGroupHeader()}>
                  <h2 className={rosterGroupTitle({ tone: "active" })}>Available now</h2>
                  <p className={rosterGroupCount()}>{activeBots.length} playable</p>
                </div>
                <div className={botGrid()}>
                  {activeBots.map((bot) => {
                    const botHref = getBotHref(bot)

                    return (
                      <article className={botCard({ status: bot.status, game: bot.game })} key={bot.id}>
                        <div className={botCardTop()}>
                          <div className={botAvatar({ game: bot.game })}>{bot.avatar}</div>
                          <div className={badgeStack()}>
                            <Badge tone={bot.game === "Joker" ? "joker" : "bura"}>{bot.game}</Badge>
                            <Badge tone="success">{getBotStatusLabel(bot)}</Badge>
                          </div>
                        </div>

                        <div className={botCardBody()}>
                          <div>
                            <h3 className={botTitle()}>{bot.name}</h3>
                            <p className={botText()}>{bot.personality}</p>
                          </div>
                          <div className={botInfoGrid()}>
                            <div className={botInfoTile()}>
                              <p className={botInfoLabel()}>Difficulty</p>
                              <p className={botInfoValue()}>{bot.difficulty}</p>
                            </div>
                            <div className={botInfoTile()}>
                              <p className={botInfoLabel()}>Reward</p>
                              <p className={botInfoValue()}>{bot.reward} pt</p>
                            </div>
                          </div>
                        </div>

                        <div className={botFooter()}>
                          <p className={botStrategy()}>{bot.strategy}</p>
                          {botHref ? (
                            <Link className={buttonStyles({ intent: "primary", size: "sm" })} href={botHref}>
                              Play
                            </Link>
                          ) : null}
                        </div>
                      </article>
                    )
                  })}
                </div>
              </div>
            ) : null}

            {maintenanceBots.length > 0 ? (
              <div className={rosterGroup()}>
                <div className={rosterGroupHeader()}>
                  <h2 className={rosterGroupTitle({ tone: "maintenance" })}>Coming soon</h2>
                  <p className={rosterGroupCount()}>{maintenanceBots.length} under maintenance</p>
                </div>
                <div className={botGrid()}>
                  {maintenanceBots.map((bot) => (
                    <article className={botCard({ status: bot.status, game: bot.game })} key={bot.id}>
                      <div className={botCardTop()}>
                        <div className={botAvatar({ game: bot.game })}>{bot.avatar}</div>
                        <div className={badgeStack()}>
                          <Badge tone={bot.game === "Joker" ? "joker" : "bura"}>{bot.game}</Badge>
                          <Badge tone="locked">{getBotStatusLabel(bot)}</Badge>
                        </div>
                      </div>

                      <div className={botCardBody()}>
                        <div>
                          <h3 className={botTitle()}>{bot.name}</h3>
                          <p className={lockedBotText()}>{bot.personality}</p>
                        </div>
                        <p className={lockedPreview()}>
                          {bot.difficulty} tier preview. Reward and table access unlock in a later push.
                        </p>
                      </div>

                      <div className={botFooter()}>
                        <p className={botStrategy()}>{bot.strategy}</p>
                        <span className={lockedButton()}>
                          <Lock aria-hidden="true" size={16} />
                          Locked
                        </span>
                      </div>

                      <div className={maintenanceOverlay()} aria-hidden="true">
                        <span className={maintenancePill()}>
                          <Wrench aria-hidden="true" size={16} />
                          Under Maintenance
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ) : null}
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
