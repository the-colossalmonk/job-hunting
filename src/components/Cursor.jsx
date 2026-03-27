import { useEffect, useRef } from 'react';

export function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let cx = 0, cy = 0, rx = 0, ry = 0;
    let animationFrameId;

    const onMouseMove = (e) => {
      cx = e.clientX;
      cy = e.clientY;
      dot.style.transform = `translate(${cx - 4}px, ${cy - 4}px)`;

      const el = document.elementFromPoint(cx, cy);
      if (el) {
        const bg = window.getComputedStyle(el).backgroundColor;
        // Normalize rgb spaces
        const bgNormalized = bg.replace(/\s+/g, '');
        const lgt = bgNormalized.includes('255,255,255') || bgNormalized.includes('245,245,247') || bgNormalized.includes('232,232,237') || bgNormalized.includes('248,248,250') || bgNormalized.includes('250,250,250');
        document.body.classList.toggle('light', lgt);
      }
    };

    const animateRing = () => {
      animationFrameId = requestAnimationFrame(animateRing);
      rx += (cx - rx) * 0.12;
      ry += (cy - ry) * 0.12;
      ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
    };

    window.addEventListener('mousemove', onMouseMove);
    animateRing();

    // Setup hover effects using event delegation on document body
    const onMouseOver = (e) => {
      const target = e.target.closest('a, button, .dc, .feat, .pc, .tr, .s-cell');
      if (target) {
        ring.style.width = '50px';
        ring.style.height = '50px';
        ring.style.borderColor = 'rgba(0,113,227,.55)';
      }
    };

    const onMouseOut = (e) => {
      const target = e.target.closest('a, button, .dc, .feat, .pc, .tr, .s-cell');
      if (target) {
        ring.style.width = '36px';
        ring.style.height = '36px';
        ring.style.borderColor = '';
      }
    };

    document.body.addEventListener('mouseover', onMouseOver);
    document.body.addEventListener('mouseout', onMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.body.removeEventListener('mouseover', onMouseOver);
      document.body.removeEventListener('mouseout', onMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div id="dot" ref={dotRef}></div>
      <div id="ring" ref={ringRef}></div>
    </>
  );
}
