const KIT_API_BASE = "https://api.kit.com/v4";

type KitErrorResponse = {
  errors?: string[];
};

function kitHeaders(apiKey: string): HeadersInit {
  return {
    "Content-Type": "application/json",
    "X-Kit-Api-Key": apiKey,
  };
}

async function parseKitError(response: Response): Promise<string> {
  const data = (await response.json().catch(() => ({}))) as KitErrorResponse;
  if (Array.isArray(data.errors) && data.errors.length > 0) {
    return data.errors.join(", ");
  }
  return "Unable to subscribe. Please try again.";
}

export async function subscribeToKitForm({
  apiKey,
  formId,
  email,
  name,
  referrer,
}: {
  apiKey: string;
  formId: string;
  email: string;
  name: string;
  referrer?: string;
}): Promise<void> {
  const subscriberResponse = await fetch(`${KIT_API_BASE}/subscribers`, {
    method: "POST",
    headers: kitHeaders(apiKey),
    body: JSON.stringify({
      email_address: email,
      first_name: name,
    }),
  });

  if (!subscriberResponse.ok) {
    throw new Error(await parseKitError(subscriberResponse));
  }

  const formResponse = await fetch(
    `${KIT_API_BASE}/forms/${formId}/subscribers`,
    {
      method: "POST",
      headers: kitHeaders(apiKey),
      body: JSON.stringify({
        email_address: email,
        referrer: referrer ?? undefined,
      }),
    },
  );

  if (!formResponse.ok && ![200, 201].includes(formResponse.status)) {
    throw new Error(await parseKitError(formResponse));
  }
}
