import { gsap } from "gsap";

//Keywords - to store data

//var - stands for variable, older, avoid
//const new ES6 cannot be updated or re-declared
//let - also new to ES6 imporved var "block-scoped{}"
//const tweenDur = "0.5"; - stands for constant, does not change

// variable syntax = keyword, referenceName assignmentOperator, value;

//let tweenDur = "0.5";

//General Rules for reference name;
// 1. Names can contain letters, digits, underscores, and dollar signs.
// 2. Names must begin with a letter or can also begin with $ and _
// 3. Names are case sensitive (y and Y are different valuables)
// 4. Reserved words (like JavaScript keywords) cannot be used as names

//examples
// let TweenDuration = "0.5";
// let someElement = document.querySelector('.red-box');
// let allElementsWithClass = document.querySelectorAll('.box');
// let mainTl = gsap.timeline();

//GSAP

//gsap.to(target, {duration, vars, ease});
//example: gsap.set(".target", {x:200});
//example: gsap.to(."target", {duration:2, x:200});
//example: gsap.from(."target", {duration:2, scale:2, roation:180});

//.set - no duration, happens immediately
//.to - moves object to where you want it to go
//.from - starts from properties you input and then goes back to original

//let someTween = gsap.to(target", {duration:0.25, x:200});

//CSS

//example: gsap.to(."target", {duration:2, backgroundColor:"black"});

//Transforms = (rotation, scaleX, scaleY, skewX, skewY, x, y, rotationX, and rotationY, alpha, aytoalpha);
//Special Properties = duration, callbacks, delays, easing, staggers, repeat, yoyo, repeat, delay

//gsap.to(".element", {duration:1.5, ease:"power4.out", x:20})
//gsap.to(".button", {duration:1.5, ease:"bounce.out", x:20})
//gsap.from(".element", {scale:1.2})
//gsap.from(".hero-main", {duration: 2.5, scale: 1.15, alpha:0.10})
//gsap.from(".links", {duration:3, alpha:0.25})
//gsap.from(".logo", {scale:1.15, duration:1, alpha:0.25})

//TIMELINE

let mainTL = gsap.timeline({delay:1});

mainTL.to(".hero")
    .addLabel("myLabel","+=2")
    .to(".element", {duration:1.5, ease:"power4.out", x:20},"myLabel")
    .to(".button", {duration:1.5, ease:"bounce.out", x:20},"myLabel")
    .from(".element", {scale:1.2},"myLabel")
    .from(".hero-main", {duration: 2.5, scale: 1.15, alpha:0.10},"myLabel")

;


mainTL.to(".header")
    .from(".links", {duration:3, alpha:0.25})
    .from(".logo", {scale:1.15, duration:1, alpha:0.25})

;
