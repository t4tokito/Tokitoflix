import { Smartphone } from "lucide-react";

const screenshots = [
  {
    id: 1,
    label: "Home Screen",
    color: "from-[#4F3B78]/20 to-[#4F3B78]/5",
  },
  {
    id: 2,
    label: "Notes View",
    color: "from-[#927FBF]/20 to-[#927FBF]/5",
  },
  {
    id: 3,
    label: "Quiz Mode",
    color: "from-[#C4BBF0]/20 to-[#C4BBF0]/5",
  },
  {
    id: 4,
    label: "AI Tools",
    color: "from-[#4F3B78]/30 to-[#4F3B78]/10",
  },
];

export default function Screenshots() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-[#F0EEFF]">
            See It in <span className="text-[#C4BBF0]">Action</span>
          </h2>
          <p className="text-[#927FBF] text-lg max-w-xl mx-auto">
            Clean, minimal design built for focused studying.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {screenshots.map((s) => (
            <div
              key={s.id}
              className={`aspect-[9/16] rounded-2xl bg-gradient-to-b ${s.color} bg-[#262838] border border-white/5 flex flex-col items-center justify-center gap-3 group hover:border-[#4F3B78]/30 transition-all`}
            >
              <Smartphone className="w-10 h-10 text-[#927FBF] group-hover:text-[#C4BBF0] transition-colors" />
              <span className="text-xs text-[#927FBF] font-medium">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-[#927FBF]/60 text-sm mt-6">
          Screenshots coming soon
        </p>
      </div>
    </section>
  );
}
