export function Features() {
  return (
    <section id="features">
      <div style={{maxWidth: '1080px', margin: '0 auto'}}>
        <p className="sec-eye dark-bg reveal">Why it works</p>
        <h2 className="sec-h reveal" style={{color: 'var(--white)'}}>Built on four<br/>non-negotiable rules.</h2>
        <p className="sec-p reveal" style={{color: 'var(--mid)'}}>Every design decision prevents the failure modes of typical AI-assisted job searching.</p>

        <div className="feat-grid reveal">
          <div className="feat">
            <div className="feat-icon"><svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg></div>
            <h3 className="feat-h">Complete version isolation</h3>
            <p className="feat-p">Every resume runs its own full pipeline. Scores, rewrites, and job lists are never merged or averaged across versions. Each variant is treated as an independent candidate at all times.</p>
          </div>
          <div className="feat">
            <div className="feat-icon"><svg viewBox="0 0 24 24"><path d="M9 12l2 2 4-4"/><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/></svg></div>
            <h3 className="feat-h">Zero fabrication</h3>
            <p className="feat-p">No invented companies, metrics, certifications, or URLs. Unknown metrics become [add quantified outcome here]. Only verified, live listings make it into your job list — stale postings are flagged and excluded.</p>
          </div>
          <div className="feat">
            <div className="feat-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
            <h3 className="feat-h">Three parallel search tracks</h3>
            <p className="feat-p">India onsite/hybrid, India remote, and global remote — all running simultaneously with separate portal sets and completely separate job lists per resume version. No overlap.</p>
          </div>
          <div className="feat">
            <div className="feat-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
            <h3 className="feat-h">Human + machine review</h3>
            <p className="feat-p">ATS optimization fixes machine readability. Hiring manager calibration fixes human readability. Both are mandatory before any job search begins — no step can be skipped.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
