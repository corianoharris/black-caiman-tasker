export type SectionType = "Body" | "Mind" | "Work" | "Meals" | "Recovery" | "Personal"

export type HabitItem = {
  id: string
  section: SectionType
  name: string
  type: "habit" | "task" | "meal"
  sets?: number
  reps?: number
  quantity?: number
  count?: number
  timeSlot?: "" | "Morning" | "Afternoon" | "Evening" | "Custom"
  notes?: string
  xp?: number
  completedToday: boolean
  streak: number
  createdAt: string
  lastCompleted?: string
}

export type TaskCategory = "Revenue" | "Startup" | "Health" | "Study" | "Social" | "Admin" | "Other"
export type Impact = "High" | "Medium" | "Low"
export type Effort = "High" | "Medium" | "Low"
export type TaskType = "Prey" | "Noise" | "Optional"

export type Task = {
  id: string
  title: string
  category: TaskCategory
  impact: Impact
  effort: Effort
  deadline?: string
  description?: string
  estimatedHours: number
  completed: boolean
  priority: number
  taskType: TaskType
  createdAt: string
}

export type UserStats = {
  totalTasks: number
  completedTasks: number
  preyTasksCompleted: number
  productivityScore: number
}

export type TimeBlock = {
  id: string
  startTime: string
  endTime: string
  title: string
  type: "prey" | "noise" | "break" | "optional"
  taskId?: string
  duration: number
  color: string
}

export type SchedulePreferences = {
  workStartTime: string
  workEndTime: string
  lunchBreakStart: string
  lunchBreakDuration: number
  shortBreakDuration: number
  preyBlockDuration: number
  noiseBlockDuration: number
}

export type CoreValue = {
  id: string
  title: string
  description: string
  principle: string
  dailyReminder: string
}
