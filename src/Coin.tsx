import { useEffect, useRef, useState } from "react";

type Props = {
  onGoldChange?: (gold: boolean) => void;
};

export default function Coin({ onGoldChange }: Props) {
  const [rot, setRot] = useState(0);
  const [golden, setGolden] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const anchorX = rect.left + rect.width / 2;
      const anchorY = rect.top + rect.width / 2;

      setRot(Math.atan2(e.clientY - anchorY, e.clientX - anchorX));
    });

    const g = localStorage.getItem("golden");
    if (g !== null) {
      try {
        const activated = JSON.parse(g)
        onGoldChange?.(activated);
        setGolden(activated);
      } catch {}
    }
  }, [onGoldChange]);

  return (
    <img
      ref={ref}
      src={golden ? "goldcoin.png" : "coin.png"}
      alt="Coin"
      className="w-60 h-60 hidden xl:block"
      style={{
        transform: `rotate(${rot + 0.15}rad)`,
      }}
      onClick={() => {
        onGoldChange?.(!golden);
        localStorage.setItem("golden", JSON.stringify(!golden));
        setGolden(!golden);
      }}
    />
  );
}
