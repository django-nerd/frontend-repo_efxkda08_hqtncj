import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { MoveUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/a6HhFsV3-DN9Z-yP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight text-white">
            Web Walley Studio builds premium websites that convert.
          </h1>
          <p className="mt-6 text-white/80 text-lg">
            Strategy. Design. Engineering. Inspired by global studios, crafted to your brand. Lightning-fast, elegant, and measurable.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-black font-semibold px-6 py-3 shadow hover:shadow-amber-500/30 transition-shadow"
            >
              See Our Work
              <MoveUpRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-white hover:border-amber-400 hover:text-amber-300 transition"
            >
              Start a Project
            </a>
          </div>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { k: '10+', l: 'Years Experience' },
            { k: '120+', l: 'Projects Delivered' },
            { k: '98%', l: 'Client Satisfaction' },
            { k: '24/7', l: 'Support' },
          ].map((s) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4 text-center"
            >
              <div className="text-2xl font-bold text-amber-300">{s.k}</div>
              <div className="text-sm text-white/70">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
