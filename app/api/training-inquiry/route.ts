import { NextResponse } from "next/server";
import { sendTrainingInquiryEmail } from "@/lib/training-inquiry-email";
import {
  validateTrainingInquiryBody,
  type TrainingInquiryRequestBody,
} from "@/lib/training-inquiry";

export async function POST(request: Request) {
  let body: TrainingInquiryRequestBody;

  try {
    body = (await request.json()) as TrainingInquiryRequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { data, error } = validateTrainingInquiryBody(body);

  if (error || !data) {
    return NextResponse.json({ error }, { status: 400 });
  }

  try {
    await sendTrainingInquiryEmail(data);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      {
        error:
          "Unable to send your request right now. Please try again or email us directly.",
      },
      { status: 500 },
    );
  }
}
