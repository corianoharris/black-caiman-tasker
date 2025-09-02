"use client"

import { useState, useEffect } from "react"
import { blackCaimanValues, getTodaysValue } from "@/lib/coreValues"
import type { CoreValue } from "@/lib/types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Shuffle, Eye, Target, Clock } from "lucide-react"

export default function CoreValuesSection() {
  const [currentValue, setCurrentValue] = useState<CoreValue>(getTodaysValue())
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const todaysValue = getTodaysValue()
    setCurrentValue(todaysValue)
    const index = blackCaimanValues.findIndex((value) => value.id === todaysValue.id)
    setCurrentIndex(index)
  }, [])

  const selectValue = (index: number) => {
    setCurrentIndex(index)
    setCurrentValue(blackCaimanValues[index])
  }

  const nextValue = () => {
    const newIndex = (currentIndex + 1) % blackCaimanValues.length
    selectValue(newIndex)
  }

  const prevValue = () => {
    const newIndex = currentIndex === 0 ? blackCaimanValues.length - 1 : currentIndex - 1
    selectValue(newIndex)
  }

  const randomValue = () => {
    let newIndex
    do {
      newIndex = Math.floor(Math.random() * blackCaimanValues.length)
    } while (newIndex === currentIndex)
    selectValue(newIndex)
  }

  const goToTodaysValue = () => {
    const todaysValue = getTodaysValue()
    setCurrentValue(todaysValue)
    const index = blackCaimanValues.findIndex((value) => value.id === todaysValue.id)
    setCurrentIndex(index)
  }

  const isTodaysValue = currentValue.id === getTodaysValue().id

  return (
    <Card className="mb-6 bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 text-purple-900 shadow-xl border-purple-300">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-3">
            <div className="w-8 h-8 bg-purple-400 rounded-lg flex items-center justify-center">
              <Eye className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xl font-bold scannable-heading">Black Caiman Core Values</div>
              <div className="text-sm text-purple-700 font-normal scannable-text">Daily wisdom for focused living</div>
            </div>
          </CardTitle>
          <div className="flex gap-2">
            {isTodaysValue && (
              <Badge className="bg-black text-white font-semibold border-black scannable-small hover:bg-black hover:text-white" >
                <Target className="w-3 h-3 mr-1" />
                Today's Focus
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Tab Navigation */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-1 mb-4 bg-purple-200 p-1 rounded-lg">
            {blackCaimanValues.map((value, index) => (
              <button
                key={value.id}
                onClick={() => selectValue(index)}
                className={`px-3 py-2 text-xs font-medium rounded-md transition-all scannable-small ${
                  index === currentIndex
                    ? "bg-purple-400 text-white shadow-sm"
                    : "text-purple-800 hover:text-purple-900 hover:bg-purple-300"
                }`}
              >
                {value.title}
              </button>
            ))}
          </div>

          {/* Quick Navigation Controls */}
          <div className="flex flex-wrap gap-2 mt-4 items-center justify-between">
            <Button
              variant="outline"
              size="sm"
              onClick={prevValue}
              className="border-purple-400 text-purple-800 hover:bg-purple-100 bg-transparent scannable-text flex-1"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </Button>

       
              <Button
                variant="outline"
                size="sm"
                onClick={goToTodaysValue}
                className="border-purple-400 text-purple-800 hover:bg-purple-100 bg-transparent scannable-text flex-1"
                disabled={isTodaysValue}
              >
                <Target className="w-4 h-4 mr-1" />
                Today's Value
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={randomValue}
                className="border-purple-400 text-purple-800 hover:bg-purple-100 bg-transparent scannable-text flex-1"
              >
                <Shuffle className="w-4 h-4 mr-1" />
                Random
              </Button>

              <Button
              variant="outline"
              size="sm"
              onClick={nextValue}
              className="border-purple-400 text-purple-800 hover:bg-purple-100 bg-transparent scannable-text flex-1"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
            </div>
          </div>

        {/* Current Value Display */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-purple-900 scannable-heading">{currentValue.title}</h3>

          <div className="bg-purple-50 rounded-lg p-6 mb-4 border border-purple-200">
            <p className="text-xl italic text-purple-800 mb-4 leading-relaxed scannable-text">
              "{currentValue.principle}"
            </p>
            <p className="text-purple-700 leading-relaxed scannable-text">{currentValue.description}</p>
          </div>

          <div className="bg-emerald-50 border border-emerald-300 rounded-lg p-4">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700 scannable-text">Today's Reminder</span>
            </div>
            <p className="text-emerald-800 leading-relaxed scannable-text">{currentValue.dailyReminder}</p>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <span className="text-xs text-purple-700 scannable-small">
            {currentIndex + 1} of {blackCaimanValues.length}
          </span>
          <div className="flex gap-1">
            {blackCaimanValues.map((_, index) => (
              <button
                key={index}
                onClick={() => selectValue(index)}
                className={`w-2 h-2 rounded-full transition-all hover:scale-125 ${
                  index === currentIndex ? "bg-purple-600" : "bg-purple-300 hover:bg-purple-400"
                }`}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
