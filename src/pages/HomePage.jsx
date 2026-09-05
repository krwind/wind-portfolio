import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Plus } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';

const EMAIL = 'krwind.africa@gmail.com';
const PHONE = '+49 151 45632715';

const FILTERS = ['ALL', 'MARKETING', 'CREATIVE', 'EDITORIAL', 'EXPERIENCES'];

const PROJECTS = [
  {
    n: '01',
    title: 'Berlin Bites',
    category: 'CREATIVE',
    type: 'Owned Media × Culture',
    tags: ['MARKETING', 'CREATIVE', 'EDITORIAL'],
    intro: 'An independent food and culture platform concept built around editorial thinking, audience understanding and a point of view on Berlin.',
    detail: 'Berlin Bites began as an independent pitch/concept for The Berliner. I developed the positioning, personality, visual language, editorial strategy and social content system from the ground up. The concept was taken into a tangible brand platform; the full rollout is currently awaiting budget.',
    sections: [
      ['THE IDEA', 'A food platform with the instincts of a newsroom: culturally curious, visually distinctive, useful and opinionated — built to give Berlin’s food scene a voice beyond the standard influencer playbook.'],
      ['WHAT I DID', 'Positioning · personality · visual language · editorial strategy · social content system · recurring formats · content architecture · voice.'],
      ['STATUS', 'Independent pitch/concept for The Berliner. The account and identity were established and ready for rollout; the full rollout is awaiting budget.'],
    ],
    image: '/work/berlin-bites-cover.jpg',
    imageAlt: 'Berlin Bites project cover',
    note: 'Independent pitch / concept · The Berliner',
    link: '/work/berlin-bites.pdf',
  },
  {
    n: '02',
    title: 'NEXT.APP',
    category: 'MARKETING',
    type: 'Brand Strategy × Creative Direction',
    tags: ['MARKETING', 'CREATIVE'],
    intro: 'Building a new umbrella brand from inception — from naming and positioning to tone of voice, creative development and launch thinking.',
    detail: 'next.app was created as the umbrella brand unifying droidcon, Fluttercon and new mobile development and tech leadership events worldwide. I helped build the brand from the ground up, shaping the name, positioning, tone of voice, marketing strategy and creative development, including selecting the external agency for the visual identity.',
    sections: [
      ['THE CHALLENGE', 'Create one recognisable brand for a broad international technology ecosystem while keeping it credible to experienced engineers and welcoming to emerging audiences.'],
      ['THE BRAND', 'next.app was positioned as an ecosystem-first platform for builders, creators and tech leaders shaping the future of mobile.'],
      ['MY ROLE', 'Naming · positioning · marketing strategy · tone of voice · audience thinking · creative direction · agency selection · brand development.'],
      ['THE VOICE', 'Playfully smart · future-obsessed · inclusive & human. The tone-of-voice system translated those traits into practical messaging principles for an international audience.'],
    ],
    image: '/work/next-app/cover.jpg',
    imageAlt: 'next.app tone of voice cover',
    note: 'Brand built from inception · Tone of voice + brand development',
    link: '/work/next-app/next-app-tone-of-voice.pdf',
  },
  {
    n: '03',
    title: 'DROIDCON/FLUTTERCON',
    displayTitle: <>DROIDCON/<br />FLUTTERCON</>,
    category: 'MARKETING',
    type: 'Brand Marketing × Campaigns',
    tags: ['MARKETING', 'CREATIVE', 'EXPERIENCES'],
    intro: 'International brand marketing across campaigns, content, communications and live-event activity for developer conference brands.',
    detail: 'A selection of work across droidcon and Fluttercon, including campaign planning, audience communications and the launch story around Fluttercon USA’s move to Orlando. The work shows how a complex event proposition becomes a clear, useful and engaging marketing narrative across channels.',
    sections: [
      ['THE WORK', 'Campaign planning · brand storytelling · communications · content · social · email · web · partnerships · event marketing.'],
      ['A CAMPAIGN MOMENT', 'For Orlando 2026, the communication framed the move as the next chapter for Fluttercon USA while connecting it to the wider evolution of the droidcon and next.app ecosystem.'],
      ['MY ROLE', 'Brand marketing, campaign strategy and creative communication across international audiences and event activity, according to the specific project.'],
    ],
    image: '/work/droidcon/cover.jpg',
    imageAlt: 'Fluttercon Orlando 2026 campaign cover',
    note: 'International campaigns · Developer culture · Live events',
    link: '/work/droidcon/fluttercon-orlando.pdf',
  },
  {
    n: '04',
    title: 'THE BERLINER',
    category: 'EDITORIAL',
    type: 'Editorial × Storytelling',
    tags: ['EDITORIAL', 'CREATIVE'],
    intro: 'Published writing for The Berliner’s food and culture coverage — using reporting, interviews and cultural observation to build stories with a point of view.',
    detail: 'This selection is limited to pages 12–15 of The Berliner 252. It includes writing on how people decide where to eat and a profile-driven food feature. The accompanying imagery shown here is the imagery published with the articles.',
    imageGrid: [12, 13, 14, 15],
    note: 'Pages 12–15 only · Editorial writing',
    sections: [
      ['EDITORIAL', 'Writing · reporting · interviews · cultural observation · food and hospitality storytelling.'],
      ['THE PIECES', '“Did Social Media Kill the Restaurant Critic?” and “Repeat Eats: Where The Rad’s Arran Ainscough Eats When He’s Off the Clock.”'],
          ],
  },
  {
    n: '05',
    title: 'CRUSH',
    category: 'EDITORIAL',
    type: 'Editorial × Food & Culture',
    tags: ['EDITORIAL', 'CREATIVE'],
    intro: 'A wider editorial archive across food, wine, hospitality, people and culture — the writing foundation underneath the rest of the work.',
    detail: 'Crush represents a substantial part of my editorial background: writing about food and the people, places and culture around it. It belongs here as an archive rather than a single campaign case study.',
    sections: [
      ['THE LENS', 'Food is rarely just food. The strongest stories sit around the people, places, histories and cultural habits that make a scene interesting.'],
      ['WHAT IT SHOWS', 'Editorial judgment · writing · interviewing · cultural curiosity · subject depth.'],
    ],
    note: 'Editorial archive · Food · Wine · Hospitality · Culture',
  },
  {
    n: '06',
    title: 'LIVE EXPERIENCES',
    category: 'EXPERIENCES',
    type: 'Experiential Marketing × Production',
    tags: ['EXPERIENCES', 'MARKETING'],
    intro: 'Live work where the strategy has to survive contact with a real audience, partner, venue and production schedule.',
    detail: 'An archive for experiential marketing and event production work, including early live-event experience with Taste of DC and later brand, launch and event activity. The through-line is turning an idea into something people can actually enter, experience and remember.',
    sections: [
      ['THE APPROACH', 'Connect the strategic idea to the practical reality of producing an experience that works for audiences, partners and the brand.'],
      ['MY ROLE', 'Experiential marketing · production · partnerships · launches · live experiences, developed according to the specific project.'],
    ],
    note: 'Experiential marketing · Production · Events · Activations',
  },
  {
    n: '07',
    title: 'ZALANDO',
    category: 'MARKETING',
    type: 'Cultural Strategy × Content',
    tags: ['MARKETING', 'CREATIVE', 'EDITORIAL'],
    intro: 'Cultural research and strategic thinking translated into content opportunities, audience thinking and brand-relevant creative directions.',
    detail: 'A strategic/creative project focused on the space between culture, audiences and brand content. The work is presented as a thinking-led case study rather than as a finished campaign gallery.',
    sections: [
      ['THE LENS', 'Cultural research · audience thinking · trend spotting · editorial thinking · identifying moments that can become brand-relevant opportunities.'],
      ['THE WORK', 'Translate cultural signals into strategic filters, content opportunities and creative directions that can connect back to the brand.'],
      ['MY ROLE', 'Cultural research · strategic thinking · content strategy · creative development.'],
    ],
    note: 'Strategic / creative project · Cultural research + content',
  },
];

const MARQUEE_ITEMS = ['MARKETING', 'CREATIVE', 'CULTURE', 'EXPERIENCES'];

function WindMark({ className = '' }) {
  return (
    <svg viewBox="0 0 120 40" className={className} fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" aria-hidden="true">
      <path d="M8 12 C30 4, 42 20, 62 12 S94 4, 112 12" />
      <path d="M8 26 C30 18, 42 34, 62 26 S94 18, 112 26" />
    </svg>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="flex items-center justify-between px-5 py-4 text-wind-orange md:px-8">
        <a href="#top" className="font-display text-sm tracking-[0.35em]">WIND<span className="align-super text-[0.6em]">®</span></a>
        <nav className="hidden items-center gap-8 text-[11px] font-bold uppercase tracking-[0.25em] md:flex">
          <a href="#about" className="transition-opacity hover:opacity-50">About</a>
          <a href="#work" className="transition-opacity hover:opacity-50">Work</a>
          <a href="#contact" className="transition-opacity hover:opacity-50">Contact</a>
        </nav>
        <span className="text-[11px] font-bold uppercase tracking-[0.25em]">Berlin, DE</span>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="flex min-h-[100dvh] flex-col bg-wind-blue p-4 text-wind-white md:p-6">
      <div className="relative flex flex-1 flex-col justify-between border border-wind-black px-5 pb-6 pt-24 md:px-10 md:pb-10 md:pt-28">
        <div className="flex items-start justify-between text-[11px] font-bold uppercase tracking-[0.3em] md:text-xs">
          <span>Katrina Rose Wind</span>
          <span>Est. Berlin</span>
        </div>

        <div className="flex flex-col items-center justify-center py-12 md:py-8">
          <h1 className="font-display text-[clamp(7rem,23vw,22rem)] uppercase leading-[0.72] tracking-[-0.06em]">
            WIND
          </h1>
          <WindMark className="mt-10 h-10 w-auto md:mt-12 md:h-14" />
        </div>

        <div className="grid items-end gap-5 text-[10px] font-medium uppercase leading-relaxed tracking-[0.2em] md:grid-cols-3 md:text-xs">
          <p>Creative · Brand · Culture</p>
          <a href="#work" className="flex items-center justify-center gap-2 transition-opacity hover:opacity-60">Scroll <ArrowDown className="h-4 w-4" strokeWidth={1.5} /></a>
          <p className="text-right">Ideas · Brands · Campaigns ·<br className="hidden md:block" /> Experiences</p>
        </div>
      </div>
    </section>
  );
}

function HeroStatement() {
  return (
    <section className="bg-wind-blue px-5 pb-16 pt-4 text-wind-white md:px-10 md:pb-24 md:pt-6">
      <div className="border-t border-wind-white/35 pt-10 md:pt-14">
        <h2 className="mx-auto max-w-[1500px] text-center font-display text-[clamp(2.8rem,7.2vw,8rem)] uppercase leading-[0.88] tracking-[-0.04em]">
          I build ideas, campaigns and experiences that make brands matter.
        </h2>
      </div>
    </section>
  );
}

function Marquee() {
  const row = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="overflow-hidden border-y border-wind-white bg-wind-black py-4 text-wind-white md:py-5">
      <div className="animate-wind-marquee flex w-max items-center whitespace-nowrap">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center" aria-hidden={half === 1}>
            {row.map((item, i) => (
              <span key={`${half}-${i}`} className="flex items-center font-display text-xl tracking-wide md:text-3xl">
                <span className="px-6 md:px-10">{item}</span>
                <WindMark className="h-6 w-auto text-wind-blue md:h-8" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Proof() {
  return (
    <section className="bg-wind-white px-5 py-10 text-wind-black md:px-10 md:py-14">
      <div className="grid gap-4 border-y border-wind-black py-6 text-center text-[10px] font-bold uppercase tracking-[0.25em] text-wind-blue md:grid-cols-4 md:text-left md:text-xs">
        <span>10+ years in marketing</span>
        <span>International campaigns</span>
        <span>Brand & content</span>
        <span>Editorial & experiences</span>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-wind-white px-5 pb-20 pt-12 text-wind-black md:px-10 md:pb-28 md:pt-20">
      <Reveal>
        <div className="mb-10 flex items-end justify-between border-t border-wind-black pt-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-wind-blue">01 — About</p>
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-wind-blue">A marketer with a creative brain</p>
        </div>
      </Reveal>

      <div className="grid items-center gap-8 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-7 md:col-start-1 md:-translate-x-2" delay={0.1}>
          <h2 className="font-display text-[clamp(2.8rem,6vw,6.2rem)] uppercase leading-[0.9] tracking-[-0.03em]">
            I work where<br /><span className="marker-underline">brands meet culture.</span>
          </h2>
          <div className="mt-7 max-w-3xl space-y-4 font-poppins text-lg leading-relaxed md:text-xl">
            <p>I’m a marketer, creative and storyteller working at the intersection of brands and culture.</p>
            <p>My career has moved through editorial, storytelling, content, marketing, campaigns, brand, creative strategy and experiences. To me, that is one connected skillset — not a collection of unrelated jobs.</p>
            <p>I like the bit where strategy stops being a deck and starts becoming something people can actually see, read, experience or talk about.</p>
          </div>
        </Reveal>
        <Reveal className="md:col-span-4 md:col-start-9 md:translate-x-4" delay={0.05}>
          <div className="w-full overflow-hidden border border-wind-black bg-wind-blue">
            <img src="/images/about.jpg" alt="Katrina Rose Wind by a lake" className="aspect-[3/4] w-full object-cover transition-transform duration-700 hover:scale-[1.03]" loading="lazy" />
          </div>
          <div className="mt-3 text-[10px] font-bold uppercase tracking-[0.25em] text-wind-blue">
            <span>Katrina Rose Wind</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProjectVisual({ project }) {
  if (project.image) {
    return (
      <a href={project.link} target="_blank" rel="noreferrer" className="group block overflow-hidden border border-wind-black">
        <img src={project.image} alt={project.imageAlt} className="case-study-image transition-transform duration-700 group-hover:scale-[1.03]" loading="lazy" />
        <div className="flex items-center justify-between border-t border-wind-black bg-wind-white px-4 py-3 text-[10px] font-medium uppercase tracking-[0.2em]">
          <span>Open project material</span><ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
        </div>
      </a>
    );
  }

  if (project.imageGrid) {
    return (
      <div className="grid grid-cols-2 gap-2">
        {project.imageGrid.map((page) => (
          <img key={page} src={`/work/berliner/page-${page}.jpg`} alt={`The Berliner page ${page}`} className="w-full max-h-[75vh] border border-wind-black object-contain" loading="lazy" />
        ))}
      </div>
    );
  }

  return (
    <div className="flex min-h-[280px] flex-col justify-between border border-wind-black bg-wind-black p-6 text-wind-white">
      <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-wind-white/55">Selected archive</p>
      <div>
        <p className="font-display text-[clamp(2.8rem,5vw,5rem)] uppercase leading-[0.86]">{project.title}</p>
        <p className="mt-5 max-w-xs font-poppins text-sm leading-relaxed text-wind-white">{project.type}</p>
      </div>
    </div>
  );
}

function WorkCard({ project, expanded, onToggle }) {
  return (
    <article className="border-t border-wind-white/35 pt-6">
      <button type="button" onClick={onToggle} aria-expanded={expanded} className="group block w-full text-left">
        <div className="grid gap-8 md:grid-cols-12 md:items-start">
          <div className="md:col-span-1">
            <span className="font-display text-4xl text-wind-orange md:text-5xl">{project.n}</span>
          </div>
          <div className="md:col-span-6">
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-wind-white">{project.type}</p>
            <h3 className="mt-3 font-display text-[clamp(2.4rem,5vw,5.5rem)] uppercase leading-[0.88] tracking-[-0.03em] text-wind-orange transition-transform duration-300 group-hover:translate-x-2">{project.displayTitle || project.title}</h3>
            {project.note && <p className="mt-4 max-w-lg text-[10px] font-medium uppercase tracking-[0.18em] text-wind-white">{project.note}</p>}
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="max-w-md font-poppins text-base leading-relaxed text-wind-white md:text-lg">{project.intro}</p>
            <span className="mt-6 inline-flex items-center gap-2 border-b border-wind-white/60 pb-1 text-[10px] font-medium uppercase tracking-[0.25em] text-wind-white">
              {expanded ? 'Close case study' : (project.title === 'ZALANDO' ? 'Read case study' : 'Read more')} <Plus className={`h-4 w-4 transition-transform ${expanded ? 'rotate-45' : ''}`} strokeWidth={1.5} />
            </span>
          </div>
        </div>
      </button>

      {expanded && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-10 grid gap-8 pb-10 md:grid-cols-12 text-wind-white">
          <div className="md:col-span-7 md:col-start-2">
            <p className="font-poppins text-lg font-bold leading-relaxed md:text-xl">{project.detail}</p>
            {project.sections && (
              <div className="mt-10 divide-y divide-wind-white/25 border-y border-wind-white/25">
                {project.sections.map(([label, text]) => (
                  <div key={label} className="grid gap-3 py-5 md:grid-cols-3">
                    <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-wind-white">{label}</p>
                    <p className="font-poppins text-sm leading-relaxed md:col-span-2 md:text-base">{text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <ProjectVisual project={project} />
          </div>
        </motion.div>
      )}
    </article>
  );
}

function Work() {
  const [filter, setFilter] = useState('ALL');
  const [open, setOpen] = useState('Berlin Bites');
  const visible = useMemo(() => filter === 'ALL' ? PROJECTS : PROJECTS.filter((project) => project.tags.includes(filter)), [filter]);

  return (
    <section id="work" className="bg-wind-blue px-5 pb-28 pt-16 text-wind-white md:px-10 md:pb-40 md:pt-20">
      <Reveal>
        <div className="mb-12 flex items-end justify-between border-t border-wind-white/35 pt-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-wind-white">02 — Selected Work</p>
          <p className="hidden text-[11px] font-medium uppercase tracking-[0.3em] text-wind-white md:block">Marketing · Creative · Culture</p>
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <h2 className="md:col-span-8 font-display text-[clamp(3.6rem,9vw,9rem)] uppercase leading-[0.82] tracking-[-0.04em]">Work that<br />moves<span className="align-top text-[0.4em]">↗</span></h2>
          <p className="max-w-sm font-poppins text-base leading-relaxed text-wind-white md:col-span-4 md:col-start-9">Selected marketing, creative and cultural work.</p>
        </div>
      </Reveal>

      <div className="mt-12 flex flex-wrap gap-2 border-y border-wind-white/35 py-4">
        {FILTERS.map((item) => (
          <button key={item} type="button" onClick={() => setFilter(item)} className={`border border-wind-white/55 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] transition-colors ${filter === item ? 'bg-wind-white text-wind-blue' : 'text-wind-white hover:bg-wind-white hover:text-wind-blue'}`}>
            {item}
          </button>
        ))}
      </div>

      <div className="mt-14 space-y-10 text-wind-white">
        {visible.map((project) => (
          <Reveal key={project.title} delay={0.03}>
            <WorkCard project={project} expanded={open === project.title} onToggle={() => setOpen(open === project.title ? '' : project.title)} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Capabilities() {
  const items = [
    ['THINK', 'Strategy · Insight · Culture'],
    ['MAKE', 'Ideas · Campaigns · Content'],
    ['MOVE', 'Launches · Partnerships · Audiences'],
    ['EXPERIENCE', 'Activations · Production · Live'],
  ];
  return (
    <section id="capabilities" className="bg-wind-white px-5 py-20 text-wind-black md:px-10 md:py-28">
      <Reveal>
        <div className="mb-10 border-t border-wind-black pt-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-wind-blue">03 — What I do</p>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <h2 className="mb-12 max-w-[1200px] font-display text-[clamp(3rem,6vw,6.5rem)] font-bold uppercase leading-[0.88] tracking-[-0.04em] text-wind-black">Find the signal.<br />Find the idea.<br />Make it matter.<br />Make it happen</h2>
      </Reveal>

      <div className="grid grid-cols-2 border border-wind-black">
        {items.map(([title, text], index) => (
          <Reveal key={title}>
            <div className={`min-h-[170px] p-6 md:min-h-[210px] md:p-8 ${index < 2 ? 'border-b border-wind-black' : ''} ${index % 2 === 0 ? 'border-r border-wind-black' : ''}`}>
              <h3 className="font-display text-[clamp(2.4rem,4vw,4.5rem)] uppercase leading-[0.85]">{title}</h3>
              <p className="mt-5 max-w-xs text-sm font-bold uppercase tracking-[0.14em] md:text-base">{text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15}>
        <div className="mt-10 max-w-3xl text-wind-black">
          <p className="font-bold text-[11px] uppercase tracking-[0.3em]">Marketing · Creative · Culture</p>
          <p className="mt-2 font-poppins text-sm font-bold leading-relaxed">From finding the signal to making the thing happen.</p>
        </div>
      </Reveal>
    </section>
  );
}

function Now() {
  return (
    <section className="bg-wind-black px-5 py-20 text-wind-white md:px-10 md:py-28">
      <div className="grid gap-10 md:grid-cols-12 md:items-center">
        <Reveal className="md:col-span-2"><p className="text-[11px] font-bold uppercase tracking-[0.3em] text-wind-orange">04 — Now</p></Reveal>
        <Reveal className="md:col-span-5 md:col-start-3" delay={0.05}>
          <div className="overflow-hidden border border-wind-white/25">
            <img src="/images/now.jpg" alt="Katrina Rose Wind in conversation at an event" className="block h-auto w-full object-contain" loading="lazy" />
          </div>
        </Reveal>
        <Reveal className="md:col-span-4 md:col-start-8" delay={0.1}>
          <h2 className="font-display text-[clamp(2.8rem,5.5vw,6rem)] uppercase leading-[0.86]">Berlin.<br />Ideas.<br />Good briefs.</h2>
          <p className="mt-8 max-w-xl font-poppins text-base leading-relaxed text-wind-white md:text-lg">Currently interested in marketing, brand, content, campaign and creative opportunities — alongside editorial and cultural work that has something to say.</p>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer id="contact" className="bg-wind-blue text-wind-white">
      <div className="px-5 pb-10 pt-24 md:px-10 md:pt-36">
        <Reveal><p className="mb-10 text-[11px] font-medium uppercase tracking-[0.3em] text-wind-white">05 — Contact</p></Reveal>
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <Reveal className="md:col-span-5 md:col-start-1">
            <div className="overflow-hidden border border-wind-white/25">
              <img src="/images/contact.jpg" alt="Katrina Rose Wind at a live event" className="block h-auto w-full object-contain" loading="lazy" />
            </div>
          </Reveal>
          <Reveal className="md:col-span-6 md:col-start-7" delay={0.1}>
            <h2 className="font-display text-[clamp(3rem,7vw,7.5rem)] uppercase leading-[0.84] tracking-[-0.04em]">Let’s make<br />something.</h2>
            <div className="mt-12 grid gap-8 border-t border-wind-white/30 pt-8 md:grid-cols-2">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-wind-white">Email</p>
                <a href={`mailto:${EMAIL}`} className="mt-3 inline-flex items-center gap-2 font-poppins text-base font-medium transition-opacity hover:opacity-60 md:text-lg">{EMAIL} <ArrowUpRight className="h-5 w-5" strokeWidth={1.5} /></a>
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-wind-white">Phone</p>
                <a href="tel:+4915145632715" className="mt-3 inline-block font-poppins text-base font-medium transition-opacity hover:opacity-60 md:text-lg">{PHONE}</a>
              </div>
              <div className="md:col-span-2">
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-wind-white">Studio</p>
                <p className="mt-3 font-poppins text-base font-medium md:text-lg">Berlin — working internationally</p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-wind-white/30 pt-6 text-[11px] font-bold uppercase tracking-[0.25em] text-wind-orange md:flex-row md:items-center md:justify-between">
          <span className="font-bold">© 2026 Katrina Rose Wind</span>
          <span className="font-bold">Marketing · Creative · Culture</span>
          <span className="font-bold">katrinarosewind.com</span>
        </div>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Katrina Rose Wind — Marketing · Creative · Culture</title>
        <meta name="description" content="Katrina Rose Wind builds ideas, campaigns and experiences that make brands matter — across brand marketing, creative strategy, storytelling, culture and experiences from Berlin." />
      </Helmet>
      <Seo title="Katrina Rose Wind — Marketing · Creative · Culture" description="Brand marketing, creative strategy and storytelling across culture, food, hospitality, design and lifestyle." siteName="Katrina Rose Wind" url="https://katrinarosewind.com" type="website" />
      <Header />
      <main>
        <Hero />
        <HeroStatement />
        <Marquee />
        <Proof />
        <About />
        <Work />
        <Capabilities />
        <Now />
      </main>
      <Contact />
    </>
  );
}

export default HomePage;
