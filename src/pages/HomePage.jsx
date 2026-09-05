import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
const EMAIL = 'krwind.africa@gmail.com';
const PHONE = '+49 151 45632715';

const PROJECTS = [{
  n: '01',
  title: 'Papierhaus Press',
  scope: 'Brand Identity · Print · Art Direction',
  year: '2025',
  img: '/images/papierhaus.webp',
  alt: 'Printed brand identity materials in black ink on off-white paper, arranged on a concrete table',
  copy: 'A Berlin paper goods house, rebuilt from the sheet up — identity, typography and a print system that treats every delivery note like a poster.'
}, {
  n: '02',
  title: 'Nachtfalter',
  scope: 'Campaign · Editorial · Branded Content',
  year: '2024',
  img: '/images/nachtfalter.webp',
  alt: 'Editorial campaign photograph of a model in an oversized coat against a concrete wall at dusk',
  copy: 'A night-culture magazine turned campaign platform — concept, editorial direction and a city-wide poster series shot after dark.'
}, {
  n: '03',
  title: 'Freifeld Sessions',
  scope: 'Live Experience · Partnerships · Production',
  year: '2024',
  img: '/images/freifeld.webp',
  alt: 'An intimate cultural event in a warehouse venue, warm spotlights and crowd silhouettes',
  copy: 'A listening series in a former warehouse — programming, partners and production for twelve evenings of music, film and argument.'
}];
const MARQUEE_ITEMS = ['IDEAS', 'BRANDS', 'CAMPAIGNS', 'EXPERIENCES'];
function Header() {
  return <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
            <div className="flex items-center justify-between px-5 py-4 text-wind-white md:px-8">
                <a href="#top" className="font-display text-sm tracking-[0.35em]">
                    WIND<span className="align-super text-[0.6em]">®</span>
                </a>
                <nav className="hidden items-center gap-8 text-[11px] font-medium uppercase tracking-[0.25em] md:flex">
                    <a href="#about" className="transition-opacity hover:opacity-50">About</a>
                    <a href="#work" className="transition-opacity hover:opacity-50">Work</a>
                    <a href="#contact" className="transition-opacity hover:opacity-50">Contact</a>
                </nav>
                <span className="text-[11px] font-medium uppercase tracking-[0.25em]">Berlin, DE</span>
            </div>
        </header>;
}
function Hero() {
  const letters = 'WIND'.split('');
  return <section id="top" className="flex min-h-[100dvh] flex-col bg-wind-blue p-4 text-wind-white md:p-6">
            <div className="relative flex flex-1 flex-col justify-between border border-wind-black px-5 pb-6 pt-20 md:px-10 md:pb-10 md:pt-24">
                {/* Top row */}
                <div className="flex items-start justify-between text-[11px] font-medium uppercase tracking-[0.3em] md:text-xs">
                    <span>Katrina Rose Wind</span>
                    <span className="hidden sm:block"></span>
                    <span className="text-right">Est. Berlin</span>
                </div>

                {/* Wordmark */}
                <div className="py-10 md:py-6">
                    <h1 aria-label="WIND" className="flex justify-center overflow-hidden font-display leading-[0.85] tracking-[-0.02em]">
                        {letters.map((letter, i) => <motion.span key={i} aria-hidden="true" className="inline-block text-[clamp(5.5rem,24vw,22rem)]" initial={{
            y: '110%'
          }} animate={{
            y: 0
          }} transition={{
            delay: 0.15 + i * 0.08,
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1]
          }}>
                                {letter}
                            </motion.span>)}
                    </h1>
                    <motion.div className="mt-2 flex justify-center md:mt-4" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.9,
          duration: 0.6
        }}>
                  <svg
                      viewBox="0 0 120 40"
                      className="h-12 w-auto text-wind-white md:h-16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="6"
                      strokeLinecap="round"
                  >
                      <path d="M8 12 C30 4, 42 20, 62 12 S94 4, 112 12" />
                      <path d="M8 26 C30 18, 42 34, 62 26 S94 18, 112 26" />
                  </svg>
                    </motion.div>
                </div>

                {/* Bottom row */}
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <p className="max-w-xs text-sm font-medium uppercase leading-relaxed tracking-[0.2em]">
                        Creative · Brand · Culture
                    </p>
                    <motion.a href="#about" className="hidden items-center gap-2 text-[11px] font-medium uppercase tracking-[0.25em] md:flex" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 1.2,
          duration: 0.6
        }}>
                        Scroll <ArrowDown className="h-4 w-4 animate-bounce" strokeWidth={1.5} />
                    </motion.a>
                    <p className="max-w-xs text-sm font-medium uppercase leading-relaxed tracking-[0.2em] md:text-right">
                        Ideas · Brands · Campaigns · Experiences
                    </p>
                </div>
            </div>
        </section>;
}
function Marquee() {
  const row = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return <div className="overflow-hidden border-y border-wind-white bg-wind-black py-4 text-wind-white md:py-5">
            <div className="animate-wind-marquee flex w-max items-center whitespace-nowrap">
                {[0, 1].map(half => <div key={half} className="flex items-center" aria-hidden={half === 1}>
                        {row.map((item, i) => <span key={`${half}-${i}`} className="flex items-center font-display text-2xl tracking-wide md:text-4xl">
                                <span className="px-6 md:px-10">{item}</span>
                            <svg
                                viewBox="0 0 120 40"
                                className="h-6 w-auto text-wind-blue md:h-8"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="7"
                                strokeLinecap="round"
                            >
                                <path d="M8 12 C30 4, 42 20, 62 12 S94 4, 112 12" />
                                <path d="M8 26 C30 18, 42 34, 62 26 S94 18, 112 26" />
                            </svg>
                            </span>)}
                    </div>)}
            </div>
        </div>;
}
function About() {
  return <section id="about" className="bg-wind-white px-5 py-24 text-wind-black md:px-10 md:py-36">
            <Reveal>
                <p className="mb-10 text-[11px] font-medium uppercase tracking-[0.3em] text-wind-black/50">
                    01 — Manifesto
                </p>
            </Reveal>
            <Reveal delay={0.1}>
                <h2 className="max-w-5xl font-display text-3xl leading-[1.15] tracking-tight md:text-6xl">
                    WIND is the creative studio of Katrina Rose Wind — working across{' '}
                    <span className="marker-underline">ideas, brands and culture</span> from
                    Berlin, for anyone with something worth saying.
                </h2>
            </Reveal>

            <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-12 md:gap-8">
                <Reveal className="md:col-span-5" delay={0.1}>
                    <figure>
                        <div className="overflow-hidden border border-wind-black">
                      <img src="/images/about.jpg" alt="Katrina Rose Wind by the lake" className="aspect-[3/4] w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]" loading="lazy" />
                        </div>
                        <figcaption className="mt-3 flex justify-between text-[11px] font-medium uppercase tracking-[0.25em] text-wind-black/50">
                            <span>Katrina Rose Wind</span>
                            <span>Berlin Studio</span>
                        </figcaption>
                    </figure>
                </Reveal>

                <div className="flex flex-col justify-between md:col-span-6 md:col-start-7">
                    <Reveal delay={0.15}>
                        <div className="space-y-6 text-lg leading-relaxed md:text-xl">
                            <p>
                                Some people make campaigns. Some people make culture. The
                                interesting work happens where the two overlap — and that is
                                exactly where WIND sits.
                            </p>
                            <p>
                                Katrina works with creative agencies, brand teams, publishers,
                                cultural organisations and production companies — shaping
                                concepts, building brands, directing campaigns and producing
                                experiences that people actually remember.
                            </p>
                            <p>
                                Not a performance marketer. Not a content machine. A creative
                                person with a strong point of view and the craft to back it up.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <dl className="mt-12 grid grid-cols-2 gap-px border border-wind-black bg-wind-black text-sm md:grid-cols-4">
                            {[['Based in', 'Berlin'], ['Working', 'Worldwide'], ['Since', '2016'], ['Status', 'Available']].map(([k, v]) => <div key={k} className="bg-wind-white p-4">
                                    <dt className="text-[10px] font-medium uppercase tracking-[0.25em] text-wind-black/50">
                                        {k}
                                    </dt>
                                    <dd className="mt-2 font-display text-base uppercase tracking-wide text-wind-black">
                                        {v}
                                    </dd>
                                </div>)}
                        </dl>
                    </Reveal>
                </div>
            </div>
        </section>;
}
  

function Work() {
  return <section id="work" className="bg-wind-blue px-5 pb-24 pt-16 text-wind-white md:px-10 md:pb-36 md:pt-20">
            <Reveal>
                <div className="mb-10 flex items-end justify-between border-t border-wind-black pt-6">
                    <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-wind-black">
                        03 — Selected Work
                    </p>
                    <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-wind-black">
                        2024 — 2025
                    </p>
                </div>
            </Reveal>
            <Reveal delay={0.05}>
                <h2 className="mb-16 font-display text-[clamp(2.5rem,8vw,7rem)] uppercase leading-[0.9] tracking-tight text-wind-white md:mb-24">
                    Work that
                    <br />
                    moves<span className="align-top text-[0.4em]">↗</span>
                </h2>
            </Reveal>

            <div className="space-y-20 md:space-y-28">
                {PROJECTS.map((project, i) => <div key={project.n} className="grid items-start gap-8 md:grid-cols-12">
                        <Reveal className={i % 2 === 0 ? 'md:col-span-7' : 'md:col-span-7 md:col-start-6'} delay={0.05}>
                            <div className="group overflow-hidden border border-wind-black">
                                <img src={project.img} alt={project.alt} className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" loading="lazy" />
                            </div>
                        </Reveal>
                        <Reveal className={i % 2 === 0 ? 'md:col-span-4 md:col-start-9' : 'md:col-span-4 md:col-start-1 md:row-start-1'} delay={0.15}>
                            <div className="flex h-full flex-col justify-between gap-6 md:pt-2">
                                <div>
                                    <div className="flex items-baseline justify-between border-b border-wind-black pb-4">
                                        <span className="font-display text-4xl text-wind-black md:text-5xl">
                                            {project.n}
                                        </span>
                                        <span className="text-xs font-medium tracking-[0.25em] text-wind-black/70">
                                            {project.year}
                                        </span>
                                    </div>
                                    <h3 className="mt-6 font-display text-2xl uppercase tracking-tight text-wind-white md:text-3xl">
                                        {project.title}
                                    </h3>
                                    <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.25em] text-wind-black">
                                        {project.scope}
                                    </p>
                                    <p className="mt-5 leading-relaxed text-wind-white/90">
                                        {project.copy}
                                    </p>
                                </div>
                                <a href={`mailto:${EMAIL}?subject=About ${project.title}`} className="inline-flex w-fit items-center gap-2 border-b border-wind-black pb-1 text-xs font-medium uppercase tracking-[0.25em] text-wind-black transition-opacity hover:opacity-50">
                                    Ask about this <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                                </a>
                            </div>
                        </Reveal>
                    </div>)}
            </div>
        </section>;
}
function Contact() {
  return <footer id="contact" className="bg-wind-black text-wind-white">
            <div className="px-5 pb-10 pt-24 md:px-10 md:pt-36">
                <Reveal>
                    <p className="mb-10 text-[11px] font-medium uppercase tracking-[0.3em] text-wind-white/50">
                        04 — Contact
                    </p>
                </Reveal>
                <Reveal delay={0.1}>
                    <h2 className="font-display text-[clamp(3rem,11vw,10rem)] uppercase leading-[0.9] tracking-tight">
                        Let&rsquo;s make
                        <br />
                        something
                    </h2>
                </Reveal>
                <Reveal delay={0.15}>
                    <div className="mt-12 flex justify-start">
                  <svg
                      viewBox="0 0 120 40"
                      className="h-14 w-auto text-wind-white md:h-20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="6"
                      strokeLinecap="round"
                  >
                      <path d="M8 12 C30 4, 42 20, 62 12 S94 4, 112 12" />
                      <path d="M8 26 C30 18, 42 34, 62 26 S94 18, 112 26" />
                  </svg>
                    </div>
                </Reveal>

                <Reveal delay={0.2}>
                    <div className="mt-16 grid gap-10 border-t border-wind-white/30 pt-10 md:grid-cols-3">
                        <div>
                            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-wind-white/50">
                                Email
                            </p>
                            <a href={`mailto:${EMAIL}`} className="mt-3 inline-flex items-center gap-2 text-lg font-medium transition-opacity hover:opacity-60 md:text-xl">
                                {EMAIL} <ArrowUpRight className="h-5 w-5" strokeWidth={1.5} />
                            </a>
                        </div>
                        <div>
                            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-wind-white/50">
                                Phone
                            </p>
                            <a href="tel:+4915145632715" className="mt-3 inline-block text-lg font-medium transition-opacity hover:opacity-60 md:text-xl">
                                {PHONE}
                            </a>
                        </div>
                        <div>
                            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-wind-white/50">
                                Studio
                            </p>
                            <p className="mt-3 text-lg font-medium md:text-xl">
                                Berlin — working internationally
                            </p>
                        </div>
                    </div>
                </Reveal>

                <div className="mt-20 overflow-hidden md:mt-28" aria-hidden="true">
                    <p className="wind-outline select-none whitespace-nowrap text-center font-display text-[clamp(6rem,26vw,24rem)] uppercase leading-[0.8] tracking-[-0.02em]">
                        WIND
                    </p>
                </div>

                <div className="mt-10 flex flex-col gap-3 border-t border-wind-white/30 pt-6 text-[11px] font-medium uppercase tracking-[0.25em] text-wind-white/50 md:flex-row md:items-center md:justify-between">
                    <span>© 2026 Katrina Rose Wind</span>
                    <span>Creative · Brand · Culture</span>
                    <span>katrinarosewind.com</span>
                </div>
            </div>
        </footer>;
}
function HomePage() {
    return <>
            <Helmet>
                <title>WIND — Katrina Rose Wind · Creative · Brand · Culture</title>
                <meta name="description" content="WIND is the creative work of Katrina Rose Wind — ideas, brands, campaigns and experiences. Creative concepts, brand thinking, editorial, partnerships, production and live experiences from Berlin, working internationally." />
            </Helmet>
            <Seo title="WIND — Katrina Rose Wind · Creative · Brand · Culture" description="Creative concepts, brand thinking, campaigns, editorial, partnerships, production and live experiences. Berlin, working internationally." siteName="WIND" url="https://katrinarosewind.com" type="website" />
            <Header />
            <main>
                <Hero />
                <Marquee />
                <About />
                <Work />
            </main>
            <Contact />
        </>;
}
export default HomePage;
