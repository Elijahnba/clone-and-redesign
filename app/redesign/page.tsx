"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, Filter, Search, User, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function RedesignedAirbnb() {
  const [activeTab, setActiveTab] = useState("amazing-views")
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Redesigned Airbnb Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/redesign" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="h-8 w-8 text-rose-500 fill-current"
              >
                <path d="M224 373.1c-25.2-31.7-40.1-59.4-45-83.2-22.6-88 112.6-88 90.1 0-5.5 24.3-20.3 52-45.1 83.2zm138.2 73.2c-42.1 18.3-83.7-10.9-119.3-50.5 103.9-130.1 46.1-200-18.9-200-54.9 0-85.2 46.5-73.3 100.5 6.9 29.2 25.2 62.4 54.4 99.5-32.5 36.1-60.6 52.7-85.2 54.9-50 7.4-89.1-41.1-71.3-91.1 15.1-39.2 111.7-231.2 115.9-241.6 15.8-30.1 25.6-57.4 59.4-57.4 32.3 0 43.4 25.9 60.4 59.9 36 70.6 89.4 177.5 114.8 239.1 13.2 33.1-1.4 71.3-37 86.6zm47-136.1C280.3 35.9 273.1 32 224 32c-45.5 0-64.9 31.7-84.7 72.8C33.2 317.1 22.9 347.2 22 349.8-3.2 419.1 48.7 480 111.6 480c21.7 0 60.6-6.1 112.4-62.4 58.7 63.8 101.3 62.4 112.4 62.4 62.9 .1 114.9-60.9 89.6-130.2-6.5-16.2-45.9-115.8-76.8-178.7z" />
              </svg>
              <span className="ml-2 text-rose-500 font-bold">airbnb</span>
            </Link>

            {/* Search Bar - Simplified */}
            <motion.div initial={false} animate={searchOpen ? "open" : "closed"} className="relative">
              {!searchOpen ? (
                <Button
                  onClick={() => setSearchOpen(true)}
                  variant="outline"
                  className="rounded-full flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow"
                >
                  <Search className="h-4 w-4" />
                  <span>Where to?</span>
                </Button>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-0 left-0 right-0 bg-white p-4 rounded-lg shadow-lg border z-50 w-[300px] md:w-[500px]"
                  style={{ transformOrigin: "top center" }}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">Search</h3>
                    <Button variant="ghost" size="icon" onClick={() => setSearchOpen(false)} className="h-8 w-8">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-1 block">Where</label>
                      <Input placeholder="Search destinations" className="rounded-lg" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-1 block">Check in</label>
                        <Button variant="outline" className="w-full justify-start">
                          Add dates
                        </Button>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">Check out</label>
                        <Button variant="outline" className="w-full justify-start">
                          Add dates
                        </Button>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Who</label>
                      <Button variant="outline" className="w-full justify-start">
                        Add guests
                      </Button>
                    </div>
                    <Button className="w-full">Search</Button>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* User Menu - Simplified */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="hidden md:flex rounded-full">
                Host your home
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Trips</DropdownMenuItem>
                  <DropdownMenuItem>Wishlists</DropdownMenuItem>
                  <Separator className="my-1" />
                  <DropdownMenuItem>Host your home</DropdownMenuItem>
                  <DropdownMenuItem>Help</DropdownMenuItem>
                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      {/* Category Tabs - Redesigned */}
      <div className="container pt-5 pb-4">
        <Tabs defaultValue="amazing-views" className="w-full" onValueChange={setActiveTab}>
          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide pb-4 -mb-4">
              <TabsList className="flex w-full h-auto bg-transparent justify-start gap-6">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.value}
                    value={category.value}
                    className="flex flex-col items-center gap-2 px-2 py-2 data-[state=active]:border-b-2 data-[state=active]:border-rose-500 rounded-none transition-all"
                  >
                    <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center">
                      <img src={category.icon || "/placeholder.svg"} alt={category.label} className="w-6 h-6" />
                    </div>
                    <span className="text-xs whitespace-nowrap">{category.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Gradient fade for horizontal scroll */}
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          </div>

          <div className="flex items-center justify-between py-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="rounded-full flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-[80vh] rounded-t-xl">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                  <SheetDescription>Refine your search with these filters</SheetDescription>
                </SheetHeader>
                <div className="grid gap-6 py-6">
                  <div>
                    <h3 className="font-medium mb-3">Price range</h3>
                    <div className="flex items-center gap-4">
                      <Input placeholder="Min" className="rounded-lg" />
                      <span>-</span>
                      <Input placeholder="Max" className="rounded-lg" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-3">Rooms and beds</h3>
                    <div className="flex flex-wrap gap-2">
                      {[1, 2, 3, 4, 5, "6+"].map((num) => (
                        <Badge
                          key={num}
                          variant="outline"
                          className="rounded-full px-4 py-2 cursor-pointer hover:bg-neutral-100"
                        >
                          {num} {typeof num === "number" && num === 1 ? "bedroom" : "bedrooms"}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-3">Property type</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {["House", "Apartment", "Guesthouse", "Hotel"].map((type) => (
                        <div
                          key={type}
                          className="border rounded-xl p-4 cursor-pointer hover:border-neutral-400 transition-colors"
                        >
                          <div className="h-6 w-6 mb-2 bg-neutral-100 rounded-md"></div>
                          <span>{type}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between mt-auto pt-4 border-t">
                    <Button variant="outline">Clear all</Button>
                    <Button>Show results</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            <Button variant="ghost" size="sm" className="text-sm font-normal">
              Display total before taxes
            </Button>
          </div>

          {categories.map((category) => (
            <TabsContent key={category.value} value={category.value} className="mt-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={category.value}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                  {listings.map((listing) => (
                    <motion.div
                      key={listing.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: listing.id * 0.05 }}
                    >
                      <Card className="border-none shadow-none overflow-hidden group">
                        <CardContent className="p-0">
                          <div className="relative aspect-square overflow-hidden rounded-2xl">
                            <img
                              src={listing.image || "/placeholder.svg"}
                              alt={listing.title}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <Button
                              variant="ghost"
                              size="icon"
                              className="absolute right-3 top-3 h-8 w-8 rounded-full bg-white/90 text-neutral-950 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
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
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                              </svg>
                              <span className="sr-only">Add to favorites</span>
                            </Button>
                            {listing.superhost && (
                              <Badge className="absolute left-3 top-3 bg-white text-black">Superhost</Badge>
                            )}
                          </div>
                          <div className="pt-4">
                            <div className="flex justify-between">
                              <h3 className="font-medium text-base">{listing.location}</h3>
                              <div className="flex items-center">
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
                                  className="h-4 w-4 fill-current"
                                >
                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                                <span className="ml-1 text-sm">{listing.rating}</span>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-1">{listing.title}</p>
                            <p className="text-sm text-muted-foreground">{listing.distance}</p>
                            <p className="text-sm text-muted-foreground">{listing.dates}</p>
                            <p className="mt-2 font-medium">
                              <span className="font-semibold">${listing.price}</span> night
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Mobile Footer - Redesigned */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t py-3">
        <div className="container flex justify-around">
          <button className="flex flex-col items-center text-xs">
            <div className="rounded-full bg-neutral-100 p-2 mb-1">
              <Search className="h-5 w-5" />
            </div>
            Explore
          </button>
          <button className="flex flex-col items-center text-xs">
            <div className="rounded-full bg-neutral-100 p-2 mb-1">
              <Calendar className="h-5 w-5" />
            </div>
            Wishlists
          </button>
          <button className="flex flex-col items-center text-xs">
            <div className="rounded-full bg-neutral-100 p-2 mb-1">
              <User className="h-5 w-5" />
            </div>
            Profile
          </button>
        </div>
      </div>
    </div>
  )
}

const categories = [
  { value: "amazing-views", label: "Amazing views", icon: "/majestic-mountain-range.png" },
  { value: "beach", label: "Beach", icon: "/tropical-beach-paradise.png" },
  { value: "cabins", label: "Cabins", icon: "/cozy-winter-cabin.png" },
  { value: "tiny-homes", label: "Tiny homes", icon: "/tiny-house.png" },
  { value: "design", label: "Design", icon: "/modern-design.png" },
  { value: "countryside", label: "Countryside", icon: "/peaceful-countryside.png" },
  { value: "mansions", label: "Mansions", icon: "/grand-mansion.png" },
  { value: "tropical", label: "Tropical", icon: "/lush-tropical-scene.png" },
  { value: "skiing", label: "Skiing", icon: "/placeholder-bxau4.png" },
  { value: "castles", label: "Castles", icon: "/medieval-castle-landscape.png" },
]

const listings = [
  {
    id: 1,
    title: "Modern Beach House with Amazing Ocean Views",
    location: "Malibu, California",
    distance: "2,691 miles away",
    dates: "Nov 5-10",
    price: 350,
    rating: 4.98,
    superhost: true,
    image: "/modern-beach-house.png",
  },
  {
    id: 2,
    title: "Secluded Mountain Cabin with Hot Tub",
    location: "Aspen, Colorado",
    distance: "1,400 miles away",
    dates: "Oct 15-20",
    price: 275,
    rating: 4.92,
    superhost: false,
    image: "/placeholder-b0f43.png",
  },
  {
    id: 3,
    title: "Luxury Penthouse in Downtown",
    location: "New York, New York",
    distance: "2,100 miles away",
    dates: "Dec 1-6",
    price: 420,
    rating: 4.85,
    superhost: true,
    image: "/luxury-penthouse.png",
  },
  {
    id: 4,
    title: "Charming Cottage in Wine Country",
    location: "Napa, California",
    distance: "2,500 miles away",
    dates: "Nov 12-17",
    price: 195,
    rating: 4.97,
    superhost: false,
    image: "/placeholder-i1b5m.png",
  },
  {
    id: 5,
    title: "Beachfront Bungalow with Private Access",
    location: "Miami Beach, Florida",
    distance: "1,200 miles away",
    dates: "Jan 5-10",
    price: 310,
    rating: 4.91,
    superhost: true,
    image: "/placeholder.svg?height=300&width=300&query=beachfront bungalow",
  },
  {
    id: 6,
    title: "Modern Treehouse Retreat",
    location: "Portland, Oregon",
    distance: "2,800 miles away",
    dates: "Oct 20-25",
    price: 225,
    rating: 4.99,
    superhost: false,
    image: "/placeholder.svg?height=300&width=300&query=modern treehouse",
  },
  {
    id: 7,
    title: "Desert Oasis with Private Pool",
    location: "Scottsdale, Arizona",
    distance: "1,900 miles away",
    dates: "Nov 8-13",
    price: 280,
    rating: 4.94,
    superhost: true,
    image: "/placeholder.svg?height=300&width=300&query=desert house with pool",
  },
  {
    id: 8,
    title: "Historic Brownstone in City Center",
    location: "Boston, Massachusetts",
    distance: "2,200 miles away",
    dates: "Dec 10-15",
    price: 240,
    rating: 4.88,
    superhost: false,
    image: "/placeholder.svg?height=300&width=300&query=historic brownstone",
  },
]
