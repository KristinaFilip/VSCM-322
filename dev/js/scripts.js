//import { gsap } from "gsap";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
//import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools); //MorphSVGPlugin

const mainTl = gsap.timeline();

mainTl.from("darkblue-circle1", {duration:1, scale:0})
.to("darkblue-circle1", {duration:1, scale:100})


;



GSDevTools.create();
