import { useEffect, useState } from "react";

export default function useGolden() {
  const [golden, setGolden] = useState(false);

  useEffect(() => {
    const g = localStorage.getItem("golden");
    if (g !== null) {
      try {
        setGolden(JSON.parse(g));
      } catch {}
    }
  }, []);

  return golden
}
