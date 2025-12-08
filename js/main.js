console.log("js connected")

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
      opacity:0,
      x:340,},{
      opacity:1,
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
    x:-300,
    y:100,},{
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

    gsap.fromTo(["#kidkidProjectText","#kidkidProjectTitle","#kidkid_tool","#kidkid_to_detail"], {
    opacity:0,
    x:300,
    y:-100,},{
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

    gsap.fromTo(["#kidkidProjectTitle","#kidkid_tool","#kidkidProjectText","#kidkid_to_detail"],{
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
    x:-300,
    y:100,},{
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

    gsap.fromTo(["#CFRoomProjectText","#CFRoomProjectTitle","#CFRoom_tool","#CFRoom_to_detail"], {
    opacity:0,
    x:300,
    y:-100,},{
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

    gsap.fromTo(["#CFRoomProjectTitle","#CFRoom_tool","#CFRoomProjectText","#CFRoom_to_detail"],{
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
    x:-300,
    y:100,},{
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

    gsap.fromTo(["#YYProjectText","#YYProjectTitle","#YY_tool","#YY_to_detail"], {
    opacity:0,
    x:300,
    y:-100,},{
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

    gsap.fromTo(["#YYProjectTitle","#YY_tool","#YYProjectText","#YY_to_detail"],{
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
    x:-300,
    y:100,},{
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

    gsap.fromTo(["#obzProjectText","#obzProjectTitle","#obz_tool","#obz_to_detail"], {
    opacity:0,
    x:300,
    y:-100,},{
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

    gsap.fromTo(["#obzProjectTitle","#obz_tool","#obzProjectText","#obz_to_detail"],{
    opacity:1,
    x:0,
    y:0,} ,
    {
    opacity:0,
    x:-300,
    y:100,
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
    x:-300,
    y:100,},{
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

    gsap.fromTo(["#CCProjectText","#CCProjectTitle","#CC_tool","#CC_to_detail"], {
    opacity:0,
    x:300,
    y:-100,},{
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

    gsap.fromTo(["#CCProjectTitle","#CC_tool","#CCProjectText","#CC_to_detail"],{
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
// 
    gsap.fromTo("#project_preview", {
      opacity:1,
      x:-1360,},{
      opacity:0,
      x:-1700,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=4200px top",
      end: "top+=4500px top",
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

    gsap.fromTo(".mask", {
      opacity:1,},{
      opacity:0,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=4500px top",
      end: "top+=4500px top",
      scrub: true,
      markers: true
    }
  });











    gsap.fromTo(["#who_am_i_title","#who_am_i_text"],{
    opacity:0,
    x:100,
    y:-300,} ,
    {
    opacity:1,
    x:0,
    y:0,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=4200px top",
      end: "top+=4500px top",
      scrub: true,
      markers: true
    }
  });

    gsap.fromTo(["#hobby_title","#hobby_text"],{
    opacity:0,
    x:-300,} ,
    {
    opacity:1,
    x:0,
    y:0,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=4200px top",
      end: "top+=4500px top",
      scrub: true,
      markers: true
    }
  });

    gsap.fromTo(["#skillset_title","#skillset_text"],{
    opacity:0,
    x:100,
    y:300,} ,
    {
    opacity:1,
    x:0,
    y:0,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=4200px top",
      end: "top+=4500px top",
      scrub: true,
      markers: true
    }
  });




    gsap.fromTo("#logo_L_left",{
    opacity:0,
    x:-100,
    y:300,} ,
    {
    opacity:1,
    x:0,
    y:0,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=4200px top",
      end: "top+=4500px top",
      scrub: true,
      markers: true
    }
  });

    gsap.fromTo("#logo_L_bottom",{
    opacity:0,
    x:300,} ,
    {
    opacity:1,
    x:0,
    y:0,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=4200px top",
      end: "top+=4500px top",
      scrub: true,
      markers: true
    }
  });

    gsap.fromTo("#logo_A_slash",{
    opacity:0,
    x:-100,
    y:-300,} ,
    {
    opacity:1,
    x:0,
    y:0,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=4200px top",
      end: "top+=4500px top",
      scrub: true,
      markers: true
    }
  });

    gsap.fromTo("#logo_A_dash",{
    opacity:0,
    x:-300,} ,
    {
    opacity:1,
    x:0,
    y:0,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=4200px top",
      end: "top+=4500px top",
      scrub: true,
      markers: true
    }
  });






    gsap.fromTo("#logo_L_left",{
    scale:1,
    x:0,
    y:"0vh",
    rotation:0,} ,
    {
    scale:0.3,
    x:0,
    y:"-27vh",
    rotation:180,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=4800px top",
      end: "top+=5100px top",
      scrub: true,
      markers: true
    }
  });

    gsap.fromTo("#logo_L_bottom",{
    scale:1,
    x:0,
    y:"0vh",
    rotation:0,} ,
    {
    scale:0.3,
    x:0,
    y:"-27vh",
    rotation:180,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=4800px top",
      end: "top+=5100px top",
      scrub: true,
      markers: true
    }
  });

    gsap.fromTo("#logo_A_slash",{
    scale:1,
    x:0,
    y:"0vh",
    rotation:0,} ,
    {
    scale:0.3,
    x:0,
    y:"-27vh",
    rotation:180,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=4800px top",
      end: "top+=5100px top",
      scrub: true,
      markers: true
    }
  });

    gsap.fromTo("#logo_A_dash",{
    scale:1,
    x:0,
    y:"0vh",
    rotation:0,} ,
    {
    scale:0.3,
    x:0,
    y:"-27vh",
    rotation:180,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=4800px top",
      end: "top+=5100px top",
      scrub: true,
      markers: true
    }
  });





    gsap.fromTo(["#who_am_i_title","#who_am_i_text"],{
    opacity:1,
    x:0,
    y:0,} ,
    {
    opacity:0,
    x:-100,
    y:300,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=4800px top",
      end: "top+=5100px top",
      scrub: true,
      markers: true
    }
  });

    gsap.fromTo(["#hobby_title","#hobby_text"],{
    opacity:1,
    x:0,
    y:0,} ,
    {
    opacity:0,
    x:300,
    y:0,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=4800px top",
      end: "top+=5100px top",
      scrub: true,
      markers: true
    }
  });

    gsap.fromTo(["#skillset_title","#skillset_text"],{
    opacity:1,
    x:0,
    y:0,} ,
    {
    opacity:0,
    x:-100,
    y:-300,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=4800px top",
      end: "top+=5100px top",
      scrub: true,
      markers: true
    }
  });





    gsap.fromTo("#contact_section",{
    opacity:0,
    x:0,
    y:-200,} ,
    {
    opacity:1,
    x:0,
    y:0,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=4800px top",
      end: "top+=5100px top",
      scrub: true,
      markers: true
    }
  });


    gsap.fromTo("#contact_section",{
    opacity:1,
    x:0,
    y:0,} ,
    {
    opacity:0,
    x:0,
    y:-200,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=5400px top",
      end: "top+=5550px top",
      scrub: true,
      markers: true
    }
  });
















    gsap.fromTo("#logo_L_left",{
    scale:0.3,
    x:0,
    y:"-27vh",
    rotation:180,
    opacity:1,
    } ,
    {
    opacity:0,
    scale:0.6,
    x:-33,
    y:"-19vh",
    rotation:180,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=5400px top",
      end: "top+=5550px top",
      scrub: true,
      markers: true
    }
  });

    gsap.fromTo("#logo_L_bottom",{
    scale:0.3,
    x:0,
    y:"-27vh",
    rotation:180,
    opacity:1,
    } ,
    {
    opacity:0,
    scale:0.6,
    x:100,
    y:"-27vh",
    rotation:180,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=5400px top",
      end: "top+=5550px top",
      scrub: true,
      markers: true
    }
  });

    gsap.fromTo("#logo_A_slash",{
    scale:0.3,
    x:0,
    y:"-27vh",
    rotation:180,
    opacity:1,
    } ,
    {
    opacity:0,
    scale:0.6,
    x:-33,
    y:"-35vh",
    rotation:180,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=5400px top",
      end: "top+=5550px top",
      scrub: true,
      markers: true
    }
  });

    gsap.fromTo("#logo_A_dash",{
    scale:0.3,
    x:0,
    y:"-27vh",
    rotation:180,
    opacity:1,
    } ,
    {
    opacity:0,
    scale:0.6,
    x:-33,
    y:"-27vh",
    rotation:180,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=5400px top",
      end: "top+=5550px top",
      scrub: true,
      markers: true
    }
  });








    gsap.fromTo("#logo_L_left",{
    scale:0.6,
    x:100,
    y:-300,
    rotation:0,
    opacity:0,
    } ,
    {
    opacity:1,
    scale:1,
    x:0,
    y:0,
    rotation:0,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=5550px top",
      end: "top+=5700px top",
      scrub: true,
      markers: true
    }
  });

    gsap.fromTo("#logo_L_bottom",{
    scale:0.6,
    x:-300,
    y:0,
    rotation:0,
    opacity:0,
    } ,
    {
    opacity:1,
    scale:1,
    x:0,
    y:0,
    rotation:0,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=5550px top",
      end: "top+=5700px top",
      scrub: true,
      markers: true
    }
  });

    gsap.fromTo("#logo_A_slash",{
    scale:0.6,
    x:100,
    y:300,
    rotation:0,
    opacity:0,
    } ,
    {
    opacity:1,
    scale:1,
    x:0,
    y:0,
    rotation:0,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=5550px top",
      end: "top+=5700px top",
      scrub: true,
      markers: true
    }
  });

    gsap.fromTo("#logo_A_dash",{
    scale:0.6,
    x:300,
    y:0,
    rotation:0,
    opacity:0,
    } ,
    {
    opacity:1,
    scale:1,
    x:0,
    y:0,
    rotation:0,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=5550px top",
      end: "top+=5700px top",
      scrub: true,
      markers: true
    }
  });


















  
    gsap.fromTo("#menu", {
    opacity:1,},{
    opacity:0,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=5400px top",
      end: "top+=5700px top",
      scrub: true,
      markers: true
    }
  });

    gsap.fromTo("#foot_menu", {
    opacity:0,
    x:-100},{
    opacity:1,
    x:0,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=5550px top",
      end: "top+=5700px top",
      scrub: true,
      markers: true
    }
  });

    gsap.fromTo("footer p", {
    opacity:0,
    x:100},{
    opacity:1,
    x:0,
    scrollTrigger: {
      trigger: timeline,
      start: "top+=5550px top",
      end: "top+=5700px top",
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
      scrollTo: timeline.offsetTop + 1501,
      ease: "power2.out"
    })
  );

document.querySelector("#menu-about")
  .addEventListener("click", () =>
    gsap.to(window, {
      duration: 1,
      scrollTo: timeline.offsetTop + 4600,
      ease: "power2.out"
    })
  );

document.querySelector("#menu-contact")
  .addEventListener("click", () =>
    gsap.to(window, {
      duration: 1,
      scrollTo: timeline.offsetTop + 5101,
      ease: "power2.out"
    })
  );



document.querySelector("#f-menu-home")
  .addEventListener("click", () =>
    gsap.to(window, {
      duration: 1,
      scrollTo: timeline.offsetTop + 900,
      ease: "power2.out"
    })
  );

document.querySelector("#f-menu-project")
  .addEventListener("click", () =>
    gsap.to(window, {
      duration: 1,
      scrollTo: timeline.offsetTop + 1501,
      ease: "power2.out"
    })
  );

document.querySelector("#f-menu-about")
  .addEventListener("click", () =>
    gsap.to(window, {
      duration: 1,
      scrollTo: timeline.offsetTop + 4600,
      ease: "power2.out"
    })
  );

document.querySelector("#f-menu-contact")
  .addEventListener("click", () =>
    gsap.to(window, {
      duration: 1,
      scrollTo: timeline.offsetTop + 5101,
      ease: "power2.out"
    })
  );





document.querySelector("#kidkid_preview img")
  .addEventListener("click", () =>
    gsap.to(window, {
      duration: 1,
      scrollTo: timeline.offsetTop + 1799,
      ease: "power2.out"
    })
  );

document.querySelector("#CFRoom_preview img")
  .addEventListener("click", () =>
    gsap.to(window, {
      duration: 1,
      scrollTo: timeline.offsetTop + 2399,
      ease: "power2.out"
    })
  );

document.querySelector("#YY_preview img")
  .addEventListener("click", () =>
    gsap.to(window, {
      duration: 1,
      scrollTo: timeline.offsetTop + 2999,
      ease: "power2.out"
    })
  );

document.querySelector("#obz_preview img")
  .addEventListener("click", () =>
    gsap.to(window, {
      duration: 1,
      scrollTo: timeline.offsetTop + 3599,
      ease: "power2.out"
    })
  );

document.querySelector("#CC_preview img")
  .addEventListener("click", () =>
    gsap.to(window, {
      duration: 1,
      scrollTo: timeline.offsetTop + 4199,
      ease: "power2.out"
    })
  );





const send = document.querySelector("#send");

// hover in
send.addEventListener("mouseenter", () => {
  gsap.to(send, {
    scale: 1.2,
    duration: 0.3,
    ease: "power2.out"
  });
});

// hover out
send.addEventListener("mouseleave", () => {
  gsap.to(send, {
    scale: 1,
    duration: 0.3,
    opacity:1,
    ease: "power2.inOut"
  });
});

// click (press)
send.addEventListener("mousedown", () => {
  gsap.to(send, {
    scale: 0.8,
    duration: 0.3,
    opacity:0.5,
  });
});

// release
send.addEventListener("mouseup", () => {
  gsap.to(send, {
    scale: 1.2,
    duration: 0.3,
    opacity:1,
  });
});












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