import Link from "next/link"
import { ArrowRight, ArrowRightLeft, Clipboard, Lightbulb, Paintbrush } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <span className="text-rose-500">UX</span>
            <span className="text-neutral-900">Redesign</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-neutral-900 hover:text-neutral-600">
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
            <Link href="/case-study" className="text-sm font-medium text-neutral-500 hover:text-neutral-900">
              Case Study
            </Link>
          </nav>
          <Button asChild>
            <Link href="/compare">
              Compare Designs
              <ArrowRightLeft className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </header>
      <main>
        <section className="py-20 md:py-32 bg-neutral-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-600">
                  UX/UI Case Study
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Airbnb Redesign: Enhancing User Experience
                </h1>
                <p className="max-w-[600px] text-neutral-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A comprehensive case study on redesigning Airbnb's interface to improve usability, accessibility, and
                  visual appeal.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/case-study">
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/compare">
                      Compare Designs
                      <ArrowRightLeft className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-[500px]">
                  <div className="absolute -left-4 -top-4 h-72 w-72 rounded-lg bg-rose-100"></div>
                  <img
                    src="/placeholder-eqd6j.png"
                    alt="Airbnb redesign mockup"
                    className="relative z-10 rounded-lg border object-cover shadow-lg"
                    width={500}
                    height={375}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Process</h2>
                <p className="max-w-[700px] text-neutral-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our comprehensive approach to redesigning the Airbnb experience
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-rose-100 p-3">
                  <Clipboard className="h-6 w-6 text-rose-600" />
                </div>
                <h3 className="text-xl font-bold">Clone & Audit</h3>
                <p className="text-center text-neutral-600">
                  Replicating core Airbnb flows and conducting a thorough UX audit using Nielsen's Heuristics and WCAG
                  guidelines.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-rose-100 p-3">
                  <Lightbulb className="h-6 w-6 text-rose-600" />
                </div>
                <h3 className="text-xl font-bold">Redesign</h3>
                <p className="text-center text-neutral-600">
                  Creating wireframes and high-fidelity mockups that improve user flow, mobile experience, and
                  accessibility.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-rose-100 p-3">
                  <Paintbrush className="h-6 w-6 text-rose-600" />
                </div>
                <h3 className="text-xl font-bold">Rebuild & Compare</h3>
                <p className="text-center text-neutral-600">
                  Implementing the redesign with animations and creating an interactive comparison tool to showcase
                  improvements.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-neutral-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <img
                  src="/placeholder-vx5wn.png"
                  alt="Side-by-side comparison"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  width={550}
                  height={310}
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">See the Difference</h2>
                <p className="max-w-[600px] text-neutral-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our redesign focuses on improving mobile performance, accessibility, and simplifying navigation while
                  maintaining Airbnb's core functionality.
                </p>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <svg
                        className="h-4 w-4 text-green-600"
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
                    <span>Improved mobile responsiveness</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <svg
                        className="h-4 w-4 text-green-600"
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
                    <span>Enhanced accessibility (WCAG compliant)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <svg
                        className="h-4 w-4 text-green-600"
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
                    <span>Simplified navigation and user flow</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <svg
                        className="h-4 w-4 text-green-600"
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
                    <span>Modern, Apple-inspired minimalist UI</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Button asChild>
                    <Link href="/compare">
                      Interactive Comparison
                      <ArrowRightLeft className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-white">
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
