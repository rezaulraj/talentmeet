import { useEffect, useRef, useState } from "react";

/** Returns [ref, visible] — flips to true once the element scrolls into view. */
const useReveal = (threshold = 0.18) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(
    () => typeof IntersectionObserver === "undefined",
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, visible]);

  return [ref, visible];
};

export default useReveal;
