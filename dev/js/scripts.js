import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin, GSDevTools);
 

let mainTl = gsap.timeline({});

function logoAnimation(){
    let tl = gsap.timeline({});

    tl.from("darkblue-circle1", {duration:1, scale:2}, 0)

    return tl;

}

mainTl.add(logoAnimation(), 0)

;



GSDevTools.create();

