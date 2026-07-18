import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/[0.08]">
        <div className="max-w-[1120px] mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <Image
              src="/logo.jpg"
              alt="TokitoTV Logo"
              width={36}
              height={36}
              className="w-9 h-9 rounded-[10px] object-cover"
              priority
            />
            <span className="font-bold text-xl text-[#EFECE3]">TokitoTV</span>
          </a>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">How It Works</a>
            <a href="#faq" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">FAQ</a>
          </div>
          <a href="#download" className="inline-flex items-center px-[18px] py-2 bg-[#A35C7A] text-white rounded-[10px] text-[13px] font-semibold hover:bg-[#b86e8c] hover:-translate-y-px transition-all">
            Download APK
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-[160px] pb-[100px] text-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
        <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse,rgba(163,92,122,0.25)_0%,transparent_60%)] pointer-events-none" />
        <div className="relative z-10 max-w-[1120px] mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[rgba(163,92,122,0.12)] border border-[rgba(163,92,122,0.25)] rounded-full text-[13px] font-medium text-[#C890A7] mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A35C7A] animate-pulse" />
            Now Available for Android
          </div>
          <h1 className="text-[clamp(42px,7vw,80px)] font-black leading-[1.05] tracking-tight mb-6">
            Watch Anime.<br />
            <span className="bg-gradient-to-br from-[#A35C7A] to-[#C890A7] bg-clip-text text-transparent">Zero Ads.</span><br />
            Pure vibes.
          </h1>
          <p className="text-[17px] text-gray-400 max-w-[520px] mx-auto mb-9 leading-[1.7]">
            TokitoTV is your go-to anime streaming app with a massive library,
            Sub & Dub support, multiple servers, and a clean dark UI.
            No ads. No BS.
          </p>
          <div className="flex gap-3.5 justify-center mb-14">
            <a href="#download" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#A35C7A] text-white rounded-xl text-[15px] font-semibold hover:bg-[#b86e8c] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(163,92,122,0.25)] transition-all">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download APK
            </a>
            <a href="#features" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/[0.06] text-white rounded-xl text-[15px] font-semibold border border-white/[0.12] hover:bg-white/[0.1] hover:-translate-y-px transition-all">
              Explore Features
            </a>
          </div>
          <div className="inline-flex items-center gap-7 px-9 py-5 bg-[#111] border border-white/[0.08] rounded-[20px]">
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-xl font-extrabold text-white">100%</span>
              <span className="text-xs text-gray-500 font-medium">Ad-Free</span>
            </div>
            <div className="w-px h-9 bg-white/[0.08]" />
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-xl font-extrabold text-white">16+</span>
              <span className="text-xs text-gray-500 font-medium">Genres</span>
            </div>
            <div className="w-px h-9 bg-white/[0.08]" />
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-xl font-extrabold text-white">Sub & Dub</span>
              <span className="text-xs text-gray-500 font-medium">Languages</span>
            </div>
          </div>
        </div>
      </section>

      {/* Phone Mockup */}
      <section className="py-10 pb-[100px]">
        <div className="max-w-[1120px] mx-auto px-6 flex justify-center">
          <div className="w-[300px] bg-[#111] rounded-[36px] p-3 border-2 border-white/[0.12] shadow-[0_40px_80px_rgba(163,92,122,0.1),0_0_0_1px_rgba(255,255,255,0.05)]">
            <div className="w-[100px] h-6 bg-[#111] mx-auto rounded-b-[16px] relative z-10" />
            <div className="bg-black rounded-[24px] overflow-hidden -mt-3">
              <div className="flex items-center justify-between px-3.5 pt-7 pb-2.5">
                <div className="flex items-center gap-1.5 font-bold text-[13px]">
                  <Image src="/logo.jpg" alt="TokitoTV" width={24} height={24} className="w-6 h-6 rounded-md object-cover" />
                  <span>TokitoTV</span>
                </div>
              </div>
              <div className="relative h-40 mx-2.5 rounded-xl overflow-hidden bg-gradient-to-br from-[#1a0a12] via-[#2a1020] to-[#1a0a12]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                <div className="absolute bottom-2.5 left-3 right-3">
                  <span className="text-[8px] text-gray-500 block mb-1">Trending</span>
                  <h3 className="text-sm font-bold mb-0.5">Jujutsu Kaisen</h3>
                  <p className="text-[8px] text-gray-500 mb-2 leading-relaxed">Yuji Itadori joins the fight...</p>
                  <div className="flex gap-1.5">
                    <button className="px-2.5 py-1 rounded-md bg-[#A35C7A] text-white text-[8px] font-semibold border-none">Watch Now</button>
                    <button className="px-2.5 py-1 rounded-md bg-white/15 text-white text-[8px] font-semibold border-none">Details</button>
                  </div>
                </div>
              </div>
              <div className="px-3.5 pt-3 pb-1.5">
                <div className="text-[10px] font-bold mb-2">Trending Now</div>
                <div className="flex gap-1.5">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="flex-1 aspect-[2/3] rounded-md bg-gradient-to-b from-[#1a1020] to-[#111]" />
                  ))}
                </div>
              </div>
              <div className="px-3.5 pt-3 pb-1.5">
                <div className="text-[10px] font-bold mb-2">Most Popular</div>
                <div className="flex gap-1.5">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="flex-1 aspect-[2/3] rounded-md bg-gradient-to-b from-[#1a1020] to-[#111]" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-[100px]">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="text-center mb-[60px]">
            <span className="inline-block px-3.5 py-1 bg-[rgba(163,92,122,0.1)] border border-[rgba(163,92,122,0.2)] rounded-full text-xs font-semibold text-[#C890A7] uppercase tracking-wider mb-4">Features</span>
            <h2 className="text-[clamp(32px,5vw,48px)] font-extrabold leading-[1.15] tracking-tight">
              Everything you need,<br />
              <span className="bg-gradient-to-br from-[#A35C7A] to-[#C890A7] bg-clip-text text-transparent">nothing you don&apos;t.</span>
            </h2>
            <p className="text-base text-gray-400 mt-3.5">Built for anime fans who just want to watch in peace.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>, title: "100% Ad-Free", desc: "No pop-ups, no banners, no pre-rolls. Just pure anime streaming without any interruptions." },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>, title: "Sub & Dub", desc: "Watch in Japanese with subtitles or English dub. Choose what works for you with server switching." },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>, title: "Huge Library", desc: "Trending, popular, top airing, recently updated, and upcoming anime - all in one place." },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>, title: "Continue Watching", desc: "Pick up right where you left off. Your watch history is synced and ready to go." },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>, title: "Smart Search", desc: "Find any anime instantly. Search by title and get instant results with scores and details." },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>, title: "Multiple Servers", desc: "If one server is slow, switch to another. Multiple streaming servers for reliability." },
            ].map((f) => (
              <div key={f.title} className="p-8 bg-[#111] border border-white/[0.08] rounded-[20px] transition-all duration-300 hover:border-[rgba(163,92,122,0.3)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                <div className="w-[52px] h-[52px] rounded-[14px] bg-[rgba(163,92,122,0.1)] flex items-center justify-center text-[#A35C7A] mb-5">{f.icon}</div>
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-[100px] bg-[#0D0D0D]">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="text-center mb-[60px]">
            <span className="inline-block px-3.5 py-1 bg-[rgba(163,92,122,0.1)] border border-[rgba(163,92,122,0.2)] rounded-full text-xs font-semibold text-[#C890A7] uppercase tracking-wider mb-4">How It Works</span>
            <h2 className="text-[clamp(32px,5vw,48px)] font-extrabold leading-[1.15] tracking-tight">
              Get started in<br />
              <span className="bg-gradient-to-br from-[#A35C7A] to-[#C890A7] bg-clip-text text-transparent">3 simple steps.</span>
            </h2>
          </div>
          <div className="flex items-start justify-center gap-5">
            {[
              { num: "1", title: "Download the APK", desc: "Tap the download button below. The APK file will be saved to your device." },
              { num: "2", title: "Allow Install", desc: "Go to your settings and allow installation from unknown sources for your file manager." },
              { num: "3", title: "Enjoy Anime", desc: "Open TokitoTV, create an account or browse as guest, and start watching!" },
            ].map((s) => (
              <div key={s.num} className="flex-1 max-w-[300px] text-center p-9">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#A35C7A] to-[#C890A7] flex items-center justify-center text-2xl font-extrabold text-white mx-auto mb-5">{s.num}</div>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="py-[100px]">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="relative p-[60px_40px] bg-[#111] border border-white/[0.08] rounded-3xl text-center overflow-hidden">
            <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[radial-gradient(ellipse,rgba(163,92,122,0.25),transparent_70%)] pointer-events-none" />
            <div className="relative z-10">
              <Image src="/logo.jpg" alt="TokitoTV App" width={88} height={88} className="w-[88px] h-[88px] rounded-[22px] object-cover mx-auto mb-6 shadow-[0_12px_40px_rgba(163,92,122,0.25)]" />
              <h2 className="text-3xl font-extrabold mb-1.5">Download TokitoTV</h2>
              <p className="text-[13px] text-gray-500 mb-3">Version 1.0.0 · Android 7.0+</p>
              <p className="text-[15px] text-gray-400 max-w-[400px] mx-auto mb-7">Free, lightweight, and ad-free. The APK is currently being prepared.</p>
              <div className="flex flex-col items-center gap-2.5 mb-7">
                <button className="inline-flex items-center gap-2.5 px-9 py-4 rounded-xl text-base font-bold border-none cursor-not-allowed bg-[rgba(163,92,122,0.3)] text-white/50 opacity-70" disabled>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Coming Soon
                </button>
                <span className="text-[13px] text-gray-500">APK is being built. Check back soon!</span>
              </div>
              <div className="flex justify-center gap-7">
                {["Safe & Secure", "No Ads", "Lightweight"].map((m) => (
                  <div key={m} className="flex items-center gap-1.5 text-[13px] text-gray-400">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    {m}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-[100px] bg-[#0D0D0D]">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="text-center mb-[60px]">
            <span className="inline-block px-3.5 py-1 bg-[rgba(163,92,122,0.1)] border border-[rgba(163,92,122,0.2)] rounded-full text-xs font-semibold text-[#C890A7] uppercase tracking-wider mb-4">FAQ</span>
            <h2 className="text-[clamp(32px,5vw,48px)] font-extrabold leading-[1.15] tracking-tight">Got questions?</h2>
            <p className="text-base text-gray-400 mt-3.5">Here are some answers.</p>
          </div>
          <div className="max-w-[640px] mx-auto flex flex-col gap-3">
            {[
              { q: "Is TokitoTV really free?", a: "Yes, 100% free. No subscriptions, no hidden fees, no in-app purchases. Just download and watch." },
              { q: "Are there really no ads?", a: "Zero ads. No banner ads, no video pre-rolls, no pop-ups. That's the whole point of TokitoTV." },
              { q: "Is it safe to install the APK?", a: "Yes. The APK is built by us and contains no malware. You can verify it with any antivirus scanner. We recommend downloading only from this official page." },
              { q: "Does it support both Sub and Dub?", a: "Yes! You can choose between Sub (Japanese with subtitles) and Dub (English) for supported anime. You can also switch between multiple streaming servers." },
              { q: "Do I need to create an account?", a: "Nope. You can browse and watch anime without signing in. If you create an account, your watch history and preferences will be synced across devices." },
              { q: "What Android version is required?", a: "TokitoTV requires Android 7.0 (Nougat) or higher." },
            ].map((f) => (
              <details key={f.q} className="bg-[#111] border border-white/[0.08] rounded-xl overflow-hidden open:border-[rgba(163,92,122,0.3)]">
                <summary className="px-6 py-[18px] text-[15px] font-semibold cursor-pointer list-none flex items-center justify-between after:content-['+'] after:text-2xl after:text-gray-500 after:transition-transform peer-open:after:rotate-45">
                  {f.q}
                </summary>
                <p className="px-6 pb-[18px] text-sm text-gray-400 leading-[1.7]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-[60px] border-t border-white/[0.08]">
        <div className="max-w-[1120px] mx-auto px-6 flex justify-between gap-10 pb-10">
          <div>
            <a href="#" className="flex items-center gap-2.5 mb-3">
              <Image src="/logo.jpg" alt="TokitoTV Logo" width={32} height={32} className="w-8 h-8 rounded-lg object-cover" />
              <span className="font-bold text-sm text-white">TokitoTV</span>
            </a>
            <p className="text-sm text-gray-500 max-w-[280px]">Watch anime without ads. Built by fans, for fans.</p>
          </div>
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-wider text-white mb-3.5">Navigation</h4>
            <div className="flex flex-col gap-1">
              <a href="#features" className="text-sm text-gray-500 hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="text-sm text-gray-500 hover:text-white transition-colors">How It Works</a>
              <a href="#download" className="text-sm text-gray-500 hover:text-white transition-colors">Download</a>
              <a href="#faq" className="text-sm text-gray-500 hover:text-white transition-colors">FAQ</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/[0.08] py-5">
          <div className="max-w-[1120px] mx-auto px-6">
            <p className="text-[13px] text-gray-500">&copy; 2026 TokitoTV. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
