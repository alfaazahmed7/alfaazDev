'use client';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false, // Keeps mobile scrolling native and smooth
    });

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf); // Capture the frame ID
    }

    rafId = requestAnimationFrame(raf);

    // Clean up properly
    return () => {
      cancelAnimationFrame(rafId); // Stop the animation loop
      lenis.destroy();
    };
  }, []);

  return children;
}