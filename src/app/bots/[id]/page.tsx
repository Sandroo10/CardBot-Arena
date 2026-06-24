import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { BotDetailPage } from "@/components/bot-detail/BotDetailPage"
import { getBotById } from "@/components/bot-detail/BotDetailPage.helpers"
import { bots } from "@/data/bots"

type BotDetailRouteProps = {
  params: Promise<{
    id: string
  }>
}

export function generateStaticParams() {
  return bots.map((bot) => ({
    id: bot.id
  }))
}

export async function generateMetadata({ params }: BotDetailRouteProps): Promise<Metadata> {
  const { id } = await params
  const bot = getBotById(id)

  if (!bot) {
    return {
      title: "Bot Not Found | CardBot Arena"
    }
  }

  return {
    title: `${bot.name} | CardBot Arena`,
    description: `${bot.name} profile, table status, reward, and arena preview.`
  }
}

export default async function Page({ params }: BotDetailRouteProps) {
  const { id } = await params
  const bot = getBotById(id)

  if (!bot) {
    notFound()
  }

  return <BotDetailPage bot={bot} />
}
