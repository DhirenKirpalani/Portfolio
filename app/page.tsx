import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Content from '@/components/Content';
import Contact from '@/components/Contact';
import StructuredData from '@/components/StructuredData';

export default function Home() {
  return (
    <main className="min-h-screen transition-colors duration-300" style={{ background: 'var(--background)' }}>
      <StructuredData />
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
