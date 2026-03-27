import { useEffect } from 'react';
import { Background } from './components/Background';
import { Cursor } from './components/Cursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Ticker } from './components/Ticker';
import { Stats } from './components/Stats';
import { Pipeline } from './components/Pipeline';
import { Documents } from './components/Documents';
import { Features } from './components/Features';
import { Tracks } from './components/Tracks';
import { HowTo } from './components/HowTo';
import { Footer } from './components/Footer';
import { AdBlockDetector } from './components/AdBlockDetector';

function App() {
  useEffect(() => {
    // Progress
    const prog = document.getElementById('prog');
    const onScroll = () => {
      if (prog) {
        prog.style.width = (window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100) + '%';
      }
    };
    window.addEventListener('scroll', onScroll);

    // Reveal
    const obs = new IntersectionObserver(entries => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('in'), i * 70);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

    return () => {
      window.removeEventListener('scroll', onScroll);
      obs.disconnect();
    };
  }, []);

  return (
    <>
      <AdBlockDetector />
      <Cursor />
      <Background />
      <Navbar />
      <Hero />
      <Ticker />
      <Stats />
      <Pipeline />
      <Documents />
      <Features />
      <Tracks />
      <HowTo />
      <Footer />
    </>
  );
}

export default App;
