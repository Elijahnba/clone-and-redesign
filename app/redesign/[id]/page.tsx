"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Heart,
  MapPin,
  Share,
  Star,
  X,
  Wifi,
  Utensils,
  Car,
  Tv,
  Waves,
  Thermometer,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function RedesignedListingPage({ params }: { params: { id: string } }) {
  const listing = listings.find((l) => l.id.toString() === params.id) || listings[0]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedDates, setSelectedDates] = useState<Date[] | undefined>(undefined)
  const [showAllPhotos, setShowAllPhotos] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("photos")
  const sectionRefs = {
    photos: useRef<HTMLDivElement>(null),
    overview: useRef<HTMLDivElement>(null),
    amenities: useRef<HTMLDivElement>(null),
    reviews: useRef<HTMLDivElement>(null),
    location: useRef<HTMLDivElement>(null),
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % listing.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + listing.images.length) % listing.images.length)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)

      // Determine which section is currently in view
      const scrollPosition = window.scrollY + 100 // Offset for header

      for (const [section, ref] of Object.entries(sectionRefs)) {
        if (ref.current) {
          const element = ref.current
          const offsetTop = element.offsetTop
          const height = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (section: string) => {
    const ref = sectionRefs[section as keyof typeof sectionRefs]
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80, // Adjust for header height
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${
          isScrolled ? "border-b shadow-sm" : ""
        }`}
      >
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/redesign" className="mr-4">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <ArrowLeft className="h-5 w-5" />
                  <span className="sr-only">Back to listings</span>
                </Button>
              </Link>
              {isScrolled && <h1 className="text-lg font-medium truncate max-w-[200px]">{listing.title}</h1>}
            </div>

            {isScrolled && (
              <nav className="hidden md:block">
                <ul className="flex space-x-6">
                  {Object.keys(sectionRefs).map((section) => (
                    <li key={section}>
                      <button
                        onClick={() => scrollToSection(section)}
                        className={`text-sm py-2 border-b-2 transition-colors ${
                          activeSection === section
                            ? "border-black font-medium"
                            : "border-transparent text-neutral-500 hover:text-black"
                        }`}
                      >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="rounded-full">
                <Share className="h-4 w-4 mr-2" />
                <span className="hidden md:inline">Share</span>
              </Button>
              <Button variant="ghost" size="sm" className="rounded-full">
                <Heart className="h-4 w-4 mr-2" />
                <span className="hidden md:inline">Save</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-6">
        {/* Photo Gallery */}
        <div ref={sectionRefs.photos}>
          {/* Listing Title */}
          <h1 className="text-2xl font-semibold mb-1">{listing.title}</h1>
          <div className="flex flex-wrap items-center justify-between gap-y-2 mb-4">
            <div className="flex items-center flex-wrap gap-x-2 gap-y-1">
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-current" />
                <span className="ml-1 text-sm font-medium">{listing.rating}</span>
              </div>
              <span className="text-sm text-neutral-500">•</span>
              <span className="text-sm font-medium underline">{listing.reviews} reviews</span>
              <span className="text-sm text-neutral-500">•</span>
              <div className="flex items-center">
                <MapPin className="h-3 w-3 mr-1" />
                <span className="text-sm font-medium underline">{listing.location}</span>
              </div>
              {listing.host.superhost && (
                <>
                  <span className="text-sm text-neutral-500">•</span>
                  <Badge variant="outline" className="rounded-full text-xs font-normal h-5 px-2">
                    Superhost
                  </Badge>
                </>
              )}
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="relative mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 rounded-2xl overflow-hidden">
              <div className="relative aspect-square md:aspect-auto md:row-span-2 md:col-span-2">
                <img
                  src={listing.images[0] || "/placeholder.svg"}
                  alt={`${listing.title} - Main Image`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="hidden md:block relative aspect-square">
                <img
                  src={listing.images[1] || "/placeholder.svg"}
                  alt={`${listing.title} - Image 2`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="hidden md:block relative aspect-square">
                <img
                  src={listing.images[2] || "/placeholder.svg"}
                  alt={`${listing.title} - Image 3`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="hidden md:block relative aspect-square">
                <img
                  src={listing.images[3] || "/placeholder.svg"}
                  alt={`${listing.title} - Image 4`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="hidden md:block relative aspect-square">
                <img
                  src={listing.images[4] || "/placeholder.svg"}
                  alt={`${listing.title} - Image 5`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Mobile Image Carousel */}
            <div className="md:hidden relative">
              <AnimatePresence initial={false}>
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0"
                >
                  <img
                    src={listing.images[currentImageIndex] || "/placeholder.svg"}
                    alt={`${listing.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-y-0 left-2 flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full bg-white/90 backdrop-blur-sm"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Previous image</span>
                </Button>
              </div>
              <div className="absolute inset-y-0 right-2 flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full bg-white/90 backdrop-blur-sm"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Next image</span>
                </Button>
              </div>
              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                {listing.images.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1.5 w-1.5 rounded-full ${index === currentImageIndex ? "bg-white" : "bg-white/50"}`}
                  />
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              className="absolute bottom-4 right-4 bg-white text-black border-black text-xs px-3 py-1 h-auto rounded-lg"
              onClick={() => setShowAllPhotos(true)}
            >
              Show all photos
            </Button>
          </div>

          {/* Photo Gallery Modal */}
          <AnimatePresence>
            {showAllPhotos && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-white z-50 overflow-hidden"
              >
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                  <Button variant="ghost" size="icon" onClick={() => setShowAllPhotos(false)} className="rounded-full">
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close gallery</span>
                  </Button>
                  <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="rounded-full">
                      <Share className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                    <Button variant="ghost" size="sm" className="rounded-full">
                      <Heart className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                  </div>
                </div>
                <ScrollArea className="h-screen pt-16 pb-8 px-4">
                  <div className="max-w-4xl mx-auto space-y-4">
                    {listing.images.map((image, index) => (
                      <div key={index} className="relative aspect-[4/3] rounded-xl overflow-hidden">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`${listing.title} - Image ${index + 1}`}
                          className="w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {/* Overview Section */}
            <div ref={sectionRefs.overview} className="mb-8">
              <div className="flex justify-between items-start pb-6 border-b">
                <div>
                  <h2 className="text-xl font-semibold">
                    {listing.roomType} hosted by {listing.host.name}
                  </h2>
                  <p className="text-neutral-500">
                    {listing.guests} guests • {listing.bedrooms} bedrooms • {listing.beds} beds • {listing.bathrooms}{" "}
                    bathrooms
                  </p>
                </div>
                <Avatar className="h-14 w-14">
                  <AvatarImage src={listing.host.image || "/placeholder.svg"} alt={listing.host.name} />
                  <AvatarFallback>{listing.host.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-b">
                {listing.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1 text-neutral-600">{highlight.icon}</div>
                    <div>
                      <h3 className="font-medium">{highlight.title}</h3>
                      <p className="text-sm text-neutral-500">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="py-6 border-b">
                <p className="whitespace-pre-line text-neutral-700">{listing.description}</p>
                <Button variant="link" className="px-0 mt-2 font-medium">
                  Show more
                </Button>
              </div>

              {/* Host Section */}
              <div className="py-6 border-b">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="h-14 w-14">
                    <AvatarImage src={listing.host.image || "/placeholder.svg"} alt={listing.host.name} />
                    <AvatarFallback>{listing.host.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-xl font-semibold">Hosted by {listing.host.name}</h2>
                    <p className="text-neutral-500">Joined in {listing.host.joinDate}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Star className="h-4 w-4 fill-current" />
                    <span>{listing.reviews} Reviews</span>
                  </div>
                  {listing.host.superhost && (
                    <div className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      <span>Superhost</span>
                    </div>
                  )}
                </div>

                <p className="mb-4 text-neutral-700">{listing.host.description}</p>

                <h3 className="font-medium mb-2">During your stay</h3>
                <p className="mb-4 text-neutral-700">{listing.host.duringStay}</p>

                <Button variant="outline" className="rounded-lg">
                  Contact Host
                </Button>
              </div>
            </div>

            {/* Amenities Section */}
            <div ref={sectionRefs.amenities} className="mb-8">
              <h2 className="text-xl font-semibold mb-6">What this place offers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {listing.amenities.slice(0, 8).map((amenity, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="text-neutral-700">{amenity.icon}</div>
                    <span className="text-neutral-700">{amenity.name}</span>
                  </div>
                ))}
              </div>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="rounded-lg">
                    Show all {listing.amenities.length} amenities
                  </Button>
                </SheetTrigger>
                <SheetContent side="bottom" className="h-[80vh] rounded-t-xl">
                  <SheetHeader>
                    <SheetTitle>All amenities</SheetTitle>
                    <SheetDescription>Everything this place has to offer</SheetDescription>
                  </SheetHeader>
                  <ScrollArea className="h-full py-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {listing.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center gap-4">
                          <div className="text-neutral-700">{amenity.icon}</div>
                          <span className="text-neutral-700">{amenity.name}</span>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </SheetContent>
              </Sheet>
            </div>

            {/* Calendar Section */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Select check-in date</h2>
              <p className="text-neutral-500 mb-4">Add your travel dates for exact pricing</p>
              <div className="border rounded-xl p-4">
                <Tabs defaultValue="calendar">
                  <TabsList className="grid grid-cols-2 mb-4">
                    <TabsTrigger value="calendar">Calendar</TabsTrigger>
                    <TabsTrigger value="flexible">I'm flexible</TabsTrigger>
                  </TabsList>
                  <TabsContent value="calendar">
                    <Calendar
                      mode="range"
                      selected={selectedDates}
                      onSelect={setSelectedDates as any}
                      className="rounded-md border"
                    />
                  </TabsContent>
                  <TabsContent value="flexible">
                    <div className="flex flex-col items-center justify-center p-8">
                      <p className="text-neutral-500">Choose flexible dates to see the best prices</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            {/* Reviews Section */}
            <div ref={sectionRefs.reviews} className="mb-8">
              <div className="flex items-center mb-6">
                <Star className="h-5 w-5 fill-current" />
                <span className="ml-2 text-xl font-semibold">{listing.rating}</span>
                <span className="mx-2">•</span>
                <span className="text-xl font-semibold">{listing.reviews} reviews</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {listing.reviewExcerpts.map((review, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={review.userImage || "/placeholder.svg"} alt={review.userName} />
                        <AvatarFallback>{review.userName.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">{review.userName}</h3>
                        <p className="text-sm text-neutral-500">{review.date}</p>
                      </div>
                    </div>
                    <p className="text-sm text-neutral-700">{review.text}</p>
                  </motion.div>
                ))}
              </div>

              <Button variant="outline" className="rounded-lg">
                Show all {listing.reviews} reviews
              </Button>
            </div>

            {/* Map Section */}
            <div ref={sectionRefs.location} className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Where you'll be</h2>
              <div className="aspect-[16/9] md:aspect-[2/1] rounded-xl overflow-hidden bg-neutral-100 mb-4">
                <img src="/location-map.png" alt="Map location" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-medium mb-2">{listing.location}</h3>
              <p className="text-neutral-700 mb-4">{listing.locationDescription}</p>
              <Button variant="link" className="px-0 font-medium">
                Show more
              </Button>
            </div>
          </div>

          {/* Booking Widget */}
          <div className="md:col-span-1">
            <div className="sticky top-24 border rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-xl font-semibold">${listing.price}</span>
                  <span className="text-neutral-500"> night</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="ml-1 text-sm">{listing.rating}</span>
                  <span className="mx-1 text-neutral-500">•</span>
                  <span className="text-sm text-neutral-500 underline">{listing.reviews} reviews</span>
                </div>
              </div>

              <div className="border rounded-xl overflow-hidden mb-4">
                <div className="grid grid-cols-2">
                  <div className="p-3 border-r">
                    <div className="text-xs font-medium text-neutral-500">CHECK-IN</div>
                    <div className="text-sm font-medium">Add date</div>
                  </div>
                  <div className="p-3">
                    <div className="text-xs font-medium text-neutral-500">CHECKOUT</div>
                    <div className="text-sm font-medium">Add date</div>
                  </div>
                </div>
                <div className="p-3 border-t">
                  <div className="text-xs font-medium text-neutral-500">GUESTS</div>
                  <div className="text-sm font-medium">1 guest</div>
                </div>
              </div>

              <Button className="w-full mb-4 rounded-lg">Reserve</Button>
              <p className="text-center text-sm mb-4">You won't be charged yet</p>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="underline">${listing.price} x 5 nights</span>
                  <span>${listing.price * 5}</span>
                </div>
                <div className="flex justify-between">
                  <span className="underline">Cleaning fee</span>
                  <span>${listing.cleaningFee}</span>
                </div>
                <div className="flex justify-between">
                  <span className="underline">Service fee</span>
                  <span>${listing.serviceFee}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total before taxes</span>
                  <span>${listing.price * 5 + listing.cleaningFee + listing.serviceFee}</span>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-neutral-600">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center">
                        <Badge variant="outline" className="rounded-full mr-2">
                          New
                        </Badge>
                        <span>Price displayed in USD</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">You can change your currency preferences in your account settings</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 md:hidden">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-lg font-semibold">${listing.price}</span>
            <span className="text-neutral-500"> night</span>
          </div>
          <Button className="rounded-lg">Reserve</Button>
        </div>
      </div>
    </div>
  )
}

const listings = [
  {
    id: 1,
    title: "Modern Beach House with Amazing Ocean Views",
    location: "Malibu, California",
    distance: "2,691 miles away",
    dates: "Nov 5-10",
    price: 350,
    rating: 4.98,
    reviews: 124,
    guests: 6,
    bedrooms: 3,
    beds: 3,
    bathrooms: 2,
    roomType: "Entire home",
    cleaningFee: 150,
    serviceFee: 200,
    description:
      "Perched on a bluff overlooking the Pacific Ocean, this modern beach house offers breathtaking views and direct access to a secluded beach. The open floor plan, floor-to-ceiling windows, and expansive deck create a seamless indoor-outdoor living experience.\n\nThe house features three bedrooms, including a primary suite with ocean views, a fully equipped gourmet kitchen, and a spacious living area perfect for entertaining or relaxing while watching the sunset.",
    locationDescription:
      "Located in a quiet neighborhood in Malibu, this property offers privacy while being just a short drive from restaurants, shops, and attractions. The beach below is typically uncrowded and perfect for swimming, surfing, or long walks along the shore.",
    images: [
      "/modern-beach-house.png",
      "/modern-beach-house-interior.png",
      "/modern-beach-bedroom.png",
      "/placeholder.svg?height=300&width=300&query=modern beach house kitchen",
      "/placeholder.svg?height=300&width=300&query=modern beach house deck",
    ],
    host: {
      name: "Sarah",
      image: "/placeholder.svg?height=100&width=100&query=woman host profile",
      joinDate: "March 2015",
      superhost: true,
      description:
        "Hi, I'm Sarah! I've been hosting on Airbnb for over 8 years and love sharing my beautiful beach house with travelers from around the world. I'm passionate about architecture, design, and creating memorable experiences for my guests.",
      duringStay:
        "I'm available by phone or message throughout your stay. I have a local property manager who can assist with any immediate needs or emergencies.",
    },
    highlights: [
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        ),
        title: "Great location",
        description: "95% of recent guests gave the location a 5-star rating.",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        ),
        title: "Great check-in experience",
        description: "90% of recent guests gave the check-in process a 5-star rating.",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
          </svg>
        ),
        title: "Superhost",
        description: "Superhosts are experienced, highly rated hosts.",
      },
    ],
    amenities: [
      {
        icon: <Utensils className="h-5 w-5" />,
        name: "Kitchen",
      },
      {
        icon: <Wifi className="h-5 w-5" />,
        name: "Fast wifi - 100 Mbps",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <rect width="7" height="9" x="3" y="3" rx="1" />
            <rect width="7" height="5" x="14" y="3" rx="1" />
            <rect width="7" height="9" x="14" y="12" rx="1" />
            <rect width="7" height="5" x="3" y="16" rx="1" />
          </svg>
        ),
        name: "Dedicated workspace",
      },
      {
        icon: <Car className="h-5 w-5" />,
        name: "Free parking on premises",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        ),
        name: "Private hot tub",
      },
      {
        icon: <Tv className="h-5 w-5" />,
        name: '65" HDTV with Netflix',
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.29 7 12 12 20.71 7" />
            <line x1="12" x2="12" y1="22" y2="12" />
          </svg>
        ),
        name: "Washer",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.29 7 12 12 20.71 7" />
            <line x1="12" x2="12" y1="22" y2="12" />
          </svg>
        ),
        name: "Dryer",
      },
      {
        icon: <Thermometer className="h-5 w-5" />,
        name: "Air conditioning",
      },
      {
        icon: <Waves className="h-5 w-5" />,
        name: "Beach access",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        ),
        name: "Outdoor shower",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M3 7V5c0-1.1.9-2 2-2h2" />
            <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
            <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
            <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <path d="M9 9h.01" />
            <path d="M15 9h.01" />
          </svg>
        ),
        name: "BBQ grill",
      },
    ],
    reviewExcerpts: [
      {
        userName: "Michael",
        userImage: "/placeholder.svg?height=50&width=50&query=man profile",
        date: "October 2023",
        text: "This place is absolutely stunning! The views are even better than the pictures show. We spent every evening watching the sunset from the deck. The house is beautifully designed and has everything you need for a comfortable stay.",
      },
      {
        userName: "Jessica",
        userImage: "/placeholder.svg?height=50&width=50&query=woman profile",
        date: "September 2023",
        text: "Sarah is an excellent host - very responsive and provided great local recommendations. The beach access is a huge plus, and the kitchen is well-equipped for cooking. Would definitely stay here again!",
      },
      {
        userName: "David",
        userImage: "/placeholder.svg?height=50&width=50&query=man profile 2",
        date: "August 2023",
        text: "Perfect getaway spot. The house is modern, clean, and has breathtaking views. We loved the privacy and tranquility. The only minor issue was that the wifi was a bit spotty, but we didn't mind disconnecting for a few days.",
      },
      {
        userName: "Emma",
        userImage: "/placeholder.svg?height=50&width=50&query=woman profile 2",
        date: "July 2023",
        text: "We had a wonderful stay at Sarah's beach house. The location is perfect - secluded enough for privacy but close enough to restaurants and shops. The house is exactly as pictured and the beach access is amazing.",
      },
    ],
  },
]
