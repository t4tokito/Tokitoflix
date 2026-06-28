"use client";

import Image from "next/image";
import { Download } from "lucide-react";

export default function DownloadSection() {
  return (
    <section id="download" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-b from-[#4F3B78]/15 to-transparent border border-[#4F3B78]/30">
          <div className="w-16 h-16 rounded-2xl overflow-hidden mx-auto mb-6">
            <Image
              src="/logo.jpeg"
              alt="Tokitoflix Logo"
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-[#F0EEFF]">
            Download Tokitoflix App
          </h2>
          <p className="text-[#927FBF] text-lg mb-8 max-w-md mx-auto">
            Available on Android. Free to use with no hidden charges. Start
            turning YouTube videos into notes, quizzes, and flashcards today.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2.5 bg-[#4F3B78] hover:bg-[#927FBF] text-[#F0EEFF] px-10 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-lg hover:shadow-[#4F3B78]/25"
          >
            <Download className="w-5 h-5" />
            Download APK
          </a>
          <p className="text-[#927FBF]/60 text-sm mt-5">
            v1.0.0 &bull; Android 7.0+ &bull; Free
          </p>
        </div>
      </div>
    </section>
  );
}
