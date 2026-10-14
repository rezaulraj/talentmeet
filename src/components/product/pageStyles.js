const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

/* Shared motion + interaction styles for product and solution pages. */
const PAGE_CSS = `
.pd-page { font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif; }

@keyframes pd-in { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
.pd-in { animation: pd-in 700ms ${EASE} both; }

.pd-reveal { opacity: 0; transform: translateY(24px); transition: opacity 800ms ${EASE}, transform 800ms ${EASE}; }
.pd-reveal-media { transform: translateY(36px) scale(0.98); transition-delay: 90ms; }
.pd-reveal.is-in { opacity: 1; transform: none; }

@keyframes pd-swap { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
.pd-swap { animation: pd-swap 450ms ${EASE} both; }

@keyframes pd-timer { from { width: 0; } to { width: 100%; } }
.pd-timer { animation-name: pd-timer; animation-timing-function: linear; animation-fill-mode: both; }

.pd-btn { transition: transform 250ms ${EASE}, box-shadow 250ms ease, border-color 200ms ease, filter 200ms ease; }
.pd-btn:hover { transform: translateY(-2px); filter: brightness(1.06); }
.pd-btn:active { transform: translateY(0) scale(0.98); }

.pd-pill { transition: transform 220ms ${EASE}, box-shadow 220ms ease, filter 200ms ease; }
.pd-pill:hover { transform: translateY(-1px); box-shadow: 0 8px 18px -12px rgba(3,3,2,0.45); filter: brightness(0.98); }

.pd-arrow { transition: transform 250ms ${EASE}; }
.pd-btn:hover .pd-arrow, .pd-link:hover .pd-arrow { transform: translateX(3px); }
.pd-link:hover { text-decoration: underline; text-underline-offset: 5px; text-decoration-thickness: 1px; }

.pd-page a:focus-visible, .pd-page button:focus-visible { outline: 2px solid #030302; outline-offset: 3px; border-radius: 999px; }

@media (prefers-reduced-motion: reduce) {
  .pd-in, .pd-swap, .pd-timer { animation: none !important; }
  .pd-reveal, .pd-reveal-media { opacity: 1; transform: none; transition: none; }
  .pd-btn, .pd-pill, .pd-arrow { transition: none; }
}
`;

export default PAGE_CSS;
