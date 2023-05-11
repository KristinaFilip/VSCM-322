import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//TIMELINE

let mainTL = gsap.timeline({});

//FUNCTION 

function section1Ani (){
    let tl = gsap.timeline({});
    tl.to(".images1", {duration:1.5, ease:"power4.out", x:20}, 0)
    .from(".images1", {duration:1.5, alpha:0.25}, 0)
    .to(".h1", {duration:1.5, ease:"power4.out", x:20}, 0)
    .from(".h1", {duration:1.5, alpha:0.25}, 0)

    return tl;
}


mainTL.add(section1Ani(), 0)

;
