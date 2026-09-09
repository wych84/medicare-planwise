"use server"

import { Resend } from "resend"

export type LeadState = {
  status: "idle" | "success" | "error"
  message?: string
}

const TO_EMAIL = "info@confianzainsuranceservices.com"

export async function sendLead(_prevState: LeadState, formData: FormData): Promise<LeadState> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return {
      status: "error",
      message:
        "El servicio de correo aún no está configurado. Por favor, llámeme o escríbame directamente por ahora.",
    }
  }

  const firstName = String(formData.get("firstName") ?? "").trim()
  const lastName = String(formData.get("lastName") ?? "").trim()
  const phone = String(formData.get("phone") ?? "").trim()
  const email = String(formData.get("email") ?? "").trim()
  const zip = String(formData.get("zip") ?? "").trim()

  if (!firstName || !lastName || !phone || !email || !zip) {
    return { status: "error", message: "Por favor, complete todos los campos e inténtelo de nuevo." }
  }

  const resend = new Resend(apiKey)

  try {
    const { error } = await resend.emails.send({
      // Sends from your verified domain. Make sure confianzainsuranceservices.com is
      // verified in Resend's Domains section (add the DNS records they provide).
      from: "Confianza Insurance Services <leads@confianzainsuranceservices.com>",
      to: [TO_EMAIL],
      replyTo: email,
      subject: `Nueva solicitud de revisión de Medicare de ${firstName} ${lastName}`,
      text: [
        `Nombre: ${firstName} ${lastName}`,
        `Teléfono: ${phone}`,
        `Correo electrónico: ${email}`,
        `Código postal: ${zip}`,
      ].join("\n"),
    })

    if (error) {
      console.log("[v0] Resend error:", error)
      return {
        status: "error",
        message: "Ocurrió un error al enviar su solicitud. Por favor, inténtelo de nuevo.",
      }
    }

    return { status: "success" }
  } catch (err) {
    console.log("[v0] sendLead exception:", err)
    return {
      status: "error",
      message: "Ocurrió un error al enviar su solicitud. Por favor, inténtelo de nuevo.",
    }
  }
}
