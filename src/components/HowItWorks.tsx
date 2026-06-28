import { Link, Sparkles, BookOpen } from "lucide-react";

const steps = [
  {
    icon: Link,
    step: "01",
    title: "Paste YouTube Link",
    description:
      "Copy any YouTube video URL and paste it into Tokitoflix. Works with lectures, tutorials, podcasts, and more.",
  },
  {
    icon: Sparkles,
    step: "02",
    title: "AI Processes It",
    description:
      "Our AI fetches the transcript, understands the content, and structures it into organized notes with key concepts.",
  },
  {
    icon: BookOpen,
    step: "03",
    title: "Get Your Notes",
    description:
      "Receive clean, structured notes — summary, detailed, or bullet format. Ready to study, share, or export as PDF.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-[#F0EEFF]">
            How It <span className="text-[#C4BBF0]">Works</span>
          </h2>
          <p className="text-[#927FBF] text-lg max-w-xl mx-auto">
            Three simple steps to turn any YouTube video into study material.
            No signup, no fees — just paste and learn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <article key={step.step} className="relative text-center group">
              <div className="text-6xl font-bold text-[#F0EEFF]/[0.03] mb-4 select-none">
                {step.step}
              </div>
              <div className="w-14 h-14 rounded-2xl bg-[#4F3B78]/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#4F3B78]/30 transition-colors">
                <step.icon className="w-7 h-7 text-[#C4BBF0]" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#F0EEFF]">
                {step.title}
              </h3>
              <p className="text-[#927FBF] text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
