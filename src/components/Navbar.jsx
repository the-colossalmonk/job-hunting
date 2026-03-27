export function Navbar() {
  return (
    <>
      <div id="prog"></div>
      <nav>
        <span className="n-brand">Job Hunt Pipeline</span>
        <ul className="n-links">
          <li><a href="#pipeline">Pipeline</a></li>
          <li><a href="#documents">Downloads</a></li>
          <li><a href="#tracks">Tracks</a></li>
          <li><a href="#howto">Guide</a></li>
        </ul>
        <a href="#documents" className="n-cta">Get the Files</a>
      </nav>
    </>
  );
}
