gsap.registerPlugin(ScrollTrigger)

gsap.from(".cover img",{
scale:1.4,
scrollTrigger:{
trigger:".cover",
start:"top center",
end:"bottom center",
scrub:true
}
})

gsap.from(".story",{
y:100,
opacity:0,
stagger:0.2,
scrollTrigger:{
trigger:".stories",
start:"top 80%"
}
})
