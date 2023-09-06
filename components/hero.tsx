import Link from "next/link"

import { Button } from "./ui/button"

const Hero = () => {
  return (
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Customer Support Powered by AI
        </h1>
        <p className="mt-6 text-lg leading-8">
          Efficiently generate customer support ticket responses using your
          company&apos;s knowledge base, policies, and best practices - all
          while keeping your human agents in the control.
        </p>
        <Link href="#connect">
          <Button className="mt-6" variant="accent">
            Learn more
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Hero
