"use client"

import Link from "next/link"
import { ArrowLeft, Lock, RotateCcw, Trophy, X, XCircle } from "lucide-react"
import { useReducer } from "react"

import {
  botCards,
  createMatch,
  playerCards,
  tableCards,
  tableSteps,
  type TableCard
} from "@/components/play/PlayPage.helpers"
import {
  boardGrid,
  boardPanel,
  botHand,
  cardLabel,
  cardSuit,
  cardTop,
  centerCards,
  centerTable,
  dialogActions,
  dialogClose,
  dialogIcon,
  dialogText,
  dialogTitle,
  headerActions,
  headerCopy,
  infoPanel,
  lockedIcon,
  lockedPanel,
  lockedText,
  lockedTitle,
  lossButton,
  modalBackdrop,
  panelText,
  panelTitle,
  playCard,
  playContent,
  playableCardButton,
  playDescription,
  playEyebrow,
  playerHand,
  playerZone,
  playHeader,
  playShell,
  playTitle,
  resultActions,
  resultDialog,
  sidePanel,
  stepItem,
  stepNumber,
  stepsList,
  tableProgress,
  tableSurface,
  zoneHeader,
  zoneScore,
  zoneTitle
} from "@/components/play/PlayPage.styles"
import { Badge, Button, buttonStyles, Container } from "@/components/ui"
import { recordLocalMatch } from "@/lib/progress-storage"
import type { Bot, MatchHistory, MatchResult } from "@/types/game"

type PlayPageProps = {
  bot: Bot
}

type PlayState = {
  result: MatchHistory | null
  selectedCardId: string
}

type PlayAction =
  | {
      type: "finish"
      match: MatchHistory
    }
  | {
      type: "reset"
    }
  | {
      type: "select-card"
      cardId: string
    }

const initialPlayState: PlayState = {
  result: null,
  selectedCardId: "player-ten"
}

function playReducer(state: PlayState, action: PlayAction): PlayState {
  switch (action.type) {
    case "finish":
      return {
        ...state,
        result: action.match
      }
    case "reset":
      return initialPlayState
    case "select-card":
      return {
        ...state,
        selectedCardId: action.cardId
      }
    default:
      return state
  }
}

function CardView({
  card,
  hidden = false,
  selected = false
}: {
  card: TableCard
  hidden?: boolean
  selected?: boolean
}) {
  return (
    <div className={playCard({ tone: card.tone, size: hidden ? "hidden" : "normal", selected })}>
      <div className={cardTop()}>
        <span>{card.rank}</span>
        <span className={cardSuit()}>{card.suit}</span>
      </div>
      <span className={cardLabel()}>{card.label}</span>
    </div>
  )
}

export function PlayPage({ bot }: PlayPageProps) {
  const [state, dispatch] = useReducer(playReducer, initialPlayState)
  const isPlayable = bot.status === "active" && bot.id === "bura-easy"

  function finishMatch(result: MatchResult) {
    const match = createMatch(bot, result)

    recordLocalMatch(match)
    dispatch({
      type: "finish",
      match
    })
  }

  if (!isPlayable) {
    return (
      <main className={playShell()}>
        <Container className={playContent()}>
          <Link className={buttonStyles({ intent: "ghost", size: "sm" })} href="/bots">
            <ArrowLeft aria-hidden="true" size={18} />
            Back to bots
          </Link>
          <section className={lockedPanel()} aria-labelledby="locked-table-title">
            <div className={lockedIcon()}>
              <Lock aria-hidden="true" size={28} />
            </div>
            <h1 className={lockedTitle()} id="locked-table-title">
              {bot.name} is under maintenance
            </h1>
            <p className={lockedText()}>
              This route is safe to open, but only Bura Easy is available for the current visual demo.
            </p>
          </section>
        </Container>
      </main>
    )
  }

  return (
    <main className={playShell()}>
      <Container className={playContent()}>
        <section className={playHeader()}>
          <div className={headerCopy()}>
            <p className={playEyebrow()}>Live table</p>
            <h1 className={playTitle()}>{bot.name} practice board (non-playable just display)</h1>
            <p className={playDescription()}>
              A polished Bura table preview with local match saving, result feedback, and readable card zones.
            </p>
          </div>
          <div className={headerActions()}>
            <Badge tone="success">+{bot.reward} pt win</Badge>
            <Link className={buttonStyles({ intent: "secondary", size: "sm" })} href="/profile">
              Profile
            </Link>
          </div>
        </section>

        <section className={boardGrid()} aria-label="Bura Easy board">
          <div className={boardPanel()}>
            <div className={tableSurface()}>
              <p className={tableProgress()}>Step 2 of 3 / Choose your answer card</p>
              <div className={playerZone()}>
                <div className={zoneHeader()}>
                  <p className={zoneTitle()}>Bura Easy Bot</p>
                  <p className={zoneScore()}>12 cards</p>
                </div>
                <div className={botHand()} aria-label="Bot hidden hand">
                  {botCards.map((card) => (
                    <CardView card={card} hidden key={card.id} />
                  ))}
                </div>
              </div>

              <div className={centerTable()} aria-label="Cards on table">
                <div className={centerCards()}>
                  {tableCards.map((card) => (
                    <CardView card={card} key={card.id} />
                  ))}
                </div>
              </div>

              <div className={playerZone()}>
                <div className={zoneHeader()}>
                  <p className={zoneTitle()}>Your hand</p>
                  <p className={zoneScore()}>3 playable</p>
                </div>
                <div className={playerHand()} aria-label="Player hand">
                  {playerCards.map((card) => (
                    <button
                      aria-pressed={state.selectedCardId === card.id}
                      className={playableCardButton()}
                      key={card.id}
                      onClick={() => dispatch({ type: "select-card", cardId: card.id })}
                      type="button"
                    >
                      <CardView card={card} selected={state.selectedCardId === card.id} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside className={sidePanel()} aria-label="Match controls">
            <div className={infoPanel()}>
              <h2 className={panelTitle()}>Round plan</h2>
              <p className={panelText()}>
                This is a UI-first table, so the controls simulate the end of a match and save the result locally.
              </p>
              <div className={stepsList()}>
                {tableSteps.map((step, index) => (
                  <div className={stepItem()} key={step}>
                    <span className={stepNumber()}>{index + 1}</span>
                    {step}
                  </div>
                ))}
              </div>
            </div>

            <div className={infoPanel()}>
              <h2 className={panelTitle()}>Finish match</h2>
              <p className={panelText()}>
                Save a result to update the local profile and unlock visible progress changes.
              </p>
              <div className={resultActions()}>
                <Button onClick={() => finishMatch("Win")}>
                  <Trophy aria-hidden="true" size={18} />
                  Save win
                </Button>
                <Button
                  className={lossButton()}
                  intent="secondary"
                  onClick={() => finishMatch("Loss")}
                >
                  <XCircle aria-hidden="true" size={18} />
                  Save loss
                </Button>
              </div>
            </div>
          </aside>
        </section>

        {state.result ? (
          <div className={modalBackdrop()} role="presentation">
            <section
              aria-labelledby="match-result-title"
              aria-modal="true"
              className={resultDialog({ result: state.result.result })}
              role="dialog"
            >
              <button
                aria-label="Close result modal"
                className={dialogClose()}
                onClick={() => dispatch({ type: "reset" })}
                type="button"
              >
                <X aria-hidden="true" size={18} />
              </button>
              <div className={dialogIcon({ result: state.result.result })}>
                {state.result.result === "Win" ? (
                  <Trophy aria-hidden="true" size={28} />
                ) : (
                  <XCircle aria-hidden="true" size={28} />
                )}
              </div>
              <h2 className={dialogTitle()} id="match-result-title">
                {state.result.result === "Win" ? "Win saved" : "Loss saved"}
              </h2>
              <p className={dialogText()}>
                {state.result.result === "Win"
                  ? `You earned ${state.result.pointsEarned} point against ${bot.name}.`
                  : `${bot.name} takes this round. Your profile history still updates locally.`}
              </p>
              <div className={dialogActions()}>
                <Link className={buttonStyles({ intent: "primary", size: "md" })} href="/profile">
                  View profile
                </Link>
                <Button intent="secondary" onClick={() => dispatch({ type: "reset" })}>
                  <RotateCcw aria-hidden="true" size={18} />
                  Play again
                </Button>
              </div>
            </section>
          </div>
        ) : null}
      </Container>
    </main>
  )
}
