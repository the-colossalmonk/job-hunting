import { useState, useEffect } from 'react';

export function AdBlockDetector() {
  const [adBlockDetected, setAdBlockDetected] = useState(false);

  useEffect(() => {
    // Create a bait element with classes commonly blocked by ad/tracker blockers (including Brave/Opera native blockers)
    const bait = document.createElement('div');
    bait.className = 'ad-banner ad-container adBox doubleclick ads google-ads sponsor-ad';
    bait.style.position = 'absolute';
    bait.style.left = '-9999px';
    bait.style.top = '-9999px';
    bait.style.height = '10px';
    bait.style.width = '10px';
    bait.style.display = 'block';
    
    document.body.appendChild(bait);

    // Check after a small delay to allow blockers to parse and hide the element
    setTimeout(() => {
      // Check if the element was hidden or collapsed
      const isBlocked = 
        bait.offsetHeight === 0 || 
        bait.offsetWidth === 0 || 
        window.getComputedStyle(bait).display === 'none' ||
        window.getComputedStyle(bait).visibility === 'hidden';
        
      if (isBlocked) {
        setAdBlockDetected(true);
        // Disable scrolling when modal is active
        document.body.style.overflow = 'hidden';
      }
      
      // Cleanup bait
      if (document.body.contains(bait)) {
        bait.remove();
      }
    }, 600);
  }, []);

  if (!adBlockDetected) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0,0,0,0.92)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      zIndex: 999999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div style={{
        background: '#1d1d1f',
        padding: '3.5rem 2.5rem',
        borderRadius: '24px',
        border: '1px solid rgba(255,255,255,0.08)',
        maxWidth: '520px',
        textAlign: 'center',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8)'
      }}>
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: 'rgba(245, 166, 35, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem',
          border: '1px solid rgba(245, 166, 35, 0.3)'
        }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f5a623" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
        </div>
        <h2 style={{ fontSize: '1.6rem', fontWeight: '600', marginBottom: '1rem', color: '#fff', letterSpacing: '-0.02em' }}>Ad Blocker Detected</h2>
        <p style={{ fontSize: '0.95rem', color: '#86868b', lineHeight: '1.7', marginBottom: '2rem' }}>
          It looks like you're using an ad blocker, privacy shield, or a browser with built-in blocking (like Brave or Opera). 
          To support this free, open-source project, please disable your blocker for this site.
        </p>
        <button 
          onClick={() => window.location.reload()}
          style={{
            background: '#0071e3',
            color: '#fff',
            border: 'none',
            padding: '0.9rem 2.5rem',
            borderRadius: '980px',
            fontSize: '0.92rem',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'transform 0.2s, box-shadow 0.2s, opacity 0.2s'
          }}
          onMouseEnter={(e) => {
             e.currentTarget.style.transform = 'translateY(-1px)';
             e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,113,227,0.4)';
          }}
          onMouseLeave={(e) => {
             e.currentTarget.style.transform = 'translateY(0)';
             e.currentTarget.style.boxShadow = 'none';
          }}
        >
          I've disabled it, reload page
        </button>
      </div>
    </div>
  );
}
