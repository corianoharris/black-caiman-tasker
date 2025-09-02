"use client"

import { useState } from "react"
import type { TimeBlock, Task } from "@/lib/types"
import { generateDailySchedule, getScheduleStats } from "@/lib/scheduleGenerator"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Target, Coffee, Zap, BarChart3, Calendar, Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react"

interface ScheduleViewProps {
  tasks: Task[]
  onClose: () => void
}

export default function ScheduleView({ tasks, onClose }: ScheduleViewProps) {
  const [schedule, setSchedule] = useState<TimeBlock[]>(() => generateDailySchedule(tasks))
  const [currentBlockIndex, setCurrentBlockIndex] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(0)

  const stats = getScheduleStats(schedule)
  const currentBlock = schedule[currentBlockIndex]

  const regenerateSchedule = () => {
    const newSchedule = generateDailySchedule(tasks)
    setSchedule(newSchedule)
    setCurrentBlockIndex(0)
    setIsRunning(false)
    setTimeRemaining(0)
  }

  const startTimer = () => {
    if (currentBlock) {
      setTimeRemaining(currentBlock.duration * 60) // Convert to seconds
      setIsRunning(true)
    }
  }

  const pauseTimer = () => {
    setIsRunning(false)
  }

  const nextBlock = () => {
    if (currentBlockIndex < schedule.length - 1) {
      setCurrentBlockIndex(currentBlockIndex + 1)
      setIsRunning(false)
      setTimeRemaining(0)
    }
  }

  const prevBlock = () => {
    if (currentBlockIndex > 0) {
      setCurrentBlockIndex(currentBlockIndex - 1)
      setIsRunning(false)
      setTimeRemaining(0)
    }
  }

  const resetTimer = () => {
    if (currentBlock) {
      setTimeRemaining(currentBlock.duration * 60)
      setIsRunning(false)
    }
  }

  const getBlockIcon = (type: string) => {
    switch (type) {
      case "prey":
        return <Target className="w-4 h-4" />
      case "noise":
        return <BarChart3 className="w-4 h-4" />
      case "break":
        return <Coffee className="w-4 h-4" />
      case "optional":
        return <Zap className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    if (hours > 0) {
      return `${hours}h ${mins}m`
    }
    return `${mins}m`
  }

  const formatTimeRemaining = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header - Fixed */}
        <div className="p-4 sm:p-6 border-b bg-slate-50 flex-shrink-0">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between mb-4">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
              Daily Schedule
            </h2>
            <div className="flex flex-wrap justify-between gap-2">
              <Button variant="outline" onClick={regenerateSchedule} size="sm" className="text-xs sm:text-sm">
                <RotateCcw className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Regenerate
              </Button>
              <Button variant="outline" onClick={onClose} size="sm" className="text-xs sm:text-sm">
                Close
              </Button>
            </div>
          </div>

          {/* Schedule Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-4 text-center">
            <div className="bg-red-50 p-2 sm:p-3 rounded-lg">
              <div className="text-sm sm:text-lg font-bold text-red-600">{stats.preyTime}h</div>
              <div className="text-xs text-red-600">Prey Time</div>
            </div>
            <div className="bg-yellow-50 p-2 sm:p-3 rounded-lg">
              <div className="text-sm sm:text-lg font-bold text-yellow-600">{stats.noiseTime}h</div>
              <div className="text-xs text-yellow-600">Noise Time</div>
            </div>
            <div className="bg-gray-50 p-2 sm:p-3 rounded-lg">
              <div className="text-sm sm:text-lg font-bold text-gray-600">{stats.breakTime}h</div>
              <div className="text-xs text-gray-600">Break Time</div>
            </div>
            <div className="bg-blue-50 p-2 sm:p-3 rounded-lg">
              <div className="text-sm sm:text-lg font-bold text-blue-600">{stats.optionalTime}h</div>
              <div className="text-xs text-blue-600">Optional</div>
            </div>
            <div className="bg-green-50 p-2 sm:p-3 rounded-lg">
              <div className="text-sm sm:text-lg font-bold text-green-600">{stats.focusRatio}%</div>
              <div className="text-xs text-green-600">Focus Ratio</div>
            </div>
          </div>
        </div>

        {/* Main Content - Scrollable */}
        <div className="flex-1 overflow-y-auto">
          {/* Mobile Layout - Stacked */}
          <div className="flex flex-col lg:flex-row min-h-full">
            {/* Schedule Timeline */}
            <div className="lg:w-1/2 p-4 flex flex-col border-b lg:border-b-0 lg:border-r">
              <h3 className="font-semibold mb-4 flex items-center gap-2 text-sm sm:text-base">
                <Clock className="w-4 h-4" />
                Today's Timeline
              </h3>
              <div className="space-y-2">
                {schedule.map((block, index) => (
                  <div
                    key={block.id}
                    className={`p-3 rounded-lg border-l-4 cursor-pointer transition-all touch-manipulation ${
                      index === currentBlockIndex
                        ? "bg-blue-50 border-blue-500 shadow-md"
                        : "bg-gray-50 border-gray-300 hover:bg-gray-100 active:bg-gray-200"
                    }`}
                    style={{ borderLeftColor: block.color }}
                    onClick={() => setCurrentBlockIndex(index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getBlockIcon(block.type)}
                        <span className="font-medium text-xs sm:text-sm">
                          {block.startTime} - {block.endTime}
                        </span>
                      </div>
                      <Badge
                        variant="outline"
                        className="text-xs"
                        style={{ color: block.color, borderColor: block.color }}
                      >
                        {formatDuration(block.duration)}
                      </Badge>
                    </div>
                    <div className="mt-1 text-xs sm:text-sm text-gray-700 truncate">{block.title}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Block Focus */}
            <div className="lg:w-1/2 p-4 flex flex-col">
              {currentBlock ? (
                <>
                  <div className="text-center mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-2">Current Block</h3>
                    <div className="p-3 sm:p-4 rounded-lg text-white mb-4" style={{ backgroundColor: currentBlock.color }}>
                      <div className="flex items-center justify-center gap-2 mb-2">
                        {getBlockIcon(currentBlock.type)}
                        <span className="font-semibold uppercase text-xs sm:text-sm">{currentBlock.type}</span>
                      </div>
                      <div className="text-sm sm:text-lg font-bold">{currentBlock.title}</div>
                      <div className="text-xs sm:text-sm opacity-90">
                        {currentBlock.startTime} - {currentBlock.endTime}
                      </div>
                    </div>
                  </div>

                  {/* Timer */}
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="text-2xl sm:text-4xl font-mono font-bold mb-4">
                      {timeRemaining > 0 ? formatTimeRemaining(timeRemaining) : formatDuration(currentBlock.duration)}
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                      {!isRunning ? (
                        <Button onClick={startTimer} className="bg-green-600 hover:bg-green-700 touch-manipulation" size="sm">
                          <Play className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          Start
                        </Button>
                      ) : (
                        <Button onClick={pauseTimer} variant="outline" size="sm" className="touch-manipulation">
                          <Pause className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          Pause
                        </Button>
                      )}
                      <Button onClick={resetTimer} variant="outline" size="sm" className="touch-manipulation">
                        <RotateCcw className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        Reset
                      </Button>
                    </div>
                  </div>

                  {/* Block Navigation */}
                  <div className="flex justify-between items-center mb-4">
                    <Button onClick={prevBlock} disabled={currentBlockIndex <= 0} variant="outline" size="sm" className="touch-manipulation">
                      <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      Previous
                    </Button>
                    <div className="text-xs sm:text-sm text-gray-600">
                      Block {currentBlockIndex + 1} of {schedule.length}
                    </div>
                    <Button onClick={nextBlock} disabled={currentBlockIndex >= schedule.length - 1} variant="outline" size="sm" className="touch-manipulation">
                      Next
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                    </Button>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${((currentBlockIndex + 1) / schedule.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center text-gray-500">
                  <Calendar className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-4 opacity-50" />
                  <p className="text-sm sm:text-base">No schedule blocks available</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
