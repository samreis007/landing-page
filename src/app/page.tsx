import Contacts from "./components/contacts";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Skills from "./components/skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      <Contacts />
    </main>
  );
}