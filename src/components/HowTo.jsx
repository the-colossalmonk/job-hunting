export function HowTo() {
  return (
    <section id="howto">
      <div style={{maxWidth: '1080px', margin: '0 auto'}}>
        <div className="howto-inner">
          <p className="sec-eye dark-bg reveal">Usage guide</p>
          <h2 className="sec-h reveal" style={{color: 'var(--white)'}}>How to run<br/>the pipeline.</h2>
          <p className="sec-p reveal" style={{color: 'var(--mid)'}}>Five steps, strictly in order. Each prompt's output feeds the next. Takes around 15–30 minutes per resume version.</p>

          <div className="steps reveal">
            <div className="sr">
              <div className="sr-n"><span>01</span></div>
              <div>
                <h3 className="sr-h">Open a new Claude conversation</h3>
                <p className="sr-p">Paste the Master Handover Prompt first. This loads all four skills and establishes workflow rules. Repeat at the start of every new session.</p>
                <span className="sr-f">Master_Handover_Prompt.txt</span>
              </div>
            </div>
            <div className="sr">
              <div className="sr-n"><span>02</span></div>
              <div>
                <h3 className="sr-h">Upload resumes and run Prompt 1</h3>
                <p className="sr-p">Attach your resume files. Fill in the filename → role mapping and run. Save the entire output — it carries forward to Prompt 2.</p>
                <span className="sr-f">Profile_Analysis_Prompt_1.txt</span>
              </div>
            </div>
            <div className="sr">
              <div className="sr-n"><span>03</span></div>
              <div>
                <h3 className="sr-h">Paste output → run Prompts 2 and 3</h3>
                <p className="sr-p">Each prompt has a marked section to paste the previous output. Run ATS Scoring, then paste into the Rewrite prompt. Keep all rewritten resumes.</p>
                <span className="sr-f">ATS_Scoring_Prompt_2.txt</span><span className="sr-f">Resume_Rewrite_Prompt_3.txt</span>
              </div>
            </div>
            <div className="sr">
              <div className="sr-n"><span>04</span></div>
              <div>
                <h3 className="sr-h">Run hiring manager review</h3>
                <p className="sr-p">Paste rewritten resumes into Prompt 4. Resolve any "Not Yet" versions before continuing. Only cleared versions move forward to job search.</p>
                <span className="sr-f">Hiring_Manager_Check_Prompt_4.txt</span>
              </div>
            </div>
            <div className="sr">
              <div className="sr-n"><span>05</span></div>
              <div>
                <h3 className="sr-h">Fill preferences and run job search</h3>
                <p className="sr-p">Paste cleared resumes into Prompt 5. Add your LinkedIn URL, cities, compensation, work arrangement, and sectors. Activate tracks. Confirm the exclusion list. Let it run.</p>
                <span className="sr-f">Job_Hunt_Prompt_5.txt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
