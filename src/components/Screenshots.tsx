import Image from "next/image";

const screenshots = [
  {
    id: 1,
    src: "/screenshots/first.jpeg",
    label: "Home Screen",
  },
  {
    id: 2,
    src: "/screenshots/second.jpeg",
    label: "Notes View",
  },
  {
    id: 3,
    src: "/screenshots/third.jpeg",
    label: "Quiz Mode",
  },
  {
    id: 4,
    src: "/screenshots/forth.jpeg",
    label: "AI Tools",
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
              className="aspect-[9/16] rounded-2xl overflow-hidden border border-white/5 group hover:border-[#4F3B78]/30 transition-all"
            >
              <Image
                src={s.src}
                alt={s.label}
                width={300}
                height={533}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
