import { useEffect, useRef, useState } from "react";

export default function Coin() {
  const [rot, setRot] = useState(0);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const anchorX = rect.left + rect.width / 2;
      const anchorY = rect.top + rect.width / 2;

      setRot(Math.atan2(e.clientY - anchorY, e.clientX - anchorX));
    });
  }, []);

  return (
    <img
      ref={ref}
      src="coin.png"
      alt="Coin"
      className="w-60 h-60"
      style={{
        transform: `rotate(${rot + 0.15}rad)`,
      }}
    />
  );
}
