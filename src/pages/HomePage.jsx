import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Plus } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';

const EMAIL = 'krwind.africa@gmail.com';

const FILTERS = ['ALL', 'MARKETING', 'CREATIVE', 'EDITORIAL', 'EXPERIENCES'];

const PROJECTS = [
  {
    n: '01',
    title: 'NEXT.APP',
    category: 'MARKETING',
    type: 'BRAND CREATION × STRATEGY × CREATIVE DIRECTION',
    tags: ['MARKETING', 'CREATIVE'],
    intro: 'next.app was created as a new umbrella brand bringing droidcon, Fluttercon and future mobile-development and technology leadership events together under one roof. I helped build the brand from inception — shaping the name, positioning, narrative and marketing strategy, developing the tone of voice and creative direction, and selecting the external agency responsible for bringing the visual identity to life.',
    detail: 'Building a new global tech brand from inception — from naming and positioning to marketing strategy, tone of voice, creative development and launch thinking.',
    nextApp: true,
    image: '/work/next-app/cover.jpg',
    imageAlt: 'next.app Tone of Voice presentation cover',
    note: 'BRAND BUILT FROM INCEPTION · NAMING + POSITIONING + MARKETING + CREATIVE',
    link: '/work/next-app/next-app-tone-of-voice.pdf',
  },  {
    n: '02',
    title: 'THE BERLINER',
    category: 'EDITORIAL',
    type: 'EDITORIAL STORYTELLING × CULTURAL INSIGHT',
    tags: ['EDITORIAL', 'CREATIVE'],
    intro: 'Writing original food and culture stories for The Berliner — researching ideas, finding the angle, interviewing people shaping Berlin’s food scene and turning cultural observations into editorial for print.',
    detail: 'The Berliner is where my editorial instinct meets cultural research — finding the story behind what is happening in Berlin’s food and hospitality scene, rather than simply reporting what opened or what is trending.',
    berliner: true,
    note: 'TWO PRINT FEATURES · THE BERLINER',
    link: '/work/berliner-pages.pdf',
  },  {
    n: '03',
    title: 'Berlin Bites',
    category: 'CREATIVE',
    type: 'EDITORIAL BRAND STRATEGY × SOCIAL PROPOSITION',
    tags: ['MARKETING', 'CREATIVE', 'EDITORIAL'],
    intro: "A proposal to turn The Berliner's existing food section into a distinct editorial and social property.",
    detail: "The Berliner already had the editorial authority. The opportunity was to give Berlin Bites a life of its own — with a distinct personality, visual language and social presence built around the magazine's existing food expertise.",
    berlinBites: true,
    image: '/work/berlin-bites-cover.jpg',
    imageAlt: 'Berlin Bites project proposal cover',
    note: 'PITCHED TO EDITOR-IN-CHIEF · AUGUST 2026',
    link: '/work/berlin-bites.pdf',
  },  {
    n: '04',
    title: 'DEORON',
    secondaryTitle: 'REFRAMING THE FEED / BERLIN EXHIBITION',
    category: 'MARKETING',
    type: 'STRATEGY × COMMERCIAL STRATEGY × EVENT MANAGEMENT × PRODUCTION',
    tags: ['MARKETING', 'EXPERIENCES'],
    intro: "I developed a strategic proposal to reframe DEORON from a design discovery account into a curated media platform — building a commercial model around curation, scarcity and access rather than simply selling Instagram posts. I later worked with DEORON on its Berlin exhibition, supporting the project from setup through breakdown across event production, designer liaison, guest experience and guided tours.",
    detail: "Digital platform → commercial strategy → physical experience.",
    note: 'REFRAMING THE FEED / BERLIN EXHIBITION',
    deoron: true,
    image: '/work/deoron/cover.jpg',
    imageAlt: 'DEORON Reframing the Feed strategic proposal cover',
    link: '/work/deoron/DEORON_Reframing_the_Feed_Portfolio.pdf',
    slug: 'deoron',
  },  {
    n: '05',
    title: 'DROIDCON / FLUTTERCON',
    displayTitle: <>DROIDCON /<br />FLUTTERCON</>,
    category: 'MARKETING',
    type: 'INTERNATIONAL BRAND + MARKETING',
    tags: ['MARKETING', 'CREATIVE', 'EXPERIENCES'],
    intro: 'Building and marketing international technology brands across Europe, North America and India.',
    detail: 'At Mobile Seasons, I led brand and marketing across droidcon, Fluttercon and the T3 Engineering Leadership Summit, spanning three international brands and ten events. My work connected brand strategy, campaigns, content, audience growth, partnerships and live experiences across multiple markets and channels.',
    droidcon: true,
    image: '/work/droidcon/cover.jpg',
    imageAlt: 'Fluttercon Orlando 2026 campaign work',
    note: 'MOBILE SEASONS · INTERNATIONAL MARKETING · EUROPE / NORTH AMERICA / INDIA',
    link: '/work/droidcon/fluttercon-orlando.pdf',
  },  {
    n: '06',
    title: 'CRUSH MAGAZINE',
    category: 'EDITORIAL',
    type: 'EDITORIAL × CONTENT × AUDIENCE',
    tags: ['EDITORIAL', 'CREATIVE'],
    intro: 'Published editorial and digital content spanning food, culture, interviews, trends and audience-led storytelling.',
    detail: 'At Crush Magazine Online, I worked across editorial, digital content and audience development, producing stories across food, culture, interviews, trends and service journalism. I researched and developed original features, interviewed chefs, founders and industry voices, and helped shape the magazine’s digital presence across social and newsletters.',
    crush: true,
    note: 'PUBLISHED EDITORIAL · FOOD + CULTURE · DIGITAL + AUDIENCE',
    link: 'https://crushmag-online.com/author/katrina/page/5/',
  },  {
    n: '07',
    title: 'ZALANDO',
    category: 'MARKETING',
    type: 'CULTURAL STRATEGY × SOCIAL EDITORIAL',
    tags: ['MARKETING', 'CREATIVE', 'EDITORIAL'],
    intro: 'For Zalando’s Newsroom hiring process, I developed a cultural strategy and social activation showing how the brand could respond to what people were talking about now — with relevance, taste and platform-native thinking.',
    detail: 'Zalando’s Newsroom needed to behave less like a traditional brand channel and more like a cultural editor — knowing what was happening, deciding what was worth joining, and turning it into something people actually wanted to engage with.',
    zalando: true,
    image: '/work/zalando/cover.jpg',
    imageAlt: 'Zalando Newsroom case study cover',
    note: 'NEWSROOM CASE STUDY · 2026',
    link: '/work/zalando/KRWind-Zalando-Creative-Brief.pdf',
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
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="flex items-center justify-center px-5 py-4 text-wind-orange md:px-8">
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#about" className="flex h-[54px] w-[180px] items-center justify-center rounded-full border-2 border-white bg-transparent px-6 text-[24px] font-medium normal-case tracking-normal text-white underline decoration-2 underline-offset-2 transition-colors duration-200 hover:border-[#780606] hover:bg-[#780606] hover:text-white focus-visible:border-[#780606] focus-visible:bg-[#780606] focus-visible:text-white">About</a>
          <a href="#work" className="flex h-[54px] w-[180px] items-center justify-center rounded-full border-2 border-white bg-transparent px-6 text-[24px] font-medium normal-case tracking-normal text-white underline decoration-2 underline-offset-2 transition-colors duration-200 hover:border-[#780606] hover:bg-[#780606] hover:text-white focus-visible:border-[#780606] focus-visible:bg-[#780606] focus-visible:text-white">Work</a>
          <a href="#contact" className="flex h-[54px] w-[180px] items-center justify-center rounded-full border-2 border-white bg-transparent px-6 text-[24px] font-medium normal-case tracking-normal text-white underline decoration-2 underline-offset-2 transition-colors duration-200 hover:border-[#780606] hover:bg-[#780606] hover:text-white focus-visible:border-[#780606] focus-visible:bg-[#780606] focus-visible:text-white">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="flex min-h-[100dvh] flex-col bg-wind-blue p-4 text-wind-white md:p-6">
      <div className="relative flex flex-1 flex-col justify-between border border-wind-black px-5 pb-6 pt-24 md:px-10 md:pb-10 md:pt-28">
        <div className="flex items-start justify-between text-[11px] font-bold uppercase tracking-[0.3em] md:text-xs">
          <span className="font-display font-bold" style={{ textShadow: '3px 3px 0 rgba(120,6,6,0.48)' }}>Katrina Rose Wind</span>
          <span className="font-display text-[12px] font-black md:text-sm" style={{ textShadow: '3px 3px 0 rgba(120,6,6,0.48)' }}>Berlin</span>
        </div>

        <div className="flex flex-col items-center justify-center py-12 md:py-8">
          <motion.h1
            className="font-display text-[clamp(7rem,23vw,22rem)] uppercase leading-[0.72] tracking-[-0.06em]"
            initial={{ scale: 0.985 }}
            animate={{ scale: [0.985, 1.025, 1] }}
            transition={{ duration: 2.4, ease: [0.42, 0, 0.58, 1] }}
            style={{ transformOrigin: 'center center' }}
          >
            WIND
          </motion.h1>
          <WindMark className="mt-10 h-10 w-auto md:mt-12 md:h-14" />
        </div>

        <div className="grid items-end gap-5 text-[10px] font-medium uppercase leading-relaxed tracking-[0.2em] md:grid-cols-3 md:text-xs">
          <p className="font-display font-bold" style={{ textShadow: '3px 3px 0 rgba(120,6,6,0.48)' }}>Creative · Brand · Culture</p>
          <a href="#work" className="flex items-center justify-center gap-2 transition-opacity hover:opacity-60 font-display font-bold" style={{ textShadow: '3px 3px 0 rgba(120,6,6,0.48)' }}>Scroll <ArrowDown className="h-4 w-4" strokeWidth={1.5} /></a>
          <p className="text-right font-display font-bold" style={{ textShadow: '3px 3px 0 rgba(120,6,6,0.48)' }}>Ideas · Brands · Campaigns ·<br className="hidden md:block" /> Experiences</p>
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
      <div className="grid gap-4 border-y border-wind-black py-6 text-center text-[17px] font-black uppercase tracking-[0.22em] text-wind-blue md:grid-cols-4 md:text-left md:text-[17px]">
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
    <section id="about" className="relative overflow-hidden bg-wind-white text-wind-black md:min-h-[1050px]" style={{ minHeight: '1050px' }}>
      <div className="relative mx-auto h-full min-h-[1050px] max-w-[1584px] px-5 py-8 md:px-16 md:py-0">
        <div className="absolute left-5 right-5 top-8 flex items-center justify-between md:left-16 md:right-16 md:top-[52px]">
          <p className="text-[18px] font-black uppercase tracking-[0.22em] text-[#780606]" style={{ textShadow: '3px 3px 0 rgba(255,255,255,0.48)' }}>01 — About</p>
          <p className="text-right text-[18px] font-black uppercase tracking-[0.22em] text-[#780606]" style={{ textShadow: '3px 3px 0 rgba(255,255,255,0.48)' }}>A marketer with a creative brain</p>
        </div>

        <div className="pt-[88px] md:absolute md:left-16 md:top-[96px] md:w-[790px] md:pt-0">
          <div className="font-display text-[5.55rem] font-bold uppercase leading-[0.84] tracking-[-0.055em]">
            <div className="w-fit border-b-[7px] border-wind-black pb-1">I MAKE IDEAS</div>
            <div className="mt-1 w-fit border-b-[7px] border-wind-black pb-1">PEOPLE CARE</div>
            <div className="mt-1 w-fit border-b-[7px] border-wind-black pb-1">ABOUT</div>
          </div>

          <div className="mt-[72px] max-w-[800px] font-poppins text-[21px] leading-[1.38] md:text-[21px] md:leading-[1.38]">
            <p className="mb-7 font-bold text-[1.35rem] md:text-[1.35rem]">Hi, I&apos;m Wind.</p>
            <p>
              I&apos;m a marketing strategist and creative working at the intersection of brands, culture and people. I’m interested in what makes someone stop scrolling, change plans, book a table, buy a ticket, or tell someone else about it.
            </p>
            <p className="mt-2">
              For 10+ years, I&apos;ve turned ideas into campaigns, stories, brands and experiences across food, hospitality, tech, design and culture. I move between strategy and execution, developing the idea, shaping the creative and bringing it to life through marketing, content, creative direction, brand experiences and events.
            </p>
            <p className="mt-5">
              Based in Berlin. International by upbringing. Usually somewhere between a book, a restaurant and an unnecessary second glass of orange wine.
            </p>
          </div>
        </div>

        <div className="mt-12 md:absolute md:right-[13.2%] md:top-[136px] md:mt-0">
          <div className="absolute -right-[38px] -top-[36px] h-[630px] w-[470px] bg-[#780606]" />
          <div className="relative z-10 h-[615px] w-[452px] overflow-hidden">
            <img src="/images/about.jpg" alt="Katrina Rose Wind by a lake" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="relative z-20 mt-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#780606]">Katrina Rose Wind</div>
        </div>
      </div>
    </section>
  );
}

function NextAppProjectVisual({ project }) {
  const storyboardPages = [1, 2, 3, 4];

  return (
    <div className="space-y-12">
      <div>
        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-wind-white/70">TONE OF VOICE · ACTUAL BRAND DELIVERABLE</p>
        <a href={project.link} target="_blank" rel="noreferrer" className="group block overflow-hidden">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="block h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </a>
      </div>

      <div>
        <div className="mb-5 border-t border-wind-white/25 pt-5">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-wind-white/70">CREATIVE DIRECTION · SIX WORLDS. ONE FUTURE.</p>
        </div>
        <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-3 md:grid md:grid-cols-5 md:overflow-visible">
          {storyboardPages.map((page) => (
            <a
              key={page}
              href="/work/next-app/video-storyboard.pdf"
              target="_blank"
              rel="noreferrer"
              className="block min-w-[150px] overflow-hidden md:min-w-0"
            >
              <img
                src={`/work/next-app/storyboard-${page}.jpg`}
                alt={`next.app Six Worlds storyboard page ${page}`}
                className="block h-auto w-full object-contain"
                loading="lazy"
              />
            </a>
          ))}
        </div>
        <a href="/work/next-app/video-storyboard.pdf" target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 border-b border-wind-white/45 pb-1 text-[10px] font-medium uppercase tracking-[0.22em] text-wind-white">OPEN FULL STORYBOARD <ArrowUpRight className="h-3 w-3" strokeWidth={1.5} /></a>
      </div>
    </div>
  );
}

function NextAppProjectContent({ project }) {
  return (
    <div className="nextapp-project-content space-y-12">
      <div>
        <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.22em] text-wind-white/55">STRATEGY → VOICE → CREATIVE</p>
        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-wind-white/70">WHAT THE BRAND WAS</p>
        <p className="mt-4 font-poppins text-[18px] leading-[1.45] md:text-[20px]">
          next.app was developed as an umbrella brand bringing different technology communities and events together under one roof.
        </p>
      </div>

      <div>
        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-wind-white/70">MY ROLE</p>
        <p className="mt-4 font-poppins text-[18px] font-bold leading-[1.45] md:text-[20px]">
          Naming · positioning · brand narrative · marketing strategy · audience thinking · tone of voice · creative direction · agency selection + direction · brand development · launch thinking.
        </p>
      </div>

      <div>
        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-wind-white/70">FROM IDEA TO IDENTITY</p>
        <p className="mt-4 text-[12px] font-medium uppercase leading-[1.8] tracking-[0.12em] text-wind-white md:text-[13px]">
          NAMING <span className="px-1 text-wind-white/45">→</span> POSITIONING <span className="px-1 text-wind-white/45">→</span> MARKETING STRATEGY <span className="px-1 text-wind-white/45">→</span> TONE OF VOICE <span className="px-1 text-wind-white/45">→</span> CREATIVE DIRECTION <span className="px-1 text-wind-white/45">→</span> VISUAL IDENTITY <span className="px-1 text-wind-white/45">→</span> LAUNCH
        </p>
      </div>

      <div className="border-t border-wind-white/25 pt-8">
        <div className="mb-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-wind-white/70">THE IDENTITY</p>
          <p className="mt-4 max-w-2xl font-poppins text-[18px] leading-[1.45] md:text-[20px]">
            I selected and directed the external design agency responsible for developing the visual identity, working from the strategic and creative direction established for the brand.
          </p>
        </div>

        <div className="border-t border-wind-white/25 pt-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-wind-white/70">THE VOICE</p>
          <p className="mt-4 max-w-2xl font-poppins text-[18px] leading-[1.45] md:text-[20px]">
            With the strategic foundations in place, I developed the verbal identity for next.app — defining how the new brand should sound, speak to its audience and differentiate itself from more conventional technology brands.
          </p>
          <p className="mt-6 font-display text-[clamp(2rem,4vw,4rem)] uppercase leading-[0.9] tracking-[-0.025em] text-wind-orange" style={{ textShadow: '3px 3px 0 rgba(255,255,255,0.5)' }}>
            PLAYFULLY SMART<br />FUTURE-OBSESSED<br />INCLUSIVE &amp; HUMAN
          </p>
        </div>
      </div>

      <div className="border-t border-wind-white/25 pt-8">
        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-wind-white/70">THE CREATIVE</p>
        <h4 className="mt-4 font-display text-[clamp(3rem,7vw,7rem)] uppercase leading-[0.82] tracking-[-0.04em] text-wind-orange" style={{ textShadow: '4px 4px 0 rgba(255,255,255,0.5)' }}>
          SIX WORLDS.<br />ONE FUTURE.
        </h4>
        <p className="mt-6 max-w-2xl font-poppins text-[18px] leading-[1.45] md:text-[20px]">
          Once the brand system was established, I developed the creative direction for introducing next.app to its audience — bringing different technology ecosystems together in one visual narrative.
        </p>
      </div>

      <div className="border-t border-wind-white/25 pt-8">
        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-wind-white/70">FROM A BLANK PAGE</p>
        <h4 className="mt-4 font-display text-[clamp(3.4rem,7vw,7rem)] uppercase leading-[0.82] tracking-[-0.04em] text-wind-orange" style={{ textShadow: '4px 4px 0 rgba(255,255,255,0.5)' }}>
          TO A GLOBAL<br />BRAND.
        </h4>
        <p className="mt-6 max-w-2xl font-poppins text-[18px] leading-[1.45] md:text-[20px]">
          The job wasn&apos;t just to make next.app look different. It was to give a new brand a reason to exist — and the strategic, verbal and creative system to make it believable.
        </p>
      </div>
    </div>
  );
}

function BerlinerProject({ project }) {
  const stories = [
    {
      title: 'DID SOCIAL MEDIA KILL THE RESTAURANT CRITIC?',
      meta: 'THE BERLINER 252 · PRINT · 2026 · P. 12–13',
      angle: 'The question was less whether social media had replaced the critic, and more how Berliners actually decide where to eat. I used an Instagram Stories poll, then built the story around the different roles of social discovery, Google reviews and word of mouth, alongside interviews with people shaping the city’s food scene.',
      role: 'CULTURAL RESEARCH · POLLING · REPORTING · INTERVIEWS · WRITING',
      pages: [12, 13],
    },
    {
      title: 'WHERE THE RAD’S ARRAN AINSCOUGH EATS WHEN HE’S OFF THE CLOCK',
      meta: 'THE BERLINER 252 · PRINT · 2026 · P. 14–15',
      angle: 'Rather than treating the piece as a list of restaurants, I built it around the people and relationships behind Arran’s repeat visits. The result is a food profile where the places become a way into something more human: why familiarity, hospitality and the people behind a room matter.',
      role: 'REPORTING · INTERVIEW · PROFILE WRITING · CULTURAL OBSERVATION',
      pages: [14, 15],
    },
  ];

  return (
    <div className="berliner-project-content space-y-14">
      <div className="grid gap-8 md:grid-cols-12 md:items-start">
        <div className="md:col-span-3">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-wind-white/70">THE ANGLE</p>
        </div>
        <div className="md:col-span-8 md:col-start-5">
          <p className="font-poppins text-[19px] leading-[1.45] md:text-[21px]">
            Real print editorial work for The Berliner — finding the question underneath the obvious story, speaking to people with something to add, and turning research and conversation into a piece with a point of view.
          </p>
        </div>
      </div>

      <div className="border-t border-wind-white/25 pt-8">
        <div className="mb-8 flex items-end justify-between gap-6">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-wind-white/70">THE STORIES</p>
          <p className="hidden text-[10px] font-medium uppercase tracking-[0.22em] text-wind-white/45 md:block">THE BERLINER · BERLIN · 2026</p>
        </div>

        <div className="space-y-16">
          {stories.map((story) => (
            <article key={story.title} className="grid gap-8 md:grid-cols-12 md:items-start">
              <div className="md:col-span-4">
                <h4 className="font-display text-[clamp(2rem,4vw,4rem)] uppercase leading-[0.88] tracking-[-0.025em] text-wind-orange" style={{ textShadow: '3px 3px 0 rgba(255,255,255,0.5)' }}>{story.title}</h4>
                <p className="mt-5 text-[9px] font-medium uppercase leading-[1.6] tracking-[0.18em] text-wind-white/65">{story.meta}</p>
                <p className="mt-6 text-[10px] font-medium uppercase leading-[1.6] tracking-[0.18em] text-wind-white/75">{story.role}</p>
                <p className="mt-6 font-poppins text-[17px] leading-[1.45] md:text-[18px]">{story.angle}</p>
              </div>

              <div className="md:col-span-8">
                <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.22em] text-wind-white/55">ON THE PAGE</p>
                <div className="grid gap-3 md:grid-cols-2">
                  {story.pages.map((page) => (
                    <img key={page} src={`/work/berliner/page-${page}.jpg`} alt={`The Berliner printed page ${page}`} className="block h-auto w-full object-contain" loading="lazy" />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="border-t border-wind-white/25 pt-8">
        <p className="font-display text-[clamp(2.5rem,6vw,6rem)] uppercase leading-[0.84] tracking-[-0.035em] text-wind-orange" style={{ textShadow: '4px 4px 0 rgba(255,255,255,0.5)' }}>
          THE SAME INSTINCT I BRING TO BRANDS:<br className="hidden md:block" /> FIND THE THING PEOPLE WILL CARE ABOUT — THEN TELL IT WELL.
        </p>
      </div>
    </div>
  );
}

function BerlinBitesProject({ project }) {
  const formats = ['THE DISH', 'NEW IN', '€10 OR LESS', 'HOT TAKE', 'ORDER THIS', 'THE LIST'];
  const stories = ['TODAY IN BERLIN FOOD', 'WOULD YOU PAY €19 FOR THIS?', 'WHERE SHOULD WE EAT NEXT?', 'ORDER THIS', 'NEW IN MITTE'];
  const reelSubjects = ['HANDS', 'CHEFS', 'DISHES', 'RESTAURANTS', 'BAKERIES', 'MARKETS', 'STREET SCENES', 'INGREDIENTS', 'BILLS + PRICES', 'CONVERSATIONS'];

  return (
    <div className="berlinbites-project-content grid gap-10 md:grid-cols-12 md:items-start">
      <div className="md:col-span-7">
        <div className="space-y-14">
          <section>
            <div className="mb-7 flex items-baseline justify-between gap-6 border-t border-wind-white/25 pt-6">
              <h5 className="font-display text-[clamp(2.4rem,5vw,5rem)] uppercase leading-[0.86] tracking-[-0.03em] text-wind-orange" style={{ textShadow: '3px 3px 0 rgba(255,255,255,0.5)' }}>01 — THE OPPORTUNITY</h5>
            </div>
            <p className="font-poppins text-[18px] leading-[1.45] md:text-[20px]">
              The Berliner already had the editorial authority. The opportunity was to give Berlin Bites a life of its own — with a distinct personality, visual language and social presence built around the magazine's existing food expertise.
            </p>
            <p className="mt-7 font-display text-[clamp(1.8rem,3.2vw,3.2rem)] uppercase leading-[0.88] tracking-[-0.025em] text-wind-white">
              EXISTING EDITORIAL ASSET<br /><span className="text-wind-white/45">→</span><br />DISTINCT FOOD PROPERTY<br /><span className="text-wind-white/45">→</span><br />NEW SOCIAL PRESENCE
            </p>
          </section>

          <section>
            <div className="mb-7 border-t border-wind-white/25 pt-6">
              <h5 className="font-display text-[clamp(2.4rem,5vw,5rem)] uppercase leading-[0.86] tracking-[-0.03em] text-wind-orange" style={{ textShadow: '3px 3px 0 rgba(255,255,255,0.5)' }}>02 — THE PROPOSITION</h5>
            </div>
            <p className="font-poppins text-[22px] font-bold leading-[1.35] md:text-[28px]">Give Berlin Bites its own voice, visual identity and audience — while keeping The Berliner behind it.</p>
            <div className="mt-8 border-y border-wind-white/25 py-6">
              <p className="font-display text-[clamp(2.2rem,4vw,4rem)] uppercase leading-[0.84] tracking-[-0.03em] text-wind-orange" style={{ textShadow: '3px 3px 0 rgba(255,255,255,0.5)' }}>EDITORIAL,<br />NOT INFLUENCER.</p>
              <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-3 text-[11px] font-bold uppercase tracking-[0.18em] md:grid-cols-3">
                {['SMART', 'CURIOUS', 'SLIGHTLY IRREVERENT', 'INFORMED', 'HUNGRY', 'URBAN', 'WITTY', 'TACTILE', 'UNFUSSY'].map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          </section>

          <section>
            <div className="mb-7 border-t border-wind-white/25 pt-6">
              <h5 className="font-display text-[clamp(2.4rem,5vw,5rem)] uppercase leading-[0.86] tracking-[-0.03em] text-wind-orange" style={{ textShadow: '3px 3px 0 rgba(255,255,255,0.5)' }}>03 — THE BRAND</h5>
            </div>
            <p className="font-poppins text-[18px] leading-[1.45] md:text-[21px]">Bites needed to feel related to The Berliner, but with a personality of its own — more immediate, conversational and hungry.</p>
            <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.2em] text-wind-white/55">PROPOSED BRAND DIRECTION · VISUAL IDENTITY · RELATIONSHIP TO THE BERLINER</p>
          </section>

          <section>
            <div className="mb-7 border-t border-wind-white/25 pt-6">
              <h5 className="font-display text-[clamp(2.4rem,5vw,5rem)] uppercase leading-[0.86] tracking-[-0.03em] text-wind-orange" style={{ textShadow: '3px 3px 0 rgba(255,255,255,0.5)' }}>04 — THE SYSTEM</h5>
            </div>
            <p className="font-poppins text-[18px] leading-[1.45] md:text-[21px]">The proposition needed to work as an editorial system, not a collection of one-off posts.</p>
            <div className="mt-8 border-y border-wind-white/25 py-6">
              <p className="font-display text-[clamp(2rem,4vw,4rem)] uppercase leading-[0.88] tracking-[-0.025em]">ONE BIG IDEA. · ONE PHOTOGRAPH. · ONE HEADLINE. · ONE PIECE OF INFORMATION.</p>
            </div>
            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {formats.map((item, i) => <div key={item} className="border-t border-wind-white/25 pt-4"><p className="text-[10px] font-bold tracking-[0.2em] text-wind-white/55">0{i + 1}</p><p className="mt-2 font-display text-[clamp(1.7rem,3vw,3rem)] uppercase leading-[0.9]">{item}</p></div>)}
            </div>
          </section>

          <section>
            <div className="mb-7 border-t border-wind-white/25 pt-6">
              <h5 className="font-display text-[clamp(2.4rem,5vw,5rem)] uppercase leading-[0.86] tracking-[-0.03em] text-wind-orange" style={{ textShadow: '3px 3px 0 rgba(255,255,255,0.5)' }}>05 — THE LOOK</h5>
            </div>
            <div className="grid gap-6">
              <p className="font-display text-[clamp(2.5rem,4vw,4.2rem)] uppercase leading-[0.86] tracking-[-0.03em]">FLASH.<br />HARD SHADOWS.<br />SLIGHTLY IMPERFECT.<br />CLOSE.<br />PHYSICAL.<br />HUMAN.</p>
              <p className="font-poppins text-[18px] leading-[1.45]">Berlin at night.</p>
            </div>
          </section>

          <section>
            <div className="mb-7 border-t border-wind-white/25 pt-6">
              <h5 className="font-display text-[clamp(2.4rem,5vw,5rem)] uppercase leading-[0.86] tracking-[-0.03em] text-wind-orange" style={{ textShadow: '3px 3px 0 rgba(255,255,255,0.5)' }}>06 — THE SOCIAL DESK</h5>
            </div>
            <p className="font-poppins text-[18px] leading-[1.45] md:text-[21px]">The idea was to make Bites more than a feed. Stories would become a more immediate, conversational extension of the food desk — creating space for recommendations, questions, polls and audience participation.</p>
            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {stories.map((item) => <div key={item} className="border-t border-wind-white/25 pt-4"><p className="text-[10px] font-bold uppercase tracking-[0.16em]">{item}</p></div>)}
            </div>
            <p className="mt-8 font-display text-[clamp(2rem,4vw,4rem)] uppercase leading-[0.88] tracking-[-0.025em] text-wind-orange" style={{ textShadow: '3px 3px 0 rgba(255,255,255,0.5)' }}>NOT REPURPOSED ARTICLES.<br />A REAL-TIME EDITORIAL EXTENSION.</p>
          </section>

          <section>
            <div className="mb-7 border-t border-wind-white/25 pt-6">
              <h5 className="font-display text-[clamp(2.4rem,5vw,5rem)] uppercase leading-[0.86] tracking-[-0.03em] text-wind-orange" style={{ textShadow: '3px 3px 0 rgba(255,255,255,0.5)' }}>07 — BERLIN BITES IN MOTION</h5>
            </div>
            <p className="font-poppins text-[18px] leading-[1.45] md:text-[21px]">For Reels, I developed a recognisable opening system and repeatable editorial franchises rather than treating every video as a new concept.</p>
            <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-3 border-y border-wind-white/25 py-6 md:grid-cols-5">
              {reelSubjects.map((item) => <span key={item} className="text-[11px] font-bold uppercase tracking-[0.16em]">{item}</span>)}
            </div>
            <p className="mt-8 font-display text-[clamp(2rem,4vw,4rem)] uppercase leading-[0.88] tracking-[-0.025em] text-wind-orange" style={{ textShadow: '3px 3px 0 rgba(255,255,255,0.5)' }}>REPEATABLE EDITORIAL FRANCHISES.</p>
          </section>

          <section>
            <div className="mb-7 border-t border-wind-white/25 pt-6">
              <h5 className="font-display text-[clamp(2.4rem,5vw,5rem)] uppercase leading-[0.86] tracking-[-0.03em] text-wind-orange" style={{ textShadow: '3px 3px 0 rgba(255,255,255,0.5)' }}>08 — THE VOICE</h5>
            </div>
            <p className="font-poppins text-[18px] leading-[1.45] md:text-[21px]">Bites should feel like the person who has lived in Berlin long enough to know that the best meal isn't necessarily the newest restaurant.</p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-y border-wind-white/25 py-6 font-display text-[clamp(1.8rem,3vw,3rem)] uppercase leading-[0.9]">{['SMART', 'CURIOUS', 'SLIGHTLY IRREVERENT', 'INFORMED', 'HUNGRY'].map((item) => <span key={item}>{item}</span>)}</div>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-wind-white/55">INSTEAD OF</p><p className="mt-4 font-poppins text-[20px] line-through">5 restaurants to try this weekend.</p></div>
              <div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-wind-white/55">SAY</p><p className="mt-4 font-display text-[clamp(2rem,4vw,4rem)] uppercase leading-[0.88] text-wind-orange" style={{ textShadow: '3px 3px 0 rgba(255,255,255,0.5)' }}>FIVE PLACES WORTH LEAVING YOUR FLAT FOR THIS WEEKEND.</p></div>
            </div>
          </section>

          <section>
            <div className="mb-7 border-t border-wind-white/25 pt-6">
              <h5 className="font-display text-[clamp(2.4rem,5vw,5rem)] uppercase leading-[0.86] tracking-[-0.03em] text-wind-orange" style={{ textShadow: '3px 3px 0 rgba(255,255,255,0.5)' }}>09 — THE OPPORTUNITY AHEAD</h5>
            </div>
            <p className="font-poppins text-[18px] leading-[1.45] md:text-[21px]">The longer-term opportunity was to turn an existing editorial section into a recognisable media property — with the potential to build a distinct audience, create recurring editorial franchises and support future commercial partnerships.</p>
            <p className="mt-8 font-display text-[clamp(1.8rem,3vw,3rem)] uppercase leading-[0.9] tracking-[-0.02em]">EXISTING EDITORIAL <span className="text-wind-white/45">→</span> DISTINCT PROPERTY <span className="text-wind-white/45">→</span> AUDIENCE <span className="text-wind-white/45">→</span> RECURRING FRANCHISES <span className="text-wind-white/45">→</span> COMMERCIAL POTENTIAL</p>
            <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.18em] text-wind-white/55">PROPOSED PROGRESSION · NOT CLAIMED OUTCOMES</p>
          </section>

          <section className="border-y border-wind-white/35 py-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-wind-white/70">STATUS</p>
            <p className="mt-5 font-display text-[clamp(2.3rem,5vw,5rem)] uppercase leading-[0.84] tracking-[-0.03em] text-wind-orange" style={{ textShadow: '3px 3px 0 rgba(255,255,255,0.5)' }}>PITCHED TO EDITOR-IN-CHIEF<br />AUGUST 2026</p>
            <p className="mt-5 font-poppins text-[20px] font-bold uppercase tracking-[0.08em]">PENDING BUDGET / APPROVAL</p>
          </section>
        </div>
      </div>

      <aside className="md:col-span-4 md:col-start-9 md:sticky md:top-8 md:self-start">
        <div>
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-wind-white/70">ACTUAL PROPOSAL · AUGUST 2026</p>
          <a href={project.link} target="_blank" rel="noreferrer" className="group block overflow-hidden border border-wind-black bg-wind-white">
            <img src={project.image} alt={project.imageAlt} className="block h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" loading="lazy" />
            <div className="flex items-center justify-between border-t border-wind-black bg-wind-white px-4 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-wind-black">
              <span>Open full deck</span><ArrowUpRight className="h-3 w-3" strokeWidth={1.5} />
            </div>
          </a>
          <p className="mt-5 max-w-sm font-poppins text-[16px] leading-[1.45] text-wind-white/80">The full proposal opens as the original Berlin Bites deck. The portfolio page carries the strategic story; the deck is the complete project material.</p>
        </div>
      </aside>
    </div>
  );
}

function DeoronProject({ project }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const exhibitionImages = [
    { src: '/work/deoron/exhibition/01-chair.png', alt: 'DEORON Berlin exhibition — chair' },
    { src: '/work/deoron/exhibition/02-thomas.png', alt: 'DEORON Berlin exhibition — Thomas' },
    { src: '/work/deoron/exhibition/03-spat.png', alt: 'DEORON Berlin exhibition — spat' },
    { src: '/work/deoron/exhibition/04-soundsessions.png', alt: 'DEORON Berlin exhibition — sound sessions' },
    { src: '/work/deoron/exhibition/05-IMG_4045.jpeg', alt: 'DEORON Berlin exhibition — installation' },
    { src: '/work/deoron/exhibition/06-3d49a00b.jpeg', alt: 'DEORON Berlin exhibition — installation' },
  ];

  useEffect(() => {
    if (lightboxIndex === null) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        setLightboxIndex((current) => (current === null ? 0 : (current + 1) % exhibitionImages.length));
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        setLightboxIndex((current) => (current === null ? 0 : (current - 1 + exhibitionImages.length) % exhibitionImages.length));
      } else if (event.key === 'Escape') {
        event.preventDefault();
        setLightboxIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, exhibitionImages.length]);

  const lightboxImage = lightboxIndex === null ? null : exhibitionImages[lightboxIndex];

  const strategySections = [
    ['01 — THE OPPORTUNITY',
      <>DEORON already had the audience and the taste. The opportunity was to turn that cultural relevance into a more deliberate commercial proposition — without compromising what made the platform valuable in the first place.<p className="mt-7 font-display text-[clamp(1.9rem,3.2vw,3.2rem)] uppercase leading-[0.88] tracking-[-0.025em]">EXISTING AUDIENCE<br /><span className="text-wind-white/45">→</span><br />DISTINCT MEDIA PLATFORM<br /><span className="text-wind-white/45">→</span><br />COMMERCIAL MODEL</p></>],
    ['02 — THE PROPOSITION',
      <> <p className="font-display text-[clamp(2rem,3.5vw,3.7rem)] uppercase leading-[0.84] tracking-[-0.03em] text-wind-white">DON'T SELL ACCESS TO THE FEED.<br />SELL ACCESS TO THE CURATION.</p><p className="mt-7">DEORON had been featuring products because they looked good and fit the aesthetic. I proposed reframing that informal curation as the product itself — with brands paying for limited access to an audience and editorial environment they couldn't simply buy their way into.</p><p className="mt-7 font-display text-[clamp(1.8rem,3vw,3rem)] uppercase leading-[0.88] tracking-[-0.02em]">CURATION · SCARCITY · CREDIBILITY</p></>],
    ['03 — THE EDITORIAL MODEL',
      <><p className="font-display text-[clamp(2rem,3.5vw,3.7rem)] uppercase leading-[0.84] tracking-[-0.03em] text-wind-white">THE COMMERCIAL PROPOSITION ONLY WORKS IF THE FEED STAYS SELECTIVE.</p><p className="mt-7">I proposed an 80/20 editorial model: the majority of content remains independently selected, while a limited proportion of the feed becomes available for paid brand features.</p><p className="mt-7 font-display text-[clamp(2rem,3.2vw,3.4rem)] uppercase leading-[0.86] tracking-[-0.03em]">80% EDITORIAL<br />20% BRAND FEATURES</p><p className="mt-5 text-[11px] font-bold uppercase tracking-[0.18em] text-wind-white/55">STRATEGIC PROPOSAL · NOT AN IMPLEMENTED RESULT</p></>],
    ['04 — THE OFFER',
      <><p className="font-display text-[clamp(2rem,3.5vw,3.7rem)] uppercase leading-[0.84] tracking-[-0.03em]">TURN A SINGLE POST INTO A MEDIA PRODUCT.</p><p className="mt-7 font-display text-[clamp(1.7rem,3vw,3rem)] uppercase leading-[0.88] tracking-[-0.02em]">INSTAGRAM<br />+<br />SHOP DIRECTORY<br />+<br />NEWSLETTER</p><p className="mt-7">Rather than charging brands simply to appear on Instagram, I developed a proposition that combined multiple DEORON touchpoints.</p></>],
    ['05 — THE COMMERCIAL MODEL',
      <><p className="font-display text-[clamp(2rem,3.5vw,3.7rem)] uppercase leading-[0.84] tracking-[-0.03em]">ONE-OFF PLACEMENT<br />→ PACKAGED FEATURE<br />→ RECURRING PARTNERSHIP</p><p className="mt-7 font-display text-[clamp(1.7rem,3vw,3rem)] uppercase leading-[0.88] tracking-[-0.02em]">FEATURES · PACKAGES · RETAINERS</p></>],
    ['06 — THE VALUE LAYER',
      <><p className="font-display text-[clamp(2rem,3.5vw,3.7rem)] uppercase leading-[0.84] tracking-[-0.03em]">THE POST IS ONLY THE BEGINNING.</p><div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-3 border-y border-wind-white/25 py-6 text-[11px] font-bold uppercase tracking-[0.16em] md:grid-cols-3">{['LICENSING','WHITELISTING','EXCLUSIVITY','DESIGN WEEK PRIORITY','DIRECTORY PLACEMENT','FAST TURNAROUND'].map((item) => <span key={item}>{item}</span>)}</div><p className="mt-7">I identified additional commercial opportunities around the core placement, creating additional revenue layers without requiring DEORON to increase the volume of sponsored content.</p></>],
    ['07 — THE ECOSYSTEM',
      <><p className="font-display text-[clamp(2rem,3.5vw,3.7rem)] uppercase leading-[0.84] tracking-[-0.03em]">DEORON COULD BECOME MORE THAN A FEED.</p><p className="mt-7 font-display text-[clamp(1.6rem,2.7vw,2.8rem)] uppercase leading-[0.9] tracking-[-0.02em]">INSTAGRAM<br />→ DIRECTORY<br />→ NEWSLETTER<br />→ EDITORIAL GUIDES<br />→ DESIGN WEEK EDITIONS<br />→ PRODUCT DROPS</p></>],
    ['08 — THE OPPORTUNITY AHEAD',
      <><p className="font-display text-[clamp(1.9rem,3.2vw,3.4rem)] uppercase leading-[0.86] tracking-[-0.03em]">EXISTING AUDIENCE<br />→ EDITORIAL AUTHORITY<br />→ SCARCE ACCESS<br />→ RECURRING REVENUE</p><p className="mt-7">The strategy was ultimately about changing what DEORON was selling.</p><p className="mt-5 font-display text-[clamp(2rem,3.2vw,3.2rem)] uppercase leading-[0.86] tracking-[-0.03em]">Not reach alone.<br /><br />TASTE.<br />CURATION.<br />ACCESS.</p><div className="mt-8 border-y border-wind-white/25 py-6"><p className="text-[10px] font-bold uppercase tracking-[0.22em] text-wind-white/70">STATUS</p><p className="mt-4 font-display text-[clamp(1.8rem,3vw,3rem)] uppercase leading-[0.86] tracking-[-0.03em]">STRATEGIC PROPOSAL<br />PRESENTED TO DEORON'S FOUNDER<br />2026</p><p className="mt-4 text-[11px] font-bold uppercase tracking-[0.18em]">NOT YET IMPLEMENTED</p></div></>],
  ];

  const exhibitionSections = [
    ['01 — THE EVENT',
      <><p>DEORON brought its curatorial world into a physical space for the first time in Berlin — taking over Monopol during Berlin Art Week and turning a former industrial building into a temporary home for design, sound and gathering.</p><p className="mt-7 font-display text-[clamp(1.9rem,3.2vw,3.2rem)] uppercase leading-[0.88] tracking-[-0.025em]">DESIGN<br />+<br />SOUND<br />+<br />PEOPLE<br />+<br />PLACE</p></>],
    ['02 — MY ROLE',
      <><p className="font-display text-[clamp(1.8rem,3vw,3.1rem)] uppercase leading-[0.86] tracking-[-0.03em]">I JOINED DEORON AS AN EVENT MANAGER ACROSS THE EXHIBITION — HELPING TAKE THE EXPERIENCE FROM INSTALLATION TO FINAL BREAKDOWN.</p><div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-3 border-y border-wind-white/25 py-6 text-[11px] font-bold uppercase tracking-[0.16em] md:grid-cols-3">{['SET-UP','DESIGNER SUPPORT','GUEST EXPERIENCE','GUIDED TOURS','EVENT OPERATIONS'].map((item) => <span key={item}>{item}</span>)}</div></>],
    ['03 — THE SPACE',
      <><p className="font-display text-[clamp(1.8rem,3vw,3.1rem)] uppercase leading-[0.86] tracking-[-0.03em]">THE CHALLENGE WAS MAKING A LARGE, INDUSTRIAL ENVIRONMENT FEEL COHERENT, WELCOMING AND ALIVE — WITHOUT LOSING THE RAWNESS OF THE BUILDING.</p><p className="mt-7">I helped prepare the exhibition, install and position elements, support the presentation of designers' work and make sure the space was ready to move between daytime visits, tours, talks and evening programming.</p></>],
    ['04 — THE EXPERIENCE',
      <><p className="font-display text-[clamp(1.8rem,3vw,3.1rem)] uppercase leading-[0.86] tracking-[-0.03em]">A BIG PART OF THE JOB WAS MAKING THE EXHIBITION UNDERSTANDABLE WITHOUT MAKING IT FEEL OVERLY EXPLAINED.</p><p className="mt-7">I spoke with guests about the designers and objects, answered questions, gave guided tours and helped people navigate the exhibition — translating DEORON's point of view into a physical experience.</p><p className="mt-7 font-display text-[clamp(1.6rem,2.7vw,2.8rem)] uppercase leading-[0.9] tracking-[-0.02em]">WHO MADE IT · WHY IT MATTERS · WHAT TO LOOK AT · WHERE TO GO NEXT</p></>],
    ['05 — BEHIND THE SCENES',
      <><p className="font-display text-[clamp(1.8rem,3vw,3.1rem)] uppercase leading-[0.86] tracking-[-0.03em]">THE POLISHED EXHIBITION WAS ONLY ONE HALF OF THE JOB.</p><p className="mt-7">I worked directly with designers and exhibitors throughout the event, helping with practical needs, troubleshooting issues, coordinating the moving parts of the day and making sure the programme continued to run smoothly.</p><p className="mt-5">From installation and last-minute adjustments to guest arrivals and breakdown, the role required staying close to the detail while keeping an eye on the experience as a whole.</p></>],
    ['06 — DEORON IN MOTION',
      <><p className="font-display text-[clamp(1.8rem,3vw,3.1rem)] uppercase leading-[0.86] tracking-[-0.03em]">THE OBJECTS WEREN'T TREATED AS STATIC THINGS TO LOOK AT. THEY BECAME PART OF A SOCIAL, SENSORY ENVIRONMENT.</p><p className="mt-7">Sound systems filled the space. People gathered, sat, listened and talked. Designers were present. Guests moved between objects, conversations and events.</p><p className="mt-7 font-display text-[clamp(1.9rem,3vw,3.1rem)] uppercase leading-[0.88] tracking-[-0.025em]">A SHOWROOM<br />→<br />A GATHERING PLACE</p></>],
    ['07 — THE TAKEAWAY',
      <><p className="font-display text-[clamp(1.8rem,3vw,3.1rem)] uppercase leading-[0.86] tracking-[-0.03em]">MY ROLE WAS ULTIMATELY ABOUT KEEPING THE EXPERIENCE MOVING — FROM THE PHYSICAL INSTALLATION TO THE WAY PEOPLE ENCOUNTERED THE WORK.</p><p className="mt-7 font-display text-[clamp(1.6rem,2.7vw,2.8rem)] uppercase leading-[0.9] tracking-[-0.02em]">INSTALL · HOST · EXPLAIN · SOLVE · CONNECT · RESET</p></>],
  ];

  const renderSection = ([label, content]) => (
    <section key={label} className="border-t border-wind-white/25 pt-6">
      <h5 className="mb-7 font-display text-[clamp(2.4rem,5vw,5rem)] uppercase leading-[0.86] tracking-[-0.03em] text-wind-orange" style={{ textShadow: '3px 3px 0 rgba(255,255,255,0.5)' }}>{label}</h5>
      <div className="font-poppins text-[18px] leading-[1.45] md:text-[21px]">{content}</div>
    </section>
  );

  return (
    <>
      <div className="deoron-project-content grid gap-10 md:grid-cols-12 md:items-start">
      <div className="md:col-span-7 md:col-start-1">
        <div className="border-y border-wind-white/25 py-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-wind-white/70">DEORON · REFRAMING THE FEED / BERLIN EXHIBITION</p>
          <p className="mt-3 font-poppins text-[13px] font-bold uppercase tracking-[0.18em] text-wind-white/70">{project.secondaryTitle}</p>
          <p className="mt-6 font-poppins text-[19px] leading-[1.45] md:text-[21px]">{project.intro}</p>
        </div>
        <div className="mt-12 space-y-14">{strategySections.map(renderSection)}</div>
      </div>

      <aside className="md:col-span-4 md:col-start-9">
        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-wind-white/70">ACTUAL STRATEGIC PROPOSAL · 2026</p>
        <a href={project.link} target="_blank" rel="noreferrer" className="group block overflow-hidden border border-wind-black bg-wind-white">
          <img src={project.image} alt={project.imageAlt} className="block h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" loading="lazy" />
          <div className="flex items-center justify-between border-t border-wind-black bg-wind-white px-4 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-wind-black">
            <span>Open full deck</span><ArrowUpRight className="h-3 w-3" strokeWidth={1.5} />
          </div>
        </a>
      </aside>

      <div className="md:col-span-12 mt-12 flex flex-col items-center border-y border-wind-white/40 px-4 py-16 text-center md:mt-20 md:px-8 md:py-24">
        <p className="text-[14px] font-black uppercase tracking-[0.28em] text-wind-white/70 md:text-[17px]">DEORON — BERLIN EXHIBITION</p>
        <p className="mt-8 max-w-[1400px] font-display text-[clamp(6rem,11vw,13rem)] font-black uppercase leading-[0.76] tracking-[-0.06em] text-wind-orange" style={{ textShadow: '6px 6px 0 rgba(255,255,255,0.5)' }}>FROM DIGITAL PLATFORM<br />TO PHYSICAL EXPERIENCE.</p>
        <p className="mt-10 max-w-5xl font-poppins text-[20px] leading-[1.45] md:text-[23px]">I worked with <a href="https://www.instagram.com/deoron/?hl=en" target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-4 transition-colors hover:text-wind-orange">DEORON</a> on its Berlin exhibition during Design Week, held at Monopol from September 9–13, 2026, supporting the project from setup through breakdown. Working across event production, designer liaison and guest experience, I helped bring DEORON’s digital world into a physical space, supporting exhibitors, welcoming and guiding guests, and helping keep the exhibition running smoothly throughout.</p>
      </div>

      <div className="md:col-span-6 md:col-start-1 space-y-14">{exhibitionSections.map(renderSection)}
        <section className="border-y border-wind-white/25 py-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-wind-white/70">STATUS</p>
          <p className="mt-5 font-display text-[clamp(2rem,3.5vw,3.5rem)] uppercase leading-[0.84] tracking-[-0.03em] text-wind-orange" style={{ textShadow: '3px 3px 0 rgba(255,255,255,0.5)' }}>EXECUTED<br />DEORON BERLIN EXHIBITION<br />2026</p>
          <p className="mt-4 font-poppins text-[18px] font-bold uppercase tracking-[0.08em]">MONOPOL, BERLIN</p>
          <p className="mt-6 text-[11px] font-bold uppercase leading-[1.6] tracking-[0.18em]">EVENT MANAGEMENT · PRODUCTION · GUEST EXPERIENCE · DESIGNER LIAISON · GUIDED TOURS</p>
        </section>
      </div>

      <aside className="md:col-span-6 md:col-start-7">
        <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.22em] text-wind-white/70">DEORON BERLIN · EXECUTED EVENT WORK</p>
        <p className="mb-4 font-poppins text-[16px] font-bold leading-[1.35] text-wind-white">Click any image to view it larger.</p>
        <div className="deoron-exhibition-grid grid">
          {exhibitionImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setLightboxIndex(index)}
              className="group block w-full cursor-zoom-in overflow-hidden border-0 bg-transparent p-0 text-left"
              aria-label={`Enlarge ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="block h-auto w-full transition-transform duration-300 group-hover:scale-[1.015]"
              />
            </button>
          ))}
        </div>
      </aside>
      </div>

      {lightboxImage && (
      <div
        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4 md:p-8"
        role="dialog"
        aria-modal="true"
        aria-label={lightboxImage.alt}
        onClick={() => setLightboxIndex(null)}
      >
        <button
          type="button"
          onClick={() => setLightboxIndex(null)}
          className="absolute right-4 top-4 z-10 border border-white/70 bg-black/30 px-4 py-2 font-poppins text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-black md:right-8 md:top-8"
          aria-label="Close enlarged image"
        >
          Close ×
        </button>
        <div className="relative flex max-h-[92vh] max-w-[94vw] items-center justify-center" onClick={(event) => event.stopPropagation()}>
          <img
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            className="block max-h-[92vh] max-w-[94vw] object-contain"
          />
        </div>
      </div>
      )}
    </>
  );
}

function DroidconProject({ project }) {
  const stats = [
    ['3', 'INTERNATIONAL BRANDS'],
    ['10', 'EVENTS'],
    ['14+', 'SOCIAL CHANNELS'],
    ['5+', 'NEWSLETTERS'],
    ['20K+', 'FOLLOWERS'],
    ['18K+', 'NEWSLETTER SUBSCRIBERS'],
    ['+25–30%', 'ENGAGEMENT / ATTENDANCE GROWTH'],
  ];

  const roles = [
    ['01 — BRAND', 'Developed positioning, communication direction and marketing strategy across international technology event brands.'],
    ['02 — MARKETING', 'Led integrated campaigns across social, email, content, partnerships and event marketing, adapting global brands to different audiences and markets.'],
    ['03 — AUDIENCE', 'Built content and communications systems across 14+ social channels and 5+ newsletters, contributing to audience growth from 1K to 20K+ followers and 1K to 18K+ newsletter subscribers.'],
    ['04 — LIVE EXPERIENCE', 'Led onsite marketing and brand experiences across Europe and North America, including sponsor activations, attendee experience, content and event communications.'],
    ['05 — PARTNERSHIPS', 'Worked across partnerships with brands including Google, Meta, Uber, Disney and The New York Times.'],
  ];

  return (
    <div className="droidcon-project-content grid gap-12 md:grid-cols-12">
      <div className="md:col-span-7 md:col-start-1">
        <div className="border-y border-wind-white/25 py-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-wind-white/70">MOBILE SEASONS</p>
          <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.22em] text-wind-white/50">DROIDCON · FLUTTERCON · T3 ENGINEERING LEADERSHIP SUMMIT</p>
          <p className="mt-6 font-poppins text-[19px] leading-[1.45] md:text-[21px]">
            At Mobile Seasons, I led brand and marketing across droidcon, Fluttercon and the T3 Engineering Leadership Summit, spanning three international brands and ten events. My work connected brand strategy, campaigns, content, audience growth, partnerships and live experiences across multiple markets and channels.
          </p>
        </div>

        <section className="mt-12">
          <div className="mb-7 border-t border-wind-white/25 pt-6">
            <h5 className="font-display text-[clamp(2.4rem,5vw,5rem)] uppercase leading-[0.86] tracking-[-0.03em] text-wind-orange" style={{ textShadow: '3px 3px 0 rgba(255,255,255,0.5)' }}>THE SCALE</h5>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-3">
            {stats.map(([value, label]) => (
              <div key={label} className="border-t border-wind-white/25 pt-4">
                <p className="font-display text-[clamp(3.1rem,5vw,5.5rem)] uppercase leading-[0.78] tracking-[-0.04em] text-wind-orange" style={{ textShadow: '3px 3px 0 rgba(255,255,255,0.5)' }}>{value}</p>
                <p className="mt-4 max-w-[13rem] text-[10px] font-bold uppercase leading-[1.45] tracking-[0.18em] text-wind-white">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <div className="mb-7 border-t border-wind-white/25 pt-6">
            <h5 className="font-display text-[clamp(2.4rem,5vw,5rem)] uppercase leading-[0.86] tracking-[-0.03em] text-wind-orange" style={{ textShadow: '3px 3px 0 rgba(255,255,255,0.5)' }}>WHAT I DID</h5>
          </div>
          <div className="divide-y divide-wind-white/25 border-y border-wind-white/25">
            {roles.map(([label, text]) => (
              <div key={label} className="grid gap-4 py-6 md:grid-cols-4 md:gap-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-wind-white/70">{label}</p>
                <p className="font-poppins text-[16px] leading-[1.45] md:col-span-3 md:text-[18px]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 border-y border-wind-white/25 py-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-wind-white/70">RESULTS / PROOF</p>
          <p className="mt-5 font-poppins text-[19px] font-bold leading-[1.45] md:text-[22px]">
            Social audiences grew from 1K to 20K+ followers, while newsletter audiences grew from 1K to 18K+ subscribers. Integrated campaigns contributed to a 25–30% increase in engagement and conference attendance.
          </p>
        </section>

        <section className="mt-12">
          <p className="font-display text-[clamp(2.7rem,5vw,5.5rem)] uppercase leading-[0.82] tracking-[-0.035em] text-wind-orange" style={{ textShadow: '4px 4px 0 rgba(255,255,255,0.5)' }}>
            OPERATE THE BRAND.<br />TAKE IT INTO<br />THE WORLD.
          </p>
          <p className="mt-6 font-poppins text-[18px] leading-[1.45] md:text-[20px]">
            Where next.app shows I can build a brand from inception, this work shows I can operate and grow international brands across markets, channels, partnerships and live experiences.
          </p>
        </section>
      </div>

      <div className="md:col-span-4 md:col-start-9">
        <div className="md:sticky md:top-24">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-wind-white/70">ACTUAL PROJECT MATERIAL · FLUTTERCON</p>
          <a href={project.link} target="_blank" rel="noreferrer" className="group block overflow-hidden border border-wind-black">
            <img
              src={project.image}
              alt={project.imageAlt}
              className="block h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              loading="lazy"
            />
            <div className="flex items-center justify-between border-t border-wind-black bg-wind-white px-4 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-wind-black">
              <span>Open full project</span><ArrowUpRight className="h-3 w-3" strokeWidth={1.5} />
            </div>
          </a>
          <p className="mt-5 max-w-sm font-poppins text-[16px] leading-[1.45] text-wind-white/80">
            The full project material opens as the original Fluttercon Orlando campaign document. The preview is here as evidence of the work; the portfolio page carries the strategic context.
          </p>
        </div>
      </div>
    </div>
  );
}

function ZalandoProjectVisual({ project }) {
  const pdfUrl = project.link;
  return (
    <div>
      <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-wind-white/70">ZALANDO · NEWSROOM CASE STUDY</p>
      <a
        href={pdfUrl}
        target="_blank"
        rel="noreferrer"
        className="group block overflow-hidden border border-wind-black bg-wind-white"
      >
        <img
          src={project.image}
          alt={project.imageAlt}
          className="block h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          loading="lazy"
        />
        <div className="flex items-center justify-between border-t border-wind-black bg-wind-white px-4 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-wind-black">
          <span>Open full case study</span><ArrowUpRight className="h-3 w-3" strokeWidth={1.5} />
        </div>
      </a>
      <a
        href={pdfUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex items-center gap-2 border-b border-wind-white/45 pb-1 text-[10px] font-medium uppercase tracking-[0.22em] text-wind-white"
      >
        OPEN FULL CASE STUDY <ArrowUpRight className="h-3 w-3" strokeWidth={1.5} />
      </a>
    </div>
  );
}

function CrushProjectVisual({ project }) {
  const archiveUrl = 'https://crushmag-online.com/author/katrina/page/5/';
  const articles = [
    {
      title: 'Sit-Down Restaurants Allowed To Reopen Under ‘Advanced’ Level 3',
      image: 'https://crushmag-online.com/wp-content/uploads/2020/06/level3.jpg',
    },
    {
      title: 'All The Wine Terms You Need To Know From A-Z',
      image: 'https://crushmag-online.com/wp-content/uploads/2020/06/wineterms1x5.jpg',
    },
    {
      title: 'Shining the Spotlight on L-Gin From The Elgin Valley',
      image: 'https://crushmag-online.com/wp-content/uploads/2020/01/l-ginladies1x5.jpg',
    },
    {
      title: 'Father’s Day Gift Ideas For Every Dad',
      image: 'https://crushmag-online.com/wp-content/uploads/2020/06/FathersDay_Greenleaf_ArticleImages_May2020_1x560.jpg',
    },
  ];

  return (
    <div>
      <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-wind-white/70">CRUSH MAGAZINE · PUBLISHED WORK</p>
      <a
        href={archiveUrl}
        target="_blank"
        rel="noreferrer"
        className="group block overflow-hidden border border-wind-black bg-wind-white text-wind-black"
      >
        <div className="border-b border-wind-black px-5 py-4 md:px-6 md:py-5">
          <img
            src="https://crushmag-online.com/wp-content/uploads/2024/12/NEW-CRUSH-LOGO_WEB2025.png"
            alt="Crush Magazine"
            className="h-auto w-[150px] max-w-[55%] object-contain md:w-[185px]"
            loading="lazy"
          />
          <div className="mt-5 flex items-end justify-between border-t border-wind-black pt-3">
            <div>
              <p className="font-poppins text-[9px] font-bold uppercase tracking-[0.2em]">Katrina Rose Wind</p>
              <p className="mt-1 font-poppins text-[8px] uppercase tracking-[0.16em] opacity-60">Author archive · Page 5</p>
            </div>
            <span className="font-poppins text-[9px] font-bold uppercase tracking-[0.18em]">Published work</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-px bg-wind-black">
          {articles.map((article) => (
            <div key={article.title} className="bg-wind-white">
              <div className="aspect-[1.25/1] overflow-hidden bg-[#e9e5df]">
                <img
                  src={article.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="border-t border-wind-black p-3 md:p-4">
                <p className="font-display text-[16px] uppercase leading-[0.92] tracking-[-0.02em] md:text-[19px]">{article.title}</p>
                <p className="mt-3 text-[7px] font-bold uppercase tracking-[0.18em] opacity-55">CRUSH MAGAZINE · KATRINA ROSE WIND</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-wind-black bg-wind-white px-4 py-3 text-[10px] font-medium uppercase tracking-[0.2em]">
          <span>View author archive</span>
          <ArrowUpRight className="h-3 w-3" strokeWidth={1.5} />
        </div>
      </a>
      <a
        href={archiveUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex items-center gap-2 border-b border-wind-white/45 pb-1 text-[10px] font-medium uppercase tracking-[0.22em] text-wind-white"
      >
        VIEW ALL CRUSH ARTICLES <ArrowUpRight className="h-3 w-3" strokeWidth={1.5} />
      </a>
    </div>
  );
}

function ProjectVisual({ project }) {
  if (project.nextApp) return <NextAppProjectVisual project={project} />;
  if (project.berliner) return null;
  if (project.zalando) return <ZalandoProjectVisual project={project} />;
  if (project.crush) return <CrushProjectVisual project={project} />;
  if (project.deoron) return null;

  if (project.image) {
    return (
      <a href={project.link} target="_blank" rel="noreferrer" className="group block overflow-hidden border border-wind-black">
        <img src={project.image} alt={project.imageAlt} className="case-study-image transition-transform duration-700 group-hover:scale-[1.03]" loading="lazy" />
        <div className="flex items-center justify-between border-t border-wind-black bg-wind-white px-4 py-3 text-[12px] font-medium uppercase tracking-[0.2em]">
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
      <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-wind-white/55">Selected archive</p>
      <div>
        <p className="font-display text-[clamp(2.8rem,5vw,5rem)] uppercase leading-[0.86]">{project.title}</p>
        <p className="mt-5 max-w-xs font-poppins text-[17px] leading-[1.4] text-wind-white">{project.type}</p>
      </div>
    </div>
  );
}

function WorkCard({ project, expanded, onToggle }) {
  return (
    <article id={project.slug ? `work-${project.slug}` : undefined} className="border-t border-wind-white/35 pt-6">
      <button type="button" onClick={onToggle} aria-expanded={expanded} className="group block w-full text-left">
        <div className="grid gap-8 md:grid-cols-12 md:items-start">
          <div className="md:col-span-1">
            <span className="font-display text-4xl text-wind-orange md:text-5xl" style={{ textShadow: '4px 4px 0 rgba(255,255,255,0.5)' }}>{project.n}</span>
          </div>
          <div className="md:col-span-6">
            <p className="project-card-subheading text-[13px] font-bold uppercase tracking-[0.18em] text-wind-white">{project.type}</p>
            <h3 className="mt-3 font-display text-[clamp(2.4rem,5vw,5.5rem)] uppercase leading-[0.88] tracking-[-0.03em] text-wind-orange transition-transform duration-300 group-hover:translate-x-2" style={{ textShadow: '4px 4px 0 rgba(255,255,255,0.5)' }}>{project.displayTitle || project.title}</h3>
            {project.note && <p className="project-card-subheading mt-4 max-w-lg text-[12px] font-bold uppercase tracking-[0.12em] text-wind-white">{project.note}</p>}
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="max-w-md font-poppins text-[19px] leading-[1.38] text-wind-white md:text-[21px]">{project.intro}</p>
            <span className="mt-6 inline-flex items-center gap-2 border-b border-wind-white/60 pb-1 text-[12px] font-medium uppercase tracking-[0.25em] text-wind-white">
              {expanded ? (project.nextApp || project.droidcon ? 'CLOSE PROJECT ×' : project.crush || project.berliner ? 'CLOSE EDITORIAL WORK ×' : project.berlinBites ? 'CLOSE PROPOSAL ×' : project.deoron ? 'CLOSE PROJECT ×' : 'Close case study') : (project.title === 'ZALANDO' ? 'Read case study' : 'Read more')} <Plus className={`h-4 w-4 transition-transform ${expanded ? 'rotate-45' : ''}`} strokeWidth={1.5} />
            </span>
          </div>
        </div>
      </button>

      {expanded && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="project-detail-content mt-10 grid gap-8 pb-10 md:grid-cols-12 text-wind-white">
          {project.berliner ? (
            <div className="md:col-span-11 md:col-start-2">
              <BerlinerProject project={project} />
            </div>
          ) : project.berlinBites ? (
            <div className="md:col-span-11 md:col-start-2">
              <BerlinBitesProject project={project} />
            </div>
          ) : project.droidcon ? (
            <div className="md:col-span-11 md:col-start-2">
              <DroidconProject project={project} />
            </div>
          ) : project.deoron ? (
            <div className="md:col-span-11 md:col-start-2">
              <DeoronProject project={project} />
            </div>
          ) : project.zalando ? (
            <div className="md:col-span-11 md:col-start-2">
              <div className="zalando-project-content grid gap-8 md:grid-cols-12">
                <div className="md:col-span-7 md:col-start-1">
                  <div className="border-y border-wind-white/25 py-8">
                    <p className="font-poppins text-[19px] leading-[1.45] md:text-[21px]">{project.intro}</p>
                  </div>

                  <section className="mt-12">
                    <div className="mb-7 border-t border-wind-white/25 pt-6">
                      <h5 className="font-display text-[clamp(2.4rem,5vw,5rem)] uppercase leading-[0.86] tracking-[-0.03em] text-wind-orange" style={{ textShadow: '3px 3px 0 rgba(255,255,255,0.5)' }}>THE OPPORTUNITY</h5>
                    </div>
                    <p className="font-poppins text-[18px] leading-[1.45] md:text-[21px]">{project.detail}</p>
                  </section>

                  <section className="mt-12">
                    <div className="mb-7 border-t border-wind-white/25 pt-6">
                      <h5 className="font-display text-[clamp(2.4rem,5vw,5rem)] uppercase leading-[0.86] tracking-[-0.03em] text-wind-orange" style={{ textShadow: '3px 3px 0 rgba(255,255,255,0.5)' }}>MY APPROACH</h5>
                    </div>
                    <p className="font-display text-[clamp(2rem,4vw,4rem)] uppercase leading-[0.88] tracking-[-0.03em] text-wind-orange" style={{ textShadow: '3px 3px 0 rgba(255,255,255,0.5)' }}>READ CULTURE → FILTER → TRANSLATE → CREATE</p>
                    <p className="mt-6 font-poppins text-[18px] leading-[1.45] md:text-[20px]">I approached the brief as an editorial problem rather than a campaign brief: first identifying the cultural moments worth paying attention to, then filtering them through Zalando’s audience and brand, before translating one into distinct Instagram and TikTok executions.</p>
                  </section>

                  <section className="mt-12">
                    <div className="mb-7 border-t border-wind-white/25 pt-6">
                      <h5 className="font-display text-[clamp(2.4rem,5vw,5rem)] uppercase leading-[0.86] tracking-[-0.03em] text-wind-orange" style={{ textShadow: '3px 3px 0 rgba(255,255,255,0.5)' }}>THE NEWSROOM FILTER</h5>
                    </div>
                    <div className="divide-y divide-wind-white/25 border-y border-wind-white/25">
                      {[
                        ['01 — CULTURAL VELOCITY', 'Is the conversation happening now, or about to peak?'],
                        ['02 — FASHION TRANSLATION', 'Can the cultural signal become something useful, visual or wearable?'],
                        ['03 — AUDIENCE RELEVANCE', 'Will Zalando’s audience genuinely care?'],
                        ['04 — PLATFORM POTENTIAL', 'Can the idea behave naturally on Instagram or TikTok?'],
                      ].map(([label, text]) => (
                        <div key={label} className="grid gap-3 py-5 md:grid-cols-3">
                          <p className="text-[10px] font-bold uppercase tracking-[0.16em]">{label}</p>
                          <p className="font-poppins text-[17px] leading-[1.4] md:col-span-2">{text}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="mt-12">
                    <div className="mb-7 border-t border-wind-white/25 pt-6">
                      <h5 className="font-display text-[clamp(2.4rem,5vw,5rem)] uppercase leading-[0.86] tracking-[-0.03em] text-wind-orange" style={{ textShadow: '3px 3px 0 rgba(255,255,255,0.5)' }}>THE MOMENT</h5>
                    </div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-wind-white/70">COPENHAGEN FASHION WEEK</p>
                    <p className="mt-5 font-poppins text-[18px] leading-[1.45] md:text-[20px]">Copenhagen Fashion Week offered a live cultural signal with strong visual language, immediate street-style relevance and a natural connection to how people actually dress. Rather than simply reporting on the event, I used it as a source of inspiration to decode the small styling details appearing across the week and translate them into everyday outfit ideas.</p>
                  </section>

                  <section className="mt-12">
                    <div className="mb-7 border-t border-wind-white/25 pt-6">
                      <h5 className="font-display text-[clamp(2.4rem,5vw,5rem)] uppercase leading-[0.86] tracking-[-0.03em] text-wind-orange" style={{ textShadow: '3px 3px 0 rgba(255,255,255,0.5)' }}>THE IDEA</h5>
                    </div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-wind-white/70">NORDIC WINTER FIT FORECAST</p>
                    <p className="mt-5 font-poppins text-[18px] leading-[1.45] md:text-[20px]">Instead of covering full street-style looks, I focused on the smaller details repeatedly appearing across Copenhagen Fashion Week — accessories, silhouettes, textures and styling choices — and turned them into wearable outfit formulas.</p>
                    <p className="mt-7 font-display text-[clamp(2rem,3.8vw,3.8rem)] uppercase leading-[0.88] tracking-[-0.03em] text-wind-orange" style={{ textShadow: '3px 3px 0 rgba(255,255,255,0.5)' }}>CULTURE → SIGNAL → STYLING IDEA → CONTENT</p>
                  </section>

                  <section className="mt-12">
                    <div className="mb-7 border-t border-wind-white/25 pt-6">
                      <h5 className="font-display text-[clamp(2.4rem,5vw,5rem)] uppercase leading-[0.86] tracking-[-0.03em] text-wind-orange" style={{ textShadow: '3px 3px 0 rgba(255,255,255,0.5)' }}>PLATFORM THINKING</h5>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2">
                      <div><p className="text-[10px] font-bold uppercase tracking-[0.2em]">TIKTOK</p><p className="mt-3 text-[10px] font-medium uppercase tracking-[0.16em] text-wind-white/70">FAST · REACTIVE · PARTICIPATORY</p><p className="mt-4 font-poppins text-[17px] leading-[1.4]">A space for quick trend decoding, commentary, transformation and comment-led styling.</p></div>
                      <div><p className="text-[10px] font-bold uppercase tracking-[0.2em]">INSTAGRAM</p><p className="mt-3 text-[10px] font-medium uppercase tracking-[0.16em] text-wind-white/70">EDITORIAL · SAVEABLE · VISUAL</p><p className="mt-4 font-poppins text-[17px] leading-[1.4]">A place to package the same cultural signal into a more considered visual story people could save and return to.</p></div>
                    </div>
                  </section>

                  <section className="mt-12">
                    <div className="mb-7 border-t border-wind-white/25 pt-6"><h5 className="font-display text-[clamp(2.4rem,5vw,5rem)] uppercase leading-[0.86] tracking-[-0.03em] text-wind-orange" style={{ textShadow: '3px 3px 0 rgba(255,255,255,0.5)' }}>THE PRINCIPLE</h5></div>
                    <p className="font-display text-[clamp(2.5rem,5vw,5.5rem)] uppercase leading-[0.84] tracking-[-0.035em] text-wind-orange" style={{ textShadow: '4px 4px 0 rgba(255,255,255,0.5)' }}>CULTURE FIRST. PRODUCT SECOND.</p>
                    <p className="mt-6 font-poppins text-[18px] leading-[1.45] md:text-[20px]">The role of Newsroom content isn’t to interrupt culture with product. It’s to earn a place in the conversation first, then create a natural path from inspiration into discovery.</p>
                  </section>

                  <section className="mt-12">
                    <div className="mb-7 border-t border-wind-white/25 pt-6"><h5 className="font-display text-[clamp(2.4rem,5vw,5rem)] uppercase leading-[0.86] tracking-[-0.03em] text-wind-orange" style={{ textShadow: '3px 3px 0 rgba(255,255,255,0.5)' }}>WHAT THIS SHOWS</h5></div>
                    <div className="grid gap-3 border-y border-wind-white/25 py-6 md:grid-cols-2">
                      {['CULTURAL JUDGEMENT — Knowing what deserves the brand’s attention.', 'EDITORIAL THINKING — Finding the interesting angle inside a larger cultural moment.', 'PLATFORM STRATEGY — Understanding that Instagram and TikTok require different behaviours.', 'CREATIVE STRATEGY — Turning an observation into a repeatable content idea.', 'BRAND JUDGEMENT — Keeping the work recognisably Zalando without forcing the brand into the conversation.', 'COMMERCIAL AWARENESS — Creating a pathway from cultural relevance toward discovery without turning editorial into advertising.'].map((item) => <p key={item} className="font-poppins text-[16px] leading-[1.4]">{item}</p>)}
                    </div>
                  </section>

                  <section className="mt-12">
                    <div className="mb-7 border-t border-wind-white/25 pt-6"><h5 className="font-display text-[clamp(2.4rem,5vw,5rem)] uppercase leading-[0.86] tracking-[-0.03em] text-wind-orange" style={{ textShadow: '3px 3px 0 rgba(255,255,255,0.5)' }}>WHAT HAPPENED</h5></div>
                    <p className="font-poppins text-[18px] leading-[1.45] md:text-[20px]">The case study formed part of Zalando’s hiring process for its Newsroom team. Following the application and interview process, I was selected for the role. The appointment ultimately did not proceed following organisational restructuring and a Works Council decision.</p>
                  </section>

                  <section className="mt-12 border-y border-wind-white/25 py-8">
                    <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-wind-white/70">THE JOB WAS THE PROOF.</p>
                    <p className="mt-5 font-poppins text-[18px] leading-[1.45] md:text-[20px]">This wasn’t a speculative brand exercise. It was a real hiring brief for a real Newsroom role — an opportunity to demonstrate how I think about culture, audiences, editorial judgement and social storytelling.</p>
                    <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em]">SELECTED FOR THE ROLE · APPOINTMENT DID NOT PROCEED</p>
                  </section>
                </div>
                <div className="md:col-span-4 md:col-start-9">
                  <div className="md:sticky md:top-24">
                    <ProjectVisual project={project} />
                  </div>
                </div>
              </div>
            </div>
          ) : project.crush ? (
            <div className="md:col-span-11 md:col-start-2">
              <div className="crush-project-content grid gap-8 md:grid-cols-12">
                <div className="md:col-span-7 md:col-start-1">
                  <div className="border-y border-wind-white/25 py-8">
                    <p className="font-poppins text-[19px] leading-[1.45] md:text-[21px]">{project.detail}</p>
                  </div>

                  <section className="mt-12">
                    <div className="mb-7 border-t border-wind-white/25 pt-6">
                      <h5 className="font-display text-[clamp(2.4rem,5vw,5rem)] uppercase leading-[0.86] tracking-[-0.03em] text-wind-orange" style={{ textShadow: '3px 3px 0 rgba(255,255,255,0.5)' }}>MY ROLE</h5>
                    </div>
                    <p className="font-poppins text-[18px] font-bold leading-[1.45] md:text-[21px]">EDITORIAL · DIGITAL CONTENT · SOCIAL · NEWSLETTERS · INTERVIEWS · PARTNERSHIPS</p>
                  </section>

                  <section className="mt-12 border-y border-wind-white/25 py-8">
                    <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-wind-white/70">THE EDITORIAL INSTINCT</p>
                    <p className="mt-5 font-display text-[clamp(2.5rem,5vw,5.5rem)] uppercase leading-[0.84] tracking-[-0.035em] text-wind-orange" style={{ textShadow: '4px 4px 0 rgba(255,255,255,0.5)' }}>Editorial was where I learned to find the interesting thing — and make people care about it.</p>
                  </section>

                  <section className="mt-12">
                    <div className="mb-7 border-t border-wind-white/25 pt-6">
                      <h5 className="font-display text-[clamp(2.4rem,5vw,5rem)] uppercase leading-[0.86] tracking-[-0.03em] text-wind-orange" style={{ textShadow: '3px 3px 0 rgba(255,255,255,0.5)' }}>WHAT I WORKED ACROSS</h5>
                    </div>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-3 border-y border-wind-white/25 py-6 md:grid-cols-3">
                      {['ORIGINAL FEATURES', 'INTERVIEWS', 'FOOD + CULTURE', 'SERVICE JOURNALISM', 'DIGITAL CONTENT', 'SOCIAL + NEWSLETTERS'].map((item) => <span key={item} className="text-[10px] font-bold uppercase tracking-[0.16em]">{item}</span>)}
                    </div>
                  </section>
                </div>
                <div className="md:col-span-4 md:col-start-9">
                  <div className="md:sticky md:top-24">
                    <ProjectVisual project={project} />
                  </div>
                </div>
              </div>
            </div>
          ) : (
          <>
          <div className="md:col-span-7 md:col-start-2">
            <p className="font-poppins text-[20px] font-bold leading-[1.4] md:text-[22px]">{project.detail}</p>
            {project.nextApp ? (
              <div className="mt-10">
                <NextAppProjectContent project={project} />
              </div>
            ) : project.sections && (
              <div className="mt-10 divide-y divide-wind-white/25 border-y border-wind-white/25">
                {project.sections.map(([label, text]) => (
                  <div key={label} className="grid gap-3 py-5 md:grid-cols-3">
                    <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-wind-white">{label}</p>
                    <p className="font-poppins text-[17px] leading-[1.4] md:col-span-2 md:text-[18px]">{text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <ProjectVisual project={project} />
          </div>
          </>
          )}
        </motion.div>
      )}
    </article>
  );
}


function FolderFilter({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      aria-label={`Filter selected work by ${label}`}
      className={`folder-filter group ${active ? 'is-active' : ''}`}
    >
      <svg className="folder-filter-icon" viewBox="0 0 124 101" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id={`folder-body-${label}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#31c1f4" />
            <stop offset="100%" stopColor="#2aaeea" />
          </linearGradient>
          <linearGradient id={`folder-tab-${label}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#31c1f4" />
            <stop offset="100%" stopColor="#2db5ec" />
          </linearGradient>
        </defs>
        <path
          d="M11 0h34.5c2.5 0 4.9.7 7 2.1L64 11h49c6.1 0 11 4.9 11 11v68c0 6.1-4.9 11-11 11H11C4.9 101 0 96.1 0 90V11C0 4.9 4.9 0 11 0Z"
          fill={`url(#folder-tab-${label})`}
        />
        <path
          d="M0 22c0-6.1 4.9-11 11-11h102c6.1 0 11 4.9 11 11v68c0 6.1-4.9 11-11 11H11C4.9 101 0 96.1 0 90V22Z"
          fill={`url(#folder-body-${label})`}
        />
      </svg>
      <span className="folder-filter-label">{label}</span>
    </button>
  );
}

function Work() {
  const [filter, setFilter] = useState('ALL');
  const [open, setOpen] = useState('');
  const visible = useMemo(() => filter === 'ALL' ? PROJECTS : PROJECTS.filter((project) => project.tags.includes(filter)), [filter]);

  return (
    <>
      <style>{`

        .folder-filter {
          display: inline-flex;
          width: 132px;
          flex: 0 0 132px;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          padding: 0;
          border: 0;
          background: transparent;
          text-align: center;
          cursor: pointer;
        }
        .folder-filter-icon {
          display: block;
          width: 124px;
          height: 101px;
          overflow: visible;
          transition: filter 160ms ease;
        }
        .folder-filter-label {
          display: inline-block;
          width: auto;
          min-height: 0;
          padding: 3px 8px 4px;
          background: transparent;
          color: hsl(var(--wind-white));
          font-family: "Poppins", ui-sans-serif, system-ui, sans-serif;
          font-size: 12px;
          font-weight: 700;
          line-height: 1.05;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          transition: background-color 140ms ease, color 140ms ease;
        }
        .folder-filter:hover .folder-filter-label,
        .folder-filter:focus-visible .folder-filter-label {
          background: hsl(var(--wind-orange));
          color: hsl(var(--wind-white));
        }
        .folder-filter:hover .folder-filter-icon,
        .folder-filter:focus-visible .folder-filter-icon {
          filter: brightness(1.03);
        }
        .folder-filter.is-active .folder-filter-icon {
          outline: 2px solid hsl(var(--wind-orange));
          outline-offset: -2px;
        }
        .folder-filter:focus-visible {
          outline: 2px solid hsl(var(--wind-white));
          outline-offset: 4px;
        }
        @media (max-width: 640px) {
          .folder-filter {
            width: 118px;
            flex-basis: 118px;
          }
          .folder-filter-icon {
            width: 112px;
            height: 91px;
          }
        }
        .project-card-subheading {
          font-size: clamp(13px, 0.9vw, 16px);
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #ffffff;
        }
        .project-detail-content .text-wind-orange {
          color: hsl(var(--wind-white)) !important;
          text-shadow: none !important;
          font-family: "Poppins", ui-sans-serif, system-ui, sans-serif !important;
          font-size: clamp(22px, 1.8vw, 30px) !important;
          font-weight: 700 !important;
          line-height: 1.22 !important;
          letter-spacing: 0.06em !important;
        }
        .project-detail-content h5 {
          font-size: clamp(24px, 2vw, 34px) !important;
          line-height: 1.05 !important;
        }
        .nextapp-project-content [class*="text-[10px]"] {
          font-size: 13px !important;
        }
        .berliner-project-content [class*="text-[9px]"],
        .berliner-project-content [class*="text-[10px]"] {
          font-size: 13px !important;
        }
        .berliner-project-content .font-poppins.text-\[17px\] {
          font-size: 19px !important;
        }
        .berlinbites-project-content [class*="text-[10px]"],
        .berlinbites-project-content [class*="text-[11px]"] {
          font-size: 14px !important;
        }
        .droidcon-project-content [class*="text-[10px]"] {
          font-size: 14px !important;
        }
        .droidcon-project-content .font-poppins.text-\[16px\] {
          font-size: 18px !important;
        }
        .droidcon-project-content .font-poppins.text-\[18px\] {
          font-size: 20px !important;
        }
        .crush-project-content [class*="text-[10px]"] {
          font-size: 15px !important;
        }
        .zalando-project-content [class*="text-[10px]"] {
          font-size: 14px !important;
        }
        .deoron-project-content [class*="text-[10px]"] {
          font-size: 14px !important;
        }
        .deoron-project-content [class*="text-[11px]"] {
          font-size: 14px !important;
        }
        .deoron-project-content section > div .font-display {
          font-family: "Poppins", ui-sans-serif, system-ui, sans-serif !important;
          font-size: clamp(22px, 1.8vw, 30px) !important;
          font-weight: 700 !important;
          line-height: 1.22 !important;
          letter-spacing: 0.06em !important;
        }
        .deoron-exhibition-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
          align-items: start;
        }
        .deoron-exhibition-grid button {
          min-width: 0;
        }
        .deoron-exhibition-grid img {
          display: block;
          width: 100%;
          height: auto;
          max-width: 100%;
          object-fit: contain;
          object-position: center;
        }
        @media (max-width: 767px) {
          .deoron-exhibition-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
      `}</style>
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
          <p className="max-w-sm font-poppins text-lg font-medium leading-relaxed text-wind-white md:col-span-4 md:col-start-9">Selected marketing, creative and cultural work.</p>
        </div>
      </Reveal>

      <div className="mt-12 flex flex-wrap items-end gap-x-8 gap-y-6 border-y border-wind-white/35 py-4 md:gap-x-10">
        {FILTERS.map((item) => (
          <FolderFilter key={item} label={item} active={filter === item} onClick={() => setFilter(item)} />
        ))}
      </div>

      <div className="mt-12 space-y-7 text-wind-white">
        {visible.map((project) => (
          <Reveal key={project.title} delay={0.03}>
            <WorkCard project={project} expanded={open === project.title} onToggle={() => setOpen((current) => current === project.title ? '' : project.title)} />
          </Reveal>
        ))}
      </div>
    </section>
    </>
  );
}

function Capabilities() {
  const items = [
    ['THINK', 'BRAND STRATEGY · CULTURAL INSIGHT · AUDIENCE', 'I look for the signal — what people care about, where culture is moving and where a brand can meaningfully enter the conversation.'],
    ['MAKE', 'IDEAS · CAMPAIGNS · CONTENT · STORYTELLING', 'I turn the insight into something people can actually see, share, remember or act on.'],
    ['ACTIVATE', 'CAMPAIGNS · LAUNCHES · PARTNERSHIPS', 'I take ideas beyond the deck — shaping how they show up across channels, communities and real-world moments.'],
    ['EXPERIENCE', 'ACTIVATIONS · EVENTS · PRODUCTION', 'And when the idea needs to leave the screen, I help make the thing happen — from concept through execution.'],
  ];
  const strips = [
    '/images/how-i-work/strip-1.jpg',
    '/images/how-i-work/strip-2.jpg',
    '/images/how-i-work/strip-3.jpg',
    '/images/how-i-work/strip-4.jpg',
  ];

  return (
    <section id="capabilities" className="relative overflow-hidden bg-wind-white text-wind-black md:min-h-[900px]" style={{ minHeight: '900px' }}>
      <div className="relative mx-auto h-full min-h-[900px] max-w-[1584px] px-5 py-8 md:px-16 md:py-0">
        <div className="absolute left-5 right-5 top-8 flex items-center justify-between md:left-16 md:right-16 md:top-[52px]">
          <p className="text-[18px] font-black uppercase tracking-[0.22em] text-[#780606]" style={{ textShadow: '3px 3px 0 rgba(255,255,255,0.48)' }}>03 — How I Work</p>
          <p className="text-right text-[18px] font-black uppercase tracking-[0.22em] text-[#780606]" style={{ textShadow: '3px 3px 0 rgba(255,255,255,0.48)' }}>Marketing · Creative · Culture</p>
        </div>

        <div className="pt-[90px] md:absolute md:left-10 md:top-[112px] md:w-[760px] md:pt-0">
          <h2 className="font-display text-[clamp(3.4rem,4vw,4.4rem)] font-bold uppercase leading-[0.84] tracking-[-0.055em]">
            <span className="block whitespace-nowrap">FIND THE SIGNAL.</span>
            <span className="block whitespace-nowrap">FIND THE IDEA.</span>
            <span className="block whitespace-nowrap">MAKE IT MATTER.</span>
            <span className="block whitespace-nowrap">MAKE IT HAPPEN.</span>
          </h2>
        </div>

        <p className="mt-10 max-w-[700px] font-poppins text-[17px] font-bold leading-[1.16] md:absolute md:right-[10%] md:top-[198px] md:mt-0 md:w-[590px] md:max-w-none md:text-[23px]">
          I like the bit where strategy stops being a deck and starts becoming something people can actually see, read, experience or talk about.
        </p>

        <div className="mt-14 md:absolute md:left-10 md:right-[10%] md:top-[365px] md:mt-0">
          <div className="grid grid-cols-[29%_27%_1fr] gap-[2%] [grid-template-rows:repeat(4,minmax(118px,1fr))]">
            <div className="grid gap-2">
              {strips.map((src) => (
                <div key={src} className="h-full w-full overflow-hidden">
                  <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>

            <div className="grid gap-2">
              {items.map(([title]) => (
                <div key={title} className="flex h-full items-start overflow-visible pt-1">
                  <h3 className="font-display text-[clamp(3rem,3.2vw,3.45rem)] font-bold uppercase leading-[0.84] tracking-[-0.04em] whitespace-nowrap">{title}</h3>
                </div>
              ))}
            </div>

            <div className="grid gap-2 md:translate-x-[80px]">
              {items.map(([title, label, body]) => (
                <div key={title} className="h-full pt-1">
                  <p className="font-poppins text-[14px] font-bold uppercase leading-[1.12] tracking-[0.12em] text-[#17345d]">{label}</p>
                  <p className="mt-2 max-w-[500px] font-poppins text-[20px] leading-[1.2]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="capability-mobile-grid mt-14 grid gap-14 md:hidden">
          <div className="grid grid-cols-2 gap-3">
            {strips.map((src) => (
              <div key={src} className="h-[96px] overflow-hidden">
                <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>

          <div className="grid gap-12">
            {items.map(([title, label, body]) => (
              <article key={title} className="border-t border-wind-black/20 pt-6">
                <h3 className="font-display text-[clamp(4rem,17vw,6rem)] font-bold uppercase leading-[0.78] tracking-[-0.055em]">{title}</h3>
                <p className="mt-5 font-poppins text-[14px] font-bold uppercase leading-[1.12] tracking-[0.12em] text-[#17345d]">{label}</p>
                <p className="mt-3 max-w-[34rem] font-poppins text-[18px] leading-[1.35]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Now() {
  return (
    <section id="now" className="relative overflow-hidden bg-[#780606] text-wind-white md:min-h-[900px]" style={{ minHeight: '900px' }}>
      <div className="relative mx-auto h-full min-h-[900px] max-w-[1584px] px-5 py-8 md:px-16 md:py-0">
        <p className="absolute left-5 top-8 text-[18px] font-black uppercase tracking-[0.22em] text-wind-white md:left-16 md:top-[52px]">04 — Now</p>

        <div className="pt-[100px] md:absolute md:left-[2.5%] md:top-[195px] md:pt-0">
          <div className="absolute -left-0 -top-0 h-[498px] w-[685px] bg-[#0914AF]" />
          <div className="relative z-10 ml-[38px] mt-[65px] h-[445px] w-[667px] overflow-hidden">
            <img src="/images/now.jpg" alt="Katrina Rose Wind in conversation at an event" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>

        <div className="mt-12 md:absolute md:left-[55%] md:top-[104px] md:mt-0 md:w-[42%]">
          <motion.h2 className="hidden font-display text-[clamp(5rem,5.15vw,5.9rem)] font-bold uppercase leading-[0.84] tracking-[-0.055em] md:block" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }} variants={{ show: { transition: { staggerChildren: 0.12 } } }}>
            {['BERLIN.', 'IDEAS.', 'GOOD', 'BRIEFS.'].map((line) => (
              <motion.span key={line} className="block" variants={{ hidden: { x: -90, opacity: 0 }, show: { x: 0, opacity: 1, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }}>
                {line}
              </motion.span>
            ))}
          </motion.h2>
          <motion.h2 className="font-display text-[clamp(3.25rem,13vw,5rem)] font-bold uppercase leading-[0.84] tracking-[-0.055em] md:hidden" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }} variants={{ show: { transition: { staggerChildren: 0.12 } } }}>
            {['BERLIN.', 'IDEAS.', 'GOOD BRIEFS.'].map((line) => (
              <motion.span key={line} className="block whitespace-nowrap" variants={{ hidden: { x: -90, opacity: 0 }, show: { x: 0, opacity: 1, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }}>
                {line}
              </motion.span>
            ))}
          </motion.h2>
          <div className="mt-8 max-w-[560px] font-poppins text-[24px] leading-[1.38] md:text-[24px]">
            <p>Open to marketing, brand, content and creative roles — developing campaigns, shaping concepts and turning strategy into work people notice.</p>
            <p className="mt-3">Also open to editorial projects across food, hospitality and culture.</p>
            <p className="mt-8">Looking for smart teams, interesting brands and briefs with something to say.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-wind-blue text-wind-white md:min-h-[1020px]" style={{ minHeight: '1020px' }}>
      <div className="relative mx-auto h-full min-h-[1020px] max-w-[1584px] px-5 py-8 md:px-16 md:py-0">
        <p className="absolute left-5 top-8 text-[18px] font-black uppercase tracking-[0.22em] text-wind-white md:left-16 md:top-[58px]"><span>05</span> — Contact</p>

        <h2 className="pt-[92px] text-center font-display text-[clamp(5.8rem,7.55vw,8rem)] font-bold uppercase leading-[0.8] tracking-[-0.055em] text-[#8B0000] md:absolute md:left-[23.3%] md:top-[90px] md:w-[58%] md:pt-0 md:text-left" style={{ textShadow: '6px 6px 0 rgba(143,145,204,0.95)' }}>
          LET&apos;S MAKE<br />SOMETHING.
        </h2>

        <div className="mt-12 md:absolute md:left-16 md:top-[338px] md:mt-0 md:w-[36%]">
          <p className="font-poppins text-[24px] leading-[1.38] md:text-[24px]">Good ideas, interesting people, strange briefs — always worth a conversation.</p>
          <div className="mt-7 border-t-4 border-wind-white pt-7">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.3em]">Email</p>
              <a href={`mailto:${EMAIL}`} className="mt-4 inline-flex items-center gap-3 font-poppins text-[25px] font-bold transition-opacity hover:opacity-60 md:text-[1.7vw]">{EMAIL} <ArrowUpRight className="h-6 w-6" strokeWidth={1.5} /></a>
            </div>
            <div className="mt-9">
              <p className="text-[11px] font-bold uppercase tracking-[0.3em]">Studio</p>
              <p className="mt-4 font-poppins text-[25px] font-bold md:text-[1.8vw]">Berlin. Working internationally.</p>
            </div>
          </div>
        </div>

        <div className="contact-image-wrap mt-12 md:absolute md:right-[4%] md:top-[390px] md:mt-0">
          <div className="absolute left-[60px] -top-[32px] h-full w-[96.6%] bg-[#780606]" />
          <div className="absolute left-[32px] top-[18px] h-full w-[calc(100%+32px)] bg-wind-white" />
          <div className="relative z-10 aspect-[3/2] w-[min(84vw,791px)] overflow-hidden">
            <img src="/images/contact.jpg" alt="Katrina Rose Wind at a live event" className="h-full w-full object-cover object-center" loading="lazy" />
          </div>
        </div>

      </div>
    </footer>
  );
}

function SocialStrip() {
  const socials = [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/krdubz',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/katrina-rose-wind-679a60a5/',
    },
  ];

  return (
    <div className="w-full bg-[#780606] px-5 py-7 md:h-[141px] md:px-6 md:py-0">
        <div className="flex h-full flex-col justify-between md:flex-row md:items-center">
          <div className="order-2 flex items-start gap-8 md:order-1 md:gap-12">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${social.label}`}
                className="group flex w-[112px] flex-col items-center text-center text-white transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#780606]"
              >
                <span aria-hidden="true" className="relative block h-[72px] w-[96px] rounded-[12px] bg-[#35B6F2] shadow-[0_5px_0_#249BD6]">
                  <span className="absolute left-0 top-0 z-10 h-[20px] w-[42px] -translate-y-[1px] rounded-t-[9px] rounded-br-[4px] bg-[#2AA8E7]" />
                  <span className="absolute inset-x-0 bottom-0 h-[58px] rounded-[11px] bg-[#35B6F2]" />
                </span>
                <span className="mt-3 font-poppins text-[18px] font-bold leading-none text-white underline decoration-2 underline-offset-4">{social.label}</span>
              </a>
            ))}
          </div>
          <div className="order-1 text-right font-poppins text-[18px] font-black uppercase leading-[1.05] tracking-[0.02em] text-white md:order-2 md:text-[22px]">
            DESIGNED + CODED BY ME. YES, ALL OF IT. YES, IT WAS HELL.
          </div>
        </div>
      </div>
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
      <style>{`
        @media (pointer: fine) {
          html, body, a, button, [role="button"] {
            cursor: url("/cursor-deoron.png") 13 1, auto !important;
          }
        }

        /* MOBILE RESPONSIVE LAYOUT
           Desktop art direction is preserved above the md breakpoint.
           Narrow screens switch fixed/absolute compositions back into normal flow. */
        @media (max-width: 767px) {
          html, body {
            overflow-x: hidden;
          }

          /* HERO */
          #top h1 {
            white-space: nowrap !important;
            font-size: clamp(5rem, 23vw, 22rem) !important;
          }

          /* ABOUT */
          #about,
          #about > div {
            min-height: auto !important;
          }
          #about > div > div:nth-child(2) {
            position: relative !important;
            left: auto !important;
            top: auto !important;
            width: 100% !important;
            max-width: none !important;
            padding-top: 88px !important;
          }
          #about > div > div:nth-child(2) > div:first-child {
            font-size: clamp(2.8rem, 13vw, 5.55rem) !important;
          }
          #about > div > div:nth-child(2) > div:nth-child(2) {
            max-width: none !important;
            font-size: 18px !important;
            line-height: 1.42 !important;
          }
          #about > div > div:nth-child(3) {
            position: relative !important;
            right: auto !important;
            top: auto !important;
            width: 100% !important;
            margin-top: 48px !important;
          }
          #about > div > div:nth-child(3) > div:first-child {
            right: -16px !important;
            top: -16px !important;
            width: calc(100% - 8px) !important;
            height: 100% !important;
          }
          #about > div > div:nth-child(3) > div:nth-child(2) {
            width: min(100%, 452px) !important;
            height: auto !important;
            aspect-ratio: 452 / 615 !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }

          /* SELECTED WORK */
          #work .folder-filter {
            width: 92px;
            flex-basis: 92px;
          }
          #work .folder-filter-icon {
            width: 88px;
            height: 72px;
          }
          #work .folder-filter-label {
            font-size: 10px;
            letter-spacing: 0.08em;
          }
          #work .project-detail-content {
            min-width: 0;
            overflow-wrap: anywhere;
          }
          #work .project-detail-content img,
          #work .project-detail-content iframe,
          #work .project-detail-content video {
            max-width: 100%;
          }
          #work .deoron-exhibition-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          /* HOW I WORK */
          #capabilities,
          #capabilities > div {
            min-height: auto !important;
          }
          #capabilities > div > div:nth-of-type(3) {
            display: none !important;
          }
          #capabilities > div > div:nth-child(2) h2 span {
            white-space: normal !important;
          }
          #capabilities > div > div:nth-child(2) {
            padding-top: 88px !important;
          }
          #capabilities > div > div:nth-child(2) h2 {
            font-size: clamp(2.8rem, 10.5vw, 4.2rem) !important;
            line-height: 0.86 !important;
          }
          #capabilities > div > p {
            max-width: none !important;
            margin-top: 32px !important;
            font-size: 18px !important;
            line-height: 1.35 !important;
          }
          #capabilities .capability-mobile-grid {
            margin-top: 56px !important;
          }
          #capabilities .capability-mobile-grid h3 {
            white-space: nowrap !important;
            font-size: clamp(2.9rem, 11.5vw, 5rem) !important;
            line-height: 0.82 !important;
            letter-spacing: -0.055em !important;
          }

          /* NOW */
          #now,
          #now > div {
            min-height: auto !important;
          }
          #now > div > div:first-of-type {
            padding-top: 92px !important;
          }
          #now > div > div:first-of-type > div:first-child {
            width: calc(100% - 8px) !important;
            height: auto !important;
            aspect-ratio: 685 / 498 !important;
          }
          #now > div > div:first-of-type > div:nth-child(2) {
            width: calc(100% - 28px) !important;
            height: auto !important;
            aspect-ratio: 667 / 445 !important;
            margin-left: 14px !important;
            margin-top: 28px !important;
          }
          #now > div > div:nth-child(2) {
            max-width: none !important;
            margin-top: 52px !important;
          }
          #now > div > div:nth-child(2) h2 {
            max-width: 100% !important;
          }
          #now > div > div:nth-child(2) h2 span {
            white-space: nowrap !important;
            overflow-wrap: normal !important;
          }
          #now > div > div:nth-child(2) > div {
            max-width: none !important;
            font-size: 19px !important;
            line-height: 1.4 !important;
          }

          /* CONTACT */
          #contact,
          #contact > div {
            min-height: auto !important;
          }
          #contact > div > h2 {
            font-size: clamp(4.7rem, 19vw, 7rem) !important;
          }
          #contact .contact-image-wrap {
            position: relative !important;
            left: auto !important;
            right: auto !important;
            top: auto !important;
            width: 100% !important;
            margin-top: 48px !important;
          }
          #contact .contact-image-wrap > div:first-child {
            left: 24px !important;
            top: -16px !important;
            width: calc(100% - 12px) !important;
            height: 100% !important;
          }
          #contact .contact-image-wrap > div:nth-child(2) {
            left: 12px !important;
            top: 12px !important;
            width: calc(100% - 4px) !important;
            height: 100% !important;
          }
          #contact .contact-image-wrap > div:nth-child(3) {
            width: 100% !important;
            max-width: none !important;
            aspect-ratio: 3 / 2 !important;
          }

          /* LONG EMAILS / LINKS SHOULD NEVER CREATE HORIZONTAL OVERFLOW. */
          a, p, h1, h2, h3, h4, h5, h6, span {
            overflow-wrap: anywhere;
          }
        }
      `}</style>
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
      <SocialStrip />
    </>
  );
}

export default HomePage;
