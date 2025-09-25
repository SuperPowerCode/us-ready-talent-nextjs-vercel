export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-semibold">US-Ready Talent Accelerator</h1>
        <p className="mt-4 text-slate-300 text-lg">
          From global engineer to trusted US teammate.
        </p>
        <div className="mt-8 flex gap-3">
          <a
            href="/one-pager.pdf"
            className="inline-flex rounded-2xl bg-indigo-600 px-5 py-3 text-white"
          >
            Download 1-Pager
          </a>
          <a
            href="/resources"
            className="inline-flex rounded-2xl bg-slate-800 px-5 py-3 text-slate-100"
          >
            Blog & Resources
          </a>
          <a
            href="/case-studies"
            className="inline-flex rounded-2xl bg-slate-800 px-5 py-3 text-slate-100"
          >
            Case Studies
          </a>
        </div>
      </section>
    </main>
  );
}
