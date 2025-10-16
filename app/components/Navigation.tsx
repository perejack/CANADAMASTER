"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Lock } from 'lucide-react'
import { CVBDialog } from './CVBDialog'
import { UnreadCounter } from './UnreadCounter'

export function Navigation() {
  const [isCVBDialogOpen, setIsCVBDialogOpen] = useState(false)

  return (
    <nav className="container mx-auto px-6 py-3">
      <div className="flex justify-between items-center">
        <div className="text-xl font-semibold text-gray-800">
          CanadaVisa
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#benefits" className="text-gray-800 hover:text-red-600 transition-colors">Benefits</a>
          <a href="#visa-types" className="text-gray-800 hover:text-red-600 transition-colors">Visa Types</a>
          <a href="#how-it-works" className="text-gray-800 hover:text-red-600 transition-colors">How It Works</a>
          <a href="#testimonials" className="text-gray-800 hover:text-red-600 transition-colors">Testimonials</a>
          <a href="#faq" className="text-gray-800 hover:text-red-600 transition-colors">FAQ</a>
        </div>
        <div className="flex items-center space-x-4">
          <Button asChild className="bg-red-600 hover:bg-red-700 text-white transition-colors">
            <a href="/blog" className="flex items-center">
              Latest Jobs <span className="ml-1">🔥</span>
            </a>
          </Button>
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsCVBDialogOpen(true)}
              className="text-gray-800 hover:text-red-600 transition-colors"
            >
              <Lock className="h-5 w-5" />
            </Button>
            <UnreadCounter />
          </div>
        </div>
      </div>
      <CVBDialog 
        isOpen={isCVBDialogOpen}
        onClose={() => setIsCVBDialogOpen(false)}
      />
    </nav>
  )
}
