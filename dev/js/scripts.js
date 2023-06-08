import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin, GSDevTools);


let mainTl = gsap.timeline({});

function museumAnimation(){
    let tl = gsap.timeline({});

    tl.from("museum", {duration:0.5, drawSVG:"100%", ease:"power3.out"}, 0)
    .from("m1-draw", {duration:0.5, drawSVG:"100%"}, 0)
    .from("#u1-draw", {duration:0.5, drawSVG:"100%"}, 0)
    .from("#s-draw", {duration:0.5, drawSVG:"100%"}, 0)
    .from("#u2-draw", {duration:0.5, drawSVG:"100%"}, 0)
    .from("#e1-draw", {duration:0.5, drawSVG:"100%"}, 0)
    .from("#e2-draw", {duration:0.5, drawSVG:"100%"}, 0)
    .from("m2-draw", {duration:0.5, drawSVG:"100%"}, 0)

    return tl;
}

function mutterAnimation(){
    let tl = gsap.timeline();

    tl.to("mutter", {duration:.5, alpha:0.25})
    .from("m", {y:20, ease:"power3.out"})
    .from("u", {x:-20, ease:"power3.out"})
    .from("t1", {x:20, ease:"power3.out"})
    .from("t2", {y:-20, ease:"power3.out"})
    .from("e", {y:-20, ease:"power3.out"})
    .from("r", {x:20, ease:"power3.out"})

    return tl;
}

function brainAnimation(){
    let tl = gsap.timeline();

    tl.from("brain", {duration:0.5, y:-20, alpha:0, ease:"power4.out"})
    .to("brain", {duration:0.2, scale:1, ease:"power4.out"})

    return tl;
}

mainTl.add(museumAnimation(), 0)
.add(mutterAnimation(), 0)
.add(brainAnimation(), 0)

;



GSDevTools.create();