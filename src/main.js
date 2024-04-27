const Typed = require("typed.js");
const element = new Typed("#message",{
       strings:["Hello there", "welcome to my personal page !!!"],
       typespeed: 30,
})

const inputEmail= document.getElementById("email");
const subsBtn= document.getElementById("subsBtn");
const confetti = require('canvas-confetti');

subsBtn.addEventListener("click",()=>{
    // const email = inputEmail.value;
    const myCanvas = document.createElement('canvas');
    myCanvas.style.width="100vw";
    myCanvas.style.height="100vh";
    myCanvas.style.position="fixed";
    myCanvas.style.inset= 0;
    myCanvas.style.zIndex= 9999;
    document.body.appendChild(myCanvas);
   const myConfetti = confetti.create(myCanvas, {
  resize: true, 
  particleCount:500,
   })
   myConfetti()
});


