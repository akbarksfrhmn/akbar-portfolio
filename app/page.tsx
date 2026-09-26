import { Header } from "@/components/header";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Lewati ke konten
      </a>
      <Header />
      <main id="main" className="shell">
        <div className="intro-line">
          <span>PORTOFOLIO / MUHAMMAD AKBAR KASYFURRAHMAN</span>
          <span className="edition">CODE. CONNECT. CREATE.</span>
        </div>
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
