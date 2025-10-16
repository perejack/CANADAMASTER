"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Briefcase, GraduationCap, Users } from 'lucide-react'
import ApplicationModal from './ApplicationModal'

interface ApplicationOptionsProps {
  isOpen: boolean
  onClose: () => void
}

export default function ApplicationOptions({ isOpen, onClose }: ApplicationOptionsProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [formStep, setFormStep] = useState(1)
  const router = useRouter()

  const handleOptionClick = (option: string) => {
    if (option === 'work') {
      router.push('/work-positions')
      onClose()
    } else {
      setSelectedOption(option)
      setFormStep(1)
    }
  }

  const handleModalClose = () => {
    setSelectedOption(null)
    setFormStep(1)
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Choose Your Application Type</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 gap-4 py-4">
            <Button
              onClick={() => handleOptionClick('work')}
              className="flex items-center justify-start space-x-2 h-20 bg-blue-100 hover:bg-blue-200 text-blue-800"
            >
              <Briefcase size={24} />
              <span>Work Visa</span>
            </Button>
            <Button
              onClick={() => handleOptionClick('study')}
              className="flex items-center justify-start space-x-2 h-20 bg-green-100 hover:bg-green-200 text-green-800"
            >
              <GraduationCap size={24} />
              <span>Student Visa</span>
            </Button>
            <Button
              onClick={() => handleOptionClick('family')}
              className="flex items-center justify-start space-x-2 h-20 bg-purple-100 hover:bg-purple-200 text-purple-800"
            >
              <Users size={24} />
              <span>Family Sponsorship</span>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      {(selectedOption === 'study' || selectedOption === 'family') && (
        <ApplicationModal
          isOpen={!!selectedOption}
          onClose={handleModalClose}
          jobTitle={selectedOption === 'study' ? 'Student Visa Application' : 'Family Sponsorship Application'}
          currentStep={formStep}
          onStepChange={setFormStep}
        />
      )}
    </>
  )
}
