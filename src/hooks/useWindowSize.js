import { breakpoints } from "utils/theme";
import { useState, useEffect } from "react";

export function useWindowSize() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  function update() {
    setIsMobile(window.innerWidth < +breakpoints.desktop - 0.02);
    setIsDesktop(window.innerWidth >= +breakpoints.desktop);
  }

  useEffect(() => {
    update();
    window.addEventListener("resize", update, false);

    return () => {
      window.removeEventListener("resize", update, false);
    };
  }, []);

  return { isDesktop, isMobile };
}
