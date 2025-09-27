import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Shield, Globe2, Rocket, Users, Phone, Mail, Building2, LineChart, Briefcase, Star } from "lucide-react";
import { motion } from "framer-motion";

// --- BRAND VARIABLES ---
const BRAND = {
  name: "US‑Ready Talent Accelerator",
  tagline: "From global engineer to trusted US teammate.",
  ctaPrimary: "Book a Discovery Call",
  ctaSecondary: "Download 1‑Pager",
};

const bullets = [
  { icon: <Shield className="w-5 h-5" />, text: "Interview to onboarding: risk‑free cohort pilots" },
  { icon: <Globe2 className="w-5 h-5" />, text: "Tailored for India + LATAM + E.Europe talent" },
  { icon: <Users className="w-5 h-5" />, text: "Coach network of ex‑CTOs, PMs, US people leaders" },
  { icon: <LineChart className="w-5 h-5" />, text: "Manager‑rated outcomes, not just certificates" },
];

const offerings = [
  {
    title: "Pre‑Interview Accelerator",
    points: [
      "US‑style behavioral + case interview drills (STAR)",
      "Technical stories, product impact narratives",
      "Confidence & presence coaching",
    ],
  },
  {
    title: "Onboarding Jumpstart (First 90 Days)",
    points: [
      "Business English for engineers (meetings, async, docs)",
      "Cross‑cultural collaboration playbook",
      "Trust‑building with US managers & stakeholders",
    ],
  },
  {
    title: "Ongoing Coaching (6–12 mo)",
    points: [
      "Leadership habits for ICs & new managers",
      "Influence without authority; conflict to alignment",
      "Executive updates & demo storytelling",
    ],
  },
];

const outcomes = [
  { metric: "+35%", label: "Interview pass‑through" },
  { metric: "−30%", label: "Ramp‑up time (first 90 days)" },
  { metric: "+25%", label: "Manager satisfaction" },
  { metric: "2x", label: "Retention after 12 months" },
];

export default function LandingPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    // NOTE: wire this to your backend or a service like Formspree/Resend.
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* NAVBAR */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/40 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Rocket className="w-6 h-6 text-indigo-400" />
            <span className="font-semibold tracking-tight">{BRAND.name}</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-slate-300">
            <a href="#problem" className="hover:text-white">Problem</a>
            <a href="#solution" className="hover:text-white">Solution</a>
            <a href="#offerings" className="hover:text-white">Offerings</a>
            <a href="#gccs" className="hover:text-white">For GCCs</a>
            <a href="#startups" className="hover:text-white">For Startups</a>
            <a href="#outcomes" className="hover:text-white">Outcomes</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#blog" className="hover:text-white">Blog/Resources</a>
            <a href="#case-studies" className="hover:text-white">Case Studies</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <Button className="hidden md:inline-flex" asChild>
            <a href="#contact">{BRAND.ctaPrimary}</a>
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.25),transparent_70%)]" />
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                {BRAND.tagline}
              </h1>
              <p className="mt-4 text-slate-300 text-lg">
                We prepare global software engineers to interview, onboard, and thrive with US teams—
                blending cultural fluency, communication mastery, and leadership habits with real product impact.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="text-base" asChild>
                  <a href="#contact">{BRAND.ctaPrimary}</a>
                </Button>
                <Button variant="secondary" size="lg" className="text-base" asChild>
                  <a href="/one-pager.pdf">{BRAND.ctaSecondary}</a>
                </Button>
              </div>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {bullets.map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span className="leading-snug">{b.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <Card className="bg-white/5 border-white/10 shadow-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-indigo-400" /> Program Snapshot
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-slate-200 text-sm">
                  <div className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-400" />Pre‑Interview: US behavioral drills, storytelling, confidence</div>
                  <div className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-400" />Onboarding: 90‑day manager‑aligned success plan</div>
                  <div className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-400" />Ongoing: leadership labs, executive updates, conflict→alignment</div>
                  <div className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-400" />Outcomes: pass‑through ↑, ramp ↓, retention ↑</div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-semibold">The Problem</h2>
            <p className="mt-3 text-slate-300">
              Great engineers underperform with US teams due to gaps in communication, culture, and confidence. GCCs and staffing
              firms rarely provide role‑specific readiness tied to measurable outcomes. The result: interview drop‑off, slow ramp, and
              friction with managers.
            </p>
          </div>
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-lg">What US managers report</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-slate-300">
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" />Unclear status updates; weak written docs</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" />Low meeting presence; limited pushback or alignment</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" />Slow trust formation with product/leadership</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" />Cultural misreads → rework & delays</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SOLUTION */}
      <section id="solution" className="mx-auto max-w-6xl px-4 pb-8">
        <h2 className="text-2xl font-semibold">Our Solution</h2>
        <p className="mt-3 text-slate-300 max-w-3xl">
          A placement + coaching stack that turns global engineers into US‑ready teammates. We deliver blended learning (digital + live),
          cohort models, and manager‑aligned scorecards. Success = skills practiced in real meetings, docs, and demos—not certificates.
        </p>
      </section>

      {/* OFFERINGS */}
      <section id="offerings" className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          {offerings.map((o) => (
            <Card key={o.title} className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle>{o.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-slate-300 text-sm">
                {o.points.map((p) => (
                  <div key={p} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5" />{p}</div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* OUTCOMES */}
      <section id="outcomes" className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-semibold">Outcomes We Target</h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {outcomes.map((o) => (
            <Card key={o.label} className="bg-white/5 border-white/10 text-center">
              <CardHeader className="pb-2">
                <CardTitle className="text-3xl">{o.metric}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-slate-300 text-sm">{o.label}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold">Pricing</h2>
        <p className="mt-3 text-slate-300 max-w-3xl">
          Flexible B2B and cohort pricing. We recommend starting with a 25–50 engineer pilot.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle>Interview Accelerator</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-300 space-y-2">
              <div>2–4 weeks • cohort of 20</div>
              <div>Outcome: pass‑through ↑</div>
              <div className="font-semibold text-white">$1,250 / engineer</div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 ring-1 ring-indigo-400/40">
            <CardHeader>
              <CardTitle>Onboarding Jumpstart</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-300 space-y-2">
              <div>12 weeks • cohort of 25</div>
              <div>Outcome: ramp time ↓; manager sat ↑</div>
              <div className="font-semibold text-white">$2,500 / engineer</div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle>Ongoing Coaching</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-300 space-y-2">
              <div>6–12 months • 1:1 + labs</div>
              <div>Outcome: retention ↑; promotions ↑</div>
              <div className="font-semibold text-white">$300–$500 / eng / month</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* GCCs SPLIT */}
      <section id="gccs" className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-semibold">For GCCs & IT Services</h2>
            <p className="mt-3 text-slate-300">Boost bench quality and client satisfaction with a white‑label US‑readiness track. We align to SOW outcomes and build manager‑visible scorecards.</p>
            <ul className="mt-4 space-y-2 text-slate-300 text-sm list-disc list-inside">
              <li>Co‑branded cohorts (India, LATAM, E.Europe)</li>
              <li>Manager‑rated onboarding KPIs & dashboards</li>
              <li>Interview pass‑through and ramp‑time SLAs</li>
            </ul>
          </div>
          <Card className="bg-white/5 border-white/10">
            <CardHeader><CardTitle>GCC Pilot Package</CardTitle></CardHeader>
            <CardContent className="text-sm text-slate-300 space-y-2">
              <div>25‑50 engineers • 12 weeks</div>
              <div>White‑label content & shared reporting</div>
              <div className="font-semibold text-white">From $85,000 per cohort</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* STARTUPS SPLIT */}
      <section id="startups" className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-semibold">For US Startups & Mid‑Market SaaS</h2>
            <p className="mt-3 text-slate-300">Bring offshore teams up to US speed fast: clear updates, crisp docs, confident demos, and proactive alignment with product & execs.</p>
            <ul className="mt-4 space-y-2 text-slate-300 text-sm list-disc list-inside">
              <li>90‑day onboarding jumpstart for new hires</li>
              <li>Demo storytelling & exec‑update workshops</li>
              <li>Asynchronous communication & doc templates</li>
            </ul>
          </div>
          <Card className="bg-white/5 border-white/10">
            <CardHeader><CardTitle>Startup Bundle</CardTitle></CardHeader>
            <CardContent className="text-sm text-slate-300 space-y-2">
              <div>15 engineers • 8 weeks</div>
              <div>Outcome: ramp‑time ↓ 25–35%</div>
              <div className="font-semibold text-white">$35,000 fixed</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* BLOG / RESOURCES */}
      <section id="blog" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold">Blog & Resources</h2>
        <p className="mt-3 text-slate-300">Tactical playbooks, templates, and insights for global engineers and their US managers.</p>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[{title:'US‑Style Status Update Template', blurb:'Turn vague updates into crisp, decision‑ready signals.', tag:'Template'},
            {title:'Cross‑Cultural Meeting Playbook', blurb:'How to push back respectfully and get alignment.', tag:'Guide'},
            {title:'Interview Story Bank (STAR)', blurb:'Engineer‑specific prompts to craft business‑impact stories.', tag:'Workbook'}].map((r)=> (
            <Card key={r.title} className="bg-white/5 border-white/10">
              <CardHeader><CardTitle className="flex items-center justify-between"><span>{r.title}</span><span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300">{r.tag}</span></CardTitle></CardHeader>
              <CardContent className="text-slate-300 text-sm">{r.blurb}</CardContent>
            </Card>
          ))}
        </div>
        <div id="onepager" className="mt-6">
          <Button asChild><a href="#">Download 1‑Pager (PDF)</a></Button>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="case-studies" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold">Case Studies</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <Card className="bg-white/5 border-white/10">
            <CardHeader><CardTitle>Template: SaaS Startup (Series B)</CardTitle></CardHeader>
            <CardContent className="text-slate-300 text-sm space-y-2">
              <div><span className="font-medium text-white">Context:</span> 60‑person engineering org with 30% offshore; slow onboarding & low demo quality.</div>
              <div><span className="font-medium text-white">Intervention:</span> 12‑week Jumpstart + leadership labs + doc standards.</div>
              <div><span className="font-medium text-white">Outcomes:</span> Pass‑through +28%, ramp‑time −32%, manager sat +24 pts, retention 2x @12m.</div>
              <div><span className="font-medium text-white">Artifacts:</span> Before/after status update, demo checklist, onboarding 30‑60‑90.</div>
            </CardContent>
          </Card>
          <Card className="bg-white/5 border-white/10">
            <CardHeader><CardTitle>Template: GCC Pilot (India)</CardTitle></CardHeader>
            <CardContent className="text-slate-300 text-sm space-y-2">
              <div><span className="font-medium text-white">Context:</span> 500‑engineer GCC; client complaints on communication & rework.</div>
              <div><span className="font-medium text-white">Intervention:</span> White‑label cohort; manager dashboards; SLAs on updates.</div>
              <div><span className="font-medium text-white">Outcomes:</span> Ticket reopens −22%, cycle‑time −18%, CSAT +1.1 → +4.0 (5‑pt).</div>
              <div><span className="font-medium text-white">Artifacts:</span> Status rubric, meeting scripts, STAR bank.</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* TESTIMONIALS / LOGOS (placeholders) */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <Card key={i} className="bg-white/5 border-white/10">
              <CardContent className="p-6 text-slate-300 text-sm italic">
                “The US‑Ready program cut our onboarding time nearly in half and improved stakeholder confidence.”
                <div className="mt-3 not-italic text-white font-medium">Director of Engineering, SaaS (Pilot)</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6 text-slate-300 text-sm">
          <Card className="bg-white/5 border-white/10"><CardContent className="p-5"><p className="font-medium text-white">Do you replace technical training?</p><p className="mt-2">No. We complement strong technical skills with US‑oriented communication, culture, and leadership habits tied to measurable outcomes.</p></CardContent></Card>
          <Card className="bg-white/5 border-white/10"><CardContent className="p-5"><p className="font-medium text-white">How do you measure success?</p><p className="mt-2">Interview pass‑through, manager‑rated onboarding, ramp‑time reduction, written/meeting quality, and retention after 12 months.</p></CardContent></Card>
          <Card className="bg-white/5 border-white/10"><CardContent className="p-5"><p className="font-medium text-white">Can you white‑label for GCCs?</p><p className="mt-2">Yes. We partner with GCCs and staffing firms to deliver co‑branded programs with shared dashboards and outcomes.</p></CardContent></Card>
          <Card className="bg-white/5 border-white/10"><CardContent className="p-5"><p className="font-medium text-white">Do you serve B2C?</p><p className="mt-2">We focus on B2B pilots first; B2C bootcamps are available quarterly with selective cohorts.</p></CardContent></Card>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-semibold">Let’s make your global teams US‑ready</h2>
            <p className="mt-3 text-slate-300">Book a discovery call or request a pilot proposal. We’ll tailor a cohort for your geography, roles, and business outcomes.</p>
            <div className="mt-6 space-y-2 text-slate-300 text-sm">
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-indigo-400" /> +1 (555) 555‑1234</div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-indigo-400" /> hello@usreadytalent.com</div>
              <div className="flex items-center gap-2"><Building2 className="w-4 h-4 text-indigo-400" /> Austin, TX • Bengaluru • Mexico City</div>
            </div>
          </div>
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle>Book a Discovery Call</CardTitle>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="text-emerald-400">Thanks! We’ll reach out within 1 business day.</div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-3">
                  <Input required name="name" placeholder="Your name" value={form.name} onChange={onChange} />
                  <Input required type="email" name="email" placeholder="Work email" value={form.email} onChange={onChange} />
                  <Input name="company" placeholder="Company" value={form.company} onChange={onChange} />
                  <Textarea name="message" placeholder="What outcomes are you targeting?" value={form.message} onChange={onChange} />
                  <div className="text-xs text-slate-400">By submitting, you agree to our <a className="underline" href="#">Privacy Policy</a>.</div>
                  <Button type="submit" className="w-full">{BRAND.ctaPrimary}</Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-400 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-200">Privacy</a>
            <a href="#" className="hover:text-slate-200">Terms</a>
            <a href="#" className="hover:text-slate-200">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
