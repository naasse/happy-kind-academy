import { useEffect, useMemo, useState } from "react";
import { mobileWidthBreakpoint } from "../constants";

export function useMobile() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  const isMobile = useMemo(() => width < mobileWidthBreakpoint, [width]);

  return {
    isMobile,
  };
}
