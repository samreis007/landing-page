import Contacts from "./components/contacts";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Sobre from "./components/sobre";

export default function Home() {
  return (
    <main>
      <Hero />
      <Sobre />
      <Skills />
      <Projects />
      
      <Contacts />
      
    </main>
  );
}