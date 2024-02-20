const TL = gsap.timeline()

TL.from('.hero-section h1', {
    duration:1,
    autoAlpha: 0,
    y:-100,
    ease: '"power4.out"',
    scale:0.5,
})

TL.from('#Propuesta h2', {
    duration:1,
    autoAlpha: 0,
    y:-100,
    ease: '"power4.out"',
    scale:0.5,
},'-=0.25')

TL.from('.propuesta-quote h3', {
    duration:1,
    autoAlpha: 0,
    y:-100,
    ease: '"power4.out"',
    scale:0.5,
},'-=0.50')



