import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border py-12">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <Logo className="w-[120px] opacity-60" />
        <p className="font-mono text-xs text-foreground/30 text-center">
          © 2026 Mental Team · CS2 · All rights reserved
        </p>
        <a
          href="https://t.me/warllokkcs2"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs uppercase text-primary hover:text-primary/70 transition-colors duration-150"
        >
          Telegram →
        </a>
      </div>
    </footer>
  );
};
