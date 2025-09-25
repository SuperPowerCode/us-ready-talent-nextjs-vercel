export default function Home() {
  return (
    <main style={{padding:'3rem 1.5rem', fontFamily:'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial'}}>
      <h1 style={{fontSize:'2rem', margin:'0 0 0.5rem'}}>US-Ready Talent Accelerator</h1>
      <p style={{fontSize:'1.1rem', color:'#334155', margin:'0 0 1rem'}}>
        From global engineer to trusted US teammate.
      </p>

      <p style={{margin:'1.25rem 0'}}>
        <a href="/one-pager.pdf" style="display:inline-block;padding:0.6rem 1rem;border-radius:12px;background:#4f46e5;color:#fff;text-decoration:none;">
          Download 1-Pager
        </a>
      </p>

      <p style={{marginTop:'1rem', fontSize:'1rem'}}>
        <a href="/resources">Blog & Resources</a> • <a href="/case-studies">Case Studies</a>
      </p>
    </main>
  );
}
