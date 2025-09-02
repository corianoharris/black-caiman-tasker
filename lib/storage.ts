import type { Task, UserStats, TimeBlock } from "./types"

const TASKS_KEY = "caimanTasks"
const STATS_KEY = "caimanStats"
const SCHEDULE_KEY = "caimanSchedule"

export function saveTasks(tasks: Task[]) {
  if (typeof window !== "undefined") {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks))
  }
}

export function getTasks(): Task[] {
  if (typeof window === "undefined") return []
  try {
    const stored = localStorage.getItem(TASKS_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

export function getStoredTasks(): Task[] {
  return getTasks()
}

export function saveStats(stats: UserStats) {
  if (typeof window !== "undefined") {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats))
  }
}

export function getStats(): UserStats {
  if (typeof window === "undefined")
    return { totalTasks: 0, completedTasks: 0, preyTasksCompleted: 0, productivityScore: 0 }
  try {
    const stored = localStorage.getItem(STATS_KEY)
    return stored
      ? JSON.parse(stored)
      : { totalTasks: 0, completedTasks: 0, preyTasksCompleted: 0, productivityScore: 0 }
  } catch {
    return { totalTasks: 0, completedTasks: 0, preyTasksCompleted: 0, productivityScore: 0 }
  }
}

export function saveSchedule(schedule: TimeBlock[]) {
  if (typeof window !== "undefined") {
    localStorage.setItem(SCHEDULE_KEY, JSON.stringify(schedule))
  }
}

export function getSchedule(): TimeBlock[] {
  if (typeof window === "undefined") return []
  try {
    const stored = localStorage.getItem(SCHEDULE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}
