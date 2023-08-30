"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import { useTheme } from "next-themes"

import { ModeToggle } from "@/components/mode-toggle"

import MobileSidebar from "./mobile-sidebar"
import { Button } from "./ui/button"

export const NAV_ROUTES = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Company", href: "#" },
]

const Navbar = () => {
  const { theme } = useTheme()

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8 gap-x-10"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/">
            <Image
              src={
                theme === "light"
                  ? "/fivestarsai-logo-light.svg"
                  : "/fivestarsai-logo-dark.svg"
              }
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
