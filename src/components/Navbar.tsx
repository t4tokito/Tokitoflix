"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1E2030]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl overflow-hidden">
            <Image
              src="/logo.jpeg"
              alt="Tokitoflix Logo"
              width={36}
              height={36}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <span className="text-lg font-bold tracking-tight text-[#F0EEFF]">
            Tokitoflix
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-sm text-[#927FBF] hover:text-[#F0EEFF] transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-sm text-[#927FBF] hover:text-[#F0EEFF] transition-colors"
          >
            How It Works
          </a>
          <a
            href="#download"
            className="text-sm bg-[#4F3B78] hover:bg-[#927FBF] text-[#F0EEFF] px-5 py-2.5 rounded-full font-medium transition-colors"
          >
            Download APK
          </a>
        </div>

        <button
          className="md:hidden text-[#927FBF] hover:text-[#F0EEFF]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#1E2030] border-t border-white/5 px-6 py-4 space-y-3">
          <a
            href="#features"
            className="block text-sm text-[#927FBF] hover:text-[#F0EEFF]"
            onClick={() => setMenuOpen(false)}
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="block text-sm text-[#927FBF] hover:text-[#F0EEFF]"
            onClick={() => setMenuOpen(false)}
          >
            How It Works
          </a>
          <a
            href="#download"
            className="block text-sm bg-[#4F3B78] hover:bg-[#927FBF] text-[#F0EEFF] px-5 py-2.5 rounded-full font-medium text-center"
            onClick={() => setMenuOpen(false)}
          >
            Download APK
          </a>
        </div>
      )}
    </nav>
  );
}
