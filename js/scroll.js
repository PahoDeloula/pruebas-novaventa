
gsap.from('#Inicio', {
    duration:1,
    autoAlpha: 0,
    y:100,
    scale:0.5,
    scrollTrigger: {
        trigger: "#Inicio",
        markers: false
    }
})

gsap.from('#Propuesta', {
    duration:1,
    autoAlpha: 0,
    y:100,
    scale:0.5,
    scrollTrigger: {
        trigger: "#Propuesta",
        markers: false
    }
})

gsap.from('.propuesta-quote', {
    duration:1,
    autoAlpha: 0,
    x:-2000,
    scrollTrigger: {
        trigger: ".propuesta-quote",
        markers: false
    }
})

gsap.from('#Productos', {
    duration:1,
    autoAlpha: 0,
    y:100,
    scale:0.5,
    scrollTrigger: {
        trigger: '#Productos',
        markers: false
    }
})

gsap.from('#Beneficios', {
    duration:1,
    autoAlpha: 0,
    y:100,
    scale:0.5,
    scrollTrigger: {
        trigger: "#Beneficios",
        markers: false
    }
})

gsap.from('#Contacto', {
    duration:1,
    autoAlpha: 0,
    y:100,
    scrollTrigger: {
        trigger: "#Contacto",
        markers: false,
    }
})

