import { useEffect } from "react";

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    function revealOnScroll() {
      const windowHeight = window.innerHeight;
      elements.forEach((el, index) => {
        const elementTop = el.getBoundingClientRect().top;
        const elementBottom = el.getBoundingClientRect().bottom;
        if (elementTop < windowHeight - 100 && elementBottom > 0) {
          el.style.transitionDelay = `${index * 0.1}s`;
          el.classList.add("active");
        } else {
          el.classList.remove("remove");
        }
      });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => {
      window.removeEventListener("scroll", revealOnScroll);
    };
  }, []);
}

export default useReveal;
