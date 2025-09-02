import type { Task, TaskType } from "./types"

export function calculateTaskPriority(task: Task): number {
  let score = 0

  // Impact scoring
  const impactScores = { High: 30, Medium: 20, Low: 10 }
  score += impactScores[task.impact]

  // Effort scoring (inverse - less effort = higher priority)
  const effortScores = { Low: 20, Medium: 15, High: 10 }
  score += effortScores[task.effort]

  // Deadline urgency
  if (task.deadline) {
    const deadline = new Date(task.deadline)
    const today = new Date()
    const daysUntilDeadline = Math.ceil((deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))

    if (daysUntilDeadline <= 1) score += 25
    else if (daysUntilDeadline <= 3) score += 15
    else if (daysUntilDeadline <= 7) score += 10
  }

  // Category bonuses
  const categoryBonus = {
    Revenue: 15,
    Startup: 12,
    Health: 10,
    Study: 8,
    Admin: 5,
    Social: 3,
    Other: 0,
  }
  score += categoryBonus[task.category]

  return score
}

export function categorizeTask(task: Task): TaskType {
  const priority = calculateTaskPriority(task)

  // High priority tasks with high impact = Prey
  if (priority >= 60 && task.impact === "High") {
    return "Prey"
  }

  // Medium priority or administrative tasks = Noise
  if (priority >= 35 || task.category === "Admin") {
    return "Noise"
  }

  // Low priority, social, or optional tasks = Optional
  return "Optional"
}

export function prioritizeTasks(tasks: Task[]): Task[] {
  return tasks
    .map((task) => ({
      ...task,
      priority: calculateTaskPriority(task),
      taskType: categorizeTask(task),
    }))
    .sort((a, b) => b.priority - a.priority)
}
