"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import {
  getBotResponse,
  LEAD_CAPTURE_PROMPT,
  QUICK_REPLIES,
  WELCOME_MESSAGE,
  type ChatLink,
} from "@/lib/chatbot-responses";

type ChatMessage = {
  id: string;
  role: "bot" | "user";
  text: string;
  links?: ChatLink[];
};

function createMessage(
  role: ChatMessage["role"],
  text: string,
  links?: ChatLink[],
): ChatMessage {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    role,
    text,
    links,
  };
}

const SESSION_DISMISSED_KEY = "d1-chat-auto-dismissed";
const SESSION_AUTO_SHOWN_KEY = "d1-chat-auto-shown";
const AUTO_OPEN_DELAY_MS = 2000;
const PANEL_ANIMATION_MS = 275;

export default function D1Chatbot() {
  const panelId = useId();
  const inputId = useId();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const autoOpenTimerRef = useRef<number | null>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [userMessageCount, setUserMessageCount] = useState(0);
  const [leadCaptureShown, setLeadCaptureShown] = useState(false);
  const [leadEmail, setLeadEmail] = useState("");
  const [leadStatus, setLeadStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [leadError, setLeadError] = useState("");
  const [hasWelcomed, setHasWelcomed] = useState(false);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const closeChat = useCallback(() => {
    setIsOpen(false);
    sessionStorage.setItem(SESSION_DISMISSED_KEY, "true");
    window.requestAnimationFrame(() => {
      toggleButtonRef.current?.focus();
    });
  }, []);

  const openChat = useCallback(() => {
    setIsOpen(true);
  }, []);

  useEffect(() => {
    if (
      sessionStorage.getItem(SESSION_DISMISSED_KEY) ||
      sessionStorage.getItem(SESSION_AUTO_SHOWN_KEY)
    ) {
      return;
    }

    autoOpenTimerRef.current = window.setTimeout(() => {
      sessionStorage.setItem(SESSION_AUTO_SHOWN_KEY, "true");
      setIsOpen(true);
    }, AUTO_OPEN_DELAY_MS);

    return () => {
      if (autoOpenTimerRef.current !== null) {
        window.clearTimeout(autoOpenTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, leadCaptureShown, scrollToBottom]);

  useEffect(() => {
    if (isOpen && !hasWelcomed) {
      setMessages([createMessage("bot", WELCOME_MESSAGE)]);
      setHasWelcomed(true);
    }
  }, [isOpen, hasWelcomed]);

  useEffect(() => {
    if (isOpen) {
      panelRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    function handleEscape(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") {
        closeChat();
      }
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, closeChat]);

  const handleUserMessage = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed) return;

      const response = getBotResponse(trimmed);
      const nextUserCount = userMessageCount + 1;

      setMessages((current) => [
        ...current,
        createMessage("user", trimmed),
        createMessage("bot", response.text, response.links),
      ]);
      setUserMessageCount(nextUserCount);
      setInputValue("");

      if (nextUserCount >= 3 && !leadCaptureShown) {
        setLeadCaptureShown(true);
        window.setTimeout(() => {
          setMessages((current) => [
            ...current,
            createMessage("bot", LEAD_CAPTURE_PROMPT),
          ]);
        }, 400);
      }
    },
    [leadCaptureShown, userMessageCount],
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    handleUserMessage(inputValue);
  }

  function handleQuickReply(reply: string) {
    handleUserMessage(reply);
  }

  function handleInputKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleUserMessage(inputValue);
    }
  }

  async function handleLeadSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLeadError("");

    const email = leadEmail.trim();
    if (!email) {
      setLeadError("Email is required.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setLeadError("Please enter a valid email address.");
      return;
    }

    setLeadStatus("submitting");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Chat Visitor",
          email,
        }),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        setLeadError(result.error ?? "Unable to subscribe right now.");
        setLeadStatus("error");
        return;
      }

      setLeadStatus("success");
      setMessages((current) => [
        ...current,
        createMessage(
          "bot",
          "You're all set. Check your inbox for the free D1 leadership resources download link.",
          [{ label: "Download the Framework", href: "/free-framework" }],
        ),
      ]);
    } catch {
      setLeadError("Something went wrong. Please try again.");
      setLeadStatus("error");
    }
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-end p-4 sm:inset-x-auto sm:bottom-4 sm:right-4 sm:p-0">
      <div
        className={`pointer-events-auto flex flex-col items-end gap-3 transition-all ease-out ${
          isOpen
            ? "w-[88vw] max-w-[380px] sm:w-full"
            : "w-auto"
        }`}
        style={{ transitionDuration: `${PANEL_ANIMATION_MS}ms` }}
      >
        <div
          ref={panelRef}
          id={panelId}
          role="dialog"
          aria-label="D1 Leadership Assistant"
          aria-hidden={!isOpen}
          tabIndex={-1}
          className={`origin-bottom-right overflow-hidden rounded-sm border border-white/10 bg-navy-900 shadow-2xl shadow-black/50 transition-all ease-out ${
            isOpen
              ? "max-h-[min(75vh,560px)] w-full translate-y-0 opacity-100"
              : "pointer-events-none max-h-0 w-full translate-y-3 opacity-0"
          }`}
          style={{ transitionDuration: `${PANEL_ANIMATION_MS}ms` }}
        >
          <div className="flex items-center justify-between border-b border-white/10 bg-navy-950/80 px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-sm border border-gold-500/40 bg-navy-800 font-display text-xs font-bold text-gold-400">
                D1
              </span>
              <div>
                <p className="text-sm font-semibold text-white/90">
                  D1 Leadership Assistant
                </p>
                <p className="text-xs text-white/45">Online now</p>
              </div>
            </div>
            <button
              type="button"
              onClick={closeChat}
              aria-label="Close chat"
              className="rounded-sm p-2 text-white/50 transition-colors hover:bg-white/5 hover:text-gold-400"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex max-h-[min(56vh,420px)] flex-col">
            <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[88%] rounded-sm px-3.5 py-2.5 text-sm leading-relaxed ${
                      message.role === "user"
                        ? "bg-gold-500/15 text-white/90"
                        : "border border-white/8 bg-navy-800/80 text-white/75"
                    }`}
                  >
                    <p className="whitespace-pre-line">{message.text}</p>
                    {message.links && message.links.length > 0 && (
                      <ul className="mt-3 space-y-2">
                        {message.links.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              onClick={closeChat}
                              className="inline-flex text-xs font-semibold uppercase tracking-wider text-gold-400 transition-colors hover:text-gold-300"
                            >
                              {link.label} →
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}

              {leadCaptureShown && leadStatus !== "success" && (
                <form
                  onSubmit={handleLeadSubmit}
                  className="rounded-sm border border-gold-500/20 bg-gold-500/5 p-3"
                >
                  <label
                    htmlFor={`${inputId}-lead`}
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/50"
                  >
                    Email address
                  </label>
                  <input
                    id={`${inputId}-lead`}
                    type="email"
                    value={leadEmail}
                    onChange={(event) => setLeadEmail(event.target.value)}
                    placeholder="you@company.com"
                    disabled={leadStatus === "submitting"}
                    className="w-full rounded-sm border border-white/10 bg-navy-950/60 px-3 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-gold-500/50"
                  />
                  {leadError && (
                    <p className="mt-2 text-xs text-red-400">{leadError}</p>
                  )}
                  <button
                    type="submit"
                    disabled={leadStatus === "submitting"}
                    className="mt-3 w-full rounded-sm bg-gold-500 py-2.5 text-xs font-semibold uppercase tracking-wider text-navy-950 transition-all hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {leadStatus === "submitting"
                      ? "Sending..."
                      : "Send Free Resources"}
                  </button>
                </form>
              )}

              <div ref={messagesEndRef} />
            </div>

            {!leadCaptureShown && messages.length <= 1 && (
              <div className="border-t border-white/8 px-4 py-3">
                <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-wider text-white/40">
                  Quick replies
                </p>
                <div className="flex flex-wrap gap-2">
                  {QUICK_REPLIES.map((reply) => (
                    <button
                      key={reply}
                      type="button"
                      onClick={() => handleQuickReply(reply)}
                      className="rounded-full border border-white/10 bg-navy-800/80 px-3 py-1.5 text-left text-xs text-white/70 transition-colors hover:border-gold-500/30 hover:text-gold-400"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 border-t border-white/10 bg-navy-950/60 px-3 py-3"
            >
              <label htmlFor={inputId} className="sr-only">
                Type your question
              </label>
              <input
                ref={inputRef}
                id={inputId}
                type="text"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                onKeyDown={handleInputKeyDown}
                placeholder="Type your question..."
                autoComplete="off"
                className="min-w-0 flex-1 rounded-sm border border-white/10 bg-navy-900/80 px-3 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-gold-500/50"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-gold-500 text-navy-950 transition-all hover:bg-gold-400"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12 3.269 3.125A59.768 59.768 0 0 1 21.485 6 59.77 59.77 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <button
          ref={toggleButtonRef}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => {
            if (isOpen) {
              closeChat();
              return;
            }

            if (autoOpenTimerRef.current !== null) {
              window.clearTimeout(autoOpenTimerRef.current);
              autoOpenTimerRef.current = null;
            }

            sessionStorage.setItem(SESSION_AUTO_SHOWN_KEY, "true");
            openChat();
          }}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-gold-500/40 bg-navy-900 text-gold-400 shadow-lg shadow-black/30 transition-all hover:scale-105 hover:border-gold-500/60 hover:bg-navy-800 hover:text-gold-300"
        >
          {isOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25 12 15.75 4.5 8.25"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.75}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm3.75 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm3.75 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM8.625 12.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm3.75 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm3.75 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM8.625 15.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm3.75 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm3.75 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.375 17.25h17.25M3.375 17.25c-.621 0-1.125-.504-1.125-1.125V6.375c0-.621.504-1.125 1.125-1.125h17.25c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125H3.375Z"
              />
            </svg>
          )}
          <span className="sr-only">
            {isOpen ? "Close chat assistant" : "Open chat assistant"}
          </span>
        </button>
      </div>
    </div>
  );
}
