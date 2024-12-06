let gameseq=[];
let userseq=[];
let btns = ["red", "yellow", "green", "purple"];

let start = false;
let level = 0;
let h2 = document.querySelector("h2");

// start game when user presses any key
document.addEventListener("keypress", function() {
  if(start == false){
    console.log("game is start" );
    start = true;


    levelUp();
  }
});


function btnFlash(btn){
  btn.classList.add("flash");
  setTimeout(function(){ 
    btn.classList.remove("flash");
  }, 250);
}
function userFlash(btn){
  btn.classList.add("userflash");
  setTimeout(function(){ 
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  level++;
  h2.innerText=`Level ${level}`;
  let randIdx= Math.floor(Math.random()*3);
  let randColor= btns[randIdx];
  let randBtn= document.querySelector(`.${randColor}`);
  console.log(randIdx);
  console.log(randColor);
  console.log(randBtn);
  btnFlash(randBtn);
}
function btnPress(){
  console.log(this);
  let btn= this;
  btnFlash(btn);
}
let allBtns= document.querySelectorAll(".btn");
for(btn of allBtns){
  btn.addEventListener("click", btnPress);
}