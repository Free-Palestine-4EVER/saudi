import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const bookingData = await request.json()

    // Generate booking reference
    const bookingReference = `SA${Math.random().toString(36).substr(2, 9).toUpperCase()}`

    // Send confirmation email to customer
    const customerEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Booking Confirmation - Saudi Explorer</title>
        </head>
        <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; background-color: #f8f9fa;">
          <div style="background: linear-gradient(135deg, #f59e0b 0%, #ea580c 50%, #dc2626 100%); padding: 40px 20px; text-align: center; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">🎉 Booking Confirmed!</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 18px;">Your Saudi Arabian adventure awaits</p>
          </div>
          
          <div style="background: white; padding: 40px 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <div style="background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%); padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b; margin-bottom: 30px;">
              <h2 style="color: #92400e; margin: 0 0 10px 0; font-size: 20px;">📋 Booking Reference</h2>
              <p style="font-size: 24px; font-weight: bold; color: #92400e; margin: 0; letter-spacing: 1px;">${bookingReference}</p>
              <p style="color: #92400e; margin: 10px 0 0 0; font-size: 14px;">Please keep this reference number for your records</p>
            </div>

            <h2 style="color: #1f2937; border-bottom: 2px solid #f59e0b; padding-bottom: 10px; margin-bottom: 20px;">🏜️ Tour Details</h2>
            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
              <p style="margin: 8px 0;"><strong style="color: #374151;">Tour:</strong> <span style="color: #f59e0b; font-weight: 600;">${bookingData.tourTitle}</span></p>
              <p style="margin: 8px 0;"><strong style="color: #374151;">Departure Date:</strong> ${bookingData.selectedDate}</p>
              <p style="margin: 8px 0;"><strong style="color: #374151;">Travelers:</strong> ${bookingData.travelers} ${bookingData.travelers === 1 ? "person" : "people"}</p>
              <p style="margin: 8px 0;"><strong style="color: #374151;">Accommodation:</strong> ${bookingData.accommodation === "luxury" ? "5★ Luxury Hotels" : "4★ Standard Hotels"}</p>
              ${bookingData.insurance ? '<p style="margin: 8px 0;"><strong style="color: #374151;">Travel Insurance:</strong> ✅ Included</p>' : ""}
            </div>

            <h2 style="color: #1f2937; border-bottom: 2px solid #f59e0b; padding-bottom: 10px; margin-bottom: 20px;">👤 Guest Information</h2>
            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
              <p style="margin: 8px 0;"><strong style="color: #374151;">Name:</strong> ${bookingData.firstName} ${bookingData.lastName}</p>
              <p style="margin: 8px 0;"><strong style="color: #374151;">Email:</strong> ${bookingData.email}</p>
              <p style="margin: 8px 0;"><strong style="color: #374151;">Phone:</strong> ${bookingData.phone}</p>
              <p style="margin: 8px 0;"><strong style="color: #374151;">Country:</strong> ${bookingData.country}</p>
              ${bookingData.dietaryRestrictions ? `<p style="margin: 8px 0;"><strong style="color: #374151;">Dietary Requirements:</strong> ${bookingData.dietaryRestrictions}</p>` : ""}
              ${bookingData.pickupLocation ? `<p style="margin: 8px 0;"><strong style="color: #374151;">Pickup Location:</strong> ${bookingData.pickupLocation}</p>` : ""}
            </div>

            <h2 style="color: #1f2937; border-bottom: 2px solid #f59e0b; padding-bottom: 10px; margin-bottom: 20px;">💰 Payment Information</h2>
            <div style="background: linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 100%); padding: 20px; border-radius: 8px; border: 1px solid #bbf7d0; margin-bottom: 25px;">
              <p style="margin: 8px 0; font-size: 18px;"><strong style="color: #065f46;">Total Amount:</strong> <span style="color: #059669; font-weight: bold; font-size: 20px;">$${bookingData.totalAmount.toLocaleString()}</span></p>
              <p style="margin: 8px 0; font-size: 16px;"><strong style="color: #065f46;">Deposit to Pay:</strong> <span style="color: #dc2626; font-weight: bold;">$${bookingData.depositAmount.toLocaleString()}</span></p>
              <p style="margin: 8px 0; color: #065f46;"><strong>Remaining Balance:</strong> $${(bookingData.totalAmount - bookingData.depositAmount).toLocaleString()} (due 30 days before departure)</p>
            </div>

            <div style="background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6; margin-bottom: 25px;">
              <h3 style="color: #1e40af; margin: 0 0 15px 0; font-size: 18px;">📞 Next Steps</h3>
              <ul style="color: #1e40af; margin: 0; padding-left: 20px;">
                <li style="margin-bottom: 8px;">Our team will contact you within 24 hours to arrange payment</li>
                <li style="margin-bottom: 8px;">You'll receive detailed itinerary and packing list 2 weeks before departure</li>
                <li style="margin-bottom: 8px;">For any questions, contact us with your booking reference: <strong>${bookingReference}</strong></li>
              </ul>
            </div>

            ${
              bookingData.specialRequests
                ? `
            <div style="background: #fef7cd; padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b; margin-bottom: 25px;">
              <h3 style="color: #92400e; margin: 0 0 10px 0;">📝 Your Special Requests</h3>
              <p style="color: #92400e; margin: 0;">${bookingData.specialRequests}</p>
            </div>
            `
                : ""
            }

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; margin-bottom: 15px;">Thank you for choosing Saudi Explorer!</p>
              <p style="color: #6b7280; font-size: 14px; margin: 5px 0;">📧 info@saudiaexplore.com | 📱 WhatsApp: +966 XX XXX XXXX</p>
              <p style="color: #6b7280; font-size: 14px; margin: 5px 0;">🌐 www.saudiaexplore.com</p>
            </div>
          </div>
        </body>
      </html>
    `

    // Send notification email to company
    const companyEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Booking - ${bookingReference}</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
          <div style="background: #f59e0b; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">🎉 New Booking Received!</h1>
            <p style="margin: 10px 0 0 0;">Booking Reference: ${bookingReference}</p>
          </div>
          
          <div style="padding: 20px; background: white;">
            <h2>Tour Details</h2>
            <p><strong>Tour:</strong> ${bookingData.tourTitle}</p>
            <p><strong>Date:</strong> ${bookingData.selectedDate}</p>
            <p><strong>Travelers:</strong> ${bookingData.travelers}</p>
            <p><strong>Total Amount:</strong> $${bookingData.totalAmount.toLocaleString()}</p>
            <p><strong>Deposit Required:</strong> $${bookingData.depositAmount.toLocaleString()}</p>
            
            <h2>Customer Information</h2>
            <p><strong>Name:</strong> ${bookingData.firstName} ${bookingData.lastName}</p>
            <p><strong>Email:</strong> ${bookingData.email}</p>
            <p><strong>Phone:</strong> ${bookingData.phone}</p>
            <p><strong>Country:</strong> ${bookingData.country}</p>
            <p><strong>Emergency Contact:</strong> ${bookingData.emergencyContact} (${bookingData.emergencyPhone})</p>
            
            ${bookingData.dietaryRestrictions ? `<p><strong>Dietary Restrictions:</strong> ${bookingData.dietaryRestrictions}</p>` : ""}
            ${bookingData.pickupLocation ? `<p><strong>Pickup Location:</strong> ${bookingData.pickupLocation}</p>` : ""}
            ${bookingData.specialRequests ? `<p><strong>Special Requests:</strong> ${bookingData.specialRequests}</p>` : ""}
            
            <h2>Booking Options</h2>
            <p><strong>Accommodation:</strong> ${bookingData.accommodation}</p>
            <p><strong>Insurance:</strong> ${bookingData.insurance ? "Yes" : "No"}</p>
          </div>
        </body>
      </html>
    `

    // Send customer confirmation email
    await resend.emails.send({
      from: "Saudi Explorer <bookings@saudiaexplore.com>",
      to: [bookingData.email],
      subject: `🎉 Booking Confirmed - ${bookingData.tourTitle} (${bookingReference})`,
      html: customerEmailHtml,
    })

    // Send company notification email
    await resend.emails.send({
      from: "Saudi Explorer <bookings@saudiaexplore.com>",
      to: ["info@saudiaexplore.com"],
      subject: `New Booking: ${bookingData.tourTitle} - ${bookingReference}`,
      html: companyEmailHtml,
    })

    return NextResponse.json({
      success: true,
      message: "Booking confirmed successfully",
      bookingReference,
    })
  } catch (error) {
    console.error("Booking error:", error)
    return NextResponse.json({ success: false, message: "Failed to process booking" }, { status: 500 })
  }
}
