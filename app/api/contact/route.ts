import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/contact-email";
import {
  isValidContactSubject,
  type ContactFormPayload,
} from "@/lib/contact";

type ContactRequestBody = Partial<ContactFormPayload>;

function validateContactBody(body: ContactRequestBody): {
  data?: ContactFormPayload;
  error?: string;
} {
  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const jobTitle = body.jobTitle?.trim() ?? "";
  const subject = body.subject ?? "";
  const message = body.message?.trim() ?? "";

  if (!name) {
    return { error: "Full name is required." };
  }

  if (!email) {
    return { error: "Work email is required." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Please enter a valid work email address." };
  }

  if (!subject || !isValidContactSubject(subject)) {
    return { error: "Please select a subject." };
  }

  if (!message) {
    return { error: "Message is required." };
  }

  return {
    data: {
      name,
      email,
      company,
      jobTitle,
      subject,
      message,
    },
  };
}

export async function POST(request: Request) {
  let body: ContactRequestBody;

  try {
    body = (await request.json()) as ContactRequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { data, error } = validateContactBody(body);

  if (error || !data) {
    return NextResponse.json({ error }, { status: 400 });
  }

  try {
    await sendContactEmail(data);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to send your message right now. Please try again or email us directly." },
      { status: 500 },
    );
  }
}
