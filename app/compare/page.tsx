"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, ArrowRightLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function ComparePage() {
  const [sliderValue, setSliderValue] = useState(50)
  const [activeTab, setActiveTab] = useState("home")

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <Link href="/">
              <span className="text-rose-500">UX</span>
              <span className="text-neutral-900">Redesign</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-neutral-500 hover:text-neutral-900">
              Home
            </Link>
            <Link href="/original" className="text-sm font-medium text-neutral-500 hover:text-neutral-900">
              Original
            </Link>
            <Link href="/redesign" className="text-sm font-medium text-neutral-500 hover:text-neutral-900">
              Redesign
            </Link>
            <Link href="/compare" className="text-sm font-medium text-neutral-900 hover:text-neutral-600">
              Compare
            </Link>
            <Link href="/case-study" className="text-sm font-medium text-neutral-500 hover:text-neutral-900">
              Case Study
            </Link>
          </nav>
          <Button asChild variant="outline">
            <Link href="/case-study">
              View Case Study
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </header>

      <main className="container py-8">
        <div className="flex flex-col items-center justify-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Compare Designs</h1>
          <p className="text-neutral-600 max-w-2xl text-center mb-6">
            Drag the slider to compare the original Airbnb design with our redesigned version. See how we've improved
            usability, accessibility, and visual appeal.
          </p>

          <Tabs defaultValue="home" className="w-full max-w-md" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="home">Home Page</TabsTrigger>
              <TabsTrigger value="search">Search</TabsTrigger>
              <TabsTrigger value="listing">Listing</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="relative max-w-5xl mx-auto overflow-hidden rounded-xl border shadow-lg">
          <div className="relative h-[600px] w-full">
            {/* Original Design */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={`/placeholder.svg?height=600&width=1000&query=original airbnb ${activeTab} page screenshot`}
                alt="Original Airbnb design"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                Original
              </div>
            </div>

            {/* Redesigned Version - Shown based on slider */}
            <div className="absolute inset-0 w-full h-full" style={{ clipPath: `inset(0 0 0 ${sliderValue}%)` }}>
              <img
                src={`/placeholder.svg?height=600&width=1000&query=redesigned modern airbnb ${activeTab} page screenshot`}
                alt="Redesigned Airbnb"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-rose-500 text-white px-3 py-1 rounded-full text-sm">
                Redesigned
              </div>
            </div>

            {/* Slider Handle */}
            <div className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize" style={{ left: `${sliderValue}%` }}>
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
                <ArrowRightLeft className="h-5 w-5 text-neutral-600" />
              </div>
            </div>

            {/* Annotations */}
            {activeTab === "home" && (
              <>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div
                        className="absolute w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center cursor-pointer"
                        style={{ top: "20%", left: "30%" }}
                      >
                        <span>1</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="max-w-xs">
                      <p>Simplified search interface with clear visual hierarchy and improved mobile usability</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div
                        className="absolute w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center cursor-pointer"
                        style={{ top: "40%", left: "70%" }}
                      >
                        <span>2</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="left" className="max-w-xs">
                      <p>Enhanced category navigation with improved visual indicators and touch targets</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div
                        className="absolute w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center cursor-pointer"
                        style={{ top: "70%", left: "50%" }}
                      >
                        <span>3</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="max-w-xs">
                      <p>Redesigned listing cards with improved information hierarchy and accessibility</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </>
            )}
          </div>

          <div className="p-4 bg-white border-t">
            <Slider value={[sliderValue]} onValueChange={(value) => setSliderValue(value[0])} className="w-full" />
          </div>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Key Improvements</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3">Usability Enhancements</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 p-1 mt-0.5">
                    <svg
                      className="h-3 w-3 text-green-600"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-sm">Simplified search interface with fewer steps</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 p-1 mt-0.5">
                    <svg
                      className="h-3 w-3 text-green-600"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-sm">Improved filter system with better organization</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 p-1 mt-0.5">
                    <svg
                      className="h-3 w-3 text-green-600"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-sm">Enhanced visual hierarchy for better scanning</span>
                </li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3">Accessibility Improvements</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 p-1 mt-0.5">
                    <svg
                      className="h-3 w-3 text-green-600"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-sm">WCAG compliant color contrast ratios</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 p-1 mt-0.5">
                    <svg
                      className="h-3 w-3 text-green-600"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-sm">Improved keyboard navigation and focus states</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 p-1 mt-0.5">
                    <svg
                      className="h-3 w-3 text-green-600"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-sm">Larger touch targets for mobile users</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Button asChild>
              <Link href="/case-study">
                View Full Case Study
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
