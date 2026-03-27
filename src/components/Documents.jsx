export function Documents() {
  return (
    <section id="documents">
      <div style={{maxWidth: '1080px', margin: '0 auto'}}>
        <p className="sec-eye reveal">Downloads</p>
        <h2 className="sec-h reveal" style={{color: 'var(--dark)'}}>Everything you need.<br/>All ten files.</h2>
        <p className="sec-p reveal" style={{color: 'var(--mid)'}}>Download the master prompt first, then run the numbered prompts in order. The four skill files define the AI behaviour at each step.</p>

        <div className="docs-grid reveal">

          <div className="dc dk">
            <div className="dc-cat"><span className="dc-pip o"></span>Master · Start here</div>
            <h3 className="dc-h">Master Handover Prompt</h3>
            <p className="dc-p">Paste this first in any new Claude conversation. Loads all four skills, sets isolation rules, defines three search tracks, and initialises the LinkedIn exclusion list system.</p>
            <a href="/Master_Handover_Prompt.txt" download className="dc-dl">Download <span className="dc-arrow">↗</span></a>
          </div>

          <div className="dc">
            <div className="dc-cat"><span className="dc-pip"></span>Prompt · Step 01</div>
            <h3 className="dc-h">Profile Analysis Prompt</h3>
            <p className="dc-p">Role family identification, competitive roles, gap severity rating, 3–5 strongest selling points, and an honest recruiter assessment per resume version.</p>
            <a href="/Profile_Analysis_Prompt_1.txt" download className="dc-dl">Download <span className="dc-arrow">↗</span></a>
          </div>

          <div className="dc">
            <div className="dc-cat"><span className="dc-pip"></span>Prompt · Step 02</div>
            <h3 className="dc-h">ATS Scoring Prompt</h3>
            <p className="dc-p">Full 8-dimension ATS diagnosis. Top 10 issues by impact, top 10 missing keywords, weakest bullets, and total weighted score out of 100 — per resume, no rewrites.</p>
            <a href="/ATS_Scoring_Prompt_2.txt" download className="dc-dl">Download <span className="dc-arrow">↗</span></a>
          </div>

          <div className="dc">
            <div className="dc-cat"><span className="dc-pip"></span>Prompt · Step 03</div>
            <h3 className="dc-h">Resume Rewrite Prompt</h3>
            <p className="dc-p">Complete rewrite — headline, summary, bullets, skills, recommended section order, ATS-safe plain-text resume, before/after scores, and residual interview risks.</p>
            <a href="/Resume_Rewrite_Prompt_3.txt" download className="dc-dl">Download <span className="dc-arrow">↗</span></a>
          </div>

          <div className="dc">
            <div className="dc-cat"><span className="dc-pip g"></span>Prompt · Step 04</div>
            <h3 className="dc-h">Hiring Manager Check Prompt</h3>
            <p className="dc-p">Four human lenses, recruiter and HM reports, interview risk flags, and a readiness rating per version. Not Yet versions pause the pipeline until fixed.</p>
            <a href="/Hiring_Manager_Check_Prompt_4.txt" download className="dc-dl">Download <span className="dc-arrow">↗</span></a>
          </div>

          <div className="dc">
            <div className="dc-cat"><span className="dc-pip g"></span>Prompt · Step 05</div>
            <h3 className="dc-h">Job Hunt Prompt</h3>
            <p className="dc-p">Full sourcing across 3 tracks and 15+ portals. Confirm exclusion list, activate tracks, and receive 100+ verified jobs per resume with fit scores, direct links, and reusable prompt variants.</p>
            <a href="/Job_Hunt_Prompt_5.txt" download className="dc-dl">Download <span className="dc-arrow">↗</span></a>
          </div>

          <div className="dc">
            <div className="dc-cat"><span className="dc-pip o"></span>Skill file · ATS</div>
            <h3 className="dc-h">resume-ats-optimizing</h3>
            <p className="dc-p">Powers Prompts 1–3. Defines ATS diagnosis dimensions, rewrite rules, multi-version isolation, and ATS-safe output format requirements.</p>
            <a href="/resume-ats-optimizing.md" download className="dc-dl">Download <span className="dc-arrow">↗</span></a>
          </div>

          <div className="dc">
            <div className="dc-cat"><span className="dc-pip o"></span>Skill file · Review</div>
            <h3 className="dc-h">hiring-manager-calibrating</h3>
            <p className="dc-p">Powers Prompt 4. Defines the four human review lenses, 7-concern output format, seniority consistency checks, and the readiness rating logic.</p>
            <a href="/hiring-manager-calibrating.md" download className="dc-dl">Download <span className="dc-arrow">↗</span></a>
          </div>

          <div className="dc">
            <div className="dc-cat"><span className="dc-pip o"></span>Skill file · Orchestration</div>
            <h3 className="dc-h">job-hunt-orchestrating</h3>
            <p className="dc-p">Coordinates the full search. Builds the exclusion list, maps resumes to role titles and keywords, routes independently to sourcing, assembles the application plan.</p>
            <a href="/job-hunt-orchestrating.md" download className="dc-dl">Download <span className="dc-arrow">↗</span></a>
          </div>

          <div className="dc">
            <div className="dc-cat"><span className="dc-pip o"></span>Skill file · Sourcing</div>
            <h3 className="dc-h">job-hunt-sourcing</h3>
            <p className="dc-p">Finds and verifies live openings across 15+ portals, scores each for resume fit across three components, returns direct URLs, organises by probability tier.</p>
            <a href="/job-hunt-sourcing.md" download className="dc-dl">Download <span className="dc-arrow">↗</span></a>
          </div>

        </div>
      </div>
    </section>
  );
}
