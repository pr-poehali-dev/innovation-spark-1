import { Hero } from "@/components/Hero";
import { Roster } from "@/components/Roster";
import { Tournaments } from "@/components/Tournaments";
import { Achievements } from "@/components/Achievements";
import { Stats } from "@/components/Stats";
import { Socials } from "@/components/Socials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Index() {
  return (
    <>
      <Hero />
      <Roster />
      <Tournaments />
      <Achievements />
      <Stats />
      <Socials />
      <FAQ />
      <Footer />
    </>
  );
}
