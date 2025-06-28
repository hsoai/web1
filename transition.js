barba.init({
  transitions: [
    {
      name: "opacity-transition",
      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 0,
          y: -50,
          duration: 0.5,
          ease: "power2.out",
        });
      },
      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0,
          y: 50,
          duration: 0.5,
          ease: "power2.out",
        });
      },
    },
  ],
});

function animateSections() {
  const sections = document.querySelectorAll(".section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  sections.forEach((section) => {
    gsap.set(section, { opacity: 0, y: 50 });
    observer.observe(section);
  });
}

barba.hooks.afterEnter(() => {
  animateSections();
});

window.addEventListener("load", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  animateSections();
});

const scrollBtn = document.createElement("button");
scrollBtn.id = "scrollTopBtn";
scrollBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelectorAll("i.fas, i.fab").forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    gsap.to(icon, {
      scale: 1.2,
      rotate: 10,
      duration: 0.3,
      ease: "back.out(1.7)",
    });
  });
  icon.addEventListener("mouseleave", () => {
    gsap.to(icon, { scale: 1, rotate: 0, duration: 0.3, ease: "power2.inOut" });
  });
});
barba.init({
  transitions: [
    {
      name: "opacity-transition",
      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 0,
          y: -50,
          duration: 0.5,
          ease: "power2.out",
        });
      },
      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0,
          y: 50,
          duration: 0.5,
          ease: "power2.out",
        });
      },
    },
  ],
});

function animateSections() {
  const sections = document.querySelectorAll(".section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  sections.forEach((section) => {
    gsap.set(section, { opacity: 0, y: 50 });
    observer.observe(section);
  });
}

function animateIcons() {
  document.querySelectorAll("i.fas, i.fab").forEach((icon) => {
    icon.addEventListener("mouseenter", () => {
      gsap.to(icon, {
        scale: 1.2,
        rotate: 10,
        duration: 0.3,
        ease: "back.out(1.7)",
      });
    });
    icon.addEventListener("mouseleave", () => {
      gsap.to(icon, {
        scale: 1,
        rotate: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    });
  });
}

barba.hooks.afterEnter(() => {
  animateSections();
  animateIcons();
});

window.addEventListener("load", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  animateSections();
  animateIcons();
});

const scrollBtn = document.createElement("button");
scrollBtn.id = "scrollTopBtn";
scrollBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
