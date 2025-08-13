"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Media", href: "/media" },
  { name: "Upcoming", href: "/upcoming" },
  { name: "Contact", href: "/contact" },
];

export default function SidebarNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="sm:hidden fixed top-4 left-4 z-50">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar - Desktop */}
      <aside className="hidden sm:flex fixed top-0 left-0 h-screen w-56 bg-white/80 backdrop-blur-lg shadow-lg px-6 py-8 flex-col justify-between text-center font-serif z-50">
        <div>
          <nav className="space-y-6 text-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block transition-all duration-300 ${
                  pathname === link.href
                    ? "text-[#a67c52] font-semibold"
                    : "text-gray-700 hover:text-[#a67c52]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Desktop Footer */}
        <div className="pt-10">
          <Footer />
        </div>
      </aside>

      {/* Slide-in Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white/90 backdrop-blur-lg z-40 flex flex-col justify-between p-8 font-serif text-lg md:hidden">
          <div className="space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-[#a67c52] font-semibold"
                    : "text-gray-700 hover:text-[#a67c52]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Footer */}
          <div className="mt-10 flex justify-start">
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}
