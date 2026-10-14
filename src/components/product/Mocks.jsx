import React, { createContext, useContext } from "react";

/* ------------------------------------------------------------------ */
/* Realistic product UI mocks                                          */
/* Every feature highlight renders one of these, driven by the `mock`  */
/* object in data/products.jsx. All share one window frame so the 40   */
/* screens read as a single product family.                            */
/* ------------------------------------------------------------------ */

const INK = "#030302";
const LINE = "#E1E1E1";
const MUTED = "rgba(3,3,2,0.55)";

const AccentCtx = createContext({ accent: INK, soft: "#F1F1F1" });
const BareCtx = createContext(false);
const useAccent = () => useContext(AccentCtx);

const TONES = {
  ok: { bg: "#E5F4EC", fg: "#17744A" },
  warn: { bg: "#FDF1DC", fg: "#995B00" },
  bad: { bg: "#FDE7E5", fg: "#B3261E" },
  muted: { bg: "#F1F1F1", fg: "#55554F" },
  info: { bg: "#EEF1F6", fg: "#3E4A5C" },
};

const AVATAR_BG = ["#F6DCD2", "#D7E7F4", "#E3DCF3", "#D6EEDF", "#F4E6C6", "#F0D9E6"];

const initials = (name = "") =>
  name
    .replace(/[^A-Za-z ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

const hash = (s = "") => [...s].reduce((a, c) => a + c.charCodeAt(0), 0);

const Avatar = ({ name, size = 26 }) => (
  <span
    aria-hidden="true"
    className="grid shrink-0 place-items-center rounded-full font-semibold"
    style={{
      width: size,
      height: size,
      fontSize: size * 0.38,
      background: AVATAR_BG[hash(name) % AVATAR_BG.length],
      color: INK,
    }}
  >
    {initials(name) || "•"}
  </span>
);

const Pill = ({ children, tone = "muted" }) => {
  const { accent, soft } = useAccent();
  const t = tone === "accent" ? { bg: soft, fg: accent } : TONES[tone] || TONES.muted;
  return (
    <span
      className="inline-flex items-center whitespace-nowrap rounded-full px-2 py-0.5 text-[11px] font-medium"
      style={{ background: t.bg, color: t.fg }}
    >
      {children}
    </span>
  );
};

const Dot = ({ tone = "muted" }) => {
  const { accent } = useAccent();
  const color = tone === "accent" ? accent : (TONES[tone] || TONES.muted).fg;
  return (
    <span
      aria-hidden="true"
      className="inline-block h-2 w-2 shrink-0 rounded-full"
      style={{ background: color }}
    />
  );
};

const Check = ({ on }) => {
  const { accent } = useAccent();
  return (
    <span
      aria-hidden="true"
      className="grid h-4 w-4 shrink-0 place-items-center rounded-[5px]"
      style={{
        background: on ? accent : "#FFFFFF",
        border: `1.5px solid ${on ? accent : "#CFCFCB"}`,
      }}
    >
      {on && (
        <svg viewBox="0 0 12 12" width="10" height="10" fill="none">
          <path d="m2.5 6.2 2.2 2.2 4.8-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </span>
  );
};

const Toggle = ({ on }) => {
  const { accent } = useAccent();
  return (
    <span
      aria-hidden="true"
      className="relative inline-block h-[18px] w-8 shrink-0 rounded-full"
      style={{ background: on ? accent : "#D6D6D2" }}
    >
      <span
        className="absolute top-[2px] h-[14px] w-[14px] rounded-full bg-white shadow-sm"
        style={{ left: on ? 16 : 2 }}
      />
    </span>
  );
};

/* ------------------------------------------------------------------ */
/* Window frame                                                        */
/* ------------------------------------------------------------------ */

const Frame = ({ title, caption, children }) => {
  const bare = useContext(BareCtx);

  const header = (
    <div className="flex items-center justify-between gap-3 px-4 pb-3 pt-4">
      <p className="truncate text-[13px] font-semibold" style={{ color: INK }}>
        {title}
      </p>
      {caption && (
        <p className="hidden shrink-0 text-[11.5px] sm:block" style={{ color: MUTED }}>
          {caption}
        </p>
      )}
    </div>
  );

  if (bare) {
    return (
      <div className="flex h-full flex-col">
        {header}
        <div className="min-h-0 flex-1 px-4 pb-4">{children}</div>
      </div>
    );
  }

  return (
    <div
      className="overflow-hidden rounded-2xl bg-white"
      style={{
        border: `1px solid ${LINE}`,
        boxShadow: "0 1px 0 rgba(3,3,2,0.02), 0 24px 48px -28px rgba(3,3,2,0.22)",
      }}
    >
      <div className="flex items-center gap-1.5 border-b px-4 py-2.5" style={{ borderColor: LINE }}>
        <span className="h-2.5 w-2.5 rounded-full bg-[#E1E1E1]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#E1E1E1]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#E1E1E1]" />
      </div>
      {header}
      <div className="px-4 pb-4">{children}</div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Templates                                                           */
/* ------------------------------------------------------------------ */

const Ranked = ({ title, caption, rows }) => {
  const { accent } = useAccent();
  return (
    <Frame title={title} caption={caption}>
      <ul className="divide-y" style={{ borderColor: LINE }}>
        {rows.map((r, i) => (
          <li key={r.name} className="flex items-center gap-3 py-2.5" style={{ borderColor: LINE }}>
            <span className="w-4 text-[11px] tabular-nums" style={{ color: MUTED }}>
              {i + 1}
            </span>
            <Avatar name={r.name} />
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[13px] font-medium" style={{ color: INK }}>
                {r.name}
              </span>
              <span className="block truncate text-[11.5px]" style={{ color: MUTED }}>
                {r.sub}
              </span>
            </span>
            <span className="hidden sm:inline">
              <Pill>{r.tag}</Pill>
            </span>
            <span className="flex w-16 items-center gap-1.5">
              <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#EFEFEC]">
                <span className="block h-full rounded-full" style={{ width: `${r.score}%`, background: accent }} />
              </span>
              <span className="w-5 text-right text-[11px] font-semibold tabular-nums" style={{ color: INK }}>
                {r.score}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </Frame>
  );
};

const Cell = ({ value }) => {
  const { accent } = useAccent();
  if (value === "yes" || value === "no" || value === "partial") {
    const map = {
      yes: { c: TONES.ok.fg, d: "m4 8.5 2.5 2.5L12 5" },
      partial: { c: TONES.warn.fg, d: "M4.5 8h7" },
      no: { c: "#B0B0AA", d: "m5 5 6 6M11 5l-6 6" },
    };
    const m = map[value];
    return (
      <svg viewBox="0 0 16 16" width="15" height="15" fill="none" aria-label={value}>
        <path d={m.d} stroke={m.c} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (value && typeof value === "object") {
    if (value.pill) return <Pill tone={value.tone}>{value.pill}</Pill>;
    if (value.strong)
      return (
        <span className="text-[13px] font-semibold" style={{ color: accent }}>
          {value.strong}
        </span>
      );
  }
  return <span>{value}</span>;
};

const Table = ({ title, caption, head, rows, progress, avatars = false }) => {
  const { accent } = useAccent();
  return (
    <Frame title={title} caption={caption}>
      {progress != null && (
        <div className="mb-3 flex items-center gap-3 rounded-lg px-3 py-2" style={{ background: "#F7F7F5" }}>
          <span className="relative flex h-2 w-2">
            <span className="mock-ping absolute inline-flex h-full w-full rounded-full" style={{ background: accent }} />
            <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: accent }} />
          </span>
          <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#E7E7E3]">
            <span className="mock-grow block h-full rounded-full" style={{ width: `${progress}%`, background: accent }} />
          </span>
          <span className="text-[11px] font-medium tabular-nums" style={{ color: MUTED }}>
            {progress}%
          </span>
        </div>
      )}
      <div className="-mx-1 overflow-x-auto">
        <table className="w-full min-w-[360px] border-collapse text-left text-[12px]" style={{ color: INK }}>
          <thead>
            <tr>
              {head.map((h, i) => (
                <th
                  key={i}
                  className="whitespace-nowrap border-b px-1 pb-2 text-[11px] font-medium"
                  style={{ color: MUTED, borderColor: LINE }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri}>
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className="whitespace-nowrap border-b px-1 py-2.5"
                    style={{ borderColor: ri === rows.length - 1 ? "transparent" : LINE }}
                  >
                    {ci === 0 && avatars && typeof cell === "string" ? (
                      <span className="flex items-center gap-2 font-medium">
                        <Avatar name={cell} size={22} />
                        {cell}
                      </span>
                    ) : ci === 0 ? (
                      <span className="font-medium">
                        <Cell value={cell} />
                      </span>
                    ) : (
                      <Cell value={cell} />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Frame>
  );
};

const Kanban = ({ title, columns }) => {
  const { accent } = useAccent();
  return (
    <Frame title={title}>
      <div className="grid grid-cols-3 gap-2.5">
        {columns.map((col) => (
          <div key={col.name} className="rounded-xl p-2" style={{ background: "#F5F5F3" }}>
            <p className="mb-2 flex items-center justify-between px-1 text-[11px] font-medium" style={{ color: MUTED }}>
              <span className="truncate">{col.name}</span>
              <span className="tabular-nums">{col.items.length}</span>
            </p>
            <div className="space-y-2">
              {col.items.map((it) => (
                <div
                  key={it.title}
                  className="rounded-lg bg-white p-2.5"
                  style={{
                    border: `1px solid ${LINE}`,
                    boxShadow: it.hot ? `inset 3px 0 0 ${accent}` : "none",
                  }}
                >
                  <p className="truncate text-[12px] font-medium" style={{ color: INK }}>
                    {it.title}
                  </p>
                  <p className="mt-0.5 truncate text-[11px]" style={{ color: MUTED }}>
                    {it.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Frame>
  );
};

const Flow = ({ title, steps, active, fields, button }) => {
  const { accent } = useAccent();
  return (
    <Frame title={title}>
      <ol className="mb-4 flex items-center gap-2">
        {steps.map((s, i) => (
          <li key={s} className="flex flex-1 items-center gap-2">
            <span
              className="grid h-5 w-5 shrink-0 place-items-center rounded-full text-[10.5px] font-semibold"
              style={{
                background: i <= active ? accent : "#EFEFEC",
                color: i <= active ? "#fff" : MUTED,
              }}
            >
              {i + 1}
            </span>
            <span className="truncate text-[11.5px] font-medium" style={{ color: i <= active ? INK : MUTED }}>
              {s}
            </span>
            {i < steps.length - 1 && (
              <span className="h-px flex-1" style={{ background: i < active ? accent : LINE }} />
            )}
          </li>
        ))}
      </ol>
      <div className="space-y-2.5">
        {fields.map((f) => (
          <label key={f.label} className="block">
            <span className="mb-1 block text-[11px] font-medium" style={{ color: MUTED }}>
              {f.label}
            </span>
            <span
              className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-[12.5px]"
              style={{ border: `1px solid ${LINE}`, color: INK }}
            >
              {f.file && (
                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" aria-hidden="true">
                  <path d="M4 1.8h5.2L12.5 5v9.2H4V1.8Z" stroke={accent} strokeWidth="1.3" strokeLinejoin="round" />
                  <path d="M9 1.8V5h3.5" stroke={accent} strokeWidth="1.3" strokeLinejoin="round" />
                </svg>
              )}
              {f.value}
            </span>
          </label>
        ))}
      </div>
      <div className="mt-4 flex justify-end">
        <span className="rounded-full px-4 py-1.5 text-[12px] font-semibold text-white" style={{ background: accent }}>
          {button}
        </span>
      </div>
    </Frame>
  );
};

const CHANNEL_GLYPH = {
  Email: "M2.5 4.5h11v7h-11v-7Zm0 0L8 8.5l5.5-4",
  Call: "M4 2.5h2l1 3-1.5 1a7 7 0 0 0 4 4l1-1.5 3 1v2a1.5 1.5 0 0 1-1.5 1.5A10 10 0 0 1 2.5 4 1.5 1.5 0 0 1 4 2.5Z",
  LinkedIn: "M3 6.5v6M3 3.5v.01M6 12.5v-6M6 9a2.5 2.5 0 0 1 5 0v3.5",
  Chat: "M3 3.5h10v6.5H7l-3 2.5V10H3V3.5Z",
};

const Chat = ({ title, banner, sidebar, messages }) => {
  const { accent, soft } = useAccent();
  return (
    <Frame title={title}>
      {banner && (
        <p
          className="mb-3 flex items-center gap-2 rounded-lg px-3 py-2 text-[11.5px] font-medium"
          style={{ background: soft, color: accent }}
        >
          <svg viewBox="0 0 16 16" width="13" height="13" fill="none" aria-hidden="true">
            <rect x="3" y="7" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
            <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" stroke="currentColor" strokeWidth="1.4" />
          </svg>
          {banner}
        </p>
      )}
      <div className="flex gap-3">
        {sidebar && (
          <ul className="hidden w-32 shrink-0 space-y-1 border-r pr-3 sm:block" style={{ borderColor: LINE }}>
            {sidebar.map((n, i) => (
              <li
                key={n}
                className="flex items-center gap-2 rounded-lg px-1.5 py-1.5 text-[11.5px]"
                style={{ background: i === 0 ? "#F3F3F1" : "transparent", color: INK, fontWeight: i === 0 ? 600 : 400 }}
              >
                <Avatar name={n} size={20} />
                <span className="truncate">{n.split(" ")[0]}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="min-w-0 flex-1 space-y-2.5">
          {messages.map((m, i) =>
            m.system ? (
              <p key={i} className="flex items-center justify-center gap-1.5 text-[11px]" style={{ color: MUTED }}>
                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" aria-hidden="true">
                  <path d={CHANNEL_GLYPH.Call} stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                </svg>
                {m.text}
              </p>
            ) : (
              <div key={i} className={`flex items-end gap-2 ${m.me ? "flex-row-reverse" : ""}`}>
                {!m.me && <Avatar name={m.from || "Contact"} size={22} />}
                <div className={`max-w-[80%] ${m.me ? "items-end text-right" : ""} flex flex-col`}>
                  {m.channel && (
                    <span className="mb-1 inline-flex items-center gap-1 text-[10.5px] font-medium" style={{ color: MUTED }}>
                      <svg viewBox="0 0 16 16" width="11" height="11" fill="none" aria-hidden="true">
                        <path d={CHANNEL_GLYPH[m.channel]} stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {m.channel}
                    </span>
                  )}
                  {m.file ? (
                    <span
                      className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-left text-[12px]"
                      style={{ border: `1px solid ${LINE}`, color: INK }}
                    >
                      <span className="grid h-7 w-7 place-items-center rounded-md text-[9px] font-bold" style={{ background: soft, color: accent }}>
                        PDF
                      </span>
                      {m.file}
                    </span>
                  ) : (
                    <span
                      className="rounded-2xl px-3 py-2 text-left text-[12px] leading-snug"
                      style={
                        m.me
                          ? { background: accent, color: "#fff", borderBottomRightRadius: 6 }
                          : { background: "#F3F3F1", color: INK, borderBottomLeftRadius: 6 }
                      }
                    >
                      {m.text}
                    </span>
                  )}
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </Frame>
  );
};

const Settings = ({ title, groups }) => (
  <Frame title={title}>
    <div className="space-y-3">
      {groups.map((g) => (
        <div key={g.label}>
          <p className="mb-1 text-[10.5px] font-semibold uppercase tracking-[0.12em]" style={{ color: MUTED }}>
            {g.label}
          </p>
          <ul className="rounded-xl" style={{ border: `1px solid ${LINE}` }}>
            {g.rows.map((r, i) => (
              <li
                key={r.label}
                className="flex items-center justify-between gap-3 px-3 py-2.5 text-[12.5px]"
                style={{ borderTop: i ? `1px solid ${LINE}` : "none", color: INK }}
              >
                <span>{r.label}</span>
                {typeof r.value === "boolean" ? (
                  <Toggle on={r.value} />
                ) : (
                  <span className="flex items-center gap-1 rounded-md px-2 py-0.5 text-[11.5px]" style={{ background: "#F3F3F1" }}>
                    {r.value}
                    <svg viewBox="0 0 12 12" width="10" height="10" fill="none" aria-hidden="true">
                      <path d="m3 4.5 3 3 3-3" stroke={MUTED} strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Frame>
);

const Log = ({ title, rows }) => (
  <Frame title={title}>
    <ol className="relative space-y-3 pl-5">
      <span aria-hidden="true" className="absolute bottom-2 left-[3px] top-2 w-px" style={{ background: LINE }} />
      {rows.map((r, i) => (
        <li key={i} className="relative">
          <span className="absolute -left-5 top-1.5">
            <Dot tone={r.status} />
          </span>
          <div className="flex items-baseline justify-between gap-3">
            <p className="text-[12.5px] leading-snug" style={{ color: INK }}>
              <span className="font-semibold">{r.who}</span>
              <span style={{ color: MUTED }}> · </span>
              {r.action}
            </p>
            <span className="shrink-0 text-[11px] tabular-nums" style={{ color: MUTED }}>
              {r.time}
            </span>
          </div>
        </li>
      ))}
    </ol>
  </Frame>
);

const Filters = ({ title, groups, result }) => {
  const { accent, soft } = useAccent();
  return (
    <Frame title={title}>
      <div className="space-y-3">
        {groups.map((g) => (
          <div key={g.label}>
            <p className="mb-1.5 text-[11px] font-medium" style={{ color: MUTED }}>
              {g.label}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {g.chips.map((c, i) => {
                const on = g.on.includes(i);
                return (
                  <span
                    key={c}
                    className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11.5px] font-medium"
                    style={{
                      background: on ? soft : "#FFFFFF",
                      color: on ? accent : INK,
                      border: `1px solid ${on ? "transparent" : LINE}`,
                    }}
                  >
                    {on && (
                      <svg viewBox="0 0 12 12" width="10" height="10" fill="none" aria-hidden="true">
                        <path d="m2.5 6.2 2.2 2.2 4.8-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                    {c}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between gap-3 border-t pt-3" style={{ borderColor: LINE }}>
        <span className="text-[11.5px]" style={{ color: MUTED }}>
          {result}
        </span>
        <span className="shrink-0 rounded-full px-3.5 py-1.5 text-[11.5px] font-semibold text-white" style={{ background: accent }}>
          Extract
        </span>
      </div>
    </Frame>
  );
};

const SLOTS = ["9 AM", "11 AM", "1 PM", "3 PM"];

const Calendar = ({ title, days, events, warning }) => {
  const { accent, soft } = useAccent();
  return (
    <Frame title={title}>
      <div
        className="grid text-[11px]"
        style={{ gridTemplateColumns: `34px repeat(${days.length}, minmax(0,1fr))`, gridTemplateRows: `20px repeat(${SLOTS.length}, 44px)` }}
      >
        <span />
        {days.map((d) => (
          <span key={d} className="px-1 text-center font-medium" style={{ color: MUTED }}>
            {d}
          </span>
        ))}
        {SLOTS.map((s, i) => (
          <React.Fragment key={s}>
            <span className="pr-1 pt-0.5 text-right text-[10px]" style={{ color: MUTED, gridRow: i + 2, gridColumn: 1 }}>
              {s}
            </span>
            {days.map((_, d) => (
              <span
                key={d}
                style={{ gridRow: i + 2, gridColumn: d + 2, borderTop: `1px solid ${LINE}`, borderLeft: `1px solid ${LINE}` }}
              />
            ))}
          </React.Fragment>
        ))}
        {events.map((e, i) => (
          <span
            key={i}
            className="z-[1] m-[3px] overflow-hidden rounded-md px-1.5 py-1 text-[10.5px] font-medium leading-tight"
            style={{
              gridColumn: e.d + 2,
              gridRow: `${e.s + 2} / span ${e.h}`,
              background: e.conflict ? TONES.bad.bg : e.alt ? "#F1F1EE" : soft,
              color: e.conflict ? TONES.bad.fg : e.alt ? INK : accent,
              boxShadow: `inset 2px 0 0 ${e.conflict ? TONES.bad.fg : e.alt ? "#B9B9B3" : accent}`,
              marginLeft: e.conflict ? "38%" : 3,
              outline: e.conflict ? `1.5px dashed ${TONES.bad.fg}` : "none",
              outlineOffset: -1,
            }}
          >
            {e.title}
          </span>
        ))}
      </div>
      {warning && (
        <p
          className="mt-3 flex items-start gap-2 rounded-lg px-3 py-2 text-[11.5px] font-medium"
          style={{ background: TONES.bad.bg, color: TONES.bad.fg }}
        >
          <svg viewBox="0 0 16 16" width="13" height="13" fill="none" className="mt-px shrink-0" aria-hidden="true">
            <path d="M8 2.5 14 13H2L8 2.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
            <path d="M8 6.5v3M8 11.2v.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          {warning}
        </p>
      )}
    </Frame>
  );
};

const Alerts = ({ title, items }) => (
  <Frame title={title}>
    <ul className="space-y-2">
      {items.map((it) => (
        <li
          key={it.title}
          className="flex items-start gap-3 rounded-xl bg-white p-3"
          style={{ border: `1px solid ${LINE}`, boxShadow: "0 6px 16px -14px rgba(3,3,2,0.4)" }}
        >
          <span className="mt-1.5">
            <Dot tone={it.tone} />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[12.5px] font-medium leading-snug" style={{ color: INK }}>
              {it.title}
            </span>
            <span className="mt-0.5 block text-[11.5px] leading-snug" style={{ color: MUTED }}>
              {it.sub}
            </span>
          </span>
          <Pill tone={it.tone}>{it.tag}</Pill>
        </li>
      ))}
    </ul>
  </Frame>
);

const Doc = ({ title, heading, meta, blocks }) => {
  const { accent, soft } = useAccent();
  return (
    <Frame title={title}>
      <div className="rounded-xl px-4 py-4" style={{ background: "#FBFBFA", border: `1px solid ${LINE}` }}>
        <p className="text-[16px] font-semibold tracking-[-0.01em]" style={{ color: INK }}>
          {heading}
        </p>
        <p className="mt-0.5 text-[11.5px]" style={{ color: MUTED }}>
          {meta}
        </p>
        <div className="mt-3 space-y-2">
          {blocks.map((b, i) => {
            if (b.kind === "label")
              return (
                <p key={i} className="pt-1 text-[10.5px] font-semibold uppercase tracking-[0.12em]" style={{ color: MUTED }}>
                  {b.text}
                </p>
              );
            if (b.kind === "check")
              return (
                <p key={i} className="flex items-center gap-2 text-[12.5px]" style={{ color: INK }}>
                  <Check on={b.done} />
                  <span style={{ textDecoration: b.done ? "line-through" : "none", opacity: b.done ? 0.6 : 1 }}>{b.text}</span>
                </p>
              );
            return (
              <div key={i} className="flex flex-col gap-1.5 sm:flex-row sm:items-start sm:gap-3">
                <p
                  className="flex-1 rounded-md px-1.5 py-0.5 text-[12.5px] leading-snug"
                  style={{
                    color: INK,
                    background: b.note ? (b.warn ? TONES.warn.bg : soft) : "transparent",
                  }}
                >
                  {b.text}
                </p>
                {b.note && (
                  <span
                    className="shrink-0 rounded-lg bg-white px-2 py-1 text-[11px] font-medium leading-snug sm:max-w-[42%]"
                    style={{
                      color: b.warn ? TONES.warn.fg : accent,
                      border: `1px solid ${LINE}`,
                      boxShadow: "0 6px 14px -12px rgba(3,3,2,0.5)",
                    }}
                  >
                    {b.note}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Frame>
  );
};

const Sequence = ({ title, steps }) => {
  const { accent, soft } = useAccent();
  return (
    <Frame title={title}>
      <ol className="space-y-2">
        {steps.map((s, i) => {
          const done = s.state === "done";
          const act = s.state === "active";
          return (
            <li
              key={i}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5"
              style={{
                background: act ? soft : "#FFFFFF",
                border: `1px solid ${act ? "transparent" : LINE}`,
              }}
            >
              <span
                className="grid h-6 w-6 shrink-0 place-items-center rounded-full"
                style={{
                  background: done ? accent : act ? "#FFFFFF" : "#F1F1EE",
                  border: act ? `1.5px solid ${accent}` : "none",
                }}
              >
                {done ? (
                  <svg viewBox="0 0 12 12" width="10" height="10" fill="none" aria-hidden="true">
                    <path d="m2.5 6.2 2.2 2.2 4.8-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: act ? accent : "#B9B9B3" }} />
                )}
              </span>
              <span className="w-12 shrink-0 text-[11px] font-medium tabular-nums" style={{ color: MUTED }}>
                {s.tag}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[10.5px] font-semibold uppercase tracking-[0.1em]" style={{ color: act ? accent : MUTED }}>
                  {s.channel}
                </span>
                <span className="block truncate text-[12.5px]" style={{ color: INK }}>
                  {s.text}
                </span>
              </span>
            </li>
          );
        })}
      </ol>
    </Frame>
  );
};

const Bars = ({ title, caption, series, legend, max = 100, suffix = "" }) => {
  const { accent } = useAccent();
  return (
    <Frame title={title} caption={caption}>
      <ul className="space-y-3.5 pt-1">
        {series.map((s) => (
          <li key={s.label}>
            <div className="mb-1.5 flex items-center justify-between text-[12px]" style={{ color: INK }}>
              <span className="flex items-center gap-2 font-medium">
                {s.label}
                {s.flag && <Pill tone={s.flag === "Over" ? "bad" : "ok"}>{s.flag}</Pill>}
              </span>
              <span className="font-semibold tabular-nums">
                {s.value}
                {suffix}
              </span>
            </div>
            <div className="relative h-2.5 overflow-hidden rounded-full bg-[#F0F0ED]">
              {s.prev != null && (
                <span className="absolute inset-y-0 left-0 rounded-full bg-[#D3D3CE]" style={{ width: `${(s.prev / max) * 100}%` }} />
              )}
              <span
                className="mock-grow absolute inset-y-0 left-0 rounded-full"
                style={{
                  width: `${Math.min(s.value / max, 1) * 100}%`,
                  background: s.flag === "Over" ? TONES.bad.fg : accent,
                  opacity: s.prev != null ? 0.92 : 1,
                }}
              />
              {max > 100 && (
                <span aria-hidden="true" className="absolute inset-y-0 w-px bg-white" style={{ left: `${(100 / max) * 100}%` }} />
              )}
            </div>
          </li>
        ))}
      </ul>
      {legend && (
        <div className="mt-4 flex items-center gap-4 text-[11px]" style={{ color: MUTED }}>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full" style={{ background: accent }} />
            {legend[0]}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#D3D3CE]" />
            {legend[1]}
          </span>
        </div>
      )}
    </Frame>
  );
};

const Profile = ({ title, name, role, tabs, fields }) => {
  const { accent, soft } = useAccent();
  return (
    <Frame title={title}>
      <div className="overflow-hidden rounded-xl" style={{ border: `1px solid ${LINE}` }}>
        <div className="h-12" style={{ background: `linear-gradient(120deg, ${soft}, #F6F6F3)` }} />
        <div className="-mt-6 px-4">
          <span className="inline-block rounded-full ring-4 ring-white">
            <Avatar name={name} size={46} />
          </span>
          <p className="mt-1.5 text-[14px] font-semibold" style={{ color: INK }}>
            {name}
          </p>
          <p className="text-[11.5px]" style={{ color: MUTED }}>
            {role}
          </p>
        </div>
        <div className="mt-3 flex gap-4 border-b px-4" style={{ borderColor: LINE }}>
          {tabs.map((t, i) => (
            <span
              key={t}
              className="pb-2 text-[11.5px] font-medium"
              style={{ color: i === 0 ? INK : MUTED, boxShadow: i === 0 ? `inset 0 -2px 0 ${accent}` : "none" }}
            >
              {t}
            </span>
          ))}
        </div>
        <dl className="grid grid-cols-2 gap-x-4 gap-y-3 p-4">
          {fields.map((f) => (
            <div key={f.label} className="min-w-0">
              <dt className="text-[10.5px] font-medium" style={{ color: MUTED }}>
                {f.label}
              </dt>
              <dd className="mt-0.5 flex items-center gap-1.5 text-[12px]" style={{ color: INK }}>
                {f.tone && <Dot tone={f.tone} />}
                <span className="truncate">{f.value}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Frame>
  );
};

const Path = ({ title, nodes, gaps }) => {
  const { accent, soft } = useAccent();
  return (
    <Frame title={title}>
      <ol className="relative flex items-start justify-between gap-2 px-1 pt-2">
        <span aria-hidden="true" className="absolute left-[12%] right-[12%] top-[22px] h-px" style={{ background: LINE }} />
        <span
          aria-hidden="true"
          className="mock-grow absolute left-[12%] top-[22px] h-[2px]"
          style={{ width: "38%", background: accent }}
        />
        {nodes.map((n) => {
          const cur = n.state === "current";
          const goal = n.state === "goal";
          return (
            <li key={n.label} className="relative z-[1] flex flex-1 flex-col items-center text-center">
              <span
                className="grid h-7 w-7 place-items-center rounded-full"
                style={{
                  background: n.state === "done" ? accent : cur ? "#FFFFFF" : "#FFFFFF",
                  border: `2px ${goal ? "dashed" : "solid"} ${goal ? "#C4C4BE" : accent}`,
                  boxShadow: cur ? `0 0 0 6px ${soft}` : "none",
                }}
              >
                {n.state === "done" ? (
                  <svg viewBox="0 0 12 12" width="11" height="11" fill="none" aria-hidden="true">
                    <path d="m2.5 6.2 2.2 2.2 4.8-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <span className="h-2 w-2 rounded-full" style={{ background: goal ? "#C4C4BE" : accent }} />
                )}
              </span>
              <span className="mt-2 text-[12px] font-semibold leading-tight" style={{ color: INK }}>
                {n.label}
              </span>
              <span className="mt-0.5 text-[10.5px] leading-tight" style={{ color: cur ? accent : MUTED }}>
                {n.sub}
              </span>
            </li>
          );
        })}
      </ol>
      <div className="mt-5 rounded-xl p-3" style={{ background: "#F7F7F5" }}>
        <p className="mb-2 text-[10.5px] font-semibold uppercase tracking-[0.12em]" style={{ color: MUTED }}>
          To get there
        </p>
        <ul className="space-y-1.5">
          {gaps.map((g, i) => (
            <li key={g} className="flex items-center gap-2 text-[12px]" style={{ color: INK }}>
              <Check on={i === 0} />
              {g}
            </li>
          ))}
        </ul>
      </div>
    </Frame>
  );
};

const TEMPLATES = {
  ranked: Ranked,
  table: Table,
  kanban: Kanban,
  flow: Flow,
  chat: Chat,
  settings: Settings,
  log: Log,
  filters: Filters,
  calendar: Calendar,
  alerts: Alerts,
  doc: Doc,
  sequence: Sequence,
  bars: Bars,
  profile: Profile,
  path: Path,
};

const MOCK_CSS = `
@keyframes mock-grow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
.mock-grow { transform-origin: left; animation: mock-grow 1.1s cubic-bezier(0.22,1,0.36,1) both; animation-delay: .15s; }
@keyframes mock-ping { 75%, 100% { transform: scale(2.2); opacity: 0; } }
.mock-ping { animation: mock-ping 1.6s cubic-bezier(0,0,0.2,1) infinite; opacity: .6; }
@media (prefers-reduced-motion: reduce) { .mock-grow, .mock-ping { animation: none; } }
`;

/**
 * Renders a product UI mock.
 * @param mock   the `mock` object from data/products.jsx
 * @param bare   render without the window chrome (used inside the hero app shell)
 */
const Mock = ({ mock, accent, soft, bare = false }) => {
  const Template = TEMPLATES[mock.type];
  if (!Template) return null;
  return (
    <AccentCtx.Provider value={{ accent, soft }}>
      <BareCtx.Provider value={bare}>
        <style>{MOCK_CSS}</style>
        <div style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>
          <Template {...mock} />
        </div>
      </BareCtx.Provider>
    </AccentCtx.Provider>
  );
};

export default Mock;
