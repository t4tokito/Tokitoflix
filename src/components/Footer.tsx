import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg overflow-hidden">
              <Image
                src="/logo.jpeg"
                alt="Tokitoflix Logo"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-semibold text-sm text-[#F0EEFF]">
              Tokitoflix
            </span>
          </div>
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-[#927FBF]">
            <a href="#features" className="hover:text-[#F0EEFF] transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-[#F0EEFF] transition-colors">
              How It Works
            </a>
            <a href="#download" className="hover:text-[#F0EEFF] transition-colors">
              Download
            </a>
          </nav>
        </div>
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#927FBF] text-sm">
            &copy; {new Date().getFullYear()} Tokitoflix. All rights reserved.
          </p>
          <p className="text-[#927FBF]/60 text-xs">
            Free AI YouTube Notes Maker — Turn Videos into Notes, Quizzes & Flashcards
          </p>
        </div>
      </div>
    </footer>
  );
}
