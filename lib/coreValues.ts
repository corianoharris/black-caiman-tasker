import type { CoreValue } from "./types"

export const blackCaimanValues: CoreValue[] = [
  {
    id: "listen-deeply",
    title: "Listen Deeply",
    description: "True understanding comes from patient observation and active listening.",
    principle: "I listen deeply, observe silently, and speak last—with purpose.",
    dailyReminder: "Before responding today, pause and truly hear what others are saying.",
  },
  {
    id: "observe-silently",
    title: "Observe Silently",
    description: "The caiman watches from beneath the surface, gathering intelligence before acting.",
    principle: "Silent observation reveals opportunities that noise obscures.",
    dailyReminder: "Take time today to observe situations before jumping to conclusions.",
  },
  {
    id: "speak-with-purpose",
    title: "Speak with Purpose",
    description: "Every word carries weight. Speak only when it adds value.",
    principle: "Words are tools—use them precisely and intentionally.",
    dailyReminder: "Ask yourself: 'Does this need to be said, and am I the one to say it?'",
  },
  {
    id: "hunt-the-prey",
    title: "Hunt the Prey",
    description: "Focus relentlessly on high-impact activities that move you toward your goals.",
    principle: "Distinguish between prey (vital) and noise (trivial). Hunt the prey.",
    dailyReminder: "What are your 3 most important tasks today? Focus there first.",
  },
  {
    id: "patience-in-action",
    title: "Patience in Action",
    description: "The caiman waits for the perfect moment, then strikes with decisive force.",
    principle: "Patience is not inaction—it's preparation for the right moment.",
    dailyReminder: "Where can you be more patient today while still making progress?",
  },
  {
    id: "surface-when-ready",
    title: "Surface When Ready",
    description: "Work beneath the surface until you're ready to emerge with results.",
    principle: "Build in private, reveal when complete. Quality over speed.",
    dailyReminder: "What are you building quietly that will surprise others when revealed?",
  },
  {
    id: "adapt-and-survive",
    title: "Adapt and Survive",
    description: "The caiman has survived millions of years by adapting to changing environments.",
    principle: "Flexibility in methods, firmness in principles. Adapt to thrive.",
    dailyReminder: "What needs to change in your approach while keeping your core values intact?",
  },
  {
    id: "conserve-energy",
    title: "Conserve Energy",
    description: "Expend energy only on what matters. Rest is preparation for action.",
    principle: "Energy is finite. Invest it wisely in activities that compound.",
    dailyReminder: "What energy drains can you eliminate today to focus on what matters?",
  },
  {
    id: "territorial-focus",
    title: "Territorial Focus",
    description: "Know your domain and defend it. Master your space before expanding.",
    principle: "Excellence in your territory before expansion into new ones.",
    dailyReminder: "What is your primary territory, and how can you strengthen it today?",
  },
  {
    id: "calculated-risks",
    title: "Calculated Risks",
    description: "The caiman assesses before acting. Every move is measured and purposeful.",
    principle: "Take risks, but make them calculated. Preparation reduces uncertainty.",
    dailyReminder: "What risk are you considering? Have you done your homework first?",
  },
]

export function getTodaysValue(): CoreValue {
  const today = new Date()
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24),
  )
  const index = dayOfYear % blackCaimanValues.length
  return blackCaimanValues[index]
}

export function getRandomValue(): CoreValue {
  const randomIndex = Math.floor(Math.random() * blackCaimanValues.length)
  return blackCaimanValues[randomIndex]
}
