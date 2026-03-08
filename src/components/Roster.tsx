import { Pill } from "./Pill";

const players = [
  { nick: "zachem", role: "IGL", flag: "🇷🇺", name: "Максим О." },
  { nick: "kkazerx", role: "Entry", flag: "🇧🇾", name: "Егор Ж." },
  { nick: "ontqx", role: "Support", flag: "🇱🇻", name: "Павел Б." },
  { nick: "zert1x", role: "Lurker", flag: "🇩🇪", name: "Никита Р." },
  { nick: "badyyyi", role: "AWP", flag: "🇷🇺", name: "Бадя Б." },
];

const substitute = { nick: "z1rox", role: "Замена / meat", flag: "🇷🇺", name: "Марк Д." };

const roleColors: Record<string, string> = {
  IGL: "text-yellow-400",
  Entry: "text-red-400",
  Support: "text-blue-400",
  Lurker: "text-purple-400",
  AWP: "text-green-400",
};

export const Roster = () => {
  return (
    <section id="roster" className="relative z-10 py-24 md:py-32">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Pill className="mb-6">СОСТАВ</Pill>
          <h2 className="text-4xl md:text-5xl font-sentient">
            Наша <i className="font-light">команда</i>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-6">
          {players.map((player) => (
            <div
              key={player.nick}
              className="group border border-border bg-black/40 backdrop-blur-sm p-6 hover:border-primary/50 transition-all duration-300 hover:bg-black/60"
              style={{
                clipPath:
                  "polygon(12px 0,calc(100% - 12px) 0,100% 12px,100% calc(100% - 12px),calc(100% - 12px) 100%,12px 100%,0 calc(100% - 12px),0 12px)",
              }}
            >
              <div className="text-3xl mb-3">{player.flag}</div>
              <div
                className={`font-mono text-xs uppercase mb-1 ${roleColors[player.role] || "text-foreground/60"}`}
              >
                {player.role}
              </div>
              <div className="font-sentient text-xl mb-1">{player.nick}</div>
              <div className="font-mono text-xs text-foreground/40">
                {player.name}
              </div>
            </div>
          ))}
        </div>

        {/* Substitute */}
        <div className="flex justify-center">
          <div
            className="border border-border/50 border-dashed bg-black/20 backdrop-blur-sm p-6 flex items-center gap-6 w-full max-w-sm"
            style={{
              clipPath:
                "polygon(12px 0,calc(100% - 12px) 0,100% 12px,100% calc(100% - 12px),calc(100% - 12px) 100%,12px 100%,0 calc(100% - 12px),0 12px)",
            }}
          >
            <div className="text-3xl">{substitute.flag}</div>
            <div>
              <div className="font-mono text-xs uppercase text-foreground/40 mb-1">
                {substitute.role}
              </div>
              <div className="font-sentient text-xl">{substitute.nick}</div>
              <div className="font-mono text-xs text-foreground/40">
                {substitute.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
