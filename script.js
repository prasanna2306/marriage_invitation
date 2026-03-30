// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// 1. Hero Text Animation (Plays immediately on load)
gsap.from("#hero-text", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "power3.out",
    delay: 0.5
});

// 2. Blessings Section Animation (Plays on scroll)
gsap.from("#ganesha", {
    scrollTrigger: {
        trigger: ".blessings",
        start: "top 75%",
    },
    opacity: 0,
    scale: 0.5,
    duration: 1,
    ease: "back.out(1.7)"
});

gsap.from("#blessing-text", {
    scrollTrigger: {
        trigger: ".blessings",
        start: "top 60%",
    },
    opacity: 0,
    y: 30,
    duration: 1
});

// 3. Venue Card & Car Animation
gsap.from("#venue-card", {
    scrollTrigger: {
        trigger: ".venue",
        start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 1
});

// The car driving animation
gsap.to("#movingCar", {
    scrollTrigger: {
        trigger: ".venue",
        start: "top 60%", // Triggers when venue section is in view
    },
    x: "120vw", // Drives completely across the screen
    duration: 4,
    ease: "power1.inOut"
});