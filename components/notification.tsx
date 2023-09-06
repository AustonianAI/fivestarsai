import { Button } from "./ui/button"

const Notification = () => {
  return (
    <div className="py-16 sm:py-24" id="connect">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate flex flex-col gap-10 overflow-hidden bg-muted px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 lg:flex-row lg:items-center xl:py-32">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-primary sm:text-4xl xl:max-w-none xl:flex-auto">
            Get notified when we&apos;re launching.
          </h2>
          <form className="w-full max-w-md">
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
                className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-primary shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
              />
              <Button type="submit" variant="accent">
                Let me know
              </Button>
            </div>
          </form>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient
                id="759c1415-0410-454c-8f7c-9a820de03641"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#009DC4" stopOpacity={0} />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Notification
