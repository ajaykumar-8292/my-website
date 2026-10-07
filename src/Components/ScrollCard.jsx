import { useEffect, useRef, useState } from "react";

function ScrollCard({ children, direction = "bottom" }) {
  const cardRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  let hiddenPosition = "translate-y-24";

  if (direction === "left") {
    hiddenPosition = "-translate-x-32";
  }

  if (direction === "right") {
    hiddenPosition = "translate-x-32";
  }

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-1000 ease-out ${
        show
          ? "opacity-100 translate-x-0 translate-y-0"
          : `opacity-0 ${hiddenPosition}`
      }`}
    >
      {children}
    </div>
  );
}

export default ScrollCard;