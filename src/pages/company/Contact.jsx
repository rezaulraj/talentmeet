import React, { useEffect, useId, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Arrow,
  EMAIL_RE,
  FORM_CSS,
  Field,
  INK,
  LINE,
  MUTED,
  PRIMARY,
  SubmitButton,
  SubmitError,
  SuccessMark,
  postForm,
} from "../../components/forms/formKit";

/* ------------------------------------------------------------------ */
/* Contact — general inquiries (press, partnerships, support…).        */
/* Product interest goes to Talk to Sales instead.                     */
/* Submissions are POSTed as JSON to VITE_CONTACT_ENDPOINT.            */
/* ?reason=careers&role=… pre-fills the form (used by Careers).        */
/* ------------------------------------------------------------------ */

const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT;

const REASONS = [
  { value: "press", label: "Press & media" },
  { value: "partnerships", label: "Partnerships" },
  { value: "support", label: "Customer support" },
  { value: "careers", label: "Careers" },
  { value: "other", label: "Something else" },
];

const validate = (v) => {
  const e = {};
  if (!v.name.trim()) e.name = "Please tell us your name.";
  if (!v.email.trim()) e.email = "We need an email to reply.";
  else if (!EMAIL_RE.test(v.email.trim())) e.email = "That email doesn't look quite right.";
  if (!v.reason) e.reason = "Pick the closest reason.";
  if (!v.message.trim()) e.message = "Add a short message so it reaches the right person.";
  return e;
};

const RouteHint = ({ to, title, body }) => (
  <Link
    to={to}
    className="ts-link flex items-center justify-between gap-4 rounded-xl bg-white px-4 py-3.5 transition-colors hover:border-[#C9C9C4]"
    style={{ border: `1px solid ${LINE}` }}
  >
    <span>
      <span className="block text-[14.5px] font-medium" style={{ color: INK }}>{title}</span>
      <span className="block text-[13px]" style={{ color: MUTED }}>{body}</span>
    </span>
    <span style={{ color: INK }}>
      <Arrow />
    </span>
  </Link>
);

const Contact = () => {
  const [params] = useSearchParams();
  const id = useId();
  const presetReason = REASONS.some((r) => r.value === params.get("reason")) ? params.get("reason") : "";
  const presetRole = params.get("role");

  const empty = {
    name: "",
    email: "",
    reason: presetReason,
    message: presetRole ? `I'd like to apply for the ${presetRole} role.` : "",
  };
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    document.title = "Contact | Talent Meet";
  }, []);

  const set = (k) => (e) => {
    const next = { ...values, [k]: e.target.value };
    setValues(next);
    if (touched[k]) setErrors(validate(next));
  };
  const blur = (k) => () => {
    setTouched((t) => ({ ...t, [k]: true }));
    setErrors(validate(values));
  };
  const err = (k) => (touched[k] ? errors[k] : undefined);
  const inputProps = (k) => ({
    id: `${id}-${k}`,
    value: values[k],
    onChange: set(k),
    onBlur: blur(k),
    "aria-invalid": err(k) ? "true" : "false",
    className: "ts-input",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setTouched({ name: true, email: true, reason: true, message: true });
    if (Object.keys(found).length) {
      document.getElementById(`${id}-${Object.keys(found)[0]}`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      await postForm(CONTACT_ENDPOINT, "Contact", {
        name: values.name.trim(),
        email: values.email.trim(),
        reason: REASONS.find((r) => r.value === values.reason)?.label,
        message: values.message.trim(),
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setValues({ name: "", email: "", reason: "", message: "" });
    setErrors({});
    setTouched({});
    setStatus("idle");
  };

  return (
    <div className="ts-page bg-white">
      <style>{FORM_CSS}</style>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-32 md:pt-48 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <div className="lg:sticky lg:top-40 lg:self-start">
          <p className="ts-in text-[13px] font-medium" style={{ color: MUTED }}>Company / Contact</p>
          <h1
            className="ts-in mt-4 text-[34px] font-medium leading-[1.1] tracking-[-0.03em] sm:text-[44px]"
            style={{ color: INK, animationDelay: "60ms" }}
          >
            Get in touch.
          </h1>
          <p className="ts-in mt-5 text-[17px] leading-relaxed" style={{ color: MUTED, animationDelay: "120ms" }}>
            Press, partnerships, support or anything else &mdash; tell us what
            it&rsquo;s about and it&rsquo;ll reach the right person.
          </p>

          <div className="ts-in mt-8 space-y-2.5" style={{ animationDelay: "180ms" }}>
            <RouteHint to="/contact-sales" title="Interested in a product?" body="Talk to Sales instead" />
            <RouteHint to="/help" title="Need help using a product?" body="Search the Help Center" />
          </div>
        </div>

        <div className="ts-in" style={{ animationDelay: "120ms" }}>
          <div
            className="rounded-2xl bg-white p-6 sm:p-8"
            style={{ border: `1px solid ${LINE}`, boxShadow: "0 40px 80px -48px rgba(3,3,2,0.28)" }}
          >
            {status === "sent" ? (
              <div className="ts-pop flex flex-col items-center py-10 text-center" role="status" aria-live="polite">
                <SuccessMark />
                <h2 className="mt-6 text-[26px] font-medium tracking-[-0.02em]" style={{ color: INK }}>
                  Thanks{values.name ? `, ${values.name.trim().split(" ")[0]}` : ""} — message received.
                </h2>
                <p className="mt-3 max-w-sm text-[15.5px] leading-relaxed" style={{ color: MUTED }}>
                  We&rsquo;ll reply to <span style={{ color: INK }}>{values.email}</span>.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-8 rounded-lg px-5 py-3 text-[14.5px] font-medium"
                  style={{ border: `1px solid ${LINE}`, color: INK }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form noValidate onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" htmlFor={`${id}-name`} error={err("name")}>
                    <input {...inputProps("name")} type="text" autoComplete="name" placeholder="Your name" />
                  </Field>
                  <Field label="Email" htmlFor={`${id}-email`} error={err("email")}>
                    <input {...inputProps("email")} type="email" autoComplete="email" inputMode="email" placeholder="you@example.com" />
                  </Field>
                </div>

                <Field
                  label="Reason for contact"
                  htmlFor={`${id}-reason`}
                  error={err("reason")}
                  hint={
                    values.reason === "support" && (
                      <>
                        Quick answer?{" "}
                        <Link to="/help" className="font-medium underline underline-offset-2" style={{ color: PRIMARY }}>
                          Try the Help Center
                        </Link>{" "}
                        first.
                      </>
                    )
                  }
                >
                  <select {...inputProps("reason")} style={{ color: values.reason ? INK : "rgba(3,3,2,0.38)" }}>
                    <option value="" disabled>
                      Select a reason
                    </option>
                    {REASONS.map((r) => (
                      <option key={r.value} value={r.value} style={{ color: INK }}>
                        {r.label}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Message" htmlFor={`${id}-message`} error={err("message")}>
                  <textarea {...inputProps("message")} rows={6} placeholder="How can we help?" />
                </Field>

                {status === "error" && <SubmitError />}

                <SubmitButton sending={status === "sending"}>Send message</SubmitButton>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
