import Link from "next/link";

import { TopNavLinks } from "@/components/ui/top-nav-links";
import { logoutAction } from "@/app/login/actions";
import { ViewModeToggle } from "@/components/ui/view-mode-toggle";
import { brand } from "@/config/brand";
import { getCurrentSession } from "@/server/auth/session-store";
import { roleHasCapability } from "@/server/auth/roles";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getCurrentSession();

  return (
    <main className="shell">
      <header className="topbar">
        <div className="brand-lockup">
          <div className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div>
            <p className="eyebrow">FundLayer CRM</p>
            <strong>{brand.name}</strong>
            <div className="muted">
              {session?.email} · {session?.role}
            </div>
          </div>
        </div>
        <TopNavLinks
          items={[
            { href: "/dashboard", label: "Dashboard" },
            { href: "/donors", label: "Donors" },
            { href: "/gifts", label: "Gifts" },
            { href: "/reports", label: "Reports" },
            { href: "/imports", label: "Imports" },
            ...(session && (roleHasCapability(session.role, "users:manage") || roleHasCapability(session.role, "audit:read"))
              ? [{ href: "/admin", label: "Admin" }]
              : [])
          ]}
        />
        <div className="topbar-actions">
          <ViewModeToggle />
          <form action={logoutAction}>
            <button type="submit" className="secondary">
              Sign out
            </button>
          </form>
        </div>
      </header>
      {children}
    </main>
  );
}
