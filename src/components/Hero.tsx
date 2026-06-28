"use client";

import { Download, Play, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-[#4F3B78]/20 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#4F3B78]/15 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-[#4F3B78]/20 border border-[#4F3B78]/30 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#927FBF] animate-pulse" />
          <span className="text-sm text-[#C4BBF0] font-medium">
            AI-Powered YouTube Notes
          </span>
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-tight mb-6 text-[#F0EEFF]">
          Turn{" "}
          <span className="text-[#C4BBF0]">YouTube Videos</span>{" "}
          into{" "}
          <span className="text-[#C4BBF0]">Smart Notes</span>
        </h1>

        <p className="text-lg sm:text-xl text-[#927FBF] max-w-2xl mx-auto mb-10 leading-relaxed">
          Free AI tool to convert any YouTube video into structured notes,
          quizzes, and flashcards. Paste a link and start studying instantly — no
          signup required.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#download"
            className="flex items-center gap-2.5 bg-[#4F3B78] hover:bg-[#927FBF] text-[#F0EEFF] px-8 py-4 rounded-full font-semibold text-base transition-all hover:shadow-lg hover:shadow-[#4F3B78]/25"
          >
            <Download className="w-5 h-5" />
            Download APK
          </a>
          <a
            href="#how-it-works"
            className="flex items-center gap-2.5 bg-[#262838] hover:bg-[#262838]/80 text-[#F0EEFF] px-8 py-4 rounded-full font-semibold text-base border border-white/10 transition-all"
          >
            <Play className="w-5 h-5" />
            See How It Works
          </a>
        </div>

        <div className="mt-16 animate-bounce">
          <ArrowDown className="w-6 h-6 text-[#927FBF] mx-auto" />
        </div>
      </div>
    </section>
  );
}
