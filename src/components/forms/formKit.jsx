import React from "react";

/* ------------------------------------------------------------------ */
/* Shared form kit — Talk to Sales and Contact use the same fields,    */
/* button, validation and submit behaviour.                            */
/* ------------------------------------------------------------------ */

export const INK = "#030302";
export const LINE = "#E1E1E1";
export const PRIMARY = "#1B4DFF";
export const MUTED = "rgba(3,3,2,0.58)";
export const ERROR = "#C62828";
export const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * POSTs the payload as JSON. When no endpoint is configured (local
 * development), logs a warning and resolves so the UI can be reviewed.
 */
export const postForm = async (endpoint, label, payload) => {
  if (!endpoint) {
    console.warn(`[${label}] no endpoint configured; submission not sent.`, payload);
    await new Promise((r) => setTimeout(r, 900));
    return;
  }
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Request failed (${res.status})`);
};

export const FORM_CSS = `
.ts-page { font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif; }

@keyframes ts-in { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
.ts-in { animation: ts-in 700ms ${EASE} both; }

@keyframes ts-pop { from { opacity: 0; transform: scale(0.92); } to { opacity: 1; transform: none; } }
.ts-pop { animation: ts-pop 320ms ${EASE} both; }

.ts-error { animation: ts-in 260ms ${EASE} both; }

.ts-input {
  width: 100%; height: 48px; padding: 0 14px; border-radius: 8px;
  border: 1px solid ${LINE}; background: #fff; color: ${INK};
  font-size: 15px; outline: none;
  transition: border-color 160ms ease, box-shadow 160ms ease;
}
.ts-input::placeholder { color: rgba(3,3,2,0.38); }
.ts-input:hover { border-color: #CDCDC8; }
.ts-input:focus { border-color: ${PRIMARY}; box-shadow: 0 0 0 4px ${PRIMARY}1F; }
.ts-input[aria-invalid="true"] { border-color: ${ERROR}; }
.ts-input[aria-invalid="true"]:focus { box-shadow: 0 0 0 4px ${ERROR}1A; }
textarea.ts-input { height: auto; min-height: 120px; padding: 12px 14px; line-height: 1.55; resize: vertical; }
select.ts-input {
  appearance: none; cursor: pointer; padding-right: 40px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none'%3E%3Cpath d='m3 4.5 3 3 3-3' stroke='%23030302' stroke-opacity='.55' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat; background-position: right 14px center;
}

.ts-btn { transition: filter 180ms ease, transform 220ms ${EASE}, box-shadow 220ms ease; }
.ts-btn:hover:not(:disabled) { filter: brightness(1.08); box-shadow: 0 14px 28px -14px ${PRIMARY}; }
.ts-btn:active:not(:disabled) { transform: scale(0.99); }
.ts-btn:focus-visible { outline: 2px solid ${INK}; outline-offset: 3px; }
.ts-arrow { transition: transform 240ms ${EASE}; }
.ts-btn:hover .ts-arrow, .ts-link:hover .ts-arrow { transform: translateX(3px); }

@keyframes ts-spin { to { transform: rotate(360deg); } }
.ts-spin { animation: ts-spin 0.8s linear infinite; }

@keyframes ts-ring { to { box-shadow: 0 0 0 18px ${PRIMARY}00; } }
.ts-ring { animation: ts-ring 1.4s ease-out 0.2s 2; }
@keyframes ts-draw { from { stroke-dashoffset: 24; } to { stroke-dashoffset: 0; } }
.ts-draw { stroke-dasharray: 24; animation: ts-draw 520ms ${EASE} 0.15s both; }

@media (prefers-reduced-motion: reduce) {
  .ts-in, .ts-pop, .ts-error, .ts-ring, .ts-draw, .ts-spin { animation: none !important; }
  .ts-draw { stroke-dasharray: none; }
}
`;

export const Arrow = () => (
  <svg className="ts-arrow" viewBox="0 0 16 16" width="15" height="15" fill="none" aria-hidden="true">
    <path d="M3 8h9.5M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Field = ({ label, optional, error, hint, children, htmlFor }) => (
  <div>
    <label htmlFor={htmlFor} className="mb-1.5 flex items-baseline justify-between text-[13.5px] font-medium" style={{ color: INK }}>
      {label}
      {optional && <span className="text-[12px] font-normal" style={{ color: MUTED }}>Optional</span>}
    </label>
    {children}
    {error ? (
      <p role="alert" className="ts-error mt-1.5 text-[12.5px]" style={{ color: ERROR }}>
        {error}
      </p>
    ) : (
      hint && <div className="mt-1.5 text-[12.5px]" style={{ color: MUTED }}>{hint}</div>
    )}
  </div>
);

export const SubmitButton = ({ sending, children }) => (
  <button
    type="submit"
    disabled={sending}
    className="ts-btn inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-lg text-[15.5px] font-semibold text-white disabled:cursor-wait disabled:opacity-80"
    style={{ background: PRIMARY }}
  >
    {sending ? (
      <>
        <svg className="ts-spin" viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity=".3" strokeWidth="2.4" />
          <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
        Sending…
      </>
    ) : (
      <>
        {children}
        <Arrow />
      </>
    )}
  </button>
);

/** Animated check used on success screens. */
export const SuccessMark = () => (
  <span className="relative grid h-16 w-16 place-items-center rounded-full text-white" style={{ background: PRIMARY }}>
    <span className="ts-ring absolute inset-0 rounded-full" style={{ boxShadow: `0 0 0 0 ${PRIMARY}55` }} />
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" aria-hidden="true">
      <path className="ts-draw" d="m5.5 12.5 4.2 4.2 8.8-9.4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

export const SubmitError = () => (
  <p role="alert" className="ts-error rounded-lg px-4 py-3 text-[13.5px]" style={{ background: "#FDECEA", color: ERROR }}>
    Something went wrong sending your message. Please try again in a moment.
  </p>
);
