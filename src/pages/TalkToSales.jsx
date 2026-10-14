import React, { useEffect, useId, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CLUSTERS, PRODUCTS } from "../data/products";
import { SOLUTIONS } from "../data/solutions";
import {
  EASE,
  EMAIL_RE,
  FORM_CSS,
  INK,
  LINE,
  MUTED,
  PRIMARY,
  Arrow,
  Field,
  SubmitButton,
  SubmitError,
  SuccessMark,
  postForm,
} from "../components/forms/formKit";

/* ------------------------------------------------------------------ */
/* Talk to Sales — the page every "Talk to Sales" CTA routes to.       */
/* Query params pre-fill the form:                                     */
/*   ?product=jobsplus           → JobsPlus pre-selected               */
/*   ?solution=hr                → that solution's products selected   */
/*   ?intent=demo                → message hints at a demo request     */
/* ------------------------------------------------------------------ */

const COMPANY_SIZES = [
  "1–10 employees",
  "11–50 employees",
  "51–200 employees",
  "201–500 employees",
  "501–1,000 employees",
  "1,000+ employees",
];

/* Leads are POSTed as JSON to this endpoint. Set it in .env:
   VITE_SALES_ENDPOINT=https://your-api.example.com/leads */
const SALES_ENDPOINT = import.meta.env.VITE_SALES_ENDPOINT;

const submitLead = (payload) => postForm(SALES_ENDPOINT, "TalkToSales", payload);


const initialProducts = (params) => {
  const product = params.get("product");
  const solution = params.get("solution");
  if (product && PRODUCTS[product]) return [product];
  if (solution && SOLUTIONS[solution]) return [...SOLUTIONS[solution].products];
  return [];
};

const validate = (v) => {
  const e = {};
  if (!v.name.trim()) e.name = "Please tell us your name.";
  if (!v.email.trim()) e.email = "We need a work email to reply.";
  else if (!EMAIL_RE.test(v.email.trim())) e.email = "That email doesn't look quite right.";
  if (!v.company.trim()) e.company = "Which company are you with?";
  if (!v.size) e.size = "Pick the closest size.";
  return e;
};

/* ------------------------------------------------------------------ */
/* Small UI pieces                                                     */
/* ------------------------------------------------------------------ */

const CheckGlyph = ({ size = 10 }) => (
  <svg viewBox="0 0 12 12" width={size} height={size} fill="none" aria-hidden="true">
    <path d="m2.5 6.2 2.2 2.2 4.8-5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ------------------------------------------------------------------ */
/* Left column — live "your shortlist" summary                         */
/* ------------------------------------------------------------------ */

const Shortlist = ({ selected, unsure, onRemove }) => {
  const byCluster = CLUSTERS.map((c) => ({
    cluster: c,
    items: c.products.filter((s) => selected.includes(s)),
  })).filter((g) => g.items.length);

  return (
    <div
      className="relative mt-10 overflow-hidden rounded-2xl p-5"
      style={{ background: "#F7F7F5", border: `1px solid ${LINE}` }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: "radial-gradient(rgba(3,3,2,0.09) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
          maskImage: "linear-gradient(to bottom, #000, transparent 90%)",
          WebkitMaskImage: "linear-gradient(to bottom, #000, transparent 90%)",
        }}
      />
      <div className="relative">
        <div className="flex items-center justify-between">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em]" style={{ color: MUTED }}>
            Your shortlist
          </p>
          <span
            className="rounded-full px-2 py-0.5 text-[11.5px] font-semibold tabular-nums"
            style={{
              background: selected.length ? PRIMARY : "#EAEAE6",
              color: selected.length ? "#fff" : MUTED,
              transition: "background-color 200ms ease",
            }}
          >
            {selected.length} / 10
          </span>
        </div>

        {byCluster.length === 0 ? (
          <p className="mt-4 text-[14px] leading-relaxed" style={{ color: MUTED }}>
            {unsure
              ? "No problem — we'll help you figure out where to start."
              : "Pick the products you're curious about and they'll collect here."}
          </p>
        ) : (
          <div className="mt-4 space-y-3">
            {byCluster.map(({ cluster, items }) => (
              <div key={cluster.id}>
                <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: cluster.accent }}>
                  {cluster.name}
                </p>
                <ul className="flex flex-wrap gap-1.5">
                  {items.map((slug) => {
                    const p = PRODUCTS[slug];
                    return (
                      <li key={slug} className="ts-pop">
                        <button
                          type="button"
                          onClick={() => onRemove(slug)}
                          className="ts-chip-remove inline-flex items-center gap-1.5 rounded-full bg-white py-1 pl-1 pr-2.5 text-[13px] font-medium"
                          style={{ border: `1px solid ${LINE}`, color: INK }}
                          aria-label={`Remove ${p.name}`}
                        >
                          <span
                            className="grid h-6 w-6 place-items-center rounded-full text-white"
                            style={{ background: cluster.accent }}
                          >
                            <p.Icon size={13} />
                          </span>
                          {p.name}
                          <svg viewBox="0 0 12 12" width="9" height="9" fill="none" aria-hidden="true" className="ml-0.5 opacity-40">
                            <path d="m3 3 6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                          </svg>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
            {unsure && (
              <p className="text-[13px]" style={{ color: MUTED }}>
                + help choosing the rest
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Product multi-select                                                */
/* ------------------------------------------------------------------ */

const ProductPicker = ({ selected, onToggle, unsure, onToggleUnsure, labelId }) => (
  <div role="group" aria-labelledby={labelId} className="space-y-4">
    {CLUSTERS.map((cluster) => (
      <div key={cluster.id}>
        <p className="mb-2 text-[11.5px] font-semibold uppercase tracking-[0.12em]" style={{ color: MUTED }}>
          {cluster.name}
        </p>
        <div className="grid grid-cols-1 gap-2 min-[480px]:grid-cols-2">
          {cluster.products.map((slug) => {
            const p = PRODUCTS[slug];
            const on = selected.includes(slug);
            return (
              <button
                key={slug}
                type="button"
                role="checkbox"
                aria-checked={on}
                onClick={() => onToggle(slug)}
                className="ts-option flex items-center gap-2.5 rounded-lg bg-white px-3 py-2.5 text-left"
                data-on={on}
              >
                <span
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-md"
                  style={{
                    background: on ? cluster.soft : "#F3F3F1",
                    color: on ? cluster.accent : INK,
                    transition: "background-color 200ms ease, color 200ms ease",
                  }}
                >
                  <p.Icon size={15} />
                </span>
                <span className="min-w-0 flex-1 truncate text-[13.5px] font-medium" style={{ color: INK }}>
                  {p.name}
                </span>
                <span
                  className="grid h-[18px] w-[18px] shrink-0 place-items-center rounded-[5px] text-white"
                  style={{
                    background: on ? PRIMARY : "#fff",
                    border: `1.5px solid ${on ? PRIMARY : "#CFCFCB"}`,
                    transition: "background-color 160ms ease, border-color 160ms ease",
                  }}
                >
                  {on && <CheckGlyph />}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    ))}

    <button
      type="button"
      role="checkbox"
      aria-checked={unsure}
      onClick={onToggleUnsure}
      className="ts-option flex w-full items-center gap-2.5 rounded-lg bg-white px-3 py-2.5 text-left"
      data-on={unsure}
    >
      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md text-[14px] font-semibold" style={{ background: "#F3F3F1", color: INK }}>
        ?
      </span>
      <span className="flex-1 text-[13.5px] font-medium" style={{ color: INK }}>
        Not sure yet — help me choose
      </span>
      <span
        className="grid h-[18px] w-[18px] shrink-0 place-items-center rounded-[5px] text-white"
        style={{ background: unsure ? PRIMARY : "#fff", border: `1.5px solid ${unsure ? PRIMARY : "#CFCFCB"}` }}
      >
        {unsure && <CheckGlyph />}
      </span>
    </button>
  </div>
);

/* ------------------------------------------------------------------ */
/* Success state                                                       */
/* ------------------------------------------------------------------ */

const Success = ({ name, email, onReset }) => (
  <div className="ts-pop flex flex-col items-center py-10 text-center" role="status" aria-live="polite">
    <SuccessMark />
    <h2 className="mt-6 text-[26px] font-medium tracking-[-0.02em]" style={{ color: INK }}>
      Thanks{name ? `, ${name.split(" ")[0]}` : ""} — it&rsquo;s with our team.
    </h2>
    <p className="mt-3 max-w-sm text-[15.5px] leading-relaxed" style={{ color: MUTED }}>
      We&rsquo;ll reply to <span style={{ color: INK }}>{email}</span> within one business day.
    </p>
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <Link
        to="/"
        className="ts-btn inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-[14.5px] font-semibold text-white"
        style={{ background: PRIMARY }}
      >
        Back to home
        <Arrow />
      </Link>
      <button
        type="button"
        onClick={onReset}
        className="rounded-lg px-5 py-3 text-[14.5px] font-medium"
        style={{ border: `1px solid ${LINE}`, color: INK }}
      >
        Send another message
      </button>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

const PAGE_CSS = `${FORM_CSS}
.ts-option { border: 1px solid ${LINE}; transition: border-color 160ms ease, box-shadow 160ms ease, transform 200ms ${EASE}; }
.ts-option:hover { border-color: #CDCDC8; }
.ts-option[data-on="true"] { border-color: ${PRIMARY}; box-shadow: 0 0 0 3px ${PRIMARY}14; }
.ts-option:active { transform: scale(0.98); }
.ts-option:focus-visible { outline: none; border-color: ${PRIMARY}; box-shadow: 0 0 0 4px ${PRIMARY}26; }

.ts-chip-remove { transition: border-color 160ms ease, transform 200ms ${EASE}; }
.ts-chip-remove:hover { border-color: #BDBDB8; }
`;

const TalkToSales = () => {
  const [params] = useSearchParams();
  const id = useId();
  const intent = params.get("intent");
  const sourceProduct = PRODUCTS[params.get("product")];

  const [values, setValues] = useState({ name: "", email: "", company: "", size: "", message: "" });
  const [products, setProducts] = useState(() => initialProducts(params));
  const [unsure, setUnsure] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  useEffect(() => {
    document.title = "Talk to Sales | Talent Meet";
  }, []);

  const messagePlaceholder = useMemo(() => {
    if (intent === "demo" && sourceProduct)
      return `e.g. We'd like a walkthrough of ${sourceProduct.name} for our team…`;
    return "Anything that would help us prepare — your current tools, timeline, or what's not working.";
  }, [intent, sourceProduct]);

  const set = (key) => (e) => {
    const next = { ...values, [key]: e.target.value };
    setValues(next);
    if (touched[key]) setErrors(validate(next));
  };
  const blur = (key) => () => {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors(validate(values));
  };

  const toggleProduct = (slug) =>
    setProducts((list) => (list.includes(slug) ? list.filter((s) => s !== slug) : [...list, slug]));

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setTouched({ name: true, email: true, company: true, size: true });
    if (Object.keys(found).length) {
      document.getElementById(`${id}-${Object.keys(found)[0]}`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      await submitLead({
        ...values,
        name: values.name.trim(),
        email: values.email.trim(),
        company: values.company.trim(),
        products: products.map((s) => PRODUCTS[s].name),
        helpChoosing: unsure,
        source: Object.fromEntries(params.entries()),
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setValues({ name: "", email: "", company: "", size: "", message: "" });
    setProducts([]);
    setUnsure(false);
    setErrors({});
    setTouched({});
    setStatus("idle");
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

  return (
    <div className="ts-page relative bg-white">
      <style>{PAGE_CSS}</style>

      {/* soft brand wash behind the form */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[720px]"
        style={{
          background: `radial-gradient(40% 50% at 78% 22%, ${PRIMARY}12, transparent 70%), radial-gradient(30% 40% at 10% 10%, #E2583E0D, transparent 70%)`,
        }}
      />

      <section className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-32 md:pt-48 lg:grid-cols-[2fr_3fr] lg:gap-16">
        {/* Left — 40% */}
        <div className="lg:sticky lg:top-40 lg:self-start">
          <p className="ts-in inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.16em]" style={{ color: PRIMARY }}>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" style={{ background: PRIMARY }} />
              <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: PRIMARY }} />
            </span>
            Talk to Sales
          </p>

          <h1
            className="ts-in mt-5 text-[36px] font-medium leading-[1.1] tracking-[-0.03em] sm:text-[44px]"
            style={{ color: INK, animationDelay: "60ms" }}
          >
            Let&rsquo;s find the right setup for your company.
          </h1>

          <p className="ts-in mt-5 text-[17px] leading-relaxed" style={{ color: MUTED, animationDelay: "120ms" }}>
            Tell us a bit about your team and which products you&rsquo;re
            interested in &mdash; we&rsquo;ll get back to you with next steps,
            not a sales script.
          </p>

          <p className="ts-in mt-6 flex items-center gap-2.5 text-[15px] font-medium" style={{ color: INK, animationDelay: "180ms" }}>
            <span className="grid h-7 w-7 place-items-center rounded-full" style={{ background: `${PRIMARY}14`, color: PRIMARY }}>
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="6.2" stroke="currentColor" strokeWidth="1.4" />
                <path d="M8 4.8V8l2.2 1.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </span>
            We reply within one business day.
          </p>

          <div className="ts-in hidden lg:block" style={{ animationDelay: "240ms" }}>
            <Shortlist selected={products} unsure={unsure} onRemove={toggleProduct} />
          </div>
        </div>

        {/* Right — 60% */}
        <div className="ts-in" style={{ animationDelay: "120ms" }}>
          <div
            className="rounded-2xl bg-white p-6 sm:p-8"
            style={{ border: `1px solid ${LINE}`, boxShadow: "0 40px 80px -48px rgba(3,3,2,0.28)" }}
          >
            {status === "sent" ? (
              <Success name={values.name} email={values.email} onReset={reset} />
            ) : (
              <form noValidate onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" htmlFor={`${id}-name`} error={err("name")}>
                    <input {...inputProps("name")} type="text" autoComplete="name" placeholder="Nusrat Jahan" />
                  </Field>
                  <Field label="Work email" htmlFor={`${id}-email`} error={err("email")}>
                    <input {...inputProps("email")} type="email" autoComplete="email" inputMode="email" placeholder="you@company.com" />
                  </Field>
                  <Field label="Company" htmlFor={`${id}-company`} error={err("company")}>
                    <input {...inputProps("company")} type="text" autoComplete="organization" placeholder="Company name" />
                  </Field>
                  <Field label="Company size" htmlFor={`${id}-size`} error={err("size")}>
                    <select {...inputProps("size")} style={{ color: values.size ? INK : "rgba(3,3,2,0.38)" }}>
                      <option value="" disabled>
                        Select size
                      </option>
                      {COMPANY_SIZES.map((s) => (
                        <option key={s} value={s} style={{ color: INK }}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <div>
                  <div className="mb-3 flex items-baseline justify-between">
                    <p id={`${id}-products`} className="text-[13.5px] font-medium" style={{ color: INK }}>
                      Products interested in
                    </p>
                    {products.length > 0 && (
                      <button
                        type="button"
                        onClick={() => setProducts([])}
                        className="text-[12.5px] font-medium underline-offset-4 hover:underline"
                        style={{ color: MUTED }}
                      >
                        Clear
                      </button>
                    )}
                  </div>
                  <ProductPicker
                    labelId={`${id}-products`}
                    selected={products}
                    onToggle={toggleProduct}
                    unsure={unsure}
                    onToggleUnsure={() => setUnsure((u) => !u)}
                  />
                </div>

                <Field label="Message" optional htmlFor={`${id}-message`}>
                  <textarea {...inputProps("message")} rows={4} placeholder={messagePlaceholder} />
                </Field>

                {status === "error" && <SubmitError />}

                <div className="pt-1">
                  <SubmitButton sending={status === "sending"}>Send to our team</SubmitButton>
                  <p className="mt-4 text-center text-[13.5px]" style={{ color: MUTED }}>
                    No obligation. No auto-enrollment. Just a conversation.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TalkToSales;
