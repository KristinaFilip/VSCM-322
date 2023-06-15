import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin, GSDevTools);
 

let mainTl = gsap.timeline({});

function oneAnimation(){
    let tl = gsap.timeline({});

    tl.from("#blue-circle1", {duration:0.5, scale:0, transformOrigin: 'center', ease:"elastic.out(1, 0.5)"}, 0.1)
    .from("#yellow-circle1", {duration:0.5, scale:0, transformOrigin: 'center', ease:"elastic.out(1, 0.5)"}, 0.2)
    .from("#green-circle2", {duration:0.5, scale:0, transformOrigin: 'center', ease:"elastic.out(1, 0.5)"}, 0.3)
    .from("#darkblue-circle1", {duration:0.5, scale:0, transformOrigin: 'center', ease:"elastic.out(1, 0.5)"}, 0.4)
    .from("#blue-circle3", {duration:0.5, scale:0, transformOrigin: 'center', ease:"elastic.out(1, 0.5)"}, 0.5)
    .from("#darkblue-circle2", {duration:0.5, scale:0, transformOrigin: 'center', ease:"elastic.out(1, 0.5)"}, 0.6)
    .from("#red-circle1", {duration:0.5, scale:0, transformOrigin: 'center', ease:"elastic.out(1, 0.5)"}, 0.7)
    .from("#red-circle3", {duration:0.5, scale:0, transformOrigin: 'center', ease:"elastic.out(1, 0.5)"}, 0.8)
    .from("#green-circle1", {duration:0.5, scale:0, transformOrigin: 'center', ease:"elastic.out(1, 0.5)"}, 0.9)
    .from("#blue-bar2", {duration:0.3, scaleX:0, ease:"elastic.out(1, 0.5)"}, 1)
    .from("#red-bar2", {duration:0.3, scaleX:0, ease:"elastic.out(1, 0.5)"}, 1.1)
    .from("#blue-bar1", {duration:0.3, scaleX:0, ease:"elastic.out(1, 0.5)"}, 1.2)
    .from("#red-bar1", {duration:0.3, scaleX:0, ease:"elastic.out(1, 0.5)"}, 1.2)
    .from("#yellow-circle2", {duration:0.3, scale:0, transformOrigin: 'center', ease:"elastic.out(1, 0.5)"}, 1.3)
    .from("#yellow-bar", {duration:0.3, scaleX:0, ease:"elastic.out(1, 0.5)"}, 1.3)
    .from("#green-bar", {duration:0.3, scaleX:0, ease:"elastic.out(1, 0.5)"}, 1.2)
    .from("#darkblue-bar", {duration:0.3, scaleX:0, ease:"elastic.out(1, 0.5)"}, 1.4)

    return tl;

}


mainTl.add(oneAnimation())


;



GSDevTools.create();

