import {
  FileText,
  Brain,
  FileDown,
  MessageSquare,
  Users,
  Layers,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "YouTube to Notes",
    description:
      "Paste any YouTube URL and get clean, structured notes — summary, detailed, or bullet format. Perfect for lectures, tutorials, and educational content.",
  },
  {
    icon: Brain,
    title: "AI Quiz Generation",
    description:
      "Auto-generate MCQ quizzes from your notes or YouTube videos to test your understanding. Great for exam prep and active recall.",
  },
  {
    icon: Layers,
    title: "Flashcards",
    description:
      "Create and study flashcards from any topic. Perfect for quick revision, memorization, and spaced repetition learning.",
  },
  {
    icon: FileDown,
    title: "PDF Export",
    description:
      "Export your notes as beautifully formatted PDF files. Study offline, anywhere, anytime without internet.",
  },
  {
    icon: MessageSquare,
    title: "AI Study Tools",
    description:
      "Summarize, explain, and break down complex topics with built-in AI assistance. Learn faster with smart explanations.",
  },
  {
    icon: Users,
    title: "Groups & Friends",
    description:
      "Share notes, chat with friends, and collaborate in study groups. Learn together and stay motivated.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-[#F0EEFF]">
            Everything You Need to{" "}
            <span className="text-[#C4BBF0]">Study Smarter</span>
          </h2>
          <p className="text-[#927FBF] text-lg max-w-xl mx-auto">
            Tokitoflix packs powerful AI tools to transform how you learn from
            YouTube videos. Notes, quizzes, flashcards — all in one free app.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group p-6 rounded-2xl bg-[#262838] border border-white/5 hover:border-[#4F3B78]/40 hover:bg-[#4F3B78]/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#4F3B78]/20 flex items-center justify-center mb-4 group-hover:bg-[#4F3B78]/30 transition-colors">
                <feature.icon className="w-6 h-6 text-[#C4BBF0]" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#F0EEFF]">
                {feature.title}
              </h3>
              <p className="text-[#927FBF] text-sm leading-relaxed">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
