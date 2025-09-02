"use client"

import { useState, useEffect } from "react"
import { blackCaimanValues, getTodaysValue } from "@/lib/coreValues"
import type { CoreValue } from "@/lib/types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Shuffle } from "lucide-react"

export default function ValuesPage() {
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
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-center mb-2 scannable-heading">Black Caiman Core Values</h1>
          <p className="text-gray-600 text-center scannable-text">Daily wisdom for focused living</p>
        </header>

        <Card className="mb-6 bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 text-purple-900 shadow-xl border-purple-300">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle>
                <div className="text-xl font-bold scannable-heading">Core Values</div>
                <div className="text-sm text-purple-700 font-normal scannable-text">
                  Principles for purposeful action
                </div>
              </CardTitle>
              <div className="flex gap-2">
                {isTodaysValue && (
                  <Badge className="bg-black text-white scannable-small hover:bg-white hover:text-black">Today's Focus</Badge>
                )}
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-0">
            {/* Tab Navigation */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-1 mb-6 bg-purple-200 p-1 rounded-lg">
                {blackCaimanValues.map((value, index) => (
                  <button
                    key={value.id}
                    onClick={() => selectValue(index)}
                    className={`px-4 py-3 text-sm font-medium rounded-md transition-all scannable-text ${
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
              <div className="flex flex-wrap items-center justify-between gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevValue}
                  className="border-purple-400 text-purple-800 hover:bg-purple-100 bg-transparent scannable-text"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Previous
                </Button>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={goToTodaysValue}
                    className="border-purple-400 text-purple-800 hover:bg-purple-100 bg-transparent scannable-text"
                    disabled={isTodaysValue}
                  >
                    Today's Value
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={randomValue}
                    className="border-purple-400 text-purple-800 hover:bg-purple-100 bg-transparent scannable-text"
                  >
                    <Shuffle className="w-4 h-4 mr-1" />
                    Random
                  </Button>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextValue}
                  className="border-purple-400 text-purple-800 hover:bg-purple-100 bg-transparent scannable-text"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>

            {/* Current Value Display */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6 text-purple-900 scannable-heading">{currentValue.title}</h2>

              <div className="bg-purple-50 rounded-lg p-8 mb-6 border border-purple-200">
                <p className="text-2xl italic text-purple-800 mb-6 leading-relaxed scannable-text">
                  "{currentValue.principle}"
                </p>
                <p className="text-lg text-purple-700 leading-relaxed scannable-text">{currentValue.description}</p>
              </div>

              <div className="bg-emerald-50 border border-emerald-300 rounded-lg p-6">
                <div className="mb-4">
                  <span className="text-lg font-semibold text-emerald-700 scannable-text">Today's Reminder</span>
                </div>
                <p className="text-lg text-emerald-800 leading-relaxed scannable-text">{currentValue.dailyReminder}</p>
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="flex items-center justify-center gap-2 mt-8">
              <span className="text-sm text-purple-700 scannable-small">
                {currentIndex + 1} of {blackCaimanValues.length}
              </span>
              <div className="flex gap-1">
                {blackCaimanValues.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => selectValue(index)}
                    className={`w-3 h-3 rounded-full transition-all hover:scale-125 ${
                      index === currentIndex ? "bg-purple-600" : "bg-purple-300 hover:bg-purple-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* All Values Overview */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="scannable-heading">All Core Values</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {blackCaimanValues.map((value, index) => (
                <div
                  key={value.id}
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    index === currentIndex
                      ? "bg-purple-50 border-purple-300 shadow-sm"
                      : "bg-white border-purple-200 hover:bg-purple-50"
                  }`}
                  onClick={() => selectValue(index)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-purple-900 scannable-heading">{value.title}</h3>
                    {value.id === getTodaysValue().id && (
                      <Badge
                        variant="outline"
                        className="text-xs bg-emerald-50 text-emerald-700 border-emerald-300 scannable-small"
                      >
                        Today
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-purple-700 italic mb-2 scannable-text">"{value.principle}"</p>
                  <p className="text-xs text-purple-600 scannable-small">{value.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p className="scannable-text">Listen deeply, observe silently, speak with purpose.</p>
          <p className="mt-4 text-xs text-gray-400 scannable-small">
            All rights reserved 2025. Powered by Coriano Harris
          </p>
        </footer>
      </div>
    </div>
  )
}
