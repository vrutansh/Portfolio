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

function loader(){
    var tl = gsap.timeline();

tl
.from(".child span",{
    x: 100,
    stagger:.2,
    duration: 1.4,
    ease: Power3.easeInOut
})

.to(".parent .child",{
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
    ease: Circ.easeInOut
})

}

loader()

function HomePage(){
    gsap.set("#nav", {y : "-100%", opacity: 0 })
}

HomePage()