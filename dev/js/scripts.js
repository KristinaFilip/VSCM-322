import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//TIMELINE

let mainTL = gsap.timeline({});

//FUNCTION 

//let imagesOne = document.querySelector(".images1");

function section1Ani (){
    let tl = gsap.timeline({});
    tl.to(".images1", {duration:1.5, ease:"power4.out", x:20}, 0)
    .from(".images1", {duration:1.5, alpha:0.25, scale:1.15}, 0)
    .to(".title1", {duration:1.5, ease:"power4.out", x:20}, 0)
    .from(".title1", {duration:1.5, alpha:0.25}, 0)

    return tl;
}

function section2Ani (){
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger: ".images2",
            start:"top 90%",
            end:"center 50%",
            scrub:true,
            markers:false

        }});
    tl.to(".images2", {duration:1.5, ease:"power4.out", x:20}, 0)
    .from(".images2", {duration:1.5, alpha:0.25, scale:1.15}, 0)
    .from(".FG1", {duration:1, rotation:20}, 0)
    .from(".FG2", {duration:1, rotation:-20}, 0)
    .from(".FG3", {duration:1, rotation:20}, 0)
    .to(".title2", {duration:1.5, ease:"power4.out", x:20}, 0)
    .from(".title2", {duration:1.5, alpha:0.25}, 0)

    return tl;
}
// Having the pictures rotate as you scroll by makes it look like if someone was carefully fixing the pictures to make it look organized. 

function section3Ani (){
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger: ".images3",
            start:"top 90%",
            end:"top 30%",
            scrub:true,
            markers:false
        }});
    tl.from(".images3", {duration:1.5, ease:"power4.out", x:-300}, 0)
    .from(".images3", {duration:1.5, alpha:0.25, scale:1.15}, 0)
    .to(".title3", {duration:1.5, ease:"power4.out", y:20}, 0)
    .from(".title3", {duration:1.5, alpha:0.25}, 0)

    return tl;
}
//The pictures that move from left to right as it scrolls to make it look as if someone is sliding you the photos to look at. 
//It also puts them into motion even though they are still photographs.

function section4Ani (){
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger: ".images4",
            start:"top 90%",
            end:"top 30%",
            scrub:true,
            markers:false
        }});
    tl.from(".images4", {duration:2, ease:"back.out(1.7)", x:300}, 0)
    .from(".images4", {duration:1.5, alpha:0.25, scale:1.15, rotation:-10}, 0)
    .to(".title4", {duration:1.5, ease:"power4.out", y:20}, 0)
    .from(".title4", {duration:1.5, alpha:0.25}, 0)

    return tl;
}
//The last section has the paintings swing in from right to left and slightly back out for a fun effect. 
//The pictures are more fun and colorful than the rest, so I wanted the scroll to have a more whimsical feel as it swings in.

//BUTTON LISTENERS
//imagesOne.addEventListener("mouseover",function(){
    //mainTL.play();

//})

mainTL.add(section1Ani(), 0)
.add(section2Ani(), 0)
.add(section3Ani(), 0)
.add(section4Ani(), 0)

;


//Timeline Controls
//tl.pause();
//tl.resume();
//tl.seek(1.5);
//tl.reverse();


//scrollTrigger
//scrollTrigger:{
//trigger: ".myClass"
//scrub:true, links timeline to scrollbar
//markers:true or false
//start
//end
//pin:".element" or true
//snap:
//}