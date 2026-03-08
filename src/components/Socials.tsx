import { Pill } from "./Pill";
import Icon from "@/components/ui/icon";

const channels = [
  {
    name: "hikowexz",
    description: "Личный канал",
    url: "https://t.me/hikolivewarllokk",
    type: "telegram",
  },
  {
    name: "Mental",
    description: "Официальный канал команды",
    url: "https://t.me/warllokkcs2",
    type: "telegram",
  },
  {
    name: "zert1x",
    description: "Канал Nikita / TikTok",
    url: "https://t.me/zert1xcs",
    extraUrl: "https://www.tiktok.com/@zert1x666",
    type: "telegram",
  },
  {
    name: "league",
    description: "Лига Mental",
    url: "https://t.me/taketeams",
    type: "telegram",
  },
];

export const Socials = () => {
  return (
    <section id="socials" className="relative z-10 py-24 md:py-32">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Pill className="mb-6">КАНАЛЫ</Pill>
          <h2 className="text-4xl md:text-5xl font-sentient">
            Telegram каналы
          </h2>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {channels.map((ch) => (
            <a
              key={ch.name}
              href={ch.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-border bg-black/40 backdrop-blur-sm p-6 hover:border-primary/50 hover:bg-black/60 transition-all duration-300 block"
              style={{
                clipPath:
                  "polygon(12px 0,calc(100% - 12px) 0,100% 12px,100% calc(100% - 12px),calc(100% - 12px) 100%,12px 100%,0 calc(100% - 12px),0 12px)",
              }}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                    <Icon name="Send" size={14} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="font-sentient text-lg group-hover:text-primary transition-colors duration-200">
                      @{ch.name}
                    </div>
                    <div className="font-mono text-xs text-foreground/40 mt-0.5">
                      {ch.description}
                    </div>
                  </div>
                </div>
                <Icon
                  name="ArrowUpRight"
                  size={16}
                  className="text-foreground/30 group-hover:text-primary transition-colors duration-200 mt-1"
                />
              </div>

              {ch.extraUrl && (
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(ch.extraUrl, "_blank", "noopener,noreferrer");
                  }}
                  className="mt-4 flex items-center gap-2 text-foreground/40 hover:text-foreground/70 transition-colors cursor-pointer"
                >
                  <Icon name="Play" size={12} />
                  <span className="font-mono text-xs">TikTok @zert1x666</span>
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};