"use client"

import type React from "react"

import { useState, useEffect } from "react"
import type { Task, TaskCategory, Impact, Effort } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface TaskFormProps {
  task?: Task
  onSave: (task: Omit<Task, "id" | "createdAt" | "priority" | "taskType">) => void
  onCancel: () => void
}

export default function TaskForm({ task, onSave, onCancel }: TaskFormProps) {
  const [formData, setFormData] = useState({
    title: "",
    category: "Other" as TaskCategory,
    impact: "Medium" as Impact,
    effort: "Medium" as Effort,
    deadline: "",
    description: "",
    estimatedHours: "1",
    completed: false,
  })

  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title,
        category: task.category,
        impact: task.impact,
        effort: task.effort,
        deadline: task.deadline || "",
        description: task.description || "",
        estimatedHours: task.estimatedHours.toString(),
        completed: task.completed,
      })
    }
  }, [task])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.title.trim()) return

    const newTask: Omit<Task, "id" | "createdAt" | "priority" | "taskType"> = {
      title: formData.title.trim(),
      category: formData.category,
      impact: formData.impact,
      effort: formData.effort,
      deadline: formData.deadline || undefined,
      description: formData.description.trim() || undefined,
      estimatedHours: Number.parseFloat(formData.estimatedHours),
      completed: formData.completed,
    }

    onSave(newTask)
  }

  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>{task ? "Edit Task" : "Add New Task"}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Task Title *</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
              placeholder="Enter task title"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="category">Category</Label>
              <Select
                value={formData.category}
                onValueChange={(value: TaskCategory) => setFormData((prev) => ({ ...prev, category: value }))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Revenue">Revenue</SelectItem>
                  <SelectItem value="Startup">Startup</SelectItem>
                  <SelectItem value="Health">Health</SelectItem>
                  <SelectItem value="Study">Study</SelectItem>
                  <SelectItem value="Social">Social</SelectItem>
                  <SelectItem value="Admin">Admin</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="estimatedHours">Estimated Hours</Label>
              <Input
                id="estimatedHours"
                type="number"
                step="0.5"
                min="0.5"
                max="8"
                value={formData.estimatedHours}
                onChange={(e) => setFormData((prev) => ({ ...prev, estimatedHours: e.target.value }))}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="impact">Impact</Label>
              <Select
                value={formData.impact}
                onValueChange={(value: Impact) => setFormData((prev) => ({ ...prev, impact: value }))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="High">High</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="effort">Effort</Label>
              <Select
                value={formData.effort}
                onValueChange={(value: Effort) => setFormData((prev) => ({ ...prev, effort: value }))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="High">High</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="deadline">Deadline (Optional)</Label>
            <Input
              id="deadline"
              type="date"
              value={formData.deadline}
              onChange={(e) => setFormData((prev) => ({ ...prev, deadline: e.target.value }))}
            />
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
              placeholder="Additional details about the task..."
              rows={3}
            />
          </div>

          <div className="flex gap-2">
            <Button type="submit">{task ? "Update Task" : "Add Task"}</Button>
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
