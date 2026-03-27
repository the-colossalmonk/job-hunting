import { useEffect, useRef } from 'react';

export function Stats() {
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const to = +el.dataset.to;
        const plus = el.dataset.plus || '';
        let n = 0;
        const step = to / 55;
        
        const id = setInterval(() => {
          n = Math.min(n + step, to);
          el.textContent = Math.round(n) + plus;
          if (n >= to) {
            el.textContent = to + plus;
            clearInterval(id);
          }
        }, 18);
        
        observer.unobserve(el);
      });
    }, { threshold: 0.6 });

    const elements = gridRef.current?.querySelectorAll('[data-to]');
    elements?.forEach(el => observer.observe(el));

    return () => {
      elements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="stats">
      <div className="stats-grid reveal" ref={gridRef}>
        <div className="s-cell"><span className="s-num" data-to="5">0</span><span className="s-lbl">Prompts in pipeline</span></div>
        <div className="s-cell"><span className="s-num" data-to="4">0</span><span className="s-lbl">Active AI skills</span></div>
        <div className="s-cell"><span className="s-num" data-to="100" data-plus="+">0</span><span className="s-lbl">Jobs minimum per resume</span></div>
        <div className="s-cell"><span className="s-num" data-to="15" data-plus="+">0</span><span className="s-lbl">Job portals sourced</span></div>
      </div>
    </section>
  );
}
