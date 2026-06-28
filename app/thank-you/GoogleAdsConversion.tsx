"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const CONVERSION_SEND_TO = "AW-18281766130/qKO6CL31i8ccEPK5to1E";

export default function GoogleAdsConversion() {
  const hasFired = useRef(false);

  useEffect(() => {
    if (hasFired.current) {
      return;
    }

    function fireConversion(): boolean {
      if (typeof window.gtag !== "function") {
        return false;
      }

      window.gtag("event", "conversion", {
        send_to: CONVERSION_SEND_TO,
        value: 1.0,
        currency: "USD",
      });
      hasFired.current = true;
      return true;
    }

    if (fireConversion()) {
      return;
    }

    let attempts = 0;
    const intervalId = window.setInterval(() => {
      attempts += 1;
      if (fireConversion() || attempts >= 50) {
        window.clearInterval(intervalId);
      }
    }, 100);

    return () => window.clearInterval(intervalId);
  }, []);

  return null;
}
