import { useEffect } from "react";

const ScrollEffects = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const menuLinks = document.querySelectorAll("header nav a");

    const onScroll = () => {
      let top = window.scrollY;

      sections.forEach((section) => {
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
          menuLinks.forEach((link) => link.classList.remove("active"));
          document
            .querySelector(`header nav a[href*="${id}"]`)
            ?.classList.add("active");
        }
      });
    };

    const reveal = () => {
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active");
        } else {
          element.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scroll", reveal, { passive: true });

    reveal(); // Initial check on mount

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", reveal);
    };
  }, []);

  return null; // This component only handles scroll effects
};

export default ScrollEffects;
