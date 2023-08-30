"use client"

import Link from "next/link"
import { Menu } from "lucide-react"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { NAV_ROUTES } from "@/components/navbar"

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden pr-4">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-secondary pt-10 w-32">
        <div className="space-y-4 flex flex-col h-full text-primary bg-secondary">
          <div className="p-3 flex flex-1 justify-center">
            <div className="space-y-2">
              {NAV_ROUTES.map((item) => (
                <div key={item.name}>
                  <Link href={item.href}>{item.name}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar
