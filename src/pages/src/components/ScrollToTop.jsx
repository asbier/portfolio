import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scrollt das Fenster bei jedem URL-Wechsel nach ganz oben
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;