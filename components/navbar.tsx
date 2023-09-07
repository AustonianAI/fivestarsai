"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import { useTheme } from "next-themes"

import MobileSidebar from "@/components/mobile-sidebar"
import { ModeToggle } from "@/components/mode-toggle"

export const NAV_ROUTES = [
  { name: "Features", href: "/#features" },
  { name: "Learn More", href: "/#connect" },
]

const Navbar = () => {
  const { theme } = useTheme()

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  console.log("the theme is ", theme)

  const logoPath =
    theme === "light"
      ? "/fivestarsai-logo-light.svg"
      : "/fivestarsai-logo-dark.svg"

  console.log(logoPath)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8 gap-x-10"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/">
            <Image
              src={logoPath}
              width={200}
              height={50}
              alt="FiveStarsAI Logo"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <MobileSidebar />
        </div>
        <div className="hidden lg:flex items-center lg:gap-x-12">
          {NAV_ROUTES.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6"
            >
              {item.name}
            </Link>
          ))}
          <ModeToggle />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
