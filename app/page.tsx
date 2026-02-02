import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Content from '@/components/Content';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen transition-colors duration-300" style={{ background: 'var(--background)' }}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Content />
      <Contact />
    </main>
  );
}
