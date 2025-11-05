export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} Web Walley Studio. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#services" className="text-white/70 hover:text-amber-300">Services</a>
          <a href="#portfolio" className="text-white/70 hover:text-amber-300">Work</a>
          <a href="#about" className="text-white/70 hover:text-amber-300">About</a>
          <a href="#contact" className="text-white/70 hover:text-amber-300">Contact</a>
        </div>
      </div>
    </footer>
  );
}
