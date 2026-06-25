import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { PlayPage } from "@/components/play/PlayPage"
import { bots } from "@/data/bots"

type PlayRouteProps = {
  params: Promise<{
    botId: string
  }>
}

export function generateStaticParams() {
  return bots.map((bot) => ({
    botId: bot.id
  }))
}

export async function generateMetadata({ params }: PlayRouteProps): Promise<Metadata> {
  const { botId } = await params
  const bot = bots.find((candidate) => candidate.id === botId)

  if (!bot) {
    return {
      title: "Table Not Found | CardBot Arena"
    }
  }

  return {
    title: `${bot.name} Table | CardBot Arena`,
    description: `Play the ${bot.name} visual practice table.`
  }
}

export default async function Page({ params }: PlayRouteProps) {
  const { botId } = await params
  const bot = bots.find((candidate) => candidate.id === botId)

  if (!bot) {
    notFound()
  }

  return <PlayPage bot={bot} />
}
