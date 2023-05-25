import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools); //MorphSVGPlugin

const mainTl = gsap.timeline();

mainTl.from("#Pet", {duration:1, drawSVG:"100%"})


;



GSDevTools.create();
