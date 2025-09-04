"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, PhoneCall, Mail, Home, Info, FileText, Phone, ToolCase } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* About Section / Logo */}
        <div>
          <h3 className="flex items-center text-lg font-bold text-amber-500 gap-2 mb-3">
            <ToolCase size={22} />
            BritFix
          </h3>
          <p className="text-sm">
            Expert Mobile Repairs Across the UK. <br />
            Fast, reliable and professional smartphone repair solutions from cracked screens to battery replacements.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-amber-500 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Home size={16} /> <Link href="/" className="hover:text-amber-400">Home</Link>
            </li>
            <li className="flex items-center gap-2">
              <ToolCase size={16} /> <Link href="/services" className="hover:text-amber-400">Services</Link>
            </li>
            <li className="flex items-center gap-2">
              <FileText size={16} /> <Link href="/pricing" className="hover:text-amber-400">Pricing</Link>
            </li>
            <li className="flex items-center gap-2">
              <Info size={16} /> <Link href="/about" className="hover:text-amber-400">About</Link>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> <Link href="/contact" className="hover:text-amber-400">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold text-amber-500 mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <PhoneCall size={16} /> <span>+44 1234 567 890</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> <span>support@britfix.co.uk</span>
            </li>
            <li className="flex items-center gap-2">
              <ToolCase size={16} /> <span>123 Repair Street, London, UK</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold text-amber-500 mb-3">Follow Us</h3>
          <div className="flex space-x-3">
            <a href="#" className="hover:text-amber-400">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-amber-400">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-amber-400">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-amber-400">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} BritFix. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
