export type AnalyticsEventParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  eventName: string,
  params?: AnalyticsEventParams,
): void {
  if (typeof window === "undefined" || !window.gtag) {
    return;
  }

  window.gtag("event", eventName, params);
}

export function trackLeadConversion(): void {
  trackEvent("generate_lead", {
    form_name: "early_access",
    currency: "USD",
    value: 1,
  });

  if (typeof window !== "undefined" && window.clarity) {
    window.clarity("set", "early_access_signup", "true");
    window.clarity("event", "early_access_signup");
  }
}
