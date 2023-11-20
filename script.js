var tl = gsap.timeline();

tl.to("#fs",{
    height:0,
    duration:2,
    ease:Expo.easeInOut
})

tl.to("#elem",{
    height:"100%",
    duration:2,
    delay:-2,
    ease:Expo.easeInOut
})

tl.to("#white",{
    height:"100%",
    duration:2,
    delay:-1.6,
    ease:Expo.easeInOut
})