import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message, travelDates, groupSize, interests } = body

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #d97706, #ea580c); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
          <p style="color: #fef3c7; margin: 5px 0 0 0;">Saudi Explorer</p>
        </div>
        
        <div style="padding: 30px; background: #fff;">
          <h2 style="color: #d97706; border-bottom: 2px solid #fbbf24; padding-bottom: 10px;">Contact Details</h2>
          
          <div style="margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
            <p><strong>Subject:</strong> ${subject}</p>
          </div>

          ${
            travelDates || groupSize || interests
              ? `
            <h3 style="color: #d97706; margin-top: 30px;">Travel Information</h3>
            ${travelDates ? `<p><strong>Preferred Travel Dates:</strong> ${travelDates}</p>` : ""}
            ${groupSize ? `<p><strong>Group Size:</strong> ${groupSize}</p>` : ""}
            ${interests ? `<p><strong>Areas of Interest:</strong> ${interests}</p>` : ""}
          `
              : ""
          }

          <h3 style="color: #d97706; margin-top: 30px;">Message</h3>
          <div style="background: #fef3c7; padding: 15px; border-radius: 5px; border-left: 4px solid #d97706;">
            <p style="margin: 0; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
          </div>
        </div>
        
        <div style="background: #f3f4f6; padding: 20px; text-align: center; color: #6b7280;">
          <p style="margin: 0;">This message was sent from the Saudi Explorer contact form</p>
          <p style="margin: 5px 0 0 0;">Respond within 24 hours for best customer experience</p>
        </div>
      </div>
    `

    // Send email using Resend
    const data = await resend.emails.send({
      from: "Saudi Explorer <noreply@saudiaexplore.com>",
      to: ["info@saudiaexplore.com"],
      subject: `New Contact Form: ${subject} - ${name}`,
      html: emailHtml,
      reply_to: email,
    })

    return NextResponse.json({ success: true, id: data.id })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
