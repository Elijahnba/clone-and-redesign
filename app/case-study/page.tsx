import Link from "next/link"
import { ArrowRightLeft, CheckCircle2, CircleAlert, Lightbulb, Paintbrush } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CaseStudyPage() {
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
            <Link href="/compare" className="text-sm font-medium text-neutral-500 hover:text-neutral-900">
              Compare
            </Link>
            <Link href="/case-study" className="text-sm font-medium text-neutral-900 hover:text-neutral-600">
              Case Study
            </Link>
          </nav>
          <Button asChild variant="outline">
            <Link href="/compare">
              Compare Designs
              <ArrowRightLeft className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </header>

      <main className="container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-600 mb-4">
              UX/UI Case Study
            </div>
            <h1 className="text-4xl font-bold mb-4">Airbnb Redesign: Enhancing User Experience</h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              A comprehensive case study on redesigning Airbnb's interface to improve usability, accessibility, and
              visual appeal.
            </p>
          </div>

          <div className="mb-12">
            <img
              src="/placeholder.svg?height=600&width=1200&query=airbnb redesign case study hero image"
              alt="Airbnb redesign case study"
              className="w-full rounded-xl shadow-lg"
            />
          </div>

          <div className="prose prose-neutral max-w-none">
            <h2>Project Overview</h2>
            <p>
              This case study explores the process of redesigning Airbnb's user interface to enhance usability,
              accessibility, and visual appeal. The project involved cloning key screens from the original Airbnb
              website, conducting a thorough UX audit, and implementing a redesign that addresses identified issues
              while maintaining the core functionality and brand identity.
            </p>

            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Project Goals</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Improve mobile responsiveness and performance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Enhance accessibility to meet WCAG standards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Simplify navigation and user flows</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Modernize UI with Apple-inspired minimalism</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Technical Stack</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Next.js for frontend development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Tailwind CSS for styling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Framer Motion for animations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Custom comparison tool for before/after views</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2>The Process</h2>

            <Tabs defaultValue="clone" className="not-prose">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="clone">Clone & Audit</TabsTrigger>
                <TabsTrigger value="redesign">Redesign</TabsTrigger>
                <TabsTrigger value="rebuild">Rebuild & Compare</TabsTrigger>
              </TabsList>

              <TabsContent value="clone">
                <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Cloning the Original Site</h3>
                    <p className="text-neutral-600 mb-4">
                      We began by replicating key screens from Airbnb's interface, focusing on the home page, search
                      functionality, and listing details. This allowed us to understand the existing user flows and
                      interaction patterns before making improvements.
                    </p>
                    <p className="text-neutral-600">
                      The clone was built using Next.js and Tailwind CSS, with mock data to simulate the real Airbnb
                      experience. We maintained the core layout and structure while preparing for our UX audit.
                    </p>
                  </div>
                  <img
                    src="/placeholder.svg?height=400&width=600&query=airbnb website clone screenshot"
                    alt="Airbnb clone screenshot"
                    className="rounded-lg shadow-md"
                  />
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">UX Audit Findings</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-amber-50 border-amber-200">
                      <CardContent className="p-6">
                        <h4 className="font-semibold flex items-center gap-2 mb-3">
                          <CircleAlert className="h-5 w-5 text-amber-500" />
                          Usability Issues
                        </h4>
                        <ul className="space-y-2">
                          <li className="text-sm">Complex search interface with too many steps</li>
                          <li className="text-sm">Overwhelming filter options without clear organization</li>
                          <li className="text-sm">Inconsistent touch targets on mobile devices</li>
                          <li className="text-sm">Cluttered navigation with competing elements</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-amber-50 border-amber-200">
                      <CardContent className="p-6">
                        <h4 className="font-semibold flex items-center gap-2 mb-3">
                          <CircleAlert className="h-5 w-5 text-amber-500" />
                          Accessibility Concerns
                        </h4>
                        <ul className="space-y-2">
                          <li className="text-sm">Insufficient color contrast in some UI elements</li>
                          <li className="text-sm">Small text sizes affecting readability</li>
                          <li className="text-sm">Lack of keyboard navigation support</li>
                          <li className="text-sm">Missing alternative text for images</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="redesign">
                <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Redesign Approach</h3>
                    <p className="text-neutral-600 mb-4">
                      Based on our UX audit, we created wireframes and high-fidelity mockups that addressed the
                      identified issues. Our redesign focused on simplifying the interface, improving accessibility, and
                      enhancing the mobile experience.
                    </p>
                    <p className="text-neutral-600">
                      We adopted an Apple-inspired minimalist aesthetic while maintaining Airbnb's brand identity. The
                      redesign prioritized clear visual hierarchy, improved information architecture, and intuitive
                      interactions.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <img
                      src="/placeholder.svg?height=300&width=300&query=airbnb wireframe sketch"
                      alt="Airbnb wireframe"
                      className="rounded-lg shadow-md"
                    />
                    <img
                      src="/placeholder.svg?height=300&width=300&query=airbnb high fidelity mockup"
                      alt="Airbnb high-fidelity mockup"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Key Design Improvements</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card>
                      <CardContent className="p-6">
                        <div className="rounded-full bg-rose-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                          <Lightbulb className="h-6 w-6 text-rose-600" />
                        </div>
                        <h4 className="font-semibold mb-2">Simplified Search</h4>
                        <p className="text-sm text-neutral-600">
                          Redesigned the search interface to reduce cognitive load and streamline the booking process.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <div className="rounded-full bg-rose-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                          <Lightbulb className="h-6 w-6 text-rose-600" />
                        </div>
                        <h4 className="font-semibold mb-2">Enhanced Filters</h4>
                        <p className="text-sm text-neutral-600">
                          Reorganized filters with improved categorization and visual feedback for selected options.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <div className="rounded-full bg-rose-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                          <Lightbulb className="h-6 w-6 text-rose-600" />
                        </div>
                        <h4 className="font-semibold mb-2">Mobile Optimization</h4>
                        <p className="text-sm text-neutral-600">
                          Redesigned mobile navigation and interaction patterns for better one-handed use.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="rebuild">
                <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Rebuilding the Interface</h3>
                    <p className="text-neutral-600 mb-4">
                      We implemented the redesigned interface using Next.js, Tailwind CSS, and Framer Motion for
                      animations. The rebuild focused on performance optimization, accessibility improvements, and
                      responsive design.
                    </p>
                    <p className="text-neutral-600">
                      Micro-interactions were added to enhance the user experience, with smooth transitions and feedback
                      mechanisms that guide users through the interface.
                    </p>
                  </div>
                  <img
                    src="/placeholder.svg?height=400&width=600&query=airbnb redesigned interface on devices"
                    alt="Redesigned Airbnb interface"
                    className="rounded-lg shadow-md"
                  />
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Comparison Tool</h3>
                  <p className="text-neutral-600 mb-6">
                    We developed an interactive comparison tool that allows users to see the differences between the
                    original and redesigned interfaces. This slider-based tool highlights the improvements in usability,
                    accessibility, and visual design.
                  </p>
                  <img
                    src="/placeholder.svg?height=400&width=800&query=before and after comparison slider for airbnb redesign"
                    alt="Comparison tool"
                    className="rounded-lg shadow-md w-full"
                  />
                  <div className="flex justify-center mt-6">
                    <Button asChild>
                      <Link href="/compare">
                        Try the Comparison Tool
                        <ArrowRightLeft className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <h2 className="mt-12">Results & Reflection</h2>
            <p>
              The redesigned Airbnb interface addresses the usability and accessibility issues identified in our UX
              audit while maintaining the core functionality and brand identity. Key improvements include:
            </p>

            <ul>
              <li>Simplified search and booking process with fewer steps</li>
              <li>Enhanced mobile experience with optimized touch targets and navigation</li>
              <li>Improved accessibility with WCAG-compliant color contrast and keyboard navigation</li>
              <li>Modern, minimalist aesthetic that focuses on content and functionality</li>
              <li>Smoother animations and micro-interactions that enhance the user experience</li>
            </ul>

            <p>
              This project demonstrates how thoughtful UX/UI redesign can significantly improve the user experience
              without drastically changing the core functionality. By focusing on usability, accessibility, and visual
              design, we've created an interface that is more intuitive, inclusive, and enjoyable to use.
            </p>

            <div className="bg-neutral-50 p-6 rounded-xl my-8">
              <h3 className="text-xl font-bold mb-4">Lessons Learned</h3>
              <p className="mb-4">Throughout this redesign process, several valuable insights emerged:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-rose-100 p-1 mt-0.5">
                    <Paintbrush className="h-4 w-4 text-rose-600" />
                  </div>
                  <span>
                    <strong>Balance is key:</strong> Maintaining a balance between innovation and familiarity ensures
                    users can still navigate the interface intuitively.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-rose-100 p-1 mt-0.5">
                    <Paintbrush className="h-4 w-4 text-rose-600" />
                  </div>
                  <span>
                    <strong>Accessibility benefits everyone:</strong> Designing for accessibility improves the
                    experience for all users, not just those with disabilities.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-rose-100 p-1 mt-0.5">
                    <Paintbrush className="h-4 w-4 text-rose-600" />
                  </div>
                  <span>
                    <strong>Mobile-first thinking:</strong> Prioritizing mobile design forces clarity and simplicity
                    that benefits all device sizes.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex justify-center gap-4">
            <Button asChild>
              <Link href="/compare">
                Try the Comparison Tool
                <ArrowRightLeft className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </main>

      <footer className="border-t bg-white mt-16">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex items-center gap-2 font-semibold">
            <span className="text-rose-500">UX</span>
            <span className="text-neutral-900">Redesign</span>
          </div>
          <p className="text-sm text-neutral-500">© 2025 UX Redesign. All rights reserved.</p>
          <nav className="flex gap-4">
            <Link href="#" className="text-sm text-neutral-500 hover:text-neutral-900">
              Terms
            </Link>
            <Link href="#" className="text-sm text-neutral-500 hover:text-neutral-900">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-neutral-500 hover:text-neutral-900">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
