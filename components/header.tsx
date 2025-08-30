"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Menu, Phone, Mail, MapPin, ChevronDown, MessageCircle, Car, Sparkles, Plane, Star, X } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openSections, setOpenSections] = useState<string[]>([])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleSection = (section: string) => {
    setOpenSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]))
  }

  // Saudi tour categories for menu
  const tourCategories = [
    {
      title: "History & Culture",
      href: "/tours?category=History%20%26%20Culture",
      description: "UNESCO sites and heritage experiences",
      image: "/images/saudi-heritage-journey.png",
    },
    {
      title: "Adventure & Hiking",
      href: "/tours?category=Adventure%20%26%20Hiking",
      description: "Active outdoor adventures and hiking",
      image: "/images/desert-mountains.png",
    },
    {
      title: "Mixed Explorer",
      href: "/tours?category=Mixed%20Explorer",
      description: "Perfect blend of culture and adventure",
      image: "/images/alula-hegra-explorer.png",
    },
  ]

  const packageCategories = [
    {
      title: "5 Days",
      href: "/tours?duration=5",
      description: "Perfect for short getaways",
      price: "From $1,299",
      image: "/images/best-of-saudi-arabia.png",
    },
    {
      title: "7 Days",
      href: "/tours?duration=7",
      description: "Ideal for comprehensive exploration",
      price: "From $1,899",
      image: "/images/red-sea-adventure.png",
    },
    {
      title: "10 Days",
      href: "/tours?duration=10",
      description: "Ultimate Saudi Arabia experience",
      price: "From $2,799",
      image: "/images/saudi-heritage-journey.png",
    },
  ]

  const destinations = [
    {
      name: "Riyadh",
      href: "/destinations/riyadh",
      image: "/images/amman.png",
    },
    {
      name: "AlUla",
      href: "/destinations/alula",
      image: "/images/petra.png",
    },
    {
      name: "Jeddah",
      href: "/destinations/jeddah",
      image: "/images/aqaba.png",
    },
    {
      name: "Taif",
      href: "/destinations/taif",
      image: "/images/jerash.png",
    },
    {
      name: "Abha",
      href: "/destinations/abha",
      image: "/images/wadi-rum.png",
    },
    {
      name: "Eastern Province",
      href: "/destinations/eastern-province",
      image: "/images/dead-sea.png",
    },
    {
      name: "Makkah",
      href: "/destinations/makkah",
      image: "/images/mount-nebo.png",
    },
    {
      name: "Madinah",
      href: "/destinations/madinah",
      image: "/images/dana-reserve.png",
    },
    {
      name: "Tabuk",
      href: "/destinations/tabuk",
      image: "/images/little-petra.png",
    },
  ]

  const infoPages = [
    {
      name: "Travel Information",
      href: "/info/travel-info",
      description: "Visa, customs, and travel tips",
    },
    {
      name: "Culture & Traditions",
      href: "/info/culture",
      description: "Saudi customs and etiquette",
    },
    {
      name: "Weather & Climate",
      href: "/info/weather",
      description: "Best times to visit",
    },
    {
      name: "FAQ",
      href: "/info/faq",
      description: "Frequently asked questions",
    },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out",
        isScrolled
          ? "bg-white/20 backdrop-blur-lg shadow-xl border-b border-amber-200/30"
          : "bg-white/85 backdrop-blur-md shadow-lg",
      )}
    >
      <div className="container mx-auto px-4">
        {/* Top bar - hidden on mobile */}
        <div className="hidden lg:flex items-center justify-center py-1 text-sm border-b border-amber-100">
          <div className="flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+966 56 159 6033</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@saudiexplorer.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Riyadh, Saudi Arabia</span>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="lg:flex-initial">
            <div className="flex items-center lg:justify-start">
              <div className="absolute left-1/2 transform -translate-x-1/2 lg:relative lg:left-auto lg:transform-none">
                <Link href="/" className="flex items-center gap-2 group">
                  <Image
                    src="/images/saudi-explorer-logo.png"
                    alt="Saudi Explorer"
                    width={120}
                    height={40}
                    className="h-8 w-auto object-contain group-hover:scale-105 transition-transform duration-300 lg:h-10 flex items-center"
                    priority
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-amber-50 hover:text-amber-700 focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:bg-amber-50 hover:text-amber-700">Tours</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-2">
                    <div className="space-y-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-amber-50 hover:text-amber-700 focus:bg-accent focus:text-accent-foreground"
                          href="/tours"
                        >
                          <div className="relative h-32 mb-3 rounded-md overflow-hidden">
                            <Image src="/images/saudi-hero.jpg" alt="All Saudi Tours" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/60 to-orange-500/60" />
                            <div className="absolute bottom-2 left-2 text-white">
                              <div className="font-medium text-sm">All Saudi Tours</div>
                              <div className="text-xs opacity-90">Complete collection</div>
                            </div>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Explore our complete collection of Saudi Arabia tour packages
                          </div>
                        </Link>
                      </NavigationMenuLink>

                      {tourCategories.slice(0, 2).map((category) => (
                        <Link
                          key={category.title}
                          href={category.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-amber-50 hover:text-amber-700 focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{category.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {category.description}
                          </p>
                        </Link>
                      ))}
                    </div>

                    <div className="space-y-3">
                      {tourCategories.slice(2).map((category) => (
                        <Link
                          key={category.title}
                          href={category.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-amber-50 hover:text-amber-700 focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{category.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {category.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:bg-amber-50 hover:text-amber-700">
                  Packages
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-3">
                    {packageCategories.map((category) => (
                      <Link
                        key={category.title}
                        href={category.href}
                        className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-amber-50 hover:text-amber-700 focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="relative h-32 mb-3 rounded-md overflow-hidden">
                          <Image
                            src={category.image || "/placeholder.svg"}
                            alt={category.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-black/40" />
                          <div className="absolute bottom-2 left-2 text-white">
                            <div className="font-medium text-sm">{category.title}</div>
                            <div className="text-xs opacity-90">{category.price}</div>
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground">{category.description}</div>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:bg-amber-50 hover:text-amber-700">
                  Destinations
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 md:w-[500px] lg:w-[600px]">
                    <Link
                      href="/destinations"
                      className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-amber-50 hover:text-amber-700 focus:bg-accent focus:text-accent-foreground mb-3"
                    >
                      <div className="relative h-24 mb-2 rounded-md overflow-hidden">
                        <Image src="/images/saudi-hero.jpg" alt="All Destinations" fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/60 to-orange-500/60" />
                        <div className="absolute bottom-2 left-2 text-white">
                          <div className="font-medium text-sm">All Destinations</div>
                          <div className="text-xs opacity-90">Discover Saudi Arabia</div>
                        </div>
                      </div>
                    </Link>

                    <div className="grid grid-cols-3 gap-2">
                      {destinations.map((destination) => (
                        <Link
                          key={destination.name}
                          href={destination.href}
                          className="block select-none rounded-md overflow-hidden transition-colors hover:bg-amber-50 hover:text-amber-700 focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="relative h-20">
                            <Image
                              src={destination.image || "/placeholder.svg"}
                              alt={destination.name}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40" />
                            <div className="absolute bottom-1 left-2 text-white">
                              <div className="font-medium text-xs">{destination.name}</div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/events" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-amber-50 hover:text-amber-700 focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Events
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-gradient-to-r from-purple-600 to-amber-600 hover:from-purple-700 hover:to-amber-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <span className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    Exclusive
                    <Star className="h-4 w-4" />
                  </span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                    <Link
                      href="/exclusive/alula-helicopter-ride"
                      className="block select-none rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-gradient-to-r hover:from-purple-50 hover:to-amber-50 focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="relative h-32 mb-3 rounded-md overflow-hidden">
                        <Image
                          src="/images/alula-helicopter-aerial-view.png"
                          alt="AlUla Helicopter Ride"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/60 to-amber-500/60" />
                        <div className="absolute bottom-2 left-2 text-white">
                          <div className="font-medium text-sm flex items-center gap-1">
                            <Sparkles className="h-3 w-3" />
                            Al Ula Helicopter Ride
                          </div>
                          <div className="text-xs opacity-90">Ultimate aerial experience</div>
                        </div>
                        <div className="absolute top-2 right-2">
                          <div className="bg-gradient-to-r from-purple-400/80 to-amber-400/80 backdrop-blur-sm text-white text-xs px-2 py-0.5 rounded-full font-medium animate-pulse">
                            Exclusive
                          </div>
                        </div>
                      </div>
                      <div className="text-sm font-medium leading-none mb-1">Al Ula Helicopter Ride</div>
                      <div className="text-sm text-muted-foreground">
                        Soar above the ancient wonders of AlUla in a premium helicopter experience
                      </div>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:bg-amber-50 hover:text-amber-700">Info</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    {infoPages.map((page) => (
                      <Link
                        key={page.name}
                        href={page.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-amber-50 hover:text-amber-700 focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{page.name}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{page.description}</p>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-amber-50 hover:text-amber-700 focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-amber-50 hover:text-amber-700 focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
              <Link href="/start-planning">Start Planning</Link>
            </Button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <ModeToggle />
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              {/* Close Button */}
              <SheetContent
                side="right"
                className="w-[380px] overflow-y-auto p-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 backdrop-blur-xl border-l border-amber-200/50"
              >
                {/* Desert-themed Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {/* Desert Sand Dunes - Floating Orbs */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-amber-300/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute top-1/4 -left-12 w-32 h-32 bg-gradient-to-br from-yellow-300/15 to-amber-400/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
                  <div className="absolute top-1/2 right-8 w-28 h-28 bg-gradient-to-br from-orange-300/25 to-red-400/25 rounded-full blur-2xl animate-pulse delay-2000"></div>
                  <div className="absolute bottom-1/4 -left-8 w-36 h-36 bg-gradient-to-br from-amber-400/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse delay-3000"></div>
                  <div className="absolute bottom-10 right-12 w-24 h-24 bg-gradient-to-br from-orange-400/20 to-amber-500/20 rounded-full blur-xl animate-pulse delay-4000"></div>

                  {/* Desert Stars */}
                  <div className="absolute top-16 left-8 text-amber-400/40 animate-bounce delay-500">
                    <Star className="h-4 w-4" />
                  </div>
                  <div className="absolute top-32 right-16 text-yellow-400/40 animate-bounce delay-1500">
                    <Star className="h-3 w-3" />
                  </div>
                  <div className="absolute top-48 left-12 text-orange-400/40 animate-bounce delay-2500">
                    <Star className="h-4 w-4" />
                  </div>
                  <div className="absolute bottom-32 right-8 text-amber-500/40 animate-bounce delay-3500">
                    <Star className="h-3 w-3" />
                  </div>
                  <div className="absolute bottom-48 left-16 text-yellow-500/40 animate-bounce delay-4500">
                    <Star className="h-4 w-4" />
                  </div>
                </div>

                {/* Desert Airplanes - All Flying Right and Facing Down */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {/* Row 1 - Top */}
                  <div className="absolute top-16 -left-8 text-amber-400/40 animate-[fly-right-down_12s_linear_infinite]">
                    <Plane className="h-5 w-5 rotate-90" />
                  </div>
                  <div className="absolute top-20 -left-8 text-orange-400/35 animate-[fly-right-down_14s_linear_infinite_1s]">
                    <Plane className="h-4 w-4 rotate-90" />
                  </div>
                  <div className="absolute top-24 -left-8 text-yellow-500/45 animate-[fly-right-down_16s_linear_infinite_2s]">
                    <Plane className="h-6 w-6 rotate-90" />
                  </div>

                  {/* Row 2 - Upper Middle */}
                  <div className="absolute top-40 -left-8 text-amber-500/40 animate-[fly-right-down_18s_linear_infinite_3s]">
                    <Plane className="h-5 w-5 rotate-90" />
                  </div>
                  <div className="absolute top-44 -left-8 text-orange-500/35 animate-[fly-right-down_13s_linear_infinite_4s]">
                    <Plane className="h-4 w-4 rotate-90" />
                  </div>
                  <div className="absolute top-48 -left-8 text-yellow-400/40 animate-[fly-right-down_15s_linear_infinite_5s]">
                    <Plane className="h-5 w-5 rotate-90" />
                  </div>

                  {/* Row 3 - Middle */}
                  <div className="absolute top-64 -left-8 text-amber-600/45 animate-[fly-right-down_17s_linear_infinite_6s]">
                    <Plane className="h-6 w-6 rotate-90" />
                  </div>
                  <div className="absolute top-68 -left-8 text-orange-600/35 animate-[fly-right-down_19s_linear_infinite_7s]">
                    <Plane className="h-4 w-4 rotate-90" />
                  </div>
                  <div className="absolute top-72 -left-8 text-yellow-600/40 animate-[fly-right-down_14s_linear_infinite_8s]">
                    <Plane className="h-5 w-5 rotate-90" />
                  </div>

                  {/* Row 4 - Lower Middle */}
                  <div className="absolute bottom-64 -left-8 text-amber-700/40 animate-[fly-right-down_16s_linear_infinite_9s]">
                    <Plane className="h-5 w-5 rotate-90" />
                  </div>
                  <div className="absolute bottom-60 -left-8 text-orange-700/35 animate-[fly-right-down_20s_linear_infinite_10s]">
                    <Plane className="h-4 w-4 rotate-90" />
                  </div>
                  <div className="absolute bottom-56 -left-8 text-yellow-700/45 animate-[fly-right-down_12s_linear_infinite_11s]">
                    <Plane className="h-6 w-6 rotate-90" />
                  </div>

                  {/* Row 5 - Bottom */}
                  <div className="absolute bottom-40 -left-8 text-amber-800/40 animate-[fly-right-down_18s_linear_infinite_12s]">
                    <Plane className="h-5 w-5 rotate-90" />
                  </div>
                  <div className="absolute bottom-36 -left-8 text-orange-800/35 animate-[fly-right-down_15s_linear_infinite_13s]">
                    <Plane className="h-4 w-4 rotate-90" />
                  </div>
                  <div className="absolute bottom-32 -left-8 text-yellow-800/40 animate-[fly-right-down_13s_linear_infinite_14s]">
                    <Plane className="h-5 w-5 rotate-90" />
                  </div>
                </div>

                <div className="relative z-10 flex flex-col gap-4 p-6">
                  {/* Close Button */}
                  <div className="flex justify-end mb-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="h-8 w-8 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                    >
                      <X className="h-4 w-4 text-amber-700" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </div>
                  {/* Desert-themed Animated Header */}
                  <div className="text-center mb-3 animate-in slide-in-from-top-4 duration-500">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Sparkles className="h-4 w-4 text-amber-500 animate-pulse" />
                      <h2 className="text-lg font-bold bg-gradient-to-r from-amber-700 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
                        Explore Saudi Arabia
                      </h2>
                      <Sparkles className="h-4 w-4 text-orange-500 animate-pulse delay-500" />
                    </div>
                    <p className="text-xs text-muted-foreground bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                      Your gateway to the Kingdom
                    </p>
                  </div>

                  {/* Home Link */}
                  <Link
                    href="/"
                    className="group relative overflow-hidden rounded-lg p-3 bg-gradient-to-r from-amber-100/80 via-orange-100/80 to-yellow-100/80 backdrop-blur-sm border border-amber-200/50 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 animate-in slide-in-from-right-4 duration-500 delay-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative text-base font-semibold bg-gradient-to-r from-amber-800 to-orange-700 bg-clip-text text-transparent group-hover:from-amber-700 group-hover:to-orange-600 transition-all duration-300">
                      Home
                    </div>
                  </Link>

                  {/* Tours Section */}
                  <div className="animate-in slide-in-from-right-4 duration-500 delay-200">
                    <Collapsible open={openSections.includes("tours")} onOpenChange={() => toggleSection("tours")}>
                      <CollapsibleTrigger className="group w-full relative overflow-hidden rounded-lg p-3 bg-gradient-to-r from-amber-100/80 via-orange-100/80 to-yellow-100/80 backdrop-blur-sm border border-amber-200/50 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative flex items-center justify-between">
                          <span className="text-base font-semibold bg-gradient-to-r from-amber-800 to-orange-700 bg-clip-text text-transparent group-hover:from-amber-700 group-hover:to-orange-600 transition-all duration-300">
                            Tours
                          </span>
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 text-orange-600 transition-transform duration-300",
                              openSections.includes("tours") && "rotate-180",
                            )}
                          />
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="space-y-2 mt-3">
                        <Link
                          href="/tours"
                          className="group block relative overflow-hidden rounded-lg border border-amber-200/50 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 animate-in slide-in-from-left-4 duration-300"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="relative h-20">
                            <Image src="/images/saudi-hero.jpg" alt="All Saudi Tours" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/70 via-orange-500/70 to yellow-500/70" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                            <div className="absolute bottom-2 left-2 text-white">
                              <div className="font-semibold text-sm drop-shadow-lg">All Saudi Tours</div>
                              <div className="text-xs opacity-90 drop-shadow">Complete collection</div>
                            </div>
                            <div className="absolute top-2 right-2">
                              <div className="bg-gradient-to-r from-yellow-400/80 to-orange-400/80 backdrop-blur-sm text-white text-xs px-2 py-0.5 rounded-full font-medium animate-pulse">
                                Featured
                              </div>
                            </div>
                          </div>
                        </Link>

                        {tourCategories.map((category, index) => (
                          <Link
                            key={category.title}
                            href={category.href}
                            className="group block relative overflow-hidden rounded-lg border border-gray-200/50 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 animate-in slide-in-from-left-4 duration-300"
                            style={{ animationDelay: `${(index + 1) * 100}ms` }}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="relative h-20">
                              <Image
                                src={category.image || "/placeholder.svg"}
                                alt={category.title}
                                fill
                                className="object-cover"
                              />
                              <div className="absolute bottom-2 left-2 text-white">
                                <div className="font-semibold text-sm drop-shadow-lg">{category.title}</div>
                                <div className="text-xs opacity-90 drop-shadow">{category.description}</div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  </div>

                  {/* Packages Section */}
                  <div className="animate-in slide-in-from-right-4 duration-500 delay-300">
                    <Collapsible
                      open={openSections.includes("packages")}
                      onOpenChange={() => toggleSection("packages")}
                    >
                      <CollapsibleTrigger className="group w-full relative overflow-hidden rounded-lg p-3 bg-gradient-to-r from-orange-100/80 via-red-100/80 to-amber-100/80 backdrop-blur-sm border border-orange-200/50 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative flex items-center justify-between">
                          <span className="text-base font-semibold bg-gradient-to-r from-orange-800 to-red-700 bg-clip-text text-transparent group-hover:from-orange-700 group-hover:to-red-600 transition-all duration-300">
                            Packages
                          </span>
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 text-red-600 transition-transform duration-300",
                              openSections.includes("packages") && "rotate-180",
                            )}
                          />
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="space-y-2 mt-3">
                        {packageCategories.map((category, index) => (
                          <Link
                            key={category.title}
                            href={category.href}
                            className="group block relative overflow-hidden rounded-lg border border-gray-200/50 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 animate-in slide-in-from-left-4 duration-300"
                            style={{ animationDelay: `${index * 100}ms` }}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="relative h-20">
                              <Image
                                src={category.image || "/placeholder.svg"}
                                alt={category.title}
                                fill
                                className="object-cover"
                              />
                              <div className="absolute bottom-2 left-2 text-white">
                                <div className="font-semibold text-sm drop-shadow-lg">{category.title}</div>
                                <div className="text-xs opacity-90 drop-shadow">{category.price}</div>
                              </div>
                              <div className="absolute top-2 right-2">
                                <div className="bg-gradient-to-r from-yellow-400/80 via-orange-400/80 to-red-400/80 backdrop-blur-sm text-white text-xs px-2 py-0.5 rounded-full font-medium animate-pulse">
                                  Popular
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  </div>

                  {/* Destinations Section */}
                  <div className="animate-in slide-in-from-right-4 duration-500 delay-400">
                    <Collapsible
                      open={openSections.includes("destinations")}
                      onOpenChange={() => toggleSection("destinations")}
                    >
                      <CollapsibleTrigger className="group w-full relative overflow-hidden rounded-lg p-3 bg-gradient-to-r from-yellow-100/80 via-amber-100/80 to-orange-100/80 backdrop-blur-sm border border-yellow-200/50 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-amber-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative flex items-center justify-between">
                          <span className="text-base font-semibold bg-gradient-to-r from-yellow-800 to-amber-700 bg-clip-text text-transparent group-hover:from-yellow-700 group-hover:to-amber-600 transition-all duration-300">
                            Destinations
                          </span>
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 text-amber-600 transition-transform duration-300",
                              openSections.includes("destinations") && "rotate-180",
                            )}
                          />
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="space-y-3 mt-3">
                        <Link
                          href="/destinations"
                          className="group block relative overflow-hidden rounded-lg border border-yellow-200/50 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 animate-in slide-in-from-left-4 duration-300"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="relative h-20">
                            <Image src="/images/saudi-hero.jpg" alt="All Destinations" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/70 via-amber-500/70 to-orange-500/70" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                            <div className="absolute bottom-2 left-2 text-white">
                              <div className="font-semibold text-sm drop-shadow-lg">All Destinations</div>
                              <div className="text-xs opacity-90 drop-shadow">Discover Saudi Arabia</div>
                            </div>
                          </div>
                        </Link>

                        <div className="grid grid-cols-2 gap-2">
                          {destinations.map((destination, index) => (
                            <Link
                              key={destination.name}
                              href={destination.href}
                              className="group block relative overflow-hidden rounded-lg border border-gray-200/50 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 animate-in slide-in-from-bottom-4 duration-300"
                              style={{ animationDelay: `${index * 50}ms` }}
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <div className="relative h-16">
                                <Image
                                  src={destination.image || "/placeholder.svg"}
                                  alt={destination.name}
                                  fill
                                  className="object-cover"
                                />
                                <div className="absolute bottom-1 left-2 text-white">
                                  <div className="font-semibold text-xs drop-shadow-lg">{destination.name}</div>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>

                  {/* Events Link */}
                  <Link
                    href="/events"
                    className="group relative overflow-hidden rounded-lg p-3 bg-gradient-to-r from-purple-100/80 via-pink-100/80 to-rose-100/80 backdrop-blur-sm border border-purple-200/50 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 animate-in slide-in-from-right-4 duration-500 delay-500"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative text-base font-semibold bg-gradient-to-r from-purple-800 to-rose-700 bg-clip-text text-transparent group-hover:from-purple-700 group-hover:to-rose-600 transition-all duration-300">
                      Events
                    </div>
                  </Link>

                  <Link
                    href="/exclusive/alula-helicopter-ride"
                    className="group relative overflow-hidden rounded-lg p-3 bg-gradient-to-r from-purple-500/80 via-amber-500/80 to-purple-600/80 backdrop-blur-sm border border-purple-300/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-in slide-in-from-right-4 duration-500 delay-550"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-amber-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-white animate-pulse" />
                      <span className="text-base font-semibold text-white drop-shadow-lg">Exclusive</span>
                      <Star className="h-4 w-4 text-white animate-pulse delay-500" />
                    </div>
                    <div className="relative text-xs text-purple-100 mt-1 drop-shadow">Premium experiences</div>
                  </Link>

                  {/* Info Section */}
                  <div className="animate-in slide-in-from-right-4 duration-500 delay-600">
                    <Collapsible open={openSections.includes("info")} onOpenChange={() => toggleSection("info")}>
                      <CollapsibleTrigger className="group w-full relative overflow-hidden rounded-lg p-3 bg-gradient-to-r from-amber-100/80 via-yellow-100/80 to-orange-100/80 backdrop-blur-sm border border-amber-200/50 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative flex items-center justify-between">
                          <span className="text-base font-semibold bg-gradient-to-r from-amber-800 to-yellow-700 bg-clip-text text-transparent group-hover:from-amber-700 group-hover:to-yellow-600 transition-all duration-300">
                            Info
                          </span>
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 text-yellow-600 transition-transform duration-300",
                              openSections.includes("info") && "rotate-180",
                            )}
                          />
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="space-y-2 mt-3">
                        {infoPages.map((page, index) => (
                          <Link
                            key={page.name}
                            href={page.href}
                            className="group block relative overflow-hidden rounded-lg p-3 bg-gradient-to-r from-stone-100/60 via-neutral-100/60 to-amber-100/60 backdrop-blur-sm border border-stone-200/50 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 animate-in slide-in-from-left-4 duration-300"
                            style={{ animationDelay: `${index * 100}ms` }}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-yellow-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative">
                              <div className="font-semibold text-sm bg-gradient-to-r from-stone-800 to-amber-700 bg-clip-text text-transparent group-hover:from-amber-700 group-hover:to-orange-600 transition-all duration-300">
                                {page.name}
                              </div>
                              <div className="text-xs text-muted-foreground mt-1">{page.description}</div>
                            </div>
                          </Link>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  </div>

                  {/* Simple Links */}
                  <Link
                    href="/about"
                    className="group relative overflow-hidden rounded-lg p-3 bg-gradient-to-r from-orange-100/80 via-amber-100/80 to-yellow-100/80 backdrop-blur-sm border border-orange-200/50 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 animate-in slide-in-from-right-4 duration-500 delay-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative text-base font-semibold bg-gradient-to-r from-orange-800 to-amber-700 bg-clip-text text-transparent group-hover:from-orange-700 group-hover:to-amber-600 transition-all duration-300">
                      About
                    </div>
                  </Link>

                  <Link
                    href="/contact"
                    className="group relative overflow-hidden rounded-lg p-3 bg-gradient-to-r from-red-100/80 via-orange-100/80 to-amber-100/80 backdrop-blur-sm border border-red-200/50 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 animate-in slide-in-from-right-4 duration-500 delay-800"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative text-base font-semibold bg-gradient-to-r from-red-800 to-orange-700 bg-clip-text text-transparent group-hover:from-red-700 group-hover:to-orange-600 transition-all duration-300">
                      Contact
                    </div>
                  </Link>

                  {/* Desert-themed Contact Section - At the very bottom */}
                  <div className="border-t border-amber-200/50 pt-4 mt-4 animate-in slide-in-from-bottom-4 duration-500 delay-1000">
                    <div className="space-y-3">
                      {/* Outstanding Rent a Car Button */}
                      <a
                        href="https://www.rentalcars.com/?affiliateCode=saudiexplorer&utm_source=saudiexplorer&utm_medium=referral"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block relative overflow-hidden rounded-xl p-4 bg-gradient-to-r from-orange-500 via-red-500 to-amber-600 hover:from-orange-600 hover:via-red-600 hover:to-amber-700 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 transform"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute -top-2 -right-2 w-12 h-12 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-colors duration-500"></div>
                        <div className="absolute top-1 right-1 w-8 h-8 bg-yellow-400/30 rounded-full blur-lg animate-ping"></div>
                        <div className="relative flex items-center gap-3">
                          <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg group-hover:bg-white/30 transition-colors duration-300">
                            <Car className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="font-bold text-white text-base drop-shadow-lg">Rent a Car</div>
                            <div className="text-orange-100 text-xs drop-shadow">Best prices guaranteed!</div>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <div className="bg-gradient-to-r from-yellow-400/80 to-orange-400/80 backdrop-blur-sm text-white text-xs px-2 py-0.5 rounded-full font-bold animate-pulse">
                              Special Offer
                            </div>
                            <div className="text-white/80 text-xs">Save up to 30%</div>
                          </div>
                        </div>
                      </a>

                      {/* Desert-themed Contact Buttons Grid */}
                      <div className="grid gap-2">
                        {/* WhatsApp Button */}
                        <a
                          href="https://wa.me/966561596033"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-3 p-3 bg-gradient-to-r from-green-100 via-emerald-100 to-amber-100 hover:from-green-200 hover:via-emerald-200 hover:to-amber-200 rounded-lg border border-green-200/50 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                          <div className="p-1.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-md group-hover:from-green-600 group-hover:to-emerald-600 transition-colors duration-300">
                            <MessageCircle className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-sm bg-gradient-to-r from-green-800 to-emerald-700 bg-clip-text text-transparent">
                              WhatsApp
                            </div>
                            <div className="text-xs bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                              +966 56 159 6033
                            </div>
                          </div>
                          <div className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <ChevronDown className="h-3 w-3 rotate-[-90deg]" />
                          </div>
                        </a>

                        {/* Phone Button */}
                        <a
                          href="tel:+966561596033"
                          className="group flex items-center gap-3 p-3 bg-gradient-to-r from-blue-100 via-sky-100 to-amber-100 hover:from-blue-200 hover:via-sky-200 hover:to-amber-200 rounded-lg border border-blue-200/50 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                          <div className="p-1.5 bg-gradient-to-r from-blue-500 to-sky-500 rounded-md group-hover:from-blue-600 group-hover:to-sky-600 transition-colors duration-300">
                            <Phone className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-sm bg-gradient-to-r from-blue-800 to-sky-700 bg-clip-text text-transparent">
                              Call Us
                            </div>
                            <div className="text-xs bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">
                              +966 56 159 6033
                            </div>
                          </div>
                          <div className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <ChevronDown className="h-3 w-3 rotate-[-90deg]" />
                          </div>
                        </a>

                        {/* Email Button */}
                        <a
                          href="mailto:info@saudiexplorer.com"
                          className="group flex items-center gap-3 p-3 bg-gradient-to-r from-amber-100 via-yellow-100 to-orange-100 hover:from-amber-200 hover:via-yellow-200 hover:to-orange-200 rounded-lg border border-amber-200/50 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                          <div className="p-1.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-md group-hover:from-amber-600 group-hover:to-orange-600 transition-colors duration-300">
                            <Mail className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-sm bg-gradient-to-r from-amber-800 to-orange-700 bg-clip-text text-transparent">
                              Email Us
                            </div>
                            <div className="text-xs bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                              info@saudiexplorer.com
                            </div>
                          </div>
                          <div className="text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <ChevronDown className="h-3 w-3 rotate-[-90deg]" />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Custom CSS for desert airplane animations */}
                <style jsx>{`
                  @keyframes fly-right-down {
                    0% {
                      transform: translateX(-100px) translateY(0px) rotate(90deg);
                      opacity: 0;
                    }
                    5% {
                      opacity: 1;
                    }
                    95% {
                      opacity: 1;
                    }
                    100% {
                      transform: translateX(calc(100vw + 100px)) translateY(20px) rotate(90deg);
                      opacity: 0;
                    }
                  }
                `}</style>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
