"use client"

import { useState, useEffect } from "react"
import { getTodaysValue } from "@/lib/coreValues"
import type { CoreValue } from "@/lib/types"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function TodaysReminder() {
  const [todaysValue, setTodaysValue] = useState<CoreValue | null>(null)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    setTodaysValue(getTodaysValue())
  }, [])

  if (!todaysValue) return null

  return (
    <Card className="mb-6 bg-gradient-to-r from-purple-600 to-violet-700 text-white shadow-xl border-purple-500">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="text-lg font-bold text-white">Today's Core Value</div>
            <div className="text-sm text-purple-200">{todaysValue.title}</div>
          </div>
          <Badge className="bg-purple-500 text-white border-purple-400">Daily Focus</Badge>
        </div>

        {/* Today's Reminder - White Background with Green Text */}
        <div className="bg-white rounded-lg p-4 mb-4 shadow-lg">
          <div className="mb-2">
            <span className="text-sm font-semibold text-green-700">Today's Reminder</span>
          </div>
          <p className="text-green-800 leading-relaxed scannable-text">{todaysValue.dailyReminder}</p>
        </div>

        {/* Expandable Content */}
        {isExpanded && (
          <div className="bg-white rounded-lg p-4 mb-4 shadow-lg">
            <p className="text-lg italic text-green-800 mb-3 leading-relaxed scannable-heading">
              "{todaysValue.principle}"
            </p>
            <p className="text-green-700 leading-relaxed scannable-text">{todaysValue.description}</p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="border-purple-300 text-purple-100 hover:bg-purple-600 hover:text-white bg-transparent shadow-md"
          >
            {isExpanded ? "Show Less" : "Show More"}
          </Button>

          <Link href="/values">
            <Button
              variant="outline"
              size="sm"
              className="border-purple-300 text-purple-100 hover:bg-purple-600 hover:text-white bg-transparent shadow-md"
            >
              Explore All Values
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
