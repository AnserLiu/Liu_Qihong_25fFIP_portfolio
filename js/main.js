const video = document.querySelector("#opening");

    gsap.fromTo("#menu", {
    opacity:0,},{
    opacity:1,
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

    gsap.fromTo(video, {
    opacity:1,
    },{
    opacity:0,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=1200px top",
      end: "top+=1500px top",
      scrub: true,
      markers: true
    }
  });

 });
// project dscription
// kidkid

    gsap.fromTo("#project_preview", {
      x:340,},{
      x:0,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=1200px top",
      end: "top+=1500px top",
      scrub: true,
      markers: true
    }
  });

    gsap.fromTo("#kidkid_preview", {
      opacity:0.5,
      scale:1,},{
      opacity:1,
      scale:1.2,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=1350px top",
      end: "top+=1500px top",
      scrub: true,
      markers: true
    }
  });
// 
    gsap.fromTo("#kidkidProjectImg", {
    opacity:0,
    x:300,
    y:-100},{
      opacity:1,
      x:0,
      y:0,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=1200px top",
      end: "top+=1500px top",
      scrub: true,
      markers: true
    }
  });

    gsap.fromTo(["#kidkidProjectText","#kidkidProjectTitle","#kidkid_tool"], {
    opacity:0,
    x:-300,
    y:100},{
        opacity:1,
        x:0,
        y:0,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=1200px top",
      end: "top+=1500px top",
      scrub: true,
      markers: true
    }
  });

//   --------------------------------------

    gsap.fromTo("#kidkidProjectImg",{
    opacity:1,
    x:0,
    y:0} ,
    {
    opacity:0,
    x:-300,
    y:100,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=1800px top",
      end: "top+=2100px top",
      scrub: true,
      markers: true
    }
  });

    gsap.fromTo(["#kidkidProjectTitle","#kidkid_tool","#kidkidProjectText"],{
    opacity:1,
    x:0,
    y:0} ,
    {
    opacity:0,
    x:300,
    y:-100,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=1800px top",
      end: "top+=2100px top",
      scrub: true,
      markers: true
    }
  });
// 
    gsap.fromTo("#project_preview", {
      x:0,},{
      x:-170,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=1800px top",
      end: "top+=1950px top",
      scrub: true,
      markers: true
    }
  });

    gsap.fromTo("#kidkid_preview", {
      opacity:1,
      scale:1.2,},{
      opacity:0.5,
      scale:1,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=1800px top",
      end: "top+=1950px top",
      scrub: true,
      markers: true
    }
  });


// CFRoom

    gsap.fromTo("#project_preview", {
      x:-170,},{
      x:-340,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=1950px top",
      end: "top+=2100px top",
      scrub: true,
      markers: true
    }
  });

    gsap.fromTo("#CFRoom_preview", {
      opacity:0.5,
      scale:1,},{
      opacity:1,
      scale:1.2,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=1950px top",
      end: "top+=2100px top",
      scrub: true,
      markers: true
    }
  });
// 
    gsap.fromTo("#CFRoomProjectImg", {
    opacity:0,
    x:300,
    y:-100},{
      opacity:1,
      x:0,
      y:0,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=1800px top",
      end: "top+=2100px top",
      scrub: true,
      markers: true
    }
  });

    gsap.fromTo(["#CFRoomProjectText","#CFRoomProjectTitle","#CFRoom_tool"], {
    opacity:0,
    x:-300,
    y:100},{
        opacity:1,
        x:0,
        y:0,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=1800px top",
      end: "top+=2100px top",
      scrub: true,
      markers: true
    }
  });

//   --------------------------------------

    gsap.fromTo("#CFRoomProjectImg",{
    opacity:1,
    x:0,
    y:0} ,
    {
    opacity:0,
    x:-300,
    y:100,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=2400px top",
      end: "top+=2700px top",
      scrub: true,
      markers: true
    }
  });

    gsap.fromTo(["#CFRoomProjectTitle","#CFRoom_tool","#CFRoomProjectText"],{
    opacity:1,
    x:0,
    y:0} ,
    {
    opacity:0,
    x:300,
    y:-100,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=2400px top",
      end: "top+=2700px top",
      scrub: true,
      markers: true
    }
  });
// 
    gsap.fromTo("#project_preview", {
      x:-340,},{
      x:-510,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=2400px top",
      end: "top+=2550px top",
      scrub: true,
      markers: true
    }
  });

    gsap.fromTo("#CFRoom_preview", {
      opacity:1,
      scale:1.2,},{
      opacity:0.5,
      scale:1,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=2400px top",
      end: "top+=2550px top",
      scrub: true,
      markers: true
    }
  });

// YY

    gsap.fromTo("#project_preview", {
      x:-510,},{
      x:-680,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=2550px top",
      end: "top+=2700px top",
      scrub: true,
      markers: true
    }
  });

    gsap.fromTo("#YY_preview", {
      opacity:0.5,
      scale:1,},{
      opacity:1,
      scale:1.2,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=2550px top",
      end: "top+=2700px top",
      scrub: true,
      markers: true
    }
  });
// 
    gsap.fromTo("#YYProjectImg", {
    opacity:0,
    x:300,
    y:-100},{
      opacity:1,
      x:0,
      y:0,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=2400px top",
      end: "top+=2700px top",
      scrub: true,
      markers: true
    }
  });

    gsap.fromTo(["#YYProjectText","#YYProjectTitle","#YY_tool"], {
    opacity:0,
    x:-300,
    y:100},{
        opacity:1,
        x:0,
        y:0,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=2400px top",
      end: "top+=2700px top",
      scrub: true,
      markers: true
    }
  });

//   --------------------------------------

    gsap.fromTo("#YYProjectImg",{
    opacity:1,
    x:0,
    y:0,} ,
    {
    opacity:0,
    x:-300,
    y:100,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=3000px top",
      end: "top+=3300px top",
      scrub: true,
      markers: true
    }
  });

    gsap.fromTo(["#YYProjectTitle","#YY_tool","#YYProjectText"],{
    opacity:1,
    x:0,
    y:0,} ,
    {
    opacity:0,
    x:300,
    y:-100,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=3000px top",
      end: "top+=3300px top",
      scrub: true,
      markers: true
    }
  });
// 
    gsap.fromTo("#project_preview", {
      x:-680,},{
      x:-850,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=3000px top",
      end: "top+=3150px top",
      scrub: true,
      markers: true
    }
  });

    gsap.fromTo("#YY_preview", {
      opacity:1,
      scale:1.2,},{
      opacity:0.5,
      scale:1,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=3000px top",
      end: "top+=3150px top",
      scrub: true,
      markers: true
    }
  });

// obz

    gsap.fromTo("#project_preview", {
      x:-850,},{
      x:-1020,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=3150px top",
      end: "top+=3300px top",
      scrub: true,
      markers: true
    }
  });

    gsap.fromTo("#obz_preview", {
      opacity:0.5,
      scale:1,},{
      opacity:1,
      scale:1.2,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=3150px top",
      end: "top+=3300px top",
      scrub: true,
      markers: true
    }
  });
// 
    gsap.fromTo("#obzProjectImg", {
    opacity:0,
    x:300,
    y:-100},{
      opacity:1,
      x:0,
      y:0,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=3000px top",
      end: "top+=3300px top",
      scrub: true,
      markers: true
    }
  });

    gsap.fromTo(["#obzProjectText","#obzProjectTitle","#obz_tool"], {
    opacity:0,
    x:-300,
    y:100},{
        opacity:1,
        x:0,
        y:0,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=3000px top",
      end: "top+=3300px top",
      scrub: true,
      markers: true
    }
  });

//   --------------------------------------

    gsap.fromTo("#obzProjectImg",{
    opacity:1,
    x:0,
    y:0,} ,
    {
    opacity:0,
    x:300,
    y:-100,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=3600px top",
      end: "top+=3900px top",
      scrub: true,
      markers: true
    }
  });

    gsap.fromTo(["#obzProjectTitle","#obz_tool","#obzProjectText"],{
    opacity:1,
    x:0,
    y:0,} ,
    {
    opacity:0,
    x:300,
    y:-100,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=3600px top",
      end: "top+=3900px top",
      scrub: true,
      markers: true
    }
  });
// 
    gsap.fromTo("#project_preview", {
      x:-1020,},{
      x:-1190,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=3600px top",
      end: "top+=3750px top",
      scrub: true,
      markers: true
    }
  });

    gsap.fromTo("#obz_preview", {
      opacity:1,
      scale:1.2,},{
      opacity:0.5,
      scale:1,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=3600px top",
      end: "top+=3750px top",
      scrub: true,
      markers: true
    }
  });

// CC

    gsap.fromTo("#project_preview", {
      x:-1190,},{
      x:-1360,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=3750px top",
      end: "top+=3900px top",
      scrub: true,
      markers: true
    }
  });

    gsap.fromTo("#CC_preview", {
      opacity:0.5,
      scale:1,},{
      opacity:1,
      scale:1.2,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=3750px top",
      end: "top+=3900px top",
      scrub: true,
      markers: true
    }
  });
// 
    gsap.fromTo("#CCProjectImg", {
    opacity:0,
    x:300,
    y:-100},{
      opacity:1,
      x:0,
      y:0,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=3600px top",
      end: "top+=3900px top",
      scrub: true,
      markers: true
    }
  });

    gsap.fromTo(["#CCProjectText","#CCProjectTitle","#CC_tool"], {
    opacity:0,
    x:-300,
    y:100},{
        opacity:1,
        x:0,
        y:0,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=3600px top",
      end: "top+=3900px top",
      scrub: true,
      markers: true
    }
  });

//   --------------------------------------

    gsap.fromTo("#CCProjectImg",{
    opacity:1,
    x:0,
    y:0,} ,
    {
    opacity:0,
    x:-300,
    y:100,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=4200px top",
      end: "top+=4500px top",
      scrub: true,
      markers: true
    }
  });

    gsap.fromTo(["#CCProjectTitle","#CC_tool","#CCProjectText"],{
    opacity:1,
    x:0,
    y:0,} ,
    {
    opacity:0,
    x:300,
    y:-100,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=4200px top",
      end: "top+=4500px top",
      scrub: true,
      markers: true
    }
  });
// 
    gsap.fromTo("#project_preview", {
      x:-1020,},{
      x:-1190,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=4200px top",
      end: "top+=4350px top",
      scrub: true,
      markers: true
    }
  });

    gsap.fromTo("#CC_preview", {
      opacity:1,
      scale:1.2,},{
      opacity:0.5,
      scale:1,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=4200px top",
      end: "top+=4350px top",
      scrub: true,
      markers: true
    }
  });





document.querySelector("#menu-home")
  .addEventListener("click", () =>
    gsap.to(window, {
      duration: 1,
      scrollTo: timeline.offsetTop + 900,
      ease: "power2.out"
    })
  );

document.querySelector("#menu-project")
  .addEventListener("click", () =>
    gsap.to(window, {
      duration: 1,
      scrollTo: timeline.offsetTop + 1500,
      ease: "power2.out"
    })
  );








document.querySelector("#kidkid_preview img")
  .addEventListener("click", () =>
    gsap.to(window, {
      duration: 1,
      scrollTo: timeline.offsetTop + 1500,
      ease: "power2.out"
    })
  );

document.querySelector("#CFRoom_preview img")
  .addEventListener("click", () =>
    gsap.to(window, {
      duration: 1,
      scrollTo: timeline.offsetTop + 2100,
      ease: "power2.out"
    })
  );

document.querySelector("#YY_preview img")
  .addEventListener("click", () =>
    gsap.to(window, {
      duration: 1,
      scrollTo: timeline.offsetTop + 2700,
      ease: "power2.out"
    })
  );

document.querySelector("#obz_preview img")
  .addEventListener("click", () =>
    gsap.to(window, {
      duration: 1,
      scrollTo: timeline.offsetTop + 3300,
      ease: "power2.out"
    })
  );

document.querySelector("#CC_preview img")
  .addEventListener("click", () =>
    gsap.to(window, {
      duration: 1,
      scrollTo: timeline.offsetTop + 3900,
      ease: "power2.out"
    })
  );


window.addEventListener("load", () => {

  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "auto" 
  });

  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto"
    });
  }, 30);

});