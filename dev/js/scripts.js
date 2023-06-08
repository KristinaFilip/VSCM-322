import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools); MorphSVGPlugin


function museumAnimation(){
    let tl = gsap.timeline();

    tl.from("#m1-draw", {duration:1, drawSVG:"100%"})
    .from("#u1-draw", {duration:1, drawSVG:"100%"})
    .from("#s-draw", {duration:1, drawSVG:"100%"})
    .from("#u2-draw", {duration:1, drawSVG:"100%"})
    .from("#e1-draw", {duration:1, drawSVG:"100%"})
    .from("#e2-draw", {duration:1, drawSVG:"100%"})
    .from("m2-draw", {duration:1, drawSVG:"100%"})
}

function mutterAnimation(){
    let tl = gsap.timeline();

    tl.from("m", {duration:1, y:100})
}



let mainTl = gsap.timeline();
mainTl.add(museumAnimation())
.add(museumAnimation())

;



GSDevTools.create();




//const mainTl = gsap.timeline({id:"mainTl"});
//mainTl.from("#MÃ¼tter", {duration:1, drawSVG:"50%"})
//mainTl.from("#MÃ¼tter", {duration:1, morphSVG:"50%"})