import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  suburb?: string;
  message?: string;
};

function required(value?: string) {
  return typeof value === "string" && value.trim().length > 1;
}

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;

  if (
    !required(body.name) ||
    !required(body.email) ||
    !required(body.phone) ||
    !required(body.service) ||
    !required(body.suburb)
  ) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, CONTACT_TO, CONTACT_FROM } =
    process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO) {
    return NextResponse.json({ error: "SMTP is not configured" }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === "true",
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS
    }
  });

  await transporter.sendMail({
    from: CONTACT_FROM || SMTP_USER,
    to: CONTACT_TO,
    replyTo: body.email,
    subject: `New Novex Pest Control enquiry: ${body.service}`,
    text: [
      `Name: ${body.name}`,
      `Email: ${body.email}`,
      `Phone: ${body.phone}`,
      `Service: ${body.service}`,
      `Suburb: ${body.suburb}`,
      "",
      body.message ? `Message: ${body.message}` : "Message: Not provided"
    ].join("\n"),
    html: `
      <h2>New Novex Pest Control enquiry</h2>
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Phone:</strong> ${body.phone}</p>
      <p><strong>Service:</strong> ${body.service}</p>
      <p><strong>Suburb:</strong> ${body.suburb}</p>
      <p><strong>Message:</strong><br />${body.message || "Not provided"}</p>
    `
  });

  return NextResponse.json({ ok: true });
}
