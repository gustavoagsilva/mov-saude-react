import { useEffect } from "react";

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (!isIntersecting) return;
          target.classList.add("active");
          observer.unobserve(target);
        });
      },
      { rootMargin: "0px 0px -100px 0px", threshold: 0 },
    );

    elements.forEach((element, index) => {
      if (element.classList.contains("active")) return;
      element.style.transitionDelay = `${index * 0.1}s`;
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
}

export default useReveal;
