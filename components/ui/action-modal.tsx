"use client"

import type * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { AlertTriangle, Trash2, Edit, Check, X } from "lucide-react"

interface ActionModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description: string
  actionType?: "delete" | "edit" | "complete" | "clear" | "custom"
  actionLabel?: string
  cancelLabel?: string
  onConfirm: () => void
  onCancel?: () => void
  variant?: "default" | "destructive" | "warning"
  children?: React.ReactNode
}

const actionIcons = {
  delete: Trash2,
  edit: Edit,
  complete: Check,
  clear: Trash2,
  custom: AlertTriangle,
}

const actionColors = {
  delete: "text-red-600",
  edit: "text-blue-600",
  complete: "text-green-600",
  clear: "text-orange-600",
  custom: "text-slate-600",
}

const actionButtonStyles = {
  delete: "bg-red-600 hover:bg-red-700 focus:ring-red-500",
  edit: "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",
  complete: "bg-green-600 hover:bg-green-700 focus:ring-green-500",
  clear: "bg-orange-600 hover:bg-orange-700 focus:ring-orange-500",
  custom: "bg-slate-600 hover:bg-slate-700 focus:ring-slate-500",
}

export function ActionModal({
  open,
  onOpenChange,
  title,
  description,
  actionType = "custom",
  actionLabel,
  cancelLabel = "Cancel",
  onConfirm,
  onCancel,
  variant = "default",
  children,
}: ActionModalProps) {
  const IconComponent = actionIcons[actionType]
  const iconColor = actionColors[actionType]
  const buttonStyle = actionButtonStyles[actionType]

  const handleConfirm = () => {
    onConfirm()
    onOpenChange(false)
  }

  const handleCancel = () => {
    if (onCancel) {
      onCancel()
    }
    onOpenChange(false)
  }

  const getDefaultActionLabel = () => {
    switch (actionType) {
      case "delete":
        return "Delete"
      case "edit":
        return "Edit"
      case "complete":
        return "Complete"
      case "clear":
        return "Clear"
      default:
        return "Confirm"
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <div className={`p-2 rounded-full bg-slate-100 ${iconColor}`}>
              <IconComponent className="w-5 h-5" />
            </div>
            {title}
          </DialogTitle>
          <DialogDescription className="text-base leading-relaxed pt-2">{description}</DialogDescription>
        </DialogHeader>

        {children && <div className="py-4">{children}</div>}

        <DialogFooter className="gap-2 sm:gap-2">
          <Button type="button" variant="outline" onClick={handleCancel} className="flex-1 sm:flex-none bg-transparent">
            <X className="w-4 h-4 mr-2" />
            {cancelLabel}
          </Button>
          <Button type="button" onClick={handleConfirm} className={`flex-1 sm:flex-none text-white ${buttonStyle}`}>
            <IconComponent className="w-4 h-4 mr-2" />
            {actionLabel || getDefaultActionLabel()}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
