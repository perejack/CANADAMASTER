"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { supabase } from '@/lib/supabase'

interface FormData {
  name: string
  email: string
  phone: string
  visaType: string
  message: string
}

export default function ApplicationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    visaType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState: FormData) => ({ ...prevState, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prevState: FormData) => ({ ...prevState, visaType: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const { error } = await supabase
        .from('form_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            position: formData.visaType,
            message: JSON.stringify({
              visaType: formData.visaType,
              additionalMessage: formData.message,
              source: 'landing_page_form'
            })
          }
        ])

      if (error) throw error

      toast({
        title: "Application Submitted Successfully!",
        description: "Thank you for your submission. We will contact you soon.",
        duration: 5000,
      })
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        visaType: "",
        message: "",
      })
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 bg-red-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Start Your Canadian Journey Today</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <Input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <Input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <Select onValueChange={handleSelectChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select Visa Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="work">Work Visa</SelectItem>
                <SelectItem value="study">Student Visa</SelectItem>
                <SelectItem value="family">Family Sponsorship</SelectItem>
                <SelectItem value="express">Express Entry</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="mb-4">
            <Textarea
              name="message"
              placeholder="Additional Information"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-red-600 hover:bg-red-700 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </div>
    </section>
  )
}
