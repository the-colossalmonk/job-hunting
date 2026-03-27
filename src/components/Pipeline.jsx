export function Pipeline() {
  return (
    <section id="pipeline">
      <div className="pg">
        <p className="sec-eye dark-bg reveal">The system</p>
        <h2 className="sec-h reveal" style={{color: 'var(--white)'}}>Five prompts.<br/>One complete pipeline.</h2>
        <p className="sec-p reveal" style={{color: 'var(--mid)'}}>Each prompt's output feeds the next. Nothing is invented — every metric, job, and URL is verified before it reaches you.</p>

        <div className="pipe-grid reveal">
          <div className="pc wide">
            <div className="pc-num">Prompt 01 <span className="pc-tag">resume-ats-optimizing</span></div>
            <h3 className="pc-h">Profile Analysis</h3>
            <p className="pc-p">Identify the role family each resume targets, discover 6–10 competitive roles, flag skill gaps by severity — critical, moderate, or minor — and receive an honest one-paragraph recruiter-level assessment per resume version.</p>
          </div>
          <div className="pc">
            <div className="pc-num">Prompt 02 <span className="pc-tag">resume-ats-optimizing</span></div>
            <h3 className="pc-h">ATS Scoring</h3>
            <p className="pc-p">Score across 8 dimensions — parsing safety, keyword alignment, evidence quality, metrics density, seniority fit, summary strength, and more. Top 10 issues by impact, top 10 missing keywords. No rewrites yet.</p>
          </div>
          <div className="pc">
            <div className="pc-num">Prompt 03 <span className="pc-tag">resume-ats-optimizing</span></div>
            <h3 className="pc-h">Resume Rewrite</h3>
            <p className="pc-p">Fixes every issue in the score report. Rewrites headline, summary, all bullets (action + scope + result), and the skills section. Delivers a full ATS-safe plain-text resume plus before/after scores and 5 residual risks.</p>
          </div>
          <div className="pc">
            <div className="pc-num">Prompt 04 <span className="pc-tag">hiring-manager-calibrating</span></div>
            <h3 className="pc-h">Hiring Manager Review</h3>
            <p className="pc-p">Four human lenses: 6-second recruiter scan, depth test, seniority consistency, domain readiness. Produces 7 recruiter concerns, 7 HM concerns, interview risk flags, and a readiness rating — Ready, Almost, or Not Yet.</p>
          </div>
          <div className="pc" style={{borderTop: '.5px solid rgba(255,255,255,.07)'}}>
            <div className="pc-num">Prompt 05 <span className="pc-tag">job-hunt-orchestrating</span> <span className="pc-tag" style={{marginTop:'4px'}}>job-hunt-sourcing</span></div>
            <h3 className="pc-h">Job Search</h3>
            <p className="pc-p">Builds a LinkedIn exclusion list, maps each resume to primary, adjacent, and stretch titles, then sources 100+ verified jobs per version across 3 tracks and 15+ portals — with fit scores, direct links, and a prioritized application plan.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
