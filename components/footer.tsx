"use client"

import Link from "next/link"

import { NAV_ROUTES } from "./navbar"

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {NAV_ROUTES.map((item) => (
            <div className="pb-6" key={item.name}>
              <Link
                href={item.href}
                className="text-sm leading-6 text-foreground hover:text-accent"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2023 FiveStarsAI, All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
