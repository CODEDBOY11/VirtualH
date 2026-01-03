import React, { useEffect, useRef, useState } from "react";
import "./loader.css";

type LoaderProps = {
  onFinish?: () => void;
};

// Match the animation timing to feel premium and smooth (no abrupt transitions)
const LETTERS = [
  { char: "V", color: "#FFFFFF" },
  { char: "I", color: "#FFFFFF" },
  { char: "R", color: "#FFFFFF" },
  { char: "T", color: "#FFFFFF" },
  { char: "U", color: "#FFFFFF" },
  { char: "A", color: "#FFFFFF" },
  { char: "L", color: "#FFFFFF" },

  { char: "H", color: "#0dc9b9" }, // teal
  { char: "A", color: "#0dc9b9" },
  { char: "V", color: "#0dc9b9" },
  { char: "E", color: "#0dc9b9" },
  { char: "N", color: "#0dc9b9" },
];

const Loader: React.FC<LoaderProps> = ({ onFinish }) => {
  const [visible, setVisible] = useState(true); // mounted in DOM
  const [hiding, setHiding] = useState(false); // triggers overlay fade-out
  const logoRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const partRefs = useRef<Array<SVGTextElement | null>>([]);

  useEffect(() => {
    let mounted = true;

    const slideDuration = 650; // ms
    const stagger = 120; // ms between letters
    const fadeTransition = 220; // ms per letter fade
    const pauseBetween = 300; // ms pause between fade-out and fade-in

    // Start the sequence after the slide-in completes
    const slideEndTimer = setTimeout(() => {
      if (!mounted) return;

      const N = LETTERS.length;

      // Fade-out sequence (last -> first)
      for (let i = N - 1; i >= 0; i--) {
        const delay = (N - 1 - i) * stagger;
        setTimeout(() => {
          if (!mounted) return;
          const el = partRefs.current[i];
          if (el) el.style.opacity = "0";
          if (el) el.style.transform = "translateY(2px)";
        }, delay);
      }

      const totalFadeOut = (N - 1) * stagger + fadeTransition;

      // Fade-in sequence (first -> last)
      setTimeout(() => {
        if (!mounted) return;
        for (let i = 0; i < N; i++) {
          const delay = i * stagger;
          setTimeout(() => {
            if (!mounted) return;
            const el = partRefs.current[i];
            if (el) el.style.opacity = "1";
            if (el) el.style.transform = "translateY(0)";
          }, delay);
        }
      }, totalFadeOut + pauseBetween);

      const totalFadeIn =
        totalFadeOut + pauseBetween + (N - 1) * stagger + fadeTransition;

      // After the whole sequence completes, hide the overlay
      setTimeout(() => {
        if (!mounted) return;
        setHiding(true);
        const transitionEndHandler = () => {
          if (!mounted) return;
          setVisible(false);
          onFinish?.(); // ← THIS tells the app loading is done
        };

        const overlayEl = overlayRef.current;
        if (overlayEl) {
          overlayEl.addEventListener("transitionend", transitionEndHandler, {
            once: true,
          });
        } else {
          setTimeout(() => {
            if (!mounted) return;
            setVisible(false);
            onFinish?.();
          }, 600);
        }
      }, totalFadeIn + 200);
    }, slideDuration + 30);

    return () => {
      mounted = false;
      clearTimeout(slideEndTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={overlayRef}
      className={`loader-overlay ${hiding ? "loader-overlay--hide" : ""}`}
      aria-hidden={false}
      role="status"
      aria-label="Loading"
    >
      <div className="loader-inner">
        <div ref={logoRef} className="logo" aria-hidden>
          <svg
            className="logo-svg"
            viewBox="0 0 500 120"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Brand logo"
          >
            {LETTERS.map((item, i) => {
              const x = i < 7 ? 40 + i * 45 : 40 + i * 48; // extra space between words
              return (
                <text
                  key={item.char + i}
                  ref={(el) => {
                    partRefs.current[i] = el;
                  }}
                  className="logo-part"
                  x={x}
                  y={80}
                  textAnchor="middle"
                  fill={item.color} // assign color
                  style={{ opacity: 1 }}
                >
                  {item.char}
                </text>
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Loader;
