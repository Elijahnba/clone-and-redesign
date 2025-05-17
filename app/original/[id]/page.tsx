"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ChevronLeft, ChevronRight, Heart, Share, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function OriginalListingPage({ params }: { params: { id: string } }) {
  const listing = listings.find((l) => l.id.toString() === params.id) || listings[0]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedDates, setSelectedDates] = useState<Date[] | undefined>(undefined)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % listing.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + listing.images.length) % listing.images.length)
  }

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container py-4">
          <div className="flex items-center">
            <Link href="/original" className="mr-4">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <div className="flex-1">
              <div className="hidden md:flex items-center justify-center border rounded-full shadow-sm px-6 py-2 mx-auto max-w-md">
                <button className="text-sm px-3 border-r">Anywhere</button>
                <button className="text-sm px-3 border-r">Any week</button>
                <button className="text-gray-500 text-sm px-3">Add guests</button>
                <div className="bg-rose-500 rounded-full p-2 ml-2">
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
                    className="h-4 w-4 text-white"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="hidden md:flex">
                <Share className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="ghost" size="sm" className="hidden md:flex">
                <Heart className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-6">
        {/* Listing Title */}
        <h1 className="text-2xl font-semibold mb-1">{listing.title}</h1>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-current" />
              <span className="ml-1 text-sm font-medium">{listing.rating}</span>
            </div>
            <span className="text-sm text-neutral-500">•</span>
            <span className="text-sm font-medium underline">{listing.reviews} reviews</span>
            <span className="text-sm text-neutral-500">•</span>
            <span className="text-sm font-medium underline">{listing.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="md:hidden">
              <Share className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="relative mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:aspect-[2/1] rounded-xl overflow-hidden">
            <div className="relative aspect-square md:aspect-auto md:row-span-2 md:col-span-1">
              <img
                src={listing.images[0] || "/placeholder.svg"}
                alt={`${listing.title} - Main Image`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:block relative aspect-square md:aspect-auto">
              <img
                src={listing.images[1] || "/placeholder.svg"}
                alt={`${listing.title} - Image 2`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:block relative aspect-square md:aspect-auto">
              <img
                src={listing.images[2] || "/placeholder.svg"}
                alt={`${listing.title} - Image 3`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Mobile Image Carousel */}
          <div className="md:hidden relative">
            <div className="absolute inset-y-0 left-2 flex items-center">
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-white/80" onClick={prevImage}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </div>
            <div className="absolute inset-y-0 right-2 flex items-center">
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-white/80" onClick={nextImage}>
                <ChevronRight className="h-4 w-4" />
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
            className="absolute bottom-4 right-4 bg-white text-black border-black text-xs px-3 py-1 h-auto"
          >
            Show all photos
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {/* Host Info */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-xl font-semibold">
                  {listing.roomType} hosted by {listing.host.name}
                </h2>
                <p className="text-neutral-500">
                  {listing.guests} guests • {listing.bedrooms} bedrooms • {listing.beds} beds • {listing.bathrooms}{" "}
                  bathrooms
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full overflow-hidden">
                  <img
                    src={listing.host.image || "/placeholder.svg"}
                    alt={listing.host.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {listing.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1">{highlight.icon}</div>
                  <div>
                    <h3 className="font-semibold">{highlight.title}</h3>
                    <p className="text-sm text-neutral-500">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Separator className="my-6" />

            {/* Description */}
            <div className="mb-6">
              <p className="whitespace-pre-line">{listing.description}</p>
              <Button variant="link" className="px-0 mt-2">
                Show more
              </Button>
            </div>

            <Separator className="my-6" />

            {/* Amenities */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">What this place offers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {listing.amenities.slice(0, 10).map((amenity, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="text-neutral-500">{amenity.icon}</div>
                    <span>{amenity.name}</span>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="mt-4">
                Show all {listing.amenities.length} amenities
              </Button>
            </div>

            <Separator className="my-6" />

            {/* Calendar */}
            <div className="mb-6">
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

              <div className="border rounded-t-lg overflow-hidden mb-4">
                <div className="grid grid-cols-2">
                  <div className="p-3 border-r border-b">
                    <div className="text-xs font-semibold">CHECK-IN</div>
                    <div className="text-sm">Add date</div>
                  </div>
                  <div className="p-3 border-b">
                    <div className="text-xs font-semibold">CHECKOUT</div>
                    <div className="text-sm">Add date</div>
                  </div>
                </div>
                <div className="p-3 border-t">
                  <div className="text-xs font-semibold">GUESTS</div>
                  <div className="text-sm">1 guest</div>
                </div>
              </div>

              <Button className="w-full mb-4">Reserve</Button>
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
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Reviews */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Star className="h-5 w-5 fill-current" />
            <span className="ml-2 text-xl font-semibold">{listing.rating}</span>
            <span className="mx-2">•</span>
            <span className="text-xl font-semibold">{listing.reviews} reviews</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {listing.reviewExcerpts.map((review, index) => (
              <div key={index}>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={review.userImage || "/placeholder.svg"}
                      alt={review.userName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{review.userName}</h3>
                    <p className="text-sm text-neutral-500">{review.date}</p>
                  </div>
                </div>
                <p className="text-sm">{review.text}</p>
              </div>
            ))}
          </div>

          <Button variant="outline" className="mt-6">
            Show all {listing.reviews} reviews
          </Button>
        </div>

        <Separator className="my-8" />

        {/* Map */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Where you'll be</h2>
          <div className="aspect-[16/9] md:aspect-[2/1] rounded-xl overflow-hidden bg-neutral-100 mb-4">
            <img src="/location-map.png" alt="Map location" className="w-full h-full object-cover" />
          </div>
          <h3 className="font-semibold mb-2">{listing.location}</h3>
          <p className="text-neutral-600 mb-4">{listing.locationDescription}</p>
          <Button variant="link" className="px-0">
            Show more
          </Button>
        </div>

        <Separator className="my-8" />

        {/* Host */}
        <div className="mb-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-14 h-14 rounded-full overflow-hidden">
              <img
                src={listing.host.image || "/placeholder.svg"}
                alt={listing.host.name}
                className="w-full h-full object-cover"
              />
            </div>
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
              <span>Identity verified</span>
            </div>
          </div>

          <p className="mb-4">{listing.host.description}</p>

          <h3 className="font-semibold mb-2">During your stay</h3>
          <p className="mb-4">{listing.host.duringStay}</p>

          <Button variant="outline">Contact Host</Button>
        </div>
      </main>

      {/* Mobile Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 md:hidden">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-lg font-semibold">${listing.price}</span>
            <span className="text-neutral-500"> night</span>
          </div>
          <Button>Reserve</Button>
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
            <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
            <line x1="6" x2="6" y1="1" y2="4" />
            <line x1="10" x2="10" y1="1" y2="4" />
            <line x1="14" x2="14" y1="1" y2="4" />
          </svg>
        ),
        name: "Kitchen",
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
        name: "Wifi",
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
            <path d="M2 20h.01" />
            <path d="M7 20v-4" />
            <path d="M12 20v-8" />
            <path d="M17 20V8" />
            <path d="M22 4v16" />
          </svg>
        ),
        name: "Dedicated workspace",
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
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        ),
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
            <path d="M2 3h20" />
            <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
            <path d="m7 21 5-5 5 5" />
          </svg>
        ),
        name: "TV",
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
            <path d="M18 8a6 6 0 0 1-6 6v0a6 6 0 0 1-6-6v0a6 6 0 0 1 12 0v0Z" />
            <path d="M18 8h4" />
            <path d="M2 8h4" />
            <path d="M12 2v4" />
            <path d="M12 14v8" />
          </svg>
        ),
        name: "Air conditioning",
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
            <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
            <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
            <path d="M12 12h.01" />
          </svg>
        ),
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
