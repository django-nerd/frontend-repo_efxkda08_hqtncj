import { motion } from 'framer-motion';
import { Rocket, Code2, Palette, Briefcase, Layers, Monitor, Mail, Phone } from 'lucide-react';

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, delay }}
  >
    {children}
  </motion.div>
);

export default function Sections() {
  return (
    <div className="bg-black text-white">
      <Services />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
}

function Section({ id, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} className="py-24 sm:py-28 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-2xl">
            <div className="text-amber-300 font-semibold tracking-wide">{eyebrow}</div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold">{title}</h2>
            {subtitle && <p className="mt-3 text-white/70">{subtitle}</p>}
          </div>
        </FadeIn>
        <div className="mt-12">
          {children}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    {
      icon: <Rocket className="text-amber-300" size={22} />,
      title: 'Strategy & Discovery',
      text: 'Workshops, research, and roadmapping to align business goals with user needs.',
    },
    {
      icon: <Palette className="text-amber-300" size={22} />,
      title: 'Brand & UI Design',
      text: 'Design systems, visual identities, and polished interfaces that convert.',
    },
    {
      icon: <Code2 className="text-amber-300" size={22} />,
      title: 'Web Development',
      text: 'Modern, accessible, SEO-friendly sites built for speed and scalability.',
    },
    {
      icon: <Monitor className="text-amber-300" size={22} />,
      title: 'E‑commerce & CMS',
      text: 'Flexible content and commerce solutions with smooth editorial workflows.',
    },
  ];

  return (
    <Section id="services" eyebrow="Services" title="End‑to‑end website expertise" subtitle="Purposeful minimalism, bold typography, and refined motion—taking cues from leading studios like Web Walley.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it) => (
          <FadeIn key={it.title}>
            <div className="h-full rounded-xl border border-white/10 bg-white/5 p-5 hover:border-amber-400/60 transition-colors">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                  {it.icon}
                </span>
                <h3 className="font-semibold">{it.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{it.text}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

function Portfolio() {
  const projects = [
    {
      t: 'Nimbus Analytics',
      d: 'Data platform website with interactive 3D visuals and editorial hub.',
      tag: 'B2B SaaS',
    },
    {
      t: 'Aurum Jewelry',
      d: 'Luxury e‑commerce, custom product builder, and conversion-focused UX.',
      tag: 'E‑commerce',
    },
    {
      t: 'Volt Fitness',
      d: 'High‑energy brand refresh and lead‑gen landing pages.',
      tag: 'Lifestyle',
    },
  ];

  return (
    <Section id="portfolio" eyebrow="Work" title="Selected projects" subtitle="A crisp selection of recent launches across industries.">
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <FadeIn key={p.t} delay={i * 0.05}>
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02]">
              <div className="aspect-[4/3] bg-[radial-gradient(circle_at_30%_30%,rgba(251,191,36,0.25),rgba(249,115,22,0.15)_40%,transparent_60%)]" />
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-amber-300">
                  <Layers size={16} /> {p.tag}
                </div>
                <h3 className="mt-2 text-lg font-semibold">{p.t}</h3>
                <p className="mt-1 text-sm text-white/70">{p.d}</p>
                <div className="mt-4 inline-flex items-center text-amber-300 text-sm">
                  View case study
                  <Briefcase className="ml-2" size={16} />
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

function About() {
  const bullets = [
    'Performance-first philosophy (Core Web Vitals focused)',
    'Accessibility and inclusive design at the core',
    'SEO and analytics baked into every build',
    'Transparent process, collaborative from day one',
  ];

  return (
    <Section id="about" eyebrow="About" title="A studio for ambitious brands" subtitle="We build refined, conversion‑focused web experiences with a minimalist aesthetic.">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <FadeIn>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-white/80">
              From early-stage startups to enterprise teams, we turn business vision into digital reality. Our approach blends strategy, striking visuals, and scalable engineering so your site not only looks exceptional but drives measurable results.
            </p>
            <ul className="mt-6 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
                  <span className="text-white/80">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <div className="aspect-[4/3] bg-gradient-to-br from-amber-400/20 via-orange-500/10 to-transparent" />
            <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
              <div>
                <div className="text-amber-300 text-sm font-medium">Our Stack</div>
                <div className="mt-1 text-white/90 font-semibold">React, Next.js, Tailwind, FastAPI, Node, Headless CMS</div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Tell us about your project" subtitle="Share a few details and we’ll get back within one business day.">
      <FadeIn>
        <form className="grid md:grid-cols-2 gap-6">
          <div className="md:col-span-1 space-y-4">
            <Input label="Name" name="name" placeholder="Jane Smith" />
            <Input label="Email" type="email" name="email" placeholder="jane@company.com" />
            <Input label="Company" name="company" placeholder="Acme Inc." />
          </div>
          <div className="md:col-span-1">
            <Label>Project details</Label>
            <textarea className="mt-2 w-full h-[170px] rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-amber-400/50" placeholder="Goals, scope, timeline, budget..." />
            <div className="mt-4 flex flex-wrap gap-4 text-white/80 text-sm">
              <span className="inline-flex items-center gap-2"><Phone size={16} className="text-amber-300" /> +1 (555) 012-3456</span>
              <span className="inline-flex items-center gap-2"><Mail size={16} className="text-amber-300" /> hello@webwalley.studio</span>
            </div>
          </div>
          <div className="md:col-span-2">
            <button type="button" className="w-full md:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-black font-semibold shadow hover:shadow-amber-500/30 transition">
              Send Message
            </button>
          </div>
        </form>
      </FadeIn>
    </Section>
  );
}

function Label({ children }) {
  return <label className="text-sm text-white/70">{children}</label>;
}

function Input({ label, ...props }) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        {...props}
        className="mt-2 w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
      />
    </div>
  );
}
