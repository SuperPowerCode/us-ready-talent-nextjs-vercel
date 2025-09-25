import Link from "next/link";
export default function CaseStudiesIndex() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-semibold">Case Studies</h1>
        <p className="mt-3 text-slate-300">
          Use the template to create your first case study.
        </p>
        <ul className="mt-6 list-disc list-inside text-indigo-300">
          <li><Link href="/case-studies/template">Open the template</Link></li>
        </ul>
      </section>
    </main>
  );
}
