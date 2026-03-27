export function Tracks() {
  return (
    <section id="tracks">
      <div style={{maxWidth: '1080px', margin: '0 auto'}}>
        <p className="sec-eye reveal">Search tracks</p>
        <h2 className="sec-h reveal" style={{color: 'var(--dark)'}}>Three tracks.<br/>15+ portals.</h2>
        <p className="sec-p reveal" style={{color: 'var(--mid)'}}>Default split is 50/25/25 per resume. Activate any combination. Track C only includes roles explicitly open to India-based applicants.</p>

        <div className="tracks-grid reveal">
          <div className="tr">
            <div className="tr-badge">Track A</div>
            <div className="tr-letter">A</div>
            <div className="tr-name">India Onsite / Hybrid</div>
            <p className="tr-list">Naukri · LinkedIn Jobs · WellFound · Indeed India · Unstop · Upler · Internshala</p>
          </div>
          <div className="tr">
            <div className="tr-badge b">Track B</div>
            <div className="tr-letter">B</div>
            <div className="tr-name">India Remote</div>
            <p className="tr-list">Naukri Remote · LinkedIn Remote · Indeed India Remote · WellFound Remote · Remotive</p>
          </div>
          <div className="tr">
            <div className="tr-badge c">Track C</div>
            <div className="tr-letter">C</div>
            <div className="tr-name">Global Remote</div>
            <p className="tr-list">We Work Remotely · RemoteOK · Arc.dev · Turing · Remotive · FlexJobs · Crossover · Remote.co · LinkedIn Worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
}
