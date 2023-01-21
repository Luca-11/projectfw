// --------------------Titre et extra--------------------

gsap.to("#title-animation", {
  delay: 1,
  x: -1200,
  // Ce qui change par rapport à avant
  scrollTrigger: {
    trigger: "#animation-1",
    // afficher les marqueurs de ScrollTrigger
    // utile pour débugger
    markers: false,
    // position des marqueurs
    start: "top 5%",
    end: "bottom 20%",
    // synchroniser avec le scroll
    scrub: 1,
  },
});

gsap.to("#subtext", {
  x: -1200,
  delay: 2,
  // Ce qui change par rapport à avant
  scrollTrigger: {
    trigger: "#animation-1",
    // afficher les marqueurs de ScrollTrigger
    // utile pour débugger
    markers: false,
    // position des marqueurs
    start: "top 10%",
    end: "bottom 100%",
    // synchroniser avec le scroll
    scrub: 4.5,
  },
});

gsap.to("#try", {
  x: -1200,
  delay: 2.5,
  // Ce qui change par rapport à avant
  scrollTrigger: {
    trigger: "#animation-1",
    // afficher les marqueurs de ScrollTrigger
    // utile pour débugger
    markers: false,
    // position des marqueurs
    start: "top 10%",
    end: "bottom 100%",
    // synchroniser avec le scroll
    scrub: 4.5,
  },
});

// ------------------- Animation - Actu ---------------------

gsap.fromTo(
  "#news-animation",
  {
    opacity: 0,
    y: 100,
  },
  {
    y: 0,
    duration: 1,
    opacity: 1,
    delay: 1,
  }
);

// ----------------- Animation lateral -----------------

gsap.fromTo(
  "#pink",
  {
    x: -600,
  },
  {
    x: 0,
    // Ce qui change par rapport à avant
    scrollTrigger: {
      trigger: "#pink",
      // afficher les marqueurs de ScrollTrigger
      // utile pour débugger
      // position des marqueurs
      markers: false,
      start: "top 30%",
      end: "bottom 50%",
      // synchroniser avec le scroll
      scrub: 1,
    },
  }
);

gsap.fromTo(
  "#text-animation",
  {
    x: 600,
  },
  {
    x: 0,
    scrollTrigger: {
      trigger: "#text-animation",

      markers: false,

      start: "top 30%",
      end: "bottom 50%",

      scrub: 1,
    },
  }
);

// ----------------- Animation best-text --------------------

gsap.fromTo(
  "#best",
  {
    y: -1500,
  },
  {
    y: 0,
    scrollTrigger: {
      trigger: "#animation-2",
      start: "top 35%",
      end: "bottom 45%",
      scrub: 1,
    },
  }
);

// ----------- PIN wave-rose ----------------

gsap.fromTo(
  ".wave-pink",
  {
    scale: 1,
    opacity: 1,
  },
  {
    scale: 2,
    opacity: 0,
    scrollTrigger: {
      trigger: ".test",
      start: "top 20%",
      end: "bottom 45%",
      pin: true,
      markers: false,
      scrub: 1,
    },
  }
);

gsap.fromTo(
  ".wave-blue",
  {
    opacity: 0,
  },
  {
    autoAlpha: 1,
    scrollTrigger: {
      trigger: ".test",
      start: "top 20%",
      end: "bottom 45%",
      pin: true,
      scrub: 1,
    },
  }
);

gsap.fromTo(
  ".wave-blue-black",
  {
    y: 1000,
  },
  {
    y: -1300,
    scrollTrigger: {
      trigger: "#title-animation",
      start: "top 0%",
      end: "bottom 10%",
      markers: false,
      scrub: 1,
    },
  }
);

// ------------------ Animation photos + chemin -------------------

// ----------Chemin-------------

gsap.to("#music", {
  duration: 10,
  scale: 0.5,
  opacity: 0,
  motionPath: {
    path: "#motionPath path",
    align: "#motionPath path",
    autoRotate: true,
    alignOrigin: [0.5, 0.5],
  },
  ease: "none",
  scrollTrigger: {
    trigger: ".grid",
    markers: false,
    start: "top 50%",
    end: "bottom 10%",
    scrub: 3,
  },
});

// ------------- Photos -----------------

gsap.to(".photo-1", {
  delay: 2,
  autoAlpha: 1,
  duration: 2,
  scrollTrigger: {
    markers: false,
    trigger: ".photo-3",
    start: "top 18%",
    end: "bottom 0%",
    scrub: 1,
  },
});

gsap.to(".photo-2", {
  delay: 4,
  autoAlpha: 1,
  duration: 4,
  scrollTrigger: {
    markers: false,
    trigger: ".photo-3",
    start: "top 18%",
    end: "bottom 0%",
    scrub: 1,
  },
});

gsap.to(".photo-3", {
  delay: 6,
  autoAlpha: 1,
  duration: 6,
  scrollTrigger: {
    markers: false,
    trigger: ".photo-3",
    start: "top 18%",
    end: "bottom 0%",
    scrub: 1,
  },
});

gsap.to(".photo-4", {
  delay: 8,
  autoAlpha: 1,
  duration: 8,
  scrollTrigger: {
    markers: false,
    trigger: ".photo-6",
    start: "top 7%",
    end: "bottom 0%",
    scrub: 1,
  },
});

gsap.to(".photo-5", {
  delay: 10,
  autoAlpha: 1,
  duration: 10,
  scrollTrigger: {
    markers: false,
    trigger: ".photo-6",
    start: "top 7%",
    end: "bottom 0%",
    scrub: 1,
  },
});

gsap.to(".photo-6", {
  delay: 12,
  autoAlpha: 1,
  duration: 12,
  scrollTrigger: {
    markers: false,
    trigger: ".photo-6",
    start: "top 7%",
    end: "bottom 0%",
    scrub: 1,
  },
});

gsap.to(".photo-7", {
  delay: 14,
  autoAlpha: 1,
  duration: 14,
  scrollTrigger: {
    markers: false,
    trigger: ".plus",
    start: "top 10%",
    end: "bottom 0%",
    scrub: 1,
  },
});

gsap.to(".photo-8", {
  delay: 16,
  autoAlpha: 1,
  duration: 16,
  scrollTrigger: {
    markers: false,
    trigger: ".plus",
    start: "top 10%",
    end: "bottom 0%",
    scrub: 1,
  },
});

gsap.to(".photo-9", {
  delay: 18,
  autoAlpha: 1,
  duration: 18,
  scrollTrigger: {
    markers: false,
    trigger: ".plus",
    start: "top 10%",
    end: "bottom 0%",
    scrub: 1,
  },
});
