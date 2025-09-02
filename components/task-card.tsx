"use client"

import type React from "react"

import { useState } from "react"
import type { Task } from "@/lib/types"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ActionModal } from "@/components/ui/action-modal"
import { Trash2, Edit, Check, Clock, Target, Zap, Calendar } from "lucide-react"

interface TaskCardProps {
  task: Task
  onEdit: (task: Task) => void
  onDelete: (id: string) => void
  onToggleComplete: (id: string) => void
}

export default function TaskCard({ task, onEdit, onDelete, onToggleComplete }: TaskCardProps) {
  const [isProcessing, setIsProcessing] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showCompleteModal, setShowCompleteModal] = useState(false)

  const handleToggleComplete = (event: React.MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()

    if (isProcessing) return

    if (!task.completed) {
      // Show confirmation for completing task
      setShowCompleteModal(true)
    } else {
      // Directly mark as incomplete
      setIsProcessing(true)
      onToggleComplete(task.id)
      setTimeout(() => setIsProcessing(false), 300)
    }
  }

  const handleConfirmComplete = () => {
    setIsProcessing(true)
    onToggleComplete(task.id)
    setTimeout(() => setIsProcessing(false), 300)
  }

  const handleConfirmDelete = () => {
    onDelete(task.id)
  }

  const getTaskTypeColor = () => {
    switch (task.taskType) {
      case "Prey":
        return "bg-red-100 text-red-800 border-red-200"
      case "Noise":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Optional":
        return "bg-blue-100 text-blue-800 border-blue-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getCategoryColor = () => {
    switch (task.category) {
      case "Revenue":
        return "text-green-600"
      case "Startup":
        return "text-purple-600"
      case "Health":
        return "text-red-600"
      case "Study":
        return "text-blue-600"
      case "Social":
        return "text-pink-600"
      case "Admin":
        return "text-gray-600"
      default:
        return "text-gray-600"
    }
  }

  const formatDeadline = (deadline: string) => {
    const date = new Date(deadline)
    const today = new Date()
    const diffTime = date.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 0) return "Today"
    if (diffDays === 1) return "Tomorrow"
    if (diffDays < 0) return "Overdue"
    return `${diffDays} days`
  }

  return (
    <>
      <Card
        className={`mb-3 transition-all shadow-lg ${task.completed ? "bg-purple-50" : "bg-white hover:bg-gray-50"}`}
      >
        <CardContent className="p-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3
                  className={`font-semibold scannable-heading ${task.completed ? "line-through text-purple-700" : "text-gray-900"}`}
                >
                  {task.title}
                </h3>
                {task.taskType && (
                  <Badge className={`text-xs font-medium scannable-small ${getTaskTypeColor()}`}>{task.taskType}</Badge>
                )}
              </div>

              <div className="flex flex-wrap gap-2 text-sm text-gray-600 mb-2 scannable-text">
                <span className={`flex items-center gap-1 ${getCategoryColor()}`}>
                  <Target className="w-3 h-3" />
                  {task.category}
                </span>

                <span className="flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  {task.impact} Impact
                </span>

                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {task.estimatedHours}h
                </span>

                {task.deadline && (
                  <span
                    className={`flex items-center gap-1 ${
                      formatDeadline(task.deadline) === "Overdue"
                        ? "text-red-600"
                        : formatDeadline(task.deadline) === "Today"
                          ? "text-orange-600"
                          : "text-gray-600"
                    }`}
                  >
                    <Calendar className="w-3 h-3" />
                    {formatDeadline(task.deadline)}
                  </span>
                )}
              </div>

              {task.description && <p className="text-sm text-gray-600 mb-2 scannable-text">{task.description}</p>}

              <div className="flex items-center gap-2 text-xs text-gray-500 scannable-small">
                <span>Priority: {task.priority}</span>
                <span>•</span>
                <span>Effort: {task.effort}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 ml-4">
              <Button
                size="sm"
                variant={task.completed ? "default" : "outline"}
                className={task.completed ? "bg-purple-600 hover:bg-purple-700" : ""}
                onClick={handleToggleComplete}
                disabled={isProcessing}
                aria-label={`Mark ${task.title} as ${task.completed ? "incomplete" : "complete"}`}
              >
                <Check className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="hover:bg-purple-100"
                onClick={() => onEdit(task)}
                aria-label={`Edit ${task.title}`}
              >
                <Edit className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="hover:bg-purple-100"
                onClick={() => setShowDeleteModal(true)}
                aria-label={`Delete ${task.title}`}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Delete Confirmation Modal */}
      <ActionModal
        open={showDeleteModal}
        onOpenChange={setShowDeleteModal}
        title="Delete Task"
        description={`Are you sure you want to delete "${task.title}"? This action cannot be undone.`}
        actionType="delete"
        actionLabel="Delete Task"
        onConfirm={handleConfirmDelete}
      >
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 shadow-md">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <Trash2 className="w-4 h-4 text-purple-700" />
              </div>
            </div>
            <div>
              <h4 className="font-medium text-purple-900 mb-1 scannable-heading">Task Details</h4>
              <p className="text-sm text-purple-800 scannable-text">
                <strong>Category:</strong> {task.category} • <strong>Priority:</strong> {task.priority} •{" "}
                <strong>Type:</strong> {task.taskType}
              </p>
              {task.description && (
                <p className="text-sm text-purple-700 mt-2 italic scannable-text">"{task.description}"</p>
              )}
            </div>
          </div>
        </div>
      </ActionModal>

      {/* Complete Task Confirmation Modal */}
      <ActionModal
        open={showCompleteModal}
        onOpenChange={setShowCompleteModal}
        title="Complete Task"
        description={`Mark "${task.title}" as completed?`}
        actionType="complete"
        actionLabel="Mark Complete"
        onConfirm={handleConfirmComplete}
      >
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 shadow-md">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-purple-700" />
              </div>
            </div>
            <div>
              <h4 className="font-medium text-purple-900 mb-1 scannable-heading">Great Progress!</h4>
              <p className="text-sm text-purple-800 scannable-text">
                Completing this {task.taskType?.toLowerCase()} task will help you stay focused on what matters most.
              </p>
              {task.estimatedHours && (
                <p className="text-sm text-purple-700 mt-2 scannable-text">
                  <strong>Time Investment:</strong> {task.estimatedHours} hours
                </p>
              )}
            </div>
          </div>
        </div>
      </ActionModal>
    </>
  )
}
