import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin, GSDevTools);


let mainTl = gsap.timeline({});

function museumAnimation(){
    let tl = gsap.timeline({});

    tl.from("#m1-draw", {duration:1, drawSVG:"100%"}, 0)
    .from("#u1-draw", {duration:1, drawSVG:"100%"}, 0)
    .from("#s-draw", {duration:1, drawSVG:"100%"}, 0)
    .from("#u2-draw", {duration:1, drawSVG:"100%"}, 0)
    .from("#e1-draw", {duration:1, drawSVG:"100%"}, 0)
    .from("#e2-draw", {duration:1, drawSVG:"100%"}, 0)
    .from("m2-draw", {duration:1, drawSVG:"100%"}, 0)

    return tl;
}

function mutterAnimation(){
    let tl = gsap.timeline();

    tl.from("m", {duration:1, alpha:0.25})

    return tl;
}



mainTl.add(museumAnimation())
.add(mutterAnimation())

;



GSDevTools.create();