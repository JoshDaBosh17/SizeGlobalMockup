import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { footerGroups, navItems, scanNavItems } from "../data/siteData";

function Brand() {
  return (
    <Link to="/" className="inline-flex items-center gap-3">
      <span className="brand-mark"></span>
      <span className="brand-label font-display text-lg font-semibold tracking-[-0.05em]">SIZEGlobal</span>
    </Link>
  );
}

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const storedTheme = window.localStorage.getItem("sizeglobal-theme");
    return storedTheme === "light" ? "light" : "dark";
  });
  const location = useLocation();
  const scanMenuActive = scanNavItems.some((item) => location.pathname === item.path);
  const [homeNavItem, ...secondaryNavItems] = navItems;

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("sizeglobal-theme", theme);
  }, [theme]);

  return (
    <div className="page-shell page-grid min-h-screen">
      <header className="site-header sticky top-0 z-50 backdrop-blur-xl">
        <div className="section-shell flex items-center justify-between gap-4 py-4">
          <div className="flex items-center gap-5">
            <Brand />
          </div>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            <NavLink
              to={homeNavItem.path}
              className={({ isActive }) =>
                `text-sm transition ${isActive ? "font-semibold text-white" : "text-white/58 hover:text-white"}`
              }
            >
              {homeNavItem.label}
            </NavLink>

            <div className="nav-dropdown group relative">
              <button
                type="button"
                className={`nav-dropdown-trigger text-sm transition ${
                  scanMenuActive ? "is-active font-semibold text-white" : "text-white/58 hover:text-white"
                }`}
                aria-haspopup="true"
              >
                Scans
              </button>

              <div className="nav-dropdown-menu">
                {scanNavItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `nav-dropdown-link ${isActive ? "font-semibold text-white" : "text-white/62 hover:text-white"}`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>

            {secondaryNavItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm transition ${isActive ? "font-semibold text-white" : "text-white/58 hover:text-white"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="theme-toggle" role="group" aria-label="Color theme">
              <button
                type="button"
                className={`theme-option ${theme === "light" ? "is-active" : ""}`}
                onClick={() => setTheme("light")}
              >
                Light
              </button>
              <span className="theme-divider">/</span>
              <button
                type="button"
                className={`theme-option ${theme === "dark" ? "is-active" : ""}`}
                onClick={() => setTheme("dark")}
              >
                Dark
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="menu-toggle inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              <div className="space-y-1.5">
                <span className="block h-0.5 w-4 bg-current"></span>
                <span className="block h-0.5 w-4 bg-current"></span>
              </div>
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div className="site-mobile-nav lg:hidden">
            <div className="section-shell grid gap-2 py-4">
              <NavLink
                to={homeNavItem.path}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-sm transition ${
                    isActive ? "bg-white/8 font-semibold text-white" : "text-white/64 hover:bg-white/4 hover:text-white"
                  }`
                }
              >
                {homeNavItem.label}
              </NavLink>
              <div className="mobile-nav-group rounded-[1.6rem] border border-white/8 bg-white/4 px-4 py-3">
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/42">Scans</div>
                <div className="mt-3 grid gap-2">
                  {scanNavItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) =>
                        `rounded-2xl px-4 py-3 text-sm transition ${
                          isActive ? "bg-white/8 font-semibold text-white" : "text-white/64 hover:bg-white/4 hover:text-white"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              </div>
              {secondaryNavItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-sm transition ${
                      isActive ? "bg-white/8 font-semibold text-white" : "text-white/64 hover:bg-white/4 hover:text-white"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="site-footer pb-10 pt-14">
        <div className="section-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
          <div className="space-y-5">
            <Brand />
            <p className="max-w-md text-sm leading-7 text-white/62">
              Premium 3D scan bundles and statistics tables for heads, hands, and ears. Designed to support better global fit decisions across medical, wearable, sports, entertainment, and product design work.
            </p>
            <Link to="/contact" className="btn-primary">
              Start a dataset inquiry
            </Link>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title} className="space-y-4">
              <div className="text-[11px] uppercase tracking-[0.22em] text-white/42">{group.title}</div>
              <div className="grid gap-3">
                {group.links.map((link) => (
                  <NavLink key={link.path} to={link.path} className="text-sm text-white/66 transition hover:text-white">
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}

          <div className="space-y-4">
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/42">Contact</div>
            <p className="text-sm leading-7 text-white/62">
              Request package sheets, sample scans, or a commercial quote for 500-subject, 1000-subject, or custom bundles.
            </p>
            <a href="mailto:contact@sizeglobal.com" className="text-sm font-semibold text-white transition hover:text-[rgba(255,255,255,0.8)]">
              contact@sizeglobal.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
