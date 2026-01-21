import Experience from "@/src/components/public/experience";
import HeroSection from "@/src/components/public/hero-section";
import TechnicalSkills from "@/src/components/public/technical-skills";

export default function Page() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 md:py-20 md:space-y-24 space-y-14">
      <HeroSection />
      <TechnicalSkills />
      <Experience />
    </section>
  );
}
