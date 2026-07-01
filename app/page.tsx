import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { CurrentExperience } from "@/components/sections/current-experience";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Education } from "@/components/sections/education";

export default function Home() {
  return (
    <div className="pb-20">
      <Hero />

      <About />

      <Skills />

      <CurrentExperience />

      <FeaturedProjects />

      <Education />
    </div>
  );
}
