"use client"

import { useState, useEffect, useCallback } from "react"
import type { Task, UserStats } from "@/lib/types"
import { getTasks, saveTasks, getStats, saveStats } from "@/lib/storage"
import { prioritizeTasks } from "@/lib/taskPrioritizer"
import TaskForm from "@/components/task-form"
import TaskCard from "@/components/task-card"
import StatsBanner from "@/components/stats-banner"
import ScheduleView from "@/components/schedule-view"
import TodaysReminder from "@/components/todays-reminder"
import ClearCompletedDialog from "@/components/clear-completed-dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Calendar, Filter } from "lucide-react"

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [stats, setStats] = useState<UserStats>({
    totalTasks: 0,
    completedTasks: 0,
    preyTasksCompleted: 0,
    productivityScore: 0,
  })
  const [showForm, setShowForm] = useState(false)
  const [editingTask, setEditingTask] = useState<Task | undefined>()
  const [filter, setFilter] = useState<"all" | "prey" | "noise" | "optional">("all")
  const [showSchedule, setShowSchedule] = useState(false)

  useEffect(() => {
    const existingTasks = getTasks()
    const prioritizedTasks = prioritizeTasks(existingTasks)
    setTasks(prioritizedTasks)

    const existingStats = getStats()
    setStats(existingStats)
  }, [])

  const generateId = () => Date.now().toString() + Math.random().toString(36).substr(2, 9)

  const updateStats = useCallback((newTasks: Task[]) => {
    const totalTasks = newTasks.length
    const completedTasks = newTasks.filter((task) => task.completed).length
    const preyTasksCompleted = newTasks.filter((task) => task.completed && task.taskType === "Prey").length
    const productivityScore = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0

    const newStats = { totalTasks, completedTasks, preyTasksCompleted, productivityScore }
    setStats(newStats)
    saveStats(newStats)
  }, [])

  const handleAddTask = useCallback(
    (taskData: Omit<Task, "id" | "createdAt" | "priority" | "taskType">) => {
      const newTask: Task = {
        ...taskData,
        id: generateId(),
        createdAt: new Date().toISOString(),
        priority: 0,
        taskType: "Optional",
      }

      const newTasks = [...tasks, newTask]
      const prioritizedTasks = prioritizeTasks(newTasks)
      setTasks(prioritizedTasks)
      saveTasks(prioritizedTasks)
      updateStats(prioritizedTasks)
      setShowForm(false)
    },
    [tasks, updateStats],
  )

  const handleEditTask = useCallback(
    (updatedTaskData: Omit<Task, "id" | "createdAt" | "priority" | "taskType">) => {
      if (!editingTask) return

      const updatedTask: Task = {
        ...updatedTaskData,
        id: editingTask.id,
        createdAt: editingTask.createdAt,
        priority: 0,
        taskType: "Optional",
      }

      const newTasks = tasks.map((task) => (task.id === editingTask.id ? updatedTask : task))
      const prioritizedTasks = prioritizeTasks(newTasks)
      setTasks(prioritizedTasks)
      saveTasks(prioritizedTasks)
      updateStats(prioritizedTasks)
      setShowForm(false)
      setEditingTask(undefined)
    },
    [tasks, editingTask, updateStats],
  )

  const handleDeleteTask = useCallback(
    (id: string) => {
      const newTasks = tasks.filter((task) => task.id !== id)
      setTasks(newTasks)
      saveTasks(newTasks)
      updateStats(newTasks)
    },
    [tasks, updateStats],
  )

  const handleToggleComplete = useCallback(
    (id: string) => {
      const newTasks = tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
      setTasks(newTasks)
      saveTasks(newTasks)
      updateStats(newTasks)
    },
    [tasks, updateStats],
  )

  const handleEditClick = (task: Task) => {
    setEditingTask(task)
    setShowForm(true)
  }

  const handleCancel = () => {
    setShowForm(false)
    setEditingTask(undefined)
  }

  const handleClearCompleted = useCallback(
    (taskType: "all" | "prey" | "noise" | "optional") => {
      let tasksToDelete: Task[]

      if (taskType === "all") {
        tasksToDelete = tasks.filter((task) => task.completed)
      } else {
        tasksToDelete = tasks.filter((task) => task.completed && task.taskType?.toLowerCase() === taskType)
      }

      if (tasksToDelete.length === 0) return

      const newTasks = tasks.filter((task) => !tasksToDelete.some((deleteTask) => deleteTask.id === task.id))
      setTasks(newTasks)
      saveTasks(newTasks)
      updateStats(newTasks)
    },
    [tasks, updateStats],
  )

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true
    return task.taskType?.toLowerCase() === filter
  })

  const preyTasks = tasks.filter((task) => task.taskType === "Prey")
  const noiseTasks = tasks.filter((task) => task.taskType === "Noise")
  const optionalTasks = tasks.filter((task) => task.taskType === "Optional")

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <header className="mb-6">
          <h1 className="text-4xl font-bold text-center mb-2 scannable-heading">Task Management</h1>
          <p className="text-gray-600 text-center scannable-text">
            Hunt your prey, manage the noise, optimize your day
          </p>
        </header>

        <StatsBanner stats={stats} />

        <TodaysReminder />

        <div className="mb-6 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={() => setShowForm(true)}
              className="bg-purple-400 hover:bg-purple-500 text-white scannable-text"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Task
            </Button>
            <Button
              variant="outline"
              className="border-purple-300 bg-transparent scannable-text"
              onClick={() => setShowSchedule(true)}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Generate Schedule
            </Button>
          </div>

          <div className="flex gap-2 items-center flex-wrap">
            <Filter className="w-4 h-4 text-gray-500" />
            <Button
              variant={filter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("all")}
              className="scannable-text"
            >
              All ({tasks.length})
            </Button>
            <Button
              variant={filter === "prey" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("prey")}
              className={filter === "prey" ? "bg-red-600 hover:bg-red-700 scannable-text" : "scannable-text"}
            >
              Prey ({preyTasks.length})
            </Button>
            <Button
              variant={filter === "noise" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("noise")}
              className={filter === "noise" ? "bg-yellow-600 hover:bg-yellow-700 scannable-text" : "scannable-text"}
            >
              Noise ({noiseTasks.length})
            </Button>
            <Button
              variant={filter === "optional" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("optional")}
              className={filter === "optional" ? "bg-blue-600 hover:bg-blue-700 scannable-text" : "scannable-text"}
            >
              Optional ({optionalTasks.length})
            </Button>

            {/* Clear All Completed Tasks */}
            <div className="ml-2 border-l border-gray-300 pl-2">
              <ClearCompletedDialog
                section="All Tasks"
                completedCount={tasks.filter((task) => task.completed).length}
                onConfirm={() => handleClearCompleted("all")}
                disabled={tasks.filter((task) => task.completed).length === 0}
              />
            </div>
          </div>
        </div>

        {showForm && (
          <TaskForm task={editingTask} onSave={editingTask ? handleEditTask : handleAddTask} onCancel={handleCancel} />
        )}

        {showSchedule && <ScheduleView tasks={tasks} onClose={() => setShowSchedule(false)} />}

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Prey Tasks */}
          <Card className="border-red-200">
            <CardHeader className="bg-red-50">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2 text-red-800 scannable-heading">
                    <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                    Prey Tasks ({preyTasks.length})
                  </CardTitle>
                  <p className="text-sm text-red-600 scannable-text">High impact, high priority - 1.5-2hr blocks</p>
                </div>
                <ClearCompletedDialog
                  section="Prey Tasks"
                  completedCount={preyTasks.filter((task) => task.completed).length}
                  onConfirm={() => handleClearCompleted("prey")}
                  disabled={preyTasks.filter((task) => task.completed).length === 0}
                />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              {preyTasks.length === 0 ? (
                <p className="text-gray-500 text-center py-4 scannable-text">No prey tasks yet</p>
              ) : (
                preyTasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onEdit={handleEditClick}
                    onDelete={handleDeleteTask}
                    onToggleComplete={handleToggleComplete}
                  />
                ))
              )}
            </CardContent>
          </Card>

          {/* Noise Tasks */}
          <Card className="border-yellow-200">
            <CardHeader className="bg-yellow-50">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2 text-yellow-800 scannable-heading">
                    <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
                    Noise Tasks ({noiseTasks.length})
                  </CardTitle>
                  <p className="text-sm text-yellow-600 scannable-text">Medium priority, batchable - 1hr blocks</p>
                </div>
                <ClearCompletedDialog
                  section="Noise Tasks"
                  completedCount={noiseTasks.filter((task) => task.completed).length}
                  onConfirm={() => handleClearCompleted("noise")}
                  disabled={noiseTasks.filter((task) => task.completed).length === 0}
                />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              {noiseTasks.length === 0 ? (
                <p className="text-gray-500 text-center py-4 scannable-text">No noise tasks yet</p>
              ) : (
                noiseTasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onEdit={handleEditClick}
                    onDelete={handleDeleteTask}
                    onToggleComplete={handleToggleComplete}
                  />
                ))
              )}
            </CardContent>
          </Card>

          {/* Optional Tasks */}
          <Card className="border-blue-200">
            <CardHeader className="bg-blue-50">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2 text-blue-800 scannable-heading">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    Optional Tasks ({optionalTasks.length})
                  </CardTitle>
                  <p className="text-sm text-blue-600 scannable-text">Low priority, flexible timing</p>
                </div>
                <ClearCompletedDialog
                  section="Optional Tasks"
                  completedCount={optionalTasks.filter((task) => task.completed).length}
                  onConfirm={() => handleClearCompleted("optional")}
                  disabled={optionalTasks.filter((task) => task.completed).length === 0}
                />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              {optionalTasks.length === 0 ? (
                <p className="text-gray-500 text-center py-4 scannable-text">No optional tasks yet</p>
              ) : (
                optionalTasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onEdit={handleEditClick}
                    onDelete={handleDeleteTask}
                    onToggleComplete={handleToggleComplete}
                  />
                ))
              )}
            </CardContent>
          </Card>
        </div>

        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p className="scannable-text">Stay focused. Hunt your prey. Minimize the noise.</p>
          <p className="mt-4 text-xs text-gray-400 scannable-small">
            All rights reserved 2025. Powered by Coriano Harris
          </p>
        </footer>
      </div>
    </div>
  )
}
