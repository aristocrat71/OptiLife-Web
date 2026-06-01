import { useState, type FormEvent } from "react";
import Icon from "../components/Icon";
import { FEEDBACK_EMAIL } from "../site";

/**
 * Feedback section. The site is static (no backend), so submitting hands the
 * message off to the visitor's own mail app via a prefilled `mailto:` link
 * addressed to FEEDBACK_EMAIL — it lands straight in the inbox, no server.
 */
export default function Feedback() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const canSend = message.trim().length > 0;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!canSend) return;

    const subject = "OptiLife feedback";
    const body = email.trim()
      ? `${message.trim()}\n\n— ${email.trim()}`
      : message.trim();

    window.location.href =
      `mailto:${FEEDBACK_EMAIL}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
  }

  const fieldClasses =
    "rounded-2xl border-[2.5px] border-ink bg-haze/40 px-4 py-3 font-semibold text-ink " +
    "placeholder:text-ink/35 transition-colors focus:bg-paper focus:outline-none focus:ring-4 focus:ring-purple/25";

  return (
    <section id="feedback" className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
      <div className="rounded-[28px] border-[3px] border-ink bg-paper p-7 text-ink shadow-pop-lg sm:p-9">
        <div className="flex items-center gap-3.5">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-[3px] border-ink bg-yellow text-ink shadow-pop-sm">
            <Icon name="mail" className="h-6 w-6" />
          </span>
          <div>
            <h2 className="text-2xl sm:text-3xl">Got feedback?</h2>
            <p className="mt-0.5 text-sm font-semibold text-ink/55">
              {FEEDBACK_EMAIL}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-bold text-ink/70">Your message</span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              required
              placeholder="What's on your mind?"
              className={`resize-none ${fieldClasses}`}
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-bold text-ink/70">
              Your email{" "}
              <span className="font-semibold text-ink/40">
                (optional, so we can reply)
              </span>
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className={fieldClasses}
            />
          </label>

          <button
            type="submit"
            disabled={!canSend}
            className={
              "mt-1 inline-flex items-center justify-center gap-2 self-start rounded-full border-[3px] border-ink " +
              "bg-purple px-7 py-3.5 font-display text-lg font-semibold text-cream shadow-pop transition-all duration-100 ease-out " +
              "hover:-translate-y-0.5 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none " +
              "disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
            }
          >
            <Icon name="send" className="h-5 w-5" />
            Send feedback
          </button>
        </form>
      </div>
    </section>
  );
}
