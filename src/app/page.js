import About from "./_components/About";
import Contact from "./_components/Contact";
import Hero from "./_components/Hero";
import Projects from "./_components/Projects";
import Skills from "./_components/Skills";


export default function Home() {
  return (
   <div className="px-20 bg-indigo-50">
    <Hero />
    <Projects />
    <Skills />
    <About />
    <Contact />
   </div>
  );
}
