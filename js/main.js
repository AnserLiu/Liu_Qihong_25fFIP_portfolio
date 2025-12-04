const video = document.querySelector("#opening");

    gsap.from("#menu", {
    opacity:0,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=600px top",
      end: "top+=900px top",
      scrub: true,
      markers: true
    }
  });

video.addEventListener("loadedmetadata", () => {

  gsap.to(video, {
    currentTime: video.duration,
    ease: "none",
    scrollTrigger: {
      trigger: timeline,
      start: "top top",
      end: "top+=900px top",
      scrub: true,
      markers: true
    }
  });

    gsap.to(video, {
    opacity:0,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=900px top",
      end: "top+=1200px top",
      scrub: true,
      markers: true
    }
  });


  });