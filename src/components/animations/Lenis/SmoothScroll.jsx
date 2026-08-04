'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';

export default function SmoothScroll({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Initialize Lenis from the official 'lenis' package
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    // 2. Request Animation Frame Loop
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // 3. Reset scroll position to top on page navigation
    lenis.scrollTo(0, { immediate: true });

    // Cleanup
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [pathname]); // Re-sync on route/pathname change

  return <>{children}</>;
}