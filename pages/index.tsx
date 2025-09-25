export default function Home() {
  const container: React.CSSProperties = {
    padding: '3rem 1.5rem',
    fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
  };

  const heading: React.CSSProperties = {
    fontSize: '2rem',
    margin: '0 0 0.5rem',
  };

  const sub: React.CSSProperties = {
    fontSize: '1.1rem',
    color: '#334155',
    margin: '0 0 1rem',
  };

  const button: React.CSSProperties = {
    display: 'inline-block',
    padding: '0.6rem 1rem',
    borderRadius: 12,
    background: '#4f46e5',
    color: '#fff',
    textDecoration: 'none',
  };

  const links: React.CSSProperties = {
    marginTop: '1rem',
    fontSize: '1rem',
  };

  return (
    <main style={container}>
      <h1 style={heading}>US-Ready Talent Accelerator</h1>
      <p style={sub}>From global engineer to trusted US teammate.</p>

      <p style={{ margin: '1.25rem 0' }}>
        <a href="/one-pager.pdf" style={button}>
          Download 1-Pager
        </a>
      </p>

      <p style={links}>
        <a href="/resources">Blog & Resources</a> •{' '}
        <a href="/case-studies">Case Studies</a>
      </p>
    </main>
  );
}
