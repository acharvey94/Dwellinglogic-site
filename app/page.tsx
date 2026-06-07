“use client”;

import { useState, useEffect, useRef, ReactNode } from “react”;

// ─────────────────────────────────────────────────────────────────────────────
// Add this to your app/layout.tsx <head> (or pages/_document.tsx):
//
// <link
//   href=“https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap”
//   rel=“stylesheet”
// />
//
// And add this to your globals.css (do NOT use an inline <style> tag in TSX):
// (see the globals.css block at the bottom of this file)
// ─────────────────────────────────────────────────────────────────────────────

// ── Types ────────────────────────────────────────────────────────────────────

interface Stat {
value: string;
label: string;
}

interface TemplateSection {
icon: string;
title: string;
desc: string;
}

interface Step {
num: string;
title: string;
body: string;
}

interface Audience {
emoji: string;
label: string;
}

interface BenefitCard {
icon: string;
title: string;
body: string;
source: string;
}

interface BeforeAfterRow {
before: string;
after: string;
}

interface TrustBadge {
icon: string;
label: string;
}

interface FadeInProps {
children: ReactNode;
delay?: number;
className?: string;
}

// ── Data ─────────────────────────────────────────────────────────────────────

const stats: Stat[] = [
{ value: “10–15%”, label: “Savings on heating & cooling from a smart thermostat alone” },
{ value: “25%”, label: “Reduction in total household energy use with a full smart system” },
{ value: “87%”, label: “Of smart security users report genuine peace of mind” },
{ value: “83%”, label: “Of convicted burglars say they avoid homes with visible security” },
];

const templateSections: TemplateSection[] = [
{
icon: “◈”,
title: “Room-by-Room Device Planner”,
desc: “Map every room in your home to the devices that actually make sense for it — not just what a sales page recommends.”,
},
{
icon: “◉”,
title: “Ecosystem Compatibility Checker”,
desc: “Before you buy anything, confirm it plays nicely with what you already own. No more stranded devices.”,
},
{
icon: “◇”,
title: “Priority & Budget Framework”,
desc: “Rank your goals (comfort, security, energy, convenience) and build a phased plan you can actually afford.”,
},
{
icon: “◎”,
title: “Common Mistakes Checklist”,
desc: “A curated list of the mistakes real homeowners make — so you can skip the expensive lessons entirely.”,
},
{
icon: “◐”,
title: “Questions to Ask Before You Buy”,
desc: “Know the right things to ask about hubs, subscriptions, data privacy, and long-term support.”,
},
{
icon: “◫”,
title: “Installation Readiness Audit”,
desc: “Find out what your home needs before installation day — Wi-Fi coverage, wiring quirks, and more.”,
},
];

const steps: Step[] = [
{
num: “01”,
title: “Download the Template”,
body: “Get the Dwelling Logic Planning Template — a single, structured document built for real homeowners.”,
},
{
num: “02”,
title: “Walk Through Your Home”,
body: “Use the room-by-room planner to map your actual needs to real devices. No guessing, no pressure.”,
},
{
num: “03”,
title: “Build Your Phase Plan”,
body: “Prioritize by impact and budget. Most people start with 1–2 high-value upgrades, not a whole-home overhaul.”,
},
{
num: “04”,
title: “Buy with Confidence”,
body: “Shop knowing your devices will work together, fit your home, and serve your goals for years to come.”,
},
];

const audiences: Audience[] = [
{ emoji: “🏡”, label: “First-time homeowners who want to start smart” },
{ emoji: “🔧”, label: “DIYers tired of watching YouTube rabbit holes” },
{ emoji: “💡”, label: “Energy-conscious homeowners looking to cut bills” },
{ emoji: “🔐”, label: “Families prioritizing security and peace of mind” },
{ emoji: “📈”, label: “Sellers or investors looking to increase home value” },
{ emoji: “🧩”, label: “Anyone with devices that don’t talk to each other” },
];

const benefitCards: BenefitCard[] = [
{
icon: “⚡”,
title: “Energy & Cost”,
body: “A smart thermostat typically cuts heating and cooling costs by 10–15%. Expand to smart lighting, plugs, and appliance controls and that figure can reach 15–25% of your total household energy bill. For the average home, that is real money back every year.”,
source: “U.S. DOE & ACEEE research”,
},
{
icon: “🔐”,
title: “Security & Safety”,
body: “87% of smart security users report increased peace of mind — and it is not just psychological. Research on burglary patterns shows 83% of offenders actively avoid homes with visible security systems. Smart locks, cameras, and motion alerts create a genuine deterrent.”,
source: “University of North Carolina study”,
},
{
icon: “📈”,
title: “Home Value”,
body: “Smart features are increasingly factored into home valuations. Homes with smart security systems have shown a 3–7% premium in some market analyses, and they tend to sell faster. With 77% of millennials willing to pay more for smart features, this trend is not reversing.”,
source: “NAR & Consumer Technology Association data”,
},
];

const beforeAfterRows: BeforeAfterRow[] = [
{ before: “Hours of scattered research”, after: “One structured planning document” },
{ before: “Buying devices one by one”, after: “A phased plan that builds coherently” },
{ before: “Realizing devices do not work together”, after: “Compatibility checked before purchase” },
{ before: “Regret and restart costs”, after: “Confidence in every decision” },
];

const trustBadges: TrustBadge[] = [
{ icon: “◈”, label: “Free to download” },
{ icon: “◉”, label: “No account required” },
{ icon: “◇”, label: “Vendor-neutral guidance” },
];

const problemCards = [
{
num: “01”,
title: “Information Overload”,
body: “YouTube videos. Reddit threads. Manufacturer websites. Brand-sponsored best-of lists. There is more content about smart homes than ever — and most of it is selling something. Separating signal from noise without a framework is genuinely exhausting.”,
},
{
num: “02”,
title: “Compatibility Confusion”,
body: “You buy a thermostat. Then a lock. Then a camera. Then you discover none of them share an app, two require separate hubs, and one does not support the voice assistant you use. Ecosystem fragmentation is the number one source of buyer regret in smart home purchases.”,
},
{
num: “03”,
title: “Decision Paralysis”,
body: “With dozens of options at every price point, many homeowners end up doing nothing — or buying impulsively. Neither outcome serves you. Planning requires a structure that forces decisions in the right order, at the right scope.”,
},
];

// ── useInView hook ────────────────────────────────────────────────────────────

function useInView(threshold = 0.15): [React.RefObject<HTMLDivElement | null>, boolean] {
const ref = useRef<HTMLDivElement>(null);
const [visible, setVisible] = useState<boolean>(false);

useEffect(() => {
const el = ref.current;
if (!el) return;

```
const obs = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      setVisible(true);
      obs.disconnect();
    }
  },
  { threshold }
);

obs.observe(el);
return () => obs.disconnect();
```

}, [threshold]);

return [ref, visible];
}

// ── FadeIn wrapper ────────────────────────────────────────────────────────────

function FadeIn({ children, delay = 0, className = “” }: FadeInProps) {
const [ref, visible] = useInView();

return (
<div
ref={ref}
className={className}
style={{
opacity: visible ? 1 : 0,
transform: visible ? “translateY(0)” : “translateY(24px)”,
transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
}}
>
{children}
</div>
);
}

// ── Page component ────────────────────────────────────────────────────────────

export default function DwellingLogicLanding() {
const [email, setEmail] = useState<string>(””);
const [submitted, setSubmitted] = useState<boolean>(false);

function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
e.preventDefault();
if (email.trim()) setSubmitted(true);
}

return (
<div className="dl-root">

```
  {/* ── NAV ─────────────────────────────────────────────── */}
  <nav className="dl-nav">
    <div className="dl-nav-inner">
      <div className="dl-logo">
        <span className="dl-logo-serif">Dwelling</span>
        <span className="dl-logo-light">Logic</span>
      </div>
      <div className="dl-nav-links">
        <a href="#benefits" className="dl-nav-link">Why Smart Homes</a>
        <a href="#template" className="dl-nav-link">The Template</a>
        <a href="#how-it-works" className="dl-nav-link">How It Works</a>
        <a href="#cta" className="dl-btn-primary dl-btn-sm">Get the Template</a>
      </div>
    </div>
  </nav>

  {/* ── HERO ────────────────────────────────────────────── */}
  <section className="dl-hero">
    <div className="dl-container">
      <div className="dl-hero-grid">

        {/* Left */}
        <div className="dl-hero-text">
          <span className="dl-section-label dl-anim-1">Smart Home Planning</span>
          <h1 className="dl-hero-h1 dl-anim-2">
            Build a smarter home{" "}
            <em className="dl-serif-italic dl-sage">without the guesswork.</em>
          </h1>
          <p className="dl-hero-body dl-anim-3">
            Most homeowners do not lack enthusiasm for smart home technology — they lack
            a clear starting point. Dwelling Logic gives you the education, tools, and
            structured plan to make decisions you will feel confident about for years.
          </p>
          <div className="dl-hero-cta dl-anim-4">
            <a href="#cta" className="dl-btn-primary">Get the Free Template</a>
            <a href="#benefits" className="dl-btn-outline">See Why It Matters</a>
          </div>
          <p className="dl-hero-footnote dl-anim-5">Free to download. No account required.</p>
        </div>

        {/* Right card */}
        <div className="dl-hero-card dl-anim-3">
          <div className="dl-ornament">◈</div>
          <p className="dl-hero-card-quote">
            &ldquo;I spent six months researching and still ended up with three devices that
            do not talk to each other.&rdquo;
          </p>
          <p className="dl-hero-card-body">
            This is the most common story we hear. Not a lack of effort — a lack of a
            structured process. Dwelling Logic gives you that process.
          </p>
          <div className="dl-hero-card-checks">
            {[
              "Avoid compatibility dead ends",
              "Build a phased, budget-aware plan",
              "Understand your options before you buy",
            ].map((item) => (
              <div key={item} className="dl-check-row">
                <span className="dl-check-icon">✓</span>
                <span className="dl-check-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* ── WHY SMART HOMES MATTER ──────────────────────────── */}
  <section id="benefits" className="dl-section dl-bg-warm-white">
    <div className="dl-container">
      <FadeIn>
        <div className="dl-section-header">
          <span className="dl-section-label">Why It Matters</span>
          <h2 className="dl-section-h2">
            Smart homes are not a luxury.{" "}
            <em className="dl-serif-italic dl-sage">They are a compounding investment.</em>
          </h2>
          <p className="dl-section-intro">
            The real case for smart home technology is not about novelty or convenience —
            it is about measurable improvements to your comfort, safety, finances, and peace
            of mind. Here is what the research actually shows.
          </p>
        </div>
      </FadeIn>

      {/* Stat cards */}
      <div className="dl-stats-grid">
        {stats.map((s, i) => (
          <FadeIn key={s.value} delay={i * 0.1}>
            <div className="dl-stat-card">
              <div className="dl-stat-value">{s.value}</div>
              <p className="dl-stat-label">{s.label}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Benefit columns */}
      <div className="dl-benefits-grid">
        {benefitCards.map((card, i) => (
          <FadeIn key={card.title} delay={i * 0.1}>
            <div className="dl-benefit-col">
              <div className="dl-benefit-icon">{card.icon}</div>
              <h3 className="dl-benefit-title">{card.title}</h3>
              <p className="dl-benefit-body">{card.body}</p>
              <p className="dl-benefit-source">Source: {card.source}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>

  {/* ── THE PROBLEM ─────────────────────────────────────── */}
  <section id="problem" className="dl-section dl-bg-dark">
    <div className="dl-container">
      <FadeIn>
        <div className="dl-section-header">
          <span className="dl-section-label dl-sage-mid">The Problem</span>
          <h2 className="dl-section-h2 dl-cream">
            Why most smart home projects{" "}
            <em className="dl-serif-italic dl-sage-mid">go sideways.</em>
          </h2>
          <p className="dl-section-intro dl-cream-muted">
            It is not the technology that fails homeowners. It is the lack of a clear,
            structured approach before a single device is purchased.
          </p>
        </div>
      </FadeIn>

      <div className="dl-problem-grid">
        {problemCards.map((p, i) => (
          <FadeIn key={p.num} delay={i * 0.12}>
            <div className="dl-problem-card">
              <div className="dl-problem-num">{p.num}</div>
              <h3 className="dl-problem-title">{p.title}</h3>
              <p className="dl-problem-body">{p.body}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>

  {/* ── A BETTER WAY ────────────────────────────────────── */}
  <section id="approach" className="dl-section dl-bg-sage-light">
    <div className="dl-container">
      <div className="dl-better-grid">
        <FadeIn>
          <span className="dl-section-label">A Better Way</span>
          <h2 className="dl-section-h2 dl-left">
            Plan first.{" "}
            <em className="dl-serif-italic dl-sage">Buy with clarity.</em>
          </h2>
          <p className="dl-better-body">
            Dwelling Logic is not a product review site. We are not affiliated with
            manufacturers, and we do not earn commissions on what you buy. Our purpose is
            simpler: to give you a clear-headed, structured approach to planning a smart
            home that fits your home, your priorities, and your budget.
          </p>
          <p className="dl-better-body">
            We believe most homeowners do not need more information — they need a better
            decision-making framework. That is what we have built.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="dl-ba-list">
            {beforeAfterRows.map((row) => (
              <div key={row.before} className="dl-ba-row">
                <span className="dl-ba-before">{row.before}</span>
                <span className="dl-ba-arrow">→</span>
                <span className="dl-ba-after">{row.after}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  </section>

  {/* ── THE TEMPLATE ────────────────────────────────────── */}
  <section id="template" className="dl-section dl-bg-cream">
    <div className="dl-container">
      <FadeIn>
        <div className="dl-section-header">
          <span className="dl-section-label">The Tool</span>
          <h2 className="dl-section-h2">
            The Dwelling Logic{" "}
            <em className="dl-serif-italic dl-sage">Planning Template</em>
          </h2>
          <p className="dl-section-intro">
            Not a checklist. Not a spec sheet. A working planning document that takes you
            from &ldquo;I want a smarter home&rdquo; to a clear, phased action plan —
            before you spend a dollar.
          </p>
        </div>
      </FadeIn>

      <div id="get" className="dl-template-grid">
        {templateSections.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.08}>
            <div className="dl-template-card">
              <div className="dl-template-icon">{item.icon}</div>
              <h3 className="dl-template-title">{item.title}</h3>
              <p className="dl-template-desc">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.2}>
        <div className="dl-callout">
          <p className="dl-callout-text">
            <strong>This template was designed for real homes, not showrooms.</strong>{" "}
            It reflects the actual decisions homeowners face — from choosing a hub ecosystem
            in a 1,200 sq ft condo to planning a full integration in a multi-story house
            with an older electrical panel.
          </p>
        </div>
      </FadeIn>
    </div>
  </section>

  {/* ── HOW IT WORKS ────────────────────────────────────── */}
  <section id="how-it-works" className="dl-section dl-bg-warm-white">
    <div className="dl-container">
      <FadeIn>
        <div className="dl-section-header">
          <span className="dl-section-label">How It Works</span>
          <h2 className="dl-section-h2">
            Four steps from{" "}
            <em className="dl-serif-italic dl-sage">confused to confident.</em>
          </h2>
          <p className="dl-section-intro">
            The process is intentionally simple. Most homeowners complete the core
            planning work in a single afternoon.
          </p>
        </div>
      </FadeIn>

      <div className="dl-steps-grid">
        {steps.map((step, i) => (
          <FadeIn key={step.num} delay={i * 0.1}>
            <div className="dl-step">
              {i < steps.length - 1 && <div className="dl-step-line" />}
              <div className="dl-step-num">{step.num}</div>
              <h3 className="dl-step-title">{step.title}</h3>
              <p className="dl-step-body">{step.body}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>

  {/* ── WHO THIS IS FOR ─────────────────────────────────── */}
  <section id="for-who" className="dl-section dl-bg-cream">
    <div className="dl-container">
      <FadeIn>
        <div className="dl-section-header">
          <span className="dl-section-label">Who This Is For</span>
          <h2 className="dl-section-h2">
            Built for motivated homeowners,{" "}
            <em className="dl-serif-italic dl-sage">not tech insiders.</em>
          </h2>
          <p className="dl-section-intro">
            You do not need to know what Zigbee is or understand how mesh networking works.
            You just need to care about your home — and want to make smart decisions in it.
          </p>
        </div>
      </FadeIn>

      <div className="dl-audience-grid">
        {audiences.map((a, i) => (
          <FadeIn key={a.label} delay={i * 0.08}>
            <div className="dl-audience-card">
              <span className="dl-audience-emoji">{a.emoji}</span>
              <span className="dl-audience-label">{a.label}</span>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.2}>
        <p className="dl-audience-footnote">
          If you have ever felt overwhelmed by smart home options, this was made for you.
        </p>
      </FadeIn>
    </div>
  </section>

  {/* ── FINAL CTA ───────────────────────────────────────── */}
  <section id="cta" className="dl-section dl-bg-warm-white">
    <div className="dl-cta-inner">
      <FadeIn>
        <div className="dl-divider" />
        <span className="dl-section-label">Get Started</span>
        <h2 className="dl-cta-h2">
          Start planning your smarter home{" "}
          <em className="dl-serif-italic dl-sage">today.</em>
        </h2>
        <p className="dl-cta-body">
          Download the free Dwelling Logic Planning Template and stop wondering where to
          start. Thousands of homeowners have used a structured planning process to avoid
          the mistakes that make smart home projects expensive and frustrating.
        </p>

        {submitted ? (
          <div className="dl-success">
            <p className="dl-success-text">
              ✓ You&apos;re on the list. Check your inbox for the template.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="dl-cta-form">
            <input
              className="dl-email-input"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              required
            />
            <button type="submit" className="dl-btn-primary dl-btn-submit">
              Get the Free Template
            </button>
          </form>
        )}

        <p className="dl-cta-footnote">Free. No spam. Unsubscribe anytime.</p>

        <div className="dl-trust-row">
          {trustBadges.map((t) => (
            <div key={t.label} className="dl-trust-badge">
              <div className="dl-trust-icon">{t.icon}</div>
              <p className="dl-trust-label">{t.label}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  </section>

  {/* ── FOOTER ──────────────────────────────────────────── */}
  <footer className="dl-footer">
    <div className="dl-footer-inner">
      <div className="dl-logo">
        <span className="dl-logo-serif">Dwelling</span>
        <span className="dl-logo-light">Logic</span>
      </div>
      <p className="dl-footer-copy">
        &copy; {new Date().getFullYear()} Dwelling Logic. Helping homeowners build smarter.
      </p>
      <div className="dl-footer-links">
        {["Privacy", "Contact"].map((l) => (
          <a key={l} href="#" className="dl-nav-link dl-footer-link">
            {l}
          </a>
        ))}
      </div>
    </div>
  </footer>
</div>
```

);
}

/*
════════════════════════════════════════════════════════════════════════════════
GLOBALS.CSS — copy this into your globals.css (or a dwelling-logic.css file
imported in layout.tsx). Do NOT paste this inside a <style> tag in a TSX
component — that causes SSR hydration mismatches on Vercel.
════════════════════════════════════════════════════════════════════════════════

@import url(‘https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap’);

:root {
–dl-cream: #F7F4EF;
–dl-warm-white: #FDFBF8;
–dl-ink: #1C1C1A;
–dl-ink-muted: #5A574F;
–dl-ink-light: #9A968E;
–dl-sage: #5C7A60;
–dl-sage-light: #EAF0EA;
–dl-sage-mid: #7A9E7E;
–dl-gold: #B08D57;
–dl-border: #E0DCD4;
–dl-dark: #1C1C1A;
}

- { box-sizing: border-box; margin: 0; padding: 0; }

.dl-root {
font-family: ‘DM Sans’, sans-serif;
background-color: var(–dl-cream);
color: var(–dl-ink);
overflow-x: hidden;
}

/* ── Typography helpers ── */
.dl-serif        { font-family: ‘Playfair Display’, Georgia, serif; }
.dl-serif-italic { font-family: ‘Playfair Display’, Georgia, serif; font-style: italic; }
.dl-sage         { color: var(–dl-sage); }
.dl-sage-mid     { color: var(–dl-sage-mid); }
.dl-cream        { color: var(–dl-cream); }
.dl-cream-muted  { color: rgba(247,244,239,0.6); }
.dl-left         { text-align: left !important; }

/* ── Backgrounds ── */
.dl-bg-cream      { background: var(–dl-cream); }
.dl-bg-warm-white { background: var(–dl-warm-white); }
.dl-bg-sage-light { background: var(–dl-sage-light); }
.dl-bg-dark       { background: linear-gradient(135deg, #2C2C28 0%, #1C1C1A 100%); }

/* ── Nav ── */
.dl-nav {
position: sticky; top: 0; z-index: 100;
background: rgba(247,244,239,0.92);
backdrop-filter: blur(12px);
border-bottom: 1px solid var(–dl-border);
padding: 0 32px;
}
.dl-nav-inner {
max-width: 1080px; margin: 0 auto;
display: flex; align-items: center;
justify-content: space-between; height: 64px;
}
.dl-nav-links { display: flex; gap: 32px; align-items: center; }
.dl-nav-link {
font-size: 0.85rem; font-weight: 500;
letter-spacing: 0.04em; color: var(–dl-ink-muted);
text-decoration: none; transition: color 0.2s;
}
.dl-nav-link:hover { color: var(–dl-sage); }
.dl-footer-link { font-size: 0.78rem; }

/* ── Logo ── */
.dl-logo { display: flex; align-items: baseline; gap: 8px; }
.dl-logo-serif {
font-family: ‘Playfair Display’, Georgia, serif;
font-size: 1.25rem; font-weight: 600; color: var(–dl-ink);
}
.dl-logo-light { font-size: 1.25rem; font-weight: 300; color: var(–dl-sage); }

/* ── Buttons ── */
.dl-btn-primary {
display: inline-block;
background: var(–dl-sage); color: #fff;
padding: 14px 32px; border-radius: 4px;
font-size: 0.95rem; font-weight: 500;
letter-spacing: 0.03em; text-decoration: none;
border: none; cursor: pointer; white-space: nowrap;
transition: background 0.2s, transform 0.15s;
font-family: ‘DM Sans’, sans-serif;
}
.dl-btn-primary:hover { background: #4a6650; transform: translateY(-1px); }
.dl-btn-sm { padding: 9px 20px !important; font-size: 0.85rem !important; }

.dl-btn-outline {
display: inline-block;
background: transparent; color: var(–dl-sage);
padding: 13px 30px; border-radius: 4px;
font-size: 0.95rem; font-weight: 500;
letter-spacing: 0.03em; text-decoration: none;
border: 1.5px solid var(–dl-sage); cursor: pointer;
transition: background 0.2s, color 0.2s;
font-family: ‘DM Sans’, sans-serif;
}
.dl-btn-outline:hover { background: var(–dl-sage); color: #fff; }

/* ── Section chrome ── */
.dl-section { padding: 96px 32px; border-bottom: 1px solid var(–dl-border); }
.dl-container { max-width: 1080px; margin: 0 auto; }
.dl-section-label {
display: block;
font-size: 0.72rem; font-weight: 500;
letter-spacing: 0.15em; text-transform: uppercase;
color: var(–dl-sage);
}
.dl-section-header { text-align: center; margin-bottom: 56px; }
.dl-section-h2 {
font-family: ‘Playfair Display’, Georgia, serif;
font-size: clamp(1.8rem, 3vw, 2.6rem);
font-weight: 600; margin-top: 16px; margin-bottom: 16px;
line-height: 1.2; text-align: center;
}
.dl-section-intro {
max-width: 580px; margin: 0 auto;
font-size: 1rem; line-height: 1.75;
color: var(–dl-ink-muted); font-weight: 300;
}
.dl-ornament { color: var(–dl-gold); font-size: 1.2rem; margin-bottom: 12px; }
.dl-divider {
width: 48px; height: 2px;
background: var(–dl-gold); margin: 0 auto 32px;
}

/* ── Hero ── */
.dl-hero {
padding: 96px 32px 80px;
border-bottom: 1px solid var(–dl-border);
background:
radial-gradient(ellipse at 80% 20%, rgba(92,122,96,0.08) 0%, transparent 60%),
radial-gradient(ellipse at 10% 80%, rgba(176,141,87,0.06) 0%, transparent 50%),
var(–dl-cream);
}
.dl-hero-grid {
display: grid; grid-template-columns: 1fr 420px;
gap: 64px; align-items: center;
}
.dl-hero-h1 {
font-family: ‘Playfair Display’, Georgia, serif;
font-size: clamp(2.4rem, 4.5vw, 3.6rem);
line-height: 1.15; font-weight: 600;
margin-top: 20px; margin-bottom: 24px;
}
.dl-hero-body {
font-size: 1.1rem; line-height: 1.75;
color: var(–dl-ink-muted); font-weight: 300;
max-width: 520px; margin-bottom: 36px;
}
.dl-hero-cta { display: flex; gap: 16px; flex-wrap: wrap; }
.dl-hero-footnote { margin-top: 20px; font-size: 0.8rem; color: var(–dl-ink-light); }

.dl-hero-card {
background: var(–dl-warm-white);
border: 1px solid var(–dl-border); border-radius: 8px;
padding: 36px;
box-shadow: 0 8px 40px rgba(28,28,26,0.07);
}
.dl-hero-card-quote {
font-family: ‘Playfair Display’, Georgia, serif;
font-size: 1.1rem; font-weight: 600;
margin-bottom: 24px; line-height: 1.4;
}
.dl-hero-card-body {
font-size: 0.85rem; color: var(–dl-ink-muted);
margin-bottom: 28px; line-height: 1.65;
}
.dl-hero-card-checks {
border-top: 1px solid var(–dl-border); padding-top: 20px;
}
.dl-check-row {
display: flex; gap: 10px;
align-items: flex-start; margin-bottom: 10px;
}
.dl-check-icon { color: var(–dl-sage); font-weight: 500; margin-top: 1px; }
.dl-check-text { font-size: 0.88rem; color: var(–dl-ink-muted); }

/* Hero entrance animations */
@keyframes dl-fadeUp {
from { opacity: 0; transform: translateY(20px); }
to   { opacity: 1; transform: translateY(0); }
}
.dl-anim-1 { opacity: 0; animation: dl-fadeUp 0.6s ease 0.1s forwards; }
.dl-anim-2 { opacity: 0; animation: dl-fadeUp 0.6s ease 0.2s forwards; }
.dl-anim-3 { opacity: 0; animation: dl-fadeUp 0.6s ease 0.3s forwards; }
.dl-anim-4 { opacity: 0; animation: dl-fadeUp 0.6s ease 0.4s forwards; }
.dl-anim-5 { opacity: 0; animation: dl-fadeUp 0.6s ease 0.5s forwards; }

/* ── Stats ── */
.dl-stats-grid {
display: grid; grid-template-columns: repeat(4, 1fr);
gap: 20px; margin-bottom: 64px;
}
.dl-stat-card {
background: var(–dl-warm-white);
border: 1px solid var(–dl-border);
border-top: 3px solid var(–dl-sage);
border-radius: 6px; padding: 28px 24px;
}
.dl-stat-value {
font-family: ‘Playfair Display’, Georgia, serif;
font-size: 2.4rem; font-weight: 600;
color: var(–dl-sage); margin-bottom: 10px; line-height: 1;
}
.dl-stat-label { font-size: 0.85rem; line-height: 1.6; color: var(–dl-ink-muted); }

/* ── Benefits ── */
.dl-benefits-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 32px; }
.dl-benefit-col { padding: 28px 0; border-top: 2px solid var(–dl-border); }
.dl-benefit-icon { font-size: 1.6rem; margin-bottom: 14px; }
.dl-benefit-title {
font-family: ‘Playfair Display’, Georgia, serif;
font-size: 1.2rem; font-weight: 600; margin-bottom: 10px;
}
.dl-benefit-body  { font-size: 0.88rem; line-height: 1.75; color: var(–dl-ink-muted); margin-bottom: 12px; }
.dl-benefit-source { font-size: 0.75rem; color: var(–dl-ink-light); font-style: italic; }

/* ── Problem ── */
.dl-problem-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 2px; }
.dl-problem-card {
background: rgba(255,255,255,0.04);
border: 1px solid rgba(255,255,255,0.08);
padding: 36px 32px; border-radius: 2px;
}
.dl-problem-num {
font-size: 0.72rem; font-weight: 500;
letter-spacing: 0.12em; color: var(–dl-sage-mid); margin-bottom: 16px;
}
.dl-problem-title {
font-family: ‘Playfair Display’, Georgia, serif;
font-size: 1.2rem; color: #F7F4EF; margin-bottom: 14px; font-weight: 600;
}
.dl-problem-body { font-size: 0.88rem; line-height: 1.75; color: rgba(247,244,239,0.55); }

/* ── Better way ── */
.dl-better-grid {
display: grid; grid-template-columns: 1fr 1fr;
gap: 80px; align-items: center;
}
.dl-better-body {
font-size: 1rem; line-height: 1.8;
color: var(–dl-ink-muted); font-weight: 300; margin-bottom: 20px;
}
.dl-ba-list { display: flex; flex-direction: column; gap: 16px; }
.dl-ba-row {
display: grid; grid-template-columns: 1fr 32px 1fr;
gap: 8px; align-items: center;
background: var(–dl-warm-white);
border: 1px solid var(–dl-border);
border-radius: 6px; padding: 16px 20px;
}
.dl-ba-before { font-size: 0.84rem; color: var(–dl-ink-light); text-decoration: line-through; }
.dl-ba-arrow  { text-align: center; color: var(–dl-sage); font-weight: 500; }
.dl-ba-after  { font-size: 0.84rem; color: var(–dl-ink); font-weight: 500; }

/* ── Template ── */
.dl-template-grid {
display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;
}
.dl-template-card {
background: var(–dl-warm-white);
border: 1px solid var(–dl-border);
border-radius: 6px; padding: 28px;
transition: border-color 0.2s, box-shadow 0.2s;
}
.dl-template-card:hover {
border-color: var(–dl-sage-mid);
box-shadow: 0 4px 20px rgba(92,122,96,0.1);
}
.dl-template-icon  { font-size: 1.4rem; color: var(–dl-sage); margin-bottom: 14px; }
.dl-template-title { font-size: 0.95rem; font-weight: 500; margin-bottom: 10px; }
.dl-template-desc  { font-size: 0.85rem; line-height: 1.7; color: var(–dl-ink-muted); }

.dl-callout {
margin-top: 48px;
background: var(–dl-warm-white);
border: 1px solid var(–dl-border);
border-left: 4px solid var(–dl-gold);
border-radius: 0 6px 6px 0;
padding: 24px 28px;
max-width: 720px; margin-left: auto; margin-right: auto;
margin-top: 48px;
}
.dl-callout-text { font-size: 0.9rem; line-height: 1.75; color: var(–dl-ink-muted); }

/* ── Steps ── */
.dl-steps-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.dl-step { position: relative; }
.dl-step-line {
position: absolute; top: 28px;
left: calc(50% + 28px); right: calc(-50% + 28px);
height: 1px; background: var(–dl-border);
}
.dl-step-num {
width: 48px; height: 48px; border-radius: 50%;
background: var(–dl-sage); color: #fff;
display: flex; align-items: center; justify-content: center;
font-size: 0.78rem; font-weight: 500; letter-spacing: 0.05em;
margin-bottom: 20px; position: relative; z-index: 1;
}
.dl-step-title { font-size: 0.95rem; font-weight: 500; margin-bottom: 10px; }
.dl-step-body  { font-size: 0.85rem; line-height: 1.7; color: var(–dl-ink-muted); }

/* ── Audience ── */
.dl-audience-grid {
display: grid; grid-template-columns: repeat(3, 1fr);
gap: 16px; max-width: 720px; margin: 0 auto;
}
.dl-audience-card {
display: flex; gap: 14px; align-items: flex-start;
background: var(–dl-warm-white);
border: 1px solid var(–dl-border);
border-radius: 6px; padding: 18px 20px;
}
.dl-audience-emoji { font-size: 1.2rem; }
.dl-audience-label { font-size: 0.86rem; line-height: 1.5; color: var(–dl-ink-muted); }
.dl-audience-footnote {
text-align: center; margin-top: 40px;
font-size: 0.88rem; color: var(–dl-ink-light); font-style: italic;
}

/* ── CTA ── */
.dl-cta-inner { max-width: 620px; margin: 0 auto; text-align: center; }
.dl-cta-h2 {
font-family: ‘Playfair Display’, Georgia, serif;
font-size: clamp(1.8rem, 3vw, 2.6rem);
font-weight: 600; margin-top: 16px; margin-bottom: 20px;
}
.dl-cta-body {
font-size: 1rem; line-height: 1.8;
color: var(–dl-ink-muted); font-weight: 300; margin-bottom: 36px;
}
.dl-cta-form {
display: flex; justify-content: center;
gap: 0; flex-wrap: wrap; margin-bottom: 16px;
}
.dl-email-input {
border: 1.5px solid var(–dl-border);
border-right: none;
border-radius: 4px 0 0 4px;
padding: 14px 18px; font-size: 0.95rem;
font-family: ‘DM Sans’, sans-serif;
background: #fff; color: var(–dl-ink);
outline: none; width: 100%; max-width: 280px;
transition: border-color 0.2s;
}
.dl-email-input:focus { border-color: var(–dl-sage); }
.dl-email-input::placeholder { color: var(–dl-ink-light); }
.dl-btn-submit { border-radius: 0 4px 4px 0 !important; }
.dl-cta-footnote { font-size: 0.78rem; color: var(–dl-ink-light); }

.dl-success {
background: var(–dl-sage-light);
border: 1px solid var(–dl-sage-mid);
border-radius: 6px; padding: 24px 32px; margin-bottom: 24px;
}
.dl-success-text { font-size: 1rem; font-weight: 500; color: var(–dl-sage); }

.dl-trust-row {
margin-top: 48px; padding-top: 40px;
border-top: 1px solid var(–dl-border);
display: flex; justify-content: center; gap: 40px; flex-wrap: wrap;
}
.dl-trust-badge { text-align: center; }
.dl-trust-icon  { color: var(–dl-sage); font-size: 1rem; margin-bottom: 6px; }
.dl-trust-label { font-size: 0.8rem; color: var(–dl-ink-muted); }

/* ── Footer ── */
.dl-footer {
border-top: 1px solid var(–dl-border);
padding: 32px; background: var(–dl-cream);
}
.dl-footer-inner {
max-width: 1080px; margin: 0 auto;
display: flex; justify-content: space-between;
align-items: center; flex-wrap: wrap; gap: 16px;
}
.dl-footer-copy { font-size: 0.78rem; color: var(–dl-ink-light); }
.dl-footer-links { display: flex; gap: 24px; }

/* ── Responsive ── */
@media (max-width: 900px) {
.dl-hero-grid       { grid-template-columns: 1fr; }
.dl-better-grid     { grid-template-columns: 1fr; gap: 40px; }
.dl-stats-grid      { grid-template-columns: 1fr 1fr; }
.dl-benefits-grid   { grid-template-columns: 1fr; }
.dl-problem-grid    { grid-template-columns: 1fr; }
.dl-template-grid   { grid-template-columns: 1fr 1fr; }
.dl-steps-grid      { grid-template-columns: 1fr 1fr; }
.dl-step-line       { display: none; }
}
@media (max-width: 560px) {
.dl-nav-links       { display: none; }
.dl-stats-grid      { grid-template-columns: 1fr; }
.dl-template-grid   { grid-template-columns: 1fr; }
.dl-steps-grid      { grid-template-columns: 1fr; }
.dl-audience-grid   { grid-template-columns: 1fr; }
.dl-cta-form        { flex-direction: column; align-items: center; }
.dl-email-input     { border-right: 1.5px solid var(–dl-border); border-radius: 4px; max-width: 100%; border-bottom: none; }
.dl-btn-submit      { border-radius: 4px !important; width: 100%; max-width: 300px; }
}

*/
