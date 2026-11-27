"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Furniture", "/furniture"],
  ["Services", "/services"],
  ["Industries", "/industries"],
  ["Projects", "/projects"],
  ["Reviews", "/reviews"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[#E8E1D4] bg-[#F7F4EE]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-2xl font-serif tracking-[0.15em]">
          AUREN
          <span className="ml-2 text-xs tracking-[0.25em]">CONTRACTS</span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-xs text-[#25262A] transition hover:text-[#9C7A4F]"
            >
              {label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="hidden bg-[#9C7A4F] px-5 py-3 text-xs text-white transition hover:bg-[#25262A] lg:block"
        >
          Request a Quote
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-5 border-t border-[#E8E1D4] px-6 py-6 lg:hidden">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-sm"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="bg-[#9C7A4F] px-5 py-3 text-center text-sm text-white"
          >
            Request a Quote
          </Link>
        </div>
      )}
    </nav>
  );
}