import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const navigationType = useNavigationType();

    useEffect(() => {
        // If the navigation is a PUSH (new page) or REPLACE, scroll to top.
        // If it's POP (back/forward button), do nothing and let the browser restore scroll position.
        if (navigationType !== "POP") {
            window.scrollTo(0, 0);
        }
    }, [pathname, navigationType]);

    return null;
};

export default ScrollToTop;
