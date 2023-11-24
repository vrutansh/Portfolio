function Revealtospan(){
    document.querySelectorAll(".reveal")
.forEach(function(elem){
    //create two spans
     var p = document.createElement("span");
     var c = document.createElement("span");

     //parent and child set their respective classes

     p.classList.add("parent")
     c.classList.add("child")

     //span parent gets child and child gets elem info
     c.innerHTML = elem.innerHTML;
     p.appendChild(c)

     // elem replaces its value with p span
     elem.innerHTML = "";
     elem.appendChild(p)
});
}
Revealtospan()

function value(){
    gsap.set("#nav a", {y : "-100%", opacity: 0 })
    gsap.set("#home span .child", {y: "100%"})
    gsap.set("#home .row img ", {opacity: 0})

}
value()

function loader(){
    var tl = gsap.timeline();

tl
.from(" #loader .child span",{
    x: 100,
    stagger:.2,
    duration: 1.4,
    ease: Power3.easeInOut
})

.to(" #loader .parent .child",{
    y: "-100%",
    duration: 1,
    ease: Circ.easeInOut
})

.to("#loader",{
    height: 0,
    duration: 1,
    ease: Circ.easeInOut
})

.to("#green",{
    height: "100%",
    top: 0,
    duration: .89,
    delay: -.9,
    ease: Circ.easeInOut
})

.to("#green",{
    height: "0%",
    top: 0,
    duration: .89,
    delay:-.4,
    ease: Circ.easeInOut,
    onComplete: function(){
        HomePage()
    }
})

}
loader()

function HomePage(){
    
    var tl = gsap.timeline()

    tl.to("#nav a",{
        y:0,
        opacity:1,
        stagger:.05,
        ease: Expo.easeInOut

    } )

    tl.to("#home .parent .child",{
        y: 0,
        stagger: .1,
        duration: 1.4,
        ease: Expo.easeInOut
        
    } )

    tl.to("#home .row img",{
        opacity: 1,
        delay:-0.5,
        ease: Expo.easeInOut
        
    } )
}

