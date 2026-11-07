"use server";

import { Resend } from "resend";

export type ContactService = "dev" | "art";

export interface ContactPayload {
  name: string;
  email: string;
  service: ContactService;
  message: string;
  company?: string;
}

export type ContactResult =
  | { ok: true }
  | { ok: false; error: "invalid" | "config" | "send" };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SERVICE_LABEL: Record<ContactService, string> = {
  dev: "Full Stack Development",
  art: "3D Art",
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function sendContactEmail(
  payload: ContactPayload
): Promise<ContactResult> {
  if (payload.company) return { ok: true };

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const message = payload.message?.trim() ?? "";
  const service: ContactService = payload.service === "art" ? "art" : "dev";

  if (
    name.length < 1 ||
    name.length > 100 ||
    !EMAIL_RE.test(email) ||
    email.length > 200 ||
    message.length < 10 ||
    message.length > 5000
  ) {
    return { ok: false, error: "invalid" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    console.error("Contact form: RESEND_API_KEY or CONTACT_TO_EMAIL is missing");
    return { ok: false, error: "config" };
  }

  const from =
    process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";
  const serviceLabel = SERVICE_LABEL[service];

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `New message from ${name} · ${serviceLabel}`,
    text: `Name: ${name}\nEmail: ${email}\nService: ${serviceLabel}\n\n${message}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:560px;color:#363639">
        <h2 style="margin:0 0 16px">New message from your portfolio</h2>
        <p style="margin:4px 0"><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p style="margin:4px 0"><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p style="margin:4px 0"><strong>Service:</strong> ${serviceLabel}</p>
        <hr style="border:none;border-top:1px solid #e5e5e5;margin:16px 0" />
        <p style="white-space:pre-wrap;line-height:1.6;margin:0">${escapeHtml(message)}</p>
      </div>
    `,
  });

  if (error) {
    console.error("Contact form: Resend error", error);
    return { ok: false, error: "send" };
  }

  return { ok: true };
}
