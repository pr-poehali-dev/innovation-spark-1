import { Pill } from "./Pill";

const stats = [
  { nick: "badyyyi", role: "AWP", rating: 1.56, flag: "🇷🇺" },
  { nick: "kkazerx", role: "Entry", rating: 1.43, flag: "🇧🇾" },
  { nick: "zachem", role: "IGL", rating: 1.20, flag: "🇷🇺" },
  { nick: "ontqx<3", role: "Support", rating: 1.15, flag: "🇱🇻" },
  { nick: "zert1x", role: "Lurker", rating: 1.00, flag: "🇩🇪" },
  { nick: "z1rox", role: "Замена", rating: 0.67, flag: "🇷🇺" },
];

const getRatingColor = (rating: number) => {
  if (rating >= 1.4) return "text-green-400";
  if (rating >= 1.1) return "text-yellow-400";
  if (rating >= 0.9) return "text-orange-400";
  return "text-red-400";
};

const getRatingBarWidth = (rating: number) => {
  const max = 1.7;
  return Math.min((rating / max) * 100, 100);
};

export const Stats = () => {
  return (
    <section id="stats" className="relative z-10 py-24 md:py-32">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Pill className="mb-6">СТАТИСТИКА</Pill>
          <h2 className="text-4xl md:text-5xl font-sentient">
            Рейтинг игроков
          </h2>
          <p className="font-mono text-sm text-foreground/40 mt-4">HLTV Rating 2.0</p>
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          {stats.map((player, i) => (
            <div
              key={player.nick}
              className="border border-border bg-black/40 backdrop-blur-sm p-4 hover:border-primary/30 transition-all duration-300"
              style={{
                clipPath:
                  "polygon(8px 0,calc(100% - 8px) 0,100% 8px,100% calc(100% - 8px),calc(100% - 8px) 100%,8px 100%,0 calc(100% - 8px),0 8px)",
              }}
            >
              <div className="flex items-center gap-4">
                <div className="font-mono text-xs text-foreground/30 w-4">#{i + 1}</div>
                <div className="text-lg w-7">{player.flag}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-sentient text-base">{player.nick}</span>
                      <span className="font-mono text-xs text-foreground/40 uppercase">{player.role}</span>
                    </div>
                    <span className={`font-mono text-sm font-bold ${getRatingColor(player.rating)}`}>
                      {player.rating.toFixed(2)}
                    </span>
                  </div>
                  <div className="h-0.5 bg-border rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${getRatingColor(player.rating).replace("text-", "bg-")}`}
                      style={{ width: `${getRatingBarWidth(player.rating)}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};