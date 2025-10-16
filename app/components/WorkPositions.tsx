"use client"

import { useState, useMemo } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ApplicationModal from './ApplicationModal'

const previouslyDefinedPositions = [
  {
    title: "Welder",
    description: "Join the skilled trades and help shape the future with your welding expertise. Enjoy competitive pay while working on exciting projects in various industries.",
    salary: "$4,333 - $6,066",
    image: "/images/bartender.jpg"
  },
  {
    title: "Housekeeper",
    description: "Create inviting spaces for guests and residents. Enjoy flexible hours while making a difference in people's daily lives.",
    salary: "$2,600 - $2,960",
    image: "/images/housekeeper.jpg"
  },
  {
    title: "Security Guard",
    description: "Protect people and property while ensuring safety in diverse environments. Opportunities for career advancement.",
    salary: "$2,773 - $3,466",
    image: "/images/security-guard.jpg"
  },
  {
    title: "Gardener",
    description: "Cultivate beautiful landscapes and nurture plants in a rewarding outdoor role. Enjoy competitive pay while enhancing nature's beauty.",
    salary: "$2,600 - $3,466",
    image: "/images/gardener.jpg"
  },
  {
    title: "Nanny",
    description: "Make a lasting impact on children's lives by providing care and guidance. Enjoy a fulfilling role with flexible hours that fit your lifestyle.",
    salary: "$2,600 - $4,333",
    image: "/images/nanny.jpg"
  },
  {
    title: "Chef",
    description: "Showcase your culinary talents in a vibrant kitchen environment. Create delicious dishes with opportunities for growth in the culinary arts.",
    salary: "$3,120 - $5,200",
    image: "/images/kitchen-helper.jpg"
  },
  {
    title: "Kitchen Helper",
    description: "Support the kitchen team by preparing ingredients and maintaining cleanliness. Start your journey in the culinary world.",
    salary: "$2,600 - $2,960",
    image: "/images/kitchen-helper.jpg"
  },
  {
    title: "Fish Plant Worker",
    description: "Contribute to the seafood industry by processing high-quality fish products. Enjoy competitive wages in a dynamic work environment.",
    salary: "$3,033 - $4,333",
    image: "/images/fish-plant-worker.jpg"
  },
  {
    title: "Hotel Front Desk Clerk",
    description: "Be the first point of contact for guests, providing exceptional service and support. Work in a lively atmosphere with opportunities for career growth.",
    salary: "$2,840 - $3,773",
    image: "/images/receptionist.jpg"
  },
  {
    title: "Bartender",
    description: "Mix drinks and serve patrons in vibrant settings. Enjoy tips and competitive earnings.",
    salary: "Up to $4,333 (including tips)",
    image: "/images/bartender.jpg"
  },
  {
    title: "Light Duty Cleaner",
    description: "Help maintain cleanliness in various settings with flexible hours that fit your schedule. Contribute to overall hygiene and workplace safety.",
    salary: "Up to $3,120",
    image: "/images/housekeeper.jpg"
  },
  {
    title: "Specialized Cleaner",
    description: "Use your skills to tackle unique cleaning challenges in specialized environments. Enjoy competitive pay in a specialized role.",
    salary: "Up to $4,333",
    image: "/images/specialized-cleaner.webp"
  },
  {
    title: "Janitor & Building Superintendent",
    description: "Ensure facilities are clean and well-maintained. Enjoy stable employment with varied responsibilities that keep your day interesting.",
    salary: "$3,033 - $4,000",
    image: "/images/janitor.jpg"
  },
  {
    title: "Caretaker & Building Superintendent",
    description: "Ensure facilities are clean and well-maintained. Enjoy stable employment with varied responsibilities that keep your day interesting.",
    salary: "$3,033 - $4,000",
    image: "/images/janitor.jpg"
  },
  {
    title: "Plumber",
    description: "Join the essential trade of plumbing, where you can solve problems and improve systems. Enjoy high demand for your skills with competitive pay.",
    salary: "$5,200 - $6,933",
    image: "/images/plumber.jpg"
  },
  {
    title: "Dry Cleaning Worker",
    description: "Help keep clothes fresh and clean in a fast-paced environment. Provide quality service while earning competitive wages.",
    salary: "Up to $3,466",
    image: "/images/dry-cleaning-worker.jpg"
  },
  {
    title: "Housekeeping Staff",
    description: "Join our professional housekeeping team. Flexible schedules and opportunities for advancement in the hospitality industry.",
    salary: "Up to $3,120",
    image: "/images/housekeeper.jpg"
  }
]

const jobPositions = [
  {
    title: "Casino Worker",
    description: "Join Canada's exciting gaming industry. Various positions available with competitive base pay plus tips.",
    salary: "Varies widely; typically around minimum wage plus tips",
    image: "/images/casino-worker.jpg"
  },
  {
    title: "Hostess",
    description: "Welcome guests in Canada's hospitality sector. Entry-level positions with earning potential through tips.",
    salary: "Minimum wage to about $3,120 (plus tips)",
    image: "/images/receptionist.jpg"
  },
  {
    title: "Hotel Valet",
    description: "Provide premium service at Canadian hotels. Entry-level position with tip earning potential.",
    salary: "Around minimum wage to about $3,120 (plus tips)",
    image: "/images/housekeeper.jpg"
  },
  {
    title: "Electrician",
    description: "Join Canada's skilled trades sector. High-demand profession with excellent compensation.",
    salary: "Approximately $5,200 - $6,933",
    image: "/images/plumber.jpg"
  },
  {
    title: "Machine Operator",
    description: "Operate equipment in Canadian manufacturing. Technical role with competitive compensation.",
    salary: "Approximately minimum wage to about $4,333",
    image: "/images/janitor.jpg"
  },
  {
    title: "Receptionist",
    description: "Support Canadian businesses in administrative roles. Professional environment with benefits.",
    salary: "Approximately minimum wage to about $3,786",
    image: "/images/receptionist.jpg"
  },
  {
    title: "Secretary",
    description: "Provide administrative support in professional environments. Opportunities for career advancement.",
    salary: "Approximately minimum wage to about $3,786",
    image: "/images/receptionist.jpg"
  },
  {
    title: "Store Keeper",
    description: "Manage inventory and operations in retail settings. Various positions with competitive compensation.",
    salary: "Minimum wage to around $3,466",
    image: "/images/receptionist.jpg"
  },
  {
    title: "Driver",
    description: "Transport people and goods across Canada. Various driving positions with competitive pay.",
    salary: "Typically around minimum wage to about $4,333",
    image: "/images/bartender.jpg"
  },
  {
    title: "Babysitter",
    description: "Care for children in private homes. Flexible work with competitive compensation.",
    salary: "Typically around minimum wage to about $4,333",
    image: "/images/nanny.jpg"
  },
  {
    title: "Parent's Helper",
    description: "Support families with childcare and household duties. Entry-level caregiving position.",
    salary: "Typically around minimum wage to about $4,333",
    image: "/images/nanny.jpg"
  }
]

const allJobPositions = [
  ...previouslyDefinedPositions,
  ...jobPositions
].filter((job, index, self) => 
  index === self.findIndex((t) => t.title === job.title)
)

export default function WorkPositions() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("title")
  const [formStep, setFormStep] = useState(1)

  const handleModalClose = () => {
    setSelectedJob(null)
    setFormStep(1) // Reset step when modal closes
  }

  const handleModalOpen = (jobTitle: string) => {
    setSelectedJob(jobTitle)
    setFormStep(1)
  }

  const filteredAndSortedJobs = useMemo(() => {
    return allJobPositions
      .filter(job => job.title.toLowerCase().includes(searchTerm.toLowerCase()))
      .sort((a, b) => {
        if (sortBy === "title") {
          return a.title.localeCompare(b.title)
        } else if (sortBy === "salary") {
          const getMaxSalary = (salary: string) => {
            const matches = salary.match(/\d+,?\d+/g)
            return matches ? Math.max(...matches.map(n => parseInt(n.replace(',', '')))) : 0
          }
          return getMaxSalary(b.salary) - getMaxSalary(a.salary)
        }
        return 0
      })
  }, [searchTerm, sortBy])

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Work Positions in Canada</h1>
        <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          Discover exciting career opportunities with competitive salaries and benefits. Start your journey to Canada with positions in high-demand industries.
        </p>
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0 md:space-x-4">
          <Input
            type="text"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/3"
          />
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-auto">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="title">Sort by Title</SelectItem>
              <SelectItem value="salary">Sort by Salary (High to Low)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredAndSortedJobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="relative w-full h-48">
                    <Image
                      src={job.image}
                      alt={job.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{job.description}</p>
                    <div className="mt-auto">
                      <p className="text-lg font-semibold text-green-600 mb-4">Monthly Salary: {job.salary}</p>
                      <Button 
                        className="w-full bg-red-600 hover:bg-red-700 text-white transition-colors"
                        onClick={() => handleModalOpen(job.title)}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      {selectedJob && (
        <ApplicationModal
          isOpen={!!selectedJob}
          onClose={handleModalClose}
          jobTitle={selectedJob}
          currentStep={formStep}
          onStepChange={setFormStep}
        />
      )}
    </section>
  )
}
