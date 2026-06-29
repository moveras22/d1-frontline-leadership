export type TrainingInquiryPayload = {
  name: string;
  email: string;
  company: string;
  jobTitle: string;
  supervisorCount: string;
  message: string;
  programTitle: string;
  programSlug: string;
};

export type TrainingInquiryRequestBody = Partial<TrainingInquiryPayload>;

export function validateTrainingInquiryBody(
  body: TrainingInquiryRequestBody,
): { data?: TrainingInquiryPayload; error?: string } {
  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const jobTitle = body.jobTitle?.trim() ?? "";
  const supervisorCount = body.supervisorCount?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const programTitle = body.programTitle?.trim() ?? "";
  const programSlug = body.programSlug?.trim() ?? "";

  if (!name) {
    return { error: "Full name is required." };
  }

  if (!email) {
    return { error: "Work email is required." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Please enter a valid work email address." };
  }

  if (!company) {
    return { error: "Company is required." };
  }

  if (!jobTitle) {
    return { error: "Job title is required." };
  }

  if (!supervisorCount) {
    return { error: "Number of supervisors is required." };
  }

  if (!programTitle || !programSlug) {
    return { error: "Training program information is missing." };
  }

  return {
    data: {
      name,
      email,
      company,
      jobTitle,
      supervisorCount,
      message,
      programTitle,
      programSlug,
    },
  };
}
