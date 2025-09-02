"use client"

import type { UserStats } from "@/lib/types"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Target, Zap, TrendingUp } from "lucide-react"

interface StatsBannerProps {
  stats: UserStats
}

export default function StatsBanner({ stats }: StatsBannerProps) {
  const completionRate = stats.totalTasks > 0 ? Math.round((stats.completedTasks / stats.totalTasks) * 100) : 0

  return (
    <Card className="mb-6 bg-gradient-to-r from-purple-200 to-purple-300 text-purple-900 shadow-lg">
      <CardContent className="p-4">
        <div className="grid grid-cols-4 gap-4 text-center">
          <div className="flex flex-col items-center">
            <Target className="w-6 h-6 mb-1" />
            <div className="text-xl font-bold scannable-heading">{stats.totalTasks}</div>
            <div className="text-sm opacity-90 scannable-text">Total Tasks</div>
          </div>
          <div className="flex flex-col items-center">
            <Trophy className="w-6 h-6 mb-1" />
            <div className="text-xl font-bold scannable-heading">{stats.completedTasks}</div>
            <div className="text-sm opacity-90 scannable-text">Completed</div>
          </div>
          <div className="flex flex-col items-center">
            <Zap className="w-6 h-6 mb-1" />
            <div className="text-xl font-bold scannable-heading">{stats.preyTasksCompleted}</div>
            <div className="text-sm opacity-90 scannable-text">Prey Tasks</div>
          </div>
          <div className="flex flex-col items-center">
            <TrendingUp className="w-6 h-6 mb-1" />
            <div className="text-xl font-bold scannable-heading">{completionRate}%</div>
            <div className="text-sm opacity-90 scannable-text">Success Rate</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
