import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white scroll-smooth">
      {/* subtle backdrop gradient accents */}
      <div className="pointer-events-none fixed inset-0 opacity-40 mix-blend-screen" aria-hidden>
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Sections />
      </main>
      <Footer />
    </div>
  );
}

export default App;
