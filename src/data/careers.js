/* ------------------------------------------------------------------ */
/* Careers — open roles                                                */
/*                                                                     */
/* Roles are loaded from your ATS (JobsPlus) as JSON. Set in .env:     */
/*   VITE_CAREERS_ENDPOINT=https://…/public/jobs.json                  */
/* Expected shape: [{ id, title, department, location, type, url }]    */
/*                                                                     */
/* SAMPLE_ROLES are only shown in local development when no endpoint   */
/* is configured, so the page can be reviewed. Production never shows  */
/* them — it shows the "no open roles" state instead.                  */
/* ------------------------------------------------------------------ */

const CAREERS_ENDPOINT = import.meta.env.VITE_CAREERS_ENDPOINT;

const SAMPLE_ROLES = [
  { id: "fe-sr", title: "Senior Frontend Engineer", department: "Engineering", location: "Dhaka · Hybrid", type: "Full-time" },
  { id: "be-pay", title: "Backend Engineer, Payroll", department: "Engineering", location: "Dhaka · Hybrid", type: "Full-time" },
  { id: "sec-eng", title: "Security Engineer", department: "Engineering", location: "Remote (Bangladesh)", type: "Full-time" },
  { id: "pd", title: "Product Designer", department: "Design", location: "Dhaka · Hybrid", type: "Full-time" },
  { id: "csm", title: "Customer Success Manager", department: "Customer Success", location: "Dhaka", type: "Full-time" },
  { id: "sdr", title: "Sales Development Representative", department: "Sales", location: "Dhaka", type: "Full-time" },
];

/** Resolves to { roles, sample } — `sample` is true when showing placeholder roles. */
export const loadRoles = async () => {
  if (CAREERS_ENDPOINT) {
    const res = await fetch(CAREERS_ENDPOINT);
    if (!res.ok) throw new Error(`Request failed (${res.status})`);
    const data = await res.json();
    return { roles: Array.isArray(data) ? data : data.jobs || [], sample: false };
  }
  return import.meta.env.DEV
    ? { roles: SAMPLE_ROLES, sample: true }
    : { roles: [], sample: false };
};
