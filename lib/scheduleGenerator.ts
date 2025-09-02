import type { Task, TimeBlock } from "./types"

const DEFAULT_PREFERENCES = {
  workStartTime: "09:00",
  workEndTime: "17:00",
  lunchBreakStart: "12:00",
  lunchBreakDuration: 60,
  shortBreakDuration: 15,
  preyBlockDuration: 120, // 2 hours
  noiseBlockDuration: 60, // 1 hour
}

export function generateDailySchedule(tasks: Task[]): TimeBlock[] {
  const schedule: TimeBlock[] = []
  let currentTime = 9 * 60 // 9:00 AM in minutes
  const endTime = 17 * 60 // 5:00 PM in minutes
  let blockId = 1

  // Filter and categorize tasks
  const preyTasks = tasks.filter((task) => !task.completed && task.taskType === "Prey").slice(0, 3)
  const noiseTasks = tasks.filter((task) => !task.completed && task.taskType === "Noise").slice(0, 4)
  const optionalTasks = tasks.filter((task) => !task.completed && task.taskType === "Optional").slice(0, 2)

  // Helper function to format time
  const formatTime = (minutes: number): string => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hours.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}`
  }

  // Add morning prey block
  if (preyTasks.length > 0) {
    const duration = 120 // 2 hours
    schedule.push({
      id: `block-${blockId++}`,
      title: `🎯 PREY: ${preyTasks[0].title}`,
      description: preyTasks[0].description,
      startTime: formatTime(currentTime),
      endTime: formatTime(currentTime + duration),
      duration,
      type: "prey",
      taskId: preyTasks[0].id,
      color: "#dc2626",
    })
    currentTime += duration
  }

  // Add short break
  if (currentTime < endTime - 30) {
    const duration = 15
    schedule.push({
      id: `block-${blockId++}`,
      title: "☕ Break",
      description: "Short break to recharge",
      startTime: formatTime(currentTime),
      endTime: formatTime(currentTime + duration),
      duration,
      type: "break",
      color: "#6b7280",
    })
    currentTime += duration
  }

  // Add noise block
  if (noiseTasks.length > 0 && currentTime < endTime - 60) {
    const duration = 60
    const taskTitles = noiseTasks
      .slice(0, 2)
      .map((t) => t.title)
      .join(", ")
    schedule.push({
      id: `block-${blockId++}`,
      title: `📋 NOISE: ${taskTitles}`,
      description: "Batch administrative tasks",
      startTime: formatTime(currentTime),
      endTime: formatTime(currentTime + duration),
      duration,
      type: "noise",
      taskId: noiseTasks[0]?.id,
      color: "#d97706",
    })
    currentTime += duration
  }

  // Add lunch break
  if (currentTime < 12 * 60 + 30) {
    // Before 12:30 PM
    const lunchStart = Math.max(currentTime, 12 * 60) // 12:00 PM
    const duration = 60
    schedule.push({
      id: `block-${blockId++}`,
      title: "🍽️ Lunch Break",
      description: "Time to refuel and recharge",
      startTime: formatTime(lunchStart),
      endTime: formatTime(lunchStart + duration),
      duration,
      type: "break",
      color: "#6b7280",
    })
    currentTime = lunchStart + duration
  }

  // Add afternoon prey block
  if (preyTasks.length > 1 && currentTime < endTime - 120) {
    const duration = 120
    schedule.push({
      id: `block-${blockId++}`,
      title: `🎯 PREY: ${preyTasks[1].title}`,
      description: preyTasks[1].description,
      startTime: formatTime(currentTime),
      endTime: formatTime(currentTime + duration),
      duration,
      type: "prey",
      taskId: preyTasks[1].id,
      color: "#dc2626",
    })
    currentTime += duration
  }

  // Fill remaining time with optional tasks
  if (optionalTasks.length > 0 && currentTime < endTime - 60) {
    const duration = Math.min(60, endTime - currentTime)
    schedule.push({
      id: `block-${blockId++}`,
      title: `💡 OPTIONAL: ${optionalTasks[0].title}`,
      description: optionalTasks[0].description,
      startTime: formatTime(currentTime),
      endTime: formatTime(currentTime + duration),
      duration,
      type: "optional",
      taskId: optionalTasks[0].id,
      color: "#2563eb",
    })
  }

  return schedule
}

export function getScheduleStats(schedule: TimeBlock[]) {
  const preyTime = schedule.filter((block) => block.type === "prey").reduce((sum, block) => sum + block.duration, 0)
  const noiseTime = schedule.filter((block) => block.type === "noise").reduce((sum, block) => sum + block.duration, 0)
  const breakTime = schedule.filter((block) => block.type === "break").reduce((sum, block) => sum + block.duration, 0)
  const optionalTime = schedule
    .filter((block) => block.type === "optional")
    .reduce((sum, block) => sum + block.duration, 0)

  // Calculate total productive time (excluding breaks)
  const totalProductiveTime = preyTime + noiseTime + optionalTime

  // Calculate focus ratio with proper fallback
  let focusRatio = 0
  if (totalProductiveTime > 0) {
    focusRatio = Math.round((preyTime / totalProductiveTime) * 100)
  }

  return {
    preyTime: Math.round((preyTime / 60) * 10) / 10, // Convert to hours with 1 decimal
    noiseTime: Math.round((noiseTime / 60) * 10) / 10,
    breakTime: Math.round((breakTime / 60) * 10) / 10,
    optionalTime: Math.round((optionalTime / 60) * 10) / 10,
    totalBlocks: schedule.length,
    focusRatio: focusRatio, // This will now be 0 instead of NaN when no productive time
  }
}
