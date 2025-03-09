let gameSeq = [];
let userSeq = [];

let btns =["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game is started");
        started = true;

        levelUp();
    }
})

function gameFlash(btn){
   btn.classList.add("flash");
   setTimeout(function (){
      btn.classList.remove("flash");
   }, 250 );
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
       btn.classList.remove("userflash");
    }, 250 );
 }


function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randInx = Math.floor(Math.random() * 3);
    let randColor = btns[randInx];
    let randBtn = document.querySelector(`.${randColor}`);
    let btn = randBtn.getAttribute("id");
    gameSeq.push(btn);
    console.log(gameSeq);
    gameFlash(randBtn);   
}
    

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
          setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML = `Game Over! <b> Your score was ${level} </b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
     }

function btnPress (){
    let btn = this;;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns(userSeq.length - 1);
}

let allBtn = document.querySelectorAll(".btn");
for (btn of allBtn){
    btn.addEventListener("click", btnPress); 
    }

function reset(){
    gameSeq=[];
    userseq = [];
    started = false;
    level = 0;
}

