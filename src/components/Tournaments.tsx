import { Pill } from "./Pill";

const tournaments = [
  {
    name: "Starladder",
    date: "7 марта 2026",
    status: "LIVE",
    statusLabel: "ИДЁТ СЕЙЧАС",
    statusColor: "text-red-400 border-red-400/30 bg-red-400/10",
    dotColor: "bg-red-400 animate-pulse",
  },
  {
    name: "ESL Cesis",
    date: "Май 2026",
    status: "SOON",
    statusLabel: "СКОРО",
    statusColor: "text-yellow-400 border-yellow-400/30 bg-yellow-400/10",
    dotColor: "bg-yellow-400",
  },
];

export const Tournaments = () => {
  return (
    <section id="tournaments" className="relative z-10 py-24 md:py-32">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Pill className="mb-6">ТУРНИРЫ</Pill>
          <h2 className="text-4xl md:text-5xl font-sentient">
            Ближайшие события
          </h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {tournaments.map((t) => (
            <div
              key={t.name}
              className="border border-border bg-black/40 backdrop-blur-sm p-6 flex items-center justify-between hover:border-primary/30 transition-all duration-300"
              style={{
                clipPath:
                  "polygon(12px 0,calc(100% - 12px) 0,100% 12px,100% calc(100% - 12px),calc(100% - 12px) 100%,12px 100%,0 calc(100% - 12px),0 12px)",
              }}
            >
              <div className="flex items-center gap-4">
                <span className={`inline-block w-2 h-2 rounded-full ${t.dotColor} shadow-glow`} />
                <div>
                  <div className="font-sentient text-xl">{t.name}</div>
                  <div className="font-mono text-xs text-foreground/40 mt-1">{t.date}</div>
                </div>
              </div>
              <div
                className={`font-mono text-xs uppercase px-3 py-1 border rounded ${t.statusColor}`}
              >
                {t.statusLabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};