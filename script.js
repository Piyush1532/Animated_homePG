gsap.to(".navbar,.text :is(span,h1,p,a),.grid-box >:is(.img,.box)",{
    duration:1,
    y:0,
    opacity:1,
stagger:.3
})

gsap.to(".text,.right-img,.content-box",{
   duration:1 ,
   opacity:1,
   stagger:1
})