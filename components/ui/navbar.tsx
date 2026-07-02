"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
// import { Menu, X } from "lucide-react";
// import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
];

export function Navbar() {
  const pathname = usePathname();
  // const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="z-50 bg-background pt-6">
      <nav className="mx-auto flex max-w-5xl items-center justify-center px-6">
        {/* Logo */}
        {/* <Link
          href="/"
          className="font-heading text-lg font-bold text-stone-900 hover:text-accent"
        >
          Harsh Dev
        </Link> */}

        {/* Desktop & Mobile links */}
        <ul className="flex items-center gap-6 md:gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-bold pb-1 border-b-2 transition-colors ${isActive
                    ? "border-accent text-stone-900"
                    : "border-transparent text-stone-600 hover:text-stone-900"
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        {/* <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-stone-600 hover:bg-stone-100"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button> */}
      </nav>

      {/* Mobile menu */}
      {/* {mobileOpen && (
        <div className="md:hidden bg-background px-6 py-4">
          <ul className="space-y-4">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`inline-block text-sm font-bold pb-1 border-b-2 ${isActive
                      ? "border-accent text-stone-900"
                      : "border-transparent text-stone-600 hover:text-stone-900"
                      }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )} */}
    </header>
  );
}
