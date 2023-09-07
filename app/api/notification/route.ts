import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body = await req.json()

  const { email } = body

  console.log("email", email)

  try {
    const response = await fetch(
      "https://api.convertkit.com/v3/forms/5574069/subscribe",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          api_key: process.env.CONVERTKIT_API_KEY,
          email: email,
        }),
      }
    )

    return new NextResponse("Email Added", { status: 201 })
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}
