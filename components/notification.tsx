"use client"

import { useState } from "react"

import { Button } from "./ui/button"

const Notification = () => {
  const [email, setEmail] = useState<string>("")

  const [feedback, setFeedback] = useState<string>()

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value)
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()

    try {
      const response = await fetch(
        "https://api.convertkit.com/v3/forms/5574069/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            api_key: "LL87mcbMIpmLgL1uX_p6sw",
            email: email,
          }),
        }
      )

      const data = await response.json()

      if (response.ok) {
        setFeedback(
          "Great - Check your email for a confirmation, and we'll be in touch!"
        )
        setEmail("") // Clear the input
      } else {
        setFeedback(data.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setFeedback("Error: Unable to connect. Please try again later.")
    }
  }

  return (
    <div className="py-16 sm:py-24" id="connect">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate flex flex-col gap-10 overflow-hidden bg-muted px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 lg:flex-row lg:items-center xl:py-32">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-primary sm:text-4xl xl:max-w-none xl:flex-auto">
            Get notified when we&apos;re launching.
          </h2>
          <form className="w-full max-w-md" onSubmit={handleSubmit}>
            <div className="flex gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                placeholder="Enter your email"
                type="email"
                id="email"
                autoComplete="email"
                required
                value={email}
                onChange={handleEmailChange}
                className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-primary shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
              />
              <Button type="submit" variant="accent">
                Let me know
              </Button>
            </div>
            {feedback && (
              <div className="mt-4 text-sm leading-6">{feedback}</div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Notification
