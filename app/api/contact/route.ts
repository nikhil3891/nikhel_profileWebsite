import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/lib/models/Contact";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message, type } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Name, email, subject and message are required." },
        { status: 400 }
      );
    }

    // Save to MongoDB
    await connectDB();
    const contact = await Contact.create({
      name,
      email,
      phone,
      subject,
      message,
      type: type || "other",
    });

    // Send email notification
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO,
        subject: `[Portfolio] New ${type === "employer" ? "Job Opportunity" : "Freelance Inquiry"}: ${subject}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0D1420; color: #E2EAF4; padding: 32px; border-radius: 12px; border: 1px solid #1E2D45;">
            <h2 style="color: #3B82F6; margin-top: 0;">New Contact from Portfolio</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #8BA3C0; width: 120px;">Name</td><td style="padding: 8px 0; font-weight: bold;">${name}</td></tr>
              <tr><td style="padding: 8px 0; color: #8BA3C0;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #3B82F6;">${email}</a></td></tr>
              ${phone ? `<tr><td style="padding: 8px 0; color: #8BA3C0;">Phone</td><td style="padding: 8px 0;">${phone}</td></tr>` : ""}
              <tr><td style="padding: 8px 0; color: #8BA3C0;">Type</td><td style="padding: 8px 0; text-transform: capitalize;">${type}</td></tr>
              <tr><td style="padding: 8px 0; color: #8BA3C0;">Subject</td><td style="padding: 8px 0;">${subject}</td></tr>
            </table>
            <div style="margin-top: 16px; padding: 16px; background: #111827; border-radius: 8px; border-left: 3px solid #3B82F6;">
              <p style="margin: 0; color: #8BA3C0; font-size: 12px; margin-bottom: 8px;">MESSAGE</p>
              <p style="margin: 0; line-height: 1.6;">${message.replace(/\n/g, "<br/>")}</p>
            </div>
            <p style="margin-top: 24px; color: #4B6282; font-size: 12px;">Sent from nikhel-tiwari.vercel.app • ID: ${contact._id}</p>
          </div>
        `,
      });
    } catch (emailErr) {
      // Don't fail the request if email fails — data is already saved
      console.error("Email send failed:", emailErr);
    }

    return NextResponse.json(
      { success: true, message: "Message received! I will get back to you soon." },
      { status: 201 }
    );
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
