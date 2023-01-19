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
    start: "top 10%",
    end: "bottom 100%",
    // synchroniser avec le scroll
    scrub: 4.5,
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
  delay: 3,
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
    opacity: 1,
  },
  {
    opacity: 0,
    scrollTrigger: {
      trigger: ".test",
      start: "top 20%",
      end: "bottom 45%",
      pin: true,
      markers: true,
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
  delay: 0.2,
  autoAlpha: 1,
  duration: 4,
  scrollTrigger: {
    markers: false,
    trigger: "#music",
    start: "top 10%",
    end: "bottom 100%",
  },
});

gsap.to(".photo-2", {
  delay: 0.3,
  autoAlpha: 1,
  duration: 4,
  scrollTrigger: {
    markers: false,
    trigger: "#music",
    start: "top 10%",
    end: "bottom 100%",
  },
});

gsap.to(".photo-3", {
  delay: 0.4,
  autoAlpha: 1,
  duration: 4,
  scrollTrigger: {
    markers: false,
    trigger: "#music",
    start: "top 10%",
    end: "bottom 100%",
  },
});

gsap.to(".photo-4", {
  delay: 0.9,
  autoAlpha: 1,
  duration: 4,
  scrollTrigger: {
    markers: false,
    trigger: "#music",
    start: "top 10%",
    end: "bottom 100%",
  },
});

gsap.to(".photo-5", {
  delay: 1,
  autoAlpha: 1,
  scrollTrigger: {
    markers: false,
    trigger: "#music",
    start: "top 10%",
    end: "bottom 100%",
  },
});

gsap.to(".photo-6", {
  delay: 1.1,
  autoAlpha: 1,
  duration: 4,
  scrollTrigger: {
    markers: false,
    trigger: "#music",
    start: "top 10%",
    end: "bottom 100%",
  },
});

gsap.to(".photo-7", {
  delay: 1.6,
  autoAlpha: 1,
  duration: 4,
  scrollTrigger: {
    markers: false,
    trigger: "#music",
    start: "top 10%",
    end: "bottom 100%",
  },
});

gsap.to(".photo-8", {
  delay: 1.7,
  autoAlpha: 1,
  duration: 4,
  scrollTrigger: {
    markers: false,
    trigger: "#music",
    start: "top 10%",
    end: "bottom 100%",
  },
});

gsap.to(".photo-9", {
  delay: 1.8,
  autoAlpha: 1,
  duration: 4,
  scrollTrigger: {
    markers: false,
    trigger: ".grid",
    start: "top 10%",
    end: "bottom 100%",
  },
});

// ------------------ section couleur ------------------

// gsap.to(".test", {
//   backgroundColor: "#bfebf3",
//   scrollTrigger: {
//     trigger: ".test",
//     // afficher les marqueurs de ScrollTrigger
//     // utile pour débugger

//     // position des marqueurs
//     markers: false,
//     start: "top 30%",
//     end: "bottom 50%",
//     scrub: 1,
//   },
// });
