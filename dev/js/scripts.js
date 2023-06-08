import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MorphSVGPlugin);

let mainTl = gsap.timeline({});

function mutterAnimation(){
    let tl = gsap.timeline();

    tl.from("#mutter", {duration:2, alpha:0.25})
    .from("#m", {duration:2, y:30, ease:"power3.out"}, 0)
    .from("#u", {duration:2, x:-30, ease:"power3.out"}, 0)
    .from("#t1", {duration:2, x:30, ease:"power3.out"}, 0)
    .from("#t2", {duration:2, y:-30, ease:"power3.out"}, 0)
    .from("#e", {duration:2, y:-30, ease:"power3.out"}, 0)
    .from("#r", {duration:2, x:30, ease:"power3.out"}, 0)

    return tl;
}

function museumAnimation(){
    let tl = gsap.timeline({});

    tl.from("#m1-draw", {duration:1, drawSVG:"10%"}, 0)
    .from("#u1-draw", {duration:1, drawSVG:"10%"}, 0)
    .from("#s-draw", {duration:1, drawSVG:"10%"}, 0)
    .from("#u2-draw", {duration:1, drawSVG:"10%"}, 0)
    .from("#e1-draw", {duration:1, drawSVG:"10%"}, 0)
    .from("#e2-draw", {duration:1, drawSVG:"10%"}, 0)
    .from("#m2-draw", {duration:1, drawSVG:"10%"}, 0)

    return tl;
}

function brainAnimation(){
    let tl = gsap.timeline();

    tl.from("#brain", {duration:3, y:-20, alpha:0, ease:"power4.out"}, 0)
    .from("#brain", {duration:.8, scale:.95, transformOrigin: 'center', ease:"bounce.out", repeat:4}, 0)
    
    return tl;
}

function umlautAnimation(){
    let tl = gsap.timeline();

    tl.from("#umlautdown-1", {duration:2, y:"-=50", alpha:0, ease:"power4.out"}, 0)
    .from("#umlautdown-2", {duration:2, y:"-=50", alpha:0, ease:"power4.out"}, 0)
    .to("#umlautdown-1", {duration:1, ease:"power4.out", morphSVG:"#umlaut2"}, 1)
    .to("#umlautdown-2", {duration:1, ease:"power4.out", morphSVG:"#umlaut1"}, 1)


    return tl;
}


mainTl.add(museumAnimation(), 0)
.add(mutterAnimation(), 0)
.add(brainAnimation(), 1)
.add(umlautAnimation(), 0)

;



GSDevTools.create();

