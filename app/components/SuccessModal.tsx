"use client"

import { motion } from "framer-motion"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { CheckCircle, Sparkles, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  const [canClose, setCanClose] = useState(false)

  useEffect(() => {
    if (isOpen) {
      // Reset the close state when modal opens
      setCanClose(false)
      // Allow closing after 5 seconds
      const timer = setTimeout(() => {
        setCanClose(true)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <Dialog 
      open={isOpen} 
      onOpenChange={(open) => {
        // Only allow closing after 5 seconds
        if (canClose) {
          onClose()
        }
      }}
    >
      <DialogContent 
        className="w-[95vw] max-w-[500px] max-h-[90vh] overflow-y-auto bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 border-0 shadow-2xl"
        onPointerDownOutside={(e) => {
          // Prevent closing by clicking outside
          if (!canClose) {
            e.preventDefault()
          }
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-br from-blue-200 to-teal-300 rounded-full opacity-20"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative z-10">
          <DialogHeader className="text-center space-y-2 sm:space-y-4 mb-4 sm:mb-8">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 0.8, 
                type: "spring", 
                bounce: 0.4,
                delay: 0.2 
              }}
              className="mx-auto relative"
            >
              {/* Success Icon with Sparkles */}
              <div className="relative">
                <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-2xl">
                  <CheckCircle className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
                </div>
                
                {/* Animated Sparkles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      top: `${10 + Math.sin(i * 60 * Math.PI / 180) * 25}px`,
                      left: `${10 + Math.cos(i * 60 * Math.PI / 180) * 25}px`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      rotate: [0, 180, 360],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  >
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <DialogTitle className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                🎉 Application Received!
              </DialogTitle>
            </motion.div>
          </DialogHeader>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-center space-y-3 sm:space-y-6"
          >
            {/* Success Message */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-3 sm:p-6 shadow-lg border border-green-100">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.9, duration: 0.4 }}
                className="space-y-4"
              >
                <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">
                  Your Application Has Been Received!
                </h3>
                
                <div className="flex items-center justify-center space-x-2 text-emerald-600 mb-2 sm:mb-4">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-semibold text-sm sm:text-base">We Will Contact You Within 24 Hours</span>
                </div>
                
                <p className="text-gray-700 text-sm sm:text-lg leading-relaxed">
                  Thank you for completing your application and payment. Our team is now processing your submission and will reach out to you within the next 24 hours with further instructions.
                </p>
                
                <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-2 sm:p-4 mt-2 sm:mt-4">
                  <p className="text-xs sm:text-sm text-green-800 font-medium">
                    📧 Check your email regularly for updates
                    <br />
                    📱 Keep your phone accessible for our call
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Animated Progress Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="flex justify-center space-x-2 sm:space-x-4 py-2 sm:py-4"
            >
              {['Application', 'Payment', 'Processing'].map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.3 }}
                  className="flex flex-col items-center space-y-1 sm:space-y-2"
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <span className="text-xs font-medium text-gray-600">{step}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.5 }}
            >
              <Button 
                onClick={onClose}
                className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 text-white text-sm sm:text-lg px-6 sm:px-12 py-2 sm:py-4 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold w-full sm:w-auto"
                disabled={!canClose}
              >
                {canClose ? '✨ Awesome!' : 'Please wait...'}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
