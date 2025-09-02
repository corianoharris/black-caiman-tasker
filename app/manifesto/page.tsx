"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ManifestoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-center mb-2 scannable-heading">The Black Caiman Manifesto</h1>
          <p className="text-gray-600 text-center scannable-text">
            A complete philosophy for focused living and personal mastery
          </p>
        </header>

        {/* Opening Quote */}
        <Card className="mb-8 bg-gradient-to-r from-purple-200 to-purple-300 text-purple-900 shadow-xl">
          <CardContent className="p-8 text-center">
            <blockquote className="text-xl italic mb-4 scannable-text">
              "I would unite with anybody to do right and with nobody to do wrong."
            </blockquote>
            <cite className="text-purple-700 scannable-text">— Frederick Douglass</cite>
            <p className="mt-4 text-purple-800 font-semibold scannable-text">
              The Black Caiman walks alone if necessary, aligned always.
            </p>
          </CardContent>
        </Card>

        {/* Core Declaration */}
        <Card className="mb-8 border-emerald-200">
          <CardHeader className="bg-emerald-50">
            <CardTitle className="text-emerald-800 scannable-heading">
              I. The Core Declaration
              <Badge className="bg-emerald-500 text-white ml-2 scannable-small">Speak Aloud Each Morning</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="bg-purple-100 text-purple-900 p-6 rounded-lg border border-purple-200">
              <div className="space-y-3 text-center">
                <p className="text-lg font-semibold scannable-text">
                  "Calm is lethal. Precision is power. Relentless beats talented."
                </p>
                <p className="text-lg scannable-text">I do not chase. I lead.</p>
                <p className="text-lg scannable-text">I am not loud. I am clear.</p>
                <p className="text-lg scannable-text">I train when no one is watching.</p>
                <p className="text-lg scannable-text">I protect my vision, my time, and my energy.</p>
                <p className="text-lg scannable-text">I evolve daily.</p>
                <p className="text-lg scannable-text">
                  I listen deeply, observe silently, and speak last—with purpose.
                </p>
                <p className="text-xl font-bold text-emerald-700 mt-4 scannable-heading">I am the Black Caiman.</p>
                <p className="text-xl font-bold text-emerald-700 scannable-heading">And I do not miss."</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Daily Practice */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="scannable-heading">II. The Daily Practice of the Black Caiman</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Software Development */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-bold mb-3 text-blue-700 scannable-heading">In Craft: Software Development</h3>
              <blockquote className="italic text-gray-600 mb-4 scannable-text">
                "Once you learn to read, you will be forever free." — Douglass
              </blockquote>
              <p className="font-semibold mb-3 scannable-text">Read code. Study systems. Build with care.</p>
              <ol className="space-y-3 list-decimal list-inside">
                <li>
                  <strong className="scannable-heading">Obsess Over Mastery</strong>
                  <ul className="ml-6 mt-1 space-y-1 text-sm text-gray-600">
                    <li className="scannable-text">• Read source code. Know internals.</li>
                    <li className="scannable-text">• Write code like poetry—precise, elegant, minimal.</li>
                    <li className="scannable-text">• Think in Big O: time is currency, space is discipline.</li>
                  </ul>
                </li>
                <li>
                  <strong className="scannable-heading">Build Relentlessly, Iterate Ruthlessly</strong>
                  <ul className="ml-6 mt-1 space-y-1 text-sm text-gray-600">
                    <li className="scannable-text">• MVP is your battlefield. Feedback is your edge.</li>
                    <li className="scannable-text">• Ship. Learn. Repeat.</li>
                  </ul>
                </li>
                <li>
                  <strong className="scannable-heading">Be Unshakeable Under Pressure</strong>
                  <ul className="ml-6 mt-1 space-y-1 text-sm text-gray-600">
                    <li className="scannable-text">• Slow the game down.</li>
                    <li className="scannable-text">• Train like a monk: Leetcode, live projects, real stakes.</li>
                  </ul>
                </li>
                <li>
                  <strong className="scannable-heading">Vision Beyond Code</strong>
                  <ul className="ml-6 mt-1 space-y-1 text-sm text-gray-600">
                    <li className="scannable-text">• Think like a PM, feel like a user.</li>
                    <li className="scannable-text">• Metrics &gt; opinions. Impact &gt; noise.</li>
                  </ul>
                </li>
                <li>
                  <strong className="scannable-heading">Earn Trust Through Consistency</strong>
                  <ul className="ml-6 mt-1 space-y-1 text-sm text-gray-600">
                    <li className="scannable-text">• Speak clearly. Deliver always.</li>
                    <li className="scannable-text">• Lift others as you rise.</li>
                  </ul>
                </li>
              </ol>
            </div>

            {/* Relationships */}
            <div className="border-l-4 border-pink-500 pl-6">
              <h3 className="text-xl font-bold mb-3 text-pink-700 scannable-heading">
                In Relationship: Love, Women, and Depth
              </h3>
              <blockquote className="italic text-gray-600 mb-4 scannable-text">
                "The soul that is within me no man can degrade." — Douglass
              </blockquote>
              <p className="font-semibold mb-3 scannable-text">Stand grounded. Invite, don't chase.</p>
              <ol className="space-y-3 list-decimal list-inside">
                <li>
                  <strong className="scannable-heading">Presence is Power</strong>
                  <ul className="ml-6 mt-1 space-y-1 text-sm text-gray-600">
                    <li className="scannable-text">• Hear her fully. Look with your full being.</li>
                    <li className="scannable-text">• Speak only when words carry weight.</li>
                  </ul>
                </li>
                <li>
                  <strong className="scannable-heading">Self-Respect First</strong>
                  <ul className="ml-6 mt-1 space-y-1 text-sm text-gray-600">
                    <li className="scannable-text">• Your mission is sacred. No detours for validation.</li>
                    <li className="scannable-text">• Say no when needed. She will feel your center.</li>
                  </ul>
                </li>
                <li>
                  <strong className="scannable-heading">Speak With Depth</strong>
                  <ul className="ml-6 mt-1 space-y-1 text-sm text-gray-600">
                    <li className="scannable-text">• Ask: "What dream do you carry that scares you?"</li>
                    <li className="scannable-text">• Let silence do half the work.</li>
                  </ul>
                </li>
                <li>
                  <strong className="scannable-heading">Balance Soft & Strong</strong>
                  <ul className="ml-6 mt-1 space-y-1 text-sm text-gray-600">
                    <li className="scannable-text">• Empathy with spine. Tenderness with clarity.</li>
                    <li className="scannable-text">• She is not your purpose, but she may walk beside it.</li>
                  </ul>
                </li>
              </ol>
            </div>

            {/* Leadership */}
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-bold mb-3 text-purple-700 scannable-heading">
                In Leadership: Teams, Conflict, and Command
              </h3>
              <blockquote className="italic text-gray-600 mb-4 scannable-text">
                "It is easier to build strong children than to repair broken men."
              </blockquote>
              <p className="font-semibold mb-3 scannable-text">Build people. Speak life. Lead in silence first.</p>
              <ol className="space-y-3 list-decimal list-inside">
                <li>
                  <strong className="scannable-heading">Speak Last in Meetings</strong>
                  <ul className="ml-6 mt-1 space-y-1 text-sm text-gray-600">
                    <li className="scannable-text">• Gather the full map before drawing conclusions.</li>
                    <li className="scannable-text">• "Here's what I heard…" unlocks trust.</li>
                  </ul>
                </li>
                <li>
                  <strong className="scannable-heading">In Conflict: Calm &gt; Control</strong>
                  <ul className="ml-6 mt-1 space-y-1 text-sm text-gray-600">
                    <li className="scannable-text">• Stillness unnerves chaos.</li>
                    <li className="scannable-text">• Speak like a scalpel, not a sledgehammer.</li>
                  </ul>
                </li>
                <li>
                  <strong className="scannable-heading">Mentorship</strong>
                  <ul className="ml-6 mt-1 space-y-1 text-sm text-gray-600">
                    <li className="scannable-text">• Ask: "What do you think is holding you back?"</li>
                    <li className="scannable-text">• Reflect, correct, direct.</li>
                  </ul>
                </li>
                <li>
                  <strong className="scannable-heading">Public Speaking</strong>
                  <ul className="ml-6 mt-1 space-y-1 text-sm text-gray-600">
                    <li className="scannable-text">• Pause. Land words like thunder.</li>
                  </ul>
                </li>
              </ol>
            </div>

            {/* Listening */}
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-bold mb-3 text-green-700 scannable-heading">
                In Listening: The Caiman's True Power
              </h3>
              <blockquote className="italic text-gray-600 mb-4 scannable-text">
                "Power concedes nothing without a demand."
              </blockquote>
              <p className="font-semibold mb-3 scannable-text">Silence precedes power. Learn this.</p>

              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2 scannable-heading">Listening Principles:</h4>
                <ul className="space-y-1 text-sm">
                  <li className="scannable-text">
                    • <strong>Observation &gt; Reactivity:</strong> Let others show their cards.
                  </li>
                  <li className="scannable-text">
                    • <strong>Emotional Control = Strategic Edge:</strong> Speak only when truth strikes with clarity.
                  </li>
                  <li className="scannable-text">
                    • <strong>No Need to Prove:</strong> You know. You need not convince.
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2 scannable-heading">Speak Like a Caiman:</h4>
                <ul className="space-y-1 text-sm">
                  <li className="scannable-text">• Briefly.</li>
                  <li className="scannable-text">• Clearly.</li>
                  <li className="scannable-text">• With purpose.</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 scannable-heading">Daily Drill: The 10-Min Listening Ritual</h4>
                <ol className="space-y-1 text-sm list-decimal list-inside">
                  <li className="scannable-text">Choose one conversation (stand-up, date, feedback meeting).</li>
                  <li className="scannable-text">Wait 10 seconds longer before speaking.</li>
                  <li className="scannable-text">Ask: "Am I trying to impress… or understand?"</li>
                  <li>
                    <span className="scannable-text">Start with:</span>
                    <ul className="ml-6 mt-1 space-y-1">
                      <li className="scannable-text">• "Here's what I'm hearing…"</li>
                      <li className="scannable-text">• "I noticed something subtle…"</li>
                      <li className="scannable-text">• "Can I ask one thing before I respond?"</li>
                    </ul>
                  </li>
                </ol>
                <p className="mt-2 font-semibold text-yellow-800 scannable-text">
                  Do this for 30 days. You will be felt.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mindset */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="scannable-heading">III. The Black Caiman Mindset</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 className="font-bold mb-2 scannable-heading">1. Calm is Lethal</h4>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li className="scannable-text">• You don't bark to be dangerous.</li>
                  <li className="scannable-text">• Stillness unnerves the noisy.</li>
                  <li className="scannable-text">• Study before you strike.</li>
                  <li className="scannable-text">• Silence is mistaken for weakness. Let them.</li>
                </ul>
                <p className="italic text-xs mt-2 text-purple-600 scannable-small">
                  "Power moves in silence. Weakness begs to be seen."
                </p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 className="font-bold mb-2 scannable-heading">2. Discipline is Self-Respect</h4>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li className="scannable-text">• Train when no one watches.</li>
                  <li className="scannable-text">• Standards, not motivation, drive you.</li>
                  <li className="scannable-text">• Do it because you said you would—especially when it's hard.</li>
                </ul>
                <p className="italic text-xs mt-2 text-purple-600 scannable-small">
                  "Relentless beats talented when talent gets tired."
                </p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 className="font-bold mb-2 scannable-heading">3. I Do Not Chase. I Lead.</h4>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li className="scannable-text">• You don't fit in. You build legacy.</li>
                  <li className="scannable-text">• Lead with vision. People follow clarity.</li>
                  <li className="scannable-text">• Approval is noise; alignment is power.</li>
                </ul>
                <p className="italic text-xs mt-2 text-purple-600 scannable-small">
                  "When you know where you're going, noise becomes background."
                </p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 className="font-bold mb-2 scannable-heading">4. Emotion is a Tool, Not a Ruler</h4>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li className="scannable-text">• Feel, don't react.</li>
                  <li className="scannable-text">• Respond with strategy, not impulse.</li>
                  <li className="scannable-text">• Precision wins; rage loses.</li>
                </ul>
                <p className="italic text-xs mt-2 text-purple-600 scannable-small">
                  "The loudest person in the room is usually the weakest."
                </p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 className="font-bold mb-2 scannable-heading">5. Vision is Sacred</h4>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li className="scannable-text">• Protect your mind, schedule, circle.</li>
                  <li className="scannable-text">• Say no often, without guilt.</li>
                  <li className="scannable-text">• Starve distractions. Feed craft.</li>
                </ul>
                <p className="italic text-xs mt-2 text-purple-600 scannable-small">
                  "Every yes to the wrong thing is a no to your purpose."
                </p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 className="font-bold mb-2 scannable-heading">6. Train in the Shadows</h4>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li className="scannable-text">• Work ethic is private.</li>
                  <li className="scannable-text">• Don't post moves. Don't perform for praise.</li>
                  <li className="scannable-text">• Results speak, not stories.</li>
                </ul>
                <p className="italic text-xs mt-2 text-purple-600 scannable-small">
                  "Let the product of your silence speak louder than their noise."
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-200 to-purple-300 text-purple-900 p-6 rounded-lg text-center">
              <h4 className="font-bold mb-2 text-lg scannable-heading">7. Pressure Makes Diamonds—or Exposes Fakes</h4>
              <ul className="text-sm space-y-1 mb-3">
                <li className="scannable-text">• Grow in difficulty.</li>
                <li className="scannable-text">• Choose discomfort on purpose.</li>
                <li className="scannable-text">• When the moment comes, you're prepared.</li>
              </ul>
              <p className="italic text-lg text-black scannable-text">"What breaks them, builds me."</p>
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
