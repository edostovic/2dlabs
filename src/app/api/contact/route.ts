import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/contact
 *
 * Accepts contact form submissions and logs them.
 * To send real email, integrate with:
 *   - Resend (resend.com):    POST https://api.resend.com/emails
 *   - SendGrid:               POST https://api.sendgrid.com/v3/mail/send
 *   - SMTP via nodemailer
 *
 * For now, this endpoint accepts requests, validates them,
 * and logs the data. In production, wire up a real email
 * service using the environment variables below.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (typeof name !== "string" || typeof email !== "string") {
      return NextResponse.json(
        { error: "Invalid field types" },
        { status: 400 }
      );
    }

    // Log the submission (replace with email service in production)
    console.log("[Contact Form Submission]", {
      name,
      email,
      subject: subject.slice(0, 200),
      message: message.slice(0, 2000),
      timestamp: new Date().toISOString(),
    });

    /*
     * 🔌 WIRE UP REAL EMAIL:
     *
     * Example with Resend:
     *
     *   import { Resend } from "resend";
     *   const resend = new Resend(process.env.RESEND_API_KEY);
     *
     *   await resend.emails.send({
     *     from: "2DLabs Contact <contact@2dlabs.vercel.app>",
     *     to: "hello@2dlabs.com",
     *     replyTo: email,
     *     subject: `[2DLabs Contact] ${subject}`,
     *     text: `From: ${name} <${email}>\n\n${message}`,
     *   });
     */

    return NextResponse.json({
      success: true,
      message: "Message received! We'll get back to you soon.",
    });
  } catch (error) {
    console.error("[Contact Form Error]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
