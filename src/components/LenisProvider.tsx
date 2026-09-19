"use client";

import { useEffect } from "react";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let lenis: {
      raf: (time: number) => void;
      destroy: () => void;
    } | null = null;

    const initLenis = async () => {
      try {
        const LenisModule = await import("lenis");
        const LenisClass = LenisModule.default || (LenisModule as Record<string, unknown>).Lenis;
        if (!LenisClass) return;

        lenis = new LenisClass({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          wheelMultiplier: 0.8,
        }) as { raf: (time: number) => void; destroy: () => void };

        let rafId: number;
        function raf(time: number) {
          lenis?.raf(time);
          rafId = requestAnimationFrame(raf);
        }
        rafId = requestAnimationFrame(raf);

        return () => {
          cancelAnimationFrame(rafId);
          lenis?.destroy();
        };
      } catch {
        // Lenis not available, use native scroll
      }
    };

    const cleanup = initLenis();
    return () => {
      cleanup.then((fn) => fn?.());
    };
  }, []);

  return <>{children}</>;
}
