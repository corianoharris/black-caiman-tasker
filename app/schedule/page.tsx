"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ChevronDown, ChevronUp, Play, Pause, RotateCcw, RefreshCw } from "lucide-react"
import { generateDailySchedule, getScheduleStats } from "@/lib/scheduleGenerator"
import { getTasks } from "@/lib/storage" // Use the existing storage module
import type { TimeBlock } from "@/lib/types"
import type { Task } from "@/lib/types"

export default function SchedulePage() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [schedule, setSchedule] = useState<TimeBlock[]>([])
  const [currentBlockIndex, setCurrentBlockIndex] = useState(0)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [showOverview, setShowOverview] = useState(false)
  const [scheduleStats, setScheduleStats] = useState({
    preyTime: 0,
    noiseTime: 0,
    breakTime: 0,
    optionalTime: 0,
    totalBlocks: 0,
    focusRatio: 0,
  })

  useEffect(() => {
    const storedTasks = getTasks()
    setTasks(storedTasks)
    const generatedSchedule = generateDailySchedule(storedTasks)
    setSchedule(generatedSchedule)
    const stats = getScheduleStats(generatedSchedule)
    setScheduleStats(stats)
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimeElapsed((prev) => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isTimerRunning])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    if (hours > 0) {
      return `${hours}h ${mins}m`
    }
    return `${mins}m`
  }

  const startTimer = () => setIsTimerRunning(true)
  const pauseTimer = () => setIsTimerRunning(false)
  const resetTimer = () => {
    setIsTimerRunning(false)
    setTimeElapsed(0)
  }

  const nextBlock = () => {
    if (currentBlockIndex < schedule.length - 1) {
      setCurrentBlockIndex(currentBlockIndex + 1)
      resetTimer()
    }
  }

  const prevBlock = () => {
    if (currentBlockIndex > 0) {
      setCurrentBlockIndex(currentBlockIndex - 1)
      resetTimer()
    }
  }

  const regenerateSchedule = () => {
    const storedTasks = getTasks()
    setTasks(storedTasks)
    const newSchedule = generateDailySchedule(storedTasks)
    setSchedule(newSchedule)
    const stats = getScheduleStats(newSchedule)
    setScheduleStats(stats)
    setCurrentBlockIndex(0)
    resetTimer()
  }

  const currentBlock = schedule[currentBlockIndex]
  const progress = currentBlock ? Math.min((timeElapsed / (currentBlock.duration * 60)) * 100, 100) : 0

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Daily Schedule</h1>
        <p className="text-slate-600">Intelligent time blocking based on your tasks</p>
      </div>

      {/* Schedule Overview Dropdown */}
      <Card className="mb-6">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Schedule Overview</CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowOverview(!showOverview)}
              className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
            >
              {showOverview ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              {showOverview ? "Hide" : "Show"} Details
            </Button>
          </div>
        </CardHeader>
        {showOverview && (
          <CardContent className="pt-0">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
                <div className="text-2xl font-bold text-red-700">{formatDuration(scheduleStats.preyTime * 60)}</div>
                <div className="text-sm text-red-600">Prey Time</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="text-2xl font-bold text-yellow-700">{formatDuration(scheduleStats.noiseTime * 60)}</div>
                <div className="text-sm text-yellow-600">Noise Time</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="text-2xl font-bold text-green-700">{formatDuration(scheduleStats.breakTime * 60)}</div>
                <div className="text-sm text-green-600">Break Time</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-2xl font-bold text-blue-700">{scheduleStats.focusRatio}%</div>
                <div className="text-sm text-blue-600">Focus Ratio</div>
              </div>
            </div>
          </CardContent>
        )}
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Schedule Timeline */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Today's Timeline</CardTitle>
              <Button
                onClick={regenerateSchedule}
                variant="outline"
                size="sm"
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 bg-transparent"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Regenerate
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {schedule.length === 0 ? (
                  <div className="text-center text-slate-500 py-8">
                    <p>No schedule blocks available.</p>
                    <p className="text-sm mt-2">Add some tasks to generate a schedule.</p>
                  </div>
                ) : (
                  schedule.map((block, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-3 p-3 rounded-lg border transition-colors cursor-pointer ${
                        index === currentBlockIndex
                          ? "bg-blue-50 border-blue-200"
                          : "bg-slate-50 border-slate-200 hover:bg-slate-100"
                      }`}
                      onClick={() => {
                        setCurrentBlockIndex(index)
                        resetTimer()
                      }}
                    >
                      <div className="text-sm font-mono text-slate-600 min-w-[80px]">{block.startTime}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Badge
                            variant={
                              block.type === "prey" ? "destructive" : block.type === "noise" ? "secondary" : "default"
                            }
                            className="text-xs"
                          >
                            {block.type}
                          </Badge>
                          <span className="font-medium text-slate-900">{block.title}</span>
                        </div>
                        {block.description && <div className="text-sm text-slate-600 mt-1">{block.description}</div>}
                      </div>
                      <div className="text-sm text-slate-500 min-w-[50px] text-right">
                        {formatDuration(block.duration)}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Current Block Focus */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Current Block</CardTitle>
            </CardHeader>
            <CardContent>
              {currentBlock ? (
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge
                        variant={
                          currentBlock.type === "prey"
                            ? "destructive"
                            : currentBlock.type === "noise"
                              ? "secondary"
                              : "default"
                        }
                      >
                        {currentBlock.type}
                      </Badge>
                      <span className="text-sm text-slate-600">{currentBlock.startTime}</span>
                    </div>
                    <h3 className="font-semibold text-lg text-slate-900">{currentBlock.title}</h3>
                    {currentBlock.description && (
                      <p className="text-slate-600 text-sm mt-1">{currentBlock.description}</p>
                    )}
                  </div>

                  <div>
                    <div className="flex justify-between text-sm text-slate-600 mb-2">
                      <span>Progress</span>
                      <span>
                        {formatTime(timeElapsed)} / {formatDuration(currentBlock.duration)}
                      </span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>

                  <div className="flex gap-2">
                    <Button
                      onClick={isTimerRunning ? pauseTimer : startTimer}
                      className="flex-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
                    >
                      {isTimerRunning ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                      {isTimerRunning ? "Pause" : "Start"}
                    </Button>
                    <Button
                      onClick={resetTimer}
                      variant="outline"
                      className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 bg-transparent"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      onClick={prevBlock}
                      disabled={currentBlockIndex === 0}
                      variant="outline"
                      className="flex-1 bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
                    >
                      Previous
                    </Button>
                    <Button
                      onClick={nextBlock}
                      disabled={currentBlockIndex === schedule.length - 1}
                      variant="outline"
                      className="flex-1 bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
                    >
                      Next
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center text-slate-500 py-8">
                  <p>No schedule blocks available.</p>
                  <p className="text-sm mt-2">Add some tasks to generate a schedule.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
