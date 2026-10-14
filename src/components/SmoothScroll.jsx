import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";
import gsap from "gsap";

const SmoothScroll = () => {
  const location = useLocation();
  const lenisRef = useRef(null);

  useEffect(() => {
    if (lenisRef.current) return;

    const lenis = new Lenis({
      duration: 1.2,
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      autoRaf: false,
    });
    lenisRef.current = lenis;

    const update = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const lenis = lenisRef.current;
    if (!location.hash) {
      lenis?.scrollTo(0, { immediate: true });
      return;
    }
    const id = requestAnimationFrame(() => {
      const target = document.querySelector(location.hash);
      if (target) lenis?.scrollTo(target, { offset: -80 });
    });
    return () => cancelAnimationFrame(id);
  }, [location.pathname, location.hash]);

  return null;
};

export default SmoothScroll;
