"use client";

import { LogOut, Menu, X, Search, PhoneCall, Wrench } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

import { useSession, signOut } from "next-auth/react";
import LoginButton from "./LoginButton";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session } = useSession();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white text-gray-800 shadow-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-amber-600 font-bold text-xl tracking-wide hover:text-amber-700">
            <Wrench size={22} />
            BritFix
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex space-x-6 font-medium text-sm">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                href={link.path}
                className="hover:text-amber-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex flex-1 mx-8 max-w-md">
            <div className="flex w-full border rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Search repair services..."
                className="flex-1 px-3 py-2 text-sm outline-none"
              />
              <button className="bg-amber-600 px-4 flex items-center justify-center hover:bg-amber-700 text-white">
                <Search size={18} />
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:+441234567890"
              className="hidden sm:flex items-center gap-1 text-sm font-medium text-amber-600 hover:text-amber-700"
            >
              <PhoneCall size={16} /> Call Us
            </a>

            {/* Auth */}
            <div className="hidden sm:block">
              {session ? (
                <button
                  onClick={() => signOut({ callbackUrl: "/login" })}
                  className="flex items-center gap-2 px-3 py-2 rounded-md bg-red-500 hover:bg-red-600 text-white text-sm font-medium"
                >
                  <LogOut size={16} /> Logout
                </button>
              ) : (
                <LoginButton />
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-50 border-t">
          <div className="flex flex-col space-y-2 p-4 text-sm font-medium">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                href={link.path}
                className="hover:text-amber-600"
              >
                {link.name}
              </Link>
            ))}
            {session ? (
              <button
                onClick={() => signOut({ callbackUrl: "/login" })}
                className="mt-2 flex items-center gap-2 px-3 py-2 rounded-md bg-red-500 hover:bg-red-600 text-white text-sm font-medium"
              >
                <LogOut size={16} /> Logout
              </button>
            ) : (
              <LoginButton />
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
