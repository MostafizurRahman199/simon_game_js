let gameSeq = [];
let userSeq = [];
let h2 = document.querySelector("h2");
let h1 = document.querySelector("h1");
let color = ["red", "yellow", "greenn", "blue"];

let started = false;
let level = 0;
let body = document.querySelector("body");
let score = 0;

h2.addEventListener("click", function(){
  h2.classList.remove("text-white");
  h1.classList.remove("text-white");

    if(started == false){

        console.log("game is started")
        started = true;
       
    }

    levelUp();

})



function btnFlash(randomBtn){

    randomBtn.classList.add("bg-white" , "shadow-2xl", "shadow-green");

  setTimeout(function(){
    randomBtn.classList.remove("bg-white", "shadow-2xl", "shadow-green");
  },250);

}

function userFlash(randomBtn){

    randomBtn.classList.add("bg-black" , "shadow-2xl", "shadow-green");

  setTimeout(function(){
    randomBtn.classList.remove("bg-black", "shadow-2xl", "shadow-green");
  },250);

}


function levelUp(){
  body.style.backgroundColor = "white";
    userSeq = []; 
    level++;
    h2.innerText =`Level ${level}`

    let randomIndex = Math.floor(Math.random()*4);
    let randomColor = color[randomIndex];
    let randomButton = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    
    // console.log(randomButton, randomColor, randomIndex);
    
    btnFlash(randomButton);

}

function checkAns(index){

  if(userSeq[index] === gameSeq[index]){
      if(userSeq.length == gameSeq.length){
        score++;
       setTimeout(levelUp, 1000);
      }
  }else{
    h2.innerText = `Game over! Press any key to start.`;
   
    body.style.backgroundColor = "red";
    reset(score);
  }

}

function btnPress(){
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    console.log(userColor);
    
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}


let Allbtns = document.querySelectorAll(".btnn");
for (btn of Allbtns){
    btn.addEventListener("click", btnPress)
}


function reset(score){
  level = 0;
  started = false;
  userSeq = [];
  gameSeq = [];
  h2.innerHTML = `Game over, Your score is ${score}, Press here to start again`;
  h2.classList.add("text-white");
  h1.classList.add("text-white");

  score=0;


}
