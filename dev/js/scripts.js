import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//TIMELINE

let mainTL = gsap.timeline({});

//FUNCTION 

function section1Ani (){
    let tl = gsap.timeline({});
    tl.to(".images", {duration:1.5, ease:"power4.out", x:20})

    return tl;
}


mainTL.add(section1Ani(), 0)

;
