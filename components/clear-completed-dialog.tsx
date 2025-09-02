"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ActionModal } from "@/components/ui/action-modal"
import { Trash2 } from "lucide-react"
import type { SectionType } from "@/lib/types"

interface ClearCompletedDialogProps {
  section: SectionType | string
  completedCount: number
  onConfirm: () => void
  disabled?: boolean
}

export default function ClearCompletedDialog({
  section,
  completedCount,
  onConfirm,
  disabled = false,
}: ClearCompletedDialogProps) {
  const [open, setOpen] = useState(false)

  if (disabled || completedCount === 0) {
    return (
      <Button
        size="sm"
        variant="outline"
        className="text-gray-400 cursor-not-allowed bg-transparent border-0"
        disabled={true}
        aria-label={`No completed items to clear in ${section}`}
      >
        <Trash2 className="w-4 h-4" aria-hidden="true" />
        <span className="sr-only">Clear completed</span>
      </Button>
    )
  }

  return (
    <>
      <Button
        size="sm"
        variant="outline"
        className="text-red-600 hover:bg-red-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 bg-transparent border-0"
        onClick={() => setOpen(true)}
        aria-label={`Clear all completed items in ${section}`}
      >
        <Trash2 className="w-4 h-4" aria-hidden="true" />
        <span className="sr-only">Clear completed</span>
      </Button>

      <ActionModal
        open={open}
        onOpenChange={setOpen}
        title="Clear Completed Items"
        description={`Are you sure you want to clear ${completedCount} completed item${
          completedCount === 1 ? "" : "s"
        } from ${section}?`}
        actionType="clear"
        actionLabel={`Clear ${completedCount} Item${completedCount === 1 ? "" : "s"}`}
        onConfirm={onConfirm}
      >
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <Trash2 className="w-4 h-4 text-orange-600" />
              </div>
            </div>
            <div>
              <h4 className="font-medium text-orange-900 mb-1">Permanent Action</h4>
              <p className="text-sm text-orange-800">
                This will permanently remove all completed items from your {section.toLowerCase()}. This action cannot
                be undone.
              </p>
              <div className="mt-3 p-2 bg-orange-100 rounded text-xs text-orange-800">
                <strong>Tip:</strong> Consider keeping completed items for progress tracking before clearing them.
              </div>
            </div>
          </div>
        </div>
      </ActionModal>
    </>
  )
}
