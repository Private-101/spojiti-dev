import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { useEnhancedEffect } from "~/hooks";

export default function useScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}