"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Heart, Brain, Users, DollarSign } from "lucide-react"

export default function PhilosophyPage() {
  const sections = [
    {
      id: "connections",
      title: "IV. Black Caiman Connections",
      icon: Users,
      color: "bg-purple-100 border-purple-300 text-purple-800",
      content: {
        subsections: [
          {
            title: "Friendships",
            points: [
              "Few, deep. No trophy collecting.",
              "Energy check: If they drain clarity or peace, they're not a fit.",
              "Truth over comfort: Keep friends who challenge with honesty, not flattery.",
            ],
          },
          {
            title: "Mentors",
            points: [
              "Results > hype. Choose those who've done it.",
              "Integrity is the compass. No sellouts or attention-chasers.",
              "Values align. Skill is learnable; mindset isn't.",
            ],
          },
          {
            title: "LinkedIn Connections",
            points: [
              "Mission-aligned only. Connect to build, not network.",
              "Silence > noise. Only signal, no fluff.",
              "Observe first. Earn connection.",
            ],
          },
          {
            title: "Family Connections",
            points: [
              "Blood isn't a pass. Earn loyalty through love, respect, boundaries.",
              "Protect peace. Distance poison if needed.",
              "Lead by example. Live with conviction.",
            ],
          },
        ],
        dailyReminder: "I do not chase. I lead. I do not cling. I observe. I do not echo. I choose.",
      },
    },
    {
      id: "contact-romantic",
      title: "V. Black Caiman Contact & Romantic Mindset",
      icon: Heart,
      color: "bg-purple-50 border-purple-200 text-purple-800",
      content: {
        subsections: [
          {
            title: "Contact Mindset",
            points: [
              "High Signal, Low Noise: Keep contacts who sharpen your mind, expand vision, or challenge limits.",
              'Energy-drainers are cut. "I don\'t water dead plants."',
              "Selective, Not Distant: Approachable, not open to all.",
              'Close doors cleanly. No explanation needed. "I don\'t owe access. I grant it."',
              "Every Contact Serves a Purpose: Builder, mirror, multiplier, or accountability. Else, clutter.",
              '"My circle reflects my future, not my past."',
            ],
          },
          {
            title: "Romantic Woman Mindset",
            points: [
              "Deep Attraction to Deep Alignment: Shared vision > physical attraction.",
              "Emotional intelligence > beauty. Discipline > potential.",
              '"I don\'t date for dopamine. I partner for destiny."',
              "No Pedestals. No Projects: Don't save, fix, or idolize.",
              '"A Black Caiman doesn\'t chase waterfalls. He builds rivers."',
              "Stay Rooted. She Can Flow: You're the mountain; she's the wind.",
              "Protect mind, body, energy like sacred ground.",
              '"I don\'t lose myself in love. I find the right one by staying me."',
              "Polarity, Not Performance: Embody masculinity naturally.",
              '"If peace feels boring, she\'s not ready."',
            ],
          },
        ],
        dailyMantras: [
          "My presence is the gift. My peace is the proof.",
          "I do not attract who I want. I attract what I am.",
          "Her chaos cannot enter if my clarity is anchored.",
        ],
      },
    },
    {
      id: "financial-code",
      title: "VI. Black Caiman Financial Code",
      icon: DollarSign,
      color: "bg-yellow-50 border-yellow-200 text-yellow-800",
      content: {
        principles: [
          {
            title: "Money is a Tool, Not a Trophy",
            description: "Fund missions, not egos. Buy time, freedom, leverage—not status.",
            quote: "My money speaks in silence—just like me.",
          },
          {
            title: "Wealth is Built, Not Wished",
            description: "Stack. Plan. Invest. Budgeting is power discipline.",
            quote: "Impulse is expensive. Patience is profitable.",
          },
          {
            title: "Every Dollar Has a Job",
            description:
              "Build (assets, investments). Protect (emergency fund, insurance, health). Multiply (business, education, skills). Enjoy (in proportion, not impulse).",
            quote: "If it doesn't grow, protect, or restore—I question it.",
          },
          {
            title: "Move Like the IRS is Watching",
            description: "Stay clean. File on time. Track everything. Protect assets like family.",
            quote: "Loose paper trails lead to tight chains.",
          },
          {
            title: "Earn Actively. Grow Passively.",
            description:
              "Master one income stream first. Turn skills into income, income into assets. Invest in knowledge before markets.",
            quote: "Before I invest in the market, I invest in my mind.",
          },
          {
            title: "You Don't Owe, You Own",
            description: "Use debt for leverage, not escape. Pay off consumer debt ruthlessly. Play the long game.",
            quote: "If it owns me, I don't want it.",
          },
          {
            title: "Move Quietly, Build Globally",
            description: "Diversified. Anonymous where needed. Tax-efficient. Learn wealth laws like weapons.",
            quote: "I study the rules so I never play someone else's game.",
          },
        ],
        mantra:
          "I own my time, my tools, and my terrain. I do not chase status. I build systems. I do not panic. I prepare. I do not spend to feel rich. I invest to stay free.",
      },
    },
    {
      id: "life-organization",
      title: "VII. Black Caiman Life Organization",
      icon: Brain,
      color: "bg-purple-100 border-purple-300 text-purple-800",
      content: {
        areas: [
          {
            title: "Mind: Fortified and Focused",
            description:
              "Morning Reset: No phone for 30 minutes. Journal, meditate, move in silence. Daily Focus: 3 priorities. All else is noise. Mental Cleanliness: Weekly reflection, digital detox.",
            tools: "Notion, voice memos, paper journal.",
            quote: "If I lose my mind, I lose the mission.",
          },
          {
            title: "Time: Ruthlessly Protected",
            description:
              "Time Blocking: Mornings for deep work, afternoons for meetings. No Open Calendar: Others schedule around you. Weekly Reset: Review wins, misses, adjust.",
            tools: "Google Calendar, Notion Daily Planner.",
            quote: "If it doesn't build, restore, or align—I don't schedule it.",
          },
          {
            title: "Money: Quiet and Strategic",
            description:
              "4 accounts: Operating, Savings, Investing, Flex. Every dollar has a job. Every expense has a reason. Biweekly finance check-ins. Quarterly growth review.",
            tools: "Notion Finance Dashboard, YNAB, Spreadsheet.",
            quote: "Loud spenders go broke in silence.",
          },
          {
            title: "Body: Weaponized and Respected",
            description:
              "Train 5x/week (discipline over intensity). Nutrition = fuel, not comfort. Sleep is sacred. No blue light 1 hour before bed.",
            tools: "Apple Health, Whoop, Journal, meal prep.",
            quote: "My body is my first kingdom. If I lose it, I lose the war.",
          },
          {
            title: "Energy: Pruned and Protected",
            description:
              "Limit daily 'people load.' 3 'life chargers' weekly (solitude, nature, reading). Enforce boundaries without drama.",
            tools: "Screen Time Limits, Do Not Disturb, Notion Energy Audit Log.",
            quote: "I don't allow access. I allocate it.",
          },
          {
            title: "Relationships: Filtered and Intentional",
            description:
              "Inner Circle: 3-5 people max. Trust, respect, loyalty. Outer Network: Purposeful, not performative. Romance: Alignment over excitement.",
            tools: "Notion Relationship Tracker, private dinner calendar, red/green flag system.",
            quote: "I don't collect people. I cultivate alignment.",
          },
          {
            title: "Learning: Structured and Tactical",
            description:
              "1 book/month (mind, money, mastery). 1 course or deep skill per quarter. Daily reading (30–60 min).",
            tools: "Readwise, audiobooks, daily notes.",
            quote: "Entertainment amuses. Study evolves.",
          },
        ],
        creed:
          "I move with intention. I prepare in silence. I guard what others waste. My schedule reflects my discipline. My mind is clear. My body is sharp. My circle is clean. My vision is sacred.",
      },
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-center mb-2 scannable-heading">The Black Caiman Philosophy</h1>
          <p className="text-gray-600 text-center scannable-text">
            Complete life optimization framework for focused living
          </p>
        </header>

        {/* Black Caiman Mindset Header */}
        <div className="mb-6 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full border border-purple-300">
            <span className="text-purple-800 font-semibold scannable-heading">Black Caiman Mindset</span>
          </div>
        </div>

        {/* Core Declaration */}
        <Card className="mb-8 bg-gradient-to-r from-purple-200 to-purple-300 text-purple-900 shadow-xl">
          <CardHeader>
            <CardTitle className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-2xl scannable-heading">The Core Declaration</span>
              </div>
              <Badge className="bg-purple-500 text-white scannable-small">Speak Aloud Each Morning</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="text-xl font-semibold text-purple-700 scannable-text">
              "Calm is lethal. Precision is power. Relentless beats talented."
            </div>
            <div className="space-y-2 text-lg">
              <p className="scannable-text">I do not chase. I lead.</p>
              <p className="scannable-text">I am not loud. I am clear.</p>
              <p className="scannable-text">I train when no one is watching.</p>
              <p className="scannable-text">I protect my vision, my time, and my energy.</p>
              <p className="scannable-text">I evolve daily.</p>
              <p className="scannable-text">I listen deeply, observe silently, and speak last—with purpose.</p>
            </div>
            <div className="text-2xl font-bold text-purple-700 pt-4">
              <p className="scannable-heading">I am the Black Caiman.</p>
              <p className="scannable-heading">And I do not miss.</p>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Sections with Accordion */}
        <Accordion type="multiple" className="space-y-4">
          {sections.map((section) => {
            const IconComponent = section.icon
            return (
              <AccordionItem
                key={section.id}
                value={section.id}
                className="border border-purple-200 rounded-lg shadow-sm"
              >
                <AccordionTrigger className={`${section.color} rounded-t-lg px-6 py-4 hover:no-underline`}>
                  <div className="flex items-center gap-3 scannable-heading">
                    <IconComponent className="w-6 h-6" />
                    {section.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-white">
                  <div className="space-y-6">
                    {/* Connections Section */}
                    {section.id === "connections" && (
                      <>
                        {section?.content?.subsections?.map((subsection, index) => (
                          <div key={index} className="space-y-2">
                            <h4 className="font-semibold text-purple-800 scannable-heading">{subsection.title}</h4>
                            <ul className="space-y-1 text-sm ml-4">
                              {subsection.points.map((point, pointIndex) => (
                                <li key={pointIndex} className="text-gray-700 scannable-text">
                                  • {point}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                          <h5 className="font-semibold text-purple-800 mb-2 scannable-heading">Daily Reminder:</h5>
                          <p className="text-purple-700 italic font-medium scannable-text">
                            "{section.content.dailyReminder}"
                          </p>
                        </div>
                      </>
                    )}

                    {/* Contact & Romantic Section */}
                    {section.id === "contact-romantic" && (
                      <>
                        {section?.content?.subsections?.map((subsection, index) => (
                          <div key={index} className="space-y-3">
                            <h4 className="font-semibold text-purple-800 scannable-heading">{subsection.title}</h4>
                            <ul className="space-y-2 text-sm ml-4">
                              {subsection.points.map((point, pointIndex) => (
                                <li key={pointIndex} className="text-gray-700 scannable-text">
                                  • {point}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                          <h5 className="font-semibold text-purple-800 mb-2 scannable-heading">Daily Mantras:</h5>
                          <ul className="space-y-1">
                            {section?.content?.dailyMantras?.map((mantra, index) => (
                              <li key={index} className="text-purple-700 italic scannable-text">
                                • "{mantra}"
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}

                    {/* Financial Code Section */}
                    {section.id === "financial-code" && (
                      <>
                        <div className="space-y-4">
                          {section?.content?.principles?.map((principle, index) => (
                            <div key={index} className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                              <h4 className="font-semibold text-purple-800 mb-2 scannable-heading">
                                {index + 1}. {principle.title}
                              </h4>
                              <p className="text-gray-700 text-sm mb-2 scannable-text">{principle.description}</p>
                              <p className="text-purple-600 italic text-xs scannable-small">"{principle.quote}"</p>
                            </div>
                          ))}
                        </div>
                        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border border-yellow-200">
                          <h5 className="font-semibold text-yellow-800 mb-2 scannable-heading">Financial Mantra:</h5>
                          <p className="text-yellow-700 italic font-medium scannable-text">
                            "{section.content.mantra}"
                          </p>
                        </div>
                      </>
                    )}

                    {/* Life Organization Section */}
                    {section.id === "life-organization" && (
                      <>
                        <div className="space-y-4">
                          {section?.content?.areas?.map((area, index) => (
                            <div key={index} className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                              <h4 className="font-semibold text-purple-800 mb-2 scannable-heading">
                                {index + 1}. {area.title}
                              </h4>
                              <p className="text-gray-700 text-sm mb-2 scannable-text">{area.description}</p>
                              <p className="text-gray-600 text-xs mb-2 scannable-small">
                                <strong>Tools:</strong> {area.tools}
                              </p>
                              <p className="text-purple-600 italic text-xs scannable-small">"{area.quote}"</p>
                            </div>
                          ))}
                        </div>
                        <div className="bg-gradient-to-r from-purple-100 to-purple-200 p-4 rounded-lg border border-purple-300">
                          <h5 className="font-semibold text-purple-800 mb-2 scannable-heading">
                            Life Organization Creed:
                          </h5>
                          <p className="text-purple-700 italic font-medium scannable-text">"{section.content.creed}"</p>
                        </div>
                      </>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>

        {/* Final Declaration */}
        <Card className="bg-gradient-to-r from-purple-200 to-purple-300 text-purple-900 shadow-xl mt-4">
          <CardHeader>
            <CardTitle className="text-center text-xl scannable-heading">
              Final Declaration (Nightly Whisper to Self)
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="text-lg leading-relaxed space-y-4">
              <p className="scannable-text leading-relaxed">"I am forged by fire.</p>
              <p className="scannable-text leading-relaxed">I listen like a storm before it breaks.</p>
              <p className="scannable-text leading-relaxed">I speak with the weight of understanding.</p>
              <p className="scannable-text leading-relaxed">
                I walk with calm, create with purpose, and love with depth.
              </p>
              <p className="text-purple-700 font-bold text-xl mt-6 scannable-heading leading-relaxed">
                I am the Black Caiman.
              </p>
              <p className="text-purple-700 font-bold text-xl scannable-heading leading-relaxed">And I don't miss."</p>
            </div>
          </CardContent>
        </Card>

        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p className="scannable-text">Listen deeply, observe silently, speak with purpose.</p>
          <p className="mt-6 text-xs text-gray-400 scannable-small">
            `All rights reserved ${new Date().getMonth() + 1}. Powered by Coriano Harris`
          </p>
        </footer>
      </div>
    </div>
  )
}
