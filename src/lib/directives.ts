import { Directive } from "vue";

// scroll animation

const animatedScrollObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("enter");
        animatedScrollObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.3,
  }
);

export const scrollAnimation: Directive<HTMLElement> = {
  mounted: (el) => {
    el.classList.add("before-enter");
    animatedScrollObserver.observe(el);
  },
};
