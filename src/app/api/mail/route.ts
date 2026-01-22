import { transporter } from "@/utils/mailer";
import { getUserEmailHtml } from "@/utils/mailTemplate";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    await transporter.sendMail({
      from: `WhereSit Notification <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_SEND_TO,
      subject: "New Early Access Request",
      html: getUserEmailHtml(email),
      replyTo: email,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
