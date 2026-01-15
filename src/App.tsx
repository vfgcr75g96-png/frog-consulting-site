import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Gauge, ShieldAlert, Cpu, Activity, LineChart, CircuitBoard, AlertTriangle } from "lucide-react";

// Simple Frog Icon (SVG)
const FrogLogo = () => (
  <svg width="28" height="28" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <circle cx="32" cy="32" r="30" fill="#0ea5e9" opacity="0.15" />
    <path d="M20 38c0 6 5.5 10 12 10s12-4 12-10-5-8-12-8-12 2-12 8z" fill="#34d399"/>
    <circle cx="24" cy="28" r="5" fill="#22d3ee"/>
    <circle cx="40" cy="28" r="5" fill="#22d3ee"/>
    <circle cx="24" cy="28" r="2" fill="#0f172a"/>
    <circle cx="40" cy="28" r="2" fill="#0f172a"/>
    <path d="M24 42c2 2 4 3 8 3s6-1 8-3" stroke="#0f172a" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const Section = ({ id, title, subtitle, children }: {id: string, title: string, subtitle?: string, children: React.ReactNode}) => (
  <section id={id} className="relative py-20">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-slate-950 pointer-events-none" />
    <div className="relative container mx-auto px-6 max-w-6xl">
      <motion.h2 initial={{opacity:0, y:16}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl md:text-4xl font-semibold text-white">
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p initial={{opacity:0, y:16}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6, delay:0.05}} className="mt-2 text-slate-300 max-w-3xl">
          {subtitle}
        </motion.p>
      )}
      <div className="mt-10">{children}</div>
    </div>
  </section>
);

const Stat = ({label, value}:{label:string; value:string}) => (
  <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-lg backdrop-blur">
    <div className="text-3xl font-bold text-white">{value}</div>
    <div className="text-slate-400 mt-1">{label}</div>
  </div>
);

const Pill = ({children}:{children:React.ReactNode}) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-cyan-400/10 text-cyan-300 px-3 py-1 text-sm border border-cyan-500/30">
    {children}
  </span>
);

export default function FrogConsultingSite(){
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-200 selection:bg-cyan-500/30">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur">
        <div className="container mx-auto px-6 max-w-6xl h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FrogLogo/>
            <div className="font-semibold text-white tracking-wide">Frog Consulting</div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#summary" className="hover:text-white text-slate-300">Summary</a>
            <a href="#challenges" className="hover:text-white text-slate-300">Challenges</a>
            <a href="#maturity" className="hover:text-white text-slate-300">Maturity</a>
            <a href="#journey" className="hover:text-white text-slate-300">Journey</a>
            <a href="#architecture" className="hover:text-white text-slate-300">Architecture</a>
            <a href="#governance" className="hover:text-white text-slate-300">Governance</a>
            <a href="#impact" className="hover:text-white text-slate-300">Impact</a>
            <a href="#usecase" className="hover:text-white text-slate-300">Use Case</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=2000&auto=format&fit=crop" alt="Oilfield at night" className="w-full h-full object-cover opacity-40"/>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/40 to-slate-950"/>
        </div>
        <div className="relative container mx-auto max-w-6xl px-6 py-28 md:py-36">
          <div className="max-w-3xl">
            <Pill><Cpu className="w-4 h-4"/> Digital Maintenance Transformation</Pill>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold text-white leading-tight">
              From Reactive to <span className="text-cyan-400">Generative Reliability</span>
            </h1>
            <p className="mt-5 text-lg text-slate-300 max-w-2xl">
              A structured journey to reduce NPT, lower maintenance cost, and elevate HSE using IIoT, analytics, and alarm governance across drilling, completions, and production.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Pill><Gauge className="w-4 h-4"/> 30–70% less unplanned downtime</Pill>
              <Pill><LineChart className="w-4 h-4"/> 20–25% maintenance cost reduction</Pill>
              <Pill><ShieldAlert className="w-4 h-4"/> Stronger HSE via alarm discipline</Pill>
            </div>
          </div>
        </div>
      </section>

      {/* SUMMARY */}
      <Section id="summary" title="Executive Summary" subtitle="Frog Consulting helps oil & gas operators transition from firefighting to foresight with a pragmatic, standards-aligned reliability program.">
        <div className="grid md:grid-cols-3 gap-6">
          <Stat label="Unplanned downtime" value="−30–70%"/>
          <Stat label="Maintenance cost" value="−20–25%"/>
          <Stat label="Productivity" value="+15–40%"/>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <img src="https://images.unsplash.com/photo-1551281044-8d8d0d8d0c03?q=80&w=1600&auto=format&fit=crop" alt="Control room" className="rounded-2xl shadow-2xl border border-slate-800"/>
          <div className="space-y-4 text-slate-300">
            <p>We combine edge data acquisition (J1939, Modbus, 4–20 mA), alarm governance (IEC 62682 / ISA‑18.2), and predictive analytics to deliver measurable reliability outcomes.</p>
            <p>Our approach integrates <span className="text-white font-medium">people</span>, <span className="text-white font-medium">process</span>, and <span className="text-white font-medium">technology</span> so that insights convert into actions: work orders, SOPs, and safer operations.</p>
            <ul className="space-y-2">
              {[
                "Edge‑to‑cloud architecture with offline resilience",
                "Fleet‑wide health dashboards and ROCC visibility",
                "Automated WOs from condition triggers (CMMS)",
                "Weekly governance: KPIs, RCA, and audit trail",
              ].map((t,i)=> (
                <li key={i} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-400"/><span>{t}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* CHALLENGES */}
      <Section id="challenges" title="Industry Challenges" subtitle="Real-world issues across drilling, completions, and production assets.">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {icon: <Activity className="w-5 h-5"/>, title: "Recurring Failures", text: "Mud pump liner wear, frac pump seals, injector chains, compressor surges."},
            {icon: <AlertTriangle className="w-5 h-5"/>, title: "Alarm Floods", text: "Nuisance and standing alarms obscure critical signals, delaying response."},
            {icon: <CircuitBoard className="w-5 h-5"/>, title: "Data Silos", text: "Disparate vendor systems hinder unified visibility and decision-making."},
            {icon: <Gauge className="w-5 h-5"/>, title: "Over‑Maintenance", text: "Time‑based PMs without correlation to condition raise TCO."},
            {icon: <ShieldAlert className="w-5 h-5"/>, title: "HSE Exposure", text: "Instrumentation drift and poor early detection elevate risk."},
            {icon: <LineChart className="w-5 h-5"/>, title: "Low Maturity", text: "Tribal knowledge over governance; limited analytics adoption."},
          ].map((c,i)=> (
            <div key={i} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-center gap-2 text-cyan-300">{c.icon}<span className="font-medium">{c.title}</span></div>
              <p className="mt-2 text-slate-300">{c.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* MATURITY */}
      <Section id="maturity" title="Maintenance Maturity Framework" subtitle="Progress across People, Process, and Technology dimensions.">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {stage:"1. Reactive", p:"Firefighting mindset", pr:"Unstructured work", t:"Manual checks"},
            {stage:"2. Preventive", p:"Calendar‑based culture", pr:"Scheduled PMs", t:"Basic CMMS"},
            {stage:"3. Condition‑Based", p:"Data‑aware teams", pr:"Sensor‑triggered actions", t:"IIoT & analytics"},
            {stage:"4. Generative AI", p:"Cross‑functional innovation", pr:"AI‑led strategy", t:"Autonomous maintenance"},
          ].map((m,i)=> (
            <div key={i} className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-900/60 border border-slate-800">
              <div className="text-white font-semibold">{m.stage}</div>
              <div className="mt-2 text-sm text-slate-400"><span className="text-slate-300">People:</span> {m.p}</div>
              <div className="text-sm text-slate-400"><span className="text-slate-300">Process:</span> {m.pr}</div>
              <div className="text-sm text-slate-400"><span className="text-slate-300">Technology:</span> {m.t}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* JOURNEY */}
      <Section id="journey" title="The Transformation Journey" subtitle="Six phased steps that align vision, governance, and execution.">
        <ol className="grid md:grid-cols-3 gap-6 list-decimal list-inside">
          {["Discover & Diagnose","Design the Strategy","Deploy IIoT Infrastructure","Enable Predictive Intelligence","Empower People & Process","Drive Continuous Optimization"].map((step,i)=> (
            <li key={i} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-300"><span className="text-white font-medium">{step}</span><br/>Guided playbooks, artifacts, and KPIs at each stage.</li>
          ))}
        </ol>
        <img src="https://images.unsplash.com/photo-1551281044-6bc86c2a47d1?q=80&w=1600&auto=format&fit=crop" alt="Team with tablet" className="mt-8 rounded-2xl shadow-2xl border border-slate-800"/>
      </Section>

      {/* ARCHITECTURE */}
      <Section id="architecture" title="IIoT Architecture" subtitle="Edge‑to‑cloud intelligence for real‑time decisions.">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="text-slate-300">Sensors & CAN/Modbus → Edge Gateway (rules, buffering) → Cloud AI/Analytics → Dashboards & CMMS</div>
            <ul className="space-y-2 text-slate-300 text-sm">
              {[
                "Secure acquisition (J1939, Modbus, 4–20 mA)",
                "Edge resilience for remote sites",
                "ML anomaly detection & RUL",
                "Auto‑generated Work Orders",
                "APIs for ROCC & mobile",
              ].map((t,i)=> (
                <li key={i} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-400"/><span>{t}</span></li>
              ))}
            </ul>
          </div>
          <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1600&auto=format&fit=crop" alt="Digital dashboard" className="rounded-2xl shadow-2xl border border-slate-800"/>
        </div>
      </Section>

      {/* GOVERNANCE */}
      <Section id="governance" title="Alarm Governance & HSE" subtitle="Aligned with ISA‑18.2 / IEC 62682 lifecycle and KPIs.">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <img src="https://images.unsplash.com/photo-1581091215367-59ab6b46b1b9?q=80&w=1600&auto=format&fit=crop" alt="Operations center" className="rounded-2xl shadow-2xl border border-slate-800"/>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-300 space-y-3">
            <div className="font-medium text-white">KPI Targets</div>
            <ul className="space-y-2 text-sm">
              {[
                "< 300 alarms/day/operator",
                "< 10 standing alarms",
                "MTTA < 1 minute",
                "Lifecycle audit every 6 months",
              ].map((t,i)=> (
                <li key={i} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-400"/><span dangerouslySetInnerHTML={{__html:t}}/></li>
              ))}
            </ul>
            <p>Alarm rationalization, priority schema, shelving/out‑of‑service policy, and operator guidance cards with trends and recommended actions.</p>
          </div>
        </div>
      </Section>

      {/* IMPACT */}
      <Section id="impact" title="Quantified Business Impact" subtitle="Typical outcomes observed after program adoption.">
        <div className="grid md:grid-cols-4 gap-6">
          <Stat label="NPT hours/month" value="< 10"/>
          <Stat label="Maintenance cost" value="75–80%"/>
          <Stat label="Reliability (uptime)" value="> 90%"/>
          <Stat label="HSE near misses" value="−40%"/>
        </div>
        <img src="https://images.unsplash.com/photo-1542326237-94b1c5a538d8?q=80&w=1600&auto=format&fit=crop" alt="Oil platform" className="mt-8 rounded-2xl shadow-2xl border border-slate-800"/>
      </Section>

      {/* USE CASE */}
      <Section id="usecase" title="Use Case: Drilling & Completions" subtitle="Predict and prevent high‑impact failures during critical jobs.">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-300 space-y-3">
            <div className="font-medium text-white">Problem</div>
            <p>Frequent frac‑pump and transmission failures due to lubrication loss, torque spikes, and overheat events.</p>
            <div className="font-medium text-white">Solution</div>
            <p>Deploy edge gateways, stream CAN data, implement predictive alarms under IEC 62682, auto‑create WOs in CMMS.</p>
            <div className="font-medium text-white">Results</div>
            <ul className="space-y-2 text-sm">
              {[
                "30% fewer failures",
                "20% job‑time improvement",
                ">95% alarm response compliance",
              ].map((t,i)=> (
                <li key={i} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-400"/><span>{t}</span></li>
              ))}
            </ul>
          </div>
          <img src="https://images.unsplash.com/photo-1535083783855-76ae62b68c0f?q=80&w=1600&auto=format&fit=crop" alt="Completions site" className="rounded-2xl shadow-2xl border border-slate-800"/>
        </div>
      </Section>

      {/* CTA */}
      <section className="relative py-20 border-t border-slate-800/60">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-transparent"/>
        <div className="relative container mx-auto px-6 max-w-6xl">
          <div className="p-8 md:p-12 rounded-3xl bg-slate-900/70 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 text-cyan-300"><FrogLogo/><span className="font-semibold">Frog Consulting</span></div>
              <h3 className="mt-3 text-2xl md:text-3xl font-semibold text-white">Begin your Digital Maintenance Transformation</h3>
              <p className="mt-2 text-slate-300">Start with a 60‑day readiness assessment to quantify value pockets and build your roadmap to predictive reliability.</p>
            </div>
            <a href="#summary" className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-cyan-500 text-slate-900 font-semibold shadow-lg hover:brightness-110 transition">View Summary</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-slate-800/60">
        <div className="container mx-auto px-6 max-w-6xl text-sm text-slate-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><FrogLogo/><span>© {new Date().getFullYear()} Frog Consulting • Smart Operations. Reliable Outcomes.</span></div>
          <div className="flex gap-4">
            <a href="#architecture" className="hover:text-slate-200">Architecture</a>
            <a href="#governance" className="hover:text-slate-200">IEC 62682 / ISA‑18.2</a>
            <a href="#maturity" className="hover:text-slate-200">Maturity</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
