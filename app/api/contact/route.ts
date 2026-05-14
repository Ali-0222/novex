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

function clean(value?: string) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
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
  const contactTo = CONTACT_TO || "novexpestcontrol@gmail.com";

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
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

  const enquiry = {
    name: clean(body.name),
    email: clean(body.email),
    phone: clean(body.phone),
    service: clean(body.service),
    suburb: clean(body.suburb),
    message: clean(body.message) || "Not provided"
  };
  const htmlMessage = escapeHtml(enquiry.message).replace(/\n/g, "<br />");

  await transporter.sendMail({
    from: CONTACT_FROM || `Novex Pest Control <${SMTP_USER}>`,
    to: contactTo,
    replyTo: enquiry.email,
    subject: `New Novex Pest Control enquiry: ${enquiry.service}`,
    text: [
      "New Novex Pest Control enquiry",
      "",
      `Name: ${enquiry.name}`,
      `Email: ${enquiry.email}`,
      `Phone: ${enquiry.phone}`,
      `Service: ${enquiry.service}`,
      `Suburb: ${enquiry.suburb}`,
      "",
      `Message: ${enquiry.message}`
    ].join("\n"),
    html: `
      <div style="margin:0;padding:24px;background:#f6f7f4;font-family:Arial,sans-serif;color:#1f241f;">
        <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e1e5dc;border-radius:8px;overflow:hidden;">
          <div style="background:#9f1f18;color:#ffffff;padding:22px 24px;">
            <h1 style="margin:0;font-size:22px;line-height:1.3;">New Novex Pest Control enquiry</h1>
            <p style="margin:8px 0 0;font-size:14px;">A customer submitted the website contact form.</p>
          </div>
          <div style="padding:24px;">
            <table style="width:100%;border-collapse:collapse;font-size:15px;">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #edf0e9;font-weight:bold;width:140px;">Name</td>
                <td style="padding:10px 0;border-bottom:1px solid #edf0e9;">${escapeHtml(enquiry.name)}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #edf0e9;font-weight:bold;">Email</td>
                <td style="padding:10px 0;border-bottom:1px solid #edf0e9;"><a href="mailto:${escapeHtml(enquiry.email)}" style="color:#9f1f18;">${escapeHtml(enquiry.email)}</a></td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #edf0e9;font-weight:bold;">Phone</td>
                <td style="padding:10px 0;border-bottom:1px solid #edf0e9;"><a href="tel:${escapeHtml(enquiry.phone)}" style="color:#9f1f18;">${escapeHtml(enquiry.phone)}</a></td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #edf0e9;font-weight:bold;">Service</td>
                <td style="padding:10px 0;border-bottom:1px solid #edf0e9;">${escapeHtml(enquiry.service)}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #edf0e9;font-weight:bold;">Suburb</td>
                <td style="padding:10px 0;border-bottom:1px solid #edf0e9;">${escapeHtml(enquiry.suburb)}</td>
              </tr>
            </table>
            <div style="margin-top:22px;">
              <h2 style="margin:0 0 10px;font-size:16px;">Message</h2>
              <p style="margin:0;padding:14px 16px;background:#f8faf5;border:1px solid #edf0e9;border-radius:6px;line-height:1.6;">${htmlMessage}</p>
            </div>
          </div>
        </div>
      </div>
    `
  });

  return NextResponse.json({ ok: true });
}
