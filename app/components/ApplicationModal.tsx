"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { User, BookOpen, CreditCard, CheckCircle, Copy, Phone, MessageCircle } from 'lucide-react'
import { toast } from "@/hooks/use-toast"
import SuccessModal from './SuccessModal'
import { supabase } from '@/lib/supabase'

interface ApplicationModalProps {
  isOpen: boolean
  onClose: () => void
  jobTitle?: string
  currentStep: number
  onStepChange: (step: number) => void
}

const educationLevels = [
  "Certificate",
  "Diploma",
  "Degree",
  "Masters",
  "Other",
  "Form Four"
]

const employmentStatuses = [
  "Employed",
  "Unemployed"
]

export default function ApplicationModal({ 
  isOpen, 
  onClose, 
  jobTitle,
  currentStep,
  onStepChange
}: ApplicationModalProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    nationality: "",
    educationLevel: "",
    employmentStatus: "",
    position: jobTitle || ""
  })
  const [showSuccess, setShowSuccess] = useState(false)
  const [showPayment, setShowPayment] = useState(false)
  const [showMpesaCode, setShowMpesaCode] = useState(false)
  const [mpesaCode, setMpesaCode] = useState('')
  const [copied, setCopied] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (currentStep === 1) {
      onStepChange(2)
      return
    }
    if (currentStep === 2) {
      setShowPayment(true)
      return
    }
  }

  const handlePaymentNext = () => {
    setShowPayment(false)
    setShowMpesaCode(true)
  }

  const handleMpesaSubmit = async () => {
    if (!mpesaCode.trim()) {
      toast({
        title: "Code Required",
        description: "Please enter your M-Pesa confirmation code.",
        duration: 3000,
      })
      return
    }

    if (mpesaCode.trim().length < 10 || !mpesaCode.trim().startsWith('T')) {
      toast({
        title: "Invalid Code",
        description: "Please enter a valid transaction code.",
        variant: "destructive",
        duration: 4000,
      })
      return
    }

    try {
      const { error } = await supabase
        .from('form_submissions')
        .insert([
          {
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            phone: formData.phoneNumber,
            message: JSON.stringify({
              nationality: formData.nationality,
              educationLevel: formData.educationLevel,
              employmentStatus: formData.employmentStatus,
              position: formData.position,
              mpesaCode: mpesaCode,
              paymentStatus: 'pending'
            })
          }
        ])

      if (error) throw error

      setShowMpesaCode(false)
      setShowSuccess(true)
      
      setTimeout(() => {
        setShowSuccess(false)
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          nationality: "",
          educationLevel: "",
          employmentStatus: "",
          position: jobTitle || ""
        })
        setMpesaCode('')
        onClose()
        onStepChange(1)
      }, 5000)
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        duration: 5000,
      })
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
    toast({
      title: "Copied!",
      description: "Till number copied to clipboard",
      duration: 2000,
    })
  }

  const openWhatsApp = () => {
    window.open('https://wa.me/18632362530', '_blank')
  }

  const makeCall = () => {
    window.open('tel:+18632362530', '_self')
  }

  const prevStep = () => onStepChange(1)

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input id="phoneNumber" name="phoneNumber" type="tel" value={formData.phoneNumber} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nationality">Nationality</Label>
                <Input id="nationality" name="nationality" value={formData.nationality} onChange={handleChange} required />
              </div>
            </div>
          </motion.div>
        )
      case 2:
        return (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="educationLevel">Level of Education</Label>
                <Select onValueChange={handleSelectChange("educationLevel")} value={formData.educationLevel}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select education level" />
                  </SelectTrigger>
                  <SelectContent>
                    {educationLevels.map((level) => (
                      <SelectItem key={level} value={level}>{level}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="employmentStatus">Employment Status</Label>
                <Select onValueChange={handleSelectChange("employmentStatus")} value={formData.employmentStatus}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select employment status" />
                  </SelectTrigger>
                  <SelectContent>
                    {employmentStatuses.map((status) => (
                      <SelectItem key={status} value={status}>{status}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="position">Position Applying For</Label>
                <Input id="position" name="position" value={formData.position} onChange={handleChange} required />
              </div>
            </div>
          </motion.div>
        )
      default:
        return null
    }
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Apply for {jobTitle}</DialogTitle>
            <DialogDescription>
              Fill out the form below to start your application process.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex justify-center space-x-4 mb-6">
              <div className={`flex flex-col items-center ${currentStep >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
                <User size={24} />
                <span className="text-xs mt-1">Personal</span>
              </div>
              <div className={`flex flex-col items-center ${currentStep >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
                <BookOpen size={24} />
                <span className="text-xs mt-1">Education</span>
              </div>
            </div>
            <AnimatePresence mode="wait">
              {renderStep()}
            </AnimatePresence>
            <div className="flex justify-between mt-6">
              {currentStep > 1 && (
                <Button type="button" onClick={prevStep} variant="outline">
                  Previous
                </Button>
              )}
              <Button 
                type="submit" 
                className={`ml-auto ${currentStep === 2 ? 'bg-red-600 hover:bg-red-700' : ''} text-white`}
              >
                {currentStep === 1 ? 'Next' : 'Next'}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
      
      {/* Payment Processing Modal */}
      <Dialog open={showPayment} onOpenChange={setShowPayment}>
        <DialogContent className="w-[95vw] max-w-[500px] max-h-[90vh] overflow-y-auto bg-gradient-to-br from-blue-50 to-indigo-100 border-0 shadow-2xl">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <DialogHeader className="text-center space-y-2">
              <DialogTitle className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Processing Fee
              </DialogTitle>
              <DialogDescription className="text-gray-600 text-sm">
                Complete payment to proceed
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-3 mt-3 px-2">
              {/* Fee Amount */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center p-3 bg-white rounded-lg shadow-md border-l-4 border-green-500"
              >
                <div className="text-xl sm:text-2xl font-bold text-gray-800">KES 1,200</div>
              </motion.div>

              {/* Till Number */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-lg p-3 shadow-md"
              >
                <div className="text-center space-y-2">
                  <div className="text-base font-semibold text-gray-800">M-Pesa Till</div>
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 bg-gray-50 rounded-lg p-2">
                    <span className="text-lg sm:text-xl font-mono font-bold text-blue-600">6691390</span>
                    <Button
                      onClick={() => copyToClipboard('6691390')}
                      variant="outline"
                      size="sm"
                      className="flex items-center space-x-1 hover:bg-blue-50 border-blue-200 text-xs px-2 py-1"
                    >
                      <Copy className="w-3 h-3" />
                      <span>{copied ? 'Copied!' : 'Copy'}</span>
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Important Notice */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-amber-50 border border-amber-200 rounded-lg p-2"
              >
                <div className="flex items-start space-x-1">
                  <CheckCircle className="w-3 h-3 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div className="text-xs text-amber-800">
                    <strong>Important:</strong> Only paid applicants are selected for guaranteed placement.
                  </div>
                </div>
              </motion.div>

              {/* Contact Section */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-lg p-3 shadow-md"
              >
                <div className="text-center space-y-2">
                  <div className="text-sm font-semibold text-gray-800">Need Help?</div>
                  <div className="flex justify-center space-x-2">
                    <Button
                      onClick={openWhatsApp}
                      className="flex items-center space-x-1 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full text-xs"
                    >
                      <MessageCircle className="w-3 h-3" />
                      <span>WhatsApp</span>
                    </Button>
                    <Button
                      onClick={makeCall}
                      className="flex items-center space-x-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full text-xs"
                    >
                      <Phone className="w-3 h-3" />
                      <span>Call</span>
                    </Button>
                  </div>
                  <div className="text-xs text-gray-600 font-mono">+1 (863) 236-2530</div>
                </div>
              </motion.div>

              {/* Next Button */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex justify-center pt-1 pb-2"
              >
                <Button
                  onClick={handlePaymentNext}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-full shadow-lg font-semibold text-sm w-full sm:w-auto"
                >
                  Confirm
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>

      {/* M-Pesa Code Modal */}
      <Dialog open={showMpesaCode} onOpenChange={setShowMpesaCode}>
        <DialogContent className="w-[95vw] max-w-[450px] max-h-[90vh] overflow-y-auto bg-gradient-to-br from-green-50 to-emerald-100 border-0 shadow-2xl">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <DialogHeader className="text-center space-y-2">
              <motion.div
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="mx-auto w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center"
              >
                <CheckCircle className="w-6 h-6 text-white" />
              </motion.div>
              <DialogTitle className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                M-Pesa Code
              </DialogTitle>
              <DialogDescription className="text-gray-600 text-sm">
                Enter transaction code
              </DialogDescription>
            </DialogHeader>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-3 mt-3 px-2"
            >
              <div className="bg-white rounded-lg p-3 shadow-md">
                <Label htmlFor="mpesaCode" className="text-sm font-semibold text-gray-800 mb-2 block">
                  Transaction Code
                </Label>
                <Input
                  id="mpesaCode"
                  value={mpesaCode}
                  onChange={(e) => setMpesaCode(e.target.value.toUpperCase())}
                  placeholder="e.g., RCBKSGLHK"
                  className="text-center text-base font-mono tracking-wider border-2 border-green-200 focus:border-green-500 rounded-lg p-2"
                  maxLength={15}
                />
                <div className="text-xs text-gray-500 mt-1 text-center">
                  From M-Pesa SMS
                </div>
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex justify-center space-x-2 pb-2"
              >
                <Button
                  onClick={() => setShowMpesaCode(false)}
                  variant="outline"
                  className="px-4 py-2 rounded-full text-sm"
                >
                  Back
                </Button>
                <Button
                  onClick={handleMpesaSubmit}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-2 rounded-full shadow-lg font-semibold text-sm"
                >
                  Finish
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </DialogContent>
      </Dialog>

      <SuccessModal 
        isOpen={showSuccess} 
        onClose={() => setShowSuccess(false)} 
      />
    </>
  )
}
