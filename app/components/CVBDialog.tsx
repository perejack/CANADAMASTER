"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"

interface CVBDialogProps {
  isOpen: boolean
  onClose: () => void
}

export function CVBDialog({ isOpen, onClose }: CVBDialogProps) {
  const [cvbValue, setCvbValue] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (cvbValue === '2222') {
      router.push('/submissions')
      onClose()
      setCvbValue('')
    } else {
      toast({
        title: "Invalid CVB",
        description: "The CVB value you entered is incorrect.",
        duration: 3000,
      })
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-white dark:bg-gray-900">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Enter CVB
          </DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-400">
            Please enter your CVB value to access submissions
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="password"
            placeholder="Enter CVB"
            value={cvbValue}
            onChange={(e) => setCvbValue(e.target.value)}
            className="w-full"
          />
          <div className="flex justify-end space-x-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="hover:bg-red-50 hover:text-red-600 hover:border-red-200"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
            >
              Submit
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
