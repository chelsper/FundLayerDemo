import { getCurrentSession } from "@/server/auth/session-store";
import { brand } from "@/config/brand";

import { loginAction } from "./actions";

export default async function LoginPage({
  searchParams
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const session = await getCurrentSession();
  const params = await searchParams;

  return (
    <main className="shell auth-shell">
      <div className="auth-grid">
        <section className="hero auth-hero">
          <div className="brand-lockup brand-lockup-hero">
            <div className="brand-mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div>
              <p className="eyebrow">{brand.shortName}</p>
              <h1>Modern nonprofit CRM infrastructure, built to feel like a real product.</h1>
            </div>
          </div>
          <p className="muted">
            Work inside a live donor and gift management demo with rules-driven structure, modern workflows, and a
            cleaner operating model than legacy nonprofit systems.
          </p>
          <div className="auth-highlight-grid">
            <div className="auth-highlight-card">
              <span className="eyebrow">Custom Data</span>
              <strong>Adapt architecture to the organization.</strong>
            </div>
            <div className="auth-highlight-card">
              <span className="eyebrow">Rules Engine</span>
              <strong>Automate nonprofit logic instead of managing it manually.</strong>
            </div>
            <div className="auth-highlight-card">
              <span className="eyebrow">Real Workflows</span>
              <strong>Navigate dashboards, constituents, gifts, and relationships in one system.</strong>
            </div>
          </div>
        </section>

        <section className="card auth-card">
          <p className="eyebrow">Admin Access</p>
          <h2>Log in</h2>
          {session ? <p className="muted">An active session is already present. Signing in again will refresh it.</p> : null}
          {params.error === "invalid" ? <p className="danger">Invalid email or password.</p> : null}
          {params.error === "invite_required" ? <p className="danger">An admin invitation is required to create a new account.</p> : null}
          <form action={loginAction} className="form-grid">
            <label className="full">
              Email
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label className="full">
              Password
              <input name="password" type="password" autoComplete="current-password" required />
            </label>
            <div className="full">
              <button type="submit">Sign in</button>
            </div>
          </form>
          <p className="muted">Need access? Ask an admin for an invitation link.</p>
        </section>
      </div>
    </main>
  );
}
