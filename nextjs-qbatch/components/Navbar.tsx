"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/services",
    label: "Services",
  },
  {
    href: "/team",
    label: "Team",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-5">
        <h1 className="text-2xl font-bold">
          QBATCH
        </h1>

        <div className="flex gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition ${
                pathname === link.href
                  ? "font-bold underline"
                  : "hover:text-gray-200"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
