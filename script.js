gsap.to("#anim-1", {
  x: -1200,
  // Ce qui change par rapport à avant
  scrollTrigger: {
    trigger: "#anim-1",
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
    x: 500,
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

gsap.to("#wave-pink", {
  scrollTrigger: {
    trigger: "#animation-3",
    start: "top 10%",
    end: "bottom 80%",
    pin: true,
    markers: true,
    scrub: 0.5,
  },
});

const timelineplane = gsap.timeline({
  scrollTrigger: {
    trigger: "#plane",
    markers: false,
    // position des marqueurs
    start: "top 10%",
    end: "bottom 90%",
    // synchroniser avec le scroll
    scrub: 6,
  },
});
timelineplane.to(
  "#plane",
  {
    duration: 15,
    motionPath: {
      path: "#motionPath path",
      align: "#motionPath path",
      autoRotate: true,
      alignOrigin: [0.5, 0.5],
    },
    ease: "none",
  },
  0
);

// idée : h1 sort sur la gauche en 1er
// ensuite le texte en-dessous puis le bouton en dernier avec un délai différent de chacun
// photoshop la vague rose pour lui changer de couleur : faire img 1 --> que la rose / img2 --> zone blanche
