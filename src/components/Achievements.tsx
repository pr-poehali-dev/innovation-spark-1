import { Pill } from "./Pill";

const achievements = [
  {
    place: "1",
    placeLabel: "1ST PLACE",
    tournament: "Day Media Cup 2025",
    icon: "🥇",
    color: "text-yellow-400 border-yellow-400/30",
  },
  {
    place: "2",
    placeLabel: "2ND PLACE",
    tournament: "Winter Media Cup 2025",
    icon: "🥈",
    color: "text-slate-300 border-slate-300/30",
  },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="relative z-10 py-24 md:py-32">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Pill className="mb-6">ДОСТИЖЕНИЯ</Pill>
          <h2 className="text-4xl md:text-5xl font-sentient">
            Наши <i className="font-light">победы</i>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {achievements.map((a) => (
            <div
              key={a.tournament}
              className="border border-border bg-black/40 backdrop-blur-sm p-8 text-center hover:border-primary/30 transition-all duration-300 group"
              style={{
                clipPath:
                  "polygon(12px 0,calc(100% - 12px) 0,100% 12px,100% calc(100% - 12px),calc(100% - 12px) 100%,12px 100%,0 calc(100% - 12px),0 12px)",
              }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{a.icon}</div>
              <div className={`font-mono text-xs uppercase mb-2 ${a.color.split(" ")[0]}`}>
                {a.placeLabel}
              </div>
              <div className="font-sentient text-lg">{a.tournament}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
