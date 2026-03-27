export function Hero() {
  return (
    <section id="hero">
      <p className="h-eyebrow"><span className="h-dot"></span>Open-source · Free · Claude-powered</p>
      <h1 className="h-title">Land your next role.<br /><em>Systematically.</em></h1>
      <p className="h-sub">A structured five-prompt AI pipeline that takes your resume from raw to ATS-optimized, hiring-manager-ready, and matched to 100+ verified jobs across three search tracks.</p>
      <div className="h-btns">
        <a href="#documents" className="btn-blue">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Download All Files
        </a>
        <a href="#pipeline" className="btn-ghost">See the Pipeline →</a>
      </div>
      <div className="scroll-cue">
        <span className="scroll-txt">Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
