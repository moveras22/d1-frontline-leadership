import { NextResponse } from "next/server";
import { subscribeToKitForm } from "@/lib/kit";

type SubscribeBody = {
  name?: string;
  email?: string;
};

export async function POST(request: Request) {
  const apiKey = process.env.KIT_API_KEY;
  const formId = process.env.KIT_FORM_ID;

  if (!apiKey || !formId) {
    console.error("Missing KIT_API_KEY or KIT_FORM_ID environment variables.");
    return NextResponse.json(
      { error: "Subscription service is not configured." },
      { status: 500 },
    );
  }

  let body: SubscribeBody;

  try {
    body = (await request.json()) as SubscribeBody;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";

  if (!name) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }

  if (!email) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  try {
    await subscribeToKitForm({
      apiKey,
      formId,
      email,
      name,
      referrer: request.headers.get("referer") ?? undefined,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Subscription failed.";
    console.error("Kit subscription error:", message);
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
