import { useState, useEffect, useRef } from “react”;

// ─── Fonts loaded via Google Fonts (add to your _document.js or layout.js) ───
// <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />

const stats = [
{ value: “10–15%”, label: “Savings on heating & cooling from a smart thermostat alone” },
{ value: “25%”, label: “Reduction in total household energy use with a full smart system” },
{ value: “87%”, label: “Of smart security users report genuine peace of mind” },
{ value: “83%”, label: “Of convicted burglars say they avoid homes with visible security” },
];

const templateSections = [
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

const steps = [
{ num: “01”, title: “Download the Template”, body: “Get the Dwelling Logic Planning Template — a single, structured document built for real homeowners.” },
{ num: “02”, title: “Walk Through Your Home”, body: “Use the room-by-room planner to map your actual needs to real devices. No guessing, no pressure.” },
{ num: “03”, title: “Build Your Phase Plan”, body: “Prioritize by impact and budget. Most people start with 1–2 high-value upgrades, not a whole-home overhaul.” },
{ num: “04”, title: “Buy with Confidence”, body: “Shop knowing your devices will work together, fit your home, and serve your goals for years to come.” },
];

const audiences = [
{ emoji: “🏡”, label: “First-time homeowners who want to start smart” },
{ emoji: “🔧”, label: “DIYers tired of watching YouTube rabbit holes” },
{ emoji: “💡”, label: “Energy-conscious homeowners looking to cut bills” },
{ emoji: “🔐”, label: “Families prioritizing security and peace of mind” },
{ emoji: “📈”, label: “Sellers or investors looking to increase home value” },
{ emoji: “🧩”, label: “Anyone with devices that don’t talk to each other” },
];

function useInView(threshold = 0.15) {
const ref = useRef(null);
const [visible, setVisible] = useState(false);
useEffect(() => {
const obs = new IntersectionObserver(
([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
{ threshold }
);
if (ref.current) obs.observe(ref.current);
return () => obs.disconnect();
}, []);
return [ref, visible];
}

function FadeIn({ children, delay = 0, className = “” }) {
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

export default function DwellingLogicLanding() {
const [email, setEmail] = useState(””);
const [submitted, setSubmitted] = useState(false);

const handleSubmit = (e) => {
e.preventDefault();
if (email) setSubmitted(true);
};

return (
<div
style={{
fontFamily: “‘DM Sans’, sans-serif”,
backgroundColor: “#F7F4EF”,
color: “#1C1C1A”,
overflowX: “hidden”,
}}
>
<style>{`
@import url(‘https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap’);

```
    * { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --cream: #F7F4EF;
      --warm-white: #FDFBF8;
      --ink: #1C1C1A;
      --ink-muted: #5A574F;
      --ink-light: #9A968E;
      --sage: #5C7A60;
      --sage-light: #EAF0EA;
      --sage-mid: #7A9E7E;
      --terracotta: #C0674A;
      --gold: #B08D57;
      --border: #E0DCD4;
    }

    .serif { font-family: 'Playfair Display', Georgia, serif; }
    .serif-italic { font-family: 'Playfair Display', Georgia, serif; font-style: italic; }

    .nav-link {
      font-size: 0.85rem;
      font-weight: 500;
      letter-spacing: 0.04em;
      color: var(--ink-muted);
      text-decoration: none;
      transition: color 0.2s;
    }
    .nav-link:hover { color: var(--sage); }

    .btn-primary {
      display: inline-block;
      background: var(--sage);
      color: #fff;
      padding: 14px 32px;
      border-radius: 4px;
      font-size: 0.95rem;
      font-weight: 500;
      letter-spacing: 0.03em;
      text-decoration: none;
      border: none;
      cursor: pointer;
      transition: background 0.2s, transform 0.15s;
    }
    .btn-primary:hover { background: #4a6650; transform: translateY(-1px); }

    .btn-outline {
      display: inline-block;
      background: transparent;
      color: var(--sage);
      padding: 13px 30px;
      border-radius: 4px;
      font-size: 0.95rem;
      font-weight: 500;
      letter-spacing: 0.03em;
      text-decoration: none;
      border: 1.5px solid var(--sage);
      cursor: pointer;
      transition: background 0.2s, color 0.2s;
    }
    .btn-outline:hover { background: var(--sage); color: #fff; }

    .section-label {
      font-size: 0.72rem;
      font-weight: 500;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--sage);
    }

    .divider {
      width: 48px;
      height: 2px;
      background: var(--gold);
      margin: 0 auto;
    }

    .stat-card {
      background: var(--warm-white);
      border: 1px solid var(--border);
      border-top: 3px solid var(--sage);
      border-radius: 6px;
      padding: 28px 24px;
    }

    .template-card {
      background: var(--warm-white);
      border: 1px solid var(--border);
      border-radius: 6px;
      padding: 28px;
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    .template-card:hover {
      border-color: var(--sage-mid);
      box-shadow: 0 4px 20px rgba(92,122,96,0.1);
    }

    .step-line {
      position: absolute;
      top: 28px;
      left: calc(50% + 28px);
      right: calc(-50% + 28px);
      height: 1px;
      background: var(--border);
    }

    .email-input {
      border: 1.5px solid var(--border);
      border-radius: 4px 0 0 4px;
      padding: 14px 18px;
      font-size: 0.95rem;
      font-family: 'DM Sans', sans-serif;
      background: #fff;
      color: var(--ink);
      outline: none;
      width: 100%;
      max-width: 300px;
      transition: border-color 0.2s;
    }
    .email-input:focus { border-color: var(--sage); }
    .email-input::placeholder { color: var(--ink-light); }

    .hero-bg {
      background:
        radial-gradient(ellipse at 80% 20%, rgba(92,122,96,0.08) 0%, transparent 60%),
        radial-gradient(ellipse at 10% 80%, rgba(176,141,87,0.06) 0%, transparent 50%),
        var(--cream);
    }

    .problem-bg {
      background:
        linear-gradient(135deg, #2C2C28 0%, #1C1C1A 100%);
    }

    .ornament { color: var(--gold); font-size: 1.2rem; }

    @media (max-width: 768px) {
      .step-line { display: none; }
      .hero-grid { grid-template-columns: 1fr !important; }
      .stats-grid { grid-template-columns: 1fr 1fr !important; }
      .template-grid { grid-template-columns: 1fr !important; }
      .steps-grid { grid-template-columns: 1fr 1fr !important; }
    }
    @media (max-width: 480px) {
      .stats-grid { grid-template-columns: 1fr !important; }
      .steps-grid { grid-template-columns: 1fr !important; }
      .audience-grid { grid-template-columns: 1fr !important; }
    }
  `}</style>

  {/* ── NAV ─────────────────────────────────────────────── */}
  <nav
    style={{
      position: "sticky",
      top: 0,
      zIndex: 100,
      background: "rgba(247,244,239,0.92)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border)",
      padding: "0 32px",
    }}
  >
    <div
      style={{
        maxWidth: 1080,
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 64,
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
        <span className="serif" style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--ink)" }}>
          Dwelling
        </span>
        <span style={{ fontSize: "1.25rem", fontWeight: 300, color: "var(--sage)" }}>Logic</span>
      </div>
      <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
        <a href="#benefits" className="nav-link">Why Smart Homes</a>
        <a href="#template" className="nav-link">The Template</a>
        <a href="#how-it-works" className="nav-link">How It Works</a>
        <a href="#cta" className="btn-primary" style={{ padding: "9px 20px", fontSize: "0.85rem" }}>
          Get the Template
        </a>
      </div>
    </div>
  </nav>

  {/* ── HERO ────────────────────────────────────────────── */}
  <section
    className="hero-bg"
    style={{ padding: "96px 32px 80px", borderBottom: "1px solid var(--border)" }}
  >
    <div style={{ maxWidth: 1080, margin: "0 auto" }}>
      <div
        className="hero-grid"
        style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: 64, alignItems: "center" }}
      >
        <div>
          <div
            style={{
              opacity: 0,
              animation: "fadeUp 0.6s ease 0.1s forwards",
            }}
          >
            <style>{`
              @keyframes fadeUp {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
              }
            `}</style>
            <span className="section-label">Smart Home Planning</span>
          </div>

          <h1
            className="serif"
            style={{
              fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)",
              lineHeight: 1.15,
              fontWeight: 600,
              marginTop: 20,
              marginBottom: 24,
              color: "var(--ink)",
              opacity: 0,
              animation: "fadeUp 0.6s ease 0.2s forwards",
            }}
          >
            Build a smarter home{" "}
            <span className="serif-italic" style={{ color: "var(--sage)" }}>
              without the guesswork.
            </span>
          </h1>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.75,
              color: "var(--ink-muted)",
              fontWeight: 300,
              maxWidth: 520,
              marginBottom: 36,
              opacity: 0,
              animation: "fadeUp 0.6s ease 0.3s forwards",
            }}
          >
            Most homeowners don't lack enthusiasm for smart home technology —
            they lack a clear starting point. Dwelling Logic gives you the
            education, tools, and structured plan to make decisions you'll
            feel confident about for years.
          </p>

          <div
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              opacity: 0,
              animation: "fadeUp 0.6s ease 0.4s forwards",
            }}
          >
            <a href="#cta" className="btn-primary">Get the Free Template</a>
            <a href="#benefits" className="btn-outline">See Why It Matters</a>
          </div>

          <p
            style={{
              marginTop: 20,
              fontSize: "0.8rem",
              color: "var(--ink-light)",
              opacity: 0,
              animation: "fadeUp 0.6s ease 0.5s forwards",
            }}
          >
            Free to download. No account required.
          </p>
        </div>

        {/* Hero card */}
        <div
          style={{
            background: "var(--warm-white)",
            border: "1px solid var(--border)",
            borderRadius: 8,
            padding: 36,
            boxShadow: "0 8px 40px rgba(28,28,26,0.07)",
            opacity: 0,
            animation: "fadeUp 0.7s ease 0.3s forwards",
          }}
        >
          <div className="ornament" style={{ marginBottom: 12 }}>◈</div>
          <p className="serif" style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: 24, lineHeight: 1.4 }}>
            "I spent six months researching and still ended up with three devices that don't talk to each other."
          </p>
          <p style={{ fontSize: "0.85rem", color: "var(--ink-muted)", marginBottom: 28, lineHeight: 1.65 }}>
            This is the most common story we hear. Not a lack of effort — a lack of a structured process.
            Dwelling Logic gives you that process.
          </p>
          <div style={{ borderTop: "1px solid var(--border)", paddingTop: 20 }}>
            {["Avoid compatibility dead ends", "Build a phased, budget-aware plan", "Understand your options before you buy"].map((item) => (
              <div key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10 }}>
                <span style={{ color: "var(--sage)", fontWeight: 500, marginTop: 1 }}>✓</span>
                <span style={{ fontSize: "0.88rem", color: "var(--ink-muted)" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* ── WHY SMART HOMES MATTER ──────────────────────────── */}
  <section
    id="benefits"
    style={{ padding: "96px 32px", background: "var(--warm-white)", borderBottom: "1px solid var(--border)" }}
  >
    <div style={{ maxWidth: 1080, margin: "0 auto" }}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <span className="section-label">Why It Matters</span>
        </div>
        <h2
          className="serif"
          style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 600, marginBottom: 16 }}
        >
          Smart homes aren't a luxury.
          <br />
          <span className="serif-italic" style={{ color: "var(--sage)" }}>They're a compounding investment.</span>
        </h2>
        <p
          style={{
            textAlign: "center",
            maxWidth: 580,
            margin: "0 auto 56px",
            fontSize: "1rem",
            lineHeight: 1.75,
            color: "var(--ink-muted)",
            fontWeight: 300,
          }}
        >
          The real case for smart home technology isn't about novelty or convenience —
          it's about measurable improvements to your comfort, safety, finances, and peace of mind.
          Here's what the research actually shows.
        </p>
      </FadeIn>

      <div
        className="stats-grid"
        style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginBottom: 64 }}
      >
        {stats.map((s, i) => (
          <FadeIn key={s.value} delay={i * 0.1}>
            <div className="stat-card">
              <div
                className="serif"
                style={{ fontSize: "2.4rem", fontWeight: 600, color: "var(--sage)", marginBottom: 10, lineHeight: 1 }}
              >
                {s.value}
              </div>
              <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "var(--ink-muted)" }}>{s.label}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32 }}>
        {[
          {
            icon: "⚡",
            title: "Energy & Cost",
            body: "A smart thermostat typically cuts heating and cooling costs by 10–15%. Expand to smart lighting, plugs, and appliance controls and that figure can reach 15–25% of your total household energy bill. For the average home, that's real money back every year.",
            source: "U.S. DOE & ACEEE research",
          },
          {
            icon: "🔐",
            title: "Security & Safety",
            body: "87% of smart security users report increased peace of mind — and it's not just psychological. Research on burglary patterns shows 83% of offenders actively avoid homes with visible security systems. Smart locks, cameras, and motion alerts create a genuine deterrent.",
            source: "University of North Carolina study",
          },
          {
            icon: "📈",
            title: "Home Value",
            body: "Smart features are increasingly factored into home valuations. Homes with smart security systems have shown a 3–7% premium in some market analyses, and they tend to sell faster. With 77% of millennials willing to pay more for smart features, this trend isn't reversing.",
            source: "NAR & Consumer Technology Association data",
          },
        ].map((card, i) => (
          <FadeIn key={card.title} delay={i * 0.1}>
            <div style={{ padding: "28px 0", borderTop: "2px solid var(--border)" }}>
              <div style={{ fontSize: "1.6rem", marginBottom: 14 }}>{card.icon}</div>
              <h3 className="serif" style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: 10 }}>
                {card.title}
              </h3>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.75, color: "var(--ink-muted)", marginBottom: 12 }}>
                {card.body}
              </p>
              <p style={{ fontSize: "0.75rem", color: "var(--ink-light)", fontStyle: "italic" }}>
                Source: {card.source}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>

  {/* ── THE PROBLEM ─────────────────────────────────────── */}
  <section
    id="problem"
    className="problem-bg"
    style={{ padding: "96px 32px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
  >
    <div style={{ maxWidth: 1080, margin: "0 auto" }}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <span style={{ fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--sage-mid)" }}>
            The Problem
          </span>
        </div>
        <h2
          className="serif"
          style={{
            textAlign: "center",
            fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
            fontWeight: 600,
            color: "#F7F4EF",
            marginBottom: 16,
          }}
        >
          Why most smart home projects{" "}
          <span className="serif-italic" style={{ color: "var(--sage-mid)" }}>go sideways.</span>
        </h2>
        <p
          style={{
            textAlign: "center",
            maxWidth: 560,
            margin: "0 auto 56px",
            fontSize: "1rem",
            lineHeight: 1.75,
            color: "rgba(247,244,239,0.6)",
            fontWeight: 300,
          }}
        >
          It's not the technology that fails homeowners. It's the lack of a clear, structured approach
          before a single device is purchased.
        </p>
      </FadeIn>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 2 }}>
        {[
          {
            num: "01",
            title: "Information Overload",
            body: "YouTube videos. Reddit threads. Manufacturer websites. Brand-sponsored "best of" lists. There's more content about smart homes than ever — and most of it is selling something. Separating signal from noise without a framework is genuinely exhausting.",
          },
          {
            num: "02",
            title: "Compatibility Confusion",
            body: "You buy a thermostat. Then a lock. Then a camera. Then you discover none of them share an app, two require separate hubs, and one doesn't support the voice assistant you use. Ecosystem fragmentation is the #1 source of buyer's remorse in smart home purchases.",
          },
          {
            num: "03",
            title: "Decision Paralysis",
            body: "With dozens of options at every price point, many homeowners end up doing nothing — or buying impulsively. Neither outcome serves you. Planning requires a structure that forces decisions in the right order, at the right scope.",
          },
        ].map((p, i) => (
          <FadeIn key={p.num} delay={i * 0.12}>
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "36px 32px",
                borderRadius: 2,
              }}
            >
              <div style={{ fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.12em", color: "var(--sage-mid)", marginBottom: 16 }}>
                {p.num}
              </div>
              <h3 className="serif" style={{ fontSize: "1.2rem", color: "#F7F4EF", marginBottom: 14, fontWeight: 600 }}>
                {p.title}
              </h3>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.75, color: "rgba(247,244,239,0.55)" }}>{p.body}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>

  {/* ── A BETTER WAY ────────────────────────────────────── */}
  <section
    id="approach"
    style={{ padding: "96px 32px", background: "var(--sage-light)", borderBottom: "1px solid var(--border)" }}
  >
    <div style={{ maxWidth: 1080, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <FadeIn>
          <span className="section-label">A Better Way</span>
          <h2
            className="serif"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 600, marginTop: 16, marginBottom: 24, lineHeight: 1.2 }}
          >
            Plan first.{" "}
            <span className="serif-italic" style={{ color: "var(--sage)" }}>
              Buy with clarity.
            </span>
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--ink-muted)", fontWeight: 300, marginBottom: 20 }}>
            Dwelling Logic isn't a product review site. We're not affiliated with manufacturers,
            and we don't earn commissions on what you buy. Our purpose is simpler: to give you a
            clear-headed, structured approach to planning a smart home that fits{" "}
            <em>your home</em>, <em>your priorities</em>, and <em>your budget</em>.
          </p>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--ink-muted)", fontWeight: 300 }}>
            We believe most homeowners don't need more information — they need a better
            decision-making framework. That's what we've built.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { before: "Hours of scattered research", after: "One structured planning document" },
              { before: "Buying devices one by one", after: "A phased plan that builds coherently" },
              { before: "Realizing devices don't work together", after: "Compatibility checked before purchase" },
              { before: "Regret and restart costs", after: "Confidence in every decision" },
            ].map((row) => (
              <div
                key={row.before}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 32px 1fr",
                  gap: 8,
                  alignItems: "center",
                  background: "var(--warm-white)",
                  border: "1px solid var(--border)",
                  borderRadius: 6,
                  padding: "16px 20px",
                }}
              >
                <span style={{ fontSize: "0.84rem", color: "var(--ink-light)", textDecoration: "line-through" }}>
                  {row.before}
                </span>
                <span style={{ textAlign: "center", color: "var(--sage)", fontWeight: 500 }}>→</span>
                <span style={{ fontSize: "0.84rem", color: "var(--ink)", fontWeight: 500 }}>
                  {row.after}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  </section>

  {/* ── THE TEMPLATE ────────────────────────────────────── */}
  <section
    id="template"
    style={{ padding: "96px 32px", background: "var(--cream)", borderBottom: "1px solid var(--border)" }}
  >
    <div style={{ maxWidth: 1080, margin: "0 auto" }}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <span className="section-label">The Tool</span>
        </div>
        <h2
          className="serif"
          style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 600, marginBottom: 16 }}
        >
          The Dwelling Logic{" "}
          <span className="serif-italic" style={{ color: "var(--sage)" }}>Planning Template</span>
        </h2>
        <p
          style={{
            textAlign: "center",
            maxWidth: 580,
            margin: "0 auto 56px",
            fontSize: "1rem",
            lineHeight: 1.75,
            color: "var(--ink-muted)",
            fontWeight: 300,
          }}
        >
          Not a checklist. Not a spec sheet. A working planning document that takes you from
          "I want a smarter home" to a clear, phased action plan — before you spend a dollar.
        </p>
      </FadeIn>

      {/* What You'll Actually Get */}
      <div id="get" className="template-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
        {templateSections.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.08}>
            <div className="template-card">
              <div style={{ fontSize: "1.4rem", color: "var(--sage)", marginBottom: 14 }}>{item.icon}</div>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 500, marginBottom: 10, color: "var(--ink)" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "var(--ink-muted)" }}>{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.2}>
        <div
          style={{
            marginTop: 48,
            background: "var(--warm-white)",
            border: "1px solid var(--border)",
            borderLeft: "4px solid var(--gold)",
            borderRadius: "0 6px 6px 0",
            padding: "24px 28px",
            maxWidth: 720,
            margin: "48px auto 0",
          }}
        >
          <p style={{ fontSize: "0.9rem", lineHeight: 1.75, color: "var(--ink-muted)" }}>
            <strong style={{ color: "var(--ink)" }}>This template was designed for real homes, not showrooms.</strong>{" "}
            It reflects the actual decisions homeowners face — from choosing a hub ecosystem in a 1,200 sq ft
            condo to planning a full integration in a multi-story house with an older electrical panel.
          </p>
        </div>
      </FadeIn>
    </div>
  </section>

  {/* ── HOW IT WORKS ────────────────────────────────────── */}
  <section
    id="how-it-works"
    style={{ padding: "96px 32px", background: "var(--warm-white)", borderBottom: "1px solid var(--border)" }}
  >
    <div style={{ maxWidth: 1080, margin: "0 auto" }}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <span className="section-label">How It Works</span>
        </div>
        <h2
          className="serif"
          style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 600, marginBottom: 16 }}
        >
          Four steps from{" "}
          <span className="serif-italic" style={{ color: "var(--sage)" }}>confused to confident.</span>
        </h2>
        <p
          style={{
            textAlign: "center",
            maxWidth: 500,
            margin: "0 auto 64px",
            fontSize: "1rem",
            lineHeight: 1.75,
            color: "var(--ink-muted)",
            fontWeight: 300,
          }}
        >
          The process is intentionally simple. Most homeowners complete the core planning work in a single afternoon.
        </p>
      </FadeIn>

      <div
        className="steps-grid"
        style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}
      >
        {steps.map((step, i) => (
          <FadeIn key={step.num} delay={i * 0.1}>
            <div style={{ position: "relative" }}>
              {i < steps.length - 1 && <div className="step-line" />}
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "var(--sage)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  marginBottom: 20,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {step.num}
              </div>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 500, marginBottom: 10, color: "var(--ink)" }}>
                {step.title}
              </h3>
              <p style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "var(--ink-muted)" }}>{step.body}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>

  {/* ── WHO THIS IS FOR ─────────────────────────────────── */}
  <section
    id="for-who"
    style={{ padding: "96px 32px", background: "var(--cream)", borderBottom: "1px solid var(--border)" }}
  >
    <div style={{ maxWidth: 1080, margin: "0 auto" }}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <span className="section-label">Who This Is For</span>
        </div>
        <h2
          className="serif"
          style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 600, marginBottom: 16 }}
        >
          Built for motivated homeowners,{" "}
          <span className="serif-italic" style={{ color: "var(--sage)" }}>not tech insiders.</span>
        </h2>
        <p
          style={{
            textAlign: "center",
            maxWidth: 540,
            margin: "0 auto 56px",
            fontSize: "1rem",
            lineHeight: 1.75,
            color: "var(--ink-muted)",
            fontWeight: 300,
          }}
        >
          You don't need to know what Zigbee is or understand how mesh networking works.
          You just need to care about your home — and want to make smart decisions in it.
        </p>
      </FadeIn>

      <div
        className="audience-grid"
        style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, maxWidth: 720, margin: "0 auto" }}
      >
        {audiences.map((a, i) => (
          <FadeIn key={a.label} delay={i * 0.08}>
            <div
              style={{
                display: "flex",
                gap: 14,
                alignItems: "flex-start",
                background: "var(--warm-white)",
                border: "1px solid var(--border)",
                borderRadius: 6,
                padding: "18px 20px",
              }}
            >
              <span style={{ fontSize: "1.2rem" }}>{a.emoji}</span>
              <span style={{ fontSize: "0.86rem", lineHeight: 1.5, color: "var(--ink-muted)" }}>{a.label}</span>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.2}>
        <p
          style={{
            textAlign: "center",
            marginTop: 40,
            fontSize: "0.88rem",
            color: "var(--ink-light)",
            fontStyle: "italic",
          }}
        >
          If you've ever felt overwhelmed by smart home options, this was made for you.
        </p>
      </FadeIn>
    </div>
  </section>

  {/* ── FINAL CTA ───────────────────────────────────────── */}
  <section
    id="cta"
    style={{
      padding: "96px 32px 80px",
      background: "var(--warm-white)",
    }}
  >
    <div style={{ maxWidth: 620, margin: "0 auto", textAlign: "center" }}>
      <FadeIn>
        <div className="divider" style={{ marginBottom: 32 }} />
        <span className="section-label">Get Started</span>
        <h2
          className="serif"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 600, marginTop: 16, marginBottom: 20 }}
        >
          Start planning your smarter home{" "}
          <span className="serif-italic" style={{ color: "var(--sage)" }}>today.</span>
        </h2>
        <p
          style={{
            fontSize: "1rem",
            lineHeight: 1.8,
            color: "var(--ink-muted)",
            fontWeight: 300,
            marginBottom: 36,
          }}
        >
          Download the free Dwelling Logic Planning Template and stop wondering where to start.
          Thousands of homeowners have used a structured planning process to avoid the mistakes
          that make smart home projects expensive and frustrating.
        </p>

        {submitted ? (
          <div
            style={{
              background: "var(--sage-light)",
              border: "1px solid var(--sage-mid)",
              borderRadius: 6,
              padding: "24px 32px",
              marginBottom: 24,
            }}
          >
            <p style={{ fontSize: "1rem", fontWeight: 500, color: "var(--sage)" }}>
              ✓ You're on the list. Check your inbox for the template.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", justifyContent: "center", gap: 0, flexWrap: "wrap", marginBottom: 16 }}
          >
            <input
              className="email-input"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ borderRadius: "4px 0 0 4px" }}
            />
            <button
              type="submit"
              className="btn-primary"
              style={{ borderRadius: "0 4px 4px 0", whiteSpace: "nowrap" }}
            >
              Get the Free Template
            </button>
          </form>
        )}

        <p style={{ fontSize: "0.78rem", color: "var(--ink-light)" }}>
          Free. No spam. Unsubscribe anytime.
        </p>

        <div
          style={{
            marginTop: 48,
            paddingTop: 40,
            borderTop: "1px solid var(--border)",
            display: "flex",
            justifyContent: "center",
            gap: 40,
            flexWrap: "wrap",
          }}
        >
          {[
            { icon: "◈", label: "Free to download" },
            { icon: "◉", label: "No account required" },
            { icon: "◇", label: "Vendor-neutral guidance" },
          ].map((t) => (
            <div key={t.label} style={{ textAlign: "center" }}>
              <div style={{ color: "var(--sage)", fontSize: "1rem", marginBottom: 6 }}>{t.icon}</div>
              <p style={{ fontSize: "0.8rem", color: "var(--ink-muted)" }}>{t.label}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  </section>

  {/* ── FOOTER ──────────────────────────────────────────── */}
  <footer
    style={{
      borderTop: "1px solid var(--border)",
      padding: "32px",
      background: "var(--cream)",
    }}
  >
    <div
      style={{
        maxWidth: 1080,
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 16,
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
        <span className="serif" style={{ fontSize: "1rem", fontWeight: 600, color: "var(--ink)" }}>
          Dwelling
        </span>
        <span style={{ fontSize: "1rem", fontWeight: 300, color: "var(--sage)" }}>Logic</span>
      </div>
      <p style={{ fontSize: "0.78rem", color: "var(--ink-light)" }}>
        © {new Date().getFullYear()} Dwelling Logic. Helping homeowners build smarter.
      </p>
      <div style={{ display: "flex", gap: 24 }}>
        {["Privacy", "Contact"].map((l) => (
          <a key={l} href="#" className="nav-link" style={{ fontSize: "0.78rem" }}>
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
