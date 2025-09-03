"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BookOpen, Target, Heart, Shield } from "lucide-react"

export default function KiplingPage()
{
    const stanzas = [
        {
            id: "stanza-1",
            title: "Stanza 1: Composure Under Pressure",
            icon: Shield,
            color: "bg-purple-100 border-purple-300 text-purple-800",
            originalText: [
                "If you can keep your head when all about you",
                "Are losing theirs and blaming it on you,",
                "If you can trust yourself when all men doubt you,",
                "But make allowance for their doubting too;",
                "If you can wait and not be tired by waiting,",
                "Or being lied about, don't deal in lies,",
                "Or being hated, don't give way to hating,",
                "And yet don't look too good, nor talk too wise:",
            ],
            breakdown: [
                {
                    line: "If you can keep your head when all about you / Are losing theirs and blaming it on you,",
                    meaning: "Stay calm under pressure, even when everyone else panics or unfairly blames you.",
                },
                {
                    line: "If you can trust yourself when all men doubt you, / But make allowance for their doubting too;",
                    meaning: "Believe in yourself, but don't ignore others' doubts — sometimes criticism has truth.",
                },
                {
                    line: "If you can wait and not be tired by waiting, / Or being lied about, don't deal in lies,",
                    meaning: "Be patient, and don't fight lies with more lies.",
                },
                {
                    line: "Or being hated, don't give way to hating, / And yet don't look too good, nor talk too wise:",
                    meaning: "Don't hate back if others hate you, and stay humble — don't act superior.",
                },
            ],
        },
        {
            id: "stanza-2",
            title: "Stanza 2: Balance and Resilience",
            icon: Target,
            color: "bg-purple-50 border-purple-200 text-purple-800",
            originalText: [
                "If you can dream—and not make dreams your master;",
                "If you can think—and not make thoughts your aim;",
                "If you can meet with Triumph and Disaster",
                "And treat those two impostors just the same;",
                "If you can bear to hear the truth you've spoken",
                "Twisted by knaves to make a trap for fools,",
                "Or watch the things you gave your life to, broken,",
                "And stoop and build 'em up with worn-out tools:",
            ],
            breakdown: [
                {
                    line: "If you can dream—and not make dreams your master; / If you can think—and not make thoughts your aim;",
                    meaning: "Have dreams and ideas, but don't let them control you — balance them with action.",
                },
                {
                    line: "If you can meet with Triumph and Disaster / And treat those two impostors just the same;",
                    meaning: "Success and failure are temporary — don't let either define you.",
                },
                {
                    line: "If you can bear to hear the truth you've spoken / Twisted by knaves to make a trap for fools,",
                    meaning: "Accept when your words are twisted or misused by dishonest people.",
                },
                {
                    line: "Or watch the things you gave your life to, broken, / And stoop and build 'em up with worn-out tools:",
                    meaning: "Even if your hard work gets destroyed, start over with whatever little strength you have left.",
                },
            ],
        },
        {
            id: "stanza-3",
            title: "Stanza 3: Courage and Perseverance",
            icon: Heart,
            color: "bg-yellow-50 border-yellow-200 text-yellow-800",
            originalText: [
                "If you can make one heap of all your winnings",
                "And risk it on one turn of pitch-and-toss,",
                "And lose, and start again at your beginnings",
                "And never breathe a word about your loss;",
                "If you can force your heart and nerve and sinew",
                "To serve your turn long after they are gone,",
                "And so hold on when there is nothing in you",
                "Except the Will which says to them: 'Hold on!'",
            ],
            breakdown: [
                {
                    line: "If you can make one heap of all your winnings / And risk it on one turn of pitch-and-toss,",
                    meaning: "Be willing to risk everything you've earned on a single chance.",
                },
                {
                    line: "And lose, and start again at your beginnings / And never breathe a word about your loss;",
                    meaning: "If you lose it all, begin again — without complaining.",
                },
                {
                    line: "If you can force your heart and nerve and sinew / To serve your turn long after they are gone,",
                    meaning: "Push your body and spirit to keep going, even when exhausted.",
                },
                {
                    line: "And so hold on when there is nothing in you / Except the Will which says to them: 'Hold on!'",
                    meaning: "When you feel empty, let sheer determination keep you moving forward.",
                },
            ],
        },
        {
            id: "stanza-4",
            title: "Stanza 4: Mastery and Maturity",
            icon: BookOpen,
            color: "bg-purple-100 border-purple-300 text-purple-800",
            originalText: [
                "If you can talk with crowds and keep your virtue,",
                "Or walk with Kings—nor lose the common touch,",
                "If neither foes nor loving friends can hurt you,",
                "If all men count with you, but none too much;",
                "If you can fill the unforgiving minute",
                "With sixty seconds' worth of distance run,",
                "Yours is the Earth and everything that's in it,",
                "And—which is more—you'll be a Man, my son!",
            ],
            breakdown: [
                {
                    line: "If you can talk with crowds and keep your virtue, / Or walk with Kings—nor lose the common touch,",
                    meaning: "Be comfortable with ordinary people and powerful leaders — but stay grounded and moral.",
                },
                {
                    line: "If neither foes nor loving friends can hurt you, / If all men count with you, but none too much;",
                    meaning:
                        "Don't let enemies or even close friends control your emotions — treat everyone with respect, but don't depend on anyone too heavily.",
                },
                {
                    line: "If you can fill the unforgiving minute / With sixty seconds' worth of distance run,",
                    meaning: "Make the most of every moment; don't waste time.",
                },
                {
                    line: "Yours is the Earth and everything that's in it, / And—which is more—you'll be a Man, my son!",
                    meaning:
                        "If you can do all this, you'll not only succeed in life, but you'll also become a truly mature, strong, and complete person.",
                },
            ],
        },
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-6 max-w-6xl">
                <header className="mb-8">
                    <h1 className="text-4xl font-bold text-center mb-2 scannable-heading">If— by Rudyard Kipling</h1>
                    <p className="text-gray-600 text-center scannable-text">
                        A timeless guide to character, resilience, and personal mastery
                    </p>
                </header>

                {/* Black Caiman Mindset Header */}
                <div className="mb-6 text-center">
                    <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full border border-purple-300">
                        <span className="text-purple-800 font-semibold scannable-heading">Black Caiman Wisdom</span>
                    </div>
                </div>

                {/* Introduction */}
                <Card className="mb-8 bg-gradient-to-r from-purple-200 to-purple-300 text-purple-900 shadow-xl">
                    <CardHeader>
                        <CardTitle className="text-center">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <span className="text-2xl scannable-heading">The Complete Poem</span>
                            </div>
                            <Badge className="bg-purple-500 text-white scannable-small">A Recipe for Resilience</Badge>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                        <div className="text-lg font-medium text-purple-700 scannable-text">
                            Kipling's masterpiece lays out a "recipe" for resilience, balance, humility, patience, courage, and
                            discipline.
                        </div>
                        <div className="text-base text-purple-800 scannable-text">
                            The reward? <strong>Mastery of yourself</strong> — the real mark of being grown-up.
                        </div>
                    </CardContent>
                </Card>

                {/* Poem Analysis with Accordion */}
                <Accordion type="multiple" className="space-y-4">
                    {stanzas.map((stanza) =>
                    {
                        const IconComponent = stanza.icon
                        return (
                            <AccordionItem
                                key={stanza.id}
                                value={stanza.id}
                                className="border border-purple-200 rounded-lg shadow-lg"
                            >
                                <AccordionTrigger className={`${stanza.color} rounded-t-lg px-6 py-4 hover:no-underline`}>
                                    <div className="flex items-center gap-3 scannable-heading">
                                        <IconComponent className="w-6 h-6" />
                                        {stanza.title}
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="px-6 py-4 bg-white">
                                    <div className="space-y-6">
                                        {/* Original Text */}
                                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                            <h4 className="font-semibold text-gray-800 mb-3 scannable-heading">Original Text</h4>
                                            <div className="space-y-1">
                                                {stanza.originalText.map((line, index) => (
                                                    <p key={index} className="text-gray-700 italic scannable-text leading-relaxed">
                                                        {line}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Line-by-Line Breakdown */}
                                        <div className="space-y-4">
                                            <h4 className="font-semibold text-purple-800 scannable-heading">Plain English Breakdown</h4>
                                            {stanza.breakdown.map((item, index) => (
                                                <div key={index} className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                                                    <div className="mb-2">
                                                        <p className="text-sm text-gray-600 italic scannable-text">"{item.line}"</p>
                                                    </div>
                                                    <div className="flex items-start gap-2">
                                                        <span className="text-purple-600 font-bold">👉</span>
                                                        <p className="text-gray-700 scannable-text">{item.meaning}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        )
                    })}
                </Accordion>

                {/* Modern Application */}
                <Card className="mt-8 bg-gradient-to-r from-purple-100 to-purple-200 text-purple-900 shadow-xl">
                    <CardHeader>
                        <CardTitle className="text-center text-xl scannable-heading">
                            Modern Application: The Black Caiman Connection
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-4">
                                <h3 className="font-bold text-purple-800 scannable-heading">Kipling's Wisdom</h3>
                                <ul className="space-y-2 text-sm">
                                    <li className="text-purple-700 scannable-text">• Keep your head when others lose theirs</li>
                                    <li className="text-purple-700 scannable-text">• Trust yourself but listen to doubt</li>
                                    <li className="text-purple-700 scannable-text">• Treat triumph and disaster the same</li>
                                    <li className="text-purple-700 scannable-text">• Start again after losing everything</li>
                                    <li className="text-purple-700 scannable-text">• Hold on when only will remains</li>
                                    <li className="text-purple-700 scannable-text">• Make every minute count</li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="font-bold text-purple-800 scannable-heading">Black Caiman Principles</h3>
                                <ul className="space-y-2 text-sm">
                                    <li className="text-purple-700 scannable-text">• "Calm is lethal" - composure under pressure</li>
                                    <li className="text-purple-700 scannable-text">
                                        • "I do not chase. I lead" - self-trust and direction
                                    </li>
                                    <li className="text-purple-700 scannable-text">• "Precision is power" - focused action</li>
                                    <li className="text-purple-700 scannable-text">• "I prepare in silence" - quiet resilience</li>
                                    <li className="text-purple-700 scannable-text">• "I guard what others waste" - time mastery</li>
                                    <li className="text-purple-700 scannable-text">• "And I don't miss" - unwavering execution</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white p-4 rounded-lg border border-purple-300">
                            <h4 className="font-semibold text-purple-800 mb-2 scannable-heading">Daily Practice</h4>
                            <p className="text-purple-700 scannable-text">
                                Both Kipling's "If—" and the Black Caiman philosophy teach us that true strength comes from inner
                                discipline, emotional regulation, and the ability to persist through adversity while maintaining our
                                values and humanity.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Summary */}
                <Card className="mt-8 bg-gradient-to-r from-purple-200 to-purple-300 text-purple-900 shadow-xl">
                    <CardHeader>
                        <CardTitle className="text-center text-xl scannable-heading">The Ultimate Message</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                        <div className="text-lg leading-relaxed space-y-3">
                            <p className="scannable-text font-medium">
                                "If you can do all this, you'll not only succeed in life, but you'll also become a truly mature, strong,
                                and complete person."
                            </p>
                            <p className="text-purple-700 font-bold text-xl scannable-heading">The reward is mastery of yourself.</p>
                            <p className="text-purple-700 font-bold text-xl scannable-heading">The real mark of being grown-up.</p>
                        </div>
                    </CardContent>
                </Card>

                <footer className="mt-12 text-center text-gray-500 text-sm">
                    <p className="scannable-text">Wisdom transcends time. Character is eternal.</p>
                    <p className="mt-6 text-xs text-gray-400 scannable-small">Rudyard Kipling • "If—" • 1895</p>
                </footer>
            </div>
        </div>
    )
}
