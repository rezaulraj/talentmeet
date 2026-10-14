import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { loadRoles } from "../../data/careers";
import { Arrow, FORM_CSS, INK, LINE, MUTED, PRIMARY } from "../../components/forms/formKit";

const applyHref = (role) =>
  role.url || `/contact?reason=careers&role=${encodeURIComponent(role.title)}`;

const RoleRow = ({ role }) => {
  const external = Boolean(role.url);
  const inner = (
    <>
      <span className="min-w-0 flex-1">
        <span className="block text-[16px] font-medium" style={{ color: INK }}>{role.title}</span>
        <span className="mt-1 block text-[13.5px]" style={{ color: MUTED }}>
          {[role.department, role.location, role.type].filter(Boolean).join(" · ")}
        </span>
      </span>
      <span className="inline-flex shrink-0 items-center gap-1.5 text-[14px] font-medium" style={{ color: PRIMARY }}>
        Apply
        <Arrow />
      </span>
    </>
  );
  const cls = "ts-link flex items-center gap-6 rounded-xl px-4 py-4 transition-colors hover:bg-[#F7F7F5]";
  return (
    <li>
      {external ? (
        <a href={applyHref(role)} target="_blank" rel="noreferrer" className={cls}>
          {inner}
        </a>
      ) : (
        <Link to={applyHref(role)} className={cls}>
          {inner}
        </Link>
      )}
    </li>
  );
};

const Careers = () => {
  const [state, setState] = useState({ status: "loading", roles: [], sample: false });
  const [dept, setDept] = useState("");

  useEffect(() => {
    document.title = "Careers | Talent Meet";
    let alive = true;
    loadRoles()
      .then(({ roles, sample }) => alive && setState({ status: "ready", roles, sample }))
      .catch(() => alive && setState({ status: "error", roles: [], sample: false }));
    return () => {
      alive = false;
    };
  }, []);

  const departments = useMemo(
    () => [...new Set(state.roles.map((r) => r.department).filter(Boolean))],
    [state.roles],
  );
  const roles = dept ? state.roles.filter((r) => r.department === dept) : state.roles;

  return (
    <div className="ts-page bg-white">
      <style>{FORM_CSS}</style>

      <section className="px-6 pb-12 pt-36 md:pt-48">
        <div className="mx-auto max-w-3xl">
          <p className="ts-in text-[13px] font-medium" style={{ color: MUTED }}>Company / Careers</p>
          <h1
            className="ts-in mt-4 text-[34px] font-medium leading-[1.1] tracking-[-0.03em] sm:text-[44px]"
            style={{ color: INK, animationDelay: "60ms" }}
          >
            Build the tools ten teams rely on.
          </h1>
          <p className="ts-in mt-5 text-[18px] leading-relaxed" style={{ color: MUTED, animationDelay: "120ms" }}>
            Join the team building Talent Meet&rsquo;s products for hiring,
            managing, selling and securing work.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.14em]" style={{ color: MUTED }}>
              Open roles{state.status === "ready" && ` · ${state.roles.length}`}
            </h2>
            {departments.length > 1 && (
              <div role="group" aria-label="Department" className="flex flex-wrap gap-1.5">
                {["", ...departments].map((d) => {
                  const on = d === dept;
                  return (
                    <button
                      key={d || "all"}
                      type="button"
                      aria-pressed={on}
                      onClick={() => setDept(d)}
                      className="rounded-full px-3 py-1 text-[13px] font-medium transition-colors"
                      style={{
                        background: on ? INK : "#fff",
                        color: on ? "#fff" : INK,
                        border: `1px solid ${on ? INK : LINE}`,
                      }}
                    >
                      {d || "All"}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {state.sample && (
            <p className="mb-3 rounded-lg px-3 py-2 text-[12.5px]" style={{ background: "#FFF6E0", color: "#8A5A00" }}>
              Development preview — sample roles. Set VITE_CAREERS_ENDPOINT to load real openings.
            </p>
          )}

          <div className="rounded-2xl bg-white p-2" style={{ border: `1px solid ${LINE}` }}>
            {state.status === "loading" && (
              <ul aria-busy="true">
                {[0, 1, 2].map((i) => (
                  <li key={i} className="px-4 py-4">
                    <span className="block h-4 w-1/2 animate-pulse rounded bg-[#EFEFEC]" />
                    <span className="mt-2 block h-3 w-1/3 animate-pulse rounded bg-[#F3F3F1]" />
                  </li>
                ))}
              </ul>
            )}

            {state.status === "error" && (
              <p className="px-4 py-8 text-center text-[14.5px]" style={{ color: MUTED }}>
                We couldn&rsquo;t load open roles right now. Please try again later.
              </p>
            )}

            {state.status === "ready" &&
              (roles.length ? (
                <ul className="divide-y divide-[#E1E1E1]">
                  {roles.map((r) => (
                    <RoleRow key={r.id || r.title} role={r} />
                  ))}
                </ul>
              ) : (
                <p className="px-4 py-8 text-center text-[14.5px]" style={{ color: MUTED }}>
                  No open roles right now.
                </p>
              ))}
          </div>

          <p className="mt-6 text-[14.5px]" style={{ color: MUTED }}>
            Don&rsquo;t see the right role?{" "}
            <Link
              to="/contact?reason=careers"
              className="font-medium underline underline-offset-4"
              style={{ color: INK }}
            >
              Write to us anyway
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
};

export default Careers;
