import Link from "next/link"
import { GraduationCap, PencilRuler, Search } from "lucide-react"

const features = [
  {
    name: "AI Generated Ticket Responses",
    description:
      "Use the ticket requester's comments, order history, and your compnay's specific knowledge base, policies, and procedures to generate responses - all while keeping your human agents in control.",
    href: "/#connect",
    icon: PencilRuler,
  },
  {
    name: "Train your AI with your Knoweldge Base",
    description:
      "Use your company's FAQs or knowledge base to train your AI to understand the way your do business. Your AI responses can even cite specific helpful or relevant articles in drafting responses to customers - all powered by vector database search.",
    href: "/#connect",
    icon: GraduationCap,
  },
  {
    name: "Quickly Retrieve Relevant Information",
    description:
      "Let AI review your tickets and retrieve the relevant customer, order, and transaction info before your agents spend any time on the ticket - your human agents do the decision making while AI does the tedious work.",
    href: "/#connect",
    icon: Search,
  },
]

const Features = () => {
  return (
    <div className="bg-secondary py-24 sm:py-32" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-secondary-foreground text-3xl font-bold tracking-tight sm:text-4xl">
            Your support team + AI = FiveStarsAI
          </h2>
          <p className="text-secondary-foreground mt-6 text-lg leading-8">
            Our suite of AI tools plugs into your existing help desk software,
            bringing your support agents to the next level of service
            capabilities.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-secondary-foreground">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <Link
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-accent"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Features
