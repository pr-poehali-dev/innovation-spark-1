import { Pill } from "./Pill";
import { useState } from "react";
import Icon from "@/components/ui/icon";

const faqs = [
  {
    q: "Что такое Mental Team?",
    a: "Mental Team — профессиональная команда по Counter-Strike 2. Мы участвуем в онлайн и офлайн турнирах, постоянно прокачиваем скилл и развиваем комьюнити вокруг CS2.",
  },
  {
    q: "Как вступить в команду?",
    a: "Слоты в основном составе закрыты. Следи за нашим официальным Telegram-каналом Mental — там первыми публикуем объявления о трайаутах.",
  },
  {
    q: "Где смотреть матчи Mental Team?",
    a: "Трансляции матчей выходят в Telegram-канале hikowexz. Подпишись, чтобы не пропустить стримы и хайлайты.",
  },
  {
    q: "Какой рейтинг HLTV у команды?",
    a: "Лучший рейтинг в команде у badyyyi — 1.56 (AWP). Средний рейтинг основного состава — 1.27. Актуальную статистику смотри в разделе выше.",
  },
  {
    q: "Что за league канал?",
    a: "Канал @taketeams — это лига Mental, где команды могут сыграть против нас и других участников. Идеально для медиа-команд, которые хотят получить соревновательный опыт.",
  },
];

export const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative z-10 py-24 md:py-32">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Pill className="mb-6">FAQ</Pill>
          <h2 className="text-4xl md:text-5xl font-sentient">
            Частые <i className="font-light">вопросы</i>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-border bg-black/40 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-border/80"
              style={{
                clipPath:
                  "polygon(8px 0,calc(100% - 8px) 0,100% 8px,100% calc(100% - 8px),calc(100% - 8px) 100%,8px 100%,0 calc(100% - 8px),0 8px)",
              }}
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-mono text-sm text-foreground/80 pr-4">{faq.q}</span>
                <Icon
                  name={open === i ? "ChevronUp" : "ChevronDown"}
                  size={16}
                  className="text-foreground/40 flex-shrink-0 transition-transform duration-200"
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="font-mono text-sm text-foreground/50 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
