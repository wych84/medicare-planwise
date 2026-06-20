"use server"

import { Resend } from "resend"

export type LeadState = {
  status: "idle" | "success" | "error"
  message?: string
}

const TO_EMAIL = "medicareplanwise@gmail.com"

export async function sendLead(_prevState: LeadState, formData: FormData): Promise<LeadState> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return {
      status: "error",
      message: "Email service is not configured yet. Please call or email me directly for now.",
    }
  }

  const firstName = String(formData.get("firstName") ?? "").trim()
  const lastName = String(formData.get("lastName") ?? "").trim()
  const phone = String(formData.get("phone") ?? "").trim()
  const email = String(formData.get("email") ?? "").trim()
  const zip = String(formData.get("zip") ?? "").trim()

  if (!firstName || !lastName || !phone || !email || !zip) {
    return { status: "error", message: "Please fill out every field and try again." }
  }

  const resend = new Resend(apiKey)

  try {
    const { error } = await resend.emails.send({
      // Sends from your verified domain. Make sure medicareplanwise.com is
      // verified in Resend's Domains section (add the DNS records they provide).
      from: "Medicare PlanWise <leads@medicareplanwise.com>",
      to: [TO_EMAIL],
      replyTo: email,
      subject: `New Medicare review request from ${firstName} ${lastName}`,
      text: [
        `Name: ${firstName} ${lastName}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `ZIP code: ${zip}`,
      ].join("\n"),
    })

    if (error) {
      console.log("[v0] Resend error:", error)
      return { status: "error", message: "Something went wrong sending your request. Please try again." }
    }

    return { status: "success" }
  } catch (err) {
    console.log("[v0] sendLead exception:", err)
    return { status: "error", message: "Something went wrong sending your request. Please try again." }
  }
}
